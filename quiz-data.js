// CEFR FULL CURRICULUM DATA
const QUIZ_DATA = {
  a1: {
    grammar: [
      {
        type: "mcq",
        domain: "grammar",
        question: "Choose the correct sentence:",
        options: ["I am a student.", "I is a student.", "I are a student.", "I be a student."],
        correct: 0,
        explanation: "نستخدم 'am' مع الضمير I فقط"
      },
      {
        type: "mcq",
        domain: "grammar",
        question: "She ___ a doctor.",
        options: ["am", "are", "is", "be"],
        correct: 2,
        explanation: "مع he/she/it نستخدم 'is'"
      },
      {
        type: "tf",
        domain: "grammar",
        question: "'They is students' is a correct sentence.",
        correct: false,
        explanation: "الصح: 'They ARE students' — مع they نستخدم are"
      },
      {
        type: "mcq",
        domain: "grammar",
        question: "What is the plural of 'book'?",
        options: ["books", "bookes", "bookies", "book"],
        correct: 0,
        explanation: "الجمع العادي: نضيف s فقط"
      },
      {
        type: "fill",
        domain: "grammar",
        question: "My name ___ Sara. (استخدم الفعل المناسب)",
        answer: "is",
        hint: "هو/هي/اسمي = is",
        explanation: "مع أسماء المفرد نستخدم 'is'"
      }
    ],
    vocabulary: [
      {
        type: "mcq",
        domain: "vocabulary",
        question: "What does 'كتاب' mean in English?",
        options: ["Pen", "Book", "Desk", "Bag"],
        correct: 1,
        explanation: "كتاب = Book"
      },
      {
        type: "mcq",
        domain: "vocabulary",
        question: "Which word is a color?",
        options: ["Run", "Happy", "Red", "Walk"],
        correct: 2,
        explanation: "Red = أحمر — وهو لون"
      }
    ],
    reading: [
      {
        type: "mcq",
        domain: "reading",
        passage: "My name is Tom. I am eight years old. I have a cat. Her name is Mimi. Mimi is white and small.",
        question: "How old is Tom?",
        options: ["Six", "Seven", "Eight", "Nine"],
        correct: 2,
        explanation: "الفقرة تقول: 'I am eight years old'"
      }
    ],
    use_of_english: [
      {
        type: "fill",
        domain: "use_of_english",
        question: "Good ___, my name is Sara. (صباح الخير)",
        answer: "morning",
        hint: "صباح الخير = Good ___",
        explanation: "Good morning = صباح الخير"
      }
    ]
  },
  a2: {
    grammar: [
      {
        type: "mcq",
        domain: "grammar",
        question: "She ___ to school every day.",
        options: ["go", "goes", "going", "gone"],
        correct: 1,
        explanation: "مع he/she/it في Present Simple نضيف s/es للفعل"
      }
    ],
    vocabulary: [
      {
        type: "mcq",
        domain: "vocabulary",
        question: "What is the opposite of 'expensive'?",
        options: ["Beautiful", "Cheap", "Modern", "Heavy"],
        correct: 1,
        explanation: "Expensive = غالي ، Cheap = رخيص"
      }
    ],
    reading: [
      {
        type: "mcq",
        domain: "reading",
        passage: "Ali works in a hospital. He is a doctor. He starts work at 8 o'clock in the morning.",
        question: "What is Ali's job?",
        options: ["Teacher", "Engineer", "Doctor", "Driver"],
        correct: 2,
        explanation: "الفقرة تقول: 'He is a doctor'"
      }
    ],
    use_of_english: [
      {
        type: "fill",
        domain: "use_of_english",
        question: "I haven't seen him ___ Monday. (منذ)",
        answer: "since",
        hint: "since = منذ نقطة زمنية محددة",
        explanation: "since = منذ — نستخدمها مع نقطة زمنية"
      }
    ]
  },
  b1: {
    grammar: [
      {
        type: "mcq",
        domain: "grammar",
        question: "By the time we arrived, the movie ___.",
        options: ["already starts", "has already started", "had already started", "already started"],
        correct: 2,
        explanation: "حدثان في الماضي — الأول يستخدم Past Perfect (had + V3)"
      }
    ],
    vocabulary: [
      {
        type: "mcq",
        domain: "vocabulary",
        question: "What does 'punctual' mean?",
        options: ["Late always", "On time", "Very fast", "Careful"],
        correct: 1,
        explanation: "Punctual = منضبط في المواعيد / دائماً في الوقت"
      }
    ],
    reading: [
      {
        type: "mcq",
        domain: "reading",
        passage: "Social media has changed the way people communicate. Experts warn that too much screen time can cause anxiety.",
        question: "What is the main idea?",
        options: ["Social media is always harmful", "Social media has both benefits and drawbacks", "Experts love social media", "None"],
        correct: 1,
        explanation: "الفقرة تذكر فوائد ومخاطر"
      }
    ],
    use_of_english: [
      {
        type: "fill",
        domain: "use_of_english",
        question: "Despite ___ hard, he failed the exam. (يدرس)",
        answer: "studying",
        hint: "despite + فعل + ing",
        explanation: "Despite يتبعه gerund"
      }
    ]
  },
  b2: {
    grammar: [
      {
        type: "mcq",
        domain: "grammar",
        question: "'She must have forgotten' expresses:",
        options: ["Obligation", "A logical deduction", "Permission", "Future plan"],
        correct: 1,
        explanation: "must have + V3 = استنتاج منطقي عن الماضي"
      }
    ],
    vocabulary: [
      {
        type: "mcq",
        domain: "vocabulary",
        question: "What does 'inevitable' mean?",
        options: ["Unexpected", "Cannot be avoided", "Dangerous", "Hard"],
        correct: 1,
        explanation: "Inevitable = حتمي / لا يمكن تجنبه"
      }
    ],
    reading: [
      {
        type: "mcq",
        domain: "reading",
        passage: "Remote work improves work-life balance but weakens team cohesion.",
        question: "What is a drawback?",
        options: ["Less commuting", "Better balance", "Weakens cohesion", "None"],
        correct: 2,
        explanation: "الفقرة تذكر ضعف التماسك"
      }
    ],
    use_of_english: [
      {
        type: "fill",
        domain: "use_of_english",
        question: " Barely ___ when the argument started. (بمجرد أن جلس)",
        answer: "had he sat down",
        hint: "Inversion",
        explanation: "Barely يستدعي inversion"
      }
    ]
  },
  c1: {
    grammar: [
      {
        type: "mcq",
        domain: "grammar",
        question: "Had I known, I ___ attended.",
        options: ["would", "would have", "will have", "had"],
        correct: 1,
        explanation: "Third conditional"
      }
    ],
    vocabulary: [
      {
        type: "mcq",
        domain: "vocabulary",
        question: "Which word means 'to make a situation worse'?",
        options: ["Mitigate", "Ameliorate", "Exacerbate", "Alleviate"],
        correct: 2,
        explanation: "Exacerbate = يفاقم"
      }
    ],
    reading: [
      {
        type: "mcq",
        domain: "reading",
        passage: "Nudge theory proposes subtle changes in presentation.",
        question: "Main principle?",
        options: ["Laws", "Subtle environmental changes", "Education", "Removal of choices"],
        correct: 1,
        explanation: "Nudge theory uses subtle changes"
      }
    ],
    use_of_english: [
      {
        type: "fill",
        domain: "use_of_english",
        question: "The findings were ___ to previous research — they completely contradicted it.",
        answer: "antithetical",
        hint: "Contradicted",
        explanation: "Antithetical = مناقض"
      }
    ]
  },
  c2: {
    grammar: [
      {
        type: "mcq",
        domain: "grammar",
        question: "Which correctly uses 'zeugma'?",
        options: ["She saw him", "He lost his wallet and his temper", "Rain falls", "Time flies"],
        correct: 1,
        explanation: "Zeugma = lost (wallet + temper)"
      }
    ],
    vocabulary: [
      {
        type: "mcq",
        domain: "vocabulary",
        question: "'Mellifluous' describes a voice that is:",
        options: ["Harsh", "Soft", "Sweetly musical", "Intermittent"],
        correct: 2,
        explanation: "Mellifluous = عذب"
      }
    ],
    reading: [
      {
        type: "mcq",
        domain: "reading",
        passage: "Orwell believed vague writing perpetuates muddled thinking.",
        question: "Orwell's remedy?",
        options: ["Complex words", "Radical simplicity", "Technical vocabulary", "Passive voice"],
        correct: 1,
        explanation: "Orwell advocates radical simplicity"
      }
    ],
    use_of_english: [
      {
        type: "fill",
        domain: "use_of_english",
        question: "The author's ___ prose strips away all sentiment.",
        answer: "austere",
        hint: "Severe and simple",
        explanation: "Austere = قاسٍ / زاهد"
      }
    ]
  }
};

const QUIZZES = [
    { id: 1, level: 'a1', title: 'A1 - Beginner', desc: 'الأساسيات والتحيات', time: 30, icon: 'fa-seedling' },
    { id: 2, level: 'a2', title: 'A2 - Elementary', desc: 'المواقف اليومية البسيطة', time: 30, icon: 'fa-star-half-alt' },
    { id: 3, level: 'b1', title: 'B1 - Intermediate', desc: 'التواصل في العمل والسفر', time: 45, icon: 'fa-fire' },
    { id: 4, level: 'b2', title: 'B2 - Upper Intermediate', desc: 'الطلاقة والمواضيع المعقدة', time: 45, icon: 'fa-gem' },
    { id: 5, level: 'c1', title: 'C1 - Advanced', desc: 'الأسلوب الأكاديمي والاحترافي', time: 60, icon: 'fa-crown' },
    { id: 6, level: 'c2', title: 'C2 - Mastery', desc: 'مستوى المتحدث الأصلي', time: 60, icon: 'fa-bolt' }
];
