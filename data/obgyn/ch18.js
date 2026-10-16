STUDY.addChapter('obgyn', {
    n: 18,
    intro: `<p>Nursing care through the <strong>four stages of labor</strong>: triage and admission, monitoring the laboring person and fetus, comfort, pushing, birth preparation, placenta and uterotonics, and the critical fourth stage (hemorrhage prevention, bonding, breast-feeding). {{Chapter intro · p. 771}}</p>
<div class="callout tip"><span class="callout-title">Assessment frequency cheat sheet</span>
<table>
    <thead><tr><th>Stage</th><th>Maternal vitals</th><th>FHR (low risk / risk or oxytocin)</th></tr></thead>
    <tbody>
        <tr><td>1st, early</td><td>Every 1 h</td><td>Provider discretion (&lt; 4 cm); 4–5 cm: every 30 / every 15 min</td></tr>
        <tr><td>1st, active</td><td>Every 1 h</td><td>Every 30 / every 15 min</td></tr>
        <tr><td>2nd</td><td>Every 30 min; temp every 4 h (intact) or 1 h (ROM/febrile)</td><td>Every 5–15 min</td></tr>
        <tr><td>3rd</td><td>Every 15 min; temp every 1 h</td><td>Newborn: Apgar at 1 and 5 min</td></tr>
        <tr><td>4th</td><td>Every 15 min × 1 h, every 30 min × 1 h, then hourly</td><td>Fundus, lochia, perineum on the same schedule</td></tr>
    </tbody>
</table></div>`,
    sections: {
        '18.1': {
            key: [
                '<strong>Obstetric triage</strong> (≥ 16 weeks, or ≥ 20 by policy): symptoms, focused exam, <strong>EDD</strong> (gestational age), G/TPAL, vitals (BP → preeclampsia; temp + pulse → infection), FHR and contractions, notify the provider.',
                'True labor: regular contractions that get closer, longer and stronger, with <strong>cervical change</strong>; bloody show; ROM. Review prenatal record: labs (Rh, GBS, rubella, HIV, hep B, STIs, GDM), placenta location, surgeries (uterine/cervical), anesthesia history.',
                'ROM: note <strong>time, color, odor, amount</strong>. Clear = normal; green/yellow = <strong>meconium</strong>; bloody = previa/abruption. <strong>No vaginal exam</strong> with bleeding or known previa (and deferred in preterm labor for fetal fibronectin).',
                'Sterile vaginal exam: dilation (cm), effacement (2 cm long = 0%, paper thin = 100%), position (posterior/mid/anterior), presentation, station, fetal position. Limit exams (infection, ROM, edema).',
                'First stage: vitals hourly; FHR every 30 min (low risk) or 15 min (risk factors/oxytocin) in active labor; pain hourly; emotional response continuous. Encourage <strong>upright positions, movement</strong>, hydration, voiding; avoid supine.',
                'Amniotomy: consent witnessed, supplies, FHR before and after, <strong>fluid color/odor</strong>, document time. Nursing care that lowers cesarean rates: continuous support, mobility, nonpharmacologic pain relief, judicious EFM, fewer cervical checks.',
            ],
            html: `
<p>Care depends on labor progress, the person’s ability to meet physical and psychosocial demands, and fetal adaptation, following standards of care from admission through postpartum. {{p. 772}}</p>
<div class="callout tip"><span class="callout-title">Case: Brianne, 36, G1P0, induction at 39 weeks {{p. 772}}</span><p>Diet-controlled GDM, possible macrosomia (fundal height 40 cm), A negative, rubella nonimmune, <strong>GBS positive</strong> (urine), <strong>penicillin allergy</strong>. Risk factors for labor complications: GDM, age 36, GBS status (needs non-penicillin intrapartum antibiotics), Rh negative (RhoGAM if baby Rh positive). Normal BP and EFW of 3,150 g at 36 weeks are not risk factors. Oxytocin 15 units/250 mL LR: start 2 milliunits/min, ↑ 2 every 30 min to max 20.</p></div>

<h3>Obstetric triage {{p. 773}}</h3>
<ul>
    <li>Rapid assessment and prioritization for pregnancy-related needs at <strong>≥ 16 weeks</strong> (many facilities send &lt; 20 weeks to the ED). Emergencies: new <strong>bleeding</strong>, <strong>↓ fetal movement</strong>, abdominal pain, swelling, <strong>high BP</strong>. False labor → discharge with instructions. {{p. 774}}</li>
    <li>Nurse: presenting symptoms, focused exam, pregnancy information, <strong>vital signs</strong>, <strong>FHR and contractions</strong> (Leopold’s to place monitors); notify the patient’s provider (or a hospital-based provider).</li>
    <li>Establish the <strong>EDD</strong> early (gestational age guides decisions) and the obstetric history (G/TPAL).</li>
    <li>Red flags: <strong>elevated BP</strong> (preeclampsia/eclampsia); <strong>fever + tachycardia</strong> (infection).</li>
    <li><strong>Prenatal record</strong>: review medical/surgical history and labs; if unavailable, a full interview and labs; always confirm with the patient. Discuss obstetric history <strong>in private</strong>.</li>
</ul>
<table>
    <thead><tr><th>Assessment</th><th>True labor findings {{Table 18.1 · p. 775}}</th></tr></thead>
    <tbody>
        <tr><td>Contractions</td><td>Regular, progressively closer, <strong>30–60 s</strong>, increasingly intense</td></tr>
        <tr><td>Cervix</td><td>Dilating and effacing</td></tr>
        <tr><td>Progression</td><td>Change in contractions, dilation and effacement over time</td></tr>
        <tr><td>Membranes</td><td>Fluid in/leaking from the vagina (inspection or tests)</td></tr>
        <tr><td>Bloody show</td><td>Small bloody mucus discharge as the cervix dilates</td></tr>
        <tr><td>Pain</td><td>More painful, rhythmic than Braxton Hicks; causes cervical change</td></tr>
        <tr><td>Other</td><td>Urge to push, low back/pelvic pressure, bowel changes</td></tr>
    </tbody>
</table>

<h3>Admission history {{p. 775}}</h3>
<ul>
    <li><strong>Medical</strong>: preexisting and pregnancy conditions; ultrasound (<strong>placental location</strong>, fetal position, anomalies); medications and <strong>last dose</strong>; labs: CBC, <strong>blood type and antibody screen</strong>, rubella, hepatitis B/C, HIV, STIs; start <strong>GDM protocol</strong> if diagnosed.</li>
    <li><strong>Surgical</strong>: previous cesareans, abdominal/uterine surgery, cervical procedures (punch/cone biopsy → scarring); <strong>anesthesia complications</strong>. {{p. 776}}</li>
    <li><strong>OB/GYN</strong>: prior pregnancies and complications; fibroids, cerclage, cytology; STIs this pregnancy: treated? partners treated? <strong>test of cure</strong>? → report to the provider and newborn team.</li>
    <li><strong>Psychosocial</strong>: housing, transport, phone, utilities, support persons, preparation, newborn-care knowledge, <strong>safety at home</strong>, <strong>depression risk</strong>.</li>
    <li><strong>Genetic</strong> (both biological parents): Down syndrome, CF, sickle cell, Tay-Sachs, <strong>hemophilia</strong> and other bleeding/clotting disorders (↑ labor morbidity), NTDs, congenital heart defects; notify the team. {{p. 777}}</li>
</ul>

<h3>Admission physical exam {{p. 777}}</h3>
<ul>
    <li><strong>General survey</strong>: appearance, behavior.</li>
    <li><strong>Heart, lungs, extremities</strong>: dependent edema can be normal; <strong>generalized edema</strong> (face, hands) with headache or visual changes → check <strong>DTRs and clonus</strong> (preeclampsia), report.</li>
    <li><strong>Obstetric exam</strong>: FHR and contractions; <strong>membrane status</strong> (report of gush, pooling, ferning/pH). Document <strong>time of ROM, color, odor</strong>: <strong>clear</strong> = expected; <strong>green/yellow</strong> = meconium; <strong>bloody</strong> = previa or abruption.</li>
    <li><strong>Vaginal exam</strong>: dilation, effacement, position, station, presenting part and position. <strong>Defer</strong> in preterm labor (fetal fibronectin first), with <strong>vaginal bleeding or known placenta previa</strong>.</li>
    <li>Risks of (frequent) vaginal exams: <strong>infection</strong> (UTI, chorioamnionitis), unintended ROM, pain and anxiety, cervical edema and bleeding. {{p. 778}}</li>
</ul>
<div class="callout nurse"><span class="callout-title">Performing a sterile vaginal exam {{p. 778}}</span><p>Explain and get consent (trauma-informed); drape; <strong>sterile glove on the dominant hand</strong>; lubricate index and middle fingers; warn of pressure; locate the cervix. <strong>Dilation</strong>: side-to-side opening in cm. <strong>Effacement</strong>: 2 cm long = 0%, paper-thin = 100%. <strong>Position</strong>: posterior (toward the back), mid, anterior. Then <strong>presentation</strong> (cephalic/breech), <strong>station</strong> (relative to ischial spines), <strong>fetal position</strong> (occiput or sacrum vs. maternal pelvis).</p></div>

<h3>Monitoring in the first stage {{p. 778}}</h3>
<table>
    <thead><tr><th>Data</th><th>Early phase</th><th>Active phase {{Table 18.2 · p. 779}}</th></tr></thead>
    <tbody>
        <tr><td>Vital signs</td><td>Every 1 h</td><td>Every 1 h</td></tr>
        <tr><td>Contractions</td><td>Every 15–60 min or continuous (by risk), same interval as FHR</td><td>Every 15 min or continuous</td></tr>
        <tr><td>Labor progress</td><td>As indicated (behavior, contraction or FHR change)</td><td>As indicated (+ pressure)</td></tr>
        <tr><td>Pain</td><td>Hourly/PRN</td><td>Hourly/PRN</td></tr>
        <tr><td>Emotional response</td><td>Continuous</td><td>Continuous</td></tr>
    </tbody>
</table>
<p><strong>FHR</strong> {{Table 18.3 · p. 779}}: &lt; 4 cm at provider discretion; 4–5 cm and ≥ 6 cm: <strong>every 30 min</strong> low risk without oxytocin, <strong>every 15 min</strong> with risk factors or oxytocin. Risk factors → continuous monitoring for prompt intrauterine resuscitation. Most first-stage complications involve FHR changes and abnormal progress. {{p. 780}}</p>

<h3>Interventions in the first stage {{p. 780}}</h3>
<ul>
    <li><strong>Position changes and ambulation</strong>; supine → vena cava compression and hypotension. Upright positions: shorter labor, fewer interventions, less pain, gravity helps.</li>
</ul>
<table>
    <thead><tr><th>Fetal position/station</th><th>Suggested positions {{Table 18.4 · p. 781}}</th></tr></thead>
    <tbody>
        <tr><td>OA (favorable)</td><td>Walk, sway, rock; lunges (with twist); pelvic tilts</td></tr>
        <tr><td><strong>OP</strong></td><td><strong>Hands and knees</strong>, rocking on all fours, <strong>rebozo sifting</strong>, side-lying release</td></tr>
        <tr><td>OT/asynclitic</td><td>Walk, sway; side-lying release with a peanut ball; avoid flat on back; rebozo</td></tr>
        <tr><td>High station (above 0)</td><td>Walk/sway, bounce or circle on a birthing ball, lunges, side-lying</td></tr>
        <tr><td>Low station, not progressing</td><td>Supported squats, squat bar, standing, hands and knees with rocking</td></tr>
        <tr><td>At the outlet (crowning)</td><td>Squat, kneel, hands and knees; controlled, slow, supported pushing {{p. 782}}</td></tr>
    </tbody>
</table>
<ul>
    <li><strong>Breathing and relaxation</strong>: distract from pain, relax the pelvis, maintain oxygenation.</li>
    <li><strong>Emotional support</strong>: answer questions, explain expected progress, plan care together, discuss barriers to the birth plan, explain every change.</li>
    <li><strong>Pain relief</strong>: nonpharmacologic support (positioning, ambiance, managing visitors) or obtain orders, give and monitor analgesia; position and monitor for epidurals. {{p. 783}}</li>
</ul>
<div class="callout nurse"><span class="callout-title">Assisting with amniotomy (AROM) {{p. 783}}</span><p><strong>Witness consent</strong> · supplies (sterile gloves, <strong>amniotomy hook</strong>, drapes, absorbent pads) · position (usually lithotomy) · assist the provider’s exam · fluid released slowly · assess fluid <strong>color, odor, meconium</strong> · monitor <strong>contractions and FHR before and after</strong> (watch for cord prolapse/decels) · comfort · <strong>document</strong> date, time, provider, fluid, maternal and fetal status · keep hydrated, continue assessments.</p></div>
<ul>
    <li><strong>Education</strong>: explain what is happening, why fetal monitoring is used, stages of labor, pain options, positions, hydration, pushing and who will be at the birth. {{p. 784}}</li>
</ul>
<table>
    <thead><tr><th>Nursing care that lowers cesarean rates {{Table 18.5 · p. 784}}</th></tr></thead>
    <tbody>
        <tr><td><strong>Continuous labor support</strong> (emotional, comfort, encouragement)</td></tr>
        <tr><td><strong>Mobility and frequent position changes</strong> (walking, swaying, ball)</td></tr>
        <tr><td><strong>Nonpharmacologic pain relief</strong> (relaxation, massage, warm compresses, hydrotherapy)</td></tr>
        <tr><td><strong>Judicious</strong> IA or EFM to detect real distress and avoid unnecessary cesareans</td></tr>
        <tr><td>Cervical exams at appropriate intervals, <strong>avoiding unnecessary checks</strong></td></tr>
        <tr><td>Promote <strong>physiologic birth</strong> (spontaneous onset, avoid unnecessary interventions)</td></tr>
    </tbody>
</table>
<div class="callout warn"><span class="callout-title">Adoption {{p. 785}}</span><p>The patient may change their mind repeatedly; support every decision. With a prearranged plan, clarify beforehand whether adoptive parents will be present and whether the patient wants to see, hold or do skin-to-skin with the baby. No plan or a new decision → consult a <strong>social worker</strong>.</p></div>`,
        },
        '18.2': {
            key: [
                'Second stage: vitals <strong>every 30 min</strong>; temp every 4 h (intact) or every 1 h (ruptured/febrile); contractions every 15 min; <strong>FHR every 5–15 min</strong>; emotional response and I&amp;O continuous.',
                'Pushing: urge from fetal pressure on the pelvic floor (blunted by epidural → coordinate with the toco). <strong>Open glottis</strong> = spontaneous pushing while exhaling (no breath-holding); closed glottis = Valsalva. Same laceration rates.',
                'Comfort: <strong>warm perineal compresses</strong>, back pressure/massage, cool cloths, sips/ice chips, position changes; teach the family to help.',
                'Watch for: prolonged 2nd stage (check bladder, exhaustion, pushing), fetal distress (meconium, fever), <strong>shoulder dystocia</strong> (McRoberts, suprapubic pressure; note times), rapid birth (support head, guide shoulders, note time).',
                'Perineal cleansing <strong>front to back</strong> (pubic hairline → anus), new area of cloth each stroke. Prepare delivery table and a <strong>preheated radiant warmer</strong> with resuscitation equipment; O<sub>2</sub> and suction working; a <strong>second nurse for the newborn</strong>.',
            ],
            html: `
<p>The person is fully dilated with an urge to push. The nurse coordinates bearing-down with contractions, supports pain management and positioning, monitors progress, emotions and fetal adaptation, and prepares for birth. {{p. 785}}</p>
<table>
    <thead><tr><th>Data</th><th>Second stage {{Table 18.6 · p. 786}}</th></tr></thead>
    <tbody>
        <tr><td>Vital signs</td><td><strong>Every 30 min</strong>; temperature every <strong>4 h with intact membranes</strong>, every <strong>1 h with ruptured membranes or fever</strong></td></tr>
        <tr><td>Contractions</td><td>Every 15 min (intermittent or continuous), same interval as FHR</td></tr>
        <tr><td>Descent</td><td>As indicated: pressure, perineal bulging, crowning, FHR changes</td></tr>
        <tr><td>Pain</td><td>Hourly or more often</td></tr>
        <tr><td>Emotional response; I&amp;O</td><td>Continuous</td></tr>
        <tr><td><strong>FHR</strong> {{Table 18.7 · p. 786}}</td><td><strong>Every 5–15 min</strong> (low risk or with risk factors/oxytocin)</td></tr>
    </tbody>
</table>
<ul>
    <li>Help the person into a position of their choosing; sips of water or ice chips if desired.</li>
    <li>Coach during the peak of contractions; watch for <strong>fatigue</strong>; give updates on descent (station, crowning) to keep motivation.</li>
    <li>Abnormal FHR patterns → hypoxemia → hypoxia → metabolic acidosis; monitor by IA, external or FSE; communicate with the provider and intervene.</li>
</ul>

<h3>Interventions {{p. 786}}</h3>
<ul>
    <li><strong>Bearing down</strong>: the urge comes from the fetus on the pelvic floor; an <strong>epidural dulls it</strong> → coordinate pushes with contractions on the toco; emphasize perineal relaxation; give feedback; keep the provider informed. {{p. 787}}</li>
    <li><strong>Open glottis pushing</strong>: follow spontaneous urges, breathing normally and exhaling while bearing down (no forced breath-holding). <strong>Closed glottis/Valsalva</strong>: hold the breath and push for a set count. <strong>No difference in perineal lacerations</strong>.</li>
    <li><strong>Positions</strong> help align the head and aid descent; choose by comfort and effectiveness.</li>
    <li><strong>Rest/relaxation</strong>: calm quiet room (epidural); with analgesia or unmedicated labor, support positions, bearing down, breathing.</li>
    <li><strong>Comfort</strong>: warm compresses to perineum or lower back, back pressure/massage, cool cloths; teach family to do them.</li>
</ul>
<table>
    <thead><tr><th>Complication</th><th>Nursing actions {{Table 18.8 · p. 787}}</th></tr></thead>
    <tbody>
        <tr><td><strong>Prolonged second stage</strong></td><td>Check dilation and descent, contraction frequency/strength, pushing effectiveness, FHR, maternal exhaustion, <strong>distended bladder</strong></td></tr>
        <tr><td><strong>Fetal distress</strong></td><td>Continuous FHR; document decels; maternal vitals (fever); fluid color, odor, <strong>meconium</strong>; notify provider {{p. 788}}</td></tr>
        <tr><td><strong>Shoulder dystocia</strong> (head born, shoulder stuck behind pubic bone)</td><td>Assist with <strong>McRoberts</strong> and <strong>suprapubic pressure</strong> as directed; <strong>document time and actions</strong>; evaluate for maternal/fetal injury</td></tr>
        <tr><td><strong>Rapid delivery</strong></td><td>Notify provider; if absent, <strong>support the head and guide the shoulders</strong>; controlled birth; document time and complications</td></tr>
    </tbody>
</table>
<p>Keep the provider updated regularly on maternal complications, FHR, progress and pushing; report any change immediately. {{p. 788}}</p>

<h3>Perineal hygiene {{p. 789}}</h3>
<div class="callout nurse"><span class="callout-title">Perineal cleansing steps {{p. 789}}</span><p>Supplies (gloves, warm water, mild soap/antiseptic per policy, cloths/sponges, towel) · <strong>check allergies</strong> · hand hygiene, sterile gloves · position (lithotomy or preferred) · privacy and consent · warm wet cloth · cleanse <strong>front to back</strong> from the <strong>pubic hairline toward the anus</strong>, a <strong>new area of the cloth for each stroke</strong> · attend to folds, no scrubbing · rinse front to back · <strong>pat dry</strong> · dispose · reassure. {{p. 790}}</p></div>

<h3>Preparing for birth {{p. 790}}</h3>
<ul>
    <li><strong>Delivery table</strong> set before the second stage (during the active phase): sterile drapes, delivery instruments, repair supplies (bulb syringe, cord clamp, sponges, syringe for local anesthetic).</li>
    <li><strong>Radiant warmer</strong> stocked, contents verified, <strong>turned on to preheat</strong>; oxygen and suction working; coordinate with nursery/NICU.</li>
</ul>
<table>
    <thead><tr><th>Category</th><th>Warmer equipment {{Table 18.9 · p. 790}}</th></tr></thead>
    <tbody>
        <tr><td>Resuscitation</td><td>Neonatal bag and mask, suction bulb/catheter, ET tubes, laryngoscope (blades 0 and 1), stylet, meconium aspirator</td></tr>
        <tr><td>Oxygen</td><td>Source, neonatal mask and tubing</td></tr>
        <tr><td>Thermoregulation</td><td>Radiant warmer, <strong>prewarmed blankets</strong>, hat</td></tr>
        <tr><td>Monitoring</td><td>Neonatal stethoscope, BP cuff, pulse oximeter, thermometer, Apgar sheet, timer {{p. 791}}</td></tr>
        <tr><td>Cord care</td><td>Sterile clamps, scissors, antiseptic</td></tr>
        <tr><td>Emergency</td><td>BVM, firm surface, <strong>epinephrine, naloxone</strong></td></tr>
        <tr><td>Other</td><td>Diapers, <strong>ID bands</strong>, blanket</td></tr>
    </tbody>
</table>
<p><strong>Delivery team</strong>: the patient’s nurse + provider + <strong>a second nurse dedicated to the newborn</strong> (assessment, resuscitation with the neonatal team), often a respiratory therapist. Explain each member’s role to the family. {{p. 792}}</p>`,
        },
        '18.3': {
            key: [
                'Third stage = birth → placenta. Skin-to-skin, <strong>delayed cord clamping 30–60 s</strong> (↑ newborn Hgb, circulation). Placenta &gt; 30 min → ↑ PPH, manual removal. <strong>IV oxytocin</strong> usually given after the placenta.',
                '<strong>Signs of separation</strong>: uterus becomes <strong>globular</strong> (rises), <strong>gush of blood</strong>, <strong>cord lengthens</strong>. Provider inspects the placenta for completeness (a retained cotyledon → PPH).',
                'Maternal vitals <strong>every 15 min</strong> (falling BP, rapid/weak pulse = hemorrhage); fundus, bladder, bleeding. Normal blood loss: median <strong>~125 mL vaginal</strong> (up to 500 OK); cesarean up to 1,000. PPH: &gt; 1,000 mL or symptomatic (also defined as &gt; 500 vaginal / &gt; 1,000 cesarean). Use <strong>quantitative blood loss</strong>.',
                'Newborn: Apgar at <strong>1 and 5 min</strong> (10 if distressed); temp within 15 min (normal 36–38 °C); dry, skin-to-skin, cap, warm blankets. Skin-to-skin ↑ maternal oxytocin and shortens the third stage.',
                'Lacerations: <strong>1st</strong> skin/subcutaneous · <strong>2nd</strong> + perineal muscle and vagina · <strong>3rd</strong> to/through the <strong>anal sphincter</strong> · <strong>4th</strong> + <strong>rectal mucosa</strong>.',
                'Uterotonics: <strong>oxytocin</strong> (first choice) · <strong>misoprostol</strong> PR (fever, chills, diarrhea) · <strong>methylergonovine</strong> IM (<strong>not with hypertension</strong>) · <strong>carboprost</strong> IM (<strong>not with asthma</strong>) · <strong>TXA</strong> 1 g IV (antifibrinolytic; clot risk).',
            ],
            html: `
<p>Begins with the newborn’s birth, ends with expulsion of the placenta. {{p. 792}}</p>
<ul>
    <li>Newborn placed on the abdomen, then chest, for <strong>skin-to-skin</strong> (bonding, transition). Cord clamped by the provider and cut by support person or provider; <strong>delayed cord clamping 30–60 s</strong> → higher Hgb, better circulation. A compromised newborn goes to the warmer.</li>
    <li>The uterus shrinks → the placental site shrinks → placenta separates. Management may be active (uterotonics, early clamping, gentle traction) or passive; skin-to-skin and early latch release <strong>endogenous oxytocin</strong>.</li>
    <li>Placenta <strong>&gt; 30 min</strong> → ↑ <strong>PPH</strong> and manual removal. Most providers order <strong>IV oxytocin</strong> right after the placenta. {{p. 793}}</li>
</ul>

<h3>Assessment {{p. 793}}</h3>
<ul>
    <li>Birthing person: <strong>vitals</strong>, <strong>fundus</strong> (height, firmness, tone), pain, <strong>bladder distention</strong>, amount and type of bleeding.</li>
</ul>
<table>
    <thead><tr><th>Birthing person {{Table 18.10 · p. 793}}</th><th>Newborn, first 30 min {{Table 18.11 · p. 793}}</th></tr></thead>
    <tbody><tr>
        <td>Vitals <strong>every 15 min</strong>; temp every 1 h · contractions palpated (usually by provider) · progress by signs of separation · pain PRN · emotions continuous</td>
        <td><strong>Apgar at 1 and 5 min</strong> (10 min if distressed) · <strong>temperature within 15 min</strong> · apical pulse and respirations every 30 min after Apgar (low risk) or every 1–5 min (risk factors)</td>
    </tr></tbody>
</table>
<ul>
    <li>A drop in <strong>BP</strong> or a <strong>rapid, weak pulse</strong> may mean hemorrhage; include RR and SpO<sub>2</sub>; report trends.</li>
    <li>Newborn temp: abnormal if <strong>&lt; 96.8 °F (36 °C) or &gt; 100.4 °F (38 °C)</strong>; take early, especially with prolonged ROM or maternal fever. {{p. 794}}</li>
</ul>
<h4>Signs of placental separation {{p. 794}}</h4>
<ol>
    <li>Uterus changes to a <strong>globular (round) shape</strong> and rises</li>
    <li><strong>Gush of blood</strong> from behind the placenta</li>
    <li><strong>Lengthening of the umbilical cord</strong> as the placenta moves to the introitus</li>
</ol>
<p>If it doesn’t deliver spontaneously, the provider may extract it manually (↑ infection and PPH). The provider <strong>inspects the placenta</strong>: retained fragments prevent uterine contraction → PPH.</p>
<h4>Vaginal bleeding {{p. 794}}</h4>
<ul>
    <li>After expulsion, the provider massages the uterus until firm (vessels constrict).</li>
    <li>Median blood loss in vaginal birth ~<strong>125 mL</strong> (up to 500 mL acceptable); cesarean up to 1,000 mL. <strong>&gt; 1,000 mL or symptomatic = PPH</strong> (key terms: &gt; 500 mL vaginal, &gt; 1,000 mL cesarean): an emergency.</li>
    <li><strong>Quantitative blood loss (QBL)</strong> is more accurate than visual estimation (EBL). {{p. 795}}</li>
</ul>

<h3>Interventions {{p. 795}}</h3>
<ul>
    <li>Vitals and pain (afterpains: medication or nonpharmacologic); coach bearing down for the placenta; then assess bleeding (color, consistency, amount) and uterus (firmness, location, tone).</li>
    <li><strong>Relaxation</strong>: deep breathing, calm room, <strong>warm blankets</strong>, gentle abdominal massage, imagery, emotional support, reassurance.</li>
    <li><strong>Uterotonics</strong> (active management prevents PPH): <strong>oxytocin first choice</strong> IV/IM; others: misoprostol, methylergonovine, carboprost, tranexamic acid.</li>
    <li><strong>Perineal cleansing</strong> by provider (hand sponges and solutions); <strong>count blades, needles, sponges and packing</strong> so nothing is retained.</li>
    <li><strong>Newborn</strong>: Apgar (heart rate, respiratory effort, muscle tone, reflex irritability, color; Ch. 22). Temperature falls ~2 °C in the first 30 min (room, evaporation): <strong>dry, skin-to-skin, cap, warm blankets</strong>. {{p. 796}}</li>
    <li><strong>Attachment</strong>: skin-to-skin on the abdomen, then chest after clamping: thermoregulation, glucose and metabolic stability; ↑ maternal oxytocin → contractions → <strong>shorter third stage</strong>. Not possible → radiant warmer.</li>
</ul>

<h3>Complications {{p. 797}}</h3>
<table>
    <thead><tr><th>Laceration</th><th>Tissue involved</th></tr></thead>
    <tbody>
        <tr><td><strong>First degree</strong></td><td>Skin and subcutaneous tissue (labia, perineum)</td></tr>
        <tr><td><strong>Second degree</strong></td><td>Skin, subcutaneous tissue, <strong>perineal muscle</strong> and vagina</td></tr>
        <tr><td><strong>Third degree</strong></td><td>Extends to or through the <strong>anal sphincter</strong></td></tr>
        <tr><td><strong>Fourth degree</strong></td><td>Through the sphincter into the <strong>rectal mucosa</strong> (pelvic floor damage)</td></tr>
    </tbody>
</table>
<ul>
    <li><strong>Retained placenta</strong>: not separated within <strong>30 minutes</strong> (1–3% of births); bleeding without separation or retained tissue (even a single cotyledon) → PPH, infection. <strong>Second leading cause of PPH</strong>. {{p. 798}}</li>
    <li><strong>PPH</strong>: ~14 million/year worldwide, ~70,000 deaths. Prevention: <strong>uterotonics after birth, controlled cord traction, uterine massage</strong>; nurse ready to give drugs, massage, monitor.</li>
</ul>
<div class="callout memo"><span class="callout-title">Pharmacology: uterotonics and TXA {{p. 798}}</span>
<table>
    <thead><tr><th>Drug</th><th>Dose/route</th><th>Key points</th></tr></thead>
    <tbody>
        <tr><td><strong>Oxytocin (Pitocin)</strong></td><td>IV 10–40 units diluted infusion; IM 10 units</td><td>Rhythmic contractions. Most common adverse effect: <strong>hyperstimulation</strong>; N/V, dysrhythmias</td></tr>
        <tr><td><strong>Misoprostol (Cytotec)</strong></td><td><strong>400–1,000 mcg rectally</strong></td><td>Prostaglandin. <strong>Shivering/chills, fever</strong>, diarrhea, N/V, headache, ↑ BP. Avoid with active cardiac, pulmonary, renal, hepatic disease; caution in asthma {{p. 799}}</td></tr>
        <tr><td><strong>Methylergonovine (Methergine)</strong></td><td>IM <strong>0.2 mg every 2–6 h</strong></td><td>Ergot alkaloid, sustained contraction. ↑ BP, stroke, tachycardia, numbness/tingling. <strong>Contraindicated: hypertension</strong>, cardiovascular disease</td></tr>
        <tr><td><strong>Carboprost (Hemabate)</strong></td><td>IM <strong>0.25 mg</strong> (or intramyometrial)</td><td>Prostaglandin. N/V, <strong>diarrhea</strong>, cramps, temp rise &gt; 2 °F, flushing. <strong>Contraindicated: asthma</strong>, active cardiac/pulmonary/renal/hepatic disease</td></tr>
        <tr><td><strong>Tranexamic acid (TXA)</strong></td><td>IV <strong>1 g</strong></td><td>Antifibrinolytic (doesn’t contract the uterus). DVT/PE, seizures, visual changes. Avoid: seizure disorder, thrombosis risk, coagulopathy, anticoagulants</td></tr>
    </tbody>
</table></div>`,
        },
        '18.4': {
            key: [
                'Fourth stage: placenta → 1–4 h (until stable). Vitals, fundus, lochia, perineum <strong>every 15 min × 1 h, every 30 min × 1 h, then hourly</strong>; temp in the first hour; anesthesia recovery every 15 min.',
                'Expected: fundus <strong>firm, midline, at the umbilicus</strong> (starts between umbilicus and symphysis, rises to it in the first hour); lochia <strong>rubra</strong>, no large clots. Rising fundus, deviation to a side, or boggy → massage, check <strong>bladder</strong>, report.',
                'Lochia: <strong>rubra</strong> (red, days 1–4) → <strong>serosa</strong> (pink/brown, to ~day 14) → <strong>alba</strong> (white/yellow, weeks). Amount: scant &lt; 1 in, light 1–4 in, moderate 4–6 in, <strong>heavy = pad saturated in ≤ 1 h</strong>. Clots ≤ quarter-sized; foul odor = infection. QBL: weigh, 1 g = 1 mL.',
                '<strong>Uterine atony</strong> (lack of tone) is the leading cause of PPH; a <strong>full bladder</strong> is a common contributor → help the patient void. Excessive perineal pain → <strong>hematoma</strong>.',
                'Promote skin-to-skin and early breast-feeding (latch, feeding cues). Watch attachment: little holding, touching or talking about the baby → ↑ risk of abuse/neglect. Explain why <strong>fundal massage</strong> is needed. Respect cultural privacy requests.',
            ],
            html: `
<p>Starts with delivery of the placenta and ends after <strong>1–4 hours</strong> or when clinically stable. The nurse monitors vitals, uterine tone, lochia and anesthesia recovery, assists with laceration repair, and supports bonding and breast-feeding. {{p. 799}}</p>
<table>
    <thead><tr><th>Data</th><th>Frequency</th><th>Expected {{Table 18.12 · p. 800}}</th></tr></thead>
    <tbody>
        <tr><td>Vital signs</td><td><strong>Every 15 min × 1 h, every 30 min × 1 h</strong>, hourly in hours 3–4; temp within the first hour, then PRN</td><td>Return to baseline after the first hour; compare with predelivery values</td></tr>
        <tr><td>Uterus</td><td>Same schedule</td><td><strong>Firm, midline, ~level of the umbilicus</strong></td></tr>
        <tr><td>Lochia</td><td>Same schedule</td><td><strong>Rubra</strong>, no large clots, steady or decreasing</td></tr>
        <tr><td>Perineum</td><td>Same schedule</td><td>Edema, bruising, discomfort monitored; no infection</td></tr>
        <tr><td>Pain</td><td>Hourly/PRN</td><td>Managed</td></tr>
        <tr><td>Anesthesia recovery</td><td>Every 15 min</td><td>Return of sensation and movement in the legs</td></tr>
        <tr><td>Emotional response</td><td>Continuous</td><td>Discusses feelings with staff and family</td></tr>
    </tbody>
</table>

<h3>Involution and lochia {{p. 800}}</h3>
<ul>
    <li><strong>Involution</strong>: uterus returning to prepregnant size at a predictable rate. Fundus at the umbilicus in the first hours and should <strong>not rise</strong>; a rise → assess and notify. {{p. 801}}</li>
    <li><strong>Lochia</strong> = postpartum discharge of blood, mucus and tissue.</li>
</ul>
<div class="callout nurse"><span class="callout-title">How to assess lochia {{p. 801}}</span><p><strong>Frequency</strong> (sample): every 15 min in the first hour, hourly for 1–4 h, then every 4 h for 24–48 h. Explain, provide privacy, position (supine or &lt; 45°, knees bent), gloves; inspect pad and underpad.</p>
<table>
    <thead><tr><th>Feature</th><th>Expected / abnormal</th></tr></thead>
    <tbody>
        <tr><td>Color</td><td><strong>Rubra</strong> (bright red) first <strong>4 days</strong> → <strong>serosa</strong> (pink/brown) up to another <strong>10 days</strong> → <strong>alba</strong> (white/yellow) for several weeks</td></tr>
        <tr><td>Amount</td><td><strong>Scant</strong> &lt; 1 in · <strong>light</strong> 1–4 in · <strong>moderate</strong> 4–6 in · <strong>heavy</strong> = saturates a pad in <strong>≤ 1 hour</strong></td></tr>
        <tr><td>QBL</td><td>Weigh soiled pads, underpads, linen; subtract dry weight; <strong>1 g = 1 mL</strong>; add to the delivery total. Continuous QBL catches hemorrhage earlier</td></tr>
        <tr><td>Consistency</td><td>Mucus-like or watery; clots <strong>no larger than a quarter</strong></td></tr>
        <tr><td>Odor</td><td>Mild, musky; <strong>foul = infection</strong> {{p. 802}}</td></tr>
    </tbody>
</table>
<p>Report heavy bleeding, foul odor or large clots immediately; document color, amount, consistency, odor.</p></div>
<ul>
    <li><strong>Perineum</strong>: edema, bruising, approximation of repairs, pain; <strong>excessive pain → hematoma</strong>.</li>
</ul>

<h3>Nursing actions {{p. 802}}</h3>
<ul>
    <li><strong>Assist the provider</strong>: perineal cleansing, fundal massage, supplies for repair; report deviations.</li>
    <li><strong>Lidocaine 1%</strong>, 10–15 mL along the laceration/episiotomy edges before repair (amide local anesthetic). Adverse: dizziness, <strong>tinnitus</strong>, confusion, tachycardia, anxiety, chest pain, dyspnea, hives. Contraindicated: amide allergy, complete heart block, hypovolemia.</li>
    <li><strong>Physical response</strong>: vitals every 15 min × 1 h, every 30 min × 1 h; fundus contracted; lochia small to moderate; <strong>bladder</strong> (IV fluids in labor → full bladder → poor involution → PPH): help the patient void; pain relief. {{p. 803}}</li>
    <li><strong>Emotional response</strong>: shock or detachment, euphoria, then exhaustion; reassure that feelings are normal; encourage bonding.</li>
    <li><strong>Breast-feeding</strong>: skin-to-skin, teach feeding cues, keep the baby at the bedside, help with positioning and <strong>latch</strong>: early help ↑ long-term success.</li>
</ul>

<h3>Monitoring for complications {{p. 803}}</h3>
<ul>
    <li>Fundus: initially between the umbilicus and symphysis, rising to the umbilicus in the first hour; firm and <strong>midline</strong>. <strong>Boggy</strong> → more massage. <strong>Deviated right or left</strong> → further assessment (usually <strong>bladder distention</strong>).</li>
    <li><strong>Uterine atony</strong> (lack of muscle tone after birth) = <strong>leading cause of PPH</strong>; bladder distention is a common contributor.</li>
    <li><strong>Increasing lochia</strong> is a hallmark of hemorrhage: investigate and correct immediately; quantify blood loss after every birth. {{p. 804}}</li>
</ul>

<h3>Attachment and education {{p. 804}}</h3>
<ul>
    <li>Encourage skin-to-skin with the birthing person and support person; watch interactions. <strong>Minimal holding, touching, talking about the infant</strong> → ↑ risk of abuse and neglect.</li>
    <li><strong>Fundal massage</strong> is uncomfortable; explain it reduces PPH risk to improve acceptance.</li>
    <li>Benefits of early skin-to-skin: calm and relaxation for both; regulates newborn <strong>HR and breathing</strong>; stimulates digestion and feeding interest; regulates <strong>temperature</strong>; protects against infection (colonization with parental bacteria); stimulates <strong>hormones for breast-feeding and parenting</strong>.</li>
</ul>
<div class="callout tip"><span class="callout-title">Cultural privacy {{p. 804}}</span><p>Some patients request <strong>no male</strong> providers or staff. Notify the team and assign staff accordingly; when impossible, discuss how to maximize privacy.</p></div>`,
        },
    },
    terms: [
        ['amniotomy', 'intentional rupture of the amniotic membranes by a provider (artificial rupture of membranes, AROM)'],
        ['delayed cord clamping', 'waiting (about 30–60 seconds) before clamping the cord so placental blood flows to the baby'],
        ['first-degree laceration', 'tear of the labia and perineum involving skin and subcutaneous tissue'],
        ['second-degree laceration', 'tear involving skin, subcutaneous tissue, perineal muscle, and vagina'],
        ['third-degree laceration', 'perineal tear extending to or through the anal sphincter'],
        ['fourth-degree laceration', 'tear extending through the anal sphincter into the rectal mucosa'],
        ['involution', 'process by which the uterus returns to its prepregnant size'],
        ['lochia', 'postpartum vaginal discharge of blood, mucus, and tissue'],
        ['obstetric examination', 'assessment of the health and progress of the pregnant person and fetus'],
        ['obstetric triage', 'rapid assessment and prioritization of obstetric and gynecologic needs'],
        ['open glottis pushing', 'spontaneous pushing while exhaling, without breath-holding'],
        ['postpartum hemorrhage', 'bleeding > 500 mL after vaginal or > 1,000 mL after cesarean birth (or > 1,000 mL/symptomatic per ACOG)'],
        ['quantitative blood loss (QBL)', 'measuring blood loss by weighing soiled materials (1 g = 1 mL)'],
        ['retained placenta', 'placenta not separated from the uterus within 30 minutes after birth'],
        ['shoulder dystocia', 'head delivered but a shoulder trapped behind the pubic bone'],
        ['skin-to-skin contact', 'placing the newborn directly on a parent’s skin to promote bonding'],
        ['uterine atony', 'lack of uterine muscle tone after birth'],
        ['uterotonics', 'medications that increase uterine tone and contractility'],
        ['vaginal examination', 'assessment of dilation, effacement, cervical position, station, presenting part and fetal position'],
    ],
    cards: [
        { f: 'What information from the prenatal chart is important on admission, and why?', b: 'EDD/gestational age, G/TPAL and prior complications, placental location, fetal position/anomalies, medical conditions and meds (last dose), surgeries (cesarean, uterine/cervical), labs (Rh/antibodies, GBS, rubella, HIV, hep B, STIs, GDM), allergies, anesthesia history, psychosocial risks: they change labor management and newborn care.', ref: '18.1' },
        { f: 'Why is it important to know the EDD?', b: 'It establishes gestational age, which determines whether labor is preterm or term, where the patient is triaged, which tests/meds are appropriate (e.g., steroids, tocolysis), and newborn preparation.', ref: '18.1' },
        { f: 'Amniotic fluid colors', b: 'Clear = normal. Green/yellow = meconium-stained. Bloody = possible previa or abruption. Foul odor = infection. Document time, color, odor, amount.', ref: '18.1' },
        { f: 'When should the nurse NOT perform a vaginal exam?', b: 'With vaginal bleeding or a known placenta previa, and defer in preterm labor until fetal fibronectin is collected. Minimize exams to reduce infection risk.', ref: '18.1' },
        { f: 'FHR assessment frequency in labor', b: 'Active first stage: every 30 min (low risk, no oxytocin) or every 15 min (risk factors/oxytocin). Second stage: every 5–15 min.', ref: '18.1' },
        { f: 'Nurse’s role in amniotomy', b: 'Witness consent, gather supplies, position, assist, assess fluid color/odor/meconium, monitor FHR and contractions before and after (cord prolapse), comfort, document time and findings.', ref: '18.1' },
        { f: 'Nursing actions that reduce cesarean rates', b: 'Continuous labor support, mobility/position changes, nonpharmacologic pain relief, judicious fetal monitoring, avoiding unnecessary cervical exams, promoting physiologic birth.', ref: '18.1' },
        { f: 'What instruments may be on a delivery table?', b: 'Sterile drapes, gowns and gloves, bulb syringe, cord clamps, scissors, sponges/gauze, basin, syringe and needle for local anesthetic, suture and needle holder, forceps for repair, placenta basin.', ref: '18.2' },
        { f: 'Why should the team include a nurse for the birthing person and a nurse for the newborn?', b: 'Both may need immediate, simultaneous care: the patient’s nurse monitors bleeding and the third stage while the newborn nurse assesses, warms and resuscitates the baby with the neonatal team.', ref: '18.2' },
        { f: 'Second-stage vital sign and FHR frequency', b: 'Maternal vitals every 30 min; temp every 4 h (intact) or every 1 h (ruptured/febrile); contractions every 15 min; FHR every 5–15 min.', ref: '18.2' },
        { f: 'Shoulder dystocia: nurse’s role', b: 'Call for help, assist with McRoberts maneuver and suprapubic pressure as directed, note the time of head delivery and each maneuver, evaluate mother and newborn for injury.', ref: '18.2' },
        { f: 'Three signs of placental separation', b: '1. Uterus becomes globular and rises. 2. Sudden gush of blood. 3. Lengthening of the umbilical cord.', ref: '18.3' },
        { f: 'First- through fourth-degree lacerations', b: '1st: skin and subcutaneous tissue.\n2nd: + perineal muscle and vagina.\n3rd: to or through the anal sphincter.\n4th: + rectal mucosa.', ref: '18.3' },
        { f: 'Benefits of early skin-to-skin and how the nurse supports it', b: 'Thermoregulation, stable HR/breathing/glucose, bonding, breast-feeding, infection protection, maternal oxytocin (shorter third stage, less bleeding). Nurse: dry the baby, place on chest, cover with warm blankets and a cap, delay routine procedures for 1–2 h, keep the couplet together.', ref: '18.3' },
        { f: 'Uterotonic contraindications to remember', b: 'Methylergonovine: hypertension/cardiovascular disease.\nCarboprost: asthma (and active cardiac, pulmonary, renal, hepatic disease).\nMisoprostol: active cardiac/pulmonary/renal/hepatic disease; caution asthma.\nTXA: thrombosis risk, seizures, coagulopathy.', ref: '18.3' },
        { f: 'Delayed cord clamping', b: 'Wait 30–60 seconds before clamping in an uncomplicated birth: increases newborn hemoglobin and improves circulation.', ref: '18.3' },
        { f: 'Fourth-stage assessment schedule', b: 'Vitals, fundus, lochia, perineum: every 15 min for 1 h, every 30 min for the 2nd hour, hourly for hours 3–4. Temp in the first hour. Anesthesia recovery every 15 min.', ref: '18.4' },
        { f: 'Lochia progression', b: 'Rubra: bright red, days 1–4.\nSerosa: pink/brown, up to ~day 14.\nAlba: white/yellow, several weeks.\nHeavy = pad saturated in ≤ 1 h; clots > quarter-size or foul odor → report.', ref: '18.4' },
        { f: 'Bright red lochia saturating a pad in 30 minutes, vitals normal: action and meaning?', b: 'Heavy bleeding suggesting early PPH: assess and massage the fundus, check for bladder distention (help void), quantify blood loss, notify the provider immediately and anticipate uterotonics; vitals change late.', ref: '18.4' },
        { f: 'Ways to support involution in the fourth stage', b: 'Uterotonics as ordered, fundal massage when boggy, keep the bladder empty (help the patient void), early breast-feeding/skin-to-skin (oxytocin release).', ref: '18.4' },
    ],
    quiz: [
        { src: 'book', ref: '18.1', q: 'What procedure might the nurse perform to determine the presentation of the fetus?', o: ['vaginal exam', 'ultrasound', 'palpation of contractions', 'laboring person interview'], a: 0, why: 'The vaginal exam (with Leopold’s maneuvers) identifies the presenting part; ultrasound is not a nursing procedure here.' },
        { src: 'book', ref: '18.1', q: 'During the early phase of the first stage, what is the primary goal of nursing care?', o: ['Administer pain medication.', 'Monitor fetal heart rate continuously.', 'Promote relaxation and provide comfort measures.', 'Prepare for imminent delivery.'], a: 2, why: 'Early labor focuses on comfort, relaxation, mobility and education.' },
        { src: 'book', ref: '18.1', q: 'What assessment findings are essential components of obstetric triage? Select all that apply.', o: ['history and physical', 'fetal monitoring', 'EDD', '24-hour diet recall'], a: [0, 1, 2], why: 'Triage needs presenting symptoms, focused exam, FHR/contractions and gestational age (EDD). A diet recall belongs to prenatal visits.' },
        { src: 'book', ref: '18.1', q: 'A pregnant person in the first stage of labor has rupture of membranes. What is the nurse’s priority action?', o: ['Administer an epidural for pain relief.', 'Start an IV line and administer antibiotics.', 'Document the FHR and time and characteristics of the amniotic fluid.', 'Prepare for immediate delivery.'], a: 2, why: 'After ROM, assess the FHR (cord prolapse/compression) and note time, color, odor and amount of fluid.' },
        { src: 'book', ref: '18.2', q: 'What assessment data are collected to assess progress during the second stage of labor?', o: ['fetal heart rate', 'fetal descent', 'bearing-down effort', 'contraction strength'], a: 1, why: 'Progress in the second stage is measured by descent (station, crowning).' },
        { src: 'book', ref: '18.2', q: 'In a low-risk laboring person not receiving oxytocin, how often should the nurse assess the FHR in the second stage?', o: ['every 5 minutes with contractions', 'at least every 30 minutes', 'every 5–15 minutes', 'only when the physician orders assessment'], a: 2, why: 'AWHONN: every 5–15 minutes in the second stage.' },
        { src: 'book', ref: '18.1', q: 'A laboring person on oxytocin for induction has continuous monitoring. How often should the nurse assess the FHR?', o: ['every 30 minutes', 'every 15 minutes', 'every 5 minutes', 'every 1 hour'], a: 1, why: 'In the active first stage, oxytocin or risk factors require FHR review every 15 minutes (every 5–15 in the second stage).' },
        { src: 'book', ref: '18.2', q: 'What is the primary goal of FHR monitoring during the second stage?', o: ['to predict when to bear down', 'to determine the strength of the contractions', 'to evaluate fetal well-being', 'to monitor vital signs of the birthing person'], a: 2, why: 'The second stage stresses the fetus; monitoring detects hypoxemia early.' },
        { src: 'book', ref: '18.2', q: 'During open glottis pushing, what is the laboring person instructed to do?', o: ['hold their breath and push for 10 seconds', 'push spontaneously while exhaling during contractions', 'exhale slowly without pushing', 'perform deep breathing between contractions'], a: 1, why: 'Open glottis pushing follows natural urges while exhaling, without breath-holding.' },
        { src: 'book', ref: '18.2', q: 'Which statement describes the importance of position changes during the second stage?', o: ['Position changes have an impact on fetal descent.', 'Position changes can lead to support person stress.', 'Fetal descent is solely determined by uterine contractions.', 'Maintaining a supine position is the safest option.'], a: 0, why: 'Positions optimize alignment of the head with the pelvis and aid descent.' },
        { src: 'book', ref: '18.3', q: 'How long should cord clamping be delayed in an uncomplicated delivery?', o: ['30–60 seconds', '15–30 seconds', '30 seconds', 'Delayed cord clamping is not recommended.'], a: 0, why: '30–60 seconds increases newborn hemoglobin and improves circulation.' },
        { src: 'book', ref: '18.3', q: 'A retained placenta is diagnosed. What is the primary risk?', o: ['neonatal jaundice', 'postpartum hemorrhage', 'delayed bonding', 'postpartum anemia'], a: 1, why: 'Retained placenta prevents effective uterine contraction and is the second leading cause of PPH.' },
        { src: 'book', ref: '18.3', q: 'What is the most reliable clinical indicator that the placenta has separated?', o: ['a gush of clear amniotic fluid', 'uterine contractions every 2 to 3 minutes', 'lengthening of the umbilical cord', 'maternal report of intense pain'], a: 2, why: 'Cord lengthening (with a gush of blood and globular uterus) signals separation.' },
        { src: 'book', ref: '18.3', q: 'What is a characteristic of a second-degree laceration?', o: ['It involves only the vaginal mucosa.', 'It extends through the vaginal and perineal muscles.', 'It is the least severe type.', 'It does not require suturing.'], a: 1, why: 'Second degree involves skin, subcutaneous tissue, perineal muscle and vagina.' },
        { src: 'book', ref: '18.3', q: 'Which uterotonic is commonly used to prevent PPH and promote uterine contractions?', o: ['oxytocin (Pitocin)', 'fentanyl (Sublimaze)', 'epinephrine (Adrenaline)', 'lorazepam (Ativan)'], a: 0, why: 'Oxytocin is the first-choice uterotonic.' },
        { src: 'book', ref: '18.4', q: 'A patient receiving uterotonics has a boggy, enlarged uterus. What is the nurse’s immediate action?', o: ['Document the findings as normal.', 'Continue to administer the uterotonic.', 'Perform fundal massage to promote uterine firmness.', 'Administer an analgesic.'], a: 2, why: 'Fundal massage is the immediate action for a boggy uterus; then check the bladder and notify.' },
        { src: 'book', ref: '18.4', q: 'How often should the nurse assess BP, pulse and respirations during the first hour of the fourth stage?', o: ['every 15 minutes', 'every 30 minutes', 'not until after the first hour', 'once, then hourly'], a: 0, why: 'Every 15 minutes in the first hour, every 30 minutes in the second.' },
        { src: 'book', ref: '18.4', q: 'How can the nurse support involution in the fourth stage? Select all that apply.', o: ['uterotonics', 'encouraging the birthing person to urinate', 'fundal massage', 'providing the baby a bottle so the person can rest', 'delaying breast-feeding'], a: [0, 1, 2], why: 'Uterotonics, an empty bladder and fundal massage promote contraction; early breast-feeding (not delaying it) releases oxytocin.' },
        { src: 'book', ref: '18.4', q: 'What is the primary purpose of assessing the perineum in the fourth stage?', o: ['to evaluate readiness for discharge', 'to ensure safe ambulation', 'to detect any signs of perineal trauma', 'to assess cervical dilation'], a: 2, why: 'Look for edema, bruising, laceration approximation and hematoma.' },
        { src: 'book', ref: '18.4', q: 'Which finding indicates normal uterine involution in the fourth stage?', o: ['Uterus is palpable at the level of the umbilicus.', 'Uterine fundus is firm, at the level of the umbilicus.', 'Uterus is displaced to the right side.', 'Uterine fundus is above the umbilicus.'], a: 1, why: 'Normal: firm, midline, at the umbilicus. Firmness matters, not just location; deviation suggests a full bladder.' },

        { ref: '18.1', q: 'A patient in triage at 34 weeks has BP 158/102 and a headache. Priority?', o: ['Send to the waiting room', 'Notify the provider promptly and assess for preeclampsia (DTRs, clonus, protein)', 'Encourage ambulation', 'Give acetaminophen and discharge'], a: 1, why: 'Elevated BP with symptoms can signal preeclampsia/eclampsia and requires prompt response.' },
        { ref: '18.1', q: 'After amniotomy, the fluid is green. The nurse documents and reports:', o: ['Normal fluid', 'Meconium-stained fluid', 'Bloody show', 'Infection'], a: 1, why: 'Green or yellow fluid indicates meconium; notify the provider and newborn team.' },
        { ref: '18.1', q: 'For an OP fetus, which position does the nurse suggest?', o: ['Supine', 'Hands and knees with rocking', 'Lithotomy', 'Trendelenburg'], a: 1, why: 'Hands and knees (all fours), rebozo sifting and side-lying release encourage rotation to OA.' },
        { ref: '18.3', q: 'Methylergonovine is ordered for uterine atony. The patient’s BP is 162/104. The nurse should:', o: ['Give it as ordered', 'Hold it and clarify the order (contraindicated with hypertension)', 'Give double the dose', 'Give it IV push'], a: 1, why: 'Methylergonovine raises BP and is contraindicated in hypertension.' },
        { ref: '18.3', q: 'Carboprost is ordered for PPH in a patient with asthma. The nurse should:', o: ['Give it IM', 'Question the order: asthma is a contraindication', 'Give it with albuterol', 'Give it rectally'], a: 1, why: 'Carboprost (a prostaglandin F2α) can cause bronchospasm; it is contraindicated with asthma.' },
        { ref: '18.4', q: 'One hour postpartum the fundus is 2 cm above the umbilicus and deviated to the right. First action?', o: ['Give methylergonovine', 'Assist the patient to void', 'Call the provider for a D&C', 'Document as normal'], a: 1, why: 'A displaced, elevated fundus suggests a full bladder; emptying it allows contraction.' },
        { ref: '18.4', q: 'The pad weighs 85 g; its dry weight is 25 g. The blood loss is:', o: ['85 mL', '60 mL', '110 mL', '25 mL'], a: 1, why: 'QBL: 85 − 25 = 60 g = 60 mL.' },
        { ref: '18.4', q: 'Which observation should concern the nurse about parent-newborn attachment?', o: ['Parent talks to and strokes the baby', 'Parent rarely holds or looks at the baby and does not talk about it', 'Parent asks about feeding', 'Parent counts fingers and toes'], a: 1, why: 'Minimal holding, touching or discussing the infant is linked to increased risk of abuse/neglect.' },
    ],
});
