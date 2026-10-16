/*
 * Subject registry.
 *
 * Each subject lists its book's table of contents. Chapter content lives in
 * data/<subject id>/chNN.js and registers itself with STUDY.addChapter().
 * Section entries are [number, title, printed page]; the title must match the
 * book exactly because the OpenStax web URL is derived from it.
 */
window.STUDY = {
    subjects: [],
    chapters: {},
    addSubject(subject) {
        this.subjects.push(subject);
    },
    addChapter(subjectId, chapter) {
        (this.chapters[subjectId] = this.chapters[subjectId] || {})[chapter.n] = chapter;
    },
};

STUDY.addSubject({
    id: 'obgyn',
    title: 'Obstetric Nursing and Gynecology',
    subtitle: 'Maternal Health',
    book: {
        title: 'Maternal-Newborn Nursing',
        publisher: 'OpenStax',
        slug: 'maternal-newborn-nursing',
        license: 'CC BY-NC-SA 4.0',
    },
    units: [
        {
            title: 'Introduction to Maternal-Newborn and Women’s Health Nursing',
            chapters: [
                { n: 1, title: 'Foundations in Maternal-Newborn and Women’s Health Nursing', page: 9, sections: [
                    ['1.1', 'Current Trends in Women’s Health Care', 10],
                    ['1.2', 'Standards of Maternal, Newborn, and Gynecologic Nursing Care', 14],
                    ['1.3', 'Perinatal Care: Regional and Levels of Care and Transport', 18],
                    ['1.4', 'Ethical and Legal Concerns', 21],
                ] },
                { n: 2, title: 'Culturally Competent Nursing Care', page: 39, sections: [
                    ['2.1', 'Person- and Family-Centered Care', 40],
                    ['2.2', 'Family Health and Cultural Factors', 47],
                    ['2.3', 'Culturally Competent Care', 52],
                    ['2.4', 'Families at Higher Risk for Poor Health Outcomes', 55],
                ] },
            ],
        },
        {
            title: 'Women’s Health Through the Lifespan',
            chapters: [
                { n: 3, title: 'Health Promotion, Disease and Injury Prevention, and Well-Person Care', page: 71, sections: [
                    ['3.1', 'Factors Influencing the Health of Persons Assigned Female at Birth', 72],
                    ['3.2', 'Leading Causes of Death and Health Screenings', 80],
                    ['3.3', 'Health Promotion', 93],
                    ['3.4', 'Well-Person Care', 111],
                    ['3.5', 'Preconceptual Care', 119],
                ] },
                { n: 4, title: 'Influences on Fertility', page: 147, sections: [
                    ['4.1', 'Fertility and Conception', 147],
                    ['4.2', 'Genetics', 155],
                    ['4.3', 'Causes of Infertility', 164],
                    ['4.4', 'Treating Infertility', 173],
                ] },
                { n: 5, title: 'Family Planning', page: 201, sections: [
                    ['5.1', 'Contraception: The Nurse’s Role', 202],
                    ['5.2', 'Natural Methods of Contraception', 205],
                    ['5.3', 'Barrier Methods of Contraception', 210],
                    ['5.4', 'Short-Acting Reversible Hormonal Methods of Contraception', 219],
                    ['5.5', 'Long-Acting Reversible Contraception', 230],
                    ['5.6', 'Emergency Contraception', 236],
                    ['5.7', 'Sterilization', 239],
                    ['5.8', 'Induced Abortion', 242],
                ] },
                { n: 6, title: 'Structural and Tissue Disorders of the Reproductive System', page: 261, sections: [
                    ['6.1', 'Functional Disorders', 262],
                    ['6.2', 'Structural Disorders', 275],
                    ['6.3', 'Benign Growths', 279],
                    ['6.4', 'Malignant Neoplasms', 283],
                ] },
                { n: 7, title: 'Commonly Occurring Reproductive and Genitourinary System Infections', page: 301, sections: [
                    ['7.1', 'Sexually Transmitted Infections', 302],
                    ['7.2', 'Vaginal Infections and Other Conditions', 325],
                    ['7.3', 'Urinary Tract Infections', 332],
                ] },
                { n: 8, title: 'Disorders of the Breast', page: 345, sections: [
                    ['8.1', 'Benign Disorders of the Breast', 346],
                    ['8.2', 'Cancer of the Breast', 352],
                ] },
                { n: 9, title: 'Violence Against Women', page: 383, sections: [
                    ['9.1', 'Incidence, History, and Psychosocial Factors', 383],
                    ['9.2', 'Domestic and Intimate Partner Violence', 388],
                    ['9.3', 'Sexual Abuse and Assault', 391],
                    ['9.4', 'Human Trafficking', 397],
                    ['9.5', 'Social and Cultural Practices of Violence Against Women', 400],
                    ['9.6', 'Psychological Trauma of Violence Against Women', 403],
                ] },
            ],
        },
        {
            title: 'Care During Pregnancy',
            chapters: [
                { n: 10, title: 'Pregnancy', page: 421, sections: [
                    ['10.1', 'Physiologic Changes Due to Pregnancy', 422],
                    ['10.2', 'Psychosocial Aspects of Pregnancy', 440],
                    ['10.3', 'Common Discomforts of Pregnancy', 444],
                    ['10.4', 'Fetal Growth and Development', 453],
                    ['10.5', 'Choosing a Health Care Provider', 467],
                    ['10.6', 'Choosing a Birthing Place', 469],
                ] },
                { n: 11, title: 'Prenatal Care', page: 485, sections: [
                    ['11.1', 'First Prenatal Visit', 486],
                    ['11.2', 'Care in the First Trimester of Pregnancy', 513],
                    ['11.3', 'Care in the Second Trimester of Pregnancy', 515],
                    ['11.4', 'Care in the Third Trimester of Pregnancy', 520],
                    ['11.5', 'Family Assessment and Nursing Interventions', 525],
                ] },
                { n: 12, title: 'Pregnancy at Risk', page: 537, sections: [
                    ['12.1', 'Preconception Conditions Affecting Pregnancy', 538],
                    ['12.2', 'Conditions Limited to Pregnancy', 554],
                ] },
                { n: 13, title: 'Prenatal Testing', page: 591, sections: [
                    ['13.1', 'Prenatal Testing during the First Trimester', 592],
                    ['13.2', 'Prenatal Testing during the Second Trimester', 599],
                    ['13.3', 'Prenatal Testing during the Third Trimester', 610],
                ] },
                { n: 14, title: 'Childbirth Education Options', page: 631, sections: [
                    ['14.1', 'Lamaze International Childbirth Education', 632],
                    ['14.2', 'Bradley Method', 637],
                    ['14.3', 'Hypnobirthing: The Mongan Method', 639],
                    ['14.4', 'Alexander Technique', 642],
                    ['14.5', 'Birth Plans', 646],
                ] },
            ],
        },
        {
            title: 'Care During Labor and Birth',
            chapters: [
                { n: 15, title: 'Process of Labor and Birth', page: 657, sections: [
                    ['15.1', 'Factors Influencing the Process of Labor and Birth', 658],
                    ['15.2', 'Stages of Labor', 671],
                    ['15.3', 'Physiologic Adaptations during Labor and Birth', 677],
                    ['15.4', 'Psychosocial Adaptations during Labor and Birth', 680],
                    ['15.5', 'Family Adaptations during Labor and Birth', 682],
                ] },
                { n: 16, title: 'Electronic Fetal and Uterine Contraction Monitoring', page: 695, sections: [
                    ['16.1', 'Basic Terms of Fetal Heart Rate and Contraction Patterns', 696],
                    ['16.2', 'External and Internal Monitoring', 711],
                    ['16.3', 'Physiological Influences on Fetal Heart Rate Patterns', 724],
                    ['16.4', 'Nursing Interventions Based on Fetal Heart Rate and Uterine Contraction Patterns', 726],
                    ['16.5', 'Intrauterine Resuscitation', 729],
                ] },
                { n: 17, title: 'Pain Management During Labor and Birth', page: 741, sections: [
                    ['17.1', 'Nonpharmacological Pain Management', 742],
                    ['17.2', 'Pharmacological Pain Management', 753],
                    ['17.3', 'Anesthesia', 755],
                ] },
                { n: 18, title: 'Nursing Care and Interventions During Labor and Birth', page: 771, sections: [
                    ['18.1', 'Nursing Care During the First Stage of Labor', 771],
                    ['18.2', 'Nursing Care During the Second Stage of Labor', 785],
                    ['18.3', 'Nursing Care During the Third Stage of Labor', 792],
                    ['18.4', 'Nursing Care During the Fourth Stage of Labor', 799],
                ] },
                { n: 19, title: 'Complications of Labor and Birth', page: 813, sections: [
                    ['19.1', 'Labor Dystocia', 814],
                    ['19.2', 'Medical Interventions During Labor', 820],
                    ['19.3', 'Obstetrical Conditions Affecting Labor and Birth', 827],
                    ['19.4', 'Preexisting Conditions of the Pregnant Person Placing the Delivery at Risk', 839],
                    ['19.5', 'Interventions During Birth', 840],
                    ['19.6', 'Cesarean Section', 842],
                    ['19.7', 'Obstetrical Emergencies', 848],
                    ['19.8', 'Complications of the Second Stage of Labor', 854],
                    ['19.9', 'Complications in the Third Stage of Labor', 855],
                    ['19.10', 'Monitoring the Person in Labor for Complications Developing During the Process of Labor and Birth', 859],
                ] },
            ],
        },
        {
            title: 'Care During the Postpartum Period',
            chapters: [
                { n: 20, title: 'Postpartum Care', page: 879, sections: [
                    ['20.1', 'Physiologic Changes During the Postpartum Period', 879],
                    ['20.2', 'Psychosocial Adaptation to Parenthood', 900],
                    ['20.3', 'Nursing Care During the Postpartum Period', 905],
                ] },
                { n: 21, title: 'Postpartum Complications', page: 927, sections: [
                    ['21.1', 'Postpartum Infections', 928],
                    ['21.2', 'Postpartum Hemorrhage', 932],
                    ['21.3', 'Breasts and Breast-Feeding', 942],
                    ['21.4', 'Cesarean Birth Discomforts', 945],
                    ['21.5', 'Postpartum Mood Disorders and Psychiatric Disorders', 950],
                ] },
            ],
        },
        {
            title: 'Newborn Care',
            chapters: [
                { n: 22, title: 'Immediate Care of the Newborn', page: 963, sections: [
                    ['22.1', 'Apgar Scoring', 963],
                    ['22.2', 'Physiological Adaptation and Transition', 971],
                    ['22.3', 'Neutral Thermal Environment', 980],
                ] },
                { n: 23, title: 'Newborn Assessment', page: 995, sections: [
                    ['23.1', 'Physical Assessment of the Newborn', 996],
                    ['23.2', 'Estimation of Gestational Age of the Newborn and Newborn Behavioral Assessment', 1019],
                ] },
                { n: 24, title: 'Care of the Typical Newborn', page: 1035, sections: [
                    ['24.1', 'Basic Newborn Care', 1035],
                    ['24.2', 'Care of Common Problems in the Newborn', 1065],
                    ['24.3', 'Newborn Discharge Planning and Parent Education', 1080],
                ] },
                { n: 25, title: 'Care of the Newborn at Risk', page: 1103, sections: [
                    ['25.1', 'Birth-Related Complications', 1104],
                    ['25.2', 'Congenital, Genetic, and Acquired Complications', 1109],
                    ['25.3', 'Newborn Resuscitation', 1125],
                    ['25.4', 'Preterm Newborn', 1131],
                    ['25.5', 'Parent-Newborn Bonding and Attachment', 1140],
                    ['25.6', 'Discharge Planning', 1143],
                ] },
                { n: 26, title: 'Perinatal Bereavement', page: 1161, sections: [
                    ['26.1', 'Pregnancy Loss', 1161],
                    ['26.2', 'Intrapartum Fetal Death', 1164],
                    ['26.3', 'Newborn Loss', 1169],
                ] },
                { n: 27, title: 'Unfolding Case Study: Applying Clinical Judgment', page: 1181, sections: [
                    ['27.1', 'Clinical Judgment within the Nursing Process', 1181],
                    ['27.2', 'Measuring Clinical Judgment within Nursing Practice', 1186],
                ] },
            ],
        },
    ],
});
