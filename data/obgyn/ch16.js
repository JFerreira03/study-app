STUDY.addChapter('obgyn', {
    n: 16,
    intro: `<p>During labor the fetus is assessed by the <strong>fetal heart rate (FHR) response to uterine contractions (UC)</strong>, using intermittent auscultation or continuous electronic fetal monitoring (EFM), chosen by protocol, provider orders and the patient’s preferences. Nurses can be certified in fetal monitoring (NCC) and must recognize when <strong>intrauterine resuscitation</strong> is needed. {{Chapter intro · p. 695}}</p>
<div class="callout memo"><span class="callout-title">Memory aid: VEAL CHOP</span><p><strong>V</strong>ariable → <strong>C</strong>ord compression · <strong>E</strong>arly → <strong>H</strong>ead compression · <strong>A</strong>ccelerations → <strong>O</strong>K (oxygenated) · <strong>L</strong>ate → <strong>P</strong>lacental (uteroplacental) insufficiency. Classic mnemonic, consistent with the book’s causes.</p></div>`,
    sections: {
        '16.1': {
            key: [
                '<strong>Baseline</strong> = mean FHR over 10 min (rounded to 5 bpm), excluding periodic changes: normal <strong>110–160</strong>. <strong>Tachycardia &gt; 160</strong> for 10 min (most often <strong>maternal fever</strong>); <strong>bradycardia &lt; 110</strong> for 10 min.',
                '<strong>Variability</strong> (sympathetic/parasympathetic push-pull, intact CNS): <strong>absent</strong> (flat) · <strong>minimal ≤ 5</strong> · <strong>moderate 6–25 (normal, well oxygenated)</strong> · <strong>marked &gt; 25</strong>. <strong>Sinusoidal</strong> = smooth waves 3–5/min (fetal anemia).',
                '<strong>Accelerations</strong>: abrupt (onset to peak &lt; 30 s) rise <strong>≥ 15 bpm × ≥ 15 s</strong> (≥ 32 wk) or 10 × 10 (&lt; 32 wk), &lt; 2 min = <strong>reassuring</strong>.',
                '<strong>Early</strong> decels mirror the contraction (<strong>head compression</strong>, normal). <strong>Late</strong> decels start after the contraction begins, nadir after its peak (<strong>uteroplacental insufficiency</strong>: tachysystole, epidural hypotension). <strong>Variable</strong>: abrupt, V/W-shaped, any timing (<strong>cord compression</strong>). <strong>Prolonged</strong>: ≥ 15 bpm for <strong>2–10 min</strong>.',
                'UCs: <strong>frequency</strong> = start to start; <strong>duration</strong> = start to end; <strong>intensity</strong> by palpation or IUPC (mm Hg). Normal ≤ 5 contractions/10 min.',
                '<strong>Terbutaline</strong> 0.25 mg SQ (max 1 mg/4 h) relaxes the uterus; <strong>hold if maternal pulse &gt; 120</strong>; raises maternal and fetal HR.',
            ],
            html: `
<p><strong>FHR</strong> = heart rate and rhythm of the fetus; <strong>UC</strong> = tightening and shortening of the uterine muscle. With continuous monitoring the nurse evaluates <strong>baseline, variability, accelerations and decelerations</strong>. {{p. 696}}</p>

<h3>FHR baseline {{p. 696}}</h3>
<ul>
    <li>Average bpm in a <strong>10-minute</strong> segment, excluding periodic changes and marked variability; documented in <strong>5-bpm increments</strong>. Normal <strong>110–160 bpm</strong>.</li>
    <li>Sympathetic system ↑ FHR; parasympathetic ↓ FHR; chemoreceptors respond to hypoxia and hypercapnia.</li>
</ul>
<table>
    <thead><tr><th></th><th>Tachycardia (&gt; 160 for 10 min) {{Table 16.1 · p. 698}}</th><th>Bradycardia (&lt; 110 for 10 min) {{Table 16.2 · p. 699}}</th></tr></thead>
    <tbody>
        <tr><td>Maternal causes</td><td><strong>Fever/infection</strong> (most common), anxiety, <strong>dehydration</strong>, drugs (<strong>atropine, terbutaline</strong>), hyperthyroidism, nicotine</td><td>Anesthesia, <strong>hypotension</strong>, recording the <strong>maternal pulse</strong> by mistake, drugs (<strong>magnesium sulfate, propranolol</strong>), hypoglycemia, hypothermia, <strong>uterine rupture</strong>, <strong>abruption</strong>, hypothyroidism</td></tr>
        <tr><td>Fetal causes</td><td>Hypoxia/compromise, anemia, infection, <strong>prematurity</strong>, arrhythmia</td><td>Head compression (OP/OT position), <strong>congenital heart block</strong>, hypoxia, prolonged <strong>cord compression</strong></td></tr>
        <tr><td>Note</td><td>Not fetal distress by itself without decelerations</td><td>Distinguish benign brady from a prolonged deceleration. First actions: <strong>reposition, IV bolus, notify the provider</strong></td></tr>
    </tbody>
</table>
<div class="callout memo"><span class="callout-title">Pharmacology: terbutaline {{p. 700}}</span><p>Beta-2 agonist tocolytic: relaxes the uterus for preterm labor, <strong>tachysystole</strong>, prolonged deceleration. <strong>0.25 mg SQ every 20–30 min, max 1 mg/4 h</strong>. Check maternal pulse first: <strong>&gt; 120 → don’t give</strong>. Raises FHR. Contraindicated: ischemic heart disease, HTN, arrhythmia, diabetes, seizures, hyperthyroidism. Boxed warning: not for &gt; 48–72 h (tachycardia, hyperglycemia, <strong>hypokalemia</strong>, arrhythmias, pulmonary edema, MI, death; neonatal hypoglycemia). Teach: anxiety, restlessness, fast pulse are common; report chest pain, dyspnea, pounding irregular heartbeat.</p></div>

<h3>FHR variability {{p. 700}}</h3>
<p>Beat-to-beat fluctuation from the push-pull of the autonomic systems; reflects an <strong>intact CNS</strong>. Well-oxygenated fetus → <strong>moderate</strong>; hypoxic fetus → minimal, absent or marked.</p>
<table>
    <thead><tr><th>Category</th><th>Amplitude</th><th>Meaning</th></tr></thead>
    <tbody>
        <tr><td><strong>Absent</strong></td><td>No fluctuation (flat line)</td><td>Severely compromised fetus: metabolic acidemia depresses the CNS; also maternal acidemia {{p. 702}}</td></tr>
        <tr><td><strong>Minimal</strong></td><td><strong>≤ 5 bpm</strong></td><td>Associated with acidemia, but also <strong>sleep cycles</strong>, CNS anomalies, drugs (<strong>magnesium</strong>, narcotics), <strong>prematurity</strong> {{p. 701}}</td></tr>
        <tr><td><strong>Moderate</strong></td><td><strong>6–25 bpm</strong></td><td><strong>Normal</strong>; associated with normal cord pH {{p. 700}}</td></tr>
        <tr><td><strong>Marked</strong></td><td><strong>&gt; 25 bpm</strong></td><td>Suggests hypoxia; baseline undeterminable; usually 2nd stage; assess and notify {{p. 703}}</td></tr>
        <tr><td><strong>Sinusoidal</strong></td><td>Smooth, regular waves <strong>3–5/min</strong>; variability actually absent</td><td>Fetal compromise, esp. <strong>fetal anemia</strong> from blood loss; some drugs (butorphanol) {{p. 704}}</td></tr>
    </tbody>
</table>

<h3>Periodic changes {{p. 705}}</h3>
<p>Accelerations and decelerations relative to baseline, described as abrupt or gradual.</p>
<table>
    <thead><tr><th>Change</th><th>Definition / shape</th><th>Cause and significance</th></tr></thead>
    <tbody>
        <tr><td><strong>Acceleration</strong></td><td>Abrupt rise (onset to peak &lt; 30 s), <strong>≥ 15 bpm for ≥ 15 s</strong> and &lt; 2 min (before 32 wk: 10 bpm for 10 s)</td><td>Fetal movement, contractions, scalp or acoustic stimulation. <strong>Reassuring</strong> {{p. 705}}</td></tr>
        <tr><td><strong>Early deceleration</strong></td><td><strong>Gradual</strong>, mirrors the contraction (nadir at the peak), depth proportional to contraction strength</td><td><strong>Fetal head compression</strong> → vagal response; active labor as head descends. <strong>Normal</strong> {{p. 706}}</td></tr>
        <tr><td><strong>Late deceleration</strong></td><td><strong>Gradual</strong>, begins during the contraction, <strong>nadir after the peak</strong>, returns after the contraction ends; repetitive</td><td><strong>Uteroplacental insufficiency</strong>: <strong>tachysystole</strong> (oxytocin), epidural/spinal <strong>hypotension</strong>, HTN, postmature placenta, abruption, anemia. <strong>Nonreassuring</strong>, almost always hypoxia {{p. 707}}</td></tr>
        <tr><td><strong>Variable deceleration</strong></td><td><strong>Abrupt</strong>, ≥ 15 bpm × ≥ 15 s (&lt; 2 min); <strong>V, U or W</strong> shape; variable onset, depth, duration, with or without contractions</td><td><strong>Umbilical cord compression</strong> (fetal part against the uterine wall, movement, oligohydramnios). Repetitive → hypoxia {{p. 708}}</td></tr>
        <tr><td><strong>Prolonged deceleration</strong></td><td>≥ 15 bpm below baseline lasting <strong>2–10 minutes</strong>; isolated</td><td>Uterine hyperactivity, cord compression, hypotension, abruption, seizure, imminent birth. Deeper/longer = more hypoxia; afterward ↓ variability + tachycardia = significant hypoxic event {{p. 709}}</td></tr>
    </tbody>
</table>

<h3>Contraction terminology and the monitor grid {{p. 710}}</h3>
<ul>
    <li><strong>Frequency</strong> = beginning of one contraction to the beginning of the next (minutes). <strong>Duration</strong> = beginning to end (seconds). <strong>Intensity</strong> = strength.</li>
    <li>Paper: dark vertical lines = <strong>1 minute</strong>, light lines = <strong>10 seconds</strong>. Upper grid = FHR in bpm (10-bpm lines); lower grid = UC pressure in <strong>mm Hg</strong> (5–10 mm Hg lines). {{p. 711}}</li>
</ul>
<div class="callout warn"><span class="callout-title">Ethics: monitoring a nonviable fetus {{p. 711}}</span><p>Trisomy 18 (Edwards syndrome; ~1 in 3,315 births): growth restriction, heart defects; most die before birth or within the first month. Discuss how (or whether) to monitor in labor, what the parents need to know for an informed choice, and how to support their decision.</p></div>`,
        },
        '16.2': {
            key: [
                '<strong>Intermittent auscultation (IA)</strong> with fetoscope (≥ 20 wk) or Doppler; listen before, during and after a contraction; <strong>check maternal pulse</strong> at the same time. AWHONN: latent and active phase every <strong>15–30 min</strong>; 2nd stage passive every <strong>15 min</strong>; active pushing every <strong>5–15 min</strong>.',
                'IA pros: freedom of movement, shower/bath. Cons: needs <strong>1:1 nursing</strong>, no permanent record. Palpation: mild = cheek, moderate = nose tip, strong = forehead.',
                'External EFM: <strong>ultrasound transducer over the fetal back</strong> (found by Leopold’s); <strong>toco on the fundus</strong>. Pros: easy, recorded, central monitoring, any membrane status. Cons: signal loss with movement, limits mobility, <strong>toco can’t measure intensity</strong>.',
                'Internal: <strong>FSE</strong> (most accurate FHR, avoid fontanelles) and <strong>IUPC</strong> (strength in mm Hg, resting tone). Require <strong>ruptured membranes and a dilated cervix</strong>; ↑ infection and injury risk.',
                'Normal uterine activity ≤ <strong>5 contractions in 10 min</strong> (averaged over 30 min). <strong>Tachysystole</strong> &gt; 5 in 10 min or contractions ≥ 2 min. <strong>Montevideo units</strong> = sum of (peak − resting tone) over 10 min (IUPC only).',
                '<strong>NICHD categories</strong>: I normal · II indeterminate (everything else) · III abnormal (absent variability with recurrent lates, recurrent variables or bradycardia; or sinusoidal) → intrauterine resuscitation, expedite birth.',
            ],
            html: `
<p>Three methods: <strong>intermittent auscultation</strong>, <strong>continuous external</strong> and <strong>continuous internal</strong> monitoring. Offering a choice when appropriate supports shared decision making. {{p. 711}}</p>

<h3>Intermittent auscultation (IA) {{p. 712}}</h3>
<ul>
    <li>Listen to and count the FHR for a set time at set intervals by stage; palpate contraction frequency, duration, intensity. Listen <strong>before, during and after</strong> a contraction.</li>
    <li><strong>Fetoscope</strong> (bone conduction; usable after <strong>20 weeks</strong>) or handheld <strong>Doppler</strong>. Always take the <strong>maternal pulse simultaneously</strong> to be sure it’s the fetus.</li>
</ul>
<h4>Leopold’s maneuvers to place the device {{p. 712}}</h4>
<p>Explain, lower the HOB, patient supine. FHR is loudest over the <strong>fetal back</strong>: lower abdomen → likely vertex; above the umbilicus → likely breech.</p>
<ol>
    <li>Facing the patient, palpate the <strong>fundus</strong>: hard, round, mobile = head (noncephalic); larger, softer = buttocks. {{p. 713}}</li>
    <li>Hands slide to the <strong>sides</strong>: smooth long back vs. small “bumpy” extremities → lie and back location.</li>
    <li>“C” grip above the pubis → <strong>presenting part</strong>; movable = not engaged.</li>
    <li>Facing the patient’s feet, palpate down to the pubis → <strong>descent and attitude</strong> (brow not palpable if well flexed and engaged).</li>
</ol>
<table>
    <thead><tr><th>Latent (4–5 cm)</th><th>Active (≥ 6 cm)</th><th>2nd stage, passive descent</th><th>2nd stage, active pushing {{Table 16.3 · p. 714}}</th></tr></thead>
    <tbody><tr><td>Every 15–30 min</td><td>Every 15–30 min</td><td>Every 15 min</td><td>Every 5–15 min</td></tr></tbody>
</table>
<ul>
    <li>Palpate contractions with a hand on the fundus: <strong>mild = like the cheek</strong>, <strong>moderate = tip of the nose</strong>, <strong>strong = forehead</strong>.</li>
    <li><strong>Advantages</strong>: freedom of movement (walk, shower, ball, bath), rest without belts. <strong>Disadvantages</strong>: <strong>1:1 staffing</strong>, no tracing (permanent record, communication).</li>
</ul>

<h3>Continuous external monitoring {{p. 714}}</h3>
<ul>
    <li>Most common: <strong>ultrasound transducer</strong> (FHR) + <strong>tocodynamometer</strong> (UC frequency/duration), held by belts or adhesive; wireless and waterproof versions allow walking and hydrotherapy. Signal can be lost with movement: patient calls the nurse. {{p. 715}}</li>
    <li>Indications for continuous monitoring: <strong>meconium</strong>, multiples, <strong>preeclampsia</strong>, <strong>epidural/spinal</strong>, dysfunctional labor.</li>
    <li><strong>Ultrasound transducer</strong>: with gel, over the <strong>fetal back near the head</strong>, not the chest (limb movement interferes).</li>
    <li><strong>Toco</strong>: where the <strong>fundus</strong> is firmest (over the fetal buttocks in cephalic presentation).</li>
    <li><strong>Advantages</strong>: easy, digital storage, central monitoring of several patients (no 1:1 needed), usable with intact membranes and any dilation. <strong>Disadvantages</strong>: signal loss, limits movement/hydrotherapy (unless wireless), <strong>toco can’t measure strength</strong> (palpate). {{p. 716}}</li>
</ul>

<h3>Continuous internal monitoring {{p. 716}}</h3>
<ul>
    <li><strong>Fetal scalp electrode (FSE)</strong> → exact FHR; <strong>intrauterine pressure catheter (IUPC)</strong> → frequency, duration, <strong>strength and resting tone</strong> in mm Hg.</li>
    <li>Requires <strong>ruptured membranes</strong> and a <strong>dilated cervix</strong>. If intact, the provider weighs <strong>amniotomy</strong> (amniotomy hook). Indications: nonreassuring FHR, low fluid, hard-to-trace FHR, oxytocin/uterotonics. {{p. 717}}</li>
    <li><strong>FSE placement</strong>: head low enough to palpate; feel sutures and fontanelles; <strong>avoid fontanelles</strong>; press on bone and turn <strong>clockwise</strong>. {{p. 717}}</li>
    <li><strong>IUPC</strong>: plastic introducer with depth markers (avoid uterine perforation); <strong>withdraw immediately if frank red blood</strong> (possible placental insertion). {{p. 718}}</li>
    <li><strong>Advantages</strong>: most precise FHR (variability, exact timing of decels vs. contraction strength), no signal loss, IUPC guides oxytocin when labor isn’t progressing. <strong>Disadvantages</strong>: <strong>infection</strong> (ROM, broken fetal skin), injury to fetus, <strong>uterine or placental perforation</strong>. {{p. 719}}</li>
    <li>Evidence (Cochrane): continuous EFM vs. IA → <strong>fewer neonatal seizures</strong>, but no change in fetal death or cerebral palsy.</li>
</ul>
<table>
    <thead><tr><th>Type</th><th>Advantages</th><th>Disadvantages {{Table 16.4 · p. 719}}</th></tr></thead>
    <tbody>
        <tr><td>IA</td><td>Mobility, shower/bath, any membrane status</td><td>1:1 nursing, no permanent record</td></tr>
        <tr><td>External</td><td>Easy, recorded/stored, readable anywhere, any membrane status</td><td>Signal loss, limits movement, toco gives no UC strength</td></tr>
        <tr><td>Internal</td><td>Precise FHR and UC, no signal loss, IUPC guides oxytocin</td><td>Membranes must be ruptured, ↑ infection, injury from FSE/IUPC</td></tr>
    </tbody>
</table>

<h3>Interpreting uterine activity {{p. 719}}</h3>
<ul>
    <li>Strength: palpation (mild/moderate/strong) with a toco; mm Hg with an IUPC. {{p. 720}}</li>
    <li><strong>Normal</strong>: ≤ <strong>5 contractions in 10 minutes</strong>, lasting <strong>45–60 s</strong> (up to 90 s near the 2nd stage).</li>
    <li><strong>Tachysystole</strong>: &gt; 5 contractions in 10 minutes (averaged over 30 min) or contractions lasting <strong>≥ 2 minutes</strong>; spontaneous or induced.</li>
    <li><strong>Montevideo units (MVU)</strong>: for each contraction in 10 minutes, peak mm Hg − resting tone; add them. IUPC only.</li>
</ul>

<h3>Three-tier FHR classification (NICHD 2008) {{Figure 16.25 · p. 721}}</h3>
<table>
    <thead><tr><th>Category</th><th>Criteria</th><th>Action</th></tr></thead>
    <tbody>
        <tr><td><strong>I (normal)</strong></td><td>Baseline 110–160, <strong>moderate variability</strong>, no late or variable decels; early decels and accels may or may not be present</td><td>Routine care</td></tr>
        <tr><td><strong>II (indeterminate)</strong></td><td>Anything not I or III: e.g., tachycardia, minimal or marked variability, absent variability without recurrent decels, recurrent variables with moderate variability, prolonged decel, no accels after stimulation</td><td>Surveillance, consider clinical picture, reevaluate, notify provider; no accels/no moderate variability → intrauterine resuscitation</td></tr>
        <tr><td><strong>III (abnormal)</strong></td><td><strong>Absent variability</strong> with recurrent lates, recurrent variables or bradycardia; or <strong>sinusoidal</strong> pattern</td><td>Notify the provider, intrauterine resuscitation, <strong>expedite birth</strong> (often cesarean) {{p. 721}}</td></tr>
    </tbody>
</table>

<h3>Documentation {{p. 722}}</h3>
<ul>
    <li>Evaluate and document FHR and UC <strong>every 15–30 minutes</strong> with continuous monitoring (per policy); document fetal status <strong>before and after each oxytocin increase</strong>.</li>
    <li>Steps: (1) external or internal; (2) baseline rate and variability; (3) accels/decels; (4) type of decel; (5) UC frequency, duration, intensity, resting tone; (6) <strong>Category I, II or III</strong>; (7) plan of care, communication with family and provider, new orders. {{p. 723}}</li>
</ul>
<div class="callout nurse"><span class="callout-title">QSEN: managing uterine tachysystole {{p. 723}}</span>
<table>
    <thead><tr><th>With nonreassuring FHR</th><th>With reassuring FHR</th></tr></thead>
    <tbody><tr>
        <td>1. <strong>Discontinue oxytocin</strong><br>2. Lateral position<br>3. IV bolus <strong>500 mL lactated Ringer’s</strong><br>4. O<sub>2</sub> by mask 8–10 L/min<br>5. <strong>Terbutaline 0.25 mg SQ</strong></td>
        <td>1. Reposition (left or right lateral)<br>2. IV bolus 500 mL LR<br>3. Not normal after 10 min → <strong>halve oxytocin</strong>; still not normal after 10 more min → stop it until ≤ 5 in 10 min<br>4. Notify the provider<br>5. Terbutaline ready<br>6. Resolved in &lt; 30 min → restart at ½ previous rate; &gt; 30 min → restart at previous rate</td>
    </tr></tbody>
</table></div>`,
        },
        '16.3': {
            key: [
                'Three principles of patient safety: (1) variable, late or prolonged decels = interrupted O<sub>2</sub> pathway; (2) <strong>moderate variability and/or accelerations reliably exclude metabolic acidemia</strong>; (3) neurologic injury needs significant acidemia (cord artery pH &lt; 7.0, base deficit &gt; 12).',
                '<strong>Uteroplacental insufficiency</strong>: chronic (HTN, diabetes, smoking, preeclampsia, previa, abruption) → FGR and hypoxia; intrapartum: <strong>epidural/spinal hypotension, supine position, uterine hyperstimulation</strong> (oxytocin, misoprostol), abruption, rupture.',
                'FHR response to insufficiency: variability falls moderate → minimal → absent; <strong>late</strong> and prolonged decels.',
                'Nervous system maturation <strong>lowers the baseline</strong> over gestation; hypoxia → bradycardia. Heart block → bradycardia; arrhythmias → tachycardia/“spiking”.',
                '<strong>Fetal reserve</strong> = ability to tolerate and recover from intermittent hypoxia between contractions; lower in <strong>FGR/preeclampsia</strong>. Minimal/absent variability, lates, prolonged decels = reserve depleted.',
            ],
            html: `
<p>Influences: maternal (position, BP, oxygenation, medications), fetal (nuchal cord, hypoxia, cord entanglement, movement), and uterotonics such as oxytocin. {{p. 724}}</p>
<div class="callout tip"><span class="callout-title">Three principles of patient safety {{p. 724}}</span><p><strong>1.</strong> Variable, late or prolonged decelerations show an <strong>interruption of the oxygen pathway</strong> from the environment to the fetus. <strong>2.</strong> <strong>Moderate variability and/or accelerations</strong> reliably indicate <strong>no metabolic acidemia</strong>. <strong>3.</strong> Fetal neurologic injury doesn’t occur unless the interruption progresses to significant metabolic acidemia (umbilical artery pH &lt; 7.0, base deficit &gt; 12 mmol/L).</p></div>

<h3>Uteroplacental insufficiency {{p. 724}}</h3>
<ul>
    <li>Disrupted delivery of O<sub>2</sub> and nutrients from the placenta. Chronic causes degrade the placenta: <strong>hypertension, obesity, diabetes</strong>, thyroid disease, clotting disorders, <strong>smoking</strong>, substance misuse; <strong>preeclampsia</strong>, GDM, previa, abruption, malnutrition, fetal anomalies → <strong>FGR and hypoxia</strong>.</li>
    <li><strong>Intrapartum causes</strong>: <strong>hypotension after epidural/spinal</strong> (vasodilation; the placenta needs pressure to transfer O<sub>2</sub>) and <strong>supine position</strong>; <strong>uterine hyperstimulation</strong> (frequent contractions with oxytocin or <strong>misoprostol</strong>); catastrophic <strong>abruption or uterine rupture</strong> → prolonged decels, overt or concealed bleeding.</li>
    <li><strong>FHR response</strong>: variability ↓ from moderate → minimal → absent; <strong>late</strong> decelerations; <strong>prolonged</strong> decelerations. Pathologic, need intervention. {{p. 725}}</li>
</ul>
<div class="callout tip"><span class="callout-title">Real RN story {{p. 725}}</span><p>Category II with minimal variability for 30 min → left side, oxytocin stopped, LR bolus, BP checked; 15 min later repetitive lates (Category III) → provider called, cesarean prepared, and the partner still cut the cord as planned. Honoring the birth plan in an emergency matters.</p></div>

<h3>Fetal nervous and cardiovascular systems {{p. 725}}</h3>
<ul>
    <li>The autonomic nervous system regulates HR. Early in gestation FHR may be &gt; 160; as the nervous system <strong>matures the baseline slows</strong> to 110–160. Hypoxia → bradycardia.</li>
    <li>Poor perfusion → fetal bradycardia. Congenital disease: <strong>heart block → bradycardia</strong>; <strong>arrhythmias → tachycardia</strong> (and “spiking” on an FSE).</li>
</ul>

<h3>Fetal reserve {{p. 725}}</h3>
<ul>
    <li>The fetus’s capacity to tolerate normal intermittent interruptions in oxygenation and <strong>recover</strong> between contractions.</li>
    <li>Initially compensates; if the insult continues, reserve is depleted → severe acidosis, cardiovascular decompensation, brain damage. May last hours if mild or brief.</li>
    <li>Chronic insufficiency (e.g., <strong>preeclampsia</strong>, <strong>FGR</strong>) = <strong>less reserve</strong>, faster decompensation. Minimal-to-absent variability, lates or prolonged decels signal little or no reserve.</li>
</ul>`,
        },
        '16.4': {
            key: [
                'First confirm you’re recording the <strong>fetal</strong>, not maternal, HR: compare the maternal radial pulse, add maternal SpO<sub>2</sub> to the strip, use an FSE or bedside US.',
                '<strong>Bradycardia</strong>: stop oxytocin (or reposition first if none), <strong>vaginal exam for prolapsed cord</strong> or rapid descent, notify the provider, intrauterine resuscitation. <strong>Prolapsed cord: lift the presenting part off the cord and hold until cesarean</strong>.',
                '<strong>Tachycardia</strong>: look for <strong>maternal fever</strong> (&gt; 100.4 °F → notify; antibiotics, antipyretics), dehydration (fluids), anemia, hyperthyroidism; consider stopping oxytocin.',
                'Decreased variability from <strong>narcotics, magnesium, corticosteroids, cocaine</strong> is transient. Marked variability after a hypoxic event (seizure, cord compression) → prevent seizures, give O<sub>2</sub>, relieve compression.',
                'Decels: <strong>variable</strong> → reposition, stop oxytocin, check for prolapse, consider <strong>amnioinfusion</strong>. <strong>Early</strong> → vaginal exam, prepare for birth. <strong>Late</strong> → stop oxytocin, <strong>left lateral</strong>, fluid bolus, ± terbutaline, notify. <strong>Prolonged</strong> → all of the above + check for prolapse.',
                'Category I: routine. Category II: evaluate accels and variability; resuscitate if absent. Category II that doesn’t respond → III. Category III: resuscitate and <strong>expedite birth</strong>.',
            ],
            html: `
<p>Determine the cause of the tracing abnormality, then use interventions aimed at that cause. {{p. 726}}</p>
<div class="callout warn"><span class="callout-title">Fetal or maternal heart rate? {{p. 726}}</span><p>Signal ambiguity is common. Compare the <strong>maternal radial pulse</strong> with the monitor sound, put a <strong>pulse oximeter</strong> on the patient so the maternal HR prints on the strip, apply an <strong>FSE</strong>, or do a <strong>bedside ultrasound</strong>.</p></div>

<h3>Abnormal baseline {{p. 726}}</h3>
<p>Baseline 110–160 with moderate variability is one of the most reliable signs of adequate oxygenation. Drug-related changes (narcotics, magnesium, terbutaline) resolve as the drug clears; monitor closely.</p>
<ul>
    <li><strong>Bradycardia (&lt; 110 for &gt; 10 min)</strong>: urgent; find the cause.
        <ul>
            <li><strong>Prolapsed cord</strong>: insert two fingers, locate the presenting part and <strong>lift it off the cord</strong>; <strong>hold until cesarean birth</strong>.</li>
            <li><strong>Abruption, uterine rupture</strong>: concealed hemorrhage shows in the FHR/UC pattern → immediate cesarean.</li>
            <li><strong>Tachysystole</strong> depletes reserve → <strong>stop oxytocin</strong>, give <strong>terbutaline</strong>.</li>
            <li>Covert causes: (1) <strong>reposition</strong> (or stop oxytocin first if running), (2) <strong>cervical exam</strong> for prolapse or rapid descent, (3) <strong>notify</strong> the provider while starting intrauterine resuscitation.</li>
        </ul>
    </li>
    <li><strong>Tachycardia (&gt; 160)</strong>: most common cause is <strong>maternal fever</strong>; temp &gt; <strong>100.4 °F (38 °C)</strong> → notify (antibiotics, antipyretics). Epidurals can cause slight temperature rise (inflammation, shivering). Check <strong>I&amp;O</strong> for dehydration (oral fluids or IV bolus); review history for anemia or hyperthyroidism. Fetal causes: prematurity, prolonged labor stress, infection, hypoxia, anemia. Consider stopping oxytocin; if unresolved, call the provider. {{p. 727}}</li>
</ul>

<h3>Abnormal variability {{p. 727}}</h3>
<ul>
    <li>Variability is the <strong>best determinant of fetal oxygenation</strong>. Transient, nonpathologic decreases: <strong>narcotics, cocaine, corticosteroids, magnesium sulfate</strong>; <strong>butorphanol (Stadol)</strong> can cause a sinusoidal-looking pattern. No intervention needed for drug effects.</li>
    <li><strong>Marked variability</strong> is rare, mostly in the 2 hours before birth, usually after an oxygenation insult (<strong>maternal seizure</strong>, <strong>cord compression</strong>); linked to neonatal respiratory distress. Prevent seizures, give O<sub>2</sub> after a seizure, relieve cord compression.</li>
</ul>

<h3>Decelerations {{Table 16.5 · p. 727}}</h3>
<table>
    <thead><tr><th>Deceleration</th><th>Cause</th><th>Interventions</th></tr></thead>
    <tbody>
        <tr><td><strong>Variable</strong></td><td>Cord compression; oligohydramnios</td><td>Change position · stop oxytocin · terbutaline if tachysystole · <strong>vaginal exam</strong> for prolapsed cord or rapid descent · consider <strong>amnioinfusion</strong> · notify provider</td></tr>
        <tr><td><strong>Early</strong></td><td>Head compression; vagal response</td><td>Vaginal exam (dilation, station, position) · <strong>prepare for birth</strong></td></tr>
        <tr><td><strong>Late</strong></td><td>Uteroplacental insufficiency</td><td><strong>Stop oxytocin</strong> · terbutaline if tachysystole · <strong>left lateral</strong> · fluid bolus for hypotension · notify provider {{p. 728}}</td></tr>
        <tr><td><strong>Prolonged</strong></td><td>Cord compression, insufficiency, fetal hemorrhage, vagal reaction, CNS anomalies</td><td>Stop oxytocin · terbutaline if tachysystole · change position · <strong>check for prolapsed cord</strong> · ↑ IV fluids · notify provider</td></tr>
    </tbody>
</table>

<h3>Interventions by category {{p. 728}}</h3>
<ul>
    <li><strong>Category I</strong>: normal, no intervention.</li>
    <li><strong>Category II</strong>: hardest to manage; look for <strong>accelerations and moderate variability</strong>. If absent → <strong>intrauterine resuscitation</strong>. Not responding → becomes Category III.</li>
    <li><strong>Category III</strong>: implies fetal hypoxia → intrauterine resuscitation and <strong>expedite birth</strong>.</li>
</ul>
<div class="callout tip"><span class="callout-title">When interventions don’t happen {{p. 728}}</span><p>If a nonreassuring tracing wasn’t acted on, whatever the outcome, the team reviews it for <strong>quality improvement</strong> (staffing, equipment problems). The aim is to find contributing factors and prevent recurrence, not to assign blame.</p></div>`,
        },
        '16.5': {
            key: [
                '<strong>Intrauterine resuscitation</strong> = interventions that increase O<sub>2</sub> to the placenta and cord to reverse fetal hypoxia.',
                'Responds best to: <strong>late decelerations</strong>, <strong>prolonged decelerations</strong>, <strong>minimal or absent variability</strong>.',
                'Steps: (1) <strong>stop oxytocin</strong> (always first when it’s running) · (2) <strong>lateral position</strong> (left or right) · (3) <strong>IV fluid bolus</strong> · (4) <strong>O<sub>2</sub> 10 L/min non-rebreather</strong> if maternal SpO<sub>2</sub> is low · (5) <strong>terbutaline</strong> for tachysystole or high resting tone.',
                'Call for help to do the steps fast and <strong>notify the provider</strong>; success = return of moderate variability/accelerations and resolution of decels.',
            ],
            html: `
<p>For tracings associated with fetal hypoxia, the nurse restores oxygenation with <strong>intrauterine resuscitation</strong>: interventions that increase oxygen to the placenta and umbilical cord. {{p. 729}}</p>
<h3>Patterns that respond {{p. 729}}</h3>
<ul>
    <li><strong>Late decelerations</strong> (uteroplacental insufficiency): ↑ blood flow to the placenta resolves them.</li>
    <li><strong>Prolonged decelerations</strong> (disrupted O<sub>2</sub> transport): restore transport.</li>
    <li><strong>Minimal and absent variability</strong>.</li>
</ul>
<h3>Steps {{p. 729}}</h3>
<table>
    <thead><tr><th>Intervention</th><th>Rationale</th></tr></thead>
    <tbody>
        <tr><td>1. <strong>Discontinue oxytocin</strong></td><td>Fewer contractions → time to reoxygenate (priority whenever oxytocin is running)</td></tr>
        <tr><td>2. <strong>Left or right lateral position</strong></td><td>Relieves supine hypotension (vena cava compression); ↑ placental perfusion</td></tr>
        <tr><td>3. <strong>IV fluid bolus</strong></td><td>Corrects hypotension, ↑ perfusion</td></tr>
        <tr><td>4. <strong>O<sub>2</sub> 10 L/min by non-rebreather</strong></td><td>When maternal O<sub>2</sub> saturation is low</td></tr>
        <tr><td>5. <strong>Terbutaline</strong></td><td>Relaxes the uterus: elevated resting tone or <strong>tachysystole</strong></td></tr>
    </tbody>
</table>
<p>Call for assistance so steps happen quickly, and notify the provider. Reassess the tracing to judge success; if no response, prepare for expedited birth. {{p. 729}}</p>`,
        },
    },
    terms: [
        ['absent FHR variability', 'no fluctuation of the FHR baseline'],
        ['accelerations', 'abrupt FHR increases of ≥ 15 bpm lasting ≥ 15 seconds (10 × 10 before 32 weeks)'],
        ['bradycardia', 'FHR baseline < 110 bpm for more than 10 minutes'],
        ['contraction frequency', 'time from the beginning of one contraction to the beginning of the next'],
        ['contraction length', 'time from the beginning to the end of a contraction'],
        ['contraction strength', 'intensity of a contraction, by palpation or IUPC'],
        ['early decelerations', 'gradual, symmetrical FHR declines mirroring the contraction'],
        ['fetal heart rate (FHR)', 'heart rate and rhythm of the fetus'],
        ['fetal reserve', 'fetal capacity to tolerate normal intermittent interruptions in oxygenation in labor and recover'],
        ['fetal scalp electrode (FSE)', 'electrode attached to the fetal scalp for precise FHR monitoring'],
        ['FHR baseline', 'average bpm over 10 minutes excluding periodic changes and marked variability'],
        ['FHR variability', 'beat-to-beat fluctuations in the FHR baseline'],
        ['intermittent auscultation (IA)', 'listening to and counting the FHR at set intervals depending on the stage of labor'],
        ['intrauterine pressure catheter (IUPC)', 'catheter between uterus and fetus measuring exact uterine pressure at rest and in contractions'],
        ['intrauterine resuscitation', 'interventions increasing oxygen to the placenta and cord to reverse fetal hypoxia'],
        ['late decelerations', 'gradual FHR decreases starting after contraction onset, returning after the contraction ends'],
        ['marked FHR variability', 'baseline fluctuation greater than 25 bpm'],
        ['minimal FHR variability', 'baseline fluctuation of 5 bpm or less'],
        ['moderate FHR variability', 'baseline fluctuation of 6 to 25 bpm'],
        ['Montevideo unit', 'measure of contraction strength via IUPC: sum of peak minus resting tone over 10 minutes'],
        ['periodic changes in the FHR', 'accelerations and decelerations relative to the baseline'],
        ['prolonged decelerations', 'decelerations ≥ 15 bpm lasting 2 to 10 minutes'],
        ['sinusoidal pattern', 'smooth, regular wave-like FHR (3–5 cycles/min) with absent variability; fetal anemia'],
        ['tachycardia', 'FHR baseline greater than 160 bpm'],
        ['tachysystole', 'more than 5 contractions in 10 minutes (averaged over 30 min) or contractions lasting 2 minutes or more'],
        ['tocodynamometer', 'external device detecting the frequency of uterine contractions'],
        ['uterine contraction (UC)', 'tightening and shortening of the uterine muscles'],
        ['uteroplacental insufficiency', 'disrupted delivery of oxygen and nutrients from the placenta to the fetus'],
        ['variable decelerations', 'abrupt FHR drops ≥ 15 bpm lasting ≥ 15 seconds and < 2 minutes, regardless of contractions'],
    ],
    cards: [
        { f: 'What do baseline characteristics tell the nurse about fetal oxygenation?', b: 'A baseline of 110–160 with moderate variability (6–25) and accelerations indicates a well-oxygenated fetus without metabolic acidemia. Minimal/absent/marked variability, bradycardia or tachycardia suggest possible hypoxia or other stress.', ref: '16.1' },
        { f: 'Which decelerations are caused by cord compression?', b: 'Variable decelerations (and many prolonged decelerations, e.g., with cord prolapse).', ref: '16.1' },
        { f: 'Variability categories', b: 'Absent: flat\nMinimal: ≤ 5 bpm\nModerate: 6–25 bpm (normal)\nMarked: > 25 bpm\nSinusoidal: smooth regular waves 3–5/min (fetal anemia).', ref: '16.1' },
        { f: 'Early vs. late vs. variable decelerations', b: 'Early: gradual, mirrors contraction, head compression (benign).\nLate: gradual, nadir after the contraction peak, uteroplacental insufficiency.\nVariable: abrupt V/W, any timing, cord compression.', ref: '16.1' },
        { f: 'Causes of fetal tachycardia', b: 'Maternal fever/infection (most common), dehydration, anxiety, terbutaline/atropine, hyperthyroidism, nicotine; fetal hypoxia, anemia, infection, prematurity, arrhythmia.', ref: '16.1' },
        { f: 'Causes of fetal bradycardia', b: 'Maternal hypotension, anesthesia, Mg sulfate/propranolol, hypoglycemia, hypothermia, uterine rupture, abruption, hypothyroidism, recording maternal pulse; fetal head compression (OP), heart block, hypoxia, prolonged cord compression.', ref: '16.1' },
        { f: 'Advantages and disadvantages of intermittent auscultation', b: '+ Freedom of movement, shower/bath, any membrane status.\n− Requires 1:1 nursing, no permanent record/tracing.', ref: '16.2' },
        { f: 'Advantages and disadvantages of external EFM', b: '+ Easy, recorded/stored, central monitoring, any membrane status or dilation.\n− Signal loss with movement, limits mobility, toco can’t measure contraction strength.', ref: '16.2' },
        { f: 'Advantages and disadvantages of internal monitoring', b: '+ Most precise FHR (FSE) and contraction strength/resting tone (IUPC), no signal loss, guides oxytocin.\n− Needs ROM and dilation, ↑ infection, risk of fetal injury or uterine/placental perforation.', ref: '16.2' },
        { f: 'AWHONN intermittent auscultation intervals', b: 'Latent and active phase: every 15–30 min. 2nd stage passive descent: every 15 min. Active pushing: every 5–15 min. Listen before, during and after a contraction.', ref: '16.2' },
        { f: 'Where are external monitors placed?', b: 'Ultrasound transducer over the fetal back near the head (found by Leopold’s), not over the chest. Toco on the fundus where it’s firmest.', ref: '16.2' },
        { f: 'NICHD categories', b: 'I: 110–160, moderate variability, no lates/variables (normal).\nII: everything else (indeterminate).\nIII: absent variability with recurrent lates, recurrent variables or bradycardia; or sinusoidal (abnormal → expedite birth).', ref: '16.2' },
        { f: 'Tachysystole definition and Montevideo units', b: 'Tachysystole: > 5 contractions in 10 min (averaged over 30 min) or contractions ≥ 2 min. MVU: sum of (peak − resting tone) for each contraction in 10 min; IUPC required.', ref: '16.2' },
        { f: 'Tachysystole management with nonreassuring FHR', b: 'Stop oxytocin, lateral position, 500 mL LR bolus, O2 8–10 L/min, terbutaline 0.25 mg SQ, notify the provider.', ref: '16.2' },
        { f: 'Repetitive variable decelerations: likely cause?', b: 'Umbilical cord compression (e.g., oligohydramnios, nuchal cord, cord between fetus and uterine wall, cord prolapse).', ref: '16.3' },
        { f: 'Fetus with growth restriction: expected fetal reserve?', b: 'Decreased: chronic placental insufficiency leaves less reserve, so the fetus decompensates faster (minimal/absent variability, lates).', ref: '16.3' },
        { f: '7 contractions in 10 minutes: expected FHR change and cause', b: 'Tachysystole → late (or prolonged) decelerations from uteroplacental insufficiency (not enough recovery time between contractions).', ref: '16.3' },
        { f: 'Three principles of patient safety (FHR)', b: '1. Variable, late or prolonged decels = interrupted O2 pathway. 2. Moderate variability and/or accels reliably exclude metabolic acidemia. 3. Neurologic injury requires significant acidemia (pH < 7.0, BD > 12).', ref: '16.3' },
        { f: 'Nursing actions for a suspected prolapsed cord', b: 'Insert two gloved fingers and lift the presenting part off the cord; hold until cesarean birth; call for help/notify the provider immediately (position to relieve pressure, O2, fluids).', ref: '16.4' },
        { f: 'Nursing action for a prolonged deceleration', b: 'Stop oxytocin, terbutaline if tachysystole, reposition, vaginal exam for prolapsed cord, increase IV fluids, notify the provider (intrauterine resuscitation).', ref: '16.4' },
        { f: 'How does the nurse judge whether FHR interventions worked?', b: 'Re-evaluate the tracing: return of moderate variability and/or accelerations, resolution of decelerations, baseline back in 110–160 (Category I). No response → notify, prepare for expedited birth.', ref: '16.4' },
        { f: 'Priority step in intrauterine resuscitation when oxytocin is running', b: 'Discontinue the oxytocin infusion first.', ref: '16.5' },
        { f: 'Steps of intrauterine resuscitation', b: 'Stop oxytocin → lateral position → IV fluid bolus → O2 10 L/min non-rebreather (if SpO2 low) → terbutaline for tachysystole/high tone → notify provider.', ref: '16.5' },
    ],
    quiz: [
        { src: 'book', ref: '16.1', q: 'What is an FHR that falls within the normal baseline?', o: ['135 bpm', '95 bpm', '170 bpm', '105 bpm'], a: 0, why: 'Normal baseline is 110–160 bpm.' },
        { src: 'book', ref: '16.1', q: 'What periodic change in the FHR is associated with fetal hypoxia?', o: ['early deceleration', 'late deceleration', 'variable deceleration', 'acceleration'], a: 1, why: 'Late decelerations reflect uteroplacental insufficiency and almost always indicate hypoxia.' },
        { src: 'book', ref: '16.1', q: 'What is a reassuring pattern a nurse would see on an FHR tracing?', o: ['accelerations', 'marked variability', 'prolonged decelerations', 'absent variability'], a: 0, why: 'Accelerations indicate a well-oxygenated fetus.' },
        { src: 'book', ref: '16.1', q: 'What type of FHR decelerations are a sign of possible fetal descent?', o: ['early', 'late', 'variable', 'prolonged'], a: 0, why: 'Early decelerations come from head compression as the head descends.' },
        { src: 'book', ref: '16.2', q: 'The advantage of this type of monitoring includes more patient mobility and freedom of movement.', o: ['internal electronic monitor', 'external electronic monitor', 'intermittent auscultation', 'IUPC and scalp electrode'], a: 2, why: 'IA requires no attached monitors, allowing walking, showering and bathing.' },
        { src: 'book', ref: '16.2', q: 'Leopold’s maneuvers determine presentation and lie. What additional information do they provide?', o: ['fetal head or buttocks in the uterine fundus', 'location of the placenta', 'stage of labor', 'detection of fetal movement'], a: 0, why: 'The first maneuver identifies which part (head or buttocks) occupies the fundus.' },
        { src: 'book', ref: '16.2', q: 'What is the most accurate way to monitor the FHR?', o: ['applying a fetal scalp electrode', 'monitoring with the external ultrasound', 'using the Doppler for intermittent auscultation', 'auscultating with the fetoscope'], a: 0, why: 'The FSE receives the fetal ECG signal directly.' },
        { src: 'book', ref: '16.2', q: 'What type of monitor can measure the strength of a contraction?', o: ['fetal scalp electrode', 'intrauterine pressure catheter', 'toco', 'ultrasound'], a: 1, why: 'The IUPC measures pressure in mm Hg; the toco only gives frequency and duration.' },
        { src: 'book', ref: '16.2', q: 'A G1P0 is contracting every 5 minutes, pain 6/10, and only walking helps; lying in bed hurts more. What type of monitoring can you offer?', o: ['intermittent auscultation', 'external monitoring', 'internal monitoring', 'intrauterine pressure monitoring'], a: 0, why: 'IA allows freedom of movement for a low-risk laboring person.' },
        { src: 'book', ref: '16.3', q: 'The tracing showed moderate variability with variable decelerations for 30 minutes and now shows minimal variability between variables. Probable cause?', o: ['fetal scalp stimulation', 'loss of fetal reserve', 'fetal heart block', 'fetal arrhythmia'], a: 1, why: 'Repeated cord compression without enough recovery depletes fetal reserve, lowering variability.' },
        { src: 'book', ref: '16.3', q: 'The external monitor is hard to trace; an FSE is placed and FHR “spiking” is noted. What is the cause?', o: ['cardiac arrhythmia', 'fetal hypoxia', 'uterine rupture', 'labor dystocia'], a: 0, why: 'Spiking on an FSE tracing reflects a fetal cardiac arrhythmia.' },
        { src: 'book', ref: '16.3', q: 'As the fetal nervous system matures, how does the FHR baseline change?', o: ['FHR decreases.', 'FHR increases.', 'Marked variability occurs.', 'Minimal variability occurs.'], a: 0, why: 'Parasympathetic maturation slows the baseline into the 110–160 range.' },
        { src: 'book', ref: '16.3', q: 'The nurse sees late decelerations and finds the pregnant person lying on her back. Why should she not lie on her back?', o: ['increased risk of early decelerations', 'increased risk of back pain', 'increased risk of uteroplacental insufficiency', 'increased risk of labor dystocia'], a: 2, why: 'Supine position compresses the vena cava → hypotension → reduced placental perfusion.' },
        { src: 'book', ref: '16.3', q: 'The pregnant person recently received an epidural; BP is 90/50. What periodic change is expected?', o: ['early deceleration', 'late deceleration', 'variable deceleration', 'sinusoidal pattern'], a: 1, why: 'Epidural hypotension reduces placental perfusion → late decelerations.' },
        { src: 'book', ref: '16.2', q: 'In the three-tiered system, what characteristic does a Category II tracing have?', o: ['persistent late decelerations', 'variable decelerations with moderate variability', 'moderate variability with accelerations', 'baseline fetal heart rate of 80 bpm'], a: 1, why: 'Recurrent variables with moderate variability are indeterminate (II). Moderate variability with accels is Category I; bradycardia with absent variability or recurrent lates with absent variability is III.' },
        { src: 'book', ref: '16.4', q: 'What causes decreased FHR baseline variability?', o: ['ampicillin', 'cocaine', 'magnesium sulfate', 'terbutaline'], a: 2, why: 'Magnesium sulfate is a classic cause of decreased variability. (The book also lists cocaine, narcotics and corticosteroids; magnesium is the best-known answer.)' },
        { src: 'book', ref: '16.4', q: 'Tachycardia is noted on the FHR tracing. What intervention will the nurse initiate?', o: ['Administer antibiotics.', 'Increase oxytocin.', 'Perform fetal scalp stimulation.', 'Start an IV fluid bolus.'], a: 3, why: 'Hydrating treats dehydration, a common correctable cause; antibiotics require a provider order after fever is reported.' },
        { src: 'book', ref: '16.4', q: 'What does management of a Category III tracing include?', o: ['decreasing the oxytocin by half', 'expediting birth', 'readjusting the fetal monitor', 'increasing the magnesium sulfate'], a: 1, why: 'Category III requires intrauterine resuscitation and expedited birth if not resolved.' },
        { src: 'book', ref: '16.4', q: 'What nursing intervention should be initiated for early decelerations?', o: ['Decrease the oxytocin by half.', 'Expedite delivery.', 'Perform a vaginal exam.', 'Readjust the fetal monitor.'], a: 2, why: 'Early decels reflect head compression; check dilation, station and position and prepare for birth.' },
        { src: 'book', ref: '16.3', q: 'What is the cause of late decelerations?', o: ['descent of fetal head', 'fetal scalp stimulation', 'imminent birth', 'uteroplacental insufficiency'], a: 3, why: 'Late decelerations = uteroplacental insufficiency.' },
        { src: 'book', ref: '16.5', q: 'What is an indication for administering terbutaline?', o: ['early decelerations', 'insufficient labor pattern', 'tachysystole with decelerations in FHR', 'fetal tachycardia'], a: 2, why: 'Terbutaline relaxes the uterus in tachysystole with nonreassuring FHR; it would worsen tachycardia.' },
        { src: 'book', ref: '16.5', q: 'What is intrauterine resuscitation designed to treat?', o: ['hypertension', 'hypoglycemia', 'hyperthyroid', 'fetal hypoxia'], a: 3, why: 'It increases oxygen delivery to the placenta and cord to reverse fetal hypoxia.' },
        { src: 'book', ref: '16.5', q: 'Why does the nurse turn the laboring person to a side-lying position? Select all that apply.', o: ['to increase contractions', 'to resolve supine hypotension', 'to reverse uterine tachysystole', 'to increase placental perfusion'], a: [1, 3], why: 'Lateral positioning relieves vena cava compression and improves placental perfusion. Tachysystole is reversed by stopping oxytocin/terbutaline (repositioning is part of the protocol but doesn’t reverse it).' },
        { src: 'book', ref: '16.5', q: 'When is terbutaline appropriate during intrauterine resuscitation?', o: ['absent accelerations', 'hypotension', 'dehydration', 'tachysystole'], a: 3, why: 'Terbutaline treats tachysystole or elevated resting tone.' },

        { ref: '16.1', q: 'Over 10 minutes the FHR averages 172 bpm. The patient’s temperature is 101 °F. Interpretation?', o: ['Normal baseline', 'Fetal tachycardia, likely from maternal fever', 'Fetal bradycardia', 'Sinusoidal pattern'], a: 1, why: 'Baseline > 160 for 10 minutes = tachycardia; maternal fever is the most common cause. Notify the provider.' },
        { ref: '16.1', q: 'An FHR tracing has smooth, regular, wave-like undulations about 4 times per minute with no beat-to-beat variability. This suggests:', o: ['Moderate variability', 'Sinusoidal pattern (e.g., fetal anemia)', 'Early decelerations', 'Normal sleep cycle'], a: 1, why: 'A sinusoidal pattern (3–5 cycles/min, absent variability) is linked to fetal anemia and compromise.' },
        { ref: '16.1', q: 'The nurse should withhold terbutaline when:', o: ['Maternal pulse is 128', 'FHR is 140', 'Contractions are every 2 minutes', 'BP is 118/70'], a: 0, why: 'Hold terbutaline if maternal pulse > 120 (tachycardia is a major side effect).' },
        { ref: '16.2', q: 'Before placing an IUPC, which conditions must be met? Select all that apply.', o: ['Membranes ruptured', 'Cervix dilated', 'Patient fasting 8 hours', 'Provider or trained RN to insert'], a: [0, 1, 3], why: 'Internal monitors require ROM and cervical dilation and are inserted by providers or advanced-trained RNs.' },
        { ref: '16.2', q: 'During IUPC insertion frank red blood appears. The nurse/provider should:', o: ['Advance the catheter further', 'Withdraw the introducer immediately', 'Flush the catheter', 'Ignore it'], a: 1, why: 'Frank bleeding suggests insertion into the placenta; withdraw at once.' },
        { ref: '16.2', q: 'Contraction peaks in 10 minutes are 70, 65, 75 mm Hg with a resting tone of 15. Montevideo units =', o: ['210', '165', '150', '225'], a: 1, why: '(70−15)+(65−15)+(75−15) = 55+50+60 = 165 MVU.' },
        { ref: '16.4', q: 'The nurse sees a loop of cord at the introitus and the FHR drops to 80. Immediate action?', o: ['Push the cord back into the vagina', 'Lift the presenting part off the cord with two fingers and call for help', 'Start oxytocin', 'Place the patient in high Fowler’s'], a: 1, why: 'Relieve compression by elevating the presenting part and hold until cesarean birth.' },
        { ref: '16.4', q: 'Recurrent variable decelerations persist after repositioning. Which intervention may the provider order?', o: ['Amnioinfusion', 'Increase oxytocin', 'Fundal pressure', 'Supine position'], a: 0, why: 'Amnioinfusion adds fluid around the cord to relieve compression (especially with oligohydramnios).' },
        { ref: '16.5', q: 'Late decelerations appear while oxytocin is infusing. What is the FIRST action?', o: ['Give O2', 'Discontinue the oxytocin', 'Call the provider', 'Increase IV rate'], a: 1, why: 'When oxytocin is running, stopping it is always the priority step of intrauterine resuscitation.' },
    ],
});
