STUDY.addChapter('obgyn', {
    n: 2,
    intro: `<p>Patients bring visible and invisible diversity: race, age, language, religion, disability, gender identity and sexual orientation. Nurses must <strong>never assume</strong>. They give culturally competent care by systematically asking culturally sensitive questions. {{Chapter intro · p. 39}}</p>`,
    sections: {
        '2.1': {
            key: [
                '<strong>Cultural competence</strong> = a <strong>lifelong process</strong> of applying evidence-based nursing in agreement with the patient’s cultural values, beliefs, worldview and practices. <strong>Culturally responsive care</strong> = integrating the person’s cultural beliefs into their care.',
                'Family = <strong>kinship as defined by the family</strong> (adoption, surrogacy, fostering, cohabitation, friendship…), not only marriage or birth.',
                'Use a <strong>trained medical interpreter</strong>, <strong>never a family member</strong>. Face and speak to the <strong>patient</strong>, in the first person, one question at a time, then ask them to repeat back (teach-back).',
                'Blind patient: <strong>introduce yourself by name and role</strong>, announce when entering and leaving, warn before touching, give Braille/audio material, describe the newborn’s expressions.',
                'LGBTQIA+ care: the biggest barrier is <strong>provider lack of knowledge</strong>. Use gender-affirming language, ask about pronouns, offer private check-in (e.g., a tablet), and inclusive forms, EHRs and images.',
            ],
            html: `
<h3>Family and diversity {{p. 40}}</h3>
<p>A family is a group related by <strong>kinship</strong>, which today includes adoption, surrogacy, friendship, cohabitation and fostering. The nurse cares for the person while considering the family’s role and influence. <strong>Diversity</strong> = differences in social and ethnic background, gender and sexual orientation within a community.</p>
<ul>
    <li><strong>Cultural competence</strong>: the lifelong process of applying evidence-based nursing in agreement with the patient’s cultural values, beliefs, worldview and practices to improve outcomes.</li>
    <li><strong>Culturally responsive care</strong>: understanding, respecting and <strong>integrating</strong> a person’s cultural beliefs into their care. It is required for a trusting nurse-patient relationship.</li>
</ul>

<h3>Family structures</h3>
<p>Family structure (who counts as family, birth order, number of parents, nuclear vs. extended) helps people determine their roles. <strong>Functional</strong> families support well-being and adaptation; <strong>dysfunctional</strong> families are linked to mental health issues, trauma, abuse and neglect. {{p. 40}}</p>
<table>
    <thead><tr><th>Type</th><th>Definition</th><th>Nursing points</th></tr></thead>
    <tbody>
        <tr><td><strong>Dual-career</strong></td><td>Both parents work</td><td>Higher income and usually insurance. Problems: <strong>time management</strong> and role conflict; women often still do most household tasks. Ask how roles are shared. {{p. 41}}</td></tr>
        <tr><td><strong>Single-career</strong></td><td>One parent works, one stays home</td><td>No childcare costs. 1 in 5 stay-at-home parents (US) are fathers. A gap in work history can limit future employment.</td></tr>
        <tr><td><strong>Single-parent</strong></td><td>Children living with one parent</td><td>~30% live in poverty (vs. 6% of married couples). Strengths: focus on the children; less stress if a violent partner has left. <strong>Confirm the adult present is the legal guardian</strong> before sharing information, and document it.</td></tr>
        <tr><td><strong>Extended</strong></td><td>Grandparents, aunts, uncles, cousins</td><td>May share a home (culture, finances, caring for elders). <strong>Ask the patient whether they want family included</strong> before discussing private information.</td></tr>
        <tr><td><strong>Blended / binuclear / stepfamily</strong></td><td>Parents and children not biologically related to the other parent, usually after death or divorce (also never-married)</td><td>More than 50% of US families are remarried/recoupled. Children may struggle to adjust and parents feel stress, so watch for family stress.</td></tr>
    </tbody>
</table>
<div class="callout memo"><span class="callout-title">Stepparents (US law)</span><p>Stepparents have <strong>limited legal rights</strong>: the two biological parents make medical decisions. A notarized consent-to-treat letter signed by both biological parents or guardians can allow a stepparent to seek care. {{p. 40}}</p></div>
<p><strong>Foster care</strong>: temporary homes from the state for children who can’t live with their families. (Example: New York’s Children’s Aid places children in their own neighborhood.) {{p. 42}}</p>

<h3>Care of LGBTQIA+ persons and families {{p. 42}}</h3>
<p>The <strong>biggest barrier</strong> to culturally competent care is the <strong>lack of knowledge</strong> of providers (pronouns, terminology, gender-affirming care).</p>
<p><strong>Key terminology</strong> {{Table 2.1 · p. 42}}</p>
<table>
    <thead><tr><th>Term</th><th>Meaning</th></tr></thead>
    <tbody>
        <tr><td>Cisgender</td><td>Gender identity matches the sex assigned at birth</td></tr>
        <tr><td>Transgender</td><td>Umbrella term: gender identity/expression differs from sex assigned at birth</td></tr>
        <tr><td>Transgender man</td><td>Male gender identity, <strong>assigned female</strong> at birth (may need gynecologic/obstetric care)</td></tr>
        <tr><td>Transgender woman</td><td>Female gender identity, assigned male at birth</td></tr>
        <tr><td>Transmasculine / transfeminine</td><td>Assigned female / male at birth, identifying as trans/nonbinary</td></tr>
        <tr><td>Gender identity</td><td>A person’s <strong>internal sense</strong> of their gender</td></tr>
        <tr><td>Gender expression</td><td>How gender identity is communicated through behavior or appearance</td></tr>
        <tr><td>Gender affirmation</td><td>Aligning gender expression, social perception and physical appearance with gender identity</td></tr>
        <tr><td>Gender nonconforming</td><td>Gender doesn’t fit traditional expectations (gender fluid, expansive, queer)</td></tr>
        <tr><td>Sexual orientation</td><td>Emotional, romantic or sexual attraction to others</td></tr>
        <tr><td>Bisexual</td><td>Attracted to people with male and female gender identities</td></tr>
        <tr><td>Queer</td><td>Any orientation that isn’t straight or any identity that isn’t cisgender</td></tr>
    </tbody>
</table>

<h4>Historical trauma {{p. 43}}</h4>
<p>The <strong>cumulative trauma</strong> associated with a specific cultural, racial, marginalized or ethnic group. LGBTQIA+ patients carry the discrimination experienced by themselves, their families and their friends, so they <strong>expect</strong> bias. In a 2018 survey, 8% had been refused care, 9% met harsh/abusive language and 7% experienced unwanted physical contact.</p>

<h4>Creating safe spaces {{p. 43}}</h4>
<ul>
    <li><strong>Gender-affirming language</strong> (language that accurately describes gender identity): the nurse introduces themselves with their own pronouns, then asks the patient’s pronouns and how they identify. Wrong language harms mental health and trust.</li>
    <li>Forms, EHRs and check-in logs should have options <strong>beyond male/female</strong> and inclusive relationship status.</li>
    <li>A <strong>private space or tablet</strong> so patients can disclose gender identity, orientation and pronouns <strong>privately</strong>.</li>
    <li>Visible cues of welcome (patients “scan” the office): rainbow flags, unisex bathrooms, diverse posters, LGBTQIA+ and HIV brochures, a posted <strong>nondiscrimination statement</strong>. {{p. 44}}</li>
    <li>The <strong>EHR</strong> is one of the biggest sources of discrimination (microaggressions before the visit even starts). Misidentification can cause PTSD, depression and anxiety. Fewer than 50% of US facilities have transgender-specific policies.</li>
</ul>

<h4>Family planning for LGBTQIA+ families {{p. 44}}</h4>
<ul>
    <li>Anyone with a uterus should be offered full reproductive care: preconception, pregnancy, contraception, abortion.</li>
    <li><strong>Fertility preservation</strong> = freezing embryos, eggs, ovarian tissue, sperm or testicular tissue for later use. Few facilities offer it to this community.</li>
    <li>20–30% of LGBTQIA+ persons raise children (adoption, surrogacy, artificial insemination).</li>
    <li>LGBTQIA+ people have <strong>higher rates of sexual assault</strong>, so SANE and ED staff must be culturally competent.</li>
</ul>

<h3>Language barriers {{p. 44}}</h3>
<ul>
    <li><strong>CLAS</strong> (culturally and linguistically appropriate services): respectful of and responsive to diverse health beliefs, practices and needs.</li>
    <li><strong>Linguistic competence</strong>: readily available oral and written language services for people with limited English proficiency (bilingual staff, trained interpreters, qualified translators). {{p. 45}}</li>
    <li>Education material, instructions and <strong>consent forms</strong> must be in the patient’s preferred language.</li>
    <li>The Joint Commission requires <strong>trained</strong> interpreters (bilingual staff, contracted or employed). A bilingual provider speaking the patient’s language doesn’t need one.</li>
    <li><strong>Do not use family members</strong>: the patient may withhold sensitive information, family may edit what is said, and medical terms get misunderstood.</li>
    <li>Use an interpreter of the <strong>same gender</strong> when possible for sensitive topics.</li>
</ul>
<div class="callout nurse"><span class="callout-title">Working with a medical interpreter</span>
<ul>
    <li>Allow extra time; brief the interpreter beforehand if possible.</li>
    <li><strong>Document the interpreter’s name.</strong></li>
    <li><strong>Face and address the patient</strong> directly in a normal tone, not the interpreter.</li>
    <li>Speak in the <strong>first person</strong> (“I”).</li>
    <li>Avoid idioms, abbreviations, slang, jokes and jargon.</li>
    <li>Short sentences, <strong>one question at a time</strong>; wait for interpretation to finish.</li>
    <li>Ask the patient to <strong>repeat instructions</strong> to confirm understanding.</li>
</ul></div>

<h3>Disability {{p. 45}}</h3>
<ul>
    <li>Plan care <strong>with</strong> the person, respecting their uniqueness and autonomy.</li>
    <li><strong>Hearing loss</strong> (~4.7% of US women aged 18–39): higher rates of chronic conditions, <strong>preterm birth and low birth weight</strong>. Find out how the patient communicates; use an <strong>American Sign Language interpreter</strong> if deaf.</li>
    <li><strong>Visual impairment</strong>: tour of the labor unit, <strong>introduce yourself</strong> (they can’t read your badge), announce entering and leaving, <strong>warn before touching</strong>, Braille or audio material, describe the newborn’s facial expressions and behaviors. {{p. 45}}</li>
    <li><strong>Physical disability</strong>: wheelchair access, grab bars, wide doors, accessible exam tables. Ask which activities need help (respect independence). Order a bedside commode or shower chair. Help into the most comfortable birth position. {{p. 46}}</li>
</ul>

<h3>Culture, spirituality and religion {{p. 46}}</h3>
<p><strong>Culture</strong> = norms, attitudes and beliefs a group accepts and passes to the next generation. It shapes beliefs about the causes of illness, treatment, who is involved in decisions, eye contact, and what can be discussed about the body.</p>
<ul>
    <li><strong>Spirituality</strong> = what a person feels and believes that brings peace and meaning to life (individual). <strong>Religion</strong> = a belief system practiced as a group.</li>
    <li>Examples: <strong>Jehovah’s Witnesses refuse blood transfusions</strong>. Many Hindus, Jains and Buddhists are vegetarian.</li>
    <li>A thorough cultural assessment includes religious and spiritual beliefs that might affect care.</li>
</ul>
<h4>Adolescent parenthood {{p. 47}}</h4>
<p>US teen birth rate 2020: 15.4 per 1,000 (down 75% since 1991). Risk factors: mother gave birth as a teen, low education, poor family connection, communities with substance misuse, violence and hunger, less access to family planning. Globally ~21 million adolescent girls become pregnant every year in developing countries (e.g., Ghana: taboo around sexuality, abstinence-only education, child marriage).</p>`,
        },
        '2.2': {
            key: [
                '<strong>Family assessment</strong> has four parts: describe the family, determine <strong>resources</strong> (support network, safety, finances, insurance, transport), assess education/lifestyle/beliefs, determine teaching needs.',
                '<strong>Individualism</strong> (most Western countries): independence, personal responsibility for health. <strong>Collectivism</strong> (e.g., China, Japan, India, Brazil): the group comes first, so the <strong>family may make treatment decisions</strong>.',
                'Pain is subjective and shaped by culture. <strong>Use a pain scale</strong>, never judge pain by outward appearance, and ask about expectations before labor.',
                'If a patient uses <strong>traditional healing</strong>, first <strong>take a full list of herbs, plants, foods and remedies</strong> to check for interactions and fetal safety. Don’t dismiss it.',
                '<strong>Jehovah’s Witnesses</strong>: no blood transfusions (some accept minor fractions). Plan ahead with iron, erythropoiesis-stimulating agents, tranexamic acid and similar, and <strong>document what they accept</strong>.',
            ],
            html: `
<h3>Family development {{p. 47}}</h3>
<p>The life cycle of a family and how it adapts to change: “the systematic and patterned changes experienced by families as they move through their life course.” Classic stages (post-WWII theory): early marriage → families with young children → launching children → empty nest. The nurse takes a thorough <strong>family history</strong> for genetic issues and to learn traditions and roles.</p>

<h3>Family assessment {{Table 2.2 · p. 48}}</h3>
<table>
    <thead><tr><th>Component</th><th>Example questions</th></tr></thead>
    <tbody>
        <tr><td><strong>Describe the family</strong></td><td>Who is family? The patient’s position and role? Ages, orientation, occupations? Anything limiting a member’s ability to help with care?</td></tr>
        <tr><td><strong>Determine family resources</strong></td><td>Can the family meet the patient’s needs? Is the home safe? Financial limits? Insurance? <strong>Connections with friends, neighbors, church, community?</strong> Transportation (car, who drives, public transport)?</td></tr>
        <tr><td><strong>Education, lifestyle, beliefs</strong></td><td>Education level, primary language, cultural background, preferences around birth/death, traditional healing, conflicts with recommended practice, diet, religion.</td></tr>
        <tr><td><strong>Teaching needs</strong></td><td>What matters most to them? Do they agree with the plan? Physical/cognitive limits to learning?</td></tr>
    </tbody>
</table>

<h3>Cultural influences on families {{p. 48}}</h3>
<ul>
    <li><strong>Physiologic differences</strong>: some ethnic groups carry recessive genes for ancestry-based genetic diseases (see Chapter 4).</li>
    <li><strong>Psychologic differences: individualism vs. collectivism</strong> {{p. 49}}</li>
</ul>
<table>
    <thead><tr><th></th><th>Individualism</th><th>Collectivism</th></tr></thead>
    <tbody>
        <tr><td>Belief</td><td>Independence; people are separate, with personal goals</td><td>Interconnectedness; relationships come first</td></tr>
        <tr><td>Decisions</td><td>Made for one’s own benefit; health is a <strong>personal responsibility</strong></td><td>Made for the <strong>benefit of the group</strong>; the individual is secondary</td></tr>
        <tr><td>Examples</td><td>USA, UK, Western Europe</td><td>China, Japan, India, Brazil, Guatemala</td></tr>
        <tr><td>Nursing plan</td><td>Self-efficacy tasks</td><td>Include family members and community resources; the patient may <strong>leave treatment decisions to the family</strong></td></tr>
    </tbody>
</table>

<h3>Cultural influences on pain {{p. 49}}</h3>
<p>Pain is universal but <strong>subjective</strong>; how it is expressed and treated is cultural. Many cultures see childbirth sensations as challenging but not “pain”. Misreading cultural cues leads to over- or under-treatment.</p>
<div class="callout nurse"><span class="callout-title">Culturally sensitive pain care</span>
<ul>
    <li>Translation services as needed.</li>
    <li>Ask about <strong>expectations of labor pain</strong> beforehand; don’t assume based on culture.</li>
    <li>Teach pain assessment; <strong>don’t rely on nonverbal cues</strong>.</li>
    <li>Use a <strong>pain scale</strong> to establish the individual’s level.</li>
    <li>Allow traditional remedies where possible, after a full history of medicines, herbs, plants and foods (interactions).</li>
    <li>Reassure the patient and adapt the care plan to their cultural needs.</li>
</ul></div>

<h3>Family roles {{p. 49}}</h3>
<p>Never assume roles; ask. Beyond mother/father/child, roles include nurturer, cheerleader, truth teller, troublemaker, peacemaker, caretaker, doer and martyr. Adapt education to each person’s role and personality.</p>

<h3>Health beliefs, religion and spirituality {{p. 50}}</h3>
<ul>
    <li>Beliefs may come from past negative experiences or discrimination. Families from countries with universal health care may not understand the US system, so help them navigate it.</li>
    <li>Topics influenced by religion: <strong>circumcision</strong>, menstruation taboos, <strong>fasting during pregnancy</strong>, abortion, sex, baby care, postpartum traditions, preference for traditional healers.</li>
    <li><strong>ACOG</strong>: pregnancy gives <strong>no right to coerce, manipulate or threaten</strong> a person to “save” a fetus if they refuse treatment.</li>
</ul>

<h3>Traditional healing {{Table 2.3 · p. 50}}</h3>
<p>Medicines and healing practices that differ from the modern Western system. In pregnancy and breast-feeding, <strong>ask about them to assess safety</strong> for the fetus and newborn.</p>
<table>
    <thead><tr><th>Tradition</th><th>Main idea / practices</th></tr></thead>
    <tbody>
        <tr><td>Traditional Chinese medicine</td><td>Balance (qi, yin and yang); acupuncture, cupping, herbs, tai chi</td></tr>
        <tr><td>Ayurveda (India, Hindu)</td><td>Disease = imbalance; diet, herbs, yoga, meditation</td></tr>
        <tr><td>African traditional healing</td><td>Varies by tribe; ancestral spirits; healers act as counselors and social workers</td></tr>
        <tr><td>American Indian</td><td>Spiritual and physical health intertwined; ritual and ceremony</td></tr>
        <tr><td>Hispanic (<strong>curanderismo</strong>, healer = curandero)</td><td>Balance of mind, body, spirit; prayer, oils, herbs, special diets {{p. 51}}</td></tr>
        <tr><td>Western European</td><td>Patient at the center; medicines from herbs, plants, minerals, animals</td></tr>
    </tbody>
</table>

<h3>Childbearing and child-rearing practices {{p. 51}}</h3>
<ul>
    <li>Many cultures see birth as natural and nonmedical and use midwives.</li>
    <li>Iran: female relatives “shower” the new mother with oils, a facial and henna.</li>
    <li>Andean Argentina: the placenta is revered as a younger sibling and must be buried properly.</li>
    <li>Hispanic <strong>cuarentena</strong>: 40 days of rest and recovery after birth.</li>
    <li><strong>Muslim</strong> families: <strong>tahnik</strong> (a small amount of date or honey placed on the baby’s palate) and <strong>aqiqah</strong>, with the dua recited.</li>
    <li>Chinese parents value persistence, politeness, concentration. Indian parenting stresses family interdependence. In Hinduism, childless couples may be stigmatized and a son is celebrated.</li>
</ul>
<div class="callout warn"><span class="callout-title">Jehovah’s Witnesses and blood {{p. 51}}</span>
<ul>
    <li>Refuse transfusions and blood products (based on Bible verses). Some accept minor products such as <strong>cryoprecipitate and immunoglobulins</strong>; church elders can advise.</li>
    <li>Prevent the need for blood before planned surgery: <strong>iron, erythropoiesis-stimulating agents, tranexamic acid, recombinant factor VIIa, prothrombin complex concentrate</strong>.</li>
    <li>Take a detailed history of bleeding/clotting problems and <strong>document what the person agrees to</strong> if hemorrhage occurs. Stay nonjudgmental. {{p. 52}}</li>
</ul></div>`,
        },
        '2.3': {
            key: [
                '<strong>Transcultural nursing</strong> (Madeleine Leininger) is the foundation of culturally competent care. <strong>Culture Care Theory</strong>: care can’t be effective without considering the person’s culture.',
                '<strong>Giger and Davidhizar Transcultural Assessment Model</strong>, six phenomena: <strong>Communication, Personal space, Social organization, Time orientation, Environmental control, Biological variations</strong>.',
                'Culturally sensitive approach: introduce yourself, use title + last name and ask preferences, stand an <strong>arm’s length</strong> away, <strong>document preferred language and interpreter need</strong>, ask about limits on caregivers (e.g., many Muslim patients prefer a same-gender provider).',
                '<strong>Four Cs of Culture</strong>: what they <strong>Consider</strong> the problem, its <strong>Cause</strong>, how they <strong>Cope</strong>, how <strong>Concerned</strong> they are.',
            ],
            html: `
<h3>Transcultural nursing {{p. 52}}</h3>
<p>Cultural competence takes motivation, time and practice, and keeps developing throughout a career. Its roots are in <strong>transcultural nursing</strong>, developed by <strong>Dr. Madeleine Leininger</strong> (nurse and anthropologist): incorporating the cultural beliefs and practices of people to help them <strong>maintain or regain health, or face death</strong> in a meaningful way.</p>
<p><strong>Culture Care Theory</strong> (Leininger): health care <strong>cannot be effectively provided without considering the person’s cultural background</strong>. Culture shapes perceptions of health, illness and care, which makes the theory a framework for health equity.</p>

<h3>Transcultural Assessment Model (Giger and Davidhizar) {{p. 52}}</h3>
<p>Each person is culturally unique. Assess <strong>six cultural phenomena</strong>:</p>
<table>
    <thead><tr><th>Phenomenon</th><th>What to assess</th></tr></thead>
    <tbody>
        <tr><td><strong>Communication</strong></td><td>Language, tone, nonverbal cues</td></tr>
        <tr><td><strong>Personal space</strong></td><td>Four zones: <strong>intimate, personal, social/consultative, public</strong> (Hall). Comfort with distance and touch varies.</td></tr>
        <tr><td><strong>Social organization</strong></td><td>Values about family, community and social roles (e.g., family involvement in decisions)</td></tr>
        <tr><td><strong>Time orientation</strong></td><td>Punctuality; time seen as linear or cyclical {{p. 53}}</td></tr>
        <tr><td><strong>Environmental control</strong></td><td>Beliefs about the causes of illness and control over the environment; use of traditional healing</td></tr>
        <tr><td><strong>Biological variations</strong></td><td>Biological differences, beliefs about illness, alternative therapies, pain and medication beliefs</td></tr>
    </tbody>
</table>
<div class="callout memo"><span class="callout-title">Memory aid</span><p><strong>“Can Students Study Thoroughly Every Book?”</strong> Communication, Space, Social organization, Time, Environmental control, Biological variations.</p></div>

<h3>Personal space, touch and modesty {{p. 53}}</h3>
<ul>
    <li>Always <strong>ask permission</strong> before entering personal space and explain what will happen.</li>
    <li>Pulling away, closing the eyes or leaving are cues of discomfort. Let the person choose a comfortable position or distance.</li>
    <li>Touch is cultural: a male nurse caring for a female patient (or the reverse) may be inappropriate. In some cultures, touching the <strong>head</strong> without permission is rude.</li>
</ul>

<h3>Nutrition traditions {{p. 53}}</h3>
<ul>
    <li>Food taboos in pregnancy and postpartum (e.g., Indonesia: certain fruits, meat, fish and cold drinks; rural Zulu: sweets, ice, alcohol; parts of Asia: no meat for 2 months postpartum).</li>
    <li>Many cultures recommend postpartum foods that are <strong>warm, cooked, brothy, easy to digest and high in protein and fat</strong> (soups, stews).</li>
    <li>Plant-based South Asian diets are linked with fewer hot flashes. A Mediterranean diet is linked with less menstrual pain. Some cultures restrict foods during menstruation. {{p. 54}}</li>
</ul>

<h3>Culturally sensitive nursing assessment {{p. 54}}</h3>
<div class="callout nurse"><span class="callout-title">Interventions</span>
<ul>
    <li><strong>Introduce yourself by name and role</strong>; acknowledge family and visitors.</li>
    <li>Address the person by <strong>title and last name</strong>; ask how they wish to be addressed and their pronouns, and <strong>document</strong> it.</li>
    <li>Stand at least <strong>an arm’s length</strong> away.</li>
    <li>Observe nonverbal communication (eye contact, spacing, touch) and match it.</li>
    <li>If English isn’t the primary language, <strong>document the preferred language and whether an interpreter is needed</strong>.</li>
    <li>Politely ask about culture and beliefs.</li>
    <li>Ask about <strong>limits on who can provide care</strong> (many Muslim patients prefer a same-gender provider).</li>
    <li>Respect and integrate beliefs; reassure them that culturally competent care is a priority.</li>
</ul></div>
<div class="callout tip"><span class="callout-title">Exam tip</span><p>Sitting on the bed, using first names and holding constant eye contact are <strong>assumptions</strong> that may offend. <strong>Documenting the preferred language</strong> is always a culturally sensitive action.</p></div>

<h3>The Four Cs of Culture {{p. 54}}</h3>
<p>A quick cultural assessment tool:</p>
<ol>
    <li><strong>Consider</strong>: “What do you think is wrong? What is worrying you?” (what they call the problem)</li>
    <li><strong>Cause</strong>: “What do you think caused this problem?”</li>
    <li><strong>Cope</strong>: “What are you doing to cope? How are you taking care of yourself?”</li>
    <li><strong>Concerned</strong>: “How serious is this problem for you? How concerned are you?”</li>
</ol>
<p>Example in the book: an older woman from China (Mandarin, video interpreter) believes her fibroids come from <strong>imbalance</strong> and grief. She copes with soups containing ginger, onion and garlic, and wants food from home. The nurse checks with the provider about allowing home food. {{p. 54}}</p>`,
        },
        '2.4': {
            key: [
                'Higher-risk groups: racial, sexual and gender minorities, children, older adults, the underinsured or poor, incarcerated people, people with disabilities, immigrant/migrant and rural families.',
                'Prolonged stress from racism causes <strong>epigenetic changes</strong> in pregnant Black people, with higher <strong>preeclampsia, gestational diabetes and maternal mortality</strong>.',
                'LGBTQIA+ families: more <strong>domestic violence, discrimination, marginalization and social exclusion</strong>; more depression, substance misuse and suicide (minority stress model).',
                '<strong>Social determinants of health</strong>, five domains: <strong>economic stability, education access and quality, health-care access and quality, neighborhood and built environment, social and community context</strong>.',
                'Incarcerated persons should <strong>labor without restraints/shackles</strong>; don’t talk about “taking the baby home”.',
            ],
            html: `
<p>Families can be at higher risk because of <strong>discrimination, poverty, injustice or psychosocial issues</strong>. Racial, sexual and gender minorities, children, older adults and people who are underinsured, poor, incarcerated or disabled have worse outcomes. Low-income jobs often lack insurance, and fear of stigma stops people seeking care. {{p. 55}}</p>

<table>
    <thead><tr><th>Group</th><th>Key risks</th><th>Nursing actions</th></tr></thead>
    <tbody>
        <tr><td><strong>Black families</strong></td><td>Structural racism; low income; contact with the justice system. Prolonged stress → <strong>epigenetic changes</strong> → more <strong>preeclampsia, gestational diabetes, maternal mortality</strong>. {{p. 56}}</td><td>Recognize racism and discrimination; be a <strong>change agent</strong> for equity.</td></tr>
        <tr><td><strong>Immigrant families</strong></td><td>Undocumented immigrants can’t use the Marketplace; may get “emergency Medicaid” for prenatal care (state-dependent). <strong>FQHCs</strong> (federally qualified health centers) fill gaps.</td><td>Connect with resources.</td></tr>
        <tr><td><strong>Migrant families</strong></td><td>Frequent moves for work → <strong>inconsistent prenatal care</strong>.</td><td>Identify <strong>all previous providers and request records</strong>.</td></tr>
        <tr><td><strong>LGBTQIA+ families</strong></td><td>More domestic violence, discrimination, marginalization, <strong>social exclusion</strong>; poorer physical and mental health; more depression, substance misuse, suicide. Lesbian and bisexual women: more colon, liver, breast, ovarian and cervical cancers.</td><td>Transcultural interventions to build trust. <strong>Minority stress model</strong>: stigma → stress → maladaptive coping.</td></tr>
        <tr><td><strong>Incarcerated persons</strong></td><td>US has the 2nd highest rate of incarcerated women. 75% have children under 18. Pregnancy risks: no prenatal care, trauma, poor nutrition, substance use, mental illness.</td><td>Labor <strong>without shackles</strong>. Nonjudgmental care; avoid “taking the baby home” talk; support grief over separation.</td></tr>
        <tr><td><strong>Grandparents as caregivers</strong></td><td>7.1 million in the US raise grandchildren (parent died, incarcerated, mental illness, substance use). Challenges: returning to work, discipline role, energy, low income. {{p. 56}}</td><td>Counseling for depression; financial resources.</td></tr>
        <tr><td><strong>Lower income</strong></td><td>More chronic disease (heart, liver, kidney); <strong>no transportation</strong> to appointments. Pregnancy: less prenatal care, poor nutrition, stress. {{p. 57}}</td><td>Supportive care plus financial assistance resources.</td></tr>
        <tr><td><strong>Rural families</strong></td><td><strong>Maternity deserts</strong> (no obstetric hospital, birth center or provider) with higher maternal and newborn mortality. More deaths from heart disease, cancer, injury, chronic respiratory disease and stroke. Causes: distance, smoking, hypertension, obesity, poverty, uninsurance.</td><td>Teach smoking cessation, weight loss and activity; do cancer screenings; <strong>mobile clinics</strong>.</td></tr>
    </tbody>
</table>

<h3>Social determinants of health (SDOH) {{p. 57}}</h3>
<p><strong>Nonmedical factors</strong> that influence health outcomes: the conditions in which people are born, grow, work, live and age, and the forces and systems shaping daily life. Outcomes caused by them are <strong>health disparities / health inequalities</strong>.</p>
<ul>
    <li>Causes of inequality: socioeconomic status, race, education, distance from care.</li>
    <li>Black and Native American populations have more obesity, diabetes, hypertension and heart disease. The history of racism causes <strong>distrust</strong> (less care-seeking).</li>
    <li><strong>Trauma-informed care</strong>: acknowledges all past and present parts of a person’s life, including trauma, and supports the patient’s autonomy, strength and control over decisions.</li>
    <li>SDOH in birthing care: financial barriers, shortage of OB providers, unhealthy behaviors (drugs, alcohol, cheap less nutritious food), unequal education, segregated communities.</li>
</ul>
<div class="callout memo"><span class="callout-title">The five domains (Healthy People 2030) {{p. 57}}</span>
<ol>
    <li>Economic stability</li>
    <li>Education access and quality</li>
    <li>Health-care access and quality</li>
    <li>Neighborhood and built environment</li>
    <li>Social and community context</li>
</ol></div>

<h3>Healthy People 2030 pregnancy objectives {{p. 58}}</h3>
<p>Reduce preterm births · increase early and adequate prenatal care · increase abstinence from alcohol in pregnancy · reduce adolescent pregnancy · reduce maternal deaths.</p>

<div class="callout nurse"><span class="callout-title">Patient can’t afford the prescription {{p. 58}}</span>
<ol>
    <li>Ask the provider for a <strong>less expensive alternative</strong>.</li>
    <li>Discuss <strong>drug assistance programs</strong> (pharmaceutical companies, state and nonprofit programs).</li>
    <li>Refer to <strong>social services</strong> (pregnancy Medicaid, state assistance).</li>
    <li>Recommend discount programs or websites (e.g., GoodRx).</li>
</ol></div>`,
        },
    },
    terms: [
        ['blended family', 'parents and children who are not biologically related to the other parent, usually created after a death or divorce but also include those who have never married; also called a binuclear or stepfamily'],
        ['collectivism', 'culture in which people believe in interconnectedness with others and respect relationships'],
        ['cultural competence', 'lifelong process of applying evidence-based nursing in agreement with the cultural values, beliefs, worldview, and practices of patients to produce improved patient outcomes'],
        ['culturally responsive care', 'occurs when a person’s cultural beliefs are integrated into their health care; required for a trusting, effective relationship with the patient and their family'],
        ['culture', 'set of beliefs, attitudes, and practices shared by a group of people or community that is accepted, followed, and passed down to other members of the group'],
        ['Culture Care Theory', 'states that health care cannot be effectively provided without considering the person’s cultural background'],
        ['diversity', 'differences in social and ethnic backgrounds, gender, and sexual orientation within a community'],
        ['dual-career family', 'household in which both parents work'],
        ['extended family', 'grandparents, aunts, uncles, and cousins'],
        ['Four Cs of Culture model', 'quick cultural assessment tool asking what the patient Considers to be a problem, the Cause of the problem, how they are Coping with it, and how Concerned they are about it'],
        ['gender-affirming language', 'language that describes one’s gender identity'],
        ['Healthy People 2030', 'national objectives aimed at improving health and well-being over the next 10 years'],
        ['historical trauma', 'cumulative trauma associated with a specific cultural, racial, marginalized, or ethnic group'],
        ['individualism', 'culture in which people respect independence and view themselves as separate from others, with personal ideals and goals'],
        ['single-career family', 'household in which one parent works and the other stays home'],
        ['social determinants of health', 'nonmedical factors that influence health outcomes, including conditions in which people are born, grow, work, live, and age, and the wider forces and systems shaping daily life'],
        ['traditional healing', 'various medicines and healing practices around the world that differ from the modern, Western health-care system'],
        ['transcultural nursing', 'incorporates cultural beliefs and practices of people to help them maintain and regain health or to face death in a meaningful way'],
        ['trauma-informed care', 'care that acknowledges all past and present parts of a person’s life situation, including any trauma they have endured, to support the patient’s autonomy, strength, and control over health-care decisions'],
    ],
    cards: [
        { f: 'What characteristics make up a blended family?', b: 'Parents and children who are not biologically related to the other parent, usually formed after death or divorce (also never-married couples). Also called a binuclear family or stepfamily. Children may struggle to adjust and the family may feel stress.', ref: '2.1' },
        { f: 'Guidelines when working with a medical interpreter', b: 'Allow extra time · brief the interpreter beforehand · document the interpreter’s name · face and speak to the PATIENT in a normal tone · use the first person · no idioms, slang, jokes or jargon · short sentences, one question at a time · ask the patient to repeat instructions back.', ref: '2.1' },
        { f: 'Why shouldn’t a family member interpret?', b: 'The patient may withhold sensitive information, the family member may edit or change what is said, and unfamiliar medical terms cause errors. Use a trained medical interpreter (same gender for sensitive topics if possible).', ref: '2.1' },
        { f: 'How can the nurse reduce barriers for people with physical disabilities?', b: 'Wheelchair access, grab bars, wide doors, accessible exam tables · ask which activities need help (respect independence) · order equipment (bedside commode, shower chair) · help into the most comfortable birthing position.', ref: '2.1' },
        { f: 'Nursing care for a visually impaired pregnant patient', b: 'Tour the unit · introduce yourself (they can’t read your badge) · announce entering/leaving · warn before touching · Braille or audio material · describe the newborn’s facial expressions and behaviors.', ref: '2.1' },
        { f: 'What are the four parts of a family assessment?', b: '1. Describe the family (members, roles)\n2. Determine family resources (support network, home safety, finances, insurance, transport)\n3. Assess education, lifestyle and beliefs\n4. Determine teaching needs', ref: '2.2' },
        { f: 'Name at least three traditional healing systems', b: 'Traditional Chinese medicine (acupuncture, cupping, herbs, tai chi) · Ayurveda (diet, herbs, yoga, meditation) · Hispanic curanderismo · African traditional healing · American Indian traditions · Western European herbal traditions.', ref: '2.2' },
        { f: 'Individualism vs. collectivism', b: 'Individualism: independence; health is a personal responsibility (US, UK, W. Europe).\nCollectivism: interconnectedness; decisions for the good of the group; the family may make treatment decisions (China, Japan, India, Brazil).', ref: '2.2' },
        { f: 'What can be offered to a Jehovah’s Witness to avoid transfusion?', b: 'Iron replacement, erythropoiesis-stimulating agents, tranexamic acid, recombinant factor VIIa, prothrombin complex concentrate. Some accept cryoprecipitate or immunoglobulins. Document what they agree to in case of bleeding.', ref: '2.2' },
        { f: 'Steps to begin a culturally sensitive assessment', b: 'Introduce yourself by name and role · acknowledge family · use title + last name and ask preferences/pronouns · stand an arm’s length away · observe nonverbal communication · document preferred language and interpreter need · ask about limits on caregivers · respect and integrate beliefs.', ref: '2.3' },
        { f: 'The six phenomena of the Giger-Davidhizar Transcultural Assessment Model', b: 'Communication · Personal space · Social organization · Time orientation · Environmental control · Biological variations', ref: '2.3' },
        { f: 'The Four Cs of Culture', b: 'What the patient Considers the problem · its Cause · how they Cope · how Concerned they are.', ref: '2.3' },
        { f: 'Who developed transcultural nursing and the Culture Care Theory?', b: 'Dr. Madeleine Leininger, a nurse and anthropologist.', ref: '2.3' },
        { f: 'The five domains of the social determinants of health', b: '1. Economic stability\n2. Education access and quality\n3. Health-care access and quality\n4. Neighborhood and built environment\n5. Social and community context', ref: '2.4' },
        { f: 'What can the nurse do if a pregnant patient can’t afford their medication?', b: 'Ask the provider for a cheaper alternative · drug assistance programs · social services (pregnancy Medicaid) · discount programs such as GoodRx.', ref: '2.4' },
        { f: 'Why are pregnant Black people at higher risk of preeclampsia?', b: 'Prolonged stress from racism and discrimination causes epigenetic changes, leading to more preeclampsia, gestational diabetes and maternal mortality.', ref: '2.4' },
        { f: 'What is a maternity desert?', b: 'An area (mostly rural) without obstetric hospitals, birth centers or obstetric providers, with higher maternal and newborn mortality.', ref: '2.4' },
    ],
    quiz: [
        { src: 'book', ref: '2.1', q: 'A nurse is caring for a person who is blind. What intervention could the nurse implement to deliver culturally responsive care?', o: ['Ask family members to leave the room for the discussion of care.', 'Be aware of how the person is addressed.', 'Introduce herself with her name and credentials upon entering the room.', 'Leave education material in Braille on the table across the room from the bed.'], a: 2, why: 'A person who is blind can’t read a name tag, so the nurse should always introduce themselves (and announce entering and leaving). Braille material left across the room isn’t accessible.' },
        { src: 'book', ref: '2.1', q: 'People in extended families can live together for many reasons. What can the nurse do to provide the best care for a person living with an extended family?', o: ['Assume the family is poor and needs information on financial assistance.', 'Ask the person if they would like the family members to remain in the room during the exam.', 'Set a limit on who is allowed in the room with the person regardless of the circumstances.', 'Address the family first then the patient.'], a: 1, why: 'Before discussing private information, ask the patient whether they want their extended family included. Don’t assume poverty, and address the patient first.' },
        { src: 'book', ref: '2.1', q: 'A family member stands at the nurse station and requests help for their partner. What response should the nurse give to the family member?', o: ['“Are you the husband?”', '“Who is your wife?”', '“What can I do to help you and your partner?”', '“Are you part of the trans couple in room 214?”'], a: 2, why: 'Inclusive, gender-neutral language (“partner”) avoids assumptions about gender or relationship and protects privacy.' },
        { src: 'book', ref: '2.1', q: 'What does the nurse know about the definition of a family?', o: ['Families are made up of couples with biological children.', 'Families are created through marriage or birth.', 'Families can be blended but are not called families.', 'Families are made of kinships defined by the family.'], a: 3, why: 'Family is defined by the people who make up the kinship, which includes adoption, surrogacy, fostering, cohabitation and friendship, not only marriage or birth.' },
        { src: 'book', ref: '2.1', q: 'A couple who has stated that they are LGBTQIA+ during prior visits arrives at the clinic for prenatal care. What can the nurse say in the waiting area to help them feel welcome and safe?', o: ['“You can take this tablet to an area in the waiting room and check in. Then bring the tablet back to me when you are done.”', '“Are you pregnant? Your paperwork says your name is Tom.”', '“You can have a seat, and a person from the LGBTQIA+ office will come to assist you.”', '“Here is our paperwork. It doesn’t have a box for your sex, but you can write it next to the gender box.”'], a: 0, why: 'A tablet used independently lets patients privately disclose gender identity, orientation and pronouns. The other options expose private information publicly or single the couple out.' },
        { src: 'book', ref: '2.2', q: 'Family roles are often defined by culture and religion. What does the nurse know about collectivism?', o: ['Collectivist cultures place an emphasis on individuality.', 'Decisions are made for the benefit of the individual person, then the family.', 'A person from a collectivist culture might leave treatment decisions to their family.', 'These cultures believe that it is best for society when everyone decides on their own health care.'], a: 2, why: 'In collectivism, decisions are made for the benefit of the group, and the individual’s needs come second, so the family may make treatment decisions.' },
        { src: 'book', ref: '2.2', q: 'What question during a family assessment could the nurse ask to determine if the family has necessary resources?', o: ['“Do you enjoy spending time with your family?”', '“Do you have a group of friends, neighbors, or a church that helps you when you are ill?”', '“How often do you go to the store by yourself?”', '“Do your family members get along well?”'], a: 1, why: '“Determine family resources” includes the family’s connections with friends, neighbors, church and community, along with finances, safety, insurance and transport.' },
        { src: 'book', ref: '2.2', q: 'A person is admitted to the antepartum floor for hypertension. The person is Hispanic and speaks fluent English. They tell the nurse they have been seeing a curandero, or traditional healer, for the past several years. What is the best initial response from the nurse?', o: ['Ask the patient for a list of all herbs, plants, and special diets they are currently taking.', 'Educate the person on why adherence to a Western medical treatment plan is better for their health.', 'Inform the person that the treatment they have been receiving from the curandero is not evidence based.', 'Tell the person that they are not considering the health of their baby by using these traditions.'], a: 0, why: 'The first step is assessment: a full list of herbs, plants and diets to check for interactions and fetal safety. The other options are dismissive and judgmental.' },
        { src: 'book', ref: '2.1', q: 'What is the term for integrating a person’s cultural beliefs into their health care?', o: ['cultural integrity', 'culturally responsive care', 'holistic care', 'integrative care'], a: 1, why: 'Culturally responsive care = understanding, respecting and integrating a person’s cultural beliefs into their care.' },
        { src: 'book', ref: '2.3', q: 'The nurse enters the person’s room for the first time. What can the nurse do to show cultural sensitivity?', o: ['Come in and sit on the bed with the person.', 'Address the person by their first name.', 'Make and hold eye contact.', 'Document their preferred language in their chart.'], a: 3, why: 'Documenting the preferred language (and whether an interpreter is needed) is a culturally sensitive intervention. Sitting on the bed, using first names and sustained eye contact may be culturally inappropriate.' },
        { src: 'book', ref: '2.3', q: 'What is an example of a nurse’s question that is part of the Four Cs?', o: ['What did you do to cause your injury?', 'What are you concerned about today?', 'What kind of problems will your traditions cause for other patients?', 'When will your family move you in to stay with them?'], a: 1, why: 'The Four Cs: what the patient Considers the problem, its Cause, how they Cope and how Concerned they are. Option A is blaming, not an open question about cause.' },
        { src: 'book', ref: '2.4', q: 'What is the term for nonmedical factors that influence health outcomes, including conditions in which people are born, grow, work, live, and age, and the wider sets of forces and systems shaping the conditions of daily life?', o: ['environmental influences', 'life circumstances', 'situational occurrences', 'social determinants of health'], a: 3, why: 'This is the definition of the social determinants of health.' },
        { src: 'book', ref: '2.4', q: 'Pregnant Black people have more complications resulting from epigenetic changes caused by prolonged stress due to racism and discrimination. What complication could arise because of this history?', o: ['postterm pregnancy', 'preeclampsia', 'liver disease', 'cholestasis of pregnancy'], a: 1, why: 'Prolonged stress leads to epigenetic changes causing higher rates of preeclampsia, gestational diabetes and maternal mortality.' },
        { src: 'book', ref: '2.4', q: 'LGBTQIA+ families are at higher risk for certain issues more than straight, cisgender parents. What is an example of a vulnerability experienced by LGBTQIA+ families?', o: ['increased cases of social exclusion', 'fewer cases of intimate partner violence', 'fewer incidents of family trauma', 'increased cases of social acceptance'], a: 0, why: 'LGBTQIA+ families are at increased risk for domestic violence, discrimination, marginalization and social exclusion.' },

        { ref: '2.1', q: 'The nurse is using a medical interpreter. Which actions are correct? Select all that apply.', o: ['Face the patient and speak directly to them', 'Speak in the first person', 'Ask several questions together to save time', 'Document the interpreter’s name', 'Ask the patient to repeat back the instructions'], a: [0, 1, 3, 4], why: 'Speak to the patient in the first person, document the interpreter’s name and confirm understanding. Ask only one question at a time.' },
        { ref: '2.1', q: 'A Spanish-speaking patient’s 14-year-old child offers to interpret. What is the nurse’s best action?', o: ['Accept, since the child speaks both languages', 'Obtain a trained medical interpreter', 'Use simple English and gestures', 'Ask the patient to bring an adult relative next time'], a: 1, why: 'Family members should not interpret: the patient may withhold information, family may change what is said, and medical terms get misunderstood. The Joint Commission requires trained interpreters.' },
        { ref: '2.1', q: 'A single mother brings her child to the clinic with her new boyfriend. Before discussing the child’s health information, the nurse should:', o: ['Speak with both adults together', 'Confirm the adult present is the legal guardian', 'Ask the boyfriend to sign a consent form', 'Call the child’s father'], a: 1, why: 'The nurse should make sure the parent present is the legal guardian before discussing health information, and document this.' },
        { ref: '2.1', q: 'What is the biggest barrier to culturally competent health care for LGBTQIA+ families?', o: ['Cost of care', 'Lack of knowledge by health-care providers', 'Lack of insurance', 'Distance to clinics'], a: 1, why: 'Providers’ lack of knowledge (pronouns, terminology, gender-affirming care) is the biggest barrier.' },
        { ref: '2.1', q: 'A transgender man is someone who:', o: ['Was assigned male at birth and identifies as female', 'Was assigned female at birth and has a male gender identity', 'Is attracted to men', 'Does not identify with any gender'], a: 1, why: 'A transgender man has a male gender identity and was assigned female at birth, so he may need gynecologic or obstetric care.' },
        { ref: '2.3', q: 'Which are among the six cultural phenomena of the Giger and Davidhizar Transcultural Assessment Model? Select all that apply.', o: ['Communication', 'Personal space', 'Time orientation', 'Income level', 'Biological variations', 'Environmental control'], a: [0, 1, 2, 4, 5], why: 'The six are communication, personal space, social organization, time orientation, environmental control and biological variations.' },
        { ref: '2.3', q: 'A Muslim patient in labor seems uncomfortable when a male nurse is assigned. What is the most culturally sensitive action?', o: ['Explain that all nurses are professionals', 'Ask whether she prefers a same-gender caregiver and arrange it if possible', 'Ask her husband to decide', 'Document that she is anxious'], a: 1, why: 'Ask about limits on who can provide care; many Muslim patients prefer a same-gender provider.' },
        { ref: '2.2', q: 'A patient’s outward behavior suggests she is in little pain during labor. What should the nurse do?', o: ['Withhold analgesia because she looks comfortable', 'Use a pain scale to assess her individual pain level', 'Ask her partner how much pain she is in', 'Assume her culture discourages pain medication'], a: 1, why: 'Pain is subjective and culturally expressed. Use a pain scale rather than judging by appearance or making cultural assumptions.' },
        { ref: '2.2', q: 'Which Muslim newborn ritual involves placing a small amount of date or honey on the baby’s palate?', o: ['Cuarentena', 'Tahnik', 'Curanderismo', 'Ayurveda'], a: 1, why: 'Tahnik (with aqiqah and the dua) is a Muslim birth celebration. Cuarentena is the Hispanic 40-day postpartum rest.' },
        { ref: '2.4', q: 'A pregnant migrant farmworker arrives in labor. What is a priority nursing action related to her prenatal care?', o: ['Refer her to a single clinic for future pregnancies', 'Identify all previous prenatal providers and request records', 'Assume she had no prenatal care', 'Start all prenatal labs again'], a: 1, why: 'Frequent moves mean inconsistent prenatal care. The nurse identifies all previous providers and requests records to review.' },
        { ref: '2.4', q: 'What is recommended for an incarcerated person in labor?', o: ['Keep restraints on for safety', 'Labor without restraints or shackles', 'Avoid discussing the baby at all', 'Separate the baby immediately without contact'], a: 1, why: 'ACOG and correctional standards recommend labor without restraints/shackles. The nurse gives nonjudgmental care and helps with grief over separation.' },
    ],
});
