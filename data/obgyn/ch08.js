STUDY.addChapter('obgyn', {
    n: 8,
    intro: `<p>Breast changes happen across the lifespan. Some are normal, age-related changes; others, like a new cancer diagnosis, are life-altering. Any breast change can cause great anxiety. The nurse teaches breast health and prevention, cares for benign and malignant conditions, and above all provides support, advocacy and holistic care. 1 in 8 persons AFAB worldwide will be diagnosed with breast cancer. {{Chapter intro · p. 345}}</p>`,
    sections: {
        '8.1': {
            key: [
                'Benign breast changes are <strong>more common than cancer</strong> and linked to <strong>estrogen fluctuations</strong> (childbearing years). ~50% of women over 30 have mastalgia/fibrocystic changes.',
                '<strong>Fibrocystic changes</strong> (most common benign disease, ages 20–50): <strong>cyclic</strong> lumpiness and tenderness (upper outer quadrant), <strong>worse the week before menses</strong>; <strong>firm, ropy</strong> tissue and movable cysts. Comfort: NSAIDs, <strong>less caffeine</strong>, less nicotine/alcohol, supportive bra, heat, vitamin E.',
                '<strong>Fibroadenoma</strong> (most common solid tumor, ages 14–35): <strong>painless, round, rubbery, well-defined, mobile</strong>, usually &lt; 2.5 cm; does <strong>not</strong> change with the cycle. Biopsy over 30; watch-and-wait under 30.',
                '<strong>Nonlactational mastitis</strong>: periductal mastitis (smoking, obesity, diabetes; <strong>greenish discharge</strong>, nipple inversion) and idiopathic granulomatous mastitis (hard lump, <strong>peau d’orange</strong>, mimics cancer; steroids). Antibiotics per culture; stop smoking.',
                '<strong>Intraductal papilloma</strong>: wart-like tumor in a milk duct; a <strong>solitary</strong> papilloma near the nipple causes <strong>bloody or clear nipple discharge</strong>. Workup: TSH, prolactin, imaging, <strong>ductogram</strong>, biopsy.',
            ],
            html: `
<p>People with breast changes often fear cancer, but <strong>benign conditions are more common</strong>. “<strong>Benign breast changes</strong>” covers trauma, breast pain (<strong>mastalgia</strong>), infection, skin changes, nipple discharge and noncancerous tumors. They are often linked to <strong>estrogen fluctuations</strong>, so they are most common in the childbearing years. Most resolve or are easily treated; a few raise later cancer risk. {{p. 346}}</p>

<h3>Fibrocystic breast changes {{p. 346}}</h3>
<ul>
    <li>Lumpiness (<strong>nodularity</strong>) or pain in one or both breasts; the <strong>most common benign breast disease</strong> at ages 20–50.</li>
    <li>Cause: mostly <strong>cyclic hormonal changes</strong>; also luteal progesterone deficiency, estrogen excess, altered FSH/LH, <strong>caffeine and nicotine</strong> (excess or withdrawal), high dietary fat.</li>
    <li>Signs: fullness/heaviness, <strong>tenderness in the upper outer quadrant</strong>, palpable well-defined <strong>movable cysts</strong>, nipple discharge. <strong>Worse the week before menses</strong>, better about a week after. {{p. 347}}</li>
    <li>Diagnosis: history and clinical breast exam ± mammogram/US. <strong>Fibrosis</strong> (thickened glandular tissue) feels <strong>firm or ropy</strong>. Fluid cyst → <strong>aspirate</strong> and send fluid to pathology; solid → <strong>FNA</strong>; core biopsy if more tissue is needed.</li>
    <li>Management: conservative “<strong>watch and wait</strong>” with routine re-exams; oral contraceptives may help (or worsen); surgery rarely.</li>
</ul>
<div class="callout nurse"><span class="callout-title">Comfort measures for fibrocystic changes {{p. 347}}</span><p>NSAIDs (ibuprofen) · <strong>reduce caffeine</strong> · reduce nicotine and alcohol · <strong>supportive bra</strong> · heating pads · topical vitamin E oil. It may take several strategies to find what works. Reassure and educate.</p></div>

<h3>Fibroadenoma {{p. 347}}</h3>
<ul>
    <li><strong>Painless, solid, noncancerous</strong> tumor; the <strong>most common solid breast tumor</strong>; most common at ages <strong>14–35</strong>; less common after menopause.</li>
    <li>Unlike cysts, it does <strong>not change with the menstrual cycle</strong>: stays the same or grows slowly; may <strong>enlarge in pregnancy</strong> and shrink after menopause.</li>
    <li>Usually &lt; <strong>2.5 cm</strong>, solitary (can be multiple or bilateral), <strong>round, rubbery, well-defined, easily movable</strong>. {{p. 348}}</li>
    <li>Usually no added cancer risk; <strong>complex fibroadenomas</strong> may slightly raise risk (the book also cites a study finding up to 74% higher risk).</li>
    <li>Diagnosis: mammogram (smooth, round borders); <strong>ultrasound</strong> (distinguishes solid from fluid; hypoechoic round mass); <strong>biopsy (FNA or US-guided core) usually if over 30</strong>. Under 30: watchful waiting.</li>
    <li>Treatment: often none (may disappear); <strong>lumpectomy/excisional biopsy</strong> or <strong>cryoablation</strong> (freezing probe).</li>
    <li>After menopause, breasts lose elasticity, glandular tissue and shape, and fatty tissue increases (unless on HRT).</li>
</ul>
<p><strong>Lumpectomy nursing care</strong> {{Table 8.1 · p. 349}}</p>
<table>
    <thead><tr><th>Phase</th><th>Nursing actions</th></tr></thead>
    <tbody>
        <tr><td>Pre-op</td><td><strong>NPO 8–12 h</strong>; arrange <strong>someone to drive them home</strong>; clothing; what to bring; arrival time; review history and medications; pre-op tests; <strong>consent signed and witnessed</strong>; <strong>review discharge instructions</strong></td></tr>
        <tr><td>Intra-op</td><td>Admission; verify patient and site; give medications; scrub or circulating nurse; monitor</td></tr>
        <tr><td>Post-op</td><td>Monitor anesthesia recovery and vital signs; pain medication and antiemetics; watch for complications; discharge teaching</td></tr>
    </tbody>
</table>

<h3>Nonlactational mastitis {{p. 349}}</h3>
<p>Breast inflammation in a person <strong>not breast-feeding</strong>, with or without infection (mostly staphylococci).</p>
<table>
    <thead><tr><th></th><th>Periductal mastitis (mammary ductal ectasia)</th><th>Idiopathic granulomatous mastitis (IGM)</th></tr></thead>
    <tbody>
        <tr><td>What</td><td>Chronic inflammation with <strong>dilated, thick-walled ducts</strong>, plasma cells, fat necrosis, possible abscess</td><td>Rare chronic inflammation, <strong>mimics breast cancer</strong></td></tr>
        <tr><td>Risk</td><td><strong>Smoking, obesity, diabetes</strong></td><td>Oral contraceptives, infection, autoimmunity, pregnancy, breast-feeding, hyperprolactinemia, α1-antitrypsin deficiency</td></tr>
        <tr><td>Signs</td><td>Pain/redness, <strong>nipple inversion</strong>, <strong>greenish nipple discharge</strong>, fever</td><td><strong>Hard, well-defined lump</strong>, nipple inversion, <strong>peau d’orange</strong> (orange-peel skin), ulceration, fistula {{p. 350}}</td></tr>
    </tbody>
</table>
<ul>
    <li>Diagnosis: history and exam; US, mammogram (painful with an abscess), MRI; FNA for atypical cases or abscess; send any discharge/aspirate for <strong>culture and sensitivity</strong>; biopsy to tell inflammation from cancer.</li>
    <li>Treatment: <strong>antibiotics per culture</strong>, pain medication, <strong>incision and drainage</strong> of an abscess, <strong>corticosteroids for IGM</strong>; hospitalize only for sepsis, treatment failure or instability. {{p. 351}}</li>
    <li>Untreated: fistulas, bacteremia/sepsis, recurrence, rarely death.</li>
    <li>Comfort: warm or cold compresses, lymphatic drainage, <strong>supportive bra</strong>, sleep on the unaffected side, breast pads. Teach: follow-up, warning signs, <strong>stop smoking</strong>, <strong>finish all antibiotics</strong>.</li>
</ul>

<h3>Intraductal papilloma {{p. 351}}</h3>
<ul>
    <li>Benign, wart-like tumor (fibrous tissue, glands, vessels) <strong>inside a milk duct</strong>.</li>
    <li><strong>Solitary papilloma</strong>: one tumor near the nipple in a large duct → <strong>bloody or clear nipple discharge</strong>; lump (sometimes painful) near or behind the nipple. <strong>Multiple papillomas</strong>: smaller ducts farther from the nipple; <strong>no discharge</strong>.</li>
    <li>Diagnosis: <strong>thyroid and prolactin levels</strong> (rule out other causes of discharge), mammogram/US, <strong>ductogram</strong> (dye into the leaking duct + x-ray), biopsy. Surgery for large or painful ones. {{p. 352}}</li>
    <li>Nursing: post-procedure care (keep the dressing clean and dry); reassurance that it is benign.</li>
</ul>`,
        },
        '8.2': {
            key: [
                'Breast cancer = <strong>most common</strong> cancer in persons AFAB and <strong>#2 cause of cancer death</strong> (after lung). Lifetime risk ~13%. Black patients: <strong>42% higher mortality</strong>, younger, more aggressive types (triple negative).',
                'Risks: <strong>female sex and age</strong> (main), BRCA1/2, family history, dense breasts, chest radiation &lt; 30, <strong>early menarche (&lt; 12)/late menopause (&gt; 55)</strong>, first pregnancy &gt; 30 or none, no breast-feeding, alcohol, obesity after menopause, inactivity, HRT, smoking, night shifts.',
                'Screening: monthly <strong>BSE no longer recommended</strong> (breast awareness instead). Mammography per ACS/USPSTF/NCCN. <strong>BI-RADS 0–6</strong>. <strong>Clustered, irregular microcalcifications</strong> → biopsy. US is an adjunct (dense breasts, cyst vs. solid).',
                '<strong>Core needle biopsy</strong> = biopsy of choice (with or without US, local anesthetic, clip placed). <strong>Sentinel node biopsy</strong> (dye) vs. <strong>axillary dissection</strong> (10–20 nodes).',
                'Markers: ER/PR+ (70–80%) → hormone therapy. HER2+ → aggressive but targetable. <strong>Triple negative</strong> → hardest to treat (younger, Black, BRCA1). Staging: <strong>TNM</strong>, stages 0–IV.',
                'Hormone therapy: <strong>tamoxifen</strong> (SERM; pre- or postmenopausal; risk of <strong>DVT/PE, stroke, uterine cancer</strong>) · <strong>aromatase inhibitors</strong> (anastrozole, letrozole, exemestane; postmenopausal; <strong>joint pain, osteoporosis</strong>). Checkpoint inhibitors: watch for <strong>infusion reactions</strong> (stop the infusion).',
                'After mastectomy: drains, <strong>arm exercises 4×/day after axillary dissection</strong>, prepare emotionally for seeing the wound; prosthesis/reconstruction choices. Fertility: freeze eggs before chemo; wait about <strong>2 years</strong> after treatment to conceive.',
            ],
            html: `
<p>CDC: more than 239,000 US women diagnosed (2020) and ~43,000 deaths. <strong>Most common cancer</strong> in persons AFAB and <strong>second cause of cancer death</strong> after lung. Lifetime risk ≈ <strong>13%</strong> (White 13.8%, Black 12%, Asian/Pacific Islander 11.7%, Hispanic 10.8%, American Indian/Alaska Native 9.9%). {{Table 8.2 · p. 352}} Incidence has fallen since 2000 and mortality <strong>fell 43% from 1989 to 2020</strong> (screening, targeted treatment). Transgender men and women with breast tissue are also at risk: consider genetic testing if there is a family history, and discuss hormone effects.</p>

<h3>Risk factors {{Table 8.3 · p. 353}}</h3>
<table>
    <thead><tr><th>Modifiable</th><th>Nonmodifiable</th></tr></thead>
    <tbody>
        <tr><td>
            <ul>
                <li>Physical inactivity</li>
                <li><strong>Overweight/obesity after menopause</strong></li>
                <li>HRT or hormonal contraceptives</li>
                <li><strong>Alcohol</strong></li>
                <li><strong>First pregnancy after 30 or no full-term pregnancy</strong></li>
                <li>Not breast-feeding</li>
                <li>Smoking</li>
                <li>Night-shift work</li>
                <li>Certain chemicals</li>
            </ul>
        </td><td>
            <ul>
                <li><strong>Age and sex</strong> (the primary factors)</li>
                <li>Genetic mutations (<strong>BRCA1/2</strong>)</li>
                <li>Personal history of breast cancer or some benign disease</li>
                <li><strong>DES</strong> exposure</li>
                <li>Radiation therapy before 30</li>
                <li><strong>Dense breasts</strong></li>
                <li>Family history of breast or ovarian cancer</li>
                <li><strong>Menarche &lt; 12, menopause &gt; 55</strong></li>
            </ul>
        </td></tr>
    </tbody>
</table>

<h3>Screening {{p. 353}}</h3>
<ul>
    <li><strong>Breast self-exam</strong>: monthly BSE is <strong>no longer recommended</strong> (removed by USPSTF in 2009 due to false positives and harm). Teach <strong>breast awareness</strong> (know how your breasts look and feel; report changes). {{p. 354}}</li>
    <li><strong>Clinical breast exam</strong>: ACS no longer recommends it routinely; NCCN suggests every 1–3 years from 25, yearly from 40. Individualize.</li>
    <li>Results are reported with <strong>BI-RADS</strong> (Breast Imaging Reporting and Data System), scored <strong>0–6</strong> (6 = proven malignancy); the report notes <strong>dense breasts</strong> (which hide small masses).</li>
</ul>
<h4>Mammography {{p. 354}}</h4>
<ul>
    <li>X-ray of the breast compressed between two plates, multiple views. Fat looks dark; dense tissue and tumors look <strong>white</strong>. Digital images can be manipulated, mean fewer retakes, are easier to share, work better for dense breasts and allow computer-aided detection. {{p. 355}}</li>
    <li>Screening or diagnostic (lump found).</li>
    <li><strong>Calcifications</strong>: <strong>macrocalcifications</strong> (large dots/dashes; half of women &gt; 50; benign). <strong>Microcalcifications</strong> (tiny salt-like flecks): <strong>tightly clustered or irregular → further testing</strong> (possible early cancer).</li>
</ul>
<table>
    <thead><tr><th>Organization</th><th>Average-risk mammography {{Table 8.4 · p. 356}}</th></tr></thead>
    <tbody>
        <tr><td>American Cancer Society</td><td>40–44 optional yearly · <strong>45–54 yearly</strong> · 55+ yearly or every 2 years</td></tr>
        <tr><td>USPSTF</td><td>40–49 individual choice · <strong>50–74 every 2 years</strong></td></tr>
        <tr><td>NCCN</td><td><strong>40+ yearly</strong></td></tr>
    </tbody>
</table>
<ul>
    <li><strong>Ultrasound</strong>: not routine screening; adjunct for <strong>dense breasts</strong>, lesions unclear on mammogram, <strong>fluid vs. solid</strong>, needle guidance. Painless, <strong>no radiation</strong>.</li>
    <li><strong>Genetic testing</strong> (blood): <strong>BRCA1/BRCA2</strong> (also PALB2, CHEK2, ATM, CDH1, PTEN, TP53). <strong>Hereditary breast and ovarian cancer syndrome</strong>: AFAB → breast, ovarian, pancreatic; AMAB → breast, prostate, pancreatic. Only <strong>5–10%</strong> of breast cancers are genetic; positives get more aggressive surveillance or prevention. {{p. 356}}</li>
</ul>

<h3>Diagnosis {{p. 357}}</h3>
<ul>
    <li>Imaging: diagnostic mammogram → US → <strong>MRI</strong> if symptomatic/inconclusive or to map a known cancer. Breast MRI: <strong>contrast</strong>, patient <strong>face down</strong>; check <strong>contrast allergy</strong> and <strong>metal</strong> (pacemaker, piercings, aneurysm clips, cochlear implants); 30–45 min.</li>
    <li><strong>Fine needle aspiration (FNA)</strong>: small needle (21–25 g), sterile technique, ± US, ± local anesthetic.</li>
    <li><strong>Core needle biopsy (CNB)</strong>: larger hollow needle removes a tissue “core”; <strong>biopsy of choice when cancer is suspected</strong>; <strong>with or without US guidance</strong>; <strong>local anesthetic given</strong>; a <strong>marker clip</strong> is left for follow-up imaging. {{p. 357}}</li>
    <li><strong>Surgical biopsy</strong> (if FNA/CNB inconclusive): incisional (part) or excisional (all + margin), under IV sedation/general anesthesia. {{p. 358}}</li>
    <li><strong>Lymph nodes</strong>: enlarged axillary nodes → FNA/CNB. <strong>Sentinel lymph node biopsy (SLNB)</strong>: dye or radioactive tracer injected → the first draining nodes are found and removed. <strong>Axillary lymph node dissection</strong>: ~10–20 nodes removed (if SLNB has ≥ 3 positive nodes or nodes are known positive).</li>
</ul>

<h3>Tumor characteristics {{p. 358}}</h3>
<table>
    <thead><tr><th>Marker</th><th>Meaning</th></tr></thead>
    <tbody>
        <tr><td><strong>ER/PR positive</strong> (hormone receptor +)</td><td>Grows with estrogen/progesterone → responds to <strong>hormone therapy</strong>; 70–80% of cancers</td></tr>
        <tr><td>ER/PR negative</td><td>No response to hormone therapy</td></tr>
        <tr><td><strong>HER2 positive</strong></td><td>High levels of this growth protein → <strong>faster, more aggressive</strong>, but responds to <strong>HER2-targeted</strong> drugs {{p. 359}}</td></tr>
        <tr><td>Triple positive</td><td>ER+, PR+ and HER2+</td></tr>
        <tr><td><strong>Triple negative</strong></td><td>ER−, PR−, HER2−: <strong>hardest to treat</strong> (no hormonal or HER2 targets), aggressive; more common in <strong>women &lt; 40, Black women and BRCA1 carriers</strong></td></tr>
    </tbody>
</table>
<p>A high <strong>proliferation rate</strong> means more aggressive disease and a worse prognosis.</p>

<h3>Types and clinical manifestations {{Table 8.5 · p. 359}}</h3>
<table>
    <thead><tr><th>Type</th><th>Description</th><th>Manifestations</th></tr></thead>
    <tbody>
        <tr><td><strong>Ductal carcinoma in situ (DCIS)</strong></td><td>Localized, noninvasive/preinvasive cancer of the ducts</td><td>Often asymptomatic; <strong>small white spots</strong> (calcifications) on mammogram; may cause a lump or discharge</td></tr>
        <tr><td><strong>Invasive ductal (IDC)</strong> / invasive lobular (ILC)</td><td>IDC is the <strong>most common</strong>: duct cells spread to tissue and metastasize via lymph and blood. ILC (rarer) starts in the milk glands and is more often bilateral</td><td>Swelling/irritation, <strong>nipple retraction</strong>, peau d’orange, discharge, skin thickening and redness, pain, <strong>axillary lump</strong></td></tr>
        <tr><td><strong>Inflammatory breast cancer</strong></td><td>Rare, aggressive, fast; mostly IDC; cancer cells <strong>block lymph vessels</strong> → edema</td><td>Swollen, inflamed, <strong>warm, red</strong> breast; dimpling, pitting (<strong>peau d’orange</strong>), welts; nipple flattening/inversion; enlarged nodes; itching. Can look like a <strong>rash or infection</strong> {{p. 360}}</td></tr>
        <tr><td><strong>Paget disease of the nipple</strong></td><td>Rare cancer of the nipple/areola, usually with DCIS or IDC</td><td><strong>Crusty, red, scaly</strong> skin (confused with <strong>eczema</strong>); bloody or yellow discharge</td></tr>
        <tr><td><strong>Phyllodes tumor</strong></td><td>Rare tumor of the breast <strong>connective tissue</strong>; mostly benign, can be borderline or malignant</td><td>Firm, usually painless lump that can grow large enough to stretch the skin</td></tr>
    </tbody>
</table>

<h3>Staging {{p. 360}}</h3>
<p><strong>TNM</strong>: <strong>T</strong>umor size · <strong>N</strong>odes · <strong>M</strong>etastasis, plus receptor status, giving a clinical stage <strong>0</strong> (localized, excellent prognosis) to <strong>IV</strong> (distant spread, poor prognosis).</p>

<h3>Supporting a new diagnosis {{p. 360}}</h3>
<ul>
    <li>Patients face mortality, loss of health, body image and sexual changes, finances, career and family roles: shame, helplessness, fear.</li>
    <li>In the early <strong>shock, anger, denial</strong> phase, detailed teaching won’t be retained. Give simple information, repeat and reinforce, involve them in planning as they adjust, and <strong>refer to counseling</strong>. {{p. 361}}</li>
    <li>If negative: support relief and lingering anxiety; plan follow-up and screening.</li>
</ul>

<h3>Medical management {{p. 361}}</h3>
<h4>Surgery</h4>
<ul>
    <li><strong>Breast-conserving surgery (BCS)</strong> for small or early tumors (one tumor, &lt; 50% of the breast): <strong>lumpectomy</strong> (tumor + small margin ± some nodes) or <strong>segmental/partial mastectomy</strong> (larger margin). Often followed by <strong>radiation</strong>.</li>
    <li><strong>Mastectomy</strong> (whole breast, nipple and areola) for large/multiple tumors, invasive cancer, prior breast radiation, or <strong>prophylactically</strong> (high risk/BRCA).</li>
</ul>
<table>
    <thead><tr><th>Type</th><th>Removes</th></tr></thead>
    <tbody>
        <tr><td><strong>Total simple</strong></td><td>Breast, nipple, areola + <strong>sentinel</strong> nodes</td></tr>
        <tr><td><strong>Modified radical</strong></td><td>Breast, nipple, areola + <strong>axillary</strong> nodes; <strong>chest wall left intact</strong></td></tr>
        <tr><td><strong>Skin-sparing</strong></td><td>Breast tissue, nipple, areola; <strong>skin kept</strong> (implant now or expander for later)</td></tr>
        <tr><td><strong>Nipple-sparing</strong></td><td>Breast tissue only; skin, areola and nipple kept (tumor must be ≥ 2 cm from the nipple)</td></tr>
    </tbody>
</table>
<p>Research suggests <strong>BCS + radiation</strong> may give survival equal to or better than mastectomy (including for triple negative). Evaluate teaching with <strong>teach-back</strong>, open-ended questions and summaries. {{p. 362}}</p>

<h4>Reconstruction {{p. 363}}</h4>
<ul>
    <li>Immediate or delayed. Depends on health, tumor, breast size/shape, surgery type, tissue available, insurance, preferences.</li>
    <li><strong>Implants</strong> (saline or silicone, under skin and muscle) or <strong>flap procedures</strong> (tissue from abdomen [TRAM], back [latissimus], buttocks; microsurgery; donor-site weakness, lifting limits, two scars).</li>
    <li>Later: nipple reconstruction, areola <strong>tattoo</strong>; alternatives: <strong>prosthesis</strong> or aesthetic flat closure. <strong>A very personal decision: support whatever the patient chooses.</strong> {{p. 364}}</li>
</ul>

<h4>Chemotherapy {{p. 364}}</h4>
<ul>
    <li>Cytotoxic drugs. <strong>Neoadjuvant</strong> (before surgery): shrinks the tumor, tests response, buys time for genetic testing/reconstruction planning. <strong>Adjuvant</strong> (after surgery): kills remaining or micrometastatic cells. Both reduce recurrence.</li>
    <li>Usually IV combinations through a <strong>central line, PICC or port</strong> placed on the <strong>side opposite</strong> the cancer (extravasation risk). Monitor patency and infection; the nurse confirms consent is signed and understood.</li>
    <li>Side effects (rapidly dividing cells): <strong>hair loss, nausea/vomiting</strong> (give antiemetics, teach strategies), fatigue, diarrhea, hot flashes, appetite/weight loss, <strong>mouth sores</strong>. {{p. 365}}</li>
    <li>Bone marrow suppression → <strong>infection, bleeding, anemia</strong> (monitor counts; mask, avoid crowds). Also cardiomyopathy, neuropathy, myelodysplasia, <strong>infertility</strong>. Pregnancy during chemo → birth defects, so use contraception.</li>
</ul>
<div class="callout warn"><span class="callout-title">QSEN: hazardous drug safety {{p. 364}}</span><p>PPE when discontinuing IVs/disposing of drugs, mixing, cleaning spills, <strong>measuring urine output</strong>: chemo-tested gloves and gown, shoe covers, goggles/face shield, respiratory protection; closed-system transfer devices. <strong>Pregnant or trying-to-conceive staff must tell supervisors</strong>, who offer alternative duties.</p></div>

<h4>Biologic response modifiers {{p. 365}}</h4>
<p>Use the patient’s immune system. <strong>Checkpoint inhibitors</strong> (e.g., PD-1 inhibitors such as pembrolizumab) turn the immune response back on against tumor cells; used with chemo for <strong>triple negative</strong> cancer. <strong>Infusion reaction</strong>: fever, chills, flushing, wheezing, dyspnea, rash/itching, <strong>dizziness</strong>, so <strong>stop the infusion</strong> and notify the provider; consider premedication.</p>

<h4>Hormonal therapy (ER/PR+ cancers) {{p. 365}}</h4>
<p>Blocks hormone receptors; started after surgery, usually <strong>5 years (up to 10)</strong>.</p>
<table>
    <thead><tr><th>Class</th><th>Drugs</th><th>Use</th><th>Key effects</th></tr></thead>
    <tbody>
        <tr><td><strong>SERMs</strong></td><td><strong>Tamoxifen</strong>, raloxifene, toremifene</td><td>Tamoxifen: <strong>pre- or postmenopausal</strong>. Raloxifene: osteoporosis + risk reduction (postmenopausal). Toremifene: postmenopausal metastatic</td><td>Early-menopause symptoms; <strong>DVT, PE, stroke, endometrial cancer</strong> → regular Pap/pelvic exams, eye exams, LFTs, bone density</td></tr>
        <tr><td><strong>SERDs</strong></td><td>Fulvestrant, elacestrant</td><td>Postmenopausal (premenopausal only with ovarian suppression)</td><td>Hot flashes, sweats, nausea, fatigue, joint pain {{p. 367}}</td></tr>
        <tr><td><strong>Aromatase inhibitors</strong></td><td><strong>Anastrozole, letrozole, exemestane</strong></td><td>Block estrogen made in body fat; <strong>postmenopausal</strong> (or with ovarian suppression); daily for 5–10 years</td><td><strong>Joint/muscle pain</strong> (NSAIDs, exercise, switch AI); hot flashes, vaginal dryness; <strong>osteoporosis/fractures</strong> (bone density every 2 years, ± bisphosphonates)</td></tr>
        <tr><td><strong>Ovarian suppression</strong></td><td>Oophorectomy, gonadotoxic chemo, LHRH agonists</td><td>Makes premenopausal ovaries “postmenopausal” so AIs/SERDs can be used</td><td>Menopausal symptoms</td></tr>
    </tbody>
</table>
<div class="callout memo"><span class="callout-title">Pharmacology: tamoxifen {{p. 366}}</span><p>SERM, 20 mg daily for 5–10 years (20–40 mg in metastatic disease). <strong>Black box</strong>: higher risk of fatal <strong>uterine cancer, stroke and PE</strong> (in high-risk/DCIS patients). Contraindicated with a history of <strong>DVT/PE</strong> or certain anticoagulants. Side effects: hot flashes, irregular periods, vaginal discharge, HTN, edema, arthralgia. <strong>Avoid pregnancy</strong> (use barrier contraception); may need to stop breast-feeding.</p></div>
<p><strong>Ethics: refusing chemotherapy.</strong> A competent adult may refuse. The nurse educates (side-effect management, why chemo is needed in stage 3), <strong>informs the provider, documents teaching and supports autonomy</strong>. Advocacy means supporting the patient’s decision, not our own. {{p. 367}}</p>

<h4>Radiation {{p. 368}}</h4>
<ul>
    <li>Usually after BCS (or before surgery to shrink a large tumor).</li>
    <li><strong>External beam radiation (EBRT)</strong>: chest wall, scar and drain sites after mastectomy; nodal areas if nodes are positive; <strong>whole breast</strong> after BCS. Starts after healing/chemo; <strong>5 days/week for 6–7 weeks</strong>. <strong>Accelerated partial breast irradiation (APBI)</strong>: higher doses to the tumor bed.</li>
    <li>Side effects: breast swelling and heaviness, <strong>fatigue</strong>, <strong>sunburn-like skin</strong>, <strong>lymphedema</strong> (axillary radiation); later a smaller, firmer breast, problems breast-feeding or with reconstruction, brachial plexopathy, rib fractures. {{p. 369}}</li>
    <li>Skin care: <strong>moisturize</strong>, hydrogel pads, <strong>avoid underwire, nylon or lace bras</strong>, <strong>don’t shave the armpit</strong>. Nurses wear radiation <strong>monitor badges</strong>.</li>
    <li><strong>Brachytherapy</strong> (internal radioactive seeds): <strong>intracavitary</strong> (balloon in the lumpectomy cavity, loaded twice daily × 5 days outpatient) or <strong>interstitial</strong> (catheters in tissue). Radiation safety and PPE, sterile catheter/wound care, infection monitoring, home teaching.</li>
</ul>

<h3>Mastectomy nursing care {{p. 369}}</h3>
<ul>
    <li><strong>Pre-op</strong>: consent signed and witnessed, questions answered; pre-op tests (CXR, CBC, chemistry, <strong>type and screen</strong>); teaching on recovery, pain, drains, restrictions; <strong>NPO after midnight</strong>; medications to take/hold; <strong>deep breathing and coughing</strong>. Morning of surgery: assessment and vitals, <strong>advance directives</strong>, allergies, NPO confirmed, pre-op meds, anxiety support, ride home. {{p. 370}}</li>
    <li><strong>Post-op</strong>: vitals every 5–15 min in the first hour; pain and PONV control; breath sounds; <strong>drains</strong>; watch for <strong>shock, hemorrhage, infection</strong>; turn, cough, deep breathe; range of motion; dressings; ambulation; IV fluids; plan discharge early.</li>
</ul>
<table>
    <thead><tr><th>Procedure</th><th>Usual discharge {{Table 8.6 · p. 370}}</th></tr></thead>
    <tbody>
        <tr><td>Lumpectomy</td><td>Same day</td></tr>
        <tr><td>Mastectomy without reconstruction</td><td>&lt; 24 h</td></tr>
        <tr><td>Mastectomy + tissue expander</td><td>~24 h</td></tr>
        <tr><td>Mastectomy + flap</td><td>3–5 days</td></tr>
    </tbody>
</table>
<div class="callout nurse"><span class="callout-title">Discharge teaching after mastectomy {{p. 371}}</span><p>Care of <strong>dressings and drains</strong> · medications (pain, nausea) · when to seek emergency care · <strong>arm exercises at least 4 times a day after axillary dissection</strong> (± PT) · follow-up within ~1 week · <strong>prepare for seeing the incision</strong>: ask who they want present, give emotional support, reassure that the scar improves; suggest a <strong>temporary external prosthesis</strong> from a specialty company.</p></div>

<h3>Survivorship {{p. 371}}</h3>
<ul>
    <li><strong>Surveillance</strong>: H&amp;P every few months → yearly; <strong>mammograms</strong> after BCS (or of the remaining breast after unilateral mastectomy); <strong>pelvic exams</strong> (tamoxifen → endometrial cancer) and <strong>bone density</strong> (AIs); <strong>cardiac monitoring</strong> after anthracyclines (doxorubicin, epirubicin) or taxanes.</li>
    <li><strong>Lingering effects</strong>: depression (screen), <strong>hot flashes</strong> (avoid spicy food, cool rooms, layers, fans), weight gain (exercise), <strong>cancer-related fatigue and brain fog</strong>, sexual dysfunction. {{p. 372}}</li>
    <li><strong>Fertility</strong>: chemo can cause <strong>premature ovarian failure</strong>, so offer a fertility consult and <strong>egg freezing before chemo</strong>. Usually <strong>wait at least 2 years</strong> after treatment to conceive (detect early recurrence). Hormone therapy lasts 5–10 years; some pause after ≥ 2 years to conceive, then resume.</li>
    <li><strong>Resources</strong> {{Table 8.7 · p. 373}}: American Cancer Society (peer support), Susan G. Komen (support groups, patient navigators), Breastcancer.org (forums), National Breast Cancer Foundation (HOPE kits), Living Beyond Breast Cancer (helpline), CancerCare (free counseling, financial help). <strong>Assess caregivers too.</strong></li>
    <li><strong>Culture</strong>: e.g., in Syria, the breast symbolizes femininity and motherhood and cancer is seen as a death sentence; reconstruction is rare (cost), so family and friend support is key. {{p. 371}}</li>
    <li><strong>Disparities</strong>: distrust of health care across groups; Black patients have <strong>42% higher mortality</strong>, are diagnosed younger and later with aggressive types; the <strong>highest rate under 40</strong>. Causes: SDOH, bias, access, systemic racism. {{p. 374}}</li>
</ul>`,
        },
    },
    terms: [
        ['benign breast changes', 'umbrella term for noncancerous breast conditions: trauma, pain, infection, skin changes, nipple discharge, and tumors'],
        ['biologic response modifier', 'medication that uses the patient’s own immune system to recognize and get rid of cancer cells'],
        ['BRCA1', 'gene associated with increased risk of breast cancer when mutated'],
        ['BRCA2', 'gene associated with increased risk of breast cancer when mutated'],
        ['calcification', 'calcium deposit in breast tissue; usually benign but can sometimes indicate early breast cancer'],
        ['core needle biopsy', 'procedure that removes a larger amount of tissue for analysis using a larger hollow needle'],
        ['fibroadenoma', 'painless, noncancerous tumor found in the breast tissue'],
        ['fibrocystic breast changes', 'changes in one or both breasts causing lumpiness (nodularity) or pain'],
        ['fibrosis', 'thickening of the glandular tissue'],
        ['fine needle aspiration (FNA)', 'placement of a small needle (21–25 g) into a lesion to obtain a tissue or fluid sample'],
        ['HER2 (human epidermal growth factor receptor 2)', 'cell-growth protein; high levels make breast cancer grow and spread more aggressively'],
        ['intraductal papilloma', 'benign tumor that grows inside the milk ducts of the breasts'],
        ['lumpectomy', 'removal of the tumor, a small ring of healthy tissue around it, and possibly some axillary lymph nodes'],
        ['mammography', 'x-ray visualization of breast tissue obtained by compressing the breast between two plates'],
        ['mastalgia', 'breast pain'],
        ['mastectomy', 'removal of the entire breast, including the nipple and areola'],
        ['multiple papillomas', 'papillomas found in the smaller milk ducts farther from the nipple'],
        ['nonlactation mastitis', 'inflammation of the breast in a non–breast-feeding person, with or without infection'],
        ['periductal mastitis (mammary ductal ectasia)', 'chronic breast inflammation with dilated thick-walled ducts, plasma cell infiltration, fat necrosis, and sometimes abscess'],
        ['solitary papilloma', 'single tumor growing close to the nipple in the larger milk ducts'],
        ['triple negative cancer', 'cancer negative for HER2 and estrogen/progesterone receptors'],
        ['triple positive cancer', 'cancer positive for HER2 and estrogen/progesterone receptors'],
    ],
    cards: [
        { f: 'Teaching points for newly diagnosed fibrocystic breast changes', b: 'Benign and very common; symptoms are cyclic (worse the week before menses). Relief: NSAIDs, reduce caffeine, nicotine and alcohol, supportive bra, heat, vitamin E oil. Return for routine exams to check for changes.', ref: '8.1' },
        { f: 'Treatment options for suspected nonlactational mastitis', b: 'Antibiotics guided by culture/sensitivity, pain medication, incision and drainage of an abscess, corticosteroids if IGM, hospitalization only for sepsis or failure. Comfort: warm/cold packs, supportive bra, sleep on the unaffected side; stop smoking; finish antibiotics.', ref: '8.1' },
        { f: 'When can breast reconstruction happen after mastectomy?', b: 'Either during the mastectomy (immediate: implant, or skin-sparing/nipple-sparing techniques) or later (tissue expander, flap). Depends on health, tumor, breast size, surgery type, tissue, insurance and preference. Some choose prosthesis or flat closure, which is equally valid.', ref: '8.2' },
        { f: 'Can a patient get pregnant after breast cancer treatment?', b: 'Chemo may cause premature ovarian failure, so freezing eggs before treatment is ideal. Usually wait at least 2 years after treatment. Hormone therapy (5–10 years) may be paused after ≥ 2 years with provider guidance, then resumed after birth.', ref: '8.2' },
        { f: 'Fibrocystic change vs. fibroadenoma', b: 'Fibrocystic: cyclic tender lumpiness, ropy tissue, movable cysts, worse premenstrually (ages 20–50).\nFibroadenoma: painless, round, rubbery, well-defined, mobile solid lump that does NOT change with the cycle (ages 14–35).', ref: '8.1' },
        { f: 'Periductal mastitis vs. idiopathic granulomatous mastitis', b: 'Periductal (ductal ectasia): smoking, obesity, diabetes; greenish discharge, nipple inversion, redness, fever.\nIGM: hard lump, nipple inversion, peau d’orange, ulcers/fistula; mimics cancer; treated with steroids.', ref: '8.1' },
        { f: 'Intraductal papilloma presentation and workup', b: 'Solitary papilloma near the nipple → bloody or clear nipple discharge ± lump. Workup: TSH and prolactin, mammogram/US, ductogram (dye into the duct), biopsy; remove if large or painful.', ref: '8.1' },
        { f: 'Modifiable breast cancer risk factors', b: 'Inactivity, obesity after menopause, HRT/hormonal contraceptives, alcohol, first pregnancy after 30 or none, not breast-feeding, smoking, night shifts, chemicals.', ref: '8.2' },
        { f: 'Nonmodifiable breast cancer risk factors', b: 'Sex and age, BRCA and other mutations, personal history of breast cancer/benign disease, DES exposure, chest radiation < 30, dense breasts, family history of breast/ovarian cancer, menarche < 12, menopause > 55.', ref: '8.2' },
        { f: 'Mammography guidelines (average risk)', b: 'ACS: optional 40–44, yearly 45–54, yearly or biennial 55+.\nUSPSTF: individual 40–49, every 2 years 50–74.\nNCCN: yearly from 40.', ref: '8.2' },
        { f: 'Macro- vs. microcalcifications', b: 'Macro: large dots/dashes, benign, common after 50; no follow-up.\nMicro: tiny salt-like flecks; clustered or irregular ones → further testing (possible early cancer, e.g., DCIS).', ref: '8.2' },
        { f: 'Core needle biopsy teaching', b: 'Biopsy of choice for suspected cancer. A larger hollow needle removes a tissue core, with or without US guidance, under local anesthetic; a small marker clip may be placed for future imaging.', ref: '8.2' },
        { f: 'Sentinel node biopsy vs. axillary dissection', b: 'SLNB: dye/tracer finds the first draining nodes, and only those few are removed.\nAxillary dissection: about 10–20 axillary nodes removed (if SLNB is positive in ≥ 3 nodes or nodes are known positive); more lymphedema risk.', ref: '8.2' },
        { f: 'ER/PR+, HER2+ and triple negative', b: 'ER/PR+ (70–80%): responds to hormone therapy.\nHER2+: aggressive but responds to HER2-targeted drugs.\nTriple negative: no hormonal/HER2 targets, aggressive; more common < 40, Black women, BRCA1.', ref: '8.2' },
        { f: 'Signs of inflammatory breast cancer', b: 'Rapid swelling, redness and warmth; peau d’orange (dimpling/pitting); welts; nipple flattening or inversion; enlarged nodes; itching or pain. Can be mistaken for a rash or infection. Lymphatics are blocked by cancer cells.', ref: '8.2' },
        { f: 'Types of mastectomy', b: 'Total simple: breast + sentinel nodes.\nModified radical: breast + axillary nodes, chest wall intact.\nSkin-sparing: skin kept for reconstruction.\nNipple-sparing: skin, areola and nipple kept (tumor ≥ 2 cm from nipple).', ref: '8.2' },
        { f: 'Neoadjuvant vs. adjuvant chemotherapy', b: 'Neoadjuvant = before surgery (shrink the tumor, test response, allow time for planning).\nAdjuvant = after surgery (kill remaining or micrometastatic cells). Both reduce recurrence.', ref: '8.2' },
        { f: 'Checkpoint inhibitor infusion reaction: signs and action', b: 'Fever, chills, flushing, wheezing, shortness of breath, rash/itching, dizziness. Stop the infusion immediately, notify the provider, consider premedication next time.', ref: '8.2' },
        { f: 'Tamoxifen vs. aromatase inhibitors', b: 'Tamoxifen (SERM): pre- or postmenopausal; risks DVT/PE, stroke, uterine cancer.\nAIs (anastrozole, letrozole, exemestane): postmenopausal (or with ovarian suppression); joint pain, osteoporosis (bone density every 2 years).', ref: '8.2' },
        { f: 'Skin care during breast radiation', b: 'Keep skin moisturized, hydrogel pads, avoid underwire/nylon/lace bras, don’t shave the armpit; expect fatigue and sunburn-like skin; report lymphedema.', ref: '8.2' },
        { f: 'Post-mastectomy discharge teaching', b: 'Drain and dressing care, medications, emergency signs, arm exercises ≥ 4×/day after axillary dissection, follow-up within ~1 week, emotional preparation for seeing the incision, temporary prosthesis options.', ref: '8.2' },
        { f: 'Chemotherapy PPE situations', b: 'Discontinuing IVs/disposing drugs, mixing/manipulating, cleaning spills, measuring urine output → chemo gloves and gown, shoe covers, eye/face and respiratory protection, closed-system transfer. Pregnant staff get alternative duties.', ref: '8.2' },
    ],
    quiz: [
        { src: 'book', ref: '8.1', q: 'What assessment finding suggests that a patient may have fibrocystic breast changes?', o: ['green-tinged nipple discharge', 'ongoing breast pain', 'firm, ropy feel of the breast tissue under the skin', 'peau d’orange appearance of the skin'], a: 2, why: 'Fibrosis (thickened glandular tissue) feels firm or ropy under the skin. Green discharge suggests periductal mastitis; peau d’orange suggests IGM or inflammatory cancer; pain is cyclic rather than ongoing.' },
        { src: 'book', ref: '8.1', q: 'What nursing intervention would the nurse include in the preoperative care plan for a patient scheduled for an outpatient lumpectomy of a fibroadenoma?', o: ['Administer pain and antiemetic medications.', 'Help the patient arrange for a cab home after the procedure.', 'Advise the patient to avoid food or drink for 2 hours before surgery.', 'Review discharge instructions.'], a: 3, why: 'Pre-op care includes reviewing discharge instructions. The patient needs someone to drive them home (not a cab), NPO is 8–12 hours, and pain meds/antiemetics are post-op.' },
        { src: 'book', ref: '8.1', q: 'What is a patient statement that indicates effective teaching after a new diagnosis of nonlactational mastitis?', o: ['“I will avoid wearing a bra until I feel better.”', '“I should take steps to stop smoking cigarettes.”', '“Applying an ice pack to my breasts can help reduce pain.”', '“I should take the prescribed antibiotics until I feel better.”'], a: 1, why: 'Smoking is a risk factor for periductal mastitis, and cessation is part of teaching. A supportive bra is recommended, and antibiotics must be finished completely.' },
        { src: 'book', ref: '8.2', q: 'What is a risk factor for breast cancer?', o: ['menarche at age 15', 'family history of diabetes', 'alcohol use of at least 2 drinks per day', 'history of three vaginal births by age 25'], a: 2, why: 'Alcohol is a modifiable risk factor. Late menarche and early full-term pregnancies are protective; diabetes history isn’t a breast cancer risk factor.' },
        { src: 'book', ref: '8.2', q: 'What information would the nurse include when teaching a patient about core needle biopsy?', o: ['It can be performed with or without ultrasound guidance.', 'Local anesthetic is not needed before this procedure.', 'It is usually performed in the outpatient surgery center.', 'A special dye is injected into the area around the tumor.'], a: 0, why: 'CNB can be done with or without US guidance. Local anesthetic IS given (a core is removed), it is an office procedure, and dye injection describes sentinel node biopsy.' },
        { src: 'book', ref: '8.2', q: 'The nurse is caring for a patient receiving chemotherapy. What nursing intervention would they provide?', o: ['Administer antibiotics.', 'Administer antiemetics.', 'Encourage physical activity after infusion.', 'Encourage eating a large meal.'], a: 1, why: 'Nausea and vomiting are common chemo side effects. The nurse collaborates with the provider to give antiemetics and teaches strategies to minimize nausea.' },
        { src: 'book', ref: '8.2', q: 'What type of mastectomy removes the entire breast but leaves the chest wall intact?', o: ['total simple mastectomy', 'modified radical mastectomy', 'skin-sparing mastectomy', 'nipple-sparing mastectomy'], a: 1, why: 'Modified radical mastectomy removes the breast, nipple, areola and axillary nodes but leaves the chest wall intact.' },
        { src: 'book', ref: '8.2', q: 'The nurse would advise the patient to report what symptom immediately during a PD-1 (checkpoint inhibitor) infusion?', o: ['nausea', 'fatigue', 'dizziness', 'diarrhea'], a: 2, why: 'Dizziness is a sign of an infusion reaction (with fever, chills, flushing, wheezing, dyspnea, rash). The infusion is stopped and the provider notified.' },
        { src: 'book', ref: '8.2', q: 'What medication would the nurse include when teaching a patient about aromatase inhibitors?', o: ['anastrozole (Arimidex)', 'fulvestrant (Faslodex)', 'tamoxifen (Novaldex)', 'pembrolizumab (Keytruda)'], a: 0, why: 'Anastrozole, letrozole and exemestane are aromatase inhibitors. Fulvestrant is a SERD, tamoxifen a SERM, pembrolizumab a checkpoint inhibitor.' },
        { src: 'book', ref: '8.2', q: 'What hormonal medication can be used in a premenopausal patient without the concurrent use of ovarian suppression?', o: ['letrozole (Femara)', 'exemestane (Aromasin)', 'elacestrant (Orserdu)', 'tamoxifen (Soltamox)'], a: 3, why: 'Tamoxifen treats pre- or postmenopausal patients. AIs and SERDs need ovarian suppression in premenopausal women.' },

        { ref: '8.1', q: 'A 22-year-old has a painless, round, rubbery, mobile 2-cm lump that doesn’t change with her cycle. What is most likely?', o: ['Fibrocystic change', 'Fibroadenoma', 'Inflammatory breast cancer', 'Intraductal papilloma'], a: 1, why: 'Classic fibroadenoma: painless, well-defined, rubbery, mobile, not cyclic, common at 14–35.' },
        { ref: '8.1', q: 'Which teaching helps relieve fibrocystic breast discomfort? Select all that apply.', o: ['Reduce caffeine', 'Wear a supportive bra', 'Use NSAIDs', 'Apply heat', 'Increase dietary fat'], a: [0, 1, 2, 3], why: 'Reducing caffeine, nicotine and alcohol, supportive bras, NSAIDs, heat and vitamin E help. High dietary fat may contribute.' },
        { ref: '8.1', q: 'A patient has bloody nipple discharge from one duct. Which test injects dye into the leaking duct?', o: ['Mammogram', 'Ductogram', 'Sentinel node biopsy', 'Breast MRI'], a: 1, why: 'A ductogram injects contrast into the leaking duct and takes an x-ray to look for an intraductal papilloma.' },
        { ref: '8.2', q: 'What is current guidance about monthly breast self-exams?', o: ['Required monthly for all women over 20', 'No longer recommended; teach breast awareness and reporting of changes', 'Recommended only after menopause', 'Should replace mammography'], a: 1, why: 'Monthly BSE was removed (2009) due to false positives and harm. Patients should know their breasts and report changes.' },
        { ref: '8.2', q: 'Before a breast MRI, which assessments are essential? Select all that apply.', o: ['Contrast dye allergy', 'Pacemaker or other implanted metal', 'Piercings', 'Last menstrual period only'], a: [0, 1, 2], why: 'Breast MRI uses contrast and a magnet: check for allergy and any metal (pacemaker, piercings, aneurysm clips, cochlear implants).' },
        { ref: '8.2', q: 'Which breast cancer is hardest to treat with targeted therapy?', o: ['ER/PR-positive', 'HER2-positive', 'Triple positive', 'Triple negative'], a: 3, why: 'Triple negative lacks hormone receptors and HER2, so hormonal and HER2-targeted drugs don’t work; it is also aggressive.' },
        { ref: '8.2', q: 'A patient’s breast is red, warm and swollen with peau d’orange; she thought it was a rash. What should the nurse suspect?', o: ['Fibrocystic change', 'Inflammatory breast cancer', 'Fibroadenoma', 'Simple dermatitis'], a: 1, why: 'Inflammatory breast cancer blocks lymph vessels, causing swelling, redness, warmth and orange-peel skin, and is often mistaken for a rash or infection.' },
        { ref: '8.2', q: 'A patient receiving tamoxifen should be taught to report which symptom immediately?', o: ['Hot flashes', 'Unilateral calf pain and swelling', 'Mild nausea', 'Irregular periods'], a: 1, why: 'Tamoxifen carries a black box warning for DVT/PE, stroke and uterine cancer. Calf pain and swelling suggest DVT.' },
        { ref: '8.2', q: 'A patient on an aromatase inhibitor reports aching joints. The nurse recognizes this as:', o: ['A rare allergic reaction', 'The most common side effect, often managed with NSAIDs and exercise', 'A sign of metastasis', 'A reason to stop all hormone therapy'], a: 1, why: 'Arthritis-like joint and muscle pain is the most common AI side effect; NSAIDs, gentle exercise or switching AIs help.' },
        { ref: '8.2', q: 'A patient is about to see her mastectomy incision for the first time in the hospital. What should the nurse do?', o: ['Remove the dressing quickly to get it over with', 'Ask who she would like present and offer emotional support', 'Tell her not to look until healed', 'Show her photos of other incisions first'], a: 1, why: 'Seeing the site can be emotional. Ask who she wants present, support her, and reassure her the scar and appearance improve over time.' },
        { ref: '8.2', q: 'How long is a patient typically advised to wait after breast cancer treatment before trying to conceive?', o: ['3 months', '6 months', 'At least 2 years', '10 years'], a: 2, why: 'Waiting at least 2 years lets providers detect early recurrence before pregnancy.' },
        { ref: '8.2', q: 'A competent patient with stage 3 breast cancer refuses chemotherapy after thorough teaching. What is the nurse’s best action?', o: ['Insist she reconsider before leaving', 'Inform the provider, document the teaching and support her autonomy', 'Contact her family to override the decision', 'Withhold the surgery appointment'], a: 1, why: 'A competent adult can refuse. The nurse advocates by supporting autonomy, informing the provider and documenting all teaching.' },
    ],
});
