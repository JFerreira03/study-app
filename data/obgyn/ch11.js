STUDY.addChapter('obgyn', {
    n: 11,
    intro: `<p>Routine prenatal care runs through the <strong>280 days (40 weeks)</strong> of pregnancy. At each visit the nurse gathers assessment data, analyzes it for factors placing the pregnancy at risk, and, when a complication is diagnosed, monitors more closely. Early and regular prenatal care is linked to fewer complications, mostly because of the education given at each visit. Trimesters: <strong>1st = 0 to 13 6/7 weeks</strong>, <strong>2nd = 14 to 27 6/7 weeks</strong>, <strong>3rd = 28 weeks to birth</strong>. {{Chapter intro · p. 485}}</p>`,
    sections: {
        '11.1': {
            key: [
                'First visit ideally at <strong>8–12 weeks</strong>: health history → interval history since LMP → confirm pregnancy (urine/serum hCG or ultrasound) → physical and pelvic exam → labs → teaching → schedule.',
                '<strong>Naegele’s rule</strong>: first day of LMP <strong>− 3 months + 7 days</strong> (+ adjust year); EDD ± 2 weeks. <strong>G/TPAL</strong>: Gravida (all pregnancies incl. current) · Term ≥ 37 wk · Preterm &gt; 20 to &lt; 37 wk · Abortions &lt; 20 wk · Living children. Twins count as <strong>one</strong> birth.',
                'Expected at first visit: BP &lt; 120/80, pulse 60–120, no edema. Urine: protein (contamination/renal), glucose (preexisting DM), ketones (vomiting), nitrites/bacteria (UTI; asymptomatic bacteriuria → pyelonephritis).',
                'Labs: blood type, <strong>Rh and antibody screen</strong>, CBC, <strong>rubella titer</strong> (nonimmune → vaccinate <strong>postpartum</strong>, live vaccine), hepatitis B/C, HIV, syphilis (VDRL/RPR), gonorrhea/chlamydia, UA + culture, ± UDS, sickle cell/CF, cell-free DNA (≥ 10 wk), TSH; GCT if high risk.',
                'Nutrition: protein 70 → 80 → 100 g by trimester · calcium 1,000 mg (1,300 if &lt; 19) · <strong>folate 600 mcg</strong> · <strong>iron 27 mg</strong> · 8–12 glasses water · <strong>+0 kcal 1st tri, +300 2nd, +400 3rd</strong>. Weight gain: normal BMI <strong>25–35 lb</strong>; underweight 28–40; overweight 15–25; obese 11–20.',
                'Avoid: NSAIDs ≥ 20 weeks (oligohydramnios, ductus closure), aspirin (unless low-dose for preeclampsia), acetaminophen &gt; 3,000 mg/day, pseudoephedrine (1st tri/HTN), herbs (cohosh, dong quai, goldenseal, yohimbe, ephedra, St John’s wort), <strong>cat litter</strong> (toxoplasmosis). Visits: <strong>every 4 wk to 28 wk, every 2 wk to 36 wk, then weekly</strong>.',
            ],
            html: `
<p>Patients schedule the first visit between <strong>8 and 12 weeks</strong>. The visit includes history, current symptoms, confirmation of pregnancy and EDD (LMP ± ultrasound), physical exam, specimens for labs, teaching, and the next appointment. {{p. 486}}</p>

<h3>Health history {{p. 486}}</h3>
<p>Goal: baseline data on the patient and the partner (or biological father/sperm donor) to identify risks to the patient, fetus and newborn.</p>
<ul>
    <li><strong>Demographics</strong>: age <strong>≤ 19 at conception or ≥ 35 at EDD</strong> → ↑ preeclampsia, GDM, preterm birth, prolonged labor, cesarean. Address = social determinants (transport, toxins, violence). Household = who shops/cooks, money, support. Race/ethnicity (diet, genetic risk), religion, language, education (health literacy; use <strong>medical interpreters</strong>), occupation (stress, pollutants). {{p. 487}}</li>
    <li><strong>Medical/surgical</strong>: diabetes, HTN, frequent UTIs; previous uterine surgery, <strong>LEEP</strong>, fractured pelvis repair.</li>
    <li><strong>Medications and supplements since the LMP</strong>: baseline to screen for teratogens (most vulnerable in the <strong>first trimester</strong>); coordinate with other providers (e.g., endocrinologist).</li>
    <li><strong>Lifestyle</strong>: tobacco, alcohol, opioids, marijuana, illegal drugs; exercise (fewer complaints, ↓ preeclampsia and GDM, shorter labor); <strong>24-hour diet recall</strong> (poor intake → LBW, prematurity, preeclampsia); non-Western practices (massage, acupuncture, Ayurveda, home remedies). {{p. 488}}</li>
    <li>Full record contents (menstrual, pregnancy, gynecologic, infection, immunization, genetic, nutrition, psychosocial histories and risk factors such as Rh sensitization, second pregnancy within 12 months, &gt; ½ pack/day smoking, ≥ 5 births &gt; 20 weeks) {{Table 11.1 · p. 488}}</li>
</ul>

<h3>Obstetric history {{p. 493}}</h3>
<div class="callout memo"><span class="callout-title">Naegele’s rule {{Table 11.2 · p. 494}}</span><p>First day of LMP <strong>− 3 months + 7 days</strong>, then adjust the year. Example: LMP April 6, 2022 → January 6 → January 13 → <strong>January 13, 2023</strong>. Based on a 28-day cycle; the EDD is <strong>± 2 weeks</strong>.</p></div>
<ul>
    <li><strong>Gravidity</strong>: total pregnancies including the current one, regardless of outcome or number of fetuses. <strong>Parity</strong>: pregnancies reaching <strong>≥ 20 weeks</strong>, live birth or not. <strong>Abortion</strong> = pregnancy ending at <strong>≤ 20 weeks</strong>, spontaneous or induced. {{p. 494}}</li>
    <li><strong>G/TPAL</strong>: G = pregnancies · <strong>T</strong> = births ≥ 37 weeks · <strong>P</strong> = births &gt; 20 and &lt; 37 weeks · <strong>A</strong> = pregnancies ending &lt; 20 weeks · <strong>L</strong> = living children (lived past 28 days).</li>
</ul>
<div class="callout tip"><span class="callout-title">Worked example {{p. 494}}</span><p>Currently pregnant; first child born 1 week early (39 wk), second 4 weeks early (36 wk), miscarried twins at 4 months (16 wk). G = 4 · T = 1 · P = 1 · A = 1 (<strong>a multiple pregnancy counts once</strong>) · L = 2 → <strong>G4 P1112</strong>.</p></div>

<h3>Gynecologic and genetic history {{p. 495}}</h3>
<ul>
    <li>Multiple terminations, <strong>D&amp;C</strong>, cervical biopsies/procedures weaken the cervix → <strong>cervical insufficiency</strong> and preterm birth; scarring can impede dilation. Uterine anomalies → preterm birth. <strong>Previous uterine surgery</strong> → abnormal placental placement and <strong>uterine rupture</strong> (cesarean may be advised). Breast surgery can affect breast-feeding.</li>
    <li>Genetic history of both biological parents and families: <strong>cystic fibrosis, trisomy 21, Tay-Sachs, hemophilia, sickle cell</strong>, congenital mental impairment, anomalies; parental age; <strong>consanguinity</strong> (shared ancestry, e.g., first cousins).</li>
</ul>

<h3>Preexisting risk factors {{p. 495}}</h3>
<p>Age &lt; 19 or ≥ 35 · obesity · nutritional deficiencies · substance use · HTN · diabetes · HIV, STIs, hepatitis B/C, herpes · cardiac/renal disease · epilepsy · psychiatric disorders · cervical procedures · uterine anomalies/surgery · previous obstetric complication.</p>
<table>
    <thead><tr><th>Social determinant</th><th>Linked complications {{Table 11.3 · p. 496}}</th></tr></thead>
    <tbody>
        <tr><td>Low income</td><td>Spontaneous abortion, preterm birth, preeclampsia, LBW, perinatal mortality</td></tr>
        <tr><td>Poor housing/neighborhood</td><td>Teratogen exposure, LBW, preterm birth, behavioral health disorders</td></tr>
        <tr><td>Education &lt; high school</td><td>Preterm birth</td></tr>
        <tr><td>Poor diet</td><td>Abortion, preterm birth, preeclampsia, hemorrhage, LBW, mortality</td></tr>
        <tr><td>Inadequate support</td><td>LBW, preterm birth, behavioral health disorders</td></tr>
        <tr><td>Poor access to care</td><td>Abortion, preterm birth, preeclampsia, hemorrhage, LBW, mortality</td></tr>
    </tbody>
</table>

<h3>Interval history since the LMP {{p. 496}}</h3>
<ul>
    <li><strong>Subjective</strong>: N/V, fatigue, breast tenderness = <strong>expected</strong>. Dizziness, vaginal discharge/spotting, lower backache, uterine cramping = <strong>not expected</strong>, investigate.</li>
    <li><strong>Objective</strong>: height, weight → <strong>BMI</strong> (sets weight-gain target); <strong>BP &lt; 120/80</strong>; <strong>pulse 60–120</strong> (elevated BP = anxiety or preexisting HTN; ask about past BP; tachycardia = anxiety or cardiac). {{p. 497}}</li>
    <li><strong>Urine dipstick</strong>: protein = vaginal contamination or preexisting renal disease · blood = vaginal bleeding or UTI · glucose = preexisting diabetes · <strong>ketones = excessive vomiting</strong> · bacteria/nitrites = UTI. Untreated <strong>asymptomatic bacteriuria → pyelonephritis</strong>.</li>
</ul>

<h3>Confirming pregnancy {{p. 497}}</h3>
<ul>
    <li><strong>Pregnancy tests</strong> detect <strong>hCG</strong>. Urine = presence only (done in office). Serum = qualitative or <strong>quantitative</strong> (ordered when no gestational sac or cardiac activity on US).</li>
    <li><strong>Pelvic ultrasound</strong>: confirms <strong>fetal cardiac activity</strong>, an <strong>intrauterine</strong> pregnancy (rules out ectopic), the <strong>EDD</strong> (1st-trimester measurements) and the <strong>number of fetuses</strong>.</li>
</ul>

<h3>Physical examination {{p. 497}}</h3>
<p>Baseline for comparison through pregnancy. Explain what to expect; use <strong>trauma-informed care</strong> (first pelvic exam or history of sexual abuse); offer a support person. {{p. 498}}</p>
<ul>
    <li><strong>Head and neck</strong>: mouth (gum disease ↔ preterm birth); <strong>thyroid</strong> (enlargement/nodule → thyroid tests, endocrinology).</li>
    <li><strong>Back</strong>: scoliosis, back surgery (may contraindicate <strong>epidural/spinal</strong>); <strong>CVAT</strong> (pyelonephritis); breath sounds clear.</li>
    <li><strong>Extremities</strong>: range of motion (bearing down, newborn care, assistive devices); pulses; varicosities; <strong>edema not expected</strong> at the first visit (renal or cardiac disease); <strong>DTRs and clonus</strong>: hyperreflexia/clonus at ≥ 20 weeks if new = sign of <strong>preeclampsia</strong>.</li>
    <li><strong>Breasts</strong>: symmetry; <strong>inverted nipples</strong> → lactation consultant. <strong>Heart</strong>: aortic stenosis or mitral prolapse may worsen to heart failure with the added blood volume → cardiology; <strong>systolic flow murmurs common after 24 weeks</strong>. {{p. 499}}</li>
    <li><strong>Abdomen</strong>: scars, hernia; ≥ 12 weeks note fundal height: <strong>at symphysis 12 wk</strong>, <strong>halfway to umbilicus 16 wk</strong>, <strong>at umbilicus 20 wk</strong>. ≥ 10 weeks: <strong>FHR by Doppler</strong>.</li>
</ul>
<h4>Pelvic exam (lithotomy; may be deferred, e.g., very young patient or sexual trauma) {{p. 499}}</h4>
<ul>
    <li><strong>External genitalia</strong>: development, meatus, lesions, discharge, hemorrhoids. <strong>FGM</strong>: private, nonjudgmental education about complications and resuturing myths; may need cesarean or longer repair. {{p. 500}}</li>
    <li><strong>Speculum</strong> (lubricated with warm water; warn before touching and opening): vaginal mucosa expected <strong>purple</strong>, some edema, more mucus. White patches = <strong>candidiasis</strong>; tissue overgrowths = <strong>HPV</strong>; small blisters = <strong>HSV</strong>. Cervix blue/purple (<strong>Chadwick</strong>); nulliparous os <strong>round and small</strong>, parous os <strong>slit-like</strong>. <strong>Pap</strong> if indicated; <strong>gonorrhea/chlamydia for all</strong>. {{p. 501}}</li>
    <li><strong>Bimanual</strong>: cervix smooth, soft (<strong>Goodell</strong>), closed, length <strong>4–5 cm</strong> (open and short &lt; 20 wk = risk of loss). Uterine size by fruit: <strong>8 wk lemon · 12 wk large orange · 16 wk grapefruit · 20 wk cantaloupe</strong>. {{p. 502}}</li>
    <li><strong>Clinical pelvimetry</strong>: diagonal conjugate, ischial spines, sacrum/coccyx curve, <strong>pubic arch &gt; 90°</strong>, intertuberous diameter (fist) → structural anomalies that could obstruct labor.</li>
</ul>
<div class="callout nurse"><span class="callout-title">Nurse’s role in a speculum exam {{p. 500}}</span><p>Assisting: prepare supplies (cultures, Pap), have the patient undress below the waist with a cover, wear nonsterile gloves, hand supplies, <strong>label specimens</strong> and complete forms. Performing: explain why; ask if it’s the first exam (show the speculum); slow deep breaths or visualization; describe tests; announce removal; help the patient sit up and invite questions.</p></div>

<h3>Initial prenatal labs {{Table 11.4 · p. 505}}</h3>
<table>
    <thead><tr><th>Test</th><th>Purpose / key point</th></tr></thead>
    <tbody>
        <tr><td><strong>Blood type, Rh, antibody screen</strong></td><td>Blood products ready if hemorrhage; <strong>Rh negative → Rho(D) immune globulin</strong> for any antepartum bleeding; negative antibody screen = not sensitized (positive → investigate) {{p. 502}}</td></tr>
        <tr><td><strong>CBC</strong></td><td>Infection (WBC), anemia (RBC, H&amp;H, iron indices: dietary vs. medical), <strong>platelets</strong> (bleeding, clotting disorder) {{p. 503}}</td></tr>
        <tr><td><strong>Rubella titer</strong></td><td>≥ 1.0 = immune. Nonimmune → report rash/exposure; <strong>vaccine given postpartum before discharge</strong> (live vaccine, never in pregnancy). Congenital rubella: blindness, deafness, cognitive impairment, heart disease</td></tr>
        <tr><td><strong>Hepatitis B and C</strong></td><td>Active, past or chronic infection; crosses to the fetus; high morbidity/mortality</td></tr>
        <tr><td><strong>Syphilis</strong> (VDRL or RPR)</td><td>Positive → treponemal assay. Crosses the placenta; fetal death risk esp. if untreated in the <strong>first 16 weeks</strong>; treat patient, partners, newborn per CDC</td></tr>
        <tr><td><strong>HIV</strong></td><td>Positive → <strong>zidovudine</strong>; treated parent + newborn = <strong>&lt; 1% transmission</strong></td></tr>
        <tr><td><strong>Gonorrhea, chlamydia</strong></td><td>Cervical specimen; don’t cross the placenta but infect at/after ROM → newborn eye prophylaxis. STI tests <strong>repeated ~36 weeks</strong> {{p. 504}}</td></tr>
        <tr><td><strong>UA, urine C&amp;S, ± UDS</strong></td><td>UTI masked by frequency/asymptomatic. Positive UDS: review meds, discuss effects nonjudgmentally, consent to random repeat tests; offer <strong>support programs before</strong> discussing mandatory reporting</td></tr>
        <tr><td><strong>Sickle cell, cystic fibrosis</strong></td><td>If positive, test the biological father; both positive → discuss <strong>CVS (10–12 wk)</strong> or amniocentesis</td></tr>
        <tr><td><strong>Cell-free DNA</strong></td><td>Maternal blood from <strong>≥ 10 weeks</strong>; screens trisomy 21, 18, 13, sex chromosomes; <strong>less accurate</strong> than CVS/amniocentesis</td></tr>
        <tr><td>Additional</td><td><strong>Pap</strong> (≥ 21, per history) · <strong>1-hour GCT</strong> early if high GDM risk (obesity, 1st-degree relative, previous GDM; normal &lt; 140) · CMP (renal/liver disease, HTN, DM) · <strong>TSH routine</strong> · HSV antibodies</td></tr>
    </tbody>
</table>

<h3>Education at the first visit {{p. 506}}</h3>
<p>Topics: fetal development, health promotion, physiologic and psychologic changes, discomforts, <strong>signs of complications</strong>, lab results, visit schedule. Sit and discuss rather than handing over a stack of papers.</p>
<table>
    <thead><tr><th>Nutrient</th><th>Daily amount</th><th>Sources / role {{Table 11.5 · p. 506}}</th></tr></thead>
    <tbody>
        <tr><td>Protein</td><td><strong>70 g</strong> (0–14 wk) · <strong>80 g</strong> (14–28) · <strong>100 g</strong> (28–42)</td><td>Eggs, meat, fish, lentils, dairy, peanuts; structure of all cells</td></tr>
        <tr><td>Calcium</td><td><strong>1,000 mg</strong> (&gt; 19) · 1,300 mg (12–19)</td><td>Dairy, dark leafy greens; bones and teeth</td></tr>
        <tr><td><strong>Folate</strong></td><td><strong>600 mcg</strong></td><td>Leafy greens, beans, peanuts, fruit; <strong>prevents neural tube defects</strong></td></tr>
        <tr><td><strong>Iron</strong></td><td><strong>27 mg</strong></td><td>Organ meats, greens, legumes, fortified cereals; RBC mass {{p. 507}}</td></tr>
        <tr><td>Vitamin B6 / B12</td><td>1.9 mg / 2.6 mcg</td><td>B12: animal foods; <strong>vegans need a supplement</strong></td></tr>
        <tr><td>Vitamin C / D / A</td><td>85 mg / 600 IU / 770 mcg</td><td>Collagen; bones; eye development</td></tr>
        <tr><td>Choline / iodine / DHA</td><td>450 mg / 220 mcg / 200 mg</td><td>Neural tube; brain; brain and retina, ↓ preterm birth</td></tr>
    </tbody>
</table>
<ul>
    <li>Water: <strong>8–12 eight-ounce glasses</strong>/day.</li>
    <li>Calories: normal BMI <strong>no extra in the 1st trimester</strong>; <strong>+300/day</strong> at 14–28 weeks (two glasses of whole milk); <strong>+400/day</strong> from 28 weeks (add half a sandwich). MyPlate.gov resources. {{p. 507}}</li>
</ul>
<table>
    <thead><tr><th>Pre-pregnancy BMI</th><th>Total gain</th><th>Weekly (2nd–3rd tri) {{Table 11.6 · p. 508}}</th></tr></thead>
    <tbody>
        <tr><td>Underweight &lt; 18.5</td><td><strong>28–40 lb</strong></td><td>1–1.3 lb</td></tr>
        <tr><td>Normal 18.5–24.9</td><td><strong>25–35 lb</strong></td><td>0.8–1 lb</td></tr>
        <tr><td>Overweight 25–29.9</td><td><strong>15–25 lb</strong></td><td>0.5–0.7 lb</td></tr>
        <tr><td>Obese ≥ 30</td><td><strong>11–20 lb</strong></td><td>0.4–0.5 lb</td></tr>
    </tbody>
</table>
<p>Weight gain starts <strong>after the 1st trimester</strong>. Where it goes: fetus 7–8 lb, fat 6–8, blood 3–4, fluid 2–3, breasts 1–3, uterus 2, amniotic fluid 2, placenta 1.5. “Eating for two” is a myth. {{p. 508}}</p>
<ul>
    <li><strong>Exercise</strong>: if already active, 30 min brisk walking/yard work 5–7 days/week; if inactive, start with 5 min/day and add 5 min weekly up to 30 min; prenatal yoga, tai chi.</li>
    <li><strong>Prenatal vitamins</strong> with <strong>400 mcg folic acid</strong> for all; one daily; take with water or citrus juice; <strong>at night if nauseated</strong>; iron → dark/black stools, constipation. Extra iron only if prescribed. {{p. 509}}</li>
    <li>Fat-soluble vitamins (A, D, E, K) can be toxic: excess <strong>vitamin A/isotretinoin</strong> → cranial, heart, facial anomalies (first 12 weeks); low vitamin D → rickets, excess → fetal hypercalcemia; low vitamin E → placental vascular disorders and HTN, excess → newborn jaundice. Excess iron, copper, selenium → preeclampsia, preterm birth, IUGR.</li>
</ul>
<table>
    <thead><tr><th>Herb</th><th>Safety in pregnancy {{Table 11.7 · p. 510}}</th></tr></thead>
    <tbody>
        <tr><td>Ginger, peppermint, echinacea</td><td><strong>No</strong> increased risk (ginger reduces nausea)</td></tr>
        <tr><td>Blue and black cohosh, dong quai</td><td><strong>Preterm labor</strong> and delivery</td></tr>
        <tr><td>Goldenseal</td><td>Newborn <strong>jaundice</strong></td></tr>
        <tr><td>Yohimbe</td><td>Seizures, HTN, heart attack</td></tr>
        <tr><td>St John’s wort</td><td>Potential genetic mutations</td></tr>
        <tr><td>Ephedra</td><td>HTN, heart attack</td></tr>
    </tbody>
</table>
<h4>OTC medications {{p. 510}}</h4>
<ul>
    <li><strong>Aspirin</strong>: contraindicated (bleeding) <strong>except low-dose aspirin prescribed to reduce preeclampsia risk</strong>.</li>
    <li><strong>NSAIDs</strong> (ibuprofen, naproxen): contraindicated <strong>≥ 20 weeks</strong> → <strong>oligohydramnios</strong>, fetal renal disease, <strong>premature closure of the ductus arteriosus</strong>.</li>
    <li><strong>Acetaminophen</strong>: liver problems with chronic HTN, hypertensive complications, or &gt; <strong>3,000 mg/24 h</strong>; no proven link to autism/ADHD.</li>
    <li>Antihistamines: chlorpheniramine, hydroxyzine, dexchlorpheniramine safe; loratadine/cetirizine <strong>after the 1st trimester</strong>. <strong>Pseudoephedrine</strong>: not in the 1st trimester; contraindicated with hypertensive disorders (raises BP). Phenylephrine: no known harm. Dextromethorphan, guaifenesin: read multisymptom labels; don’t exceed 24-h doses. Consult the provider before any medication. {{p. 511}}</li>
</ul>
<h4>Substances and safety {{p. 511}}</h4>
<ul>
    <li><strong>Nicotine</strong> (tobacco, vaping) vasoconstricts → LBW, preterm birth, <strong>SIDS</strong>. <strong>Alcohol → FASD</strong> (cognition, behavior, face). <strong>Marijuana</strong> → LBW, neurodevelopmental problems (may appear at school age). Opioids/illicit drugs → abortion, LBW, SIDS, preterm birth, <strong>abruption</strong>, IUFD, <strong>neonatal withdrawal</strong>.</li>
    <li><strong>Seat belts</strong> always; check home/work fall risks; gloves and organic products in the garden; <strong>latex paints</strong>; avoid thinners and toxic chemicals (abortion risk); mercury and lead → neurologic deficits; avoid secondhand smoke.</li>
    <li><strong>Don’t change cat litter</strong>, avoid outdoor cat scratches, avoid undercooked meat → <strong>toxoplasmosis</strong>.</li>
</ul>

<h3>Signs of complications {{Table 11.8 · p. 512}}</h3>
<table>
    <thead><tr><th>Symptom</th><th>Possible complication</th></tr></thead>
    <tbody>
        <tr><td>Persistent vomiting (+ weight loss)</td><td><strong>Hyperemesis gravidarum</strong>, dehydration</td></tr>
        <tr><td>Dysuria (± hematuria)</td><td>UTI → pyelonephritis → preterm contractions</td></tr>
        <tr><td>Intermittent back pain, pelvic pressure</td><td>Pyelonephritis/UTI or <strong>preterm labor</strong></td></tr>
        <tr><td><strong>Vaginal bleeding</strong> (never normal)</td><td>Abortion, placenta previa, abruption, cervicitis</td></tr>
        <tr><td>Temperature <strong>&gt; 38.3 °C (101 °F)</strong></td><td>Infection (with N/V → dehydration, preterm birth)</td></tr>
        <tr><td>Persistent abdominal/<strong>epigastric pain</strong></td><td>Cholelithiasis, liver disease, GERD, <strong>preeclampsia, HELLP</strong> {{p. 513}}</td></tr>
        <tr><td>Frequent dizziness</td><td>Anemia, dehydration, infection, heart disease</td></tr>
        <tr><td>Leaking fluid</td><td>Vaginitis, <strong>PROM</strong> (in the 1st trimester abortion is inevitable)</td></tr>
    </tbody>
</table>
<div class="callout tip"><span class="callout-title">Visit schedule {{p. 513}}</span><p>Every <strong>4 weeks until 28 weeks</strong> → every <strong>2 weeks from 28 to 36 weeks</strong> → <strong>weekly from 36 weeks</strong> until birth. More often if complications appear.</p></div>`,
        },
        '11.2': {
            key: [
                'Often only one follow-up visit in the 1st trimester. Review the EHR <strong>problem list</strong> (age, G/P, EDD, blood type and Rh, RhoGAM date, rubella, STIs, screening results, GBS, family considerations).',
                'Each visit: weight, BP, review normal labs (provider discusses abnormal ones), interval history (bleeding/discharge/leaking, epigastric/abdominal pain, cramping, back pain/dysuria, dizziness, headache), dipstick when indicated.',
                'Exam: fundus palpable ≥ 12 weeks; <strong>FHR 110–160 bpm</strong>.',
                '<strong>Integrated/sequential screening</strong> (aneuploidy, NTDs): 1st part <strong>10–13 weeks</strong> (blood + US), 2nd part <strong>15–22 weeks</strong> (blood). Screening = risk, not diagnosis; the patient chooses.',
                'Teaching: development, nutrition, discomforts, <strong>still vulnerable to teratogens at 12 weeks</strong>, smoking cessation, <strong>when to call the provider</strong>.',
            ],
            html: `
<p>Follow-up visits are shorter: sign-in, intake by the nurse, limited exam with the provider, labs if indicated, education, next appointment. {{p. 513}}</p>
<div class="callout tip"><span class="callout-title">Group prenatal care</span><p><strong>CenteringPregnancy</strong>: 8–12 pregnant people and support persons meet at routine visits to learn and discuss. Linked to higher birth weights, more breast-feeding success, less preterm birth.</p></div>

<h3>Interval history {{p. 513}}</h3>
<ul>
    <li>Review the EHR <strong>problem list</strong> first: age, G/P, EDD, complications, medical conditions, previous OB/GYN surgeries and complications, <strong>blood type/Rh</strong>, <strong>RhoGAM date</strong>, <strong>rubella status</strong>, positive STIs, screening results (cell-free DNA, amniocentesis), diabetes screen, <strong>GBS</strong>, family considerations. Supports continuity and early risk identification. {{p. 514}}</li>
    <li>Weigh, take BP, share normal lab results.</li>
    <li>Ask about: vaginal discharge, bleeding, leaking fluid · epigastric/abdominal pain · pelvic pressure or cramping · back pain or dysuria · dizziness or syncope · headache. Follow up “yes” answers; dipstick (glucose, protein, nitrites, blood, ketones) when indicated.</li>
</ul>
<h3>Physical exam {{p. 514}}</h3>
<ul>
    <li>Locate the uterus; palpate the fundus if ≥ 12 weeks; <strong>FHR expected 110–160 bpm</strong>.</li>
    <li>Document: date, gestation, weight, BP, dipstick, interval history items, fundal height, fetal movement, edema. {{p. 515}}</li>
</ul>
<h3>Laboratory tests: integrated (sequential) screening {{p. 515}}</h3>
<ul>
    <li>Detects ↑ risk of <strong>aneuploidy and neural tube defects</strong>.</li>
    <li><strong>First screen 10–13 weeks</strong>: blood test + ultrasound. <strong>Second screen 15–22 weeks</strong>: blood test only.</li>
    <li>A screen gives <strong>risk, not a diagnosis</strong>. Encouraged with risk factors (e.g., &gt; 35), available to all; some decline (religious/personal) or rely on the anatomy ultrasound. Details in Chapter 13.</li>
</ul>
<h3>Education {{p. 515}}</h3>
<p>Fetal growth and development, nutrition, discomforts, signs of complications (stress <strong>when to call</strong>). At 12 weeks the fetus is still vulnerable to teratogens: reinforce a healthy lifestyle; check whether a smoker has stopped or cut down.</p>`,
        },
        '11.3': {
            key: [
                'Visits every 4 weeks. <strong>Anatomy ultrasound 16–20 weeks</strong> (placenta location, growth/EDD, fluid, anatomy and sex, cervical length). <strong>GDM screen 24–28 weeks</strong>.',
                'BP <strong>≥ 140/90 before 20 weeks = preexisting HTN</strong>; elevated BP ≥ 20 weeks → report. <strong>Quickening 16–20 weeks</strong> (multiparas feel it sooner).',
                'Fundal height: &lt; 20 wk by landmarks; <strong>20–36 weeks: cm = weeks ± 2</strong>.',
                '<strong>Quad screen</strong> (15–22 wk): AFP, hCG, unconjugated estriol, inhibin-A → risk of <strong>chromosome abnormalities and NTDs</strong>. H&amp;H each trimester: Hgb &lt; 10.5 in the 2nd tri → iron. Platelets &lt; 150,000 → liver damage/hypertensive disorders.',
                '<strong>1-h GCT</strong>: 50 g glucose, no fasting; abnormal &gt; 130 (serum) / &gt; 140 (fingerstick) → <strong>3-h GTT</strong>: NPO, 100 g, draws at 0, 1, 2, 3 h; <strong>2 of 4 high = GDM</strong>.',
                'Rh negative: repeat antibody screen at ~28 weeks; if negative give <strong>RhoGAM 300 mcg IM at 28 weeks</strong>, again after birth and with any bleeding/abortion (50 mcg after 1st-trimester abortion).',
            ],
            html: `
<p>Visits every 4 weeks: interval data, limited exam, labs and diagnostics, teaching. {{p. 515}}</p>

<h3>Interval data {{p. 515}}</h3>
<ul>
    <li>Weight off target (or loss) → <strong>24-hour diet recall</strong>, appetite. <strong>BP ≥ 140/90 before 20 weeks = preexisting hypertension</strong>; elevated BP at/after 20 weeks → investigate and report.</li>
    <li>Ask about <strong>fetal movement</strong>: quickening at <strong>16–20 weeks</strong> (depends on habitus; <strong>multiparous</strong> patients notice it sooner than primiparous) and <strong>Braxton Hicks</strong> (cause of false labor). {{p. 516}}</li>
</ul>
<table>
    <thead><tr><th>Symptom</th><th>Possible complication {{Table 11.9 · p. 516}}</th></tr></thead>
    <tbody>
        <tr><td>Persistent vomiting</td><td>Hyperemesis, dehydration</td></tr>
        <tr><td>Dysuria, intermittent back pain</td><td>UTI</td></tr>
        <tr><td>Pelvic pressure, lower abdominal cramping</td><td><strong>Cervical insufficiency</strong>, preterm labor</td></tr>
        <tr><td>Vaginal bleeding</td><td>Abortion, previa, abruption</td></tr>
        <tr><td>Change in fetal movement</td><td>Fetal stress or IUFD</td></tr>
        <tr><td>Fever &gt; 38.3 °C</td><td>Infection</td></tr>
        <tr><td>Abdominal/epigastric pain</td><td>Cholelithiasis, liver disease, GERD, preeclampsia, HELLP</td></tr>
        <tr><td>Frequent dizziness</td><td>Anemia, dehydration, infection, heart disease</td></tr>
        <tr><td>Leaking fluid</td><td>Vaginitis, PROM</td></tr>
        <tr><td><strong>Headache, edema, visual disturbances</strong></td><td><strong>Hypertensive disorders</strong> {{p. 517}}</td></tr>
    </tbody>
</table>

<h3>Physical exam {{p. 517}}</h3>
<ul>
    <li>Edema, fundal height, FHR (Doppler; rate and rhythm).</li>
    <li><strong>&lt; 20 weeks</strong>: fundus located by palpation using symphysis and umbilicus as landmarks. <strong>≥ 20 weeks</strong>: measured in <strong>cm from the top of the symphysis to the top of the fundus</strong>; between <strong>20 and 36 weeks, cm = weeks ± 2</strong>.</li>
    <li>Yes answers → focused data (e.g., speculum exam for bleeding/discharge).</li>
</ul>

<h3>Laboratory tests {{p. 517}}</h3>
<ul>
    <li><strong>Quad marker screen</strong> (15–22 weeks): maternal serum <strong>AFP, hCG, unconjugated estriol, inhibin-A</strong> → risk of chromosome abnormalities and <strong>neural tube defects</strong>. Offered to all; strongly encouraged if &gt; 35 or previous NTD. Stand-alone <strong>AFP</strong> = NTD risk. {{p. 518}}</li>
    <li><strong>H&amp;H/CBC</strong> at least once a trimester. Hgb <strong>&lt; 10.5 g/dL in the 2nd trimester</strong> (iron deficiency) → iron supplements. Platelets: big drop or <strong>&lt; 150,000/µL</strong> → liver damage, hypertensive disorders.</li>
    <li><strong>GDM screen at 24–28 weeks</strong> for all (unless preexisting DM or already diagnosed):</li>
</ul>
<table>
    <thead><tr><th></th><th>1-hour GCT</th><th>3-hour GTT</th></tr></thead>
    <tbody>
        <tr><td>Prep</td><td><strong>No fasting</strong></td><td><strong>NPO</strong> the night before and morning of</td></tr>
        <tr><td>Glucose load</td><td><strong>50 g</strong> (Glucola)</td><td><strong>100 g</strong></td></tr>
        <tr><td>Draws</td><td>1 hour after</td><td>Fasting, then 1, 2 and 3 h</td></tr>
        <tr><td>Abnormal</td><td>&gt; 130 serum / &gt; 140 fingerstick → do the GTT</td><td><strong>Any 2 of 4 elevated = GDM</strong> → nutrition counseling, teaching on effects</td></tr>
    </tbody>
</table>
<div class="callout memo"><span class="callout-title">Pharmacology: Rho(D) immune globulin (RhoGAM) {{p. 518}}</span><p>Rh-negative patient, Rh-positive fetus: fetal blood mixing (bleeding, abortion, birth) starts <strong>sensitization</strong>. Repeat type/Rh/antibody screen before or at 28 weeks; if the antibody screen is <strong>negative</strong>, give <strong>300 mcg IM/IV at 28 weeks</strong>; also after birth, with bleeding episodes, and <strong>50 mcg after a 1st-trimester abortion</strong>. Prevents antibody production against Rh-positive cells. Side effects: site pain/redness, slight fever; adverse: anaphylaxis, hemolysis. Teach: report dyspnea, headache, muscle pain; <strong>carry the Rh-negative card</strong>. {{p. 519}}</p></div>

<h3>Complete obstetric ultrasound (16–20 weeks) {{p. 519}}</h3>
<p>Placenta location · fetal measurements (weight, confirm EDD) · amniotic fluid · fetal movement · FHR · <strong>anatomy including external genitalia</strong> · <strong>cervical length</strong>. Some providers prefer ≤ 16 weeks for the cervix; waiting until 20 weeks gives better anatomy views (fewer repeat scans).</p>

<h3>Education {{p. 519}}</h3>
<ul>
    <li>Milestones: 16 weeks genitalia visible on US, meconium starts; <strong>23–24 weeks viability</strong> (alveoli start making surfactant).</li>
    <li>Weight is the nutrition screening tool: loss → illness or no money for food; unexpected gain → fluid retention or sedentary lifestyle.</li>
    <li>Same symptoms mean different things over time: cramping + bleeding <strong>&lt; 20 weeks = possible abortion</strong>, <strong>&gt; 20 weeks = possible preterm labor</strong>; edema &lt; 20 weeks = heart disease, <strong>&gt; 20 weeks = early hypertensive disorder</strong>.</li>
    <li>Topics: development, quickening and fetal movement, health promotion, changes, discomforts, complications, RhoGAM if Rh negative, labs, choosing a newborn provider, breast-feeding, childbirth preparation, birth plan.</li>
</ul>`,
        },
        '11.4': {
            key: [
                'Visits every 2 weeks until 36 weeks, then weekly. US for fetal weight if fundal height is <strong>&gt; 2 cm off</strong>. After 36 weeks fundal height no longer equals weeks (<strong>lightening</strong>: the fetus descends).',
                'BP <strong>≥ 140/90 in the 3rd trimester can mean preeclampsia</strong>. Ask about fetal movement pattern and Braxton Hicks.',
                '<strong>Leopold’s maneuvers</strong> (≥ 32 wk): (1) sides → lie, (2) fetal back, (3) fundus → part in the fundus, (4) suprapubic → presentation. FHR is loudest through the fetal back.',
                '<strong>Lie</strong> = fetal spine vs. maternal spine (longitudinal, transverse, oblique). <strong>Presentation</strong> = part entering the pelvis first (<strong>cephalic</strong>, <strong>breech</strong>, <strong>shoulder</strong> with transverse lie).',
                '36-week labs (35 to 37 6/7, valid 5 weeks): H&amp;H/CBC, VDRL/RPR, gonorrhea/chlamydia, <strong>GBS vaginal-rectal swab</strong> (25% carriers) → GBS+ gets <strong>antibiotics in labor</strong>, not before (recolonization).',
                '<strong>Fetal movement counts</strong>: start when the baby is active; count to 10; <strong>≥ 10 movements in 2 hours</strong>, otherwise call. Travel: flying OK in a normal pregnancy; on car trips stop <strong>hourly</strong> to void and walk 5 minutes.',
            ],
            html: `
<p>Visits continue with interval history, limited exam, labs and teaching, plus fetal movement assessment. <strong>Ultrasound for fetal weight</strong> when fundal height is <strong>more than 2 cm above or below</strong> expected. Visits every <strong>2 weeks to 36 weeks</strong>, then <strong>weekly</strong>. {{p. 520}}</p>

<h3>Interval history {{p. 521}}</h3>
<ul>
    <li>Chart review, BP, weight, dipstick if indicated; nutrition review if gain is off target. <strong>BP ≥ 140/90 can signal preeclampsia</strong>.</li>
    <li>Is the fetus moving in its <strong>normal pattern</strong>? Any Braxton Hicks? Review previous lab results.</li>
    <li>Same symptom list as the 2nd trimester.</li>
</ul>
<table>
    <thead><tr><th>Symptom</th><th>Possible complication {{Table 11.10 · p. 522}}</th></tr></thead>
    <tbody>
        <tr><td><strong>Decreased fetal movement</strong></td><td><strong>IUFD or fetal distress</strong></td></tr>
        <tr><td>Persistent vomiting</td><td>Hyperemesis, dehydration</td></tr>
        <tr><td>Dysuria, intermittent back pain</td><td>UTI</td></tr>
        <tr><td>Pelvic pressure, lower abdominal cramping</td><td><strong>Preterm labor</strong></td></tr>
        <tr><td>Vaginal bleeding</td><td><strong>Placenta previa or abruption</strong> (or bloody show of labor)</td></tr>
        <tr><td>Fever &gt; 38.3 °C</td><td>Infection</td></tr>
        <tr><td>Abdominal/epigastric pain</td><td>Cholelithiasis, liver disease, GERD, preeclampsia, HELLP</td></tr>
        <tr><td>Frequent dizziness</td><td>Anemia, dehydration, infection, heart disease</td></tr>
        <tr><td>Leaking fluid</td><td>Vaginitis, ROM</td></tr>
        <tr><td>Headache, edema</td><td>Hypertension / hypertensive disorders</td></tr>
    </tbody>
</table>

<h3>Physical exam {{p. 522}}</h3>
<ul>
    <li>Fundal height, FHR, edema; focused data for positive symptoms (e.g., <strong>liver function panel for epigastric pain</strong>).</li>
    <li><strong>After 36 weeks</strong> fundal height no longer approximates weeks because the fetus descends into the pelvis.</li>
</ul>
<h4>Leopold’s maneuvers (≥ 32 weeks) {{p. 522}}</h4>
<ol>
    <li>Palpate the <strong>sides</strong> of the abdomen → <strong>fetal lie</strong>.</li>
    <li>Palpate to locate the <strong>fetal back</strong>.</li>
    <li>Palpate the <strong>fundus</strong> → which part is in the fundus.</li>
    <li>Palpate the <strong>suprapubic</strong> area → <strong>presentation</strong>. {{p. 523}}</li>
</ol>
<ul>
    <li><strong>Fetal lie</strong>: relationship of the fetal spine to the maternal spine. <strong>Longitudinal</strong> (vertical, aligned) · <strong>transverse</strong> (horizontal, like a “+”) · <strong>oblique</strong> (diagonal).</li>
    <li><strong>Fetal presentation</strong>: part entering the pelvis first. <strong>Cephalic</strong> (head) · <strong>breech</strong> (buttocks/legs) · <strong>shoulder</strong> (with a transverse lie).</li>
    <li>FHR is loudest through the <strong>fetal back near the shoulder blades</strong>; count for 1 full minute and assess rhythm. Leopold’s + fundal height also estimate fetal weight. Full technique in Ch. 16.</li>
</ul>
<h4>Vaginal exam (≥ 36 weeks, when indicated or requested) {{p. 524}}</h4>
<p>Two lubricated gloved fingers: cervical length and dilation, presenting part and its descent. <strong>Cervical ripening</strong> (softening and opening) may start at <strong>37 weeks in multiparas</strong> and is more likely from <strong>39 weeks in primiparas</strong>.</p>

<h3>36-week labs {{p. 524}}</h3>
<ul>
    <li>Done at <strong>35 to 37 6/7 weeks</strong> so results are back before labor; <strong>valid 5 weeks</strong>.</li>
    <li><strong>H&amp;H or CBC</strong> (anemia, low platelets); <strong>VDRL/RPR</strong> and <strong>gonorrhea/chlamydia</strong> repeated, so there is time to treat before birth.</li>
    <li><strong>GBS</strong> (group B beta-hemolytic streptococcus) <strong>vaginal and rectal swab</strong>: a leading cause of newborn infection; <strong>25% of pregnant people</strong> are carriers. Positive → <strong>IV antibiotics during labor</strong>. Not treated earlier because GBS <strong>recolonizes</strong> the vagina.</li>
</ul>

<h3>Education {{p. 524}}</h3>
<ul>
    <li>Topics: development, <strong>fetal movement counts</strong>, health promotion, <strong>travel</strong>, changes, <strong>signs of labor</strong>, childbirth education, newborn provider, complications, labs, breast-feeding, birth plan.</li>
    <li><strong>Travel</strong>: flying is fine through a normal pregnancy; long car trips: stop <strong>every hour</strong> to void and walk 5 minutes.</li>
</ul>
<div class="callout nurse"><span class="callout-title">Teaching daily fetal movement counts {{p. 525}}</span><p>Start at the end of the 2nd trimester. (1) Choose a time when the baby is most active. (2) Count each movement. (3) Note how long it takes to reach <strong>10 movements</strong>. Expected: <strong>at least 10 in 2 hours</strong>; fewer → <strong>call the provider</strong>. Decreased movement is linked with low maternal glucose and poor placental perfusion (fetal stress/distress).</p></div>
<p>Late-pregnancy bleeding can be previa/abruption or normal <strong>bloody show</strong>; edema can be a hypertensive disorder or simple dependent edema. {{p. 525}}</p>`,
        },
        '11.5': {
            key: [
                'Purpose of a family assessment: determine whether the household is a <strong>safe and nurturing environment</strong> for the pregnant person and newborn.',
                'Three perspectives: <strong>systems</strong> (interdependence of members), <strong>structure-function</strong> (structure shapes how the family functions), <strong>developmental</strong> (expected stages, e.g., perinatal and parenting).',
                'Assess each member (age, education, language, work, health, beliefs) and the family as a whole: <strong>roles, communication, power structure (decision maker), values</strong>, safety and lifestyle practices, housing, neighborhood, water/food, who shops and cooks, transport, income.',
                'Analysis: <strong>organizational structure</strong> (multigenerational, blended, single parent, cohabiting, same sex, traditional) and who gives financial, emotional, social support; habitat risks (anemia, dehydration, communicable disease); violence, problem-solving.',
                'Plan of care is built <strong>together</strong>: nurse brings community resources; family brings its strengths. Example: anemia or poor weight gain → include whoever buys and cooks the food.',
            ],
            html: `
<p>Perinatal nursing is <strong>family centered</strong>: the family supports the pregnant person, but family functioning can also create challenges. {{p. 525}}</p>
<h3>Perspectives on the family {{p. 525}}</h3>
<ul>
    <li><strong>Systems</strong>: family function = interdependency of the members.</li>
    <li><strong>Structure and function</strong>: the family’s structure shapes how it functions.</li>
    <li><strong>Developmental</strong>: families move through expected stages; the perinatal period and parenting change interdependence and function.</li>
</ul>

<h3>Family assessment {{p. 525}}</h3>
<p><strong>Purpose</strong>: determine if the household is a <strong>safe and nurturing environment</strong> for the patient and newborn. Start by asking <strong>who the patient considers family</strong>.</p>
<ul>
    <li><strong>Each member</strong>: name, age, gender, race, spiritual/religious orientation, education, languages, employment, health status, health beliefs.</li>
    <li><strong>The family as a whole</strong>: <strong>roles</strong>, <strong>communication pattern</strong>, <strong>power structure</strong>, value system, safety and lifestyle practices (from the patient, partner and key members).</li>
    <li><strong>Living environment (habitat)</strong>: housing, neighborhood, water and food sources, meal planning → are physical and safety needs met?</li>
    <li><strong>Shared practices</strong>: locking doors, helmets, hygiene, cleaning, outdoor outings.</li>
    <li><strong>Developmental data</strong>: generations in the household, committed relationships, members in school, career goals. (Form: Figure 11.8.) {{p. 526}}</li>
</ul>

<h3>Analysis {{p. 526}}</h3>
<ul>
    <li><strong>Family profile</strong> → organizational structure biologically, legally and socially: multigenerational, blended, single parent, cohabiting, same sex, gender fluid, traditional. Who provides the most <strong>financial, emotional and social</strong> support? Health risks of members? Family strengths (communication, values, spiritual support).</li>
    <li><strong>Habitat data</strong>: overcrowding, crime, safe and constant water, affordable food nearby, who cooks and whether meals are nutritious, reliable transport → risks such as <strong>nutritional anemia, dehydration, communicable diseases</strong>. {{p. 527}}</li>
    <li><strong>Safety and health practices</strong>: locks, seat belts, immunizations, outdoor activity, dysfunction, <strong>family violence</strong>, effective communication, problem-solving.</li>
    <li>Then ask the family how the baby will change their relationships and how the family will affect the newborn’s health.</li>
</ul>
<h3>Plan of care {{p. 527}}</h3>
<p>Nurse, pregnant person and family identify the <strong>priority problem</strong> together. The nurse contributes knowledge of <strong>community resources</strong>; the family contributes its <strong>strengths and resources</strong>. Example: a patient who isn’t gaining weight or is anemic → interventions include the household member who buys groceries and cooks. If the biological father is not in the household, expect more emotional stress. (Care plan form: Figure 11.9.) {{p. 528}}</p>`,
        },
    },
    terms: [
        ['breech presentation', 'when the fetal buttocks (or legs) present into the pelvis first'],
        ['cephalic presentation', 'when the fetal head presents into the pelvis first'],
        ['cervical ripening', 'softening and opening of the cervix as it prepares for labor'],
        ['clinical pelvimetry', 'assessment of the general shape and size of the patient’s pelvis'],
        ['consanguinity', 'shared ancestry, such as when the parents are first cousins'],
        ['estimated date of delivery (EDD)', 'date the pregnant patient is expected to give birth, plus or minus 2 weeks'],
        ['fetal lie', 'relationship of the fetal spine to the pregnant patient’s spine'],
        ['fetal presentation', 'part of the fetus entering the pregnant patient’s pelvis first'],
        ['first trimester', '0 to 13 weeks and 6 days of gestation'],
        ['fundal height', 'measurement from the symphysis pubis to the top of the uterine fundus'],
        ['gravidity', 'total number of pregnancies (including the current one) regardless of outcome or number of fetuses'],
        ['integrated or sequential screenings', '1st- and 2nd-trimester tests determining increased risk for chromosome abnormalities and neural tube defects'],
        ['Leopold’s maneuvers', 'method of palpating the abdomen to determine fetal lie, presentation, back location, and position; also helps estimate fetal weight'],
        ['longitudinal lie', 'fetal spine lines up vertically with the pregnant patient’s spine'],
        ['multiparous', 'has given birth one or more times after 20 weeks of gestation'],
        ['Naegele’s Rule', 'EDD calculation: first day of LMP minus 3 months, plus 7 days, adjust the year'],
        ['oblique lie', 'fetal spine lies on the diagonal of the pregnant patient’s spine'],
        ['parity', 'number of pregnancies reaching 20 weeks or more, whether ending in live birth or stillbirth'],
        ['primiparous', 'person who is pregnant for the first time'],
        ['quad marker screen', 'maternal serum AFP, hCG, unconjugated estriol, and inhibin-A to assess risk of chromosome abnormalities and neural tube defects'],
        ['second trimester', '14 to 27 weeks and 6 days of gestation'],
        ['shoulder presentation', 'transverse lie with the shoulder presenting into the pelvis first'],
        ['third trimester', 'week 28 until delivery (usually by 42 weeks)'],
        ['transverse lie', 'fetal spine lines up horizontally with the pregnant patient’s spine, like a plus sign'],
        ['trimester', 'one of three periods of 14 weeks into which the 280 days of pregnancy are divided'],
    ],
    cards: [
        { f: 'Importance of the genetic history of the patient and biological father', b: 'Identifies inheritable conditions (CF, trisomy 21, Tay-Sachs, hemophilia, sickle cell), age and consanguinity risks, so carrier screening, counseling and diagnostic testing (CVS, amniocentesis) can be offered.', ref: '11.1' },
        { f: 'Why is prenatal care important?', b: 'Early, regular care is linked with fewer complications: it identifies risk factors, recognizes early signs to prevent severe complications, and provides education (diet, avoiding harmful substances).', ref: '11.1' },
        { f: 'Purpose of first-visit labs', b: 'Detect STIs, immunity or past infection (rubella, hepatitis), status of preexisting conditions, blood type/Rh/antibodies, anemia, UTI, substance use, and fetal genetic risk.', ref: '11.1' },
        { f: 'How is pregnancy confirmed at the first visit?', b: 'Urine hCG (presence) or serum hCG (qualitative or quantitative), and/or pelvic ultrasound: fetal cardiac activity, intrauterine location, EDD, number of fetuses.', ref: '11.1' },
        { f: 'Naegele’s rule', b: 'First day of LMP − 3 months + 7 days, then adjust the year. EDD is ± 2 weeks; assumes a 28-day cycle.', ref: '11.1' },
        { f: 'G/TPAL definitions', b: 'G: all pregnancies incl. current\nT: births ≥ 37 wk\nP: births > 20 and < 37 wk\nA: pregnancies ending < 20 wk\nL: living children\nMultiples count as one birth.', ref: '11.1' },
        { f: 'Preexisting risk factors in pregnancy', b: 'Age < 19 or ≥ 35, obesity, nutritional deficits, substance use, HTN, diabetes, HIV/STIs/hepatitis/herpes, cardiac/renal disease, epilepsy, psychiatric disorders, cervical procedures, uterine anomalies/surgery, previous obstetric complications.', ref: '11.1' },
        { f: 'Recommended weight gain by pre-pregnancy BMI', b: 'Underweight: 28–40 lb\nNormal: 25–35 lb\nOverweight: 15–25 lb\nObese: 11–20 lb\nGain starts after the 1st trimester.', ref: '11.1' },
        { f: 'Daily calorie and key nutrient needs in pregnancy', b: '+0 kcal 1st tri, +300 2nd, +400 3rd. Protein 70/80/100 g. Folate 600 mcg. Iron 27 mg. Calcium 1,000 mg (1,300 if < 19). Water 8–12 glasses.', ref: '11.1' },
        { f: 'Warning signs of a pregnancy complication', b: 'Persistent vomiting, dysuria, back pain/pelvic pressure, any vaginal bleeding, fever > 38.3 °C, persistent abdominal/epigastric pain, frequent dizziness, leaking fluid, headache, edema, visual changes, decreased fetal movement.', ref: '11.1' },
        { f: 'OTC drugs to avoid in pregnancy', b: 'Aspirin (unless low-dose for preeclampsia) · NSAIDs ≥ 20 wk (oligohydramnios, ductus closure) · acetaminophen > 3,000 mg/day · pseudoephedrine in 1st tri or with HTN · loratadine/cetirizine only after 1st tri.', ref: '11.1' },
        { f: 'Routine prenatal visit schedule', b: 'Every 4 weeks until 28 weeks, every 2 weeks from 28 to 36 weeks, then weekly until birth (more often with complications).', ref: '11.1' },
        { f: 'Topics of education in the first trimester', b: 'Fetal growth and development, nutrition, healthy lifestyle and teratogen avoidance (incl. smoking), common discomforts, signs of complications and when to call the provider.', ref: '11.2' },
        { f: 'Screening test vs. diagnostic test', b: 'Screening (integrated/quad, cell-free DNA) estimates risk of an abnormality; diagnostic tests (CVS, amniocentesis) confirm or rule out the condition.', ref: '11.2' },
        { f: 'Purpose of the 1-hour glucose challenge test', b: 'Screen for gestational diabetes at 24–28 weeks (earlier if high risk): 50 g glucose, no fasting; > 130–140 mg/dL → 3-h GTT (100 g, NPO; 2 of 4 elevated = GDM).', ref: '11.3' },
        { f: 'Most important question at each 2nd-trimester visit (one good answer)', b: 'Ask about fetal movement (and warning signs such as bleeding or cramping): movement reflects fetal well-being, and new symptoms after 20 weeks can signal preterm labor or hypertensive disorders.', ref: '11.3' },
        { f: 'RhoGAM: who, when, dose', b: 'Rh-negative, antibody-negative patient with an Rh-positive (or unknown) fetus: 300 mcg IM at 28 weeks, after birth, with any bleeding/trauma, and 50 mcg after a 1st-trimester abortion. Carry an Rh-negative card.', ref: '11.3' },
        { f: 'Fundal height rule', b: '12 wk at symphysis, 16 wk halfway to umbilicus, 20 wk at umbilicus. From 20 to 36 weeks: centimeters = weeks ± 2. After 36 weeks it no longer matches (fetus descends).', ref: '11.3' },
        { f: 'What does the 16–20 week ultrasound assess?', b: 'Placenta location, fetal measurements (weight, EDD), amniotic fluid, movement, FHR, anatomy including genitalia, cervical length.', ref: '11.3' },
        { f: 'Purpose of Leopold’s maneuvers', b: 'Determine fetal lie, presentation, location of the back (best spot for FHR) and position; with fundal height, estimate fetal weight. Done from 32 weeks.', ref: '11.4' },
        { f: 'Topics of education in the third trimester', b: 'Fetal movement counts, signs of labor, childbirth classes, travel, newborn provider, breast-feeding, birth plan, complications, labs, health promotion.', ref: '11.4' },
        { f: 'Why is a GBS culture done in the third trimester?', b: 'GBS is a leading cause of newborn infection; 25% are carriers. A vaginal-rectal swab at 35–37 weeks identifies carriers so IV antibiotics are given in labor (earlier treatment fails due to recolonization).', ref: '11.4' },
        { f: 'Fetal movement count teaching', b: 'Choose an active time, count movements, note time to reach 10. Expect ≥ 10 in 2 hours; fewer → call the provider.', ref: '11.4' },
        { f: 'Fetal lie vs. presentation', b: 'Lie: fetal spine vs. maternal spine (longitudinal, transverse, oblique). Presentation: the part entering the pelvis first (cephalic, breech, shoulder).', ref: '11.4' },
        { f: 'Several family strengths', b: 'Effective communication, shared values, spiritual support, ability to problem-solve, financial/emotional/social support for the pregnant person, safety and health practices.', ref: '11.5' },
        { f: 'Purpose of a family assessment during pregnancy', b: 'To determine whether the household is a safe and nurturing environment for the pregnant person and newborn, and to identify problems and resources for a plan of care.', ref: '11.5' },
        { f: 'Organizational vs. social structure of a family', b: 'Organizational structure: how the family is made up biologically, legally and socially (blended, single parent, multigenerational…). Social structure/function: roles, communication, power, values: how members interact and support each other.', ref: '11.5' },
    ],
    quiz: [
        { src: 'book', ref: '11.1', q: 'The nurse is discussing with the patient what laboratory tests are performed at the first prenatal visit. What tests for sexually transmitted infections does the nurse include in the discussion? Select all that apply.', o: ['GBS', 'VDRL', 'chlamydia culture', 'hepatitis B', 'hCG'], a: [1, 2, 3], why: 'VDRL (syphilis), chlamydia culture and hepatitis B (a sexually transmissible virus on the initial panel) are first-visit tests for infections spread sexually. GBS is a normal-flora bacterium screened at 36 weeks; hCG is a pregnancy test. (The book lists hepatitis separately from the STI tests, so answers may vary on D.)' },
        { src: 'book', ref: '11.1', q: 'The nurse is determining the G/TPAL of a patient at her first prenatal visit. The patient delivered twins at 32 weeks who are now 5 years old, delivered her first child 8 years ago 1 week early, and miscarried at 2 months’ gestation 3 years ago. What is this patient’s G/TPAL?', o: ['G3 P1113', 'G3 P2113', 'G4 P1113', 'G4 P2113'], a: 2, why: 'Pregnancies: first child, twins, miscarriage + current = G4. Term 1 (39 wk), Preterm 1 (twins = one birth), Abortion 1, Living 3 → G4 P1113.' },
        { src: 'book', ref: '11.1', q: 'The nurse is discussing methods of confirming the pregnancy at the first prenatal visit. What method is used to confirm cardiac activity of the fetus?', o: ['bimanual exam', 'pelvic ultrasound', 'serum pregnancy test', 'urine pregnancy test'], a: 1, why: 'Pelvic ultrasound confirms fetal cardiac activity, intrauterine location, EDD and number of fetuses. Pregnancy tests only detect hCG.' },
        { src: 'book', ref: '11.1', q: 'The nurse is discussing the purpose of the physical examination at the first prenatal visit. What information does the nurse include?', o: ['The physical exam helps to confirm the patient’s current health.', 'The physical exam determines nutritional risk factors.', 'The physical exam confirms the diagnosis of STIs.', 'The physical exam includes urinalysis.'], a: 0, why: 'The physical exam provides the baseline assessment of current physical condition for comparison throughout pregnancy. STIs are diagnosed by labs.' },
        { src: 'book', ref: '11.1', q: 'A nurse is providing prenatal education to a patient who is 8 weeks pregnant. The developing fetus is most vulnerable to teratogens during what trimester?', o: ['first', 'second', 'third', 'fourth'], a: 0, why: 'The embryo/fetus is especially vulnerable in the first 14 weeks (organogenesis).' },
        { src: 'book', ref: '11.1', q: 'At the first prenatal visit, the first day of the LMP was February 18, 2024. Using Naegele’s Rule, calculate the EDD.', o: ['November 11, 2024', 'November 11, 2025', 'November 25, 2024', 'November 25, 2025'], a: 2, why: 'Feb 18 − 3 months = Nov 18; + 7 days = Nov 25; adjust year (+1 from 2023) → November 25, 2024.' },
        { src: 'book', ref: '11.1', q: 'A pregnant patient asks how much physical activity is safe during pregnancy. What is an acceptable response?', o: ['Decreasing physical activity decreases emotional and physical symptoms.', 'Increasing physical activity increases emotional and physical symptoms.', 'Physical activity during pregnancy should be limited to hygiene and household tasks.', 'The level of activity prior to pregnancy is used to determine a safe activity level during pregnancy.'], a: 3, why: 'Previously active patients may do 30 min 5–7 days/week; inactive patients start with 5 min/day and add gradually.' },
        { src: 'book', ref: '11.2', q: 'What patient symptom at 10 weeks of gestation requires further investigation by the nurse?', o: ['breast tenderness', 'infrequent nausea', 'change in appetite', 'weight loss'], a: 3, why: 'Weight loss may indicate persistent vomiting, dehydration or hyperemesis. The others are expected early.' },
        { src: 'book', ref: '11.2', q: 'The nurse receives a phone call from a patient concerned about lab results from the first prenatal visit 10 days ago. What is the nurse’s next action?', o: ['ask the patient if they have checked their electronic chart', 'inform the patient they will need to wait until the next office visit', 'provide the patient with the results of the tests', 'verify the identification of the patient'], a: 3, why: 'Before sharing any health information by phone, verify the patient’s identity (confidentiality).' },
        { src: 'book', ref: '11.3', q: 'A pregnant patient phones to say she has not felt the baby move. Identify the first question for the nurse to ask.', o: ['Have you experienced any recent vaginal bleeding?', 'Have you experienced any recent vaginal discharge?', 'How many weeks pregnant are you?', 'When was the last time you felt the baby move?'], a: 2, why: 'Gestational age comes first: quickening is not expected until 16–20 weeks, so the meaning of “no movement” depends on how far along she is.' },
        { src: 'book', ref: '11.2', q: 'What assessments or tests can the pregnant patient expect at each prenatal visit?', o: ['hemoglobin', 'antibody screen', 'ultrasound', 'blood pressure'], a: 3, why: 'Weight and BP are measured at every visit. Hgb is about once per trimester; antibody screen and US are scheduled at specific times.' },
        { src: 'book', ref: '11.3', q: 'A patient at 16 weeks is undecided about the quad screen. How does the nurse explain its purpose?', o: ['It indicates the risk of the fetus for heart defects.', 'It indicates the risk of the fetus for neural tube defects.', 'It indicates the risk of the fetus for neural tube defects and chromosome abnormalities.', 'It indicates the risk of the fetus for chromosome abnormalities.'], a: 2, why: 'AFP, hCG, unconjugated estriol and inhibin-A estimate risk of both chromosome abnormalities and NTDs.' },
        { src: 'book', ref: '11.4', q: 'During the interval history at 30 weeks, what data should the nurse bring to the provider’s attention?', o: ['Hgb change from 12 g/dL (first visit) to 11 g at 28 weeks', 'negative ketones in the urine', 'dysuria for 3 days', 'weight gain of 3 pounds in the last 2 weeks'], a: 2, why: 'Dysuria suggests a UTI, which can progress to pyelonephritis and preterm contractions. Hgb 11 is expected hemodilution; 3 lb in 2 weeks is near expected.' },
        { src: 'book', ref: '11.3', q: 'What fundal height measurement is expected for a patient at 34 weeks of gestation?', o: ['31 cm', '33 cm', '37 cm', '38 cm'], a: 1, why: 'Between 20 and 36 weeks, cm = weeks ± 2, so 32–36 cm is expected at 34 weeks.' },
        { src: 'book', ref: '11.4', q: 'During Leopold’s maneuvers at 36 weeks the lie is longitudinal, the fetal legs are in the top of the uterus, and the head is above the symphysis pubis. Which presentation does the nurse document?', o: ['cephalic', 'compound', 'transverse', 'breech'], a: 0, why: 'The head is entering the pelvis first = cephalic presentation. Transverse is a lie, not a presentation.' },
        { src: 'book', ref: '11.4', q: 'What warning sign should a third-trimester patient report immediately?', o: ['chronic constipation', 'decreased fetal movement', 'early evening fatigue', 'loss of appetite'], a: 1, why: 'Decreased fetal movement may indicate fetal distress or intrauterine fetal demise.' },
        { src: 'book', ref: '11.4', q: 'The nurse teaches fetal movement counts at 28 weeks. Which statement shows understanding?', o: ['I need to count the baby’s movements for 1 hour every day.', 'I should wait to count the baby’s movements after work.', 'If the baby moves less than 10 times in 2 hours, I need to call the midwife.', 'Once the baby moves 5 times, I can stop counting.'], a: 2, why: 'Expect at least 10 movements in 2 hours, counted at a time the baby is usually active.' },
        { src: 'book', ref: '11.5', q: 'The nurse is completing a family assessment at 10 weeks of gestation. What data are included? Select all that apply.', o: ['annual income', 'total number of cousins', 'number of people living in the household', 'person in the household who makes the major decisions for the family', 'name of patient’s sister who is deceased'], a: [0, 2, 3], why: 'Finances, household composition (overcrowding, support) and the power structure (decision maker) are assessed. Number of cousins and deceased relatives’ names don’t describe the current household.' },

        { ref: '11.1', q: 'Using Naegele’s rule, what is the EDD for an LMP of July 10?', o: ['April 3', 'April 17', 'October 17', 'March 17'], a: 1, why: 'July 10 − 3 months = April 10; + 7 days = April 17 (of the following year).' },
        { ref: '11.1', q: 'A patient is pregnant for the 3rd time. She had a stillbirth at 24 weeks and a living child born at 40 weeks. What is her G/TPAL?', o: ['G3 P1102', 'G3 P1101', 'G2 P1101', 'G3 P2002'], a: 1, why: 'G3 (incl. current). T1 (40 wk), P1 (24 wk counts as preterm birth), A0, L1 → G3 P1101.' },
        { ref: '11.1', q: 'A pregnant patient’s rubella titer shows she is nonimmune. What is the correct plan?', o: ['Give the MMR vaccine today', 'Vaccinate after birth, before discharge; avoid exposure to rashes now', 'Repeat the titer monthly', 'No action needed'], a: 1, why: 'Rubella vaccine is live and contraindicated in pregnancy; it is given postpartum before discharge.' },
        { ref: '11.1', q: 'A patient with normal BMI asks how much weight to gain. What is the recommendation?', o: ['11–20 lb', '15–25 lb', '25–35 lb', '28–40 lb'], a: 2, why: 'Normal BMI: 25–35 lb. Underweight 28–40, overweight 15–25, obese 11–20.' },
        { ref: '11.1', q: 'A patient at 24 weeks wants something for back pain. Which OTC drug should be avoided?', o: ['Acetaminophen within daily limits', 'Ibuprofen', 'A warm compress', 'A maternity belt'], a: 1, why: 'NSAIDs are contraindicated from 20 weeks: oligohydramnios, fetal renal problems, premature ductus arteriosus closure.' },
        { ref: '11.1', q: 'Which herbal supplement is considered safe in pregnancy?', o: ['Black cohosh', 'Ginger', 'Dong quai', 'Goldenseal'], a: 1, why: 'Ginger (also peppermint, echinacea) shows no increased risk. Cohosh and dong quai → preterm labor; goldenseal → newborn jaundice.' },
        { ref: '11.1', q: 'A pregnant patient has a cat. What teaching is most important?', o: ['Rehome the cat', 'Have someone else change the litter and avoid scratches from outdoor cats', 'Only feed the cat raw meat', 'Bathe the cat weekly'], a: 1, why: 'Cat feces and nails can carry toxoplasmosis, a teratogen (also from undercooked meat).' },
        { ref: '11.1', q: 'At the first visit, urine dipstick shows ketones. The nurse should first ask about:', o: ['Dysuria', 'Vomiting and food intake', 'Vaginal discharge', 'Headaches'], a: 1, why: 'Ketonuria results from excessive vomiting (not eating enough).' },
        { ref: '11.3', q: 'Which BP finding indicates preexisting (chronic) hypertension?', o: ['138/88 at 32 weeks', '142/92 at 14 weeks', '118/76 at 20 weeks', '150/100 at 36 weeks'], a: 1, why: 'BP ≥ 140/90 before 20 weeks indicates preexisting hypertension; after 20 weeks it suggests a hypertensive disorder of pregnancy.' },
        { ref: '11.3', q: 'A patient’s 1-hour GCT is 155 mg/dL. What is the next step?', o: ['Diagnose GDM and start insulin', 'Schedule a 3-hour GTT with NPO preparation', 'Repeat the GCT next month', 'No action needed'], a: 1, why: 'An elevated GCT is a screen only; the 3-hour 100-g GTT diagnoses GDM (2 of 4 values elevated).' },
        { ref: '11.3', q: 'An Rh-negative patient at 28 weeks has a negative antibody screen. What does the nurse anticipate?', o: ['Rho(D) immune globulin 300 mcg IM', 'Rubella vaccine', 'Repeat screen at 36 weeks only', 'Nothing until birth'], a: 0, why: 'A negative antibody screen means not sensitized; antepartum RhoGAM at 28 weeks prevents sensitization in the 3rd trimester.' },
        { ref: '11.3', q: 'A patient at 18 weeks reports cramping and spotting. How does the nurse interpret this compared with the same symptoms at 30 weeks?', o: ['Both indicate preterm labor', '18 weeks: possible abortion; 30 weeks: possible preterm labor', 'Both are normal', '18 weeks: preterm labor; 30 weeks: abortion'], a: 1, why: 'Before 20 weeks, cramping and bleeding suggest possible abortion; after 20 weeks, possible preterm labor.' },
        { ref: '11.4', q: 'A GBS-positive patient at 36 weeks asks why she isn’t treated now. The nurse explains:', o: ['GBS is harmless', 'Antibiotics are given in labor because GBS can recolonize after earlier treatment', 'Treatment happens only after birth for the baby', 'She will have a cesarean instead'], a: 1, why: 'Antepartum treatment allows recolonization; intrapartum IV antibiotics protect the newborn.' },
        { ref: '11.4', q: 'The fundal height at 30 weeks is 26 cm. What does the nurse expect next?', o: ['Nothing, it is normal', 'An ultrasound to evaluate fetal growth/weight', 'Immediate induction', 'Leopold’s maneuvers only'], a: 1, why: 'Fundal height more than 2 cm off (expected 28–32 cm) → ultrasound to check fetal weight.' },
        { ref: '11.4', q: 'When performing Leopold’s maneuvers, the fetal spine is horizontal to the maternal spine. What is the presentation?', o: ['Cephalic', 'Breech', 'Shoulder', 'Vertex'], a: 2, why: 'A transverse lie presents the shoulder.' },
        { ref: '11.4', q: 'A pregnant patient plans a 6-hour car trip at 32 weeks. What teaching is appropriate?', o: ['Travel is not allowed after 28 weeks', 'Wear the seat belt and stop about every hour to void and walk for 5 minutes', 'Remove the seat belt to protect the fetus', 'Drive without stopping to arrive sooner'], a: 1, why: 'Seat belts always; hourly stops to void and walk reduce stasis (VTE) and bladder distention.' },
        { ref: '11.5', q: 'A pregnant patient is anemic. The family assessment shows her mother-in-law shops and cooks. What intervention is best?', o: ['Teach only the patient about iron-rich foods', 'Include the mother-in-law in nutrition teaching', 'Refer to social services', 'Tell the patient to cook for herself'], a: 1, why: 'The plan of care includes the household member responsible for buying and cooking food.' },
    ],
});
