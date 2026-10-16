STUDY.addChapter('obgyn', {
    n: 6,
    intro: `<p>Functional, structural, benign and malignant disorders of the reproductive system. The opening case is a 38-year-old with worsening cramps for 2–3 days every cycle that make her miss work despite ibuprofen 600 mg 3–4 times a day, heat and exercise. A thorough nursing assessment decides whether symptoms are within the expected range or point to a structural or tissue disorder. {{Chapter intro · p. 261}}</p>`,
    sections: {
        '6.1': {
            key: [
                '<strong>Primary amenorrhea</strong> = no menarche by <strong>16</strong>; <strong>secondary</strong> = no menses for <strong>3+ cycles</strong> after regular cycles. Always rule out <strong>pregnancy</strong> first (beta-hCG).',
                '<strong>Dysmenorrhea</strong>: primary (no underlying cause) vs. secondary (underlying condition). First-line = <strong>NSAIDs</strong> (block prostaglandins), then hormonal contraceptives; plus heat, exercise, TENS.',
                '<strong>AUB</strong>: menorrhagia (heavy), hypermenorrhea (prolonged), metrorrhagia (irregular). Heavy = changing pad/tampon <strong>more than once an hour</strong>. <strong>Any postmenopausal bleeding must be evaluated.</strong>',
                '<strong>Menopause</strong> = 12 months without menses (average 51). <strong>High FSH + low estradiol</strong>. HRT with an <strong>intact uterus needs estrogen + progesterone</strong> (estrogen alone → endometrial hyperplasia/cancer).',
                'HRT contraindications: breast or uterine cancer, <strong>DVT/PE</strong>, clotting disorder, <strong>migraine with aura</strong>, liver disease, MI/stroke. Alternative for hot flashes: <strong>SSRIs</strong>.',
                '<strong>Endometriosis</strong>: pelvic pain, dysmenorrhea, dyspareunia, infertility; diagnosed definitively by <strong>laparoscopy</strong>. <strong>PCOS</strong>: Rotterdam 2 of 3; risks include insulin resistance/diabetes, metabolic syndrome, endometrial cancer; treat with COCs, spironolactone, <strong>metformin</strong>, weight loss.',
            ],
            html: `
<p>Normal cycle: <strong>21–34 days</strong>, menses <strong>&lt; 7 days</strong>; US menarche ~12 years. {{p. 262}}</p>

<h3>Amenorrhea {{p. 262}}</h3>
<p>Absence of menstruation in a person of reproductive age with ovaries and a uterus.</p>
<table>
    <thead><tr><th></th><th>Primary</th><th>Secondary</th></tr></thead>
    <tbody>
        <tr><td>Definition</td><td><strong>No menarche by age 16</strong></td><td>No menses for <strong>3 or more consecutive cycles</strong> after regular cycles</td></tr>
        <tr><td>Causes {{Table 6.1 · p. 262}}</td><td>Pregnancy, endocrine tumors, <strong>congenital (Turner syndrome)</strong>, hypogonadotropic hypogonadism</td><td>Pregnancy, <strong>weight loss</strong>, anovulation, pituitary/ovarian tumors, Cushing syndrome</td></tr>
    </tbody>
</table>
<ul>
    <li>Associated signs of hormone imbalance: <strong>hirsutism</strong>, hair loss, headache, <strong>galactorrhea</strong> (milk not related to pregnancy/breast-feeding), visual changes.</li>
    <li>Workup: <strong>beta-hCG (rule out pregnancy)</strong>; testosterone and <strong>DHEAS</strong> (hyperandrogenism); FSH, LH, estrogen, thyroid, <strong>prolactin</strong>; US/CT (tumors, absent uterus, transverse vaginal septum); <strong>karyotype</strong> for primary amenorrhea. {{p. 263}}</li>
    <li>Treatment: treat the cause. COCs or progestin to induce withdrawal bleeding; <strong>dopamine agonists</strong> for hyperprolactinemia.</li>
    <li><strong>Hypothalamic amenorrhea</strong> (weight loss, stress, excessive exercise) → low estrogen → <strong>osteoporosis risk</strong> (bone density monitoring, bisphosphonates, or estrogen + progesterone if not wanting pregnancy). Eating disorders need a multidisciplinary team.</li>
    <li>Nurse: education (infertility and bone risks), emotional support, monitor treatment response.</li>
</ul>

<h3>Dysmenorrhea {{p. 263}}</h3>
<ul>
    <li>Painful menstruation severe enough to <strong>interfere with daily life</strong>. <strong>Primary</strong> = typical menstrual pain before or during a period (no pathology). <strong>Secondary</strong> = caused by an <strong>underlying condition</strong> (e.g., endometriosis, fibroids).</li>
    <li>Cramping pain radiating to the <strong>lower back and thighs</strong>, nausea, vomiting, fatigue, headache, diarrhea.</li>
    <li>More common in younger people, <strong>smokers</strong>, early menarche, family history, <strong>nulliparity</strong>.</li>
    <li>Testing (US, hysteroscopy, laparoscopy) only if medication fails.</li>
    <li>Treatment: <strong>NSAIDs first-line</strong> (ibuprofen, naproxen; inhibit <strong>prostaglandin</strong> synthesis) → hormonal methods (COCs, progestins; suppress ovulation and endometrial growth) → laparoscopy → endometrial ablation or hysterectomy (only if no future pregnancy). {{p. 264}}</li>
    <li>Nonpharmacologic: <strong>heat</strong> to the lower abdomen (relaxes the uterus), relaxation, exercise, diet, <strong>acupuncture, TENS</strong>.</li>
    <li>Nurse: teach, assess pain with <strong>validated scales</strong>, support, encourage self-care. Evaluate teaching (“Where do the TENS pads go?”).</li>
</ul>

<h3>Premenstrual syndrome (PMS) and PMDD {{p. 264}}</h3>
<ul>
    <li><strong>PMS</strong>: cyclic physical, emotional and behavioral symptoms in the <strong>luteal phase</strong>, typically <strong>1–2 weeks before menses</strong>: mood swings, irritability, anxiety, fatigue, breast tenderness, bloating, appetite/sleep changes, headache, joint pain, GI upset.</li>
    <li><strong>PMDD</strong>: rarer, extreme form with <strong>severe depression and anxiety</strong> in the luteal phase.</li>
    <li>Diagnosis by symptom timing; TSH and CBC to rule out thyroid disease and anemia. {{p. 265}}</li>
    <li>Treatment: <strong>SSRIs</strong> or hormonal contraceptives (severe), NSAIDs (pain), <strong>diuretics</strong> (bloating). Supplements: <strong>magnesium, vitamin B6, calcium, omega-3</strong> (check interactions).</li>
    <li>Lifestyle: exercise, <strong>CBT</strong>, complex carbs with <strong>less salt and refined sugar</strong>, 7–8 h sleep, stress reduction (journaling, meditation).</li>
</ul>

<h3>Abnormal uterine bleeding (AUB) {{p. 265}}</h3>
<table>
    <thead><tr><th>Term</th><th>Meaning</th></tr></thead>
    <tbody>
        <tr><td><strong>Menorrhagia</strong></td><td>Heavy menstrual bleeding</td></tr>
        <tr><td><strong>Hypermenorrhea</strong></td><td>Prolonged menstrual bleeding</td></tr>
        <tr><td><strong>Metrorrhagia</strong></td><td>Irregular cycles / bleeding between periods</td></tr>
        <tr><td>Also AUB</td><td>Postcoital bleeding/spotting; cycle length varying by more than 7–9 days; cycles &gt; 35 or &lt; 21 days; intermenstrual bleeding; <strong>postmenopausal bleeding</strong></td></tr>
    </tbody>
</table>
<ul>
    <li><strong>Acute AUB</strong>: sudden bleeding lasting ≥ 2 hours that needs treatment. <strong>Chronic AUB</strong>: abnormal pattern for the past <strong>6 months</strong>.</li>
    <li>Causes: trauma, ovulatory dysfunction, neoplasms, infection, <strong>fibroids or polyps</strong>, <strong>adenomyosis/endometriosis</strong>, clotting disorders, medications (hormonal contraception), <strong>ectopic pregnancy or miscarriage</strong>, PID.</li>
    <li>Heavy = soaking a pad/tampon <strong>more than once per hour</strong>; fatigue, <strong>anemia</strong>, pain. {{p. 266}}</li>
    <li>Workup: history, pelvic exam, <strong>CBC</strong> (anemia), thyroid, <strong>pregnancy test</strong>, TVUS, hysteroscopy, sonohysterography; <strong>endometrial biopsy</strong> if high risk. <strong>Any postmenopausal bleeding → evaluate</strong> (endometrial hyperplasia/cancer).</li>
    <li>Treatment: medical preferred (hormones); polypectomy or <strong>myomectomy</strong> for structural causes. Teach tracking of cycles with a calendar or app.</li>
</ul>

<h3>Perimenopause and menopause {{p. 266}}</h3>
<ul>
    <li><strong>Perimenopause</strong>: months to years of irregular cycles from fluctuating hormones; ends when menses have stopped for 12 months.</li>
    <li><strong>Menopause</strong>: <strong>12 months of amenorrhea</strong>; ages 40–59, average <strong>51</strong>. Can be <strong>induced</strong> (oophorectomy, drugs, chemotherapy/radiation) with the same symptoms.</li>
    <li>Culture: Japan (high-soy diet) reports fewer hot flashes, and its word for menopause means “renewal”. Mayan descendants report few symptoms. Western societies revere youth. {{p. 266}}</li>
</ul>
<h4>Changes {{p. 267}}</h4>
<ul>
    <li><strong>Menstrual changes</strong> (hallmark): less estrogen and progesterone → anovulation; longer/shorter cycles, heavier/lighter flow, spotting, skipped months.</li>
    <li><strong>Vasomotor symptoms (VMS)</strong> = <strong>hot flashes and night sweats</strong> (cardinal symptoms): sudden heat, flushing, sweating, palpitations. Narrowed hypothalamic thermoneutral zone. May be linked with insulin resistance, diabetes and hypertension.</li>
    <li><strong>Vaginal dryness / vulvovaginal atrophy</strong>: thin, less elastic epithelium, less lubrication, <strong>higher vaginal pH</strong> → dyspareunia and infections. Advise <strong>regular sexual activity</strong> and <strong>lubrication</strong> (inactivity shortens and narrows the vagina).</li>
    <li><strong>Metabolism</strong>: less estrogen, relatively more androgen → <strong>abdominal weight gain</strong>, muscle loss, higher BP, glucose, lipids and inflammation (metabolic syndrome, CVD). Similar to <strong>hypothyroidism</strong>, so monitor both. {{p. 268}}</li>
    <li><strong>Emotional</strong>: mood swings, irritability, depression, anxiety with <strong>no cyclic pattern</strong> (unlike PMS).</li>
</ul>
<h4>Diagnosis and management {{p. 268}}</h4>
<ul>
    <li>Labs: <strong>elevated FSH, low estradiol</strong> (one high FSH isn’t enough, since levels fluctuate); low <strong>AMH</strong>. Rule out thyroid disease, pituitary tumor and pregnancy.</li>
    <li><strong>Hormone replacement therapy (HRT)</strong>: estrogen ± progesterone; treats VMS and vaginal dryness; safe for most healthy patients.</li>
    <li><strong>Intact uterus → must take estrogen + progesterone</strong> (unopposed estrogen → endometrial hyperplasia and cancer). Progesterone may also help insomnia and mood. Routes: patch, cream, pill, vaginal insert, pellets. {{p. 269}}</li>
    <li>Risks like the pill: <strong>DVT, stroke, PE</strong>.</li>
</ul>
<div class="callout warn"><span class="callout-title">Do NOT use HRT with a history of {{p. 268}}</span><p>Breast cancer · uterine cancer · <strong>DVT or PE</strong> · clotting disorder · <strong>migraine with aura</strong> · liver disease · arterial thrombosis (<strong>MI, stroke</strong>). Use <strong>SSRIs</strong> for vasomotor symptoms instead.</p></div>
<p><strong>Lifestyle</strong>: calcium and vitamin D, exercise, stress reduction, <strong>quit smoking</strong>, less alcohol, weight control; <strong>CBT</strong> and mindfulness for mood. <strong>Nondrug hot flash relief</strong>: a fan, light pajamas, <strong>layers</strong>, yoga, acupuncture, biofeedback, meditation. {{p. 269}}</p>

<h3>Endometriosis {{p. 269}}</h3>
<ul>
    <li><strong>Endometrial-like tissue outside the uterus</strong> (ovaries, bladder, rectovaginal septum, tubes, peritoneum; rarely beyond the pelvis). ≥ 11% of US persons AFAB; most common in the 30s–40s.</li>
    <li>Possible causes: <strong>retrograde menstruation</strong>, hormonal/immune abnormalities, genetics, <strong>previous uterine/abdominal surgery</strong>.</li>
    <li>Hallmarks: <strong>pelvic pain, dysmenorrhea, dyspareunia, infertility</strong>; pain worse during menses. Bowel/bladder implants → diarrhea, constipation, <strong>painful defecation or urination during menses</strong>; spotting. Some are asymptomatic. {{p. 270}}</li>
    <li>Diagnosis: history, pelvic exam, US/MRI. <strong>Laparoscopy with histology = gold standard</strong>, but not needed before starting treatment.</li>
    <li>Treatment: <strong>NSAIDs</strong>; hormones that suppress endometrial growth (<strong>COCs, progestins, GnRH agonists</strong>); <strong>laparoscopic excision</strong> for severe pain or fertility. Usually improves after <strong>menopause</strong>.</li>
    <li>Complementary: diet, exercise, chiropractic, acupuncture, herbs (cinnamon twig, licorice root), vitamin B1, magnesium, omega-3.</li>
    <li>Nurse: education, active listening, coping strategies, support groups, pre- and postoperative care. {{p. 271}}</li>
</ul>

<h3>Polycystic ovary syndrome (PCOS) {{p. 271}}</h3>
<ul>
    <li>Common endocrine disorder (6–12% of reproductive-age persons AFAB): <strong>high androgens + insulin resistance</strong>; genetic link.</li>
    <li>Signs: irregular cycles, <strong>hyperandrogenism</strong> (hirsutism, acne, alopecia), polycystic ovaries, <strong>obesity</strong>, <strong>acanthosis nigricans</strong> (dark velvety skin, a sign of insulin resistance).</li>
    <li>Complications: <strong>insulin resistance/type 2 diabetes</strong>, metabolic syndrome, HTN, high lipids, <strong>endometrial cancer</strong> (unopposed endometrial growth from anovulation), depression/anxiety, sleep apnea, CVD, fatty liver, <strong>infertility</strong>. Pregnancy: GDM, preeclampsia, preterm birth. {{p. 271}}</li>
    <li><strong>Rotterdam criteria (2 of 3)</strong>: menstrual irregularity · hyperandrogenism (clinical or lab) · polycystic ovaries on US, with other causes excluded (pregnancy, prolactin, thyroid, FSH). Labs: testosterone, DHEAS; then screen glucose and lipids. {{p. 272}}</li>
    <li>Treatment: <strong>COCs</strong> (regulate cycles, protect the endometrium, lower androgens) ± <strong>spironolactone</strong> (antiandrogen); hair removal; <strong>metformin</strong>; weight loss (even modest loss improves cycles, hormones and fertility). See Ch. 4 for fertility treatment. {{p. 273}}</li>
</ul>
<div class="callout memo"><span class="callout-title">Pharmacology: metformin {{p. 273}}</span>
<ul>
    <li>Biguanide. Oral 500–2,550 mg/day, <strong>with meals</strong>, titrated up by 500 mg/week.</li>
    <li>Action: improves insulin sensitivity, less gut glucose absorption, less hepatic glucose output. In PCOS, lower insulin → normal LH and androgens → <strong>ovulation returns</strong>.</li>
    <li><strong>Black box: lactic acidosis</strong> (rare). Contraindicated in <strong>renal disease</strong> and metabolic acidosis.</li>
    <li>Side effects: <strong>GI (diarrhea, nausea, vomiting)</strong>; reduce by taking with food and titrating slowly. Also headache, hypoglycemia.</li>
</ul></div>

<h3>Chronic pelvic pain (CPP) {{p. 273}}</h3>
<ul>
    <li>Persistent or recurrent pelvic pain for <strong>≥ 6 months</strong> (constant, cyclic or activity-related).</li>
    <li>Causes: endometriosis, fibroids, IBS, <strong>interstitial cystitis</strong>, UTI, dysmenorrhea, <strong>PID</strong>, urinary/GI cancer, posture, pregnancy-related back strain, musculoskeletal problems. <strong>Up to 50% never get a diagnosis.</strong> {{p. 274}}</li>
    <li>Assessment: link pain to menses, urination, sex and bowel movements. <strong>Most importantly, ask about red flags of systemic disease</strong>: <strong>unexplained weight loss</strong>, blood in urine or stool, postcoital, intermenstrual or postmenopausal bleeding. Imaging; diagnostic laparoscopy.</li>
    <li>Treat the cause: antibiotics (PID/UTI), hormones (dysmenorrhea/endometriosis), surgery (cysts/fibroids), physical therapy, IBS/IC medications. If no cause is found: NSAIDs; <strong>gabapentin or pregabalin</strong> for neuropathic pain.</li>
    <li>Nondrug: physical therapy, pelvic floor exercise, relaxation, exercise/weight loss, diet, acupuncture, nerve stimulation, biofeedback, nerve blocks.</li>
    <li><strong>53%</strong> have moderate-severe depression/anxiety. Empathetic listening, education, interdisciplinary care, support groups. {{p. 275}}</li>
</ul>`,
        },
        '6.2': {
            key: [
                '<strong>Pelvic floor disorders</strong>: weakened pelvic muscles/connective tissue → organs sag (prolapse) → pressure, fullness, incontinence, constipation. Risk: <strong>pregnancy, parity, vaginal birth</strong>, chronic cough, obesity, constipation, prior hysterectomy.',
                '<strong>Cystocele</strong> = bladder bulges into the <strong>anterior</strong> vaginal wall (urgency, frequency, incomplete emptying, UTIs). <strong>Rectocele</strong> = rectum bulges into the <strong>posterior</strong> wall (constipation, trapped stool). <strong>Uterine prolapse</strong> = uterus descends into the vagina.',
                'Treatment: <strong>Kegels</strong>/pelvic floor therapy, bladder training, HRT (tissue tone), <strong>pessary</strong> (silicone support device, fitted), surgical repair; manage weight and constipation.',
                '<strong>Fistula</strong> = abnormal connection: <strong>vesicovaginal</strong> (bladder-vagina → urine leaks from the vagina), <strong>rectovaginal</strong> (stool), urethrovaginal. Most common cause: <strong>obstetric trauma</strong> (prolonged labor); also FGM.',
                '<strong>Müllerian anomalies</strong>: didelphys (2 cavities, 2 cervixes), bicornuate (2 cavities, 1 cervix), unicornuate, septate, arcuate (variant of normal). Vaginal septum/<strong>imperforate hymen</strong> → pain, retained menses.',
            ],
            html: `
<h3>Pelvic floor disorders {{p. 275}}</h3>
<p>The <strong>pelvic floor</strong> muscles support the uterus, bladder and bowel. When muscles and connective tissue relax, organs sag (<strong>pelvic organ prolapse</strong>), causing pain, urine/stool leakage, constipation, vaginal fullness, difficult defecation, and effects on intimacy and quality of life.</p>
<ul>
    <li><strong>Risk factors</strong>: <strong>pregnancy, higher parity, vaginal delivery</strong>, connective tissue disorders, <strong>chronic cough</strong>, <strong>obesity, chronic constipation</strong>, previous surgery (hysterectomy).</li>
    <li>Prevention: weight reduction, preventing constipation.</li>
    <li>Often undiagnosed: patients are embarrassed or think it’s normal aging, so ask.</li>
</ul>
<table>
    <thead><tr><th>Disorder</th><th>What happens</th><th>Signs</th></tr></thead>
    <tbody>
        <tr><td><strong>Cystocele</strong></td><td>Bladder bulges into the <strong>anterior</strong> vaginal wall</td><td>Vaginal pressure/fullness, low back pain, less sexual satisfaction, <strong>urgency and frequency</strong>, incomplete emptying → <strong>frequent UTIs</strong> {{p. 276}}</td></tr>
        <tr><td><strong>Rectocele</strong></td><td>Rectum bulges into the <strong>posterior</strong> vaginal wall</td><td>Pressure, “something falling out”, back pain, painful sex, <strong>constipation, stool trapped</strong> in the rectocele</td></tr>
        <tr><td><strong>Uterine prolapse</strong></td><td>Uterus descends into the vagina</td><td>Urinary incontinence, vaginal fullness/bulge, constipation, back pain</td></tr>
    </tbody>
</table>
<p><strong>Diagnosis</strong>: exam and symptoms; rule out infection first; <strong>pelvic floor questionnaires</strong> (pressure, bulging, stool difficulty, incontinence, pain) guide goals; cystoscopy, urodynamics, colonoscopy. {{p. 276}}</p>
<p><strong>Treatment</strong>: manage modifiable risks · <strong>pelvic floor strengthening (Kegels)</strong> at home or with a therapist · bladder training · <strong>HRT</strong> (muscle tone, elasticity, blood flow) · <strong>pessary</strong> (medical-grade silicone device in the vagina that supports organs; may need several fittings) · surgical repair or hysterectomy. {{p. 277}}</p>

<h3>Fistulas {{p. 277}}</h3>
<ul>
    <li><strong>Fistula</strong> = abnormal connection between two body surfaces. Vaginal fistula types: <strong>rectovaginal</strong> (rectum–vagina), <strong>vesicovaginal</strong> (bladder–vagina), <strong>urethrovaginal</strong>.</li>
    <li>Signs: <strong>leakage of urine or stool from the vagina</strong>, recurrent urinary/vaginal infections, foul odor. Small ones may heal; most need <strong>surgery</strong>.</li>
    <li>Most common cause: <strong>obstetric trauma</strong>: fetal pressure → ischemia and tissue breakdown, especially with <strong>prolonged labor/pushing</strong>, poor nutrition and no access to cesarean (low-resource countries); also episiotomy/laceration repair, <strong>operative vaginal delivery</strong> (vacuum/forceps), surgery, congenital causes, <strong>FGM</strong>. {{p. 278}}</li>
</ul>
<div class="callout memo"><span class="callout-title">Female genital mutilation (FGM) {{p. 278}}</span><p>Nonmedical partial or total removal of the external genitalia; practiced in more than 30 countries (Africa, Middle East, parts of Asia and Latin America) and immigrant communities. <strong>Not endorsed by any religion</strong>; an international <strong>human rights violation</strong>. UN/UNFPA/UNICEF aim to end it by 2030; <strong>February 6</strong> = International Day of Zero Tolerance. Nurses must recognize its lasting physical and emotional complications.</p></div>

<h3>Congenital malformations {{p. 278}}</h3>
<p>Abnormality formed during embryonic development. In the uterus/vagina = <strong>Müllerian anomaly</strong> (the Müllerian ducts form the uterus, cervix and upper vagina). Often found only with <strong>infertility, recurrent miscarriage, ectopic pregnancy</strong>, pelvic pain or painful penetration. Diagnosis: pelvic exam, US, surgery.</p>
<table>
    <thead><tr><th>Uterine shape</th><th>Description</th></tr></thead>
    <tbody>
        <tr><td><strong>Didelphys</strong></td><td>Two separate cavities and <strong>two cervixes</strong></td></tr>
        <tr><td><strong>Bicornuate</strong></td><td>Two cavities, <strong>one cervix</strong> (heart shape)</td></tr>
        <tr><td><strong>Unicornuate</strong></td><td>A single horn</td></tr>
        <tr><td><strong>Septate</strong></td><td>A septum divides the cavity</td></tr>
        <tr><td><strong>Arcuate</strong></td><td>Concave fundus; often a <strong>variant of normal</strong></td></tr>
    </tbody>
</table>
<p>Effects: painful periods, <strong>miscarriage, preterm birth</strong>; some are surgically correctable.</p>
<ul>
    <li><strong>Vaginal septum</strong>: often found with the first attempt at penetration (pain); may come with uterine/bladder anomalies (same developmental period), so refer to a <strong>urogynecologist</strong>. Can trap menstrual blood (painful menses). Simple surgical removal. {{p. 279}}</li>
    <li><strong>Imperforate hymen</strong>: monthly pain without visible periods (blood trapped); outpatient opening procedure relieves it.</li>
</ul>`,
        },
        '6.3': {
            key: [
                '<strong>Fibroids (leiomyomas)</strong>: benign smooth-muscle tumors fed by estrogen and progesterone; 50% asymptomatic; <strong>heavy menses</strong>, pelvic pain/pressure, urinary frequency; <strong>nontender, lumpy, enlarged</strong> uterus; <strong>shrink after menopause</strong>.',
                'Fibroid treatment: <strong>LNG-IUD</strong>, <strong>tranexamic acid</strong>, anovulatory hormones; <strong>myomectomy</strong> (keeps fertility) or hysterectomy.',
                '<strong>Tranexamic acid</strong>: 650 mg TID for up to <strong>5 days</strong> starting on day 1 of menses; <strong>thrombosis risk</strong>, so not with combined hormonal contraceptives.',
                'Endometrial polyps: biopsy if <strong>peri/postmenopausal</strong>; any postmenopausal bleeding needs workup. Ovarian cysts: mostly benign; rupture or <strong>torsion</strong> may need surgery.',
                'Cervix: <strong>Nabothian cysts</strong> (benign mucous), polyps, <strong>condylomata acuminata</strong> (HPV warts; vaccine prevents &gt; 90%). <strong>Bartholin’s cyst</strong>: <strong>warm compresses/sitz baths</strong> → antibiotics or drainage.',
            ],
            html: `
<p>Benign (not cancerous) growths can still disturb quality of life. If they cause no symptoms or complications, they don’t need removal. {{p. 279}}</p>

<h3>Fibroids (leiomyomas) {{p. 280}}</h3>
<ul>
    <li>Benign <strong>solid</strong> tumor of uterine <strong>smooth muscle</strong>; growth encouraged by <strong>estrogen and progesterone</strong>. Location: subserosal, intramural, submucosal (Fig. 4.13).</li>
    <li>~<strong>50% have no symptoms</strong> (found on routine exam). Symptoms: <strong>heavy menstrual bleeding</strong> (most common) ± pain, pelvic pain, urinary frequency; large ones → <strong>pelvic heaviness, rectal pressure</strong>, painful sex.</li>
    <li>Slow-growing; usually <strong>regress after menopause</strong> (hormones fall).</li>
    <li>Exam: uterus <strong>nontender, lumpy, enlarged, irregular</strong>. Confirm with <strong>US or MRI</strong>.</li>
    <li>Treatment: <strong>LNG-IUD</strong>, antifibrinolytic <strong>tranexamic acid</strong>, medications causing anovulation (shrink fibroids); surgery: <strong>myomectomy</strong> (preserves fertility) or <strong>hysterectomy</strong>.</li>
</ul>
<div class="callout memo"><span class="callout-title">Pharmacology: tranexamic acid (Lysteda) {{p. 280}}</span>
<ul>
    <li>Synthetic lysine; <strong>antifibrinolytic</strong> (prevents clot breakdown by blocking plasminogen → less menstrual fibrinolysis).</li>
    <li><strong>650 mg orally three times daily</strong>, starting on the <strong>first day of menses</strong>, for <strong>no more than 5 days</strong> (max 6 doses/24 h). Swallow whole.</li>
    <li>Indication: <strong>heavy menstrual bleeding</strong>.</li>
    <li><strong>Warning: thromboembolism.</strong> Contraindicated with thrombosis risk, history of clots/hypercoagulability, and <strong>combined hormonal contraceptives</strong>.</li>
    <li>Side effects: headache, sinus symptoms, back/abdominal/muscle pain, cramps, migraine, anemia, fatigue. Teach clot signs and timing. {{p. 281}}</li>
</ul></div>

<h3>Uterine (endometrial) polyps {{p. 281}}</h3>
<p>Growths from the endometrium; usually benign. Treat if large (protruding through the cervix) or symptomatic (irregular/heavy menses). <strong>Polyps in peri- or postmenopause → biopsy</strong>; any postmenopausal bleeding needs workup. Diagnosis by <strong>TVUS</strong>; treatment with anovulatory hormones or removal. Nurse explains the TVUS and stays with the patient.</p>

<h3>Benign ovarian growths {{p. 281}}</h3>
<p><strong>Ovarian cyst</strong>: blood- or fluid-filled sac on/near the ovary; often an incidental finding; most are benign and asymptomatic. Follow-up depends on age, menopausal status and history (Society of Radiologists in Ultrasound). Can <strong>rupture</strong> (abdominal pain) or cause <strong>ovarian torsion</strong> (twisting), and bleeding or torsion → <strong>surgery</strong>. {{p. 282}}</p>
<div class="callout tip"><span class="callout-title">Exam tip</span><p>Acute abdominal pain with a suspected cyst: rule out the emergencies first: <strong>ectopic pregnancy, appendicitis, ovarian torsion</strong>.</p></div>

<h3>Benign cervical growths {{p. 282}}</h3>
<p>Usually incidental; may cause <strong>postcoital bleeding</strong>. Teach that abnormal bleeding (after sex, midcycle) needs an exam.</p>
<table>
    <thead><tr><th>Growth</th><th>Features</th><th>Treatment</th></tr></thead>
    <tbody>
        <tr><td><strong>Nabothian (mucous) cysts</strong></td><td>From mucus-producing tissue; benign</td><td>None unless very large</td></tr>
        <tr><td><strong>Cervical polyp</strong></td><td>Fleshy, red growth protruding from the cervix</td><td>Only if bothersome</td></tr>
        <tr><td><strong>Condylomata acuminata</strong> (warts)</td><td><strong>HPV</strong>; cauliflower-like; also vagina, vulva, perianal</td><td>Acidic solution; surgery if severe. <strong>HPV vaccine prevents &gt; 90%</strong> of wart- and cancer-causing strains</td></tr>
    </tbody>
</table>

<h3>Benign vulvar/vaginal growths: Bartholin’s cyst {{p. 282}}</h3>
<ul>
    <li>Bartholin’s glands (inside the vaginal opening) lubricate. Blockage → fluid-filled <strong>cyst</strong> or <strong>abscess</strong>. {{p. 283}}</li>
    <li>May drain on its own; if enlarged and painful: <strong>warm compresses or sitz baths</strong> first → antibiotics if large/inflamed/infected → provider drainage.</li>
    <li>Abscess organisms: <strong>E. coli, MRSA, gonorrhea, chlamydia</strong>.</li>
</ul>
<div class="callout nurse"><span class="callout-title">Genital piercings {{p. 283}}</span><p>Risks: infection, scarring, infertility from infection, tissue damage. Be ready to <strong>remove them</strong> for <strong>childbirth</strong>, breast-feeding (nipple), <strong>electrocautery</strong>, radiologic procedures and infection.</p></div>`,
        },
        '6.4': {
            key: [
                '<strong>Cervical cancer</strong>: slow-growing, mostly <strong>HPV</strong> (types <strong>16 and 18 cause &gt; 70%</strong>). Risks: HPV, <strong>HIV, smoking</strong>. Often silent; postcoital/intermenstrual bleeding, discharge, pain. HPV vaccine up to age 45.',
                'Abnormal Pap/HPV → <strong>ASCCP</strong> risk-based plan → <strong>colposcopy ± biopsy</strong> → treatment: cryotherapy, laser ablation, <strong>conization</strong>, <strong>LEEP</strong>.',
                '<strong>Ovarian cancer</strong>: <strong>vague symptoms</strong> (bloating, early satiety, flatulence, pelvic pain) → found late. Risks: <strong>BRCA</strong>, family history, obesity, nulliparity, infertility, endometriosis, early menarche/late menopause. <strong>CA-125 is not a screening test.</strong>',
                '<strong>Endometrial cancer</strong>: risk = <strong>unopposed estrogen</strong> (PCOS anovulation, estrogen-only HRT), nulliparity, infertility. Sign = <strong>abnormal/postmenopausal bleeding</strong> → <strong>endometrial biopsy</strong>.',
                'Vulvar/vaginal cancer (rare, HPV): <strong>persistent itching/burning</strong>, a sore that won’t heal, lumps, colored patches, groin nodes → punch/shave/needle biopsy.',
                'Hysterectomy care: early ambulation (clots), fiber/fluids/stool softener, watch for urinary retention, <strong>pelvic rest ≥ 6 weeks</strong>, no heavy lifting; removing the ovaries → surgical menopause.',
            ],
            html: `
<p>Prevention and early detection are key. USPSTF: no routine cervical screening &lt; 21, &gt; 65 (after adequate negatives) or after hysterectomy. Organizations don’t always agree, so give patients current evidence-based information. {{p. 283}}</p>

<h3>Cervical cancer {{p. 284}}</h3>
<ul>
    <li>Slow-growing cancer of the cervix; mostly due to <strong>HPV</strong>. More than 500 strains; <strong>HPV 16 and 18</strong> cause <strong>70% of cervical</strong>, 90% of anal and 45% of oropharyngeal cancers.</li>
    <li><strong>Risk factors</strong>: HPV infection, <strong>HIV-positive status</strong>, <strong>cigarette smoking</strong>.</li>
    <li><strong>HPV vaccine</strong>: preteens up to age 45.</li>
    <li>Precancer is usually <strong>asymptomatic</strong> (found by screening). Signs: <strong>bleeding after sex or between periods</strong>, pelvic pain, unusual discharge. Annual screening does not lower mortality; intervals are based on HPV behavior.</li>
</ul>
<h4>Diagnosis {{p. 284}}</h4>
<ul>
    <li><strong>Co-testing</strong> = Pap (cytology, endocervical brush) + HPV DNA (strain typing). Results are categorized (Bethesda) and entered into the <strong>2019 ASCCP risk-based guidelines</strong> (website/app) for an individualized plan. {{Table 6.2 · p. 285}}</li>
    <li>Further testing: <strong>colposcopy</strong> (magnified, lighted view; solutions highlight abnormal areas) ± <strong>biopsy</strong>.</li>
</ul>
<h4>Treatment of precancer/cancer {{p. 285}}</h4>
<ul>
    <li><strong>Cryotherapy</strong> (freezing) · <strong>laser ablation</strong> · <strong>conization</strong> (cone-shaped excision of the full thickness of abnormal cells) · <strong>LEEP</strong> (loop electrosurgical excision: removes and cauterizes at once, and the tissue goes to pathology).</li>
</ul>
<div class="callout nurse"><span class="callout-title">Nursing care {{p. 285}}</span><p>Before a Pap: explain, <strong>show the speculum and the clicking sound</strong>, get consent and tell the patient they can withdraw it at any time. After colposcopy/LEEP/biopsy: <strong>some vaginal bleeding is expected</strong>; give a peripad and report signs; give realistic timelines for results.</p></div>

<h3>Ovarian cancer {{p. 285}}</h3>
<ul>
    <li>Abnormal, rapidly multiplying cells that invade nearby tissue; genetic or sporadic. <strong>Lower risk</strong> with anovulatory contraceptives, breast-feeding, multiple pregnancies.</li>
    <li><strong>Risk factors</strong>: family history, <strong>BRCA1/BRCA2</strong>, obesity, <strong>nulliparity</strong>, infertility, endometriosis, <strong>early menarche/late menopause</strong>. {{p. 286}}</li>
    <li><strong>Vague symptoms → late diagnosis</strong> → high morbidity and mortality: abdominal fullness, flatulence, <strong>early satiety</strong>, pelvic pain, irregular bleeding; later weight loss and fatigue. Often found by palpation late.</li>
    <li>Diagnosis: US, CT, MRI, PET (spread). <strong>CA-125</strong> is often raised but <strong>not specific enough</strong> to screen.</li>
    <li>Treatment depends on stage: surgery (ovaries, tubes, uterus) ± chemotherapy/radiation.</li>
</ul>
<table>
    <thead><tr><th>Stage</th><th>Spread {{Table 6.3 · p. 286}}</th></tr></thead>
    <tbody>
        <tr><td>I</td><td>Confined to one or both ovaries</td></tr>
        <tr><td>II</td><td>Uterus or other nearby pelvic organs</td></tr>
        <tr><td>III</td><td>Lymph nodes or abdominal lining</td></tr>
        <tr><td>IV</td><td>Distant organs (lung, liver)</td></tr>
    </tbody>
</table>
<div class="callout memo"><span class="callout-title">Cancer in pregnancy {{p. 287}}</span><p><strong>Cervical and ovarian</strong> are the most common cancers in pregnancy. MRI and US are safe. Cervical: treat after fetal lung maturity, with <strong>cesarean</strong> birth. Ovarian: remove the ovary/adnexa if not metastatic; advanced disease needs chemo/radiation, which is incompatible with pregnancy. Patients face hard choices; give ethical support.</p></div>
<p>Nursing: therapeutic listening, patience with repeated questions, patient-centered care (feelings, religion/culture, family support). {{p. 287}}</p>

<h3>Uterine cancer {{p. 287}}</h3>
<ul>
    <li><strong>Endometrial cancer</strong> (lining, common; about 12,000 US deaths/year) or <strong>uterine sarcoma</strong> (muscle, rare). Highly survivable if found early.</li>
    <li><strong>Risk: prolonged unopposed estrogen</strong> (progesterone normally stops lining growth): <strong>PCOS with anovulation</strong>, <strong>estrogen-only HRT</strong> with a uterus; infertility, nulliparity. {{p. 288}}</li>
    <li>Sign: <strong>unusual bleeding</strong>: after sex, between periods, <strong>after menopause</strong>, so evaluate promptly.</li>
    <li><strong>Endometrial biopsy</strong>: speculum, thin tool through the cervix, samples from several areas. Afterward: cramping and light bleeding up to 24 h; take an NSAID; report bleeding soaking a pad every 1–2 h, abdominal pain, fever. The nurse prepares and supports the patient and handles the specimen.</li>
    <li>Treatment: <strong>hysterectomy</strong> ± tubes and ovaries; chemo/radiation if advanced.</li>
</ul>

<h3>Vulvar and vaginal cancer {{p. 288}}</h3>
<ul>
    <li>Very rare; linked to <strong>HPV</strong> (prevent with the vaccine), multiple partners, smoking. {{p. 289}}</li>
    <li>Most common sign: <strong>persistent itching or burning</strong> of the vulva or <strong>a sore that won’t heal</strong>. Also lumps, wart-like growths, thickened red/white/brown patches, a changing mole, <strong>hard/swollen groin lymph nodes</strong>.</li>
    <li>Biopsy: <strong>punch</strong> (section to judge thickness), <strong>shave</strong> (surface), <strong>needle</strong> (inside the lesion). Refer to a gynecologic oncologist.</li>
</ul>

<h3>Hysterectomy {{p. 289}}</h3>
<ul>
    <li>Surgical removal of the uterus; one of the most common US surgeries; <strong>no future pregnancy</strong>.</li>
    <li>Approaches: <strong>vaginal, abdominal, laparoscopic, robot-assisted</strong> (shared decision making).</li>
    <li>Ovaries/tubes may stay (e.g., for fibroids) or be removed (cancer). <strong>Removing the ovaries → surgical menopause</strong> (may need HRT). {{p. 290}}</li>
    <li>Risks: infection, hemorrhage, <strong>bladder injury</strong>, injury to nearby organs, <strong>blood clots</strong>, anesthesia complications.</li>
    <li><strong>Pre-op</strong>: EKG, CBC, prophylactic antibiotics, <strong>VTE prophylaxis</strong> plan.</li>
    <li><strong>Post-op</strong>: 1–3 day stay; <strong>early ambulation</strong> (clots); <strong>constipation and urinary retention</strong> are common (fiber, fluids, stool softener); vaginal bleeding (peripads); <strong>pelvic rest ≥ 6 weeks (nothing in the vagina)</strong>; no heavy lifting until cleared.</li>
</ul>
<p><strong>Henrietta Lacks</strong>: her aggressive cervical cancer cells (HeLa, “immortal”) were taken <strong>without consent</strong> in the 1950s and drove discoveries such as the polio vaccine. Her family settled a lawsuit in 2023, an example of research ethics and consent. {{p. 290}}</p>`,
        },
    },
    terms: [
        ['abnormal uterine bleeding (AUB)', 'common gynecologic condition with atypical bleeding patterns that deviate from a person’s normal menstrual cycle'],
        ['Bartholin’s cyst', 'fluid-filled sac created when a Bartholin gland becomes blocked'],
        ['cervical cancer', 'slow-growing cancer found in the cervix'],
        ['congenital malformation', 'abnormality of a structure that develops during formation of the embryo'],
        ['cystocele', 'prolapse of the bladder into the anterior vaginal wall'],
        ['endometriosis', 'chronic, often debilitating disorder with endometrial-like tissue outside the uterus'],
        ['fistula', 'abnormal connection between two surfaces in the body that are not meant to be connected'],
        ['hypermenorrhea', 'prolonged menstrual bleeding'],
        ['hysterectomy', 'surgical removal of the uterus'],
        ['leiomyoma (fibroid)', 'benign tumor that develops from the smooth muscle tissue of the uterus'],
        ['menorrhagia', 'heavy menstrual bleeding'],
        ['metrorrhagia', 'irregular menstrual cycles'],
        ['ovarian cyst', 'blood- or fluid-filled sac found on or near the ovary'],
        ['pelvic floor disorders', 'any condition that decreases the integrity of the pelvic muscular structures'],
        ['perimenopause', 'phase of menstrual irregularity from fluctuating hormones, lasting months to years and ending when menses have ceased for 12 months'],
        ['premenstrual dysphoric disorder (PMDD)', 'more extreme form of PMS causing severe depression and anxiety in the luteal phase'],
        ['premenstrual syndrome (PMS)', 'cyclic luteal-phase disorder with mood swings, irritability, anxiety, fatigue, breast tenderness, bloating, and appetite or sleep changes'],
        ['primary amenorrhea', 'absence of menarche by the age of 16 years'],
        ['primary dysmenorrhea', 'typical menstrual pain that occurs before or during a period'],
        ['rectocele', 'prolapse of the rectum into the posterior vaginal wall'],
        ['secondary amenorrhea', 'absence of menstruation for three or more cycles'],
        ['secondary dysmenorrhea', 'menstrual pain caused by an underlying condition'],
        ['uterine malformation', 'congenital malformation that changes the shape of the uterus'],
        ['uterine polyp', 'benign growth that develops in the cervix or uterus'],
        ['uterine prolapse', 'the pelvic floor weakens and the uterus descends into the vagina'],
        ['vaginal fistula', 'opening between the vagina and another anatomical structure'],
        ['vasomotor symptoms', 'cardinal symptoms of perimenopause and menopause: hot flashes and night sweats'],
    ],
    cards: [
        { f: 'Why do people in their late 40s gain weight around the midsection?', b: 'In perimenopause, estrogen falls while androgens are relatively higher, which shifts fat to the abdomen and causes muscle loss and metabolic changes (higher BP, glucose, lipids). Hypothyroidism can look similar, so monitor both.', ref: '6.1' },
        { f: 'Why might prior pelvic surgery increase the risk of endometriosis?', b: 'Surgery on the uterus or abdomen (e.g., cesarean) can displace endometrial cells outside the uterus, where they implant and respond to cyclic hormones. Previous uterine/abdominal surgery is a suspected cause.', ref: '6.1' },
        { f: 'Interventions to reduce pelvic floor dysfunction', b: 'Kegel/pelvic floor exercises (± pelvic floor therapist) · weight reduction · prevent constipation · treat chronic cough · bladder training · HRT for tissue tone · pessary · surgical repair if needed.', ref: '6.2' },
        { f: 'Common benign growths of the female reproductive tract', b: 'Uterus: fibroids (leiomyomas), endometrial polyps. Ovary: ovarian cysts. Cervix: Nabothian cysts, cervical polyps, condylomata (HPV warts). Vulva: Bartholin’s cyst/abscess.', ref: '6.3' },
        { f: 'Two diagnostic modalities for benign growths', b: 'Ultrasound (transvaginal or pelvic): fibroids, polyps, cysts. MRI: confirms and maps fibroids. (Sonohysterography and hysteroscopy for cavity lesions.)', ref: '6.3' },
        { f: 'Signs and symptoms of vulvar cancer', b: 'Persistent itching, burning or pain · lump, sore, swelling or wart-like growth · thickened red/white/brown patches · mole that changes · lesion that won’t heal · hard/swollen groin lymph nodes.', ref: '6.4' },
        { f: 'Primary vs. secondary amenorrhea', b: 'Primary: no menarche by age 16 (e.g., Turner syndrome).\nSecondary: no menses for 3+ consecutive cycles after regular cycles (pregnancy, weight loss, anovulation, tumors). Rule out pregnancy first.', ref: '6.1' },
        { f: 'First-line treatment for dysmenorrhea and why', b: 'NSAIDs (ibuprofen, naproxen): they inhibit prostaglandin synthesis, which drives uterine cramping. Then hormonal contraceptives; also heat, exercise, TENS, acupuncture.', ref: '6.1' },
        { f: 'PMS management', b: 'Severe: SSRIs or hormonal contraceptives · NSAIDs (pain) · diuretics (bloating) · supplements (magnesium, B6, calcium, omega-3) · exercise, CBT, less salt and sugar, complex carbs, 7–8 h sleep, stress reduction.', ref: '6.1' },
        { f: 'Menorrhagia vs. hypermenorrhea vs. metrorrhagia', b: 'Menorrhagia = heavy bleeding.\nHypermenorrhea = prolonged bleeding.\nMetrorrhagia = irregular cycles/bleeding between periods.', ref: '6.1' },
        { f: 'Why must a person with a uterus take progesterone with estrogen HRT?', b: 'Unopposed estrogen causes endometrial hyperplasia and raises endometrial cancer risk. Progesterone opposes it (and may help sleep and mood).', ref: '6.1' },
        { f: 'Contraindications to HRT', b: 'Breast cancer · uterine cancer · DVT/PE · clotting disorder · migraine with aura · liver disease · MI or stroke. Alternative for hot flashes: SSRIs.', ref: '6.1' },
        { f: 'Nonpharmacologic relief of hot flashes', b: 'Fan, lightweight pajamas, dressing in layers, stress reduction, yoga, acupuncture, mind-body therapy, biofeedback, meditation, CBT. Also stop smoking and limit alcohol.', ref: '6.1' },
        { f: 'Hallmark symptoms of endometriosis and gold-standard diagnosis', b: 'Pelvic pain, dysmenorrhea, dyspareunia, infertility (± painful bowel movements or urination during menses). Gold standard: laparoscopy with histologic confirmation.', ref: '6.1' },
        { f: 'Long-term complications of PCOS', b: 'Insulin resistance/type 2 diabetes · metabolic syndrome · hypertension · dyslipidemia · endometrial cancer · depression/anxiety · sleep apnea · CVD · fatty liver · infertility; in pregnancy: GDM, preeclampsia, preterm birth.', ref: '6.1' },
        { f: 'Metformin teaching', b: 'Take with meals; titrate slowly to reduce GI upset (diarrhea, nausea). Black box: lactic acidosis. Contraindicated in renal disease. In PCOS it can restore ovulation.', ref: '6.1' },
        { f: 'Cystocele vs. rectocele', b: 'Cystocele: bladder bulges into the ANTERIOR vaginal wall (urgency, frequency, incomplete emptying, UTIs).\nRectocele: rectum bulges into the POSTERIOR wall (constipation, trapped stool).', ref: '6.2' },
        { f: 'Most common cause of vaginal fistulas', b: 'Obstetric trauma: prolonged pressure of the fetal head in obstructed/prolonged labor causes ischemia and tissue breakdown. Also lacerations/episiotomy, operative delivery, surgery, FGM. Sign: urine or stool leaking from the vagina.', ref: '6.2' },
        { f: 'Didelphys vs. bicornuate uterus', b: 'Didelphys: two cavities AND two cervixes.\nBicornuate: two cavities, ONE cervix.\n(Arcuate: concave, often a normal variant.)', ref: '6.2' },
        { f: 'Fibroid assessment findings and treatment', b: 'Heavy menses, pelvic pressure, urinary frequency; uterus nontender, lumpy, enlarged. Confirm with US/MRI. Treat: LNG-IUD, tranexamic acid, anovulatory hormones, myomectomy (keeps fertility) or hysterectomy. Shrink after menopause.', ref: '6.3' },
        { f: 'Tranexamic acid dosing and warning', b: '650 mg PO TID starting day 1 of menses, max 5 days (max 6 doses/24 h). Antifibrinolytic → risk of thrombosis; not with combined hormonal contraceptives or a clotting history.', ref: '6.3' },
        { f: 'Bartholin’s cyst management', b: 'Warm compresses or sitz baths first → antibiotics if large, inflamed or infected → provider drainage. Abscess organisms: E. coli, MRSA, gonorrhea, chlamydia.', ref: '6.3' },
        { f: 'Cervical cancer risk factors', b: 'HPV infection (types 16 and 18 cause > 70%), HIV-positive status, smoking. Prevent with the HPV vaccine (preteens to age 45) and screening.', ref: '6.4' },
        { f: 'Treatments for cervical precancer', b: 'Cryotherapy (freezing) · laser ablation · conization (cone excision) · LEEP (loop electrosurgical excision + cautery; tissue to pathology). Expect some bleeding afterward.', ref: '6.4' },
        { f: 'Why is ovarian cancer usually found late?', b: 'Symptoms are vague and nonspecific (bloating, fullness, early satiety, flatulence, pelvic pain) and there is no reliable screening test; CA-125 is not specific.', ref: '6.4' },
        { f: 'Main risk factor and sign of endometrial cancer', b: 'Risk: unopposed estrogen (PCOS anovulation, estrogen-only HRT), nulliparity, infertility.\nSign: abnormal or postmenopausal bleeding → endometrial biopsy.', ref: '6.4' },
        { f: 'Post-hysterectomy teaching', b: 'Walk early (prevent clots) · fiber, fluids, stool softener (constipation) · watch for urinary retention · peripads for bleeding · pelvic rest (nothing in the vagina) ≥ 6 weeks · no heavy lifting until cleared · removing the ovaries → surgical menopause.', ref: '6.4' },
    ],
    quiz: [
        { src: 'book', ref: '6.1', q: 'What condition would the nurse suspect in a patient who presents with very painful menstrual cramps that prevent them from working each month?', o: ['amenorrhea', 'dysmenorrhea', 'premenstrual syndrome', 'abnormal uterine bleeding'], a: 1, why: 'Dysmenorrhea = painful menstruation severe enough to interfere with daily life.' },
        { src: 'book', ref: '6.1', q: 'What lifestyle change would the nurse recommend for a patient who presents with multiple symptoms of perimenopause?', o: ['Switch to flannel sheets and use extra blankets to stay warm at night.', 'Avoid sexual intercourse until vaginal dryness passes.', 'Have a glass of wine each night before bed to reduce insomnia.', 'Begin a regular exercise routine.'], a: 3, why: 'Regular physical activity is a recommended lifestyle change. Heavy bedding worsens night sweats, avoiding sex worsens vaginal atrophy, and alcohol should be reduced.' },
        { src: 'book', ref: '6.1', q: 'What condition would the nurse include when teaching a patient about the potential complications of polycystic ovary syndrome (PCOS)?', o: ['breast cancer', 'cirrhosis of the liver', 'insulin resistance', 'insomnia'], a: 2, why: 'PCOS raises the risk of insulin resistance and diabetes (also metabolic syndrome, endometrial cancer, nonalcoholic fatty liver). Cirrhosis and breast cancer are not listed.' },
        { src: 'book', ref: '6.1', q: 'What type of medication would the nurse prepare to speak about with a patient recently diagnosed with endometriosis?', o: ['oral contraceptives', 'selective serotonin inhibitors', 'dopamine agonist', 'bisphosphonates'], a: 0, why: 'Endometriosis is treated with NSAIDs and hormones that suppress endometrial growth (oral contraceptives, progestins, GnRH agonists).' },
        { src: 'book', ref: '6.1', q: 'What question is most important for the nurse to ask a patient who presents with pelvic pain for the past year?', o: ['“Is the pain associated with having a bowel movement or passing urine?”', '“Have you had any unexplained weight loss?”', '“Have you tried taking ibuprofen or acetaminophen?”', '“Do you have many sexual partners?”'], a: 1, why: 'The chapter says that, most importantly, the provider should ask about symptoms of systemic disease such as unexplained weight loss or bleeding, because they could signal cancer.' },
        { src: 'book', ref: '6.2', q: 'A 58-year-old postmenopausal woman presents with a sensation of pelvic heaviness and states she feels like something is sitting in her vagina. On examination, the provider notes a visible protrusion of the bladder into the anterior vaginal wall. What structural disorder of the female reproductive system is consistent with these findings?', o: ['pelvic floor prolapse', 'DES exposure', 'vaginal septum', 'bladder fistula'], a: 0, why: 'The bladder bulging into the anterior vaginal wall is a cystocele, a form of pelvic organ (pelvic floor) prolapse.' },
        { src: 'book', ref: '6.2', q: 'A 28-year-old patient presents with recurrent urinary tract infections and continuous wet sensation in her undergarments. On examination, the provider observes leaking of urine noted in the vagina. What structural disorder of the female reproductive system is most likely responsible for this condition?', o: ['pelvic floor prolapse', 'DES exposure', 'vaginal septum', 'bladder fistula'], a: 3, why: 'Urine leaking from the vagina with recurrent infections suggests a vesicovaginal (bladder) fistula.' },
        { src: 'book', ref: '6.1', q: 'A patient presenting with chronic pelvic pain and heavy menstrual bleeding will be evaluated for what conditions? Select all that apply.', o: ['endometriosis', 'uterine fibroids', 'ovarian cysts', 'uterine polyps'], a: [0, 1, 3], why: 'Endometriosis/adenomyosis, fibroids and polyps can cause both pelvic pain and heavy bleeding (AUB). Ovarian cysts can cause pain but are not listed as causes of heavy bleeding.' },
        { src: 'book', ref: '6.3', q: 'What is an example of a patient’s comment that demonstrates the patient understands fibroids?', o: ['“I will only need to treat the fibroids when I am menopausal.”', '“A sonogram can help determine the size of my fibroids.”', '“There is little treatment to help my fibroids.”', '“Oral contraceptives will only make my fibroids worse.”'], a: 1, why: 'Ultrasound (or MRI) confirms and sizes fibroids. Fibroids usually shrink after menopause, and several treatments exist (LNG-IUD, tranexamic acid, anovulatory hormones, surgery).' },
        { src: 'book', ref: '6.3', q: 'When suspecting an ovarian cyst on the basis of abdominal pain, what other causes need to be ruled out due to the severity of the condition? Select all that apply.', o: ['ectopic pregnancy', 'inflamed appendix', 'ovarian torsion', 'submucosal fibroid'], a: [0, 1, 2], why: 'Ectopic pregnancy, appendicitis and ovarian torsion are surgical emergencies that must be excluded. A fibroid is not an acute emergency.' },
        { src: 'book', ref: '6.3', q: 'What does treatment for a Bartholin’s cyst include?', o: ['topical antibiotics', 'warm compress', 'cold packs', 'topical steroids'], a: 1, why: 'Conservative treatment = warm compresses or sitz baths. Oral antibiotics or drainage are used if it is large or infected.' },
        { src: 'book', ref: '6.4', q: 'What are possible characteristics of a patient who is at a higher risk for developing uterine cancer?', o: ['35-year-old patient with 2 vaginal births', '16-year-old patient with 28-day menstrual cycle', '67-year old patient taking only estrogen for HRT', '25-year-old patient taking oral contraceptive pills'], a: 2, why: 'Estrogen-only HRT (unopposed estrogen) raises endometrial cancer risk. Pregnancies and combined pills are protective.' },
        { src: 'book', ref: '6.4', q: 'The nurse is reviewing information in anticipation of providing education to her patient. What is an accurate statement about ovarian cancer?', o: ['The symptoms of ovarian cancer are easy to detect because they are very specific to the disease process.', 'The symptoms of ovarian cancer are difficult to detect because they are vague and nonspecific.', 'There are no symptoms of ovarian cancer.', 'There are screening tests available for ovarian cancer that make it easy to detect.'], a: 1, why: 'Ovarian cancer symptoms (bloating, fullness, early satiety, flatulence) are vague, so it is often found late, and there is no reliable screening test.' },

        { ref: '6.1', q: 'A 16-year-old has never had a period. What is the first test the nurse anticipates?', o: ['Karyotype', 'Beta-hCG', 'Pelvic MRI', 'Bone density scan'], a: 1, why: 'Pregnancy is a cause of both primary and secondary amenorrhea and must be ruled out first; a karyotype follows for primary amenorrhea.' },
        { ref: '6.1', q: 'Which lab pattern supports menopause?', o: ['Low FSH, high estradiol', 'High FSH, low estradiol', 'High prolactin, low TSH', 'Low LH, high progesterone'], a: 1, why: 'Ovaries respond less, so FSH rises and estradiol falls. A single high FSH isn’t definitive because levels fluctuate.' },
        { ref: '6.1', q: 'Which patient should NOT receive hormone replacement therapy?', o: ['A 52-year-old with hot flashes and no other history', 'A 50-year-old with a history of DVT', 'A 48-year-old with vaginal dryness', 'A 55-year-old after hysterectomy for fibroids'], a: 1, why: 'A history of DVT/PE is a contraindication (also breast/uterine cancer, clotting disorders, migraine with aura, liver disease, MI/stroke).' },
        { ref: '6.1', q: 'A postmenopausal patient with an intact uterus is starting HRT. Which regimen is appropriate?', o: ['Estrogen alone', 'Estrogen plus progesterone', 'Progesterone alone', 'Testosterone alone'], a: 1, why: 'With a uterus, progesterone must be added to prevent endometrial hyperplasia and cancer from unopposed estrogen.' },
        { ref: '6.1', q: 'Which statement about PCOS diagnosis is correct?', o: ['All three Rotterdam criteria are required', 'Two of three: irregular cycles, hyperandrogenism, polycystic ovaries on US', 'A single elevated testosterone confirms PCOS', 'Obesity must be present'], a: 1, why: 'Rotterdam criteria = 2 of 3, after excluding other causes (pregnancy, prolactin, thyroid).' },
        { ref: '6.1', q: 'Chronic pelvic pain is defined as pain lasting at least:', o: ['1 month', '3 months', '6 months', '12 months'], a: 2, why: 'CPP is persistent or recurrent pelvic pain for at least 6 months; up to 50% never get a diagnosis.' },
        { ref: '6.1', q: 'What advice helps prevent worsening vaginal atrophy after menopause?', o: ['Avoid intercourse', 'Continue regular sexual activity and use lubrication', 'Douche daily', 'Use scented soaps'], a: 1, why: 'Inactivity shortens and narrows the vagina. Regular sexual activity and lubrication reduce atrophy symptoms and injury.' },
        { ref: '6.2', q: 'Which factors increase the risk of pelvic floor disorders? Select all that apply.', o: ['Multiple vaginal births', 'Chronic cough', 'Chronic constipation', 'Obesity', 'Nulliparity'], a: [0, 1, 2, 3], why: 'Pregnancy, parity, vaginal delivery, chronic cough, constipation, obesity and prior surgery weaken the pelvic floor.' },
        { ref: '6.2', q: 'A 14-year-old has monthly cyclic pelvic pain but has never had visible menstrual bleeding. What might the nurse suspect?', o: ['Primary ovarian insufficiency', 'Imperforate hymen', 'Endometrial cancer', 'Ovarian torsion'], a: 1, why: 'An imperforate hymen traps menstrual blood: periods occur but can’t exit, causing cyclic pain. It is corrected by a simple procedure.' },
        { ref: '6.3', q: 'Which teaching about tranexamic acid is correct?', o: ['Take it daily all month', 'Start on the first day of the period; take no more than 5 days', 'It is safe with combined birth control pills', 'Crush tablets for easier swallowing'], a: 1, why: 'Take 650 mg TID from day 1 of menses for up to 5 days, swallowed whole. Contraindicated with combined hormonal contraceptives (clot risk).' },
        { ref: '6.3', q: 'A 55-year-old postmenopausal patient has an endometrial polyp. What is expected?', o: ['No follow-up', 'Biopsy/evaluation', 'Antibiotics', 'Repeat Pap in 5 years'], a: 1, why: 'Polyps in peri- or postmenopause should be investigated with a biopsy, as should any postmenopausal bleeding.' },
        { ref: '6.4', q: 'Which HPV types cause more than 70% of cervical cancers?', o: ['6 and 11', '16 and 18', '31 and 33', '45 and 52'], a: 1, why: 'HPV 16 and 18 cause > 70% of cervical cancers (also 90% of anal and 45% of oropharyngeal cancers).' },
        { ref: '6.4', q: 'After a LEEP procedure, which teaching is appropriate?', o: ['No bleeding should occur', 'Some vaginal bleeding is expected; use pads and report warning signs', 'Use tampons for bleeding', 'Resume intercourse that evening'], a: 1, why: 'Some vaginal bleeding is expected after colposcopy, biopsy or LEEP; give a peripad and instructions on what to report.' },
        { ref: '6.4', q: 'After an endometrial biopsy, the patient should call if:', o: ['She has mild cramping', 'She has light spotting for a day', 'Bleeding soaks a pad every 1–2 hours or she has a fever', 'She feels tired'], a: 2, why: 'Mild cramping and light bleeding up to 24 h are expected. Report heavy bleeding (a pad every 1–2 h), abdominal pain or fever.' },
        { ref: '6.4', q: 'A patient asks why she can’t have intercourse for a while after her hysterectomy. Recommended pelvic rest is at least:', o: ['1 week', '2 weeks', '6 weeks', '6 months'], a: 2, why: 'Vaginal rest for a minimum of 6 weeks: nothing in the vagina, to allow healing of the vaginal cuff.' },
    ],
});
