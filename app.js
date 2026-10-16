'use strict';

/* ------------------------------------------------------------------ helpers */

const app = document.getElementById('app');

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pad = n => String(n).padStart(2, '0');
const slugify = s => s.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const stripTags = s => s.replace(/<[^>]+>/g, ' ').replace(/\{\{([^}@]+)(@[\d.]+)?\}\}/g, '').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();
const LETTERS = 'ABCDEFGHIJ';
const DAY = 24 * 60 * 60 * 1000;

function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// localStorage can be unavailable (private mode, blocked storage) - never let that break the app
const store = {
    get(key, fallback) {
        try {
            const v = localStorage.getItem('study:' + key);
            return v ? JSON.parse(v) : fallback;
        } catch {
            return fallback;
        }
    },
    set(key, value) {
        try {
            localStorage.setItem('study:' + key, JSON.stringify(value));
        } catch { /* ignore */ }
    },
};

/* ------------------------------------------------------------------ data access */

const subjectById = id => STUDY.subjects.find(s => s.id === id);
const chapterList = subject => subject.units.flatMap((u, ui) => u.chapters.map(c => ({ ...c, unit: u.title, unitN: ui + 1 })));
const chapterMeta = (subject, n) => chapterList(subject).find(c => c.n === n);
const content = (subject, n) => (STUDY.chapters[subject.id] || {})[n];

const bookPageUrl = (subject, page) => `https://openstax.org/books/${subject.book.slug}/pages/${page}`;
const sectionUrl = (subject, num, title) => bookPageUrl(subject, slugify(`${num} ${title}`));
const chapterUrl = (subject, n) => bookPageUrl(subject, `${n}-introduction`);

function findSection(subject, num) {
    const ch = chapterMeta(subject, parseInt(num, 10));
    const s = ch && ch.sections.find(x => x[0] === num);
    return s ? { ch, num: s[0], title: s[1], page: s[2] } : null;
}

function questionsFor(subject, n) {
    const c = content(subject, n);
    if (!c || !c.quiz) return [];
    return c.quiz.map((q, i) => ({ ...q, id: `${subject.id}:${n}:q${i}`, subject: subject.id, ch: n }));
}

function cardsFor(subject, n, withTerms = true) {
    const c = content(subject, n);
    if (!c) return [];
    const cards = (c.cards || []).map((x, i) => ({
        front: x.f, back: x.b, ref: x.ref, id: `${subject.id}:${n}:c${i}`, subject: subject.id, ch: n,
    }));
    if (withTerms) {
        (c.terms || []).forEach(([term, def]) => cards.push({
            front: term, back: def, id: `${subject.id}:${n}:t:${slugify(term)}`, subject: subject.id, ch: n, term: true,
        }));
    }
    return cards;
}

/* ------------------------------------------------------------------ progress */

// qstat: { questionId: 1 | 0 } - result of the last attempt
// cards: { cardId: { box: 1-5, due: timestamp } } - Leitner boxes
// read:  { "subject:chapter": true }
const progress = {
    qstat: () => store.get('qstat', {}),
    recordAnswer(id, correct) {
        const s = this.qstat();
        s[id] = correct ? 1 : 0;
        store.set('qstat', s);
    },
    mistakes(subjectId) {
        const s = this.qstat();
        return Object.keys(s).filter(id => s[id] === 0 && (!subjectId || id.startsWith(subjectId + ':')));
    },
    chapterScore(subject, n) {
        const s = this.qstat();
        const qs = questionsFor(subject, n);
        const done = qs.filter(q => q.id in s);
        return { total: qs.length, done: done.length, correct: done.filter(q => s[q.id] === 1).length };
    },
    isRead: (subject, n) => !!store.get('read', {})[`${subject.id}:${n}`],
    setRead(subject, n, value) {
        const r = store.get('read', {});
        if (value) r[`${subject.id}:${n}`] = true;
        else delete r[`${subject.id}:${n}`];
        store.set('read', r);
    },
    cardState: () => store.get('cards', {}),
};

const BOX_DAYS = [0, 1, 2, 4, 8, 16];

function cardCounts(cards) {
    const state = progress.cardState();
    const now = Date.now();
    let due = 0, fresh = 0;
    for (const c of cards) {
        const st = state[c.id];
        if (!st) fresh++;
        else if (st.due <= now) due++;
    }
    return { due, fresh };
}

/* ------------------------------------------------------------------ keyboard */

// The quiz and card views install one key handler and one click handler at a time;
// route() clears them so a finished view never reacts to input on the next one.
let keyHandler = null;
let clickHandler = null;
document.addEventListener('keydown', e => {
    if (!keyHandler || e.ctrlKey || e.metaKey || e.altKey) return;
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
    keyHandler(e);
});
app.addEventListener('click', e => {
    if (clickHandler) clickHandler(e);
});

/* ------------------------------------------------------------------ router */

function parseHash() {
    const raw = location.hash.replace(/^#\/?/, '');
    const [path, query = ''] = raw.split('?');
    return {
        parts: path.split('/').filter(Boolean).map(decodeURIComponent),
        params: new URLSearchParams(query),
    };
}

function route() {
    const { parts, params } = parseHash();
    keyHandler = null;
    clickHandler = null;
    if (parts[0] === 'quiz') return viewQuizSetup(params);
    if (parts[0] === 'cards') return viewCardsSetup(params);
    const subject = parts[0] && subjectById(parts[0]);
    if (!subject) return viewHome();
    if (parts[1]) return viewChapter(subject, parseInt(parts[1], 10), parts[2]);
    return viewSubject(subject);
}

function render(html, { scroll = true } = {}) {
    app.innerHTML = html;
    if (scroll) window.scrollTo(0, 0);
}

/* ------------------------------------------------------------------ shared pieces */

function toolsHtml(subject) {
    const subjects = subject ? [subject] : STUDY.subjects;
    let qCount = 0;
    const cards = [];
    for (const s of subjects) {
        for (const c of chapterList(s)) {
            qCount += questionsFor(s, c.n).length;
            cards.push(...cardsFor(s, c.n));
        }
    }
    const { due, fresh } = cardCounts(cards);
    const mistakes = progress.mistakes(subject && subject.id).length;
    const q = subject ? `?s=${subject.id}` : '';
    return `
        <div class="tools">
            <a class="tool" href="#/quiz${q}">
                <span class="tool-icon" aria-hidden="true">?</span>
                <span><strong>Start a quiz</strong><small>${qCount} multiple-choice questions</small></span>
            </a>
            <a class="tool" href="#/cards${q}">
                <span class="tool-icon" aria-hidden="true">⇆</span>
                <span><strong>Revision cards</strong><small>${due} due · ${fresh} new</small></span>
            </a>
            ${mistakes ? `
            <a class="tool tool-warn" href="#/quiz${q ? q + '&' : '?'}mistakes=1">
                <span class="tool-icon" aria-hidden="true">!</span>
                <span><strong>Review mistakes</strong><small>${mistakes} question${mistakes === 1 ? '' : 's'} to retry</small></span>
            </a>` : ''}
        </div>`;
}

// Turns {{label}} into a link to the current section on OpenStax, {{label@12.1}} into a link to section 12.1
function renderRefs(html, subject, num) {
    return html.replace(/\{\{([^}@]+)(?:@([\d.]+))?\}\}/g, (m, label, target) => {
        const sec = findSection(subject, target || num);
        const url = sec ? sectionUrl(subject, sec.num, sec.title) : bookPageUrl(subject, '1-introduction');
        const title = sec ? `Open ${sec.num} ${sec.title} on OpenStax` : 'Open the book on OpenStax';
        return `<a class="ref" href="${url}" target="_blank" rel="noopener" title="${esc(title)}">${esc(label.trim())}</a>`;
    });
}

function refLinks(subject, ref) {
    const sec = ref && findSection(subject, ref);
    if (!sec) return '';
    return `<span class="ref-links">
        <a href="#/${subject.id}/${sec.ch.n}/${sec.num}">Notes ${sec.num}</a>
        <a class="ref" href="${sectionUrl(subject, sec.num, sec.title)}" target="_blank" rel="noopener">Book p. ${sec.page} ↗</a>
    </span>`;
}

function chapterPicker(subject, selected, countFn) {
    return subject.units.map((u, ui) => `
        <div class="pick-unit">
            <p class="pick-unit-title">Unit ${ui + 1} · ${esc(u.title)}</p>
            ${u.chapters.map(c => {
                const count = countFn(c.n);
                return `<label class="pick ${count ? '' : 'pick-empty'}">
                    <input type="checkbox" name="ch" value="${c.n}" ${count && selected.has(c.n) ? 'checked' : ''} ${count ? '' : 'disabled'}>
                    <span><b>${c.n}.</b> ${esc(c.title)}</span>
                    <small>${count || '—'}</small>
                </label>`;
            }).join('')}
        </div>`).join('');
}

function wirePicker(form, onChange) {
    form.addEventListener('click', e => {
        const b = e.target.closest('[data-pick]');
        if (!b) return;
        e.preventDefault();
        form.querySelectorAll('input[name=ch]:not(:disabled)').forEach(i => { i.checked = b.dataset.pick === 'all'; });
        onChange();
    });
    form.addEventListener('change', onChange);
}

function selectedChapters(params, subject) {
    const c = params.get('c');
    return new Set(c ? c.split(',').map(Number) : chapterList(subject).map(x => x.n));
}

/* ------------------------------------------------------------------ home */

function viewHome() {
    document.title = 'Nursing Study Notes';
    render(`
        <h1 class="page-title">Your subjects</h1>
        ${toolsHtml(null)}
        <ul class="subject-list">
            ${STUDY.subjects.map(s => {
                const chs = chapterList(s);
                const written = chs.filter(c => content(s, c.n)).length;
                const read = chs.filter(c => progress.isRead(s, c.n)).length;
                return `<li><a class="subject-card" href="#/${s.id}">
                    <span class="subject-title">${esc(s.title)}</span>
                    <span class="subject-sub">${esc(s.subtitle)} · ${esc(s.book.publisher)} <em>${esc(s.book.title)}</em></span>
                    <span class="meter" aria-hidden="true"><span style="width:${chs.length ? (read / chs.length) * 100 : 0}%"></span></span>
                    <span class="subject-meta">${read} of ${chs.length} chapters reviewed${written < chs.length ? ` · ${written} with notes` : ''}</span>
                </a></li>`;
            }).join('')}
        </ul>
    `);
}

/* ------------------------------------------------------------------ subject */

const searchIndex = {};

function buildIndex(subject) {
    if (searchIndex[subject.id]) return searchIndex[subject.id];
    const items = [];
    for (const ch of chapterList(subject)) {
        const c = content(subject, ch.n);
        if (!c) continue;
        for (const [num, title] of ch.sections) {
            const sec = c.sections && c.sections[num];
            if (!sec) continue;
            items.push({ ch: ch.n, num, label: `${num} ${title}`, text: stripTags((sec.key || []).join(' ') + ' ' + (sec.html || '')) });
        }
        for (const [term, def] of c.terms || []) {
            items.push({ ch: ch.n, num: null, label: term, text: def, term: true });
        }
    }
    return (searchIndex[subject.id] = items);
}

function snippet(text, q) {
    const i = text.toLowerCase().indexOf(q);
    const start = Math.max(0, i - 70);
    const raw = (start ? '…' : '') + text.slice(start, i + q.length + 110) + (i + q.length + 110 < text.length ? '…' : '');
    const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'ig');
    return esc(raw).replace(re, m => `<mark>${m}</mark>`);
}

function viewSubject(subject) {
    document.title = `${subject.title} · Nursing Study Notes`;
    render(`
        <nav class="crumbs"><a href="#/">Subjects</a></nav>
        <h1 class="page-title">${esc(subject.title)}</h1>
        <p class="lede">${esc(subject.subtitle)} · based on ${esc(subject.book.publisher)}
            <a href="https://openstax.org/details/books/${subject.book.slug}" target="_blank" rel="noopener"><em>${esc(subject.book.title)}</em> ↗</a></p>
        ${toolsHtml(subject)}
        <div class="search">
            <input type="search" id="search" placeholder="Search notes and key terms…" autocomplete="off" aria-label="Search notes and key terms">
        </div>
        <div id="results" hidden></div>
        <div id="toc">
            ${subject.units.map((u, ui) => `
                <h2 class="unit-title"><span>Unit ${ui + 1}</span> ${esc(u.title)}</h2>
                <ol class="chapter-list">
                    ${u.chapters.map(c => {
                        const has = !!content(subject, c.n);
                        const score = progress.chapterScore(subject, c.n);
                        const read = progress.isRead(subject, c.n);
                        return `<li><a href="#/${subject.id}/${c.n}" class="${has ? '' : 'is-empty'}">
                            <span class="ch-num">${c.n}</span>
                            <span class="ch-body">
                                <span class="ch-title">${esc(c.title)}</span>
                                <span class="ch-meta">${has
                                    ? `${c.sections.length} sections · ${score.total} questions${score.done ? ` · <b>${score.correct}/${score.done}</b> correct` : ''}`
                                    : 'Notes coming soon'}</span>
                            </span>
                            ${read ? '<span class="badge" title="Reviewed">✓</span>' : ''}
                        </a></li>`;
                    }).join('')}
                </ol>`).join('')}
        </div>
    `);

    const input = document.getElementById('search');
    const results = document.getElementById('results');
    const toc = document.getElementById('toc');
    let timer;
    input.addEventListener('input', () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            const q = input.value.trim().toLowerCase();
            toc.hidden = q.length >= 2;
            results.hidden = q.length < 2;
            if (q.length < 2) return;
            const hits = buildIndex(subject).filter(it => it.label.toLowerCase().includes(q) || it.text.toLowerCase().includes(q));
            // key terms whose name matches go first
            hits.sort((a, b) => (b.term && b.label.toLowerCase().includes(q)) - (a.term && a.label.toLowerCase().includes(q)));
            results.innerHTML = hits.length
                ? `<p class="muted">${hits.length} result${hits.length === 1 ? '' : 's'}</p><ul class="results">` + hits.slice(0, 40).map(h => `
                    <li><a href="#/${subject.id}/${h.ch}${h.num ? '/' + h.num : '/terms'}">
                        <span class="res-label">${h.term ? `<span class="pill">Key term · Ch ${h.ch}</span> ` : ''}${esc(h.label)}</span>
                        <span class="res-snip">${h.text.toLowerCase().includes(q) ? snippet(h.text, q) : esc(h.text.slice(0, 160))}</span>
                    </a></li>`).join('') + '</ul>'
                : `<p class="muted">No results for “${esc(input.value.trim())}”.</p>`;
        }, 150);
    });
}

/* ------------------------------------------------------------------ chapter */

function viewChapter(subject, n, target) {
    const meta = chapterMeta(subject, n);
    if (!meta) return viewSubject(subject);
    const c = content(subject, n);
    const list = chapterList(subject);
    const idx = list.findIndex(x => x.n === n);
    const prev = list[idx - 1], next = list[idx + 1];
    const mode = store.get('mode', 'full');
    const qs = questionsFor(subject, n).length;
    const cards = cardsFor(subject, n).length;
    const read = progress.isRead(subject, n);
    document.title = `${n}. ${meta.title} · Nursing Study Notes`;

    const body = !c
        ? `<div class="callout callout-info"><p>Notes for this chapter haven’t been written yet.
             You can <a href="${chapterUrl(subject, n)}" target="_blank" rel="noopener">read it on OpenStax ↗</a>.</p></div>`
        : `
        <div class="chapter-actions">
            <div class="seg" role="group" aria-label="View mode">
                <button type="button" data-mode="full" aria-pressed="${mode === 'full'}">Full notes</button>
                <button type="button" data-mode="quick" aria-pressed="${mode === 'quick'}">Quick review</button>
            </div>
            ${qs ? `<a class="btn" href="#/quiz?s=${subject.id}&c=${n}">Quiz · ${qs}</a>` : ''}
            ${cards ? `<a class="btn" href="#/cards?s=${subject.id}&c=${n}">Cards · ${cards}</a>` : ''}
        </div>

        <nav class="contents" aria-label="In this chapter">
            <p class="contents-title">In this chapter</p>
            <ol>
                ${meta.sections.map(([num, title]) => `<li><a href="#/${subject.id}/${n}/${num}"><span>${num}</span> ${esc(title)}</a></li>`).join('')}
                ${c.terms && c.terms.length ? `<li><a href="#/${subject.id}/${n}/terms"><span>★</span> Key terms</a></li>` : ''}
            </ol>
        </nav>

        <div class="notes-wrap ${mode === 'quick' ? 'quick' : ''}">
            ${c.intro ? `<div class="intro">${renderRefs(c.intro, subject, meta.sections[0][0])}</div>` : ''}
            ${meta.sections.map(([num, title, page]) => {
                const s = c.sections && c.sections[num];
                return `<section class="note-section" id="s-${num}">
                    <header class="sec-head">
                        <h2><span class="sec-num">${num}</span> ${esc(title)}</h2>
                        <a class="ref book-link" href="${sectionUrl(subject, num, title)}" target="_blank" rel="noopener">Book p. ${page} ↗</a>
                    </header>
                    ${!s ? '<p class="muted">Notes for this section are coming soon.</p>' : `
                    ${s.key && s.key.length ? `<div class="keypoints"><p class="kp-title">Must know</p><ul>${s.key.map(k => `<li>${renderRefs(k, subject, num)}</li>`).join('')}</ul></div>` : ''}
                    <div class="notes">${renderRefs(s.html || '', subject, num)}</div>`}
                </section>`;
            }).join('')}

            ${c.terms && c.terms.length ? `
            <section class="note-section" id="s-terms">
                <header class="sec-head"><h2><span class="sec-num">★</span> Key terms</h2></header>
                <dl class="terms">${c.terms.map(([t, d]) => `<div><dt>${esc(t)}</dt><dd>${esc(d)}</dd></div>`).join('')}</dl>
            </section>` : ''}
        </div>

        <div class="done-row">
            <button type="button" class="btn ${read ? '' : 'primary'}" data-act="read">${read ? '✓ Reviewed — undo' : 'Mark chapter as reviewed'}</button>
        </div>`;

    render(`
        <nav class="crumbs"><a href="#/">Subjects</a> › <a href="#/${subject.id}">${esc(subject.title)}</a></nav>
        <p class="eyebrow">Unit ${meta.unitN} · Chapter ${n}</p>
        <h1 class="page-title">${esc(meta.title)}</h1>
        <p class="lede">From p. ${meta.page} · <a href="${chapterUrl(subject, n)}" target="_blank" rel="noopener">Read the chapter on OpenStax ↗</a></p>
        ${body}
        <nav class="pager">
            ${prev ? `<a href="#/${subject.id}/${prev.n}"><small>← Chapter ${prev.n}</small>${esc(prev.title)}</a>` : '<span></span>'}
            ${next ? `<a class="next" href="#/${subject.id}/${next.n}"><small>Chapter ${next.n} →</small>${esc(next.title)}</a>` : '<span></span>'}
        </nav>
    `, { scroll: !target });

    // wide tables scroll inside their own box instead of stretching the page
    app.querySelectorAll('.notes table, .intro table').forEach(t => {
        const w = document.createElement('div');
        w.className = 'table-wrap';
        t.replaceWith(w);
        w.appendChild(t);
    });

    if (target) {
        const el = document.getElementById('s-' + target);
        if (el) requestAnimationFrame(() => el.scrollIntoView({ block: 'start' }));
        else window.scrollTo(0, 0);
    }

    app.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => {
        store.set('mode', b.dataset.mode);
        app.querySelector('.notes-wrap').classList.toggle('quick', b.dataset.mode === 'quick');
        app.querySelectorAll('[data-mode]').forEach(x => x.setAttribute('aria-pressed', x === b));
    }));
    const readBtn = app.querySelector('[data-act=read]');
    if (readBtn) readBtn.addEventListener('click', () => {
        const now = !progress.isRead(subject, n);
        progress.setRead(subject, n, now);
        readBtn.textContent = now ? '✓ Reviewed — undo' : 'Mark chapter as reviewed';
        readBtn.classList.toggle('primary', !now);
    });
}

/* ------------------------------------------------------------------ quiz */

function viewQuizSetup(params) {
    const subject = subjectById(params.get('s')) || STUDY.subjects[0];
    const back = params.get('s') ? `#/${subject.id}` : '#/';

    if (params.get('mistakes')) {
        const ids = new Set(progress.mistakes(params.get('s')));
        const qs = STUDY.subjects.flatMap(s => chapterList(s).flatMap(c => questionsFor(s, c.n))).filter(q => ids.has(q.id));
        return runQuiz(shuffle(qs), { mode: 'practice', back, title: 'Review mistakes' });
    }

    document.title = 'Quiz · Nursing Study Notes';
    const selected = selectedChapters(params, subject);
    const saved = store.get('quizPrefs', { count: '20', source: 'all', mode: 'practice' });
    const radio = (name, value, label, hint) => `
        <label class="radio"><input type="radio" name="${name}" value="${value}" ${saved[name] === value ? 'checked' : ''}>
        <span>${label}${hint ? `<small>${hint}</small>` : ''}</span></label>`;

    render(`
        <nav class="crumbs"><a href="${back}">← Back</a></nav>
        <h1 class="page-title">Start a quiz</h1>
        <p class="lede">${esc(subject.title)}</p>
        <form id="setup" class="setup">
            <fieldset>
                <legend>Chapters</legend>
                <div class="chip-row"><button class="chip" data-pick="all">Select all</button><button class="chip" data-pick="none">Clear</button></div>
                ${chapterPicker(subject, selected, n => questionsFor(subject, n).length)}
            </fieldset>
            <fieldset>
                <legend>How many questions?</legend>
                <div class="radio-row">
                    ${radio('count', '10', '10')}${radio('count', '20', '20')}${radio('count', '40', '40')}${radio('count', 'all', 'All')}
                </div>
            </fieldset>
            <fieldset>
                <legend>Questions from</legend>
                ${radio('source', 'all', 'Everything')}
                ${radio('source', 'book', 'Book review questions', 'The end-of-chapter questions from the textbook')}
                ${radio('source', 'app', 'Extra practice', 'Questions written for this app from the chapter text')}
            </fieldset>
            <fieldset>
                <legend>Mode</legend>
                ${radio('mode', 'practice', 'Practice', 'See the answer and explanation after each question')}
                ${radio('mode', 'exam', 'Exam', 'No feedback until the end')}
            </fieldset>
            <div class="setup-go">
                <button class="btn primary big" type="submit">Start quiz</button>
                <span id="avail" class="muted"></span>
            </div>
        </form>
    `);

    const form = document.getElementById('setup');
    const pool = () => {
        const fd = new FormData(form);
        const chs = fd.getAll('ch').map(Number);
        const source = fd.get('source');
        return chs.flatMap(n => questionsFor(subject, n)).filter(q => source === 'all' || (source === 'book') === (q.src === 'book'));
    };
    const update = () => {
        const n = pool().length;
        document.getElementById('avail').textContent = `${n} question${n === 1 ? '' : 's'} available`;
        form.querySelector('[type=submit]').disabled = n === 0;
    };
    wirePicker(form, update);
    update();

    form.addEventListener('submit', e => {
        e.preventDefault();
        const fd = new FormData(form);
        const prefs = { count: fd.get('count'), source: fd.get('source'), mode: fd.get('mode') };
        store.set('quizPrefs', prefs);
        let qs = shuffle(pool());
        if (prefs.count !== 'all') qs = qs.slice(0, Number(prefs.count));
        runQuiz(qs, { mode: prefs.mode, back, title: 'Quiz' });
    });
}

function runQuiz(questions, opts) {
    if (!questions.length) {
        return render(`
            <nav class="crumbs"><a href="${opts.back}">← Back</a></nav>
            <h1 class="page-title">${esc(opts.title)}</h1>
            <div class="callout callout-info"><p>Nothing to review — nice work.</p></div>`);
    }

    const state = {
        items: questions.map(q => ({ q, order: q.fixed ? q.o.map((_, i) => i) : shuffle(q.o.map((_, i) => i)), picked: new Set(), checked: false })),
        i: 0,
        map: false,
    };
    const isMulti = q => Array.isArray(q.a);
    const correctSet = q => new Set(isMulti(q) ? q.a : [q.a]);
    const isCorrect = it => {
        const want = correctSet(it.q);
        return want.size === it.picked.size && [...want].every(x => it.picked.has(x));
    };
    // exam mode must not give away right/wrong before the results screen
    const status = it => opts.mode === 'practice'
        ? (it.checked ? (isCorrect(it) ? 'ok' : 'bad') : '')
        : (it.picked.size ? 'done' : '');
    const STATUS_LABEL = { ok: 'correct', bad: 'wrong', done: 'answered', '': 'not answered' };

    function mapHtml() {
        const legend = opts.mode === 'practice'
            ? '<span><i class="ok"></i>Right</span><span><i class="bad"></i>Wrong</span><span><i></i>Not answered</span>'
            : '<span><i class="done"></i>Answered</span><span><i></i>Not answered</span>';
        return `<div class="qmap">
            <div class="qmap-grid">
                ${state.items.map((x, n) => `<button type="button" class="qmap-cell ${status(x)} ${n === state.i ? 'cur' : ''}" data-go="${n}"
                    aria-label="Question ${n + 1}, ${STATUS_LABEL[status(x)]}">${n + 1}</button>`).join('')}
            </div>
            <p class="qmap-legend muted">${legend}</p>
        </div>`;
    }

    function show() {
        const it = state.items[state.i];
        const { q } = it;
        const subject = subjectById(q.subject);
        const total = state.items.length;
        const last = state.i === total - 1;
        const reveal = it.checked && opts.mode === 'practice';
        const want = correctSet(q);

        render(`
            <div class="quiz-top">
                <button type="button" class="q-count" data-act="map" aria-expanded="${state.map}">Question ${state.i + 1} of ${total} ${state.map ? '▴' : '▾'}</button>
                <span class="pill">Ch ${q.ch} · ${q.src === 'book' ? 'Book' : 'Practice'}</span>
                <button type="button" class="link-btn" data-act="end">${opts.mode === 'exam' ? 'Finish' : 'End quiz'}</button>
            </div>
            <button type="button" class="qbar ${total > 40 ? 'dense' : ''}" data-act="map" aria-label="Show all questions">
                ${state.items.map((x, n) => `<span class="${status(x)} ${n === state.i ? 'cur' : ''}"></span>`).join('')}
            </button>
            ${state.map ? mapHtml() : ''}
            <h2 class="q-text">${esc(q.q)}</h2>
            ${isMulti(q) ? '<p class="hint">Select all that apply.</p>' : ''}
            <ol class="options">
                ${it.order.map((oi, pos) => {
                    let cls = it.picked.has(oi) ? 'picked' : '';
                    if (reveal) cls += want.has(oi) ? ' right' : it.picked.has(oi) ? ' wrong' : ' dim';
                    return `<li><button type="button" class="opt ${cls}" data-oi="${oi}" ${reveal ? 'disabled' : ''} aria-pressed="${it.picked.has(oi)}">
                        <span class="letter">${LETTERS[pos]}</span><span>${esc(q.o[oi])}</span>
                    </button></li>`;
                }).join('')}
            </ol>
            ${reveal ? `
            <div class="feedback ${isCorrect(it) ? 'ok' : 'bad'}">
                <p class="verdict">${isCorrect(it) ? 'Correct' : 'Not quite'}</p>
                ${q.why ? `<p>${esc(q.why)}</p>` : ''}
                ${refLinks(subject, q.ref)}
            </div>` : ''}
            <div class="quiz-nav">
                ${state.i > 0 ? '<button type="button" class="btn" data-act="prev">← Previous</button>' : '<span></span>'}
                ${opts.mode === 'practice' && !it.checked
                    ? `<button type="button" class="btn primary" data-act="check" ${it.picked.size ? '' : 'disabled'}>Check answer</button>`
                    : `<button type="button" class="btn primary" data-act="next" ${opts.mode === 'exam' && !it.picked.size ? 'disabled' : ''}>${last ? 'See results' : 'Next →'}</button>`}
            </div>
            <p class="kbd-hint muted">Keys: A–${LETTERS[it.order.length - 1]} to choose · Enter to continue · ← previous</p>
        `);
    }

    function go(n) {
        state.i = n;
        show();
    }

    function pick(oi) {
        const it = state.items[state.i];
        if (it.checked && opts.mode === 'practice') return;
        if (isMulti(it.q)) {
            it.picked.has(oi) ? it.picked.delete(oi) : it.picked.add(oi);
        } else {
            it.picked = new Set([oi]);
            // single-answer practice questions are checked immediately
            if (opts.mode === 'practice') return check();
        }
        // in an exam, jumping around with the question map shouldn't lose a picked answer
        if (opts.mode === 'exam') it.checked = it.picked.size > 0;
        show();
    }

    function check() {
        const it = state.items[state.i];
        if (!it.picked.size) return;
        it.checked = true;
        progress.recordAnswer(it.q.id, isCorrect(it));
        show();
    }

    function next() {
        const it = state.items[state.i];
        if (opts.mode === 'exam') {
            if (!it.picked.size) return;
            it.checked = true;
        }
        if (state.i < state.items.length - 1) {
            state.i++;
            show();
        } else {
            finish();
        }
    }

    function finish() {
        keyHandler = null;
        clickHandler = null;
        const answered = state.items.filter(it => it.checked);
        if (opts.mode === 'exam') answered.forEach(it => progress.recordAnswer(it.q.id, isCorrect(it)));
        const right = answered.filter(isCorrect).length;
        const pct = answered.length ? Math.round((right / answered.length) * 100) : 0;
        const missed = answered.filter(it => !isCorrect(it));

        const byCh = {};
        for (const it of answered) {
            const b = byCh[it.q.ch] = byCh[it.q.ch] || { right: 0, total: 0 };
            b.total++;
            if (isCorrect(it)) b.right++;
        }

        const review = it => {
            const subject = subjectById(it.q.subject);
            const want = correctSet(it.q);
            return `<li class="review-item ${isCorrect(it) ? 'ok' : 'bad'}">
                <p class="review-q"><span class="pill">Ch ${it.q.ch}</span> ${esc(it.q.q)}</p>
                <ul class="review-opts">
                    ${it.order.map(oi => `<li class="${want.has(oi) ? 'right' : it.picked.has(oi) ? 'wrong' : ''}">
                        ${want.has(oi) ? '✓' : it.picked.has(oi) ? '✗' : '·'} ${esc(it.q.o[oi])}</li>`).join('')}
                </ul>
                ${it.q.why ? `<p class="review-why">${esc(it.q.why)}</p>` : ''}
                ${refLinks(subject, it.q.ref)}
            </li>`;
        };

        render(`
            <nav class="crumbs"><a href="${opts.back}">← Back</a></nav>
            <div class="score">
                <p class="score-num">${pct}%</p>
                <p>${right} of ${answered.length} correct${answered.length < state.items.length ? ` · ${state.items.length - answered.length} skipped` : ''}</p>
            </div>
            ${Object.keys(byCh).length > 1 ? `
            <table class="by-ch">
                <thead><tr><th>Chapter</th><th>Score</th></tr></thead>
                <tbody>${Object.entries(byCh).map(([ch, b]) => `<tr><td>Chapter ${ch}</td><td>${b.right}/${b.total}</td></tr>`).join('')}</tbody>
            </table>` : ''}
            <div class="chip-row center">
                ${missed.length ? '<button type="button" class="btn primary" data-act="retry">Retry the ones I missed</button>' : ''}
                <a class="btn" href="${opts.back}">Done</a>
            </div>
            ${missed.length ? `<h2 class="sub-title">Questions you missed</h2><ol class="review">${missed.map(review).join('')}</ol>` : ''}
            ${answered.length > missed.length ? `
            <details class="review-all"><summary>Show the ones you got right (${answered.length - missed.length})</summary>
                <ol class="review">${answered.filter(isCorrect).map(review).join('')}</ol>
            </details>` : ''}
        `);
        const retry = app.querySelector('[data-act=retry]');
        if (retry) retry.addEventListener('click', () => runQuiz(shuffle(missed.map(it => it.q)), opts));
    }

    clickHandler = e => {
        const opt = e.target.closest('.opt');
        if (opt) return pick(Number(opt.dataset.oi));
        const cell = e.target.closest('[data-go]');
        if (cell) {
            state.map = false;
            return go(Number(cell.dataset.go));
        }
        const act = e.target.closest('[data-act]');
        if (!act) return;
        if (act.dataset.act === 'check') check();
        if (act.dataset.act === 'next') next();
        if (act.dataset.act === 'prev' && state.i > 0) go(state.i - 1);
        if (act.dataset.act === 'map') { state.map = !state.map; show(); }
        if (act.dataset.act === 'end') finish();
    };

    keyHandler = e => {
        const it = state.items[state.i];
        const k = e.key.toUpperCase();
        const pos = LETTERS.indexOf(k);
        if (pos >= 0 && pos < it.order.length && k.length === 1) {
            e.preventDefault();
            pick(it.order[pos]);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (opts.mode === 'practice' && !it.checked) check();
            else next();
        } else if (e.key === 'ArrowLeft' && state.i > 0) {
            e.preventDefault();
            go(state.i - 1);
        }
    };

    show();
}

/* ------------------------------------------------------------------ revision cards */

function viewCardsSetup(params) {
    const subject = subjectById(params.get('s')) || STUDY.subjects[0];
    const back = params.get('s') ? `#/${subject.id}` : '#/';
    const selected = selectedChapters(params, subject);
    const saved = store.get('cardPrefs', { count: '20', terms: true });
    document.title = 'Revision cards · Nursing Study Notes';

    render(`
        <nav class="crumbs"><a href="${back}">← Back</a></nav>
        <h1 class="page-title">Revision cards</h1>
        <p class="lede">Tap a card to see the answer, then choose:</p>
        <ul class="card-rules">
            <li><strong>Again</strong> sends the card to the end of this session so you see it once more, and it comes up early in your next session.</li>
            <li><strong>Got it</strong> means the card won’t come back this session. It returns in 1 day, then 2, 4, 8 and 16 days as you keep getting it right.</li>
            <li><strong>← Previous</strong> goes back to the last card if you tapped the wrong button.</li>
        </ul>
        <form id="setup" class="setup">
            <fieldset>
                <legend>Chapters</legend>
                <div class="chip-row"><button class="chip" data-pick="all">Select all</button><button class="chip" data-pick="none">Clear</button></div>
                ${chapterPicker(subject, selected, n => cardsFor(subject, n).length)}
            </fieldset>
            <fieldset>
                <legend>Options</legend>
                <label class="radio"><input type="checkbox" name="terms" ${saved.terms ? 'checked' : ''}>
                    <span>Include key-term cards<small>Term on the front, the book’s definition on the back</small></span></label>
                <div class="radio-row">
                    ${['20', '40', 'all'].map(v => `<label class="radio"><input type="radio" name="count" value="${v}" ${saved.count === v ? 'checked' : ''}><span>${v === 'all' ? 'All' : v} cards</span></label>`).join('')}
                </div>
            </fieldset>
            <div class="setup-go">
                <button class="btn primary big" type="submit">Start</button>
                <span id="avail" class="muted"></span>
            </div>
        </form>
    `);

    const form = document.getElementById('setup');
    const pool = () => {
        const fd = new FormData(form);
        return fd.getAll('ch').map(Number).flatMap(n => cardsFor(subject, n, fd.get('terms') === 'on'));
    };
    const update = () => {
        const cards = pool();
        const { due, fresh } = cardCounts(cards);
        document.getElementById('avail').textContent = `${due} due · ${fresh} new · ${cards.length} total`;
        form.querySelector('[type=submit]').disabled = cards.length === 0;
    };
    wirePicker(form, update);
    update();

    form.addEventListener('submit', e => {
        e.preventDefault();
        const fd = new FormData(form);
        const prefs = { count: fd.get('count'), terms: fd.get('terms') === 'on' };
        store.set('cardPrefs', prefs);
        const cards = pool();
        const state = progress.cardState();
        const now = Date.now();
        const due = shuffle(cards.filter(c => state[c.id] && state[c.id].due <= now)).sort((a, b) => state[a.id].box - state[b.id].box);
        const fresh = shuffle(cards.filter(c => !state[c.id]));
        let queue = [...due, ...fresh];
        // nothing scheduled for today - let them practise anyway
        if (!queue.length) queue = shuffle(cards);
        if (prefs.count !== 'all') queue = queue.slice(0, Number(prefs.count));
        runCards(queue, back);
    });
}

function runCards(queue, back) {
    let i = 0, flipped = false, known = 0, again = 0;
    const requeued = new Set();
    // one entry per graded card, so "Previous" can take the grade back
    const history = [];
    const prevBtn = label => history.length ? `<button type="button" class="btn" data-act="prev">← ${label}</button>` : '';

    function show() {
        if (i >= queue.length) return finish();
        keyHandler = onKey;
        const card = queue[i];
        const subject = subjectById(card.subject);
        render(`
            <div class="quiz-top">
                <span>Card ${i + 1} of ${queue.length}</span>
                <span class="pill">Ch ${card.ch}${card.term ? ' · Key term' : ''}</span>
                <button type="button" class="link-btn" data-act="end">End</button>
            </div>
            <div class="bar" aria-hidden="true"><span style="width:${(i / queue.length) * 100}%"></span></div>
            <button type="button" class="flashcard ${flipped ? 'flipped' : ''}" data-act="flip" aria-live="polite">
                <span class="fc-side">${flipped ? 'Answer' : card.term ? 'Define' : 'Question'}</span>
                <span class="fc-front">${esc(card.front)}</span>
                ${flipped ? `<span class="fc-back">${esc(card.back)}</span>` : '<span class="fc-tap">Tap to show the answer</span>'}
            </button>
            ${flipped && card.ref ? `<div class="fc-ref">${refLinks(subject, card.ref)}</div>` : ''}
            <div class="fc-actions ${flipped ? '' : 'waiting'}">
                <button type="button" class="btn again" data-act="again">Again</button>
                <button type="button" class="btn primary" data-act="good">Got it</button>
            </div>
            <div class="quiz-nav">${prevBtn('Previous')}</div>
            <p class="kbd-hint muted">Keys: Space to flip · 1 Again · 2 Got it · ← previous</p>
        `, { scroll: false });
    }

    function grade(good) {
        const card = queue[i];
        const st = progress.cardState();
        const before = st[card.id];
        const cur = before || { box: 0 };
        const box = good ? Math.min(cur.box + 1, 5) : 1;
        st[card.id] = { box, due: Date.now() + (good ? BOX_DAYS[box] * DAY : 0) };
        store.set('cards', st);
        let pushed = false;
        if (good) known++;
        else {
            again++;
            // show a missed card once more at the end of the session
            if (!requeued.has(card.id)) {
                requeued.add(card.id);
                queue.push(card);
                pushed = true;
            }
        }
        history.push({ id: card.id, before, good, pushed });
        i++;
        flipped = false;
        show();
    }

    // Steps back one card and cancels its grade, so it can be graded again.
    function undo() {
        const last = history.pop();
        if (!last) return;
        const st = progress.cardState();
        if (last.before) st[last.id] = last.before;
        else delete st[last.id];
        store.set('cards', st);
        if (last.good) known--;
        else {
            again--;
            // grades are undone newest first, so the copy this grade added is still the last one
            if (last.pushed) {
                queue.pop();
                requeued.delete(last.id);
            }
        }
        i--;
        flipped = true;
        show();
    }

    function finish() {
        keyHandler = null;
        render(`
            <nav class="crumbs"><a href="${back}">← Back</a></nav>
            <div class="score">
                <p class="score-num">Done</p>
                <p>${known} got it · ${again} marked “again”</p>
            </div>
            <div class="chip-row center">
                ${prevBtn('Previous card')}
                <a class="btn primary" href="${back}">Finish</a>
            </div>`);
    }

    clickHandler = e => {
        const act = e.target.closest('[data-act]');
        if (!act) return;
        const a = act.dataset.act;
        if (a === 'flip') { flipped = !flipped; show(); }
        if (a === 'good' && flipped) grade(true);
        if (a === 'again' && flipped) grade(false);
        if (a === 'prev') undo();
        if (a === 'end') finish();
    };

    function onKey(e) {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            if (!flipped) { flipped = true; show(); } else grade(true);
        } else if (flipped && e.key === '1') grade(false);
        else if (flipped && e.key === '2') grade(true);
        else if (e.key === 'ArrowLeft' && history.length) {
            e.preventDefault();
            undo();
        }
    }

    window.scrollTo(0, 0);
    show();
}

/* ------------------------------------------------------------------ boot */

function loadScript(src) {
    return new Promise(resolve => {
        const s = document.createElement('script');
        s.src = src;
        s.onload = () => resolve(true);
        s.onerror = () => resolve(false);
        document.head.appendChild(s);
    });
}

async function boot() {
    const jobs = [];
    for (const s of STUDY.subjects) {
        for (const c of chapterList(s)) jobs.push(loadScript(`data/${s.id}/ch${pad(c.n)}.js`));
    }
    await Promise.all(jobs);
    window.addEventListener('hashchange', route);
    route();
}

const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => { toTop.hidden = window.scrollY < 900; }, { passive: true });
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => { /* offline support is optional */ });
}

boot();
