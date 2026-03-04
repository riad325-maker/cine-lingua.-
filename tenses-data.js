// tenses-data.js - 12 زمن أساسي في اللغة الإنجليزية
const TENSES_DATA = [
    {
        id: 1,
        name: "Present Simple",
        nameAr: "المضارع البسيط",
        level: "beginner",
        icon: "🕐",
        form: "Subject + Verb (s/es) + Object",
        keywords: ["always", "usually", "often", "sometimes", "never", "every day", "every week"],
        explanation: `يستخدم المضارع البسيط للتعبير عن:
• حقائق عامة (The sun rises in the east)
• عادات وأمور متكررة (I wake up early every day)
• جداول زمنية (The train leaves at 7 pm)`,
        examples: [
            {
                positive: "I eat breakfast every morning.",
                positiveAr: "أتناول الفطور كل صباح.",
                negative: "I don't eat meat.",
                negativeAr: "أنا لا آكل اللحوم.",
                question: "Do you like coffee?",
                questionAr: "هل تحب القهوة؟"
            },
            {
                positive: "She works in a hospital.",
                positiveAr: "هي تعمل في مستشفى.",
                negative: "He doesn't speak Arabic.",
                negativeAr: "هو لا يتحدث العربية.",
                question: "Does he play football?",
                questionAr: "هل يلعب كرة القدم؟"
            },
            {
                positive: "The sun rises in the east.",
                positiveAr: "الشمس تشرق من الشرق.",
                negative: "Cats don't like water.",
                negativeAr: "القطط لا تحب الماء.",
                question: "Do birds fly south in winter?",
                questionAr: "هل تطير الطيور جنوباً في الشتاء؟"
            }
        ],
        exercises: [
            {
                question: "She _____ (go) to school by bus.",
                options: ["go", "goes", "going", "went"],
                correct: 1,
                explanation: "مع الفاعل المفرد (She) نضيف es للفعل"
            },
            {
                question: "They _____ (not/like) spicy food.",
                options: ["don't like", "doesn't like", "not like", "no like"],
                correct: 0,
                explanation: "في النفي مع They نستخدم don't + المصدر"
            },
            {
                question: "_____ you _____ (speak) English?",
                options: ["Do/speak", "Does/speak", "Are/speaking", "Have/spoken"],
                correct: 0,
                explanation: "في السؤال مع You نستخدم Do + الفاعل + المصدر"
            }
        ]
    },
    {
        id: 2,
        name: "Present Continuous",
        nameAr: "المضارع المستمر",
        level: "beginner",
        icon: "🔄",
        form: "Subject + am/is/are + Verb-ing",
        keywords: ["now", "right now", "at the moment", "today", "this week", "currently"],
        explanation: `يستخدم المضارع المستمر للتعبير عن:
• شيء يحدث الآن (I am reading now)
• خطط مستقبلية قريبة (I am meeting friends tonight)
• مواقف مؤقتة (She is staying with us this week)`,
        examples: [
            {
                positive: "I am studying English now.",
                positiveAr: "أنا أدرس الإنجليزية الآن.",
                negative: "She is not sleeping at the moment.",
                negativeAr: "هي لا تنام في هذه اللحظة.",
                question: "Are you watching TV?",
                questionAr: "هل تشاهد التلفاز؟"
            },
            {
                positive: "They are playing football.",
                positiveAr: "هم يلعبون كرة القدم.",
                negative: "He isn't working today.",
                negativeAr: "هو لا يعمل اليوم.",
                question: "Is it raining outside?",
                questionAr: "هل تمطر في الخارج؟"
            },
            {
                positive: "We are waiting for the bus.",
                positiveAr: "نحن ننتظر الحافلة.",
                negative: "I am not feeling well.",
                negativeAr: "أنا لا أشعر بتحسن.",
                question: "What are you doing?",
                questionAr: "ماذا تفعل؟"
            }
        ],
        exercises: [
            {
                question: "She _____ (read) a book now.",
                options: ["read", "reads", "is reading", "are reading"],
                correct: 2,
                explanation: "مع She في المضارع المستمر نستخدم is + verb-ing"
            },
            {
                question: "They _____ (not/watch) TV at the moment.",
                options: ["don't watch", "aren't watching", "isn't watching", "not watching"],
                correct: 1,
                explanation: "النفي مع They: are + not + verb-ing"
            },
            {
                question: "_____ he _____ (come) to the party tonight?",
                options: ["Is/coming", "Are/coming", "Does/come", "Do/come"],
                correct: 0,
                explanation: "السؤال مع He: Is + فاعل + verb-ing"
            }
        ]
    },
    {
        id: 3,
        name: "Present Perfect",
        nameAr: "المضارع التام",
        level: "intermediate",
        icon: "✅",
        form: "Subject + have/has + Past Participle (V3)",
        keywords: ["just", "already", "yet", "ever", "never", "since", "for", "recently"],
        explanation: `يستخدم المضارع التام للتعبير عن:
• تجارب حياتية (I have visited Paris)
• أحداث حدثت في الماضي ونتائجها مستمرة (I have lost my keys)
• أحداث حدثت مؤخراً (She has just arrived)`,
        examples: [
            {
                positive: "I have visited London twice.",
                positiveAr: "لقد زرت لندن مرتين.",
                negative: "She hasn't finished her homework yet.",
                negativeAr: "هي لم تنه واجبها بعد.",
                question: "Have you ever tried sushi?",
                questionAr: "هل سبق لك أن جربت السوشي؟"
            },
            {
                positive: "He has just left the office.",
                positiveAr: "لقد غادر المكتب للتو.",
                negative: "We haven't seen that movie.",
                negativeAr: "لم نشاهد ذلك الفيلم.",
                question: "Has she called you?",
                questionAr: "هل اتصلت بك؟"
            },
            {
                positive: "They have lived here for 10 years.",
                positiveAr: "لقد عاشوا هنا لمدة 10 سنوات.",
                negative: "I haven't eaten anything today.",
                negativeAr: "لم آكل أي شيء اليوم.",
                question: "Have you finished your work?",
                questionAr: "هل أنهيت عملك؟"
            }
        ],
        exercises: [
            {
                question: "She _____ (visit) Paris three times.",
                options: ["visited", "has visited", "have visited", "visits"],
                correct: 1,
                explanation: "مع She في المضارع التام نستخدم has + التصريف الثالث"
            },
            {
                question: "I _____ (not/see) that movie yet.",
                options: ["didn't see", "haven't seen", "hasn't seen", "don't see"],
                correct: 1,
                explanation: "النفي مع I: have + not + التصريف الثالث"
            },
            {
                question: "_____ you ever _____ (eat) Japanese food?",
                options: ["Did/eat", "Have/eaten", "Has/eaten", "Do/eat"],
                correct: 1,
                explanation: "السؤال عن التجارب: Have + فاعل + التصريف الثالث"
            }
        ]
    },
    {
        id: 4,
        name: "Present Perfect Continuous",
        nameAr: "المضارع التام المستمر",
        level: "advanced",
        icon: "⏳",
        form: "Subject + have/has + been + Verb-ing",
        keywords: ["for", "since", "all day", "recently", "lately"],
        explanation: `يستخدم المضارع التام المستمر للتعبير عن:
• أفعال بدأت في الماضي وما زالت مستمرة (I have been studying for 3 hours)
• أفعال انتهت مؤخراً ولها تأثير على الحاضر (She is tired because she has been working)`,
        examples: [
            {
                positive: "I have been waiting for an hour.",
                positiveAr: "أنا أنتظر منذ ساعة.",
                negative: "She hasn't been feeling well lately.",
                negativeAr: "هي لم تشعر بتحسن مؤخراً.",
                question: "Have you been studying all day?",
                questionAr: "هل كنت تدرس طوال اليوم؟"
            },
            {
                positive: "They have been living here since 2020.",
                positiveAr: "هم يعيشون هنا منذ 2020.",
                negative: "It hasn't been raining recently.",
                negativeAr: "لم تمطر مؤخراً.",
                question: "Has he been working here long?",
                questionAr: "هل يعمل هنا منذ فترة طويلة؟"
            },
            {
                positive: "We have been learning English for 2 years.",
                positiveAr: "نحن نتعلم الإنجليزية منذ سنتين.",
                negative: "I haven't been sleeping well.",
                negativeAr: "لم أنم جيداً.",
                question: "How long have you been waiting?",
                questionAr: "منذ متى وأنت تنتظر؟"
            }
        ],
        exercises: [
            {
                question: "She _____ (study) for 3 hours.",
                options: ["has been studying", "have been studying", "is studying", "studies"],
                correct: 0,
                explanation: "مع She: has + been + verb-ing"
            },
            {
                question: "They _____ (not/work) here very long.",
                options: ["haven't been working", "hasn't been working", "aren't working", "don't work"],
                correct: 0,
                explanation: "النفي مع They: have + not + been + verb-ing"
            },
            {
                question: "How long _____ you _____ (wait)?",
                options: ["have/been waiting", "has/been waiting", "are/waiting", "do/wait"],
                correct: 0,
                explanation: "السؤال: How long + have + فاعل + been + verb-ing"
            }
        ]
    },
    {
        id: 5,
        name: "Past Simple",
        nameAr: "الماضي البسيط",
        level: "beginner",
        icon: "📅",
        form: "Subject + Verb (V2) + Object",
        keywords: ["yesterday", "last week", "ago", "in 2020", "when I was young"],
        explanation: `يستخدم الماضي البسيط للتعبير عن:
• أحداث انتهت في الماضي (I visited my grandmother yesterday)
• عادات في الماضي (I played football when I was a child)
• سلسلة من الأحداث في الماضي (I woke up, ate breakfast, and left)`,
        examples: [
            {
                positive: "I visited my grandmother yesterday.",
                positiveAr: "زرت جدتي أمس.",
                negative: "She didn't come to the party.",
                negativeAr: "هي لم تأت إلى الحفلة.",
                question: "Did you see the movie?",
                questionAr: "هل رأيت الفيلم؟"
            },
            {
                positive: "They went to Paris last summer.",
                positiveAr: "ذهبوا إلى باريس الصيف الماضي.",
                negative: "He didn't finish his homework.",
                negativeAr: "هو لم ينه واجبه.",
                question: "What did you eat for dinner?",
                questionAr: "ماذا أكلت على العشاء؟"
            },
            {
                positive: "We bought a new car.",
                positiveAr: "اشترينا سيارة جديدة.",
                negative: "I didn't sleep well last night.",
                negativeAr: "لم أنم جيداً الليلة الماضية.",
                question: "Did they arrive on time?",
                questionAr: "هل وصلوا في الوقت المحدد؟"
            }
        ],
        exercises: [
            {
                question: "She _____ (go) to the cinema last night.",
                options: ["go", "goes", "went", "gone"],
                correct: 2,
                explanation: "في الماضي البسيط مع الأفعال الشاذة نستخدم التصريف الثاني"
            },
            {
                question: "They _____ (not/see) the accident.",
                options: ["didn't saw", "didn't see", "not saw", "don't see"],
                correct: 1,
                explanation: "النفي: did + not + المصدر"
            },
            {
                question: "_____ you _____ (call) me yesterday?",
                options: ["Did/call", "Did/called", "Have/called", "Were/calling"],
                correct: 0,
                explanation: "السؤال: Did + فاعل + المصدر"
            }
        ]
    },
    {
        id: 6,
        name: "Past Continuous",
        nameAr: "الماضي المستمر",
        level: "intermediate",
        icon: "🕰️",
        form: "Subject + was/were + Verb-ing",
        keywords: ["while", "when", "at 8pm last night", "at that time", "all day yesterday"],
        explanation: `يستخدم الماضي المستمر للتعبير عن:
• حدث كان مستمراً في وقت محدد في الماضي (I was watching TV at 8pm)
• حدثين كانا يحدثان في نفس الوقت في الماضي (While I was cooking, he was reading)
• حدث طويل قطعه حدث قصير (I was sleeping when the phone rang)`,
        examples: [
            {
                positive: "I was watching TV at 8pm last night.",
                positiveAr: "كنت أشاهد التلفاز الساعة 8 مساء أمس.",
                negative: "She wasn't sleeping when I called.",
                negativeAr: "لم تكن نائمة عندما اتصلت.",
                question: "What were you doing at 9pm?",
                questionAr: "ماذا كنت تفعل الساعة 9 مساء؟"
            },
            {
                positive: "They were playing football when it started raining.",
                positiveAr: "كانوا يلعبون كرة القدم عندما بدأ المطر.",
                negative: "He wasn't listening to the teacher.",
                negativeAr: "لم يكن يستمع للمعلم.",
                question: "Were you sleeping when I called?",
                questionAr: "هل كنت نائماً عندما اتصلت؟"
            },
            {
                positive: "While I was cooking, he was reading.",
                positiveAr: "بينما كنت أطبخ، كان هو يقرأ.",
                negative: "We weren't expecting this news.",
                negativeAr: "لم نكن نتوقع هذه الأخبار.",
                question: "Was it raining when you left?",
                questionAr: "هل كانت تمطر عندما غادرت؟"
            }
        ],
        exercises: [
            {
                question: "I _____ (watch) TV when you called.",
                options: ["watched", "was watching", "were watching", "have watched"],
                correct: 1,
                explanation: "حدث طويل قطعه حدث قصير: was/were + verb-ing"
            },
            {
                question: "They _____ (not/sleep) at midnight.",
                options: ["didn't sleep", "weren't sleeping", "wasn't sleeping", "not sleeping"],
                correct: 1,
                explanation: "النفي مع They: were + not + verb-ing"
            },
            {
                question: "What _____ you _____ (do) at 8pm?",
                options: ["were/doing", "was/doing", "did/do", "have/done"],
                correct: 0,
                explanation: "السؤال: What + were + فاعل + verb-ing"
            }
        ]
    },
    {
        id: 7,
        name: "Past Perfect",
        nameAr: "الماضي التام",
        level: "advanced",
        icon: "⏪",
        form: "Subject + had + Past Participle (V3)",
        keywords: ["before", "after", "by the time", "already", "never", "until then"],
        explanation: `يستخدم الماضي التام للتعبير عن:
• حدث وقع قبل حدث آخر في الماضي (When I arrived, the train had left)
• حدث انتهى قبل وقت محدد في الماضي (She had finished her work by 6pm)`,
        examples: [
            {
                positive: "When I arrived, they had already left.",
                positiveAr: "عندما وصلت، كانوا قد غادروا بالفعل.",
                negative: "She hadn't finished her homework before dinner.",
                negativeAr: "هي لم تكن قد أنهت واجبها قبل العشاء.",
                question: "Had you ever visited London before?",
                questionAr: "هل سبق لك أن زرت لندن من قبل؟"
            },
            {
                positive: "He had studied English before moving to the US.",
                positiveAr: "كان قد درس الإنجليزية قبل الانتقال إلى أمريكا.",
                negative: "I hadn't eaten anything all day.",
                negativeAr: "لم أكن قد أكلت أي شيء طوال اليوم.",
                question: "Had she called you before you left?",
                questionAr: "هل كانت قد اتصلت بك قبل أن تغادر؟"
            },
            {
                positive: "By the time we arrived, the movie had started.",
                positiveAr: "عندما وصلنا، كان الفيلم قد بدأ.",
                negative: "They hadn't seen each other for years.",
                negativeAr: "لم يكونوا قد رأوا بعضهم منذ سنوات.",
                question: "What had you done before that?",
                questionAr: "ماذا كنت قد فعلت قبل ذلك؟"
            }
        ],
        exercises: [
            {
                question: "When I arrived, they _____ (already/leave).",
                options: ["already left", "had already left", "have already left", "were already leaving"],
                correct: 1,
                explanation: "حدث قبل حدث آخر في الماضي: had + التصريف الثالث"
            },
            {
                question: "She _____ (not/finish) her work by 5pm.",
                options: ["didn't finish", "hadn't finished", "hasn't finished", "wasn't finishing"],
                correct: 1,
                explanation: "النفي: had + not + التصريف الثالث"
            },
            {
                question: "_____ you _____ (see) that movie before?",
                options: ["Did/see", "Had/seen", "Have/seen", "Were/seeing"],
                correct: 1,
                explanation: "السؤال عن تجربة قبل وقت محدد في الماضي"
            }
        ]
    },
    {
        id: 8,
        name: "Past Perfect Continuous",
        nameAr: "الماضي التام المستمر",
        level: "advanced",
        icon: "⏳⏪",
        form: "Subject + had + been + Verb-ing",
        keywords: ["for", "since", "before", "until", "all day", "for hours"],
        explanation: `يستخدم الماضي التام المستمر للتعبير عن:
• حدث كان مستمراً لفترة قبل حدث آخر في الماضي (They had been waiting for an hour when the bus arrived)
• سبب لشيء في الماضي (She was tired because she had been working)`,
        examples: [
            {
                positive: "They had been waiting for an hour when the bus arrived.",
                positiveAr: "كانوا ينتظرون لمدة ساعة عندما وصلت الحافلة.",
                negative: "She hadn't been feeling well before the exam.",
                negativeAr: "لم تكن تشعر بتحسن قبل الامتحان.",
                question: "Had you been studying long before the test?",
                questionAr: "هل كنت تدرس لفترة طويلة قبل الاختبار؟"
            },
            {
                positive: "He was tired because he had been working all day.",
                positiveAr: "كان متعباً لأنه كان يعمل طوال اليوم.",
                negative: "It hadn't been raining before we left.",
                negativeAr: "لم تكن تمطر قبل أن نغادر.",
                question: "How long had they been living there?",
                questionAr: "منذ متى كانوا يعيشون هناك؟"
            },
            {
                positive: "I had been reading for two hours when you called.",
                positiveAr: "كنت أقرأ لمدة ساعتين عندما اتصلت.",
                negative: "We hadn't been waiting long before they arrived.",
                negativeAr: "لم نكن ننتظر طويلاً قبل أن يصلوا.",
                question: "Had she been working here long?",
                questionAr: "هل كانت تعمل هنا منذ فترة طويلة؟"
            }
        ],
        exercises: [
            {
                question: "They _____ (wait) for 30 minutes when the train arrived.",
                options: ["waited", "had been waiting", "were waiting", "have been waiting"],
                correct: 1,
                explanation: "حدث مستمر قبل حدث آخر: had + been + verb-ing"
            },
            {
                question: "She was tired because she _____ (work) all day.",
                options: ["worked", "had been working", "was working", "has been working"],
                correct: 1,
                explanation: "سبب لشيء في الماضي: had + been + verb-ing"
            },
            {
                question: "How long _____ you _____ (wait) before the bus came?",
                options: ["had/been waiting", "have/been waiting", "were/waiting", "did/wait"],
                correct: 0,
                explanation: "السؤال: How long + had + فاعل + been + verb-ing"
            }
        ]
    },
    {
        id: 9,
        name: "Future Simple",
        nameAr: "المستقبل البسيط",
        level: "beginner",
        icon: "🔮",
        form: "Subject + will + Verb (base form)",
        keywords: ["tomorrow", "next week", "soon", "in the future", "later"],
        explanation: `يستخدم المستقبل البسيط للتعبير عن:
• قرارات لحظية (I'll answer the phone)
• توقعات (It will rain tomorrow)
• وعود (I will help you)
• حقائق مستقبلية (The sun will rise at 6am)`,
        examples: [
            {
                positive: "I will call you tomorrow.",
                positiveAr: "سأتصل بك غداً.",
                negative: "She won't come to the party.",
                negativeAr: "هي لن تأتي إلى الحفلة.",
                question: "Will you be there?",
                questionAr: "هل ستكون هناك؟"
            },
            {
                positive: "They will arrive at 8pm.",
                positiveAr: "سيصلون الساعة 8 مساء.",
                negative: "He won't like this movie.",
                negativeAr: "هو لن يعجبه هذا الفيلم.",
                question: "What will you do tomorrow?",
                questionAr: "ماذا ستفعل غداً؟"
            },
            {
                positive: "I think it will rain later.",
                positiveAr: "أعتقد أنها ستمطر لاحقاً.",
                negative: "We won't be late.",
                negativeAr: "لن نتأخر.",
                question: "When will they arrive?",
                questionAr: "متى سيصلون؟"
            }
        ],
        exercises: [
            {
                question: "I _____ (call) you later.",
                options: ["call", "will call", "am calling", "going to call"],
                correct: 1,
                explanation: "في المستقبل البسيط نستخدم will + المصدر"
            },
            {
                question: "She _____ (not/come) to the meeting.",
                options: ["won't come", "doesn't come", "isn't coming", "not come"],
                correct: 0,
                explanation: "النفي: will + not = won't + المصدر"
            },
            {
                question: "_____ they _____ (arrive) on time?",
                options: ["Will/arrive", "Do/arrive", "Are/arriving", "Have/arrived"],
                correct: 0,
                explanation: "السؤال: Will + فاعل + المصدر"
            }
        ]
    },
    {
        id: 10,
        name: "Future Continuous",
        nameAr: "المستقبل المستمر",
        level: "intermediate",
        icon: "🔄🔮",
        form: "Subject + will + be + Verb-ing",
        keywords: ["at this time tomorrow", "this time next week", "in the future"],
        explanation: `يستخدم المستقبل المستمر للتعبير عن:
• حدث سيكون مستمراً في وقت محدد في المستقبل (I will be sleeping at midnight)
• أحداث مستقبلية مؤكدة (She will be arriving tomorrow)`,
        examples: [
            {
                positive: "I will be sleeping at midnight.",
                positiveAr: "سأكون نائماً عند منتصف الليل.",
                negative: "She won't be working tomorrow.",
                negativeAr: "لن تكون تعمل غداً.",
                question: "Will you be using the car tonight?",
                questionAr: "هل ستستخدم السيارة الليلة؟"
            },
            {
                positive: "This time next week, I'll be flying to Paris.",
                positiveAr: "في مثل هذا الوقت الأسبوع القادم، سأكون مسافراً إلى باريس.",
                negative: "He won't be joining us for dinner.",
                negativeAr: "لن ينضم إلينا على العشاء.",
                question: "What will you be doing at 8pm?",
                questionAr: "ماذا ستفعل الساعة 8 مساء؟"
            },
            {
                positive: "They will be waiting for us at the airport.",
                positiveAr: "سيكونون في انتظارنا في المطار.",
                negative: "I won't be attending the meeting.",
                negativeAr: "لن أحضر الاجتماع.",
                question: "Will she be coming to the party?",
                questionAr: "هل ستأتي إلى الحفلة؟"
            }
        ],
        exercises: [
            {
                question: "At 8pm, I _____ (watch) a movie.",
                options: ["will watch", "will be watching", "am watching", "watch"],
                correct: 1,
                explanation: "حدث مستمر في وقت محدد في المستقبل: will + be + verb-ing"
            },
            {
                question: "She _____ (not/work) tomorrow.",
                options: ["won't work", "won't be working", "isn't working", "doesn't work"],
                correct: 1,
                explanation: "النفي: will + not + be + verb-ing"
            },
            {
                question: "What _____ you _____ (do) at 10am?",
                options: ["will/do", "will/be doing", "are/doing", "do/do"],
                correct: 1,
                explanation: "السؤال: What + will + فاعل + be + verb-ing"
            }
        ]
    },
    {
        id: 11,
        name: "Future Perfect",
        nameAr: "المستقبل التام",
        level: "advanced",
        icon: "✅🔮",
        form: "Subject + will + have + Past Participle (V3)",
        keywords: ["by", "by the time", "before", "in two years"],
        explanation: `يستخدم المستقبل التام للتعبير عن:
• حدث سينتهي قبل وقت محدد في المستقبل (I will have finished my work by 5pm)
• إنجازات مستقبلية (By next year, I will have graduated)`,
        examples: [
            {
                positive: "I will have finished my work by 5pm.",
                positiveAr: "سأكون قد أنهيت عملي بحلول الساعة 5 مساء.",
                negative: "She won't have arrived by then.",
                negativeAr: "لن تكون قد وصلت بحلول ذلك الوقت.",
                question: "Will you have finished before dinner?",
                questionAr: "هل ستكون قد انتهيت قبل العشاء؟"
            },
            {
                positive: "By next month, I will have saved enough money.",
                positiveAr: "بحلول الشهر القادم، سأكون قد وفرت ما يكفي من المال.",
                negative: "They won't have built the house by winter.",
                negativeAr: "لن يكونوا قد بنوا المنزل بحلول الشتاء.",
                question: "How many books will you have read by the end of the year?",
                questionAr: "كم كتاباً ستكون قد قرأت بنهاية العام؟"
            },
            {
                positive: "She will have graduated by 2025.",
                positiveAr: "ستكون قد تخرجت بحلول 2025.",
                negative: "I won't have finished the project by Friday.",
                negativeAr: "لن أكون قد أنهيت المشروع بحلول الجمعة.",
                question: "Will they have arrived before the meeting starts?",
                questionAr: "هل سيكونون قد وصلوا قبل بدء الاجتماع؟"
            }
        ],
        exercises: [
            {
                question: "By 6pm, I _____ (finish) my homework.",
                options: ["will finish", "will have finished", "have finished", "finish"],
                correct: 1,
                explanation: "حدث سينتهي قبل وقت محدد في المستقبل: will + have + التصريف الثالث"
            },
            {
                question: "She _____ (not/arrive) by the time we leave.",
                options: ["won't arrive", "won't have arrived", "hasn't arrived", "doesn't arrive"],
                correct: 1,
                explanation: "النفي: will + not + have + التصريف الثالث"
            },
            {
                question: "_____ you _____ (finish) the report by Friday?",
                options: ["Will/have finished", "Will/finish", "Have/finished", "Are/finishing"],
                correct: 0,
                explanation: "السؤال: Will + فاعل + have + التصريف الثالث"
            }
        ]
    },
    {
        id: 12,
        name: "Future Perfect Continuous",
        nameAr: "المستقبل التام المستمر",
        level: "advanced",
        icon: "⏳✅🔮",
        form: "Subject + will + have + been + Verb-ing",
        keywords: ["by", "for", "by the time", "for years"],
        explanation: `يستخدم المستقبل التام المستمر للتعبير عن:
• حدث سيكون قد استمر لفترة قبل وقت محدد في المستقبل (By December, I will have been working here for 5 years)
• مدة حدث مستقبلي (She will have been studying for 3 hours by the time we arrive)`,
        examples: [
            {
                positive: "By December, I will have been working here for 5 years.",
                positiveAr: "بحلول ديسمبر، سأكون قد عملت هنا لمدة 5 سنوات.",
                negative: "She won't have been waiting long by the time we arrive.",
                negativeAr: "لن تكون قد انتظرت طويلاً بحلول وقت وصولنا.",
                question: "How long will you have been studying English by next year?",
                questionAr: "كم من الوقت ستكون قد درست الإنجليزية بحلول العام القادم؟"
            },
            {
                positive: "By 2025, they will have been living here for a decade.",
                positiveAr: "بحلول 2025، سيكونوا قد عاشوا هنا لمدة عقد.",
                negative: "I won't have been sleeping long when you call.",
                negativeAr: "لن أكون قد نمت طويلاً عندما تتصل.",
                question: "Will you have been working here for 10 years by 2025?",
                questionAr: "هل ستكون قد عملت هنا لمدة 10 سنوات بحلول 2025؟"
            },
            {
                positive: "By the time we arrive, she will have been cooking for hours.",
                positiveAr: "بحلول وقت وصولنا، ستكون قد طبخت لساعات.",
                negative: "They won't have been traveling for long before they stop.",
                negativeAr: "لن يكونوا قد سافروا طويلاً قبل أن يتوقفوا.",
                question: "How long will they have been waiting by the time the bus comes?",
                questionAr: "كم من الوقت سيكونون قد انتظروا بحلول وقت وصول الحافلة؟"
            }
        ],
        exercises: [
            {
                question: "By next month, I _____ (work) here for 2 years.",
                options: ["will have been working", "will work", "will have worked", "have been working"],
                correct: 0,
                explanation: "حدث سيستمر حتى وقت محدد في المستقبل: will + have + been + verb-ing"
            },
            {
                question: "She _____ (not/live) here long by then.",
                options: ["won't have been living", "won't live", "hasn't lived", "doesn't live"],
                correct: 0,
                explanation: "النفي: will + not + have + been + verb-ing"
            },
            {
                question: "How long _____ you _____ (study) by the time the exam starts?",
                options: ["will/have been studying", "will/study", "have/studied", "are/studying"],
                correct: 0,
                explanation: "السؤال عن المدة: How long + will + فاعل + have + been + verb-ing"
            }
        ]
    }
];

// دوال المساعدة
function getTensesByLevel(level) {
    if (level === 'all') return TENSES_DATA;
    return TENSES_DATA.filter(tense => tense.level === level);
}

function getTenseById(id) {
    return TENSES_DATA.find(tense => tense.id === id);
}

function getSavedTenses(savedIds) {
    return TENSES_DATA.filter(tense => savedIds.includes(tense.id));
}

// التحقق من التحميل
console.log('✅ tenses-data.js loaded with', TENSES_DATA.length, 'أزمنة');
