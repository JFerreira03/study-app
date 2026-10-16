STUDY.addChapter('obgyn', {
    n: 12,
    intro: `<p>A <strong>high-risk pregnancy</strong> has an increased likelihood of maternal and fetal complications. Some conditions exist before conception (age extremes, nutrition, social determinants, chronic disease); others arise only in pregnancy (abortion, ectopic, hyperemesis, previa, abruption, preeclampsia, GDM). Nurses implement collaborative care plans, recognize the unexpected early, educate and advocate. {{Chapter intro · p. 537}}</p>`,
    sections: {
        '12.1': {
            key: [
                'Age risk is a continuum: <strong>adolescent (10–19)</strong> → infection, anemia, preeclampsia, PPD, prematurity, FGR; <strong>advanced maternal age (≥ 35 at EDD)</strong> → ectopic, multiples, GDM, HTN, cesarean, PPH, chromosomal anomalies, stillbirth. AMA: consider <strong>low-dose aspirin</strong>.',
                'Obesity → preeclampsia, GDM, sleep apnea, stillbirth, cesarean, NTDs, heart defects. Undernutrition → brain defects, <strong>psychiatric disorders</strong>, vision/motor defects. <strong>Folic acid 400 mcg/day</strong> from conception; B12 for vegans.',
                'Screen <strong>every</strong> patient for substances (4P’s, NIDA Quick Screen, CRAFFT). Alcohol: no safe amount (FASD). Tobacco: FGR, abruption, stillbirth (cutting down helps). Opioids → <strong>methadone/buprenorphine</strong> + treatment; NAS. Stimulants → vasoconstriction, <strong>abruption</strong>; no breast-feeding.',
                '<strong>Chronic HTN</strong> (before pregnancy or &lt; 20 wk): keep BP &lt; 140/90 with <strong>nifedipine or labetalol</strong>; <strong>ACE inhibitors/ARBs contraindicated</strong>; low-dose aspirin 12–28 wk until birth.',
                'Preexisting diabetes: A1c &lt; 6.5% before conception; <strong>1st tri ↑ insulin sensitivity → hypoglycemia</strong>; after 16 wk ↑ resistance → more insulin; type 1 risk of <strong>DKA</strong>; oral agents switched to <strong>insulin</strong>. Risks: anomalies, macrosomia, shoulder dystocia, neonatal hypoglycemia, stillbirth.',
                'Thyroid: <strong>hypo</strong> (TSH &gt; 5, low T4; Hashimoto) → raise replacement dose; <strong>hyper</strong> (Graves) → switch methimazole to <strong>PTU</strong> in the 1st tri. Asthma: albuterol; TB drugs (INH, rifampin, ethambutol) safe; SLE quiet 6 months (anti-Ro/La → neonatal heart block); RA improves; HIV: ART → &lt; 1% transmission.',
            ],
            html: `
<table>
    <thead><tr><th>Category</th><th>Preconception risk factors {{Table 12.1 · p. 538}}</th></tr></thead>
    <tbody>
        <tr><td>Physical and mental</td><td>Preexisting conditions (HTN, diabetes), nutritional excess/deficit, mental health disorders, high-risk obstetric history</td></tr>
        <tr><td>Lifestyle</td><td>Alcohol/substances, inactivity, unhealthy eating, lack of support, high-risk behaviors</td></tr>
        <tr><td>Social determinants</td><td>Age, socioeconomic status, homelessness, undocumented status, migrant work</td></tr>
        <tr><td>Environmental</td><td>Work hazards, radiation, poor living conditions, teratogens, air pollutants</td></tr>
    </tbody>
</table>
<p>Outcome disparities are noted for Black, American Indian and Alaska Native populations. The nurse is often the first contact: educates, supports, identifies risks. {{p. 538}}</p>

<h3>Age {{p. 538}}</h3>
<p>Risk is highest &lt; 20 and ≥ 35 but lies on a <strong>continuum</strong>: risk falls with each year of adolescent age and rises each year after 35.</p>
<ul>
    <li><strong>Adolescent pregnancy (10–19 years)</strong>: maternal infection, hemorrhage, anemia, preeclampsia, <strong>postpartum depression</strong>; neonatal prematurity, FGR, stillbirth, anomalies. Linked to poverty, unemployment, social and psychologic problems; late or no prenatal care; consent laws are a barrier (33 states allow care without parental consent). Interventions: contraception and prenatal care education, support groups, counseling, <strong>WIC</strong> (nutrition classes, breast-feeding help, immunization referrals, job help). {{p. 539}}</li>
    <li><strong>Advanced maternal age</strong> (≥ 35 at EDD): ectopic, <strong>multiple gestation</strong>, GDM, hypertensive disorders, cesarean, PPH; fetal miscarriage, <strong>chromosomal abnormalities</strong>, anomalies, prematurity, FGR, stillbirth; more chronic disease (HTN, DM, hypothyroidism). ACOG: counsel; consider <strong>low-dose aspirin</strong>; US for multiples and anomalies; monitor growth and stillbirth risk; promote vaginal birth if safe. <strong>Primiparas &gt; 40</strong> have more cesareans, gestational HTN, preeclampsia, lower birth weight than multiparas.</li>
</ul>

<h3>Nutritional excess and deficiency {{p. 539}}</h3>
<ul>
    <li><strong>Overnutrition</strong> (excess intake; obesity): preeclampsia, GDM, obstructive sleep apnea, cardiac dysfunction, stillbirth, cesarean; fetal <strong>NTDs</strong>, heart defects, limb/orofacial defects, gastroschisis, abnormal growth. Deficits can still exist with overnutrition. {{p. 540}}</li>
    <li><strong>Undernutrition</strong> (inadequate food/nutrients): fetal brain defects, <strong>psychiatric disorders</strong>, vision and motor defects, altered cognition. Refer to food services; look for underlying disease.</li>
    <li>Correct deficits <strong>before conception</strong>. Key nutrients: folic acid, iron, B12, calcium, vitamin D, iodine, choline. <strong>Folic acid 400 mcg/day from conception</strong> → ↓ NTDs, prematurity, LBW. Iodine (seafood, eggs, dairy, iodized salt) → neurodevelopment. <strong>B12</strong> from animal products → vegans/vegetarians may need a supplement.</li>
</ul>

<h3>Special populations {{Table 12.2 · p. 541}}</h3>
<table>
    <thead><tr><th>Population</th><th>Pregnancy risks</th><th>Fetal/infant effects</th></tr></thead>
    <tbody>
        <tr><td>Poverty</td><td>Limited prenatal care, preeclampsia, GDM, malnutrition, limited support</td><td>Preterm birth, miscarriage, less newborn care</td></tr>
        <tr><td>Migrant farm work</td><td>Limited care, <strong>occupational hazards</strong> (heat, heavy lifting, chemicals), poor living conditions, infection</td><td>Preterm birth, LBW, birth defects</td></tr>
        <tr><td>Undocumented immigrant</td><td>Limited/delayed care, mental health disorders, infection, chronic stress</td><td>Preterm birth, LBW</td></tr>
        <tr><td>Homelessness</td><td>Limited care and food, substance use, mental illness, hazards, <strong>violence</strong></td><td>Preterm birth, LBW</td></tr>
        <tr><td>Substance use</td><td>Infections, poor self-care, mental illness</td><td>Drug exposure, defects, LBW, IUFD, <strong>neonatal withdrawal</strong>, neurodevelopmental impairment</td></tr>
    </tbody>
</table>
<ul>
    <li><strong>Poverty</strong>: connect to resources, educate, emotional support, financial referrals, collaborate with social services, encourage self-advocacy. {{p. 541}}</li>
    <li><strong>Migrant farm workers</strong>: frequent relocation, language barriers, may request female providers. <strong>Evaluate occupational hazards and educate</strong>; use a <strong>medical interpreter</strong>. {{p. 542}}</li>
    <li><strong>Undocumented</strong>: ACOG supports access for all; culturally sensitive care, local resources.</li>
    <li><strong>Homelessness</strong>: focus on the individual’s needs; refer to social services/<strong>WIC</strong> (prenatal vitamins, food vouchers).</li>
</ul>

<h3>Substance use {{p. 542}}</h3>
<p>Ask before/at the first visit about alcohol, tobacco, opioids, benzodiazepines, marijuana, stimulants using validated tools on <strong>all</strong> patients (reduces stereotyping): <strong>4P’s</strong> (Parents, Partners, Past, Pregnancy), <strong>NIDA Quick Screen</strong>, <strong>CRAFFT</strong>. Use nonjudgmental, therapeutic communication; refer and explain what the agency offers.</p>
<table>
    <thead><tr><th>Substance</th><th>Pregnancy</th><th>Fetus/infant {{Table 12.3 · p. 543}}</th></tr></thead>
    <tbody>
        <tr><td><strong>Alcohol</strong></td><td>Miscarriage, stillbirth</td><td>Preterm, LBW, <strong>FASD</strong>, developmental delay. <strong>No amount is safe</strong></td></tr>
        <tr><td><strong>Tobacco</strong></td><td>Miscarriage, stillbirth, <strong>abruption</strong></td><td>FGR, preterm, lung/brain damage, neurodevelopmental disorders. Dose-response: <strong>cutting down helps</strong></td></tr>
        <tr><td><strong>Opioids</strong></td><td>Maternal death, stillbirth, poor nutrition, IPV, polysubstance use, bloodborne pathogens, inconsistent care</td><td>Preterm, <strong>neonatal abstinence syndrome (NAS)</strong></td></tr>
        <tr><td>Benzodiazepines</td><td>Withdrawal, dependence, interactions</td><td>NAS, hypotonia, hypothermia, lethargy, respiratory and feeding problems</td></tr>
        <tr><td>Marijuana</td><td>Mental health, respiratory problems</td><td>Neurodevelopmental impairment, LBW (discouraged)</td></tr>
        <tr><td><strong>Stimulants</strong> (cocaine, meth)</td><td><strong>Vasoconstriction → abruption</strong>, IUGR</td><td>Anomalies, preterm. Stimulant use after birth = <strong>no breast-feeding</strong></td></tr>
    </tbody>
</table>
<p>Opioid use disorder: switch to <strong>methadone or buprenorphine</strong> + treatment program (minimize withdrawal, prevent relapse); screen for comorbidities; newborn monitored for withdrawal. {{p. 544}}</p>

<h3>Preexisting medical conditions {{p. 544}}</h3>
<p>Multidisciplinary care, often with <strong>maternal-fetal medicine</strong>. The nurse explains why specialists are involved, encourages adherence, coordinates care. Preconception: review teratogenic drugs, contraception until optimized.</p>

<h4>Chronic hypertension {{p. 544}}</h4>
<ul>
    <li>HTN before pregnancy, <strong>before 20 weeks</strong>, or persisting after delivery. Risks: <strong>FGR</strong>, stillbirth, preterm birth, fetal distress, cesarean, PPH, GDM, <strong>preeclampsia</strong>.</li>
    <li>Keep BP <strong>&lt; 140/90</strong>. First line: <strong>nifedipine (Adalat)</strong> and <strong>labetalol (Trandate)</strong>. <strong>ACE inhibitors and ARBs are contraindicated</strong> (teratogenic). <strong>Low-dose aspirin daily from 12–28 weeks until delivery</strong>. {{p. 545}}</li>
    <li>Fetal surveillance: US with Doppler, NST, BPP.</li>
</ul>

<h4>Diabetes mellitus {{p. 545}}</h4>
<ul>
    <li>Type 1: autoimmune beta-cell destruction (insulin shortage). Type 2: insufficient insulin with insulin resistance.</li>
    <li><strong>1st trimester: ↑ insulin sensitivity → hypoglycemia</strong> (lower doses; N/V adds risk). <strong>After 16 weeks: insulin resistance rises</strong> → higher doses, rising faster in the 3rd trimester. Monitor glucose often; teach hypo/hyperglycemia signs.</li>
    <li>Preconception <strong>A1c &lt; 6.5%</strong>. High glucose in the 1st trimester → congenital heart disease, anencephaly, microcephaly, renal anomalies, <strong>caudal regression</strong>. {{p. 546}}</li>
    <li><strong>Type 1</strong>: risk of <strong>DKA</strong> (an obstetric emergency): dry mouth, polydipsia, polyuria, N/V, abdominal pain, altered LOC, deep/rapid breathing, <strong>fruity breath</strong>, tachycardia, ketonuria; teach ketone strips and when to call. {{p. 547}}</li>
    <li><strong>Type 2</strong>: may be diagnosed at the first visit if high risk; more comorbidities; diet/exercise may suffice; <strong>oral agents (metformin) are switched to insulin</strong> in the 1st trimester (cross the placenta).</li>
</ul>
<table>
    <thead><tr><th>Pregnant person</th><th>Fetus/newborn {{Table 12.4 · p. 546}}</th></tr></thead>
    <tbody>
        <tr><td>Preeclampsia, gestational HTN, <strong>polyhydramnios</strong>, cesarean, hypoglycemia, DKA, PPH, retinopathy, nephropathy, cardiac disease, neuropathy, early loss, preterm birth</td><td><strong>Neonatal hypoglycemia</strong>, <strong>macrosomia/LGA</strong> (or FGR), <strong>shoulder dystocia</strong>, RDS, malformations (NTDs, heart disease, cleft lip/palate, diaphragmatic hernia, abdominal wall defects, renal agenesis, limb), hyperbilirubinemia, hypocalcemia, stillbirth</td></tr>
    </tbody>
</table>
<div class="callout memo"><span class="callout-title">Pharmacology: insulin in pregnancy {{p. 546}}</span><p>Hormone/antidiabetic; SQ (IV drip in acute care); dose individualized and adjusted as needs change. Placental hormones (estrogen, progesterone, cortisol, hPL) cause resistance. Adverse: <strong>hypoglycemia</strong>, rare allergy. Teach injection technique, storage and mixing, glucose monitoring, signs of hypo/hyperglycemia, diet, exercise, attending visits.</p></div>

<h4>Thyroid disease {{p. 547}}</h4>
<table>
    <thead><tr><th></th><th>Hypothyroidism</th><th>Hyperthyroidism</th></tr></thead>
    <tbody>
        <tr><td>Labs</td><td><strong>TSH high (&gt; 5)</strong>, free T4 low (&lt; 0.7)</td><td><strong>Free T4 high (&gt; 2)</strong>, TSH low (&lt; 0.5)</td></tr>
        <tr><td>Signs</td><td>Fatigue, weight gain, constipation, cramps, <strong>cold intolerance</strong>, edema, hair loss, dry skin</td><td><strong>Heat intolerance</strong>, weight loss, frequent stools, sweating, palpitations, insomnia, tachycardia, HTN</td></tr>
        <tr><td>Common cause</td><td><strong>Hashimoto</strong> thyroiditis</td><td><strong>Graves disease</strong> (antibodies cross the placenta → monitor fetus; newborn followed for neonatal Graves)</td></tr>
        <tr><td>Risks</td><td>LBW, impaired neurodevelopment</td><td>Miscarriage, stillbirth, FGR, HTN, heart failure</td></tr>
        <tr><td>Treatment</td><td>Replacement before conception; <strong>dose increased after conception</strong>; adherence; adequate iodine</td><td><strong>Methimazole is teratogenic → switch to PTU</strong> before/in the 1st trimester; radioiodine or surgery before conception</td></tr>
    </tbody>
</table>
<p>Screening isn’t universal: indicated with personal/family history, symptoms, or <strong>type 1 diabetes</strong>. {{p. 548}}</p>

<h4>Seizure disorders {{p. 548}}</h4>
<p>Antiepileptics → malformations, FGR, neurodevelopmental impairment; seizures may increase. Risks: maternal/fetal death, cesarean, preeclampsia, PPH, preterm birth, chorioamnionitis. Pregnancy changes drug levels → <strong>frequent drug level monitoring</strong>; encourage keeping neurology appointments.</p>

<h4>Anemias {{p. 548}}</h4>
<ul>
    <li><strong>Anemia</strong>: RBCs/Hgb too low to oxygenate tissues → PPH, abruption, preterm birth, FGR, stillbirth. <strong>Screen every trimester</strong>.</li>
    <li><strong>Nutritional</strong> (iron, folate, B12): daily iron supplement; iron-rich foods (meat, legumes, leafy greens, fortified cereal, nuts, seeds, dried fruit); <strong>avoid tea/coffee at meals</strong> (block iron absorption). B12 deficiency in Crohn’s, gastrectomy, vegan diets → monthly IM cyanocobalamin or oral. Cultural food beliefs: ask, respect, find culturally acceptable nutrient-dense foods, consult a nutritionist. {{p. 549}}</li>
    <li><strong>Sickle cell disease</strong>: preeclampsia, preterm labor, miscarriage, FGR; pregnancy can trigger <strong>crisis</strong>, acute chest syndrome. Prevent crises with <strong>hydration</strong> and avoiding overexertion; report N/V promptly. Stop <strong>hydroxyurea, ACE inhibitors, iron chelators</strong> before pregnancy. Offer genetic counseling. {{p. 550}}</li>
    <li><strong>Thalassemia</strong> (inadequate hemoglobin; alpha or beta chains): preterm birth, miscarriage, GH, GDM, abruption, UTI, stones. Monitor <strong>cardiac</strong> function (main cause of death), liver (iron overload), infections from transfusions (hep B/C, HIV, CMV), endocrine; ↑ <strong>thrombosis</strong> risk. Chelation only if severe. {{p. 551}}</li>
    <li><strong>Immune thrombocytopenia (ITP)</strong>: autoimmune platelet destruction. Corticosteroids and IVIG; platelet transfusion if &lt; 50 × 10⁹/L near birth or severe bleeding; newborn may rarely be thrombocytopenic.</li>
</ul>

<h4>Respiratory disorders {{p. 551}}</h4>
<ul>
    <li><strong>Cystic fibrosis</strong> (CFTR mutation; thick mucus): respiratory infections, poor airway clearance, <strong>pancreatic insufficiency</strong> (diabetes, malabsorption). Adhere to meds, respiratory treatments, diet; <strong>test the other parent</strong> for carrier status.</li>
    <li><strong>Asthma</strong>: may worsen; exacerbations (dyspnea, wheeze, cough, chest tightness) endanger both. <strong>Albuterol</strong> first for exacerbations; inhaled/systemic steroids if persistent (systemic: anomalies, preeclampsia, GDM, prematurity, so use judiciously); <strong>avoid triggers</strong>. {{p. 552}}</li>
    <li><strong>Tuberculosis</strong>: chronic cough, hemoptysis, fever, <strong>night sweats</strong>. Crowded living, shelters, prisons ↑ risk. Skin test (read at <strong>48–72 h</strong>) or blood test → chest x-ray if positive. <strong>Isoniazid, rifampin, ethambutol are safe</strong> in pregnancy; monitor liver; adherence for months. <strong>Negative-pressure room</strong> on admission. Untreated → LBW, rarely congenital TB.</li>
</ul>

<h4>Cardiac disease {{p. 552}}</h4>
<ul>
    <li>Pregnancy strains the heart. Congenital heart disease (watch <strong>arrhythmias and heart failure</strong>), valvular disease (surgery before conception if severe), <strong>aortic disease (dissection/rupture)</strong>, coronary artery disease (MI). Echo, ECG; deliver at a high-risk unit. ↑ fetal hypoxia and preterm birth. {{p. 553}}</li>
    <li>Risk class {{Table 12.5 · p. 553}}: <strong>I</strong> no ↑ mortality · <strong>II</strong> small ↑ mortality, moderate morbidity · <strong>III</strong> significant ↑ mortality/severe morbidity · <strong>IV</strong> extremely high risk.</li>
</ul>

<h4>Renal disease {{p. 553}}</h4>
<p>CKD ↓ fertility; in pregnancy: declining kidney function, hypertensive disorders, miscarriage; fetal LBW, stillbirth, prematurity. Contraception until ready; adjust meds; baseline tests; nephrology; manage BP, prevent preeclampsia, monitor drug levels and fetal growth.</p>

<h4>Immune disorders {{p. 553}}</h4>
<ul>
    <li>Most common preexisting conditions (more frequent in persons assigned female at birth). General risks: miscarriage, stillbirth, FGR, prematurity. Optimize before pregnancy; review medications.</li>
    <li><strong>HIV</strong>: ART + prenatal care → healthy HIV-negative infants are possible. Screen all pregnant patients. Management: <strong>ART</strong>, <strong>scheduled cesarean if high viral load</strong>, ART for the infant. Feeding: formula/donor milk, or breast-feeding if on ART throughout (<strong>&lt; 1%</strong> transmission) and continuing ART. Monitor opportunistic infections (thrush), other STIs, <strong>TB test</strong>, CD4, CBC, renal/liver tests, viral load. Teach to limit alcohol/tobacco/drugs, avoid unprotected sex. {{p. 554}}</li>
    <li><strong>SLE</strong>: ideally <strong>dormant 6 months before conception</strong>; flares possible. <strong>Anti-Ro (SSA)/anti-La (SSB)</strong> cross the placenta → <strong>neonatal heart block</strong>/neonatal lupus. Miscarriage, stillbirth, preeclampsia, thrombosis; <strong>antiphospholipid antibodies → anticoagulation</strong>; watch for lupus nephritis.</li>
    <li><strong>Rheumatoid arthritis</strong>: often <strong>improves</strong> from the 1st trimester; more cesarean, preeclampsia, preterm birth. <strong>Methotrexate contraindicated</strong>.</li>
</ul>`,
        },
        '12.2': {
            key: [
                'Abortion types: <strong>threatened</strong> (bleeding, cervix closed) · <strong>inevitable</strong> (cervix dilating or ROM) · <strong>incomplete</strong> (tissue retained → misoprostol or D&amp;C) · <strong>complete</strong> (all expelled) · <strong>missed</strong> (no expulsion, closed cervix, no symptoms) · <strong>recurrent</strong> (≥ 2 consecutive).',
                '<strong>Ectopic</strong>: bleeding, pelvic pain, syncope/shock; TVUS + serial hCG; <strong>methotrexate</strong> if stable, surgery if unstable/ruptured. <strong>Molar pregnancy</strong>: bleeding, large uterus, very high hCG, hyperemesis → D&amp;C, serial hCG, <strong>no pregnancy for 1 year</strong>.',
                '<strong>Previa</strong> = <strong>painless bright red bleeding</strong>: no vaginal exams, cesarean birth. <strong>Abruption</strong> = <strong>painful</strong>, dark bleeding (may be concealed), rigid uterus without resting tone (HTN, cocaine, smoking, trauma). <strong>Accreta</strong> → cesarean + hysterectomy.',
                'Preterm labor (&lt; 37 wk): negative <strong>fetal fibronectin</strong> = unlikely to deliver in 7–10 days. Tocolytics: nifedipine, indomethacin (≤ 32 wk, 72 h), terbutaline (hold if HR &gt; 120; ≤ 48–72 h), magnesium. <strong>Betamethasone 12 mg IM × 2, 24 h apart</strong> if &lt; 34 wk.',
                'Hypertensive disorders (≥ 20 wk): GH = BP ≥ 140/90 twice. <strong>Preeclampsia</strong> adds proteinuria/organ signs: headache, visual changes, <strong>epigastric pain</strong>, edema; cure = delivery. <strong>HELLP</strong> = hemolysis, elevated liver enzymes, low platelets (RUQ pain). Eclampsia = seizures.',
                '<strong>Magnesium sulfate</strong>: 4–6 g load, then 1–4 g/h by pump. Toxicity = <strong>loss of DTRs, respiratory depression, ↓ urine output</strong> → stop the infusion, notify the provider, draw a Mg level, give <strong>calcium gluconate</strong>. Rh-negative: RhoGAM at 28 wk and within <strong>72 h after birth</strong>.',
            ],
            html: `
<p>Conditions limited to pregnancy range from mild to severe and may have lifelong effects. {{p. 554}}</p>

<h3>First trimester {{p. 554}}</h3>
<h4>Abortion (pregnancy loss before 20 weeks) {{p. 555}}</h4>
<p>Spontaneous (miscarriage) or induced. <strong>Early pregnancy loss</strong> = empty sac or no FHR before 13 weeks. Unsafe abortion is a leading preventable cause of maternal morbidity and mortality worldwide.</p>
<table>
    <thead><tr><th>Type</th><th>Definition</th><th>Symptoms / management {{Table 12.6 · p. 556}}</th></tr></thead>
    <tbody>
        <tr><td><strong>Threatened</strong></td><td>Bleeding <strong>without cervical dilation</strong> before 20 weeks</td><td>Bleeding, cramping, back pain. 25% of pregnancies bleed in the 1st tri, about half miscarry; <strong>~80% if cramping accompanies bleeding</strong></td></tr>
        <tr><td><strong>Inevitable</strong></td><td><strong>Cervix dilates or membranes rupture</strong> without passing fetus/placenta</td><td>Bleeding, cramping, back pain; medical/surgical evacuation {{p. 556}}</td></tr>
        <tr><td><strong>Incomplete</strong></td><td>Some products of conception <strong>remain</strong></td><td>Persistent bleeding, cramping, pain, <strong>infection risk</strong> → <strong>misoprostol</strong> or <strong>D&amp;C</strong></td></tr>
        <tr><td><strong>Complete</strong></td><td><strong>All</strong> products expelled</td><td>Heavy bleeding/cramping, tissue passed, pregnancy symptoms stop; no further intervention</td></tr>
        <tr><td><strong>Missed</strong></td><td>No expulsion, <strong>closed cervix</strong></td><td>Few or no symptoms; still feels pregnant; found on US (no FHR/growth) → evacuation (infection, bleeding risk)</td></tr>
        <tr><td><strong>Recurrent</strong></td><td><strong>≥ 2 consecutive</strong> spontaneous losses &lt; 20 weeks</td><td>Work-up: chromosomes, uterine US, thyroid, antiphospholipid antibodies, thrombophilia</td></tr>
        <tr><td><strong>Termination</strong></td><td>Induced, medical or surgical</td><td><strong>Mifepristone</strong> (blocks progesterone) then <strong>misoprostol</strong> (contractions, dilation); or suction D&amp;C; ± prophylactic antibiotics</td></tr>
    </tbody>
</table>
<p><strong>D&amp;C</strong> = dilating the cervix and evacuating the uterus with a curette.</p>
<div class="callout nurse"><span class="callout-title">Nursing care for all abortion types {{p. 556}}</span><p><strong>Assess</strong> bleeding, pregnancy symptoms, infection, emotional state, pain · <strong>medications</strong> (pain, infection, termination) · <strong>monitor</strong> for hemorrhage/infection · <strong>support</strong> and grief counseling · <strong>refer</strong> (fertility specialist, multidisciplinary) · <strong>educate</strong> on warning signs at home. {{p. 557}}</p></div>
<p><strong>Legal/ethical</strong>: when laws restrict abortion, the nurse respects autonomy by listening without judgment, reviewing options within the law, advocating, giving resources and referrals, and consulting the ethics committee. Practicing outside the law risks licensure. {{p. 557}}</p>

<h4>Blighted ovum, ectopic, molar pregnancy {{p. 557}}</h4>
<ul>
    <li><strong>Blighted ovum (anembryonic)</strong>: gestational sac without an embryo (usually genetic). Spotting/cramping; serial hCG and US, misoprostol or vacuum aspiration.</li>
    <li><strong>Ectopic pregnancy</strong>: implantation outside the uterus (mostly tube). Risks: <strong>previous ectopic, pelvic infection, infertility treatment, tubal surgery</strong>. Signs: vaginal bleeding, abdominal/pelvic pain, syncope, <strong>shock</strong>; may be silent until rupture. Diagnosis: <strong>transvaginal US + serial hCG</strong>. Stable with small sac → <strong>methotrexate</strong>; unstable → <strong>emergency laparoscopy</strong> (± salpingectomy). Nurse: watch for shock; prepare fluids, blood, O<sub>2</sub>. {{p. 558}}</li>
    <li><strong>Gestational trophoblastic disease</strong> (↑ risk &lt; 20 or &gt; 40 years): <strong>molar pregnancy</strong> = trophoblastic tissue grows instead of a placenta; <strong>no viable fetus</strong>. Signs: irregular bleeding, <strong>uterus large for dates</strong>, <strong>very high hCG</strong>, hyperemesis. Diagnosed by 1st-trimester US. Can become benign or malignant tumors → <strong>D&amp;C + serial quantitative hCG</strong>; <strong>avoid pregnancy up to 1 year</strong>.</li>
</ul>

<h4>Hyperemesis gravidarum {{p. 558}}</h4>
<ul>
    <li>Severe 1st-trimester N/V → <strong>electrolyte imbalance (↓ K⁺), weight loss, malnutrition, dehydration</strong>. Causes: high hCG, slow GI motility, genetics, stress; placental proteins involved. Fetal LBW, preterm birth.</li>
    <li>Diagnosis by <strong>exclusion</strong>: rule out appendicitis, cholecystitis, pancreatitis, gastroenteritis, hyperthyroidism, DKA, neurologic causes, drug withdrawal, UTI, <strong>molar pregnancy</strong>. {{p. 559}}</li>
    <li><strong>Thiamine (B1)</strong> prevents refeeding syndrome and <strong>Wernicke encephalopathy</strong>.</li>
</ul>
<table>
    <thead><tr><th>Severity</th><th>Nursing management {{p. 559}}</th></tr></thead>
    <tbody>
        <tr><td>Mild</td><td>Small frequent meals, avoid spicy food, fluids, rest</td></tr>
        <tr><td>Moderate</td><td>Ginger, acupuncture; <strong>pyridoxine (B6), doxylamine</strong>, diphenhydramine, metoclopramide, promethazine, ondansetron</td></tr>
        <tr><td>Severe</td><td><strong>Hospitalization</strong>: IV fluids and electrolytes; parenteral or enteral nutrition</td></tr>
    </tbody>
</table>

<h3>Conditions throughout pregnancy {{p. 559}}</h3>
<h4>Multiple gestation {{p. 559}}</h4>
<ul>
    <li><strong>Dizygotic</strong> (fraternal: two eggs) vs. <strong>monozygotic</strong> (identical: one egg splits). <strong>Chorion</strong> = placenta (mono = 1, di = 2); <strong>amnion</strong> = sac. Types: mono-mono, mono-di, di-di.</li>
    <li>Risk factors: family history, older age, high parity, African American, <strong>assisted reproduction</strong>.</li>
    <li>Complications: hyperemesis, anemia, GDM, hypertensive disorders, placental insufficiency, <strong>preterm labor/birth</strong>, <strong>twin-to-twin transfusion</strong> (monochorionic: shared placenta, unequal blood flow). Management: serial US (fluid, cervical length, growth), nutrition counseling, bed rest if preterm birth threatens, medications. {{p. 560}}</li>
</ul>
<h4>Intrauterine fetal demise (IUFD) {{p. 560}}</h4>
<ul>
    <li>Fetal death <strong>after 20 weeks</strong>; diagnosed by <strong>no FHR on ultrasound</strong>; often preceded by <strong>decreased/absent movement</strong>.</li>
    <li>Risks: non-Hispanic Black race, AMA, multiples, male fetus, obesity, nulliparity, smoking/alcohol, prior demise, ART, HTN, diabetes, renal/autoimmune disease, <strong>cholestasis</strong>, antiphospholipid syndrome; placental/cord problems, FGR, genetic, infection; often no cause. {{p. 561}}</li>
    <li><strong>DIC</strong> (widespread coagulopathy with tiny clots) is more likely if the demise goes <strong>undiagnosed for weeks</strong>; also follows abruption or sepsis → fluids, blood products, antibiotics, labs. Fetal resorption can occur (rare).</li>
</ul>

<h4>Infections {{p. 561}}</h4>
<p>Early infections are most harmful (organogenesis). Transmission is vertical across the placenta (TORCH, COVID-19) or during birth (GBS). Nurse: education, prevention (safe sex, vaccines), screening, treatment, support.</p>
<table>
    <thead><tr><th>Infection</th><th>Key points / complications {{Table 12.7 · p. 563}}</th></tr></thead>
    <tbody>
        <tr><td><strong>Hepatitis B</strong></td><td>Screen <strong>HBsAg</strong>; antivirals per viral load; newborn gets <strong>hep B vaccine + HBIG within 12 h</strong>. Preterm birth, cholestasis, GDM, LBW, preeclampsia, transmission</td></tr>
        <tr><td><strong>Hepatitis C</strong></td><td>Antibody screen; antivirals <strong>deferred until postpartum</strong>; breast-feeding OK unless <strong>nipples cracked/bleeding</strong>; newborn screened {{p. 561}}</td></tr>
        <tr><td><strong>Toxoplasmosis</strong></td><td>Cat feces, undercooked meat, raw vegetables. &lt; 18 wk: <strong>spiramycin</strong>. Abortion/IUFD; congenital: hearing loss, blindness, delay {{p. 562}}</td></tr>
        <tr><td><strong>Syphilis</strong></td><td>Painless <strong>chancre</strong> ± lymph nodes. VDRL/RPR → treponemal test (FTA-ABS); <strong>penicillin</strong>. IUFD, preterm, neonatal death, congenital syphilis</td></tr>
        <tr><td><strong>Rubella</strong></td><td>Respiratory droplets; worst in the <strong>1st trimester</strong>. Congenital rubella: <strong>heart defects, cataracts, deafness, CNS</strong>, FGR. No treatment: <strong>vaccinate before pregnancy</strong></td></tr>
        <tr><td><strong>CMV</strong></td><td>Body fluids; high risk: <strong>childcare workers, teachers, nurses</strong>, immunosuppressed. Congenital: <strong>hearing loss</strong>, thrombocytopenia, FGR, ventriculomegaly, chorioretinitis. No routine screen; prevention = <strong>hand hygiene</strong></td></tr>
        <tr><td><strong>Herpes (HSV)</strong></td><td>Vesicular lesions. Neonatal: SEM (skin/eye/mouth), CNS, disseminated (death). <strong>Acyclovir suppression from 36 weeks</strong>; <strong>active genital lesions at labor/ROM → cesarean</strong> {{p. 563}}</td></tr>
        <tr><td><strong>Varicella</strong></td><td>Airborne, highly contagious; IUFD; congenital: <strong>skin scarring</strong>, eye/limb/neuro defects. Highest newborn risk if maternal rash <strong>5 days before to 2 days after birth</strong></td></tr>
        <tr><td><strong>GBS</strong></td><td>Normal vaginal/rectal flora; neonatal <strong>meningitis, pneumonia, sepsis</strong>. Screen 36–38 wk; <strong>IV penicillin in labor</strong>. Neonatal risk ↑ with prolonged ROM, LBW, previous GBS, preterm labor, chorioamnionitis {{p. 564}}</td></tr>
    </tbody>
</table>

<h3>Second trimester {{p. 564}}</h3>
<ul>
    <li><strong>Abortion</strong> (14–27 weeks): placental problems (previa, abruption), infection (prolonged ROM, chorioamnionitis), fetal anomalies, maternal disease. Bleeding, cramping, ↓ fetal movement or infection signs → evaluate now.</li>
    <li><strong>Cervical insufficiency</strong> (incompetent/short cervix): <strong>painless dilation</strong> → loss in the 2nd trimester; may have low back pain, pelvic pressure, bleeding/discharge. Risk: prior cervical surgery or losses. <strong>Cerclage</strong> (purse-string suture around the cervix) removed near term.</li>
    <li><strong>Rh isoimmunization</strong>: Rh-negative person exposed to Rh-positive fetal blood forms antibodies. First pregnancy → <strong>IgM (don’t cross)</strong>; next Rh-positive pregnancy → antibodies cross → fetal <strong>hemolysis</strong>, hemolytic disease of the newborn, <strong>hydrops fetalis</strong>, death. Prevent with <strong>RhoGAM</strong> after abortion, invasive procedures, trauma, termination, <strong>at 28 weeks</strong>, and <strong>within 72 h after birth</strong>. RhoGAM makes the antibody screen falsely positive for 12 weeks. {{p. 565}}</li>
</ul>

<h3>Second and third trimesters {{p. 565}}</h3>
<h4>Amniotic fluid {{p. 565}}</h4>
<ul>
    <li><strong>Oligohydramnios</strong> (low fluid): fluid is mostly fetal urine, so <strong>renal/urinary anomalies</strong>, placental dysfunction, FGR, ROM. Monitor fluid and fetus; hydrate the patient (IV/oral); induction/delivery if nonreassuring.</li>
    <li><strong>Polyhydramnios</strong> (excess fluid): maternal <strong>diabetes</strong>, anemia, autoimmune disease; fetal <strong>swallowing problems (TE fistula)</strong>; multiples. Complications: <strong>preterm birth</strong>, abruption, PROM, <strong>cord prolapse</strong>, malpresentation. Severe → <strong>amnioreduction</strong>; afterward watch for <strong>abruption</strong>.</li>
</ul>

<h4>Placental problems {{p. 565}}</h4>
<table>
    <thead><tr><th></th><th>Placenta previa</th><th>Placental abruption {{Table 12.8 · p. 567}}</th></tr></thead>
    <tbody>
        <tr><td>What</td><td>Placenta low, near or <strong>covering the internal os</strong> (low-lying vs. complete previa)</td><td>Placenta <strong>separates</strong> from the uterine wall (partial → complete)</td></tr>
        <tr><td>Risk factors</td><td>Previous previa, multiples, multiparity, <strong>prior uterine surgery/cesarean</strong>, uterine anomalies, AMA, ART, smoking</td><td><strong>Hypertension, smoking, cocaine, abdominal trauma</strong></td></tr>
        <tr><td>Bleeding</td><td><strong>Bright red, painless</strong> (± cramping)</td><td><strong>Dark red, painful</strong> (or concealed), severe sudden abdominal/back pain</td></tr>
        <tr><td>Uterus</td><td>Soft</td><td>Prolonged contractions, <strong>no resting tone</strong> (rigid); FHR changes; maternal and fetal distress</td></tr>
        <tr><td>Management</td><td>Diagnosed by 2nd-tri US. <strong>No vaginal exams</strong>; <strong>cesarean</strong>; activity restriction, bed/pelvic rest; teach to report bleeding; hysterectomy if hemorrhage</td><td>Close fetal monitoring, delivery by severity; hemodynamic monitoring (pulse, BP, <strong>urine output</strong>); fluids and blood</td></tr>
    </tbody>
</table>
<ul>
    <li><strong>Placenta accreta</strong>: placenta grows <strong>into/through the uterine wall</strong>, possibly into nearby organs. Risks: <strong>previous cesarean</strong>, accreta, uterine surgery. US/MRI or found in the 3rd stage. <strong>Cesarean + usually hysterectomy</strong>; blood available, <strong>multiple IV lines</strong>, multidisciplinary team. {{p. 567}}</li>
</ul>

<h4>Preterm labor (&lt; 37 weeks) {{p. 567}}</h4>
<ul>
    <li>Diagnose with history, assessment, contraction monitoring, <strong>fetal fibronectin</strong> (protein between the decidua and sac; <strong>negative = strong prediction of no delivery in 7–10 days</strong>), transvaginal cervical length (&lt; 25 mm suggests preterm labor, weak tool). Nurse watches for contractions increasing in frequency/intensity with cervical change. {{p. 568}}</li>
    <li>Risks: <strong>previous preterm birth</strong>, infection, cervical abnormalities, chronic disease, multiples, substance use, smoking, poor diet, stress, poor access.</li>
    <li>Goal: prolong pregnancy for fetal maturity, long enough for steroids to work. <strong>Magnesium</strong> also for fetal <strong>neuroprotection</strong>; antibiotics if infection suspected.</li>
</ul>
<div class="callout memo"><span class="callout-title">Pharmacology: preterm labor {{p. 568}}</span>
<table>
    <thead><tr><th>Drug</th><th>Key points</th></tr></thead>
    <tbody>
        <tr><td><strong>Terbutaline</strong> (beta-2 agonist)</td><td>Restlessness, tremor, <strong>tachycardia</strong>, hypokalemia, hyperglycemia, chest pain, pulmonary edema, neonatal hypoglycemia. <strong>Hold if maternal pulse &gt; 120</strong>. Boxed warning: &gt; 48–72 h → cardiac problems/death</td></tr>
        <tr><td><strong>Magnesium sulfate</strong></td><td>4–6 g IV over 20–30 min, then 1–4 g/h. Flushing, sweating, blurred vision, weakness, <strong>respiratory depression, cardiac arrest</strong>. Contraindicated: renal dysfunction, myasthenia gravis, cardiac disease</td></tr>
        <tr><td><strong>Nifedipine</strong> (calcium channel blocker)</td><td>10–20 mg every 4–6 h up to 48 h. Flushing, headache, dizziness, palpitations, <strong>hypotension</strong> {{p. 569}}</td></tr>
        <tr><td><strong>Indomethacin</strong> (NSAID)</td><td>50–100 mg load, 25 mg every 4–6 h for <strong>only 72 h</strong>; <strong>not after 32 weeks</strong>. Oligohydramnios, renal dysfunction; neonatal PDA, IVH, lung disease</td></tr>
        <tr><td><strong>Betamethasone / dexamethasone</strong></td><td>Before 34 weeks: <strong>betamethasone 12 mg IM × 2, 24 h apart</strong> or dexamethasone 6 mg IM × 4, 12 h apart. Stimulates surfactant → ↓ RDS; best 2–7 days before birth (≥ 24 h). Maternal hyperglycemia</td></tr>
    </tbody>
</table></div>

<h4>PPROM {{p. 569}}</h4>
<ul>
    <li>Membranes rupture <strong>before 37 weeks</strong>. Risks: infection, multiples, previous preterm birth. Main sign: <strong>leaking fluid</strong>. Complications: <strong>infection, oligohydramnios, cord prolapse, preterm labor</strong>. Unstable → induction/cesarean; very early → inpatient expectant care. {{p. 570}}</li>
    <li><strong>AmniSure</strong>: sterile swab in vaginal fluid, into the solvent vial ≥ 1 min; positive confirms ROM.</li>
    <li>Prevent infection: <strong>handwashing</strong>, perineal hygiene, frequent pad changes, <strong>monitor temperature</strong>, uterine irritability/pain, FHR.</li>
</ul>

<h4>Gestational diabetes {{p. 570}}</h4>
<ul>
    <li>Hyperglycemia in the 2nd/3rd trimester from hormone-driven insulin resistance with insufficient insulin. High-risk patients: GCT in the 1st trimester; others at <strong>24–28 weeks</strong>; abnormal → 3-h GTT. {{p. 571}}</li>
    <li>Management: diet and lifestyle, frequent glucose checks, insulin. <strong>Insulin is preferred</strong> (does not cross the placenta). <strong>Metformin</strong> only if insulin refused/impossible (crosses placenta; GI upset; lactic acidosis boxed warning; take with meals). <strong>Glyburide not recommended</strong>. {{p. 572}}</li>
</ul>

<h4>Hypertensive disorders of pregnancy {{p. 572}}</h4>
<table>
    <thead><tr><th>Disorder</th><th>Key features</th></tr></thead>
    <tbody>
        <tr><td><strong>Gestational hypertension</strong></td><td>After <strong>20 weeks</strong>: SBP &gt; 140 or DBP &gt; 90 on <strong>more than one occasion</strong>. Risks: obesity, nulliparity, prior preeclampsia, diabetes, renal disease, multiples. Antihypertensives; severe → admit; delivery ≤ 37 weeks by status</td></tr>
        <tr><td><strong>Preeclampsia</strong></td><td>Multisystem disorder from <strong>20 weeks to 6 weeks postpartum</strong>. Vascular/endothelial damage → ↑ permeability (<strong>edema</strong>) and glomerular damage (<strong>proteinuria</strong>). Signs: <strong>HTN, proteinuria, edema, headache, visual changes, epigastric pain, N/V</strong>. Risks: nulliparity, age extremes, obesity, multiples, kidney disease, chronic HTN, diabetes, history {{p. 574}}</td></tr>
        <tr><td><strong>HELLP syndrome</strong></td><td><strong>H</strong>emolysis (fatigue, bruising), <strong>E</strong>levated <strong>L</strong>iver enzymes (<strong>RUQ pain</strong>, N/V, edema), <strong>L</strong>ow <strong>P</strong>latelets (petechiae, bleeding). May lack HTN/proteinuria. Delivery if &gt; 34 weeks; supportive care; prepare for preterm birth and NICU {{p. 573}}</td></tr>
        <tr><td><strong>Eclampsia</strong></td><td>Preeclampsia + <strong>seizures</strong> (pregnancy or postpartum): pulmonary edema, renal failure, hemorrhage, abruption, cardiac arrest. Magnesium; emergency cesarean {{p. 575}}</td></tr>
        <tr><td><strong>Superimposed preeclampsia</strong></td><td>Chronic HTN with rising BP after 20 weeks; hard to distinguish</td></tr>
    </tbody>
</table>
<ul>
    <li><strong>Prevention</strong>: <strong>low-dose aspirin</strong> from early 2nd trimester for at-risk patients. <strong>The only cure is delivery</strong>; meanwhile antihypertensives; severe features → hospitalize + <strong>magnesium sulfate to prevent seizures</strong>. {{p. 574}}</li>
    <li>Monitoring: VS, LOC, <strong>reflexes</strong> (hyperreflexia and <strong>clonus</strong> = seizure risk), magnesium toxicity, continuous EFM, Mg level, liver and renal tests.</li>
</ul>
<div class="callout memo"><span class="callout-title">Antihypertensives in pregnancy {{p. 572}}</span><p><strong>Labetalol</strong> (alpha/beta blocker; 100 mg BID; avoid in <strong>asthma</strong>, COPD, heart block, bradycardia) · <strong>Nifedipine</strong> (calcium channel blocker; headache, flushing, edema, hypotension) · <strong>Hydralazine</strong> (vasodilator; 10–20 mg PO every 4–6 h or IV; tachycardia, palpitations, lupus-like syndrome) · <strong>Magnesium sulfate</strong> (↓ neuromuscular transmission; seizure prevention). {{p. 573}}</p></div>
<div class="callout warn"><span class="callout-title">Magnesium sulfate safety {{p. 574}}</span><p>Infusion pump with limits; five rights; Mg levels per protocol. <strong>Toxicity</strong>: muscle weakness and <strong>decreased/absent DTRs</strong>, N/V/diarrhea, arrhythmia, hypotension, confusion, flushing, <strong>respiratory depression</strong>, ↓ urine output. Action: <strong>stop the infusion</strong>, notify the provider, draw a <strong>Mg level</strong>, give <strong>calcium gluconate</strong> (antidote at bedside), support breathing, call rapid response. Teach: flushing, feeling hot, drowsiness, weakness are expected side effects. {{p. 575}}</p></div>
<div class="callout nurse"><span class="callout-title">Eclamptic seizure care {{p. 575}}</span><p>Sudden tonic-clonic seizure (~60–70 s) then postictal state. <strong>Prevent injury</strong>: clear the bed, loosen tight clothing, raise and pad side rails, <strong>stay with the patient</strong>. <strong>Airway</strong>: lower HOB &lt; 30°, <strong>turn to the side</strong>.</p></div>
<ul>
    <li><strong>Renal/cardiac</strong>: CKD → preeclampsia, preterm birth, worsening function; antihypertensives, nephrology, monitor proteinuria, <strong>low-dose aspirin + calcium</strong>. Cardiac: cardiology, minimize myocardial demand. {{p. 575}}</li>
</ul>

<h4>Bleeding disorders {{p. 576}}</h4>
<p>Watch for prolonged bleeding, bruising, <strong>petechiae</strong>, nosebleeds; pallor, tachycardia, hypotension = major loss. <strong>ITP</strong> (platelet destruction; transfusion, IVIG, steroids) · <strong>DIC</strong> (after severe preeclampsia, infection, abruption; microclots → hemorrhage and organ damage) · <strong>antiphospholipid syndrome</strong> (autoimmune ↑ clotting → anticoagulation).</p>

<h3>Third trimester {{p. 576}}</h3>
<ul>
    <li><strong>Gallbladder disease</strong> (estrogen/progesterone → gallstones): biliary colic, cholestasis, cholecystitis, choledocholithiasis; <strong>RUQ pain</strong>; diet, medications, surgery if severe.</li>
    <li><strong>Liver disease</strong>: cholestasis, HELLP, cirrhosis, <strong>acute fatty liver of pregnancy (AFLP)</strong>: fat buildup → liver failure; supportive care + <strong>induction</strong>.</li>
    <li><strong>Postdated (postterm) pregnancy</strong>: past <strong>42 weeks</strong> → placental insufficiency, <strong>oligohydramnios</strong>, hypoxia, <strong>macrosomia</strong>, <strong>meconium aspiration</strong>, IUFD, shoulder dystocia → induction or cesarean at 42 weeks; surveillance with <strong>NST and BPP</strong> (nonreactive NST may mean hypoxemia). {{p. 576}}</li>
    <li><strong>Trauma</strong> (falls, MVAs, penetrating, emotional, IPV): stabilize the patient first, US for the fetus, fetal monitoring, collaborate with ED/ICU/surgery. {{p. 577}}</li>
    <li><strong>IPV increases in pregnancy</strong>: watch for injuries, distress, delays in seeking care; safe, nonjudgmental setting; <strong>safety plan</strong>; document injuries; community resources (safe house); social work, psychology.</li>
</ul>`,
        },
    },
    terms: [
        ['adolescent pregnancy', 'pregnancy in a person between 10 and 19 years of age'],
        ['anemia', 'red blood cells or hemoglobin too low to supply enough oxygen to the tissues'],
        ['blighted ovum', 'anembryonic pregnancy: a fertilized egg implants but no embryo forms'],
        ['cerclage', 'sutures placed around the cervix to prevent it from dilating'],
        ['cervical insufficiency', 'painless cervical dilation, often preventing carrying the fetus beyond the second trimester'],
        ['chronic hypertension', 'high blood pressure present before pregnancy or before 20 weeks’ gestation'],
        ['complete abortion', 'all products of conception expelled from the uterus'],
        ['cystic fibrosis', 'CFTR gene mutation causing thick mucus in the lungs, pancreas, and intestines'],
        ['dilation and curettage (D&C)', 'dilating the cervix and evacuating uterine tissue and lining with a curette'],
        ['disseminated intravascular coagulation (DIC)', 'widespread coagulopathy with tiny clots throughout the body'],
        ['eclampsia', 'preeclampsia that progresses to seizure activity'],
        ['ectopic pregnancy', 'fertilized egg implanted outside the uterus'],
        ['fetal resorption', 'fetal tissues broken down and absorbed by the pregnant person’s body'],
        ['gestational trophoblastic disease', 'rare tumors from abnormal growth of placental trophoblastic tissue'],
        ['HELLP syndrome', 'Hemolysis, Elevated Liver enzymes, Low Platelets: liver complication related to preeclampsia'],
        ['high-risk pregnancy', 'pregnancy with an increased likelihood of maternal and fetal complications'],
        ['hyperemesis gravidarum', 'severe first-trimester nausea and vomiting causing electrolyte imbalance, weight loss, malnutrition, dehydration'],
        ['hyperthyroidism', 'high free T4 with low TSH: heat intolerance, weight loss, palpitations, tachycardia'],
        ['hypothyroidism', 'high TSH with low free T4: fatigue, weight gain, cold intolerance, constipation'],
        ['immune thrombocytopenia (ITP)', 'autoimmune disorder in which platelets are destroyed'],
        ['incomplete abortion', 'some products of conception remain in the uterus after the pregnancy ends'],
        ['inevitable pregnancy loss', 'cervix dilates or membranes rupture without delivery of fetus or placenta before 20 weeks'],
        ['intrauterine fetal demise', 'death of the fetus (after 20 weeks per ACOG)'],
        ['missed abortion', 'nonviable pregnancy not expelled, cervix closed, few or no symptoms'],
        ['multiple gestation', 'pregnancy with more than one fetus'],
        ['oligohydramnios', 'abnormally low volume of amniotic fluid'],
        ['overnutrition', 'nutritional imbalance from excessive food intake'],
        ['placenta accreta', 'placenta grows into or through the uterine wall, possibly into nearby organs'],
        ['placenta previa', 'placenta located near or covering the internal cervical os'],
        ['placental abruption', 'placenta separates from the uterine lining'],
        ['polyhydramnios', 'abnormally high volume of amniotic fluid'],
        ['preeclampsia', 'multisystem disorder after 20 weeks that can damage vital organs and cause seizures'],
        ['preexisting medical condition', 'medical condition present before conception'],
        ['preterm labor', 'onset of labor before 37 weeks’ gestation'],
        ['preterm premature rupture of membranes (PPROM)', 'membranes rupture before 37 weeks with concern for imminent delivery'],
        ['recurrent abortion', 'two or more consecutive spontaneous abortions before 20 weeks'],
        ['rheumatoid arthritis (RA)', 'systemic autoimmune disease characterized mainly by joint inflammation'],
        ['systemic lupus erythematosus (SLE)', 'autoimmune disorder attacking healthy tissue in multiple organ systems'],
        ['threatened abortion', 'bleeding without cervical dilation before 20 weeks'],
        ['tuberculosis (TB)', 'Mycobacterium tuberculosis infection, mainly of the lungs: cough, hemoptysis, night sweats'],
        ['type 1 diabetes', 'insulin shortage from autoimmune destruction of pancreatic beta cells'],
        ['type 2 diabetes', 'insufficient insulin secretion with insulin resistance'],
        ['undernutrition', 'inadequate intake of food and necessary nutrients'],
    ],
    cards: [
        { f: 'Overnutrition vs. undernutrition', b: 'Overnutrition: excess intake/obesity → preeclampsia, GDM, sleep apnea, stillbirth, cesarean, NTDs, heart defects.\nUndernutrition: inadequate food/nutrients → fetal brain defects, psychiatric disorders, vision/motor defects, altered cognition.', ref: '12.1' },
        { f: 'How does the nurse support a patient with preexisting conditions?', b: 'Preconception counseling, review teratogenic meds, contraception until optimized, explain the role of each specialist, encourage adherence to meds/tests/visits, coordinate care and social services, support stress of high-risk pregnancy.', ref: '12.1' },
        { f: 'How does homelessness make a pregnancy high risk?', b: 'Limited prenatal care, unsafe living conditions, environmental hazards, stress, poor food access, substance use, mental illness, violence → preterm birth, LBW, ↑ morbidity/mortality. Refer to social services and WIC.', ref: '12.1' },
        { f: 'Risks of advanced maternal age (≥ 35)', b: 'Ectopic, multiples, GDM, hypertensive disorders, cesarean, PPH; fetal miscarriage, chromosomal abnormalities, anomalies, prematurity, FGR, stillbirth. Consider low-dose aspirin, US surveillance.', ref: '12.1' },
        { f: 'Substance use screening tools', b: '4P’s (Parents, Partners, Past, Pregnancy), NIDA Quick Screen, CRAFFT. Use on all patients to reduce stereotyping.', ref: '12.1' },
        { f: 'Chronic hypertension: definition and drugs', b: 'HTN before pregnancy or < 20 weeks (or persisting after birth). Target < 140/90 with nifedipine or labetalol; ACE inhibitors/ARBs contraindicated; low-dose aspirin 12–28 wk until delivery.', ref: '12.1' },
        { f: 'Insulin needs across pregnancy with preexisting diabetes', b: '1st trimester: ↑ sensitivity → hypoglycemia, lower doses. After ~16 weeks: ↑ resistance (placental hormones) → higher doses, rising fastest in the 3rd trimester. Oral agents switched to insulin.', ref: '12.1' },
        { f: 'Signs of DKA', b: 'Dry mouth, polydipsia, polyuria, N/V, abdominal pain, altered LOC, weakness, deep/rapid breathing, fruity breath, tachycardia, dehydration, ketonuria. Obstetric emergency.', ref: '12.1' },
        { f: 'Hypo- vs. hyperthyroidism in pregnancy', b: 'Hypo: TSH high, T4 low; Hashimoto; increase levothyroxine after conception.\nHyper: T4 high, TSH low; Graves; switch methimazole → PTU in 1st trimester; monitor fetus/newborn.', ref: '12.1' },
        { f: 'SLE in pregnancy: key antibody risk', b: 'Anti-Ro (SSA) and anti-La (SSB) cross the placenta → neonatal heart block/lupus. Antiphospholipid antibodies → thrombosis (anticoagulation). Ideally quiescent 6 months before conception.', ref: '12.1' },
        { f: 'Explain hyperemesis gravidarum', b: 'Severe 1st-trimester N/V causing electrolyte imbalance (↓ K+), weight loss, malnutrition, dehydration; linked to high hCG. Diagnosis by exclusion (incl. molar pregnancy). Treat with fluids, electrolytes, antiemetics, thiamine; severe → hospitalize, nutrition support.', ref: '12.2' },
        { f: 'Types of abortion', b: 'Threatened: bleeding, cervix closed.\nInevitable: cervix dilating/ROM.\nIncomplete: tissue retained.\nComplete: all expelled.\nMissed: dead, retained, cervix closed.\nRecurrent: ≥ 2 consecutive.', ref: '12.2' },
        { f: 'Ectopic pregnancy: signs and management', b: 'Bleeding, abdominal/pelvic pain, syncope, shock (may be silent until rupture). TVUS + serial hCG. Stable → methotrexate; unstable/ruptured → emergency surgery; watch for shock, prepare fluids/blood/O2.', ref: '12.2' },
        { f: 'Molar pregnancy: signs and follow-up', b: 'Irregular bleeding, uterus large for dates, very high hCG, hyperemesis, no viable fetus. D&C, then serial quantitative hCG; avoid pregnancy up to 1 year (malignancy risk).', ref: '12.2' },
        { f: 'Placenta previa vs. abruption', b: 'Previa: painless bright red bleeding, soft uterus; no vaginal exams; cesarean.\nAbruption: painful dark (or concealed) bleeding, rigid uterus without resting tone, fetal distress; HTN/cocaine/trauma.', ref: '12.2' },
        { f: 'Potential complications of PPROM', b: 'Infection (chorioamnionitis), oligohydramnios, cord prolapse, preterm labor and birth. Nursing: hand hygiene, perineal care, temp, uterine tenderness, FHR.', ref: '12.2' },
        { f: 'Tocolytics and their key cautions', b: 'Terbutaline: hold if HR > 120; ≤ 48–72 h.\nNifedipine: hypotension.\nIndomethacin: ≤ 32 wk, 72 h max (oligohydramnios, PDA).\nMagnesium: toxicity (DTRs, respirations).', ref: '12.2' },
        { f: 'Antenatal corticosteroids', b: 'Given before 34 weeks when preterm birth is expected: betamethasone 12 mg IM × 2 doses 24 h apart (or dexamethasone 6 mg IM × 4, 12 h apart). Promote surfactant, ↓ RDS. Maternal hyperglycemia.', ref: '12.2' },
        { f: 'Signs of preeclampsia', b: 'BP ≥ 140/90 after 20 weeks, proteinuria, edema (face/hands), severe headache, visual changes, epigastric/RUQ pain, N/V; hyperreflexia and clonus = seizure risk.', ref: '12.2' },
        { f: 'HELLP syndrome', b: 'Hemolysis (fatigue, bruising), Elevated Liver enzymes (RUQ pain, N/V), Low Platelets (petechiae, bleeding). May occur without HTN/proteinuria. Delivery if > 34 wk.', ref: '12.2' },
        { f: 'Magnesium toxicity: signs and actions', b: 'Loss of DTRs, respiratory depression, ↓ urine output, hypotension, arrhythmia, confusion. Stop the infusion, notify the provider, draw a Mg level, give calcium gluconate, support airway.', ref: '12.2' },
        { f: 'Eclamptic seizure nursing actions', b: 'Stay with the patient, clear the bed, loosen clothing, pad and raise rails; lower HOB < 30° and turn to side for airway; magnesium as ordered.', ref: '12.2' },
        { f: 'GDM drug therapy', b: 'Insulin preferred (does not cross placenta). Metformin only if insulin refused/impossible (crosses placenta). Glyburide not recommended.', ref: '12.2' },
        { f: 'Rh isoimmunization mechanism and prevention', b: 'Rh-negative parent exposed to Rh-positive fetal blood forms antibodies; next pregnancy IgG crosses → fetal hemolysis, hydrops. RhoGAM at 28 wk, after any bleeding/procedure/abortion, and within 72 h of birth.', ref: '12.2' },
        { f: 'Herpes in pregnancy', b: 'Acyclovir suppression from 36 weeks for history/primary outbreak. Active genital lesions at labor or ROM → cesarean.', ref: '12.2' },
        { f: 'Polyhydramnios vs. oligohydramnios causes', b: 'Poly: maternal diabetes, fetal swallowing defects (TE fistula), multiples → preterm birth, cord prolapse, abruption.\nOligo: fetal renal anomalies, placental insufficiency, FGR, ROM, postterm.', ref: '12.2' },
        { f: 'Risks of postterm pregnancy (> 42 weeks)', b: 'Placental insufficiency, oligohydramnios, fetal hypoxia, macrosomia, meconium aspiration, IUFD, shoulder dystocia. Surveillance with NST/BPP; induction or cesarean at 42 weeks.', ref: '12.2' },
    ],
    quiz: [
        { src: 'book', ref: '12.1', q: 'A pregnant person at which age is at increased risk during pregnancy? Select all that apply.', o: ['18 years old', '20 years old', '30 years old', '35 years old', '40 years old'], a: [0, 3, 4], why: 'Risk increases under 20 and at 35 or older (advanced maternal age).' },
        { src: 'book', ref: '12.1', q: 'What is not a complication associated with chronic hypertension during pregnancy?', o: ['preeclampsia', 'gestational diabetes', 'fetal growth restriction', 'polyhydramnios'], a: 3, why: 'Chronic HTN raises risk of FGR, stillbirth, preterm birth, cesarean, PPH, GDM and preeclampsia. Polyhydramnios is linked to diabetes, not HTN.' },
        { src: 'book', ref: '12.1', q: 'What medication is not recommended for hypertension during pregnancy due to teratogenic effects?', o: ['lisinopril', 'nifedipine', 'labetalol', 'hydralazine'], a: 0, why: 'Lisinopril is an ACE inhibitor; ACE inhibitors and ARBs are teratogenic. Nifedipine and labetalol are first line.' },
        { src: 'book', ref: '12.1', q: 'What adverse fetal effect is associated with undernutrition?', o: ['hyperglycemia', 'impaired bone development', 'cardiovascular disorders', 'psychiatric disorders'], a: 3, why: 'Undernutrition can cause fetal brain defects, psychiatric disorders, vision and motor defects and altered cognition.' },
        { src: 'book', ref: '12.1', q: 'What should nurses do to support migrant farm workers receiving prenatal care?', o: ['Offer medication to prevent preterm labor.', 'Reinforce that heavy lifting is safe during pregnancy.', 'Evaluate occupational hazards and provide education.', 'Refer all patients for mental health resources.'], a: 2, why: 'Farm work exposes patients to heat, heavy lifting and chemicals; evaluate hazards at the initial assessment and educate (with an interpreter).' },
        { src: 'book', ref: '12.1', q: 'Pregnancy during adolescence is linked with what influencing factor or factors? Select all that apply.', o: ['low socioeconomic status', 'psychologic problems', 'social problems', 'unemployment', 'poverty'], a: [0, 1, 2, 3, 4], why: 'Adolescent pregnancy is linked to poverty (low socioeconomic status), unemployment, and social and psychologic problems.' },
        { src: 'book', ref: '12.2', q: 'A patient at 36 weeks reports right upper quadrant pain that penetrates to the upper back. What priority information does the nurse obtain? Select 3 that apply.', o: ['onset and characteristics of the pain', 'any nausea or vomiting', 'any vaginal discharge', 'content of last meal', 'last time patient felt the baby move', 'patient’s blood type', 'any headache'], a: [0, 1, 6], why: 'RUQ/epigastric pain at 36 weeks must be screened for preeclampsia/HELLP (pain, N/V, headache) as well as gallbladder disease. Pain characteristics, N/V and headache distinguish the life-threatening causes. (Last meal and fetal movement are also reasonable; answers may vary.)' },
        { src: 'book', ref: '12.2', q: 'A patient at 25 weeks has just been diagnosed with gestational diabetes. What is the most important education at this time?', o: ['induction of labor', 'nutrition', 'potential fetal complications', 'potential maternal complications'], a: 1, why: 'Glucose control begins with dietary modification (with glucose monitoring and exercise); nutrition is the immediate priority.' },
        { src: 'book', ref: '12.2', q: 'A pregnant person is admitted with preeclampsia. Identify the data most often associated with this condition.', o: ['dependent edema', 'BP 152/99', 'fatigue', 'nausea, vomiting, and weight loss'], a: 1, why: 'Hypertension (≥ 140/90 after 20 weeks) is the defining feature. Dependent edema is common in normal pregnancy.' },
        { src: 'book', ref: '12.2', q: 'A patient at 32 weeks with polyhydramnios asks if it can affect the baby. What is the nurse’s response?', o: ['No, polyhydramnios commonly occurs toward the end of pregnancy.', 'No, polyhydramnios is a sign that the lungs are maturing.', 'Yes, polyhydramnios increases the risk of a preterm delivery.', 'Yes, polyhydramnios causes umbilical cord compression.'], a: 2, why: 'Polyhydramnios increases risks of preterm birth, PROM, abruption, cord prolapse and malpresentation. Cord compression is associated with oligohydramnios.' },
        { src: 'book', ref: '12.2', q: 'A patient at 10 weeks has vaginal bleeding and cramping, and the cervix is open. What will the provider likely tell the patient they are experiencing?', o: ['complete abortion', 'incomplete abortion', 'inevitable abortion', 'spontaneous abortion'], a: 2, why: 'Inevitable pregnancy loss = cervical dilation (or ROM) without passage of the fetus/placenta, with bleeding and cramping.' },
        { src: 'book', ref: '12.2', q: 'A patient delivered a stillborn infant at 22 weeks. What data in the health history are associated with this complication?', o: ['motor vehicle accident 1 year ago', 'hypertension times 4 years', 'appendectomy 2 years ago', 'nausea every day for the past 16 weeks'], a: 1, why: 'Chronic hypertension is a risk factor for fetal demise (uteroplacental insufficiency, abruption, FGR).' },
        { src: 'book', ref: '12.2', q: 'Which TORCH infection is spread through respiratory droplets and causes congenital heart defects, cataracts, deafness, and CNS abnormalities?', o: ['toxoplasmosis', 'syphilis', 'rubella', 'cytomegalovirus', 'herpes simplex'], a: 2, why: 'Rubella (German measles) spreads by droplets and causes congenital rubella syndrome.' },
        { src: 'book', ref: '12.2', q: 'What virus is highly contagious, spread through airborne particles, and can cause IUFD, skin scarring, eye, limb or neurologic abnormalities, anemia, thrombocytopenia, and LBW?', o: ['toxoplasmosis', 'syphilis', 'rubella', 'cytomegalovirus', 'varicella'], a: 4, why: 'Varicella (chickenpox); skin scarring is characteristic of congenital varicella.' },
        { src: 'book', ref: '12.2', q: 'What is the difference between a complete abortion and an incomplete abortion?', o: ['In a complete abortion, the uterus is empty, while in an incomplete abortion, some products of conception are still present.', 'In a complete abortion, the cervix dilates, while in an incomplete abortion, the cervix remains closed.', 'In a complete abortion, the patient has minimal symptoms, while in an incomplete abortion, there is persistent bleeding.', 'In a complete abortion, the fetus is delivered vaginally, while in an incomplete abortion, it is removed surgically.'], a: 0, why: 'Complete = all products of conception expelled; incomplete = some remain (bleeding, infection risk).' },
        { src: 'book', ref: '12.2', q: 'What term describes a spontaneous abortion with no expulsion of the products of conception and a closed cervix?', o: ['incomplete abortion', 'threatened abortion', 'missed abortion', 'recurrent abortion'], a: 2, why: 'Missed abortion: nonviable pregnancy retained with a closed cervix; often found on ultrasound.' },
        { src: 'book', ref: '12.2', q: 'When providing care for a patient with placenta previa, what nursing action is essential?', o: ['administering oxytocin to induce labor', 'assisting with a vaginal delivery', 'assessing for signs of vaginal bleeding', 'performing a vaginal exam'], a: 2, why: 'Monitor for bleeding; vaginal exams and vaginal birth are contraindicated; birth is by cesarean.' },
        { src: 'book', ref: '12.2', q: 'What is a common sign or symptom of preeclampsia during pregnancy?', o: ['abdominal cramps', 'severe headache', 'increased appetite', 'elevated heart rate', 'low blood pressure'], a: 1, why: 'Severe headache (with visual changes, epigastric pain, edema, high BP) signals preeclampsia.' },

        { ref: '12.1', q: 'A patient with type 1 diabetes at 9 weeks asks why she keeps having low blood sugars. The nurse explains:', o: ['Insulin resistance is highest in early pregnancy', 'Insulin sensitivity increases in the 1st trimester and nausea/vomiting reduce intake', 'The fetus produces insulin', 'She must be taking the wrong insulin'], a: 1, why: 'Early pregnancy increases insulin sensitivity; N/V lowers intake → hypoglycemia. Resistance rises after 16 weeks.' },
        { ref: '12.1', q: 'A patient with Graves disease taking methimazole plans pregnancy. What change is expected?', o: ['Stop all thyroid medication', 'Switch to propylthiouracil (PTU)', 'Start levothyroxine', 'Double the methimazole dose'], a: 1, why: 'Methimazole is teratogenic; PTU is used before conception and in the 1st trimester.' },
        { ref: '12.1', q: 'A pregnant patient with sickle cell disease asks how to prevent crises. Best advice?', o: ['Limit fluids', 'Stay well hydrated and avoid overexertion', 'Take hydroxyurea', 'Increase iron supplements'], a: 1, why: 'Hydration and avoiding overexertion reduce crises; hydroxyurea is teratogenic and is stopped before pregnancy.' },
        { ref: '12.1', q: 'Which TB medications are considered safe in pregnancy? Select all that apply.', o: ['Isoniazid', 'Rifampin', 'Ethambutol', 'Methotrexate'], a: [0, 1, 2], why: 'Isoniazid, rifampin and ethambutol have an excellent safety record; monitor liver function.' },
        { ref: '12.1', q: 'A pregnant patient using heroin asks what will help. The nurse anticipates:', o: ['Abrupt cessation', 'Methadone or buprenorphine with a treatment program', 'Benzodiazepines', 'No treatment until after birth'], a: 1, why: 'Opioid agonist therapy minimizes withdrawal and relapse; the newborn is monitored for NAS.' },
        { ref: '12.2', q: 'A patient at 7 weeks has unilateral pelvic pain, spotting, dizziness, BP 86/50 and HR 124. Priority?', o: ['Schedule outpatient methotrexate', 'Prepare for emergency surgery: IV access, fluids, blood', 'Reassure and repeat hCG in 48 hours', 'Encourage bed rest at home'], a: 1, why: 'Signs of shock suggest ruptured ectopic pregnancy; methotrexate is only for hemodynamically stable patients.' },
        { ref: '12.2', q: 'Which findings suggest a molar pregnancy? Select all that apply.', o: ['Uterus larger than dates', 'Very high hCG', 'Severe nausea and vomiting', 'Fetal heart tones at 10 weeks', 'Irregular vaginal bleeding'], a: [0, 1, 2, 4], why: 'Molar pregnancy: large uterus, very high hCG, hyperemesis, bleeding, no viable fetus.' },
        { ref: '12.2', q: 'A patient at 34 weeks has sudden severe abdominal pain, a rigid uterus, dark bleeding, and a history of cocaine use. Suspect:', o: ['Placenta previa', 'Placental abruption', 'Braxton Hicks', 'Round ligament pain'], a: 1, why: 'Painful bleeding with a uterus that does not relax and cocaine use (vasoconstriction) indicate abruption.' },
        { ref: '12.2', q: 'A patient on magnesium sulfate has respirations of 10/min and absent patellar reflexes. First action?', o: ['Increase the infusion rate', 'Stop the magnesium infusion', 'Recheck in 1 hour', 'Give terbutaline'], a: 1, why: 'These are signs of toxicity: stop the infusion first, then notify the provider, draw a level, and give calcium gluconate.' },
        { ref: '12.2', q: 'Which finding in a preeclamptic patient warns of impending seizure?', o: ['1+ reflexes', 'Hyperreflexia with clonus', 'Urine output 50 mL/h', 'BP 128/80'], a: 1, why: 'Hyperreflexia and clonus indicate CNS irritability and seizure risk.' },
        { ref: '12.2', q: 'A patient is receiving terbutaline for preterm labor. Maternal pulse is 128. Action?', o: ['Give the next dose', 'Hold the dose and notify the provider', 'Increase the dose', 'Give with food'], a: 1, why: 'Hold terbutaline if maternal pulse > 120.' },
        { ref: '12.2', q: 'Indomethacin is ordered for tocolysis at 33 weeks. The nurse questions it because:', o: ['It causes hypertension', 'It is contraindicated after 32 weeks (premature ductus closure)', 'It must be given IM', 'It causes polyhydramnios'], a: 1, why: 'Indomethacin is limited to ≤ 32 weeks and 72 hours (oligohydramnios, PDA problems, IVH).' },
        { ref: '12.2', q: 'An Rh-negative patient delivered an Rh-positive newborn. When should RhoGAM be given?', o: ['Within 72 hours after birth', 'At 6 weeks postpartum', 'Only in the next pregnancy', 'Not needed after birth'], a: 0, why: 'Postpartum RhoGAM within 72 h neutralizes fetal cells that entered the circulation during birth.' },
        { ref: '12.2', q: 'A patient with a history of genital herpes has active lesions when her membranes rupture at term. Expected plan?', o: ['Vaginal birth with acyclovir', 'Cesarean birth', 'Induction with oxytocin', 'Delay birth 2 weeks'], a: 1, why: 'Active lesions at labor or ROM → cesarean to reduce neonatal transmission.' },
        { ref: '12.2', q: 'During an eclamptic seizure, what does the nurse do? Select all that apply.', o: ['Stay with the patient', 'Turn the patient to the side', 'Insert a padded tongue blade', 'Lower the HOB below 30 degrees', 'Pad the side rails'], a: [0, 1, 3, 4], why: 'Prevent injury and protect the airway; nothing is placed in the mouth.' },
        { ref: '12.2', q: 'Which twin type carries the risk of twin-to-twin transfusion?', o: ['Dichorionic-diamniotic', 'Monochorionic (shared placenta)', 'Dizygotic twins', 'Twins after a single embryo transfer only'], a: 1, why: 'A shared placenta (monochorionic) allows unbalanced blood flow between twins.' },
    ],
});
