// words-data.js
const WORDS_DATA = {
    beginner: [
        { id: 101, word: "hello", arabic: "مرحباً", pronunciation: "هالو", example: "Hello, how are you?", exampleArabic: "مرحباً، كيف حالك؟", category: "تحيات" },
        { id: 102, word: "goodbye", arabic: "وداعاً", pronunciation: "جود باي", example: "Say goodbye to your friends.", exampleArabic: "قل وداعاً لأصدقائك", category: "تحيات" },
        { id: 103, word: "please", arabic: "من فضلك", pronunciation: "بليز", example: "Can you help me, please?", exampleArabic: "هل يمكنك مساعدتي، من فضلك؟", category: "أدب" },
        { id: 104, word: "thank you", arabic: "شكراً لك", pronunciation: "ثانك يو", example: "Thank you for your help.", exampleArabic: "شكراً لك على مساعدتك", category: "أدب" },
        { id: 105, word: "yes", arabic: "نعم", pronunciation: "يس", example: "Yes, I understand.", exampleArabic: "نعم، أنا أفهم", category: "أساسيات" },
        { id: 106, word: "no", arabic: "لا", pronunciation: "نو", example: "No, I don't want to go.", exampleArabic: "لا، لا أريد الذهاب", category: "أساسيات" },
        { id: 107, word: "name", arabic: "اسم", pronunciation: "نيم", example: "My name is Ahmed.", exampleArabic: "اسمي أحمد", category: "تعارف" },
        { id: 108, word: "friend", arabic: "صديق", pronunciation: "فريند", example: "He is my best friend.", exampleArabic: "هو صديقي المفضل", category: "علاقات" },
        { id: 109, word: "family", arabic: "عائلة", pronunciation: "فاميلي", example: "I love my family.", exampleArabic: "أنا أحب عائلتي", category: "علاقات" },
        { id: 110, word: "mother", arabic: "أم", pronunciation: "ماذر", example: "My mother cooks food.", exampleArabic: "أمي تطبخ الطعام", category: "عائلة" },
        { id: 111, word: "father", arabic: "أب", pronunciation: "فاذر", example: "My father works hard.", exampleArabic: "أبي يعمل بجد", category: "عائلة" },
        { id: 112, word: "brother", arabic: "أخ", pronunciation: "براذر", example: "I play with my brother.", exampleArabic: "ألعب مع أخي", category: "عائلة" },
        { id: 113, word: "sister", arabic: "أخت", pronunciation: "سيستر", example: "My sister is younger.", exampleArabic: "أختي أصغر مني", category: "عائلة" },
        { id: 114, word: "house", arabic: "منزل", pronunciation: "هاوس", example: "We live in a big house.", exampleArabic: "نعيش في منزل كبير", category: "مكان" },
        { id: 115, word: "car", arabic: "سيارة", pronunciation: "كار", example: "The car is red.", exampleArabic: "السيارة حمراء", category: "مواصلات" },
        { id: 116, word: "water", arabic: "ماء", pronunciation: "ووتر", example: "Drink water every day.", exampleArabic: "اشرب الماء كل يوم", category: "طعام" },
        { id: 117, word: "food", arabic: "طعام", pronunciation: "فود", example: "The food is delicious.", exampleArabic: "الطعام لذيذ", category: "طعام" },
        { id: 118, word: "eat", arabic: "يأكل", pronunciation: "إيت", example: "I eat breakfast at 7.", exampleArabic: "أتناول الفطور الساعة 7", category: "أفعال" },
        { id: 119, word: "drink", arabic: "يشرب", pronunciation: "درينك", example: "Drink your milk.", exampleArabic: "اشرب حليبك", category: "أفعال" },
        { id: 120, word: "sleep", arabic: "ينام", pronunciation: "سليب", example: "Sleep early tonight.", exampleArabic: "نم مبكراً الليلة", category: "أفعال" },
        { id: 121, word: "book", arabic: "كتاب", pronunciation: "بوك", example: "Read this book.", exampleArabic: "اقرأ هذا الكتاب", category: "أدوات" },
        { id: 122, word: "pen", arabic: "قلم", pronunciation: "بين", example: "I need a pen.", exampleArabic: "أحتاج قلم", category: "أدوات" },
        { id: 123, word: "school", arabic: "مدرسة", pronunciation: "سكول", example: "I go to school.", exampleArabic: "أنا أذهب للمدرسة", category: "مكان" },
        { id: 124, word: "teacher", arabic: "معلم", pronunciation: "تيتشر", example: "The teacher is kind.", exampleArabic: "المعلم طيب", category: "وظائف" },
        { id: 125, word: "student", arabic: "طالب", pronunciation: "ستودنت", example: "He is a good student.", exampleArabic: "هو طالب جيد", category: "وظائف" },
        { id: 126, word: "happy", arabic: "سعيد", pronunciation: "هابي", example: "I am happy today.", exampleArabic: "أنا سعيد اليوم", category: "مشاعر" },
        { id: 127, word: "sad", arabic: "حزين", pronunciation: "ساد", example: "Don't be sad.", exampleArabic: "لا تحزن", category: "مشاعر" },
        { id: 128, word: "big", arabic: "كبير", pronunciation: "بيج", example: "The elephant is big.", exampleArabic: "الفيل كبير", category: "صفات" },
        { id: 129, word: "small", arabic: "صغير", pronunciation: "سمول", example: "The mouse is small.", exampleArabic: "الفأر صغير", category: "صفات" },
        { id: 130, word: "hot", arabic: "حار", pronunciation: "هوت", example: "The coffee is hot.", exampleArabic: "القهوة حارة", category: "صفات" },
        { id: 131, word: "cold", arabic: "بارد", pronunciation: "كولد", example: "The winter is cold.", exampleArabic: "الشتاء بارد", category: "صفات" },
        { id: 132, word: "sun", arabic: "شمس", pronunciation: "صن", example: "The sun is bright.", exampleArabic: "الشمس ساطعة", category: "طبيعة" },
        { id: 133, word: "moon", arabic: "قمر", pronunciation: "مون", example: "The moon is full.", exampleArabic: "القمر كامل", category: "طبيعة" },
        { id: 134, word: "sky", arabic: "سماء", pronunciation: "سكاي", example: "The sky is blue.", exampleArabic: "السماء زرقاء", category: "طبيعة" },
        { id: 135, word: "tree", arabic: "شجرة", pronunciation: "تري", example: "This is a tall tree.", exampleArabic: "هذه شجرة طويلة", category: "طبيعة" },
        { id: 136, word: "flower", arabic: "وردة", pronunciation: "فلاور", example: "I like this flower.", exampleArabic: "أحب هذه الوردة", category: "طبيعة" },
        { id: 137, word: "milk", arabic: "حليب", pronunciation: "ميلك", example: "Drink your milk.", exampleArabic: "اشرب حليبك", category: "طعام" },
        { id: 138, word: "bread", arabic: "خبز", pronunciation: "بريد", example: "I want some bread.", exampleArabic: "أريد بعض الخبز", category: "طعام" },
        { id: 139, word: "apple", arabic: "تفاحة", pronunciation: "آبل", example: "Eat an apple.", exampleArabic: "كل تفاحة", category: "طعام" },
        { id: 140, word: "door", arabic: "باب", pronunciation: "دور", example: "Close the door.", exampleArabic: "أغلق الباب", category: "أثاث" },
        { id: 141, word: "window", arabic: "نافذة", pronunciation: "ويندو", example: "Open the window.", exampleArabic: "افتح النافذة", category: "أثاث" },
        { id: 142, word: "chair", arabic: "كرسي", pronunciation: "تشير", example: "Sit on the chair.", exampleArabic: "اجلس على الكرسي", category: "أثاث" },
        { id: 143, word: "table", arabic: "طاولة", pronunciation: "تيبل", example: "Put it on the table.", exampleArabic: "ضعه على الطاولة", category: "أثاث" },
        { id: 144, word: "boy", arabic: "ولد", pronunciation: "بوي", example: "The boy is playing.", exampleArabic: "الولد يلعب", category: "ناس" },
        { id: 145, word: "girl", arabic: "بنت", pronunciation: "جيرل", example: "The girl is singing.", exampleArabic: "البنت تغني", category: "ناس" },
        { id: 146, word: "man", arabic: "رجل", pronunciation: "مان", example: "He is a tall man.", exampleArabic: "هو رجل طويل", category: "ناس" },
        { id: 147, word: "woman", arabic: "امرأة", pronunciation: "وومان", example: "She is a kind woman.", exampleArabic: "هي امرأة طيبة", category: "ناس" },
        { id: 148, word: "city", arabic: "مدينة", pronunciation: "سيتي", example: "I live in a big city.", exampleArabic: "أنا أعيش في مدينة كبيرة", category: "مكان" },
        { id: 149, word: "work", arabic: "يعمل", pronunciation: "ورك", example: "I work every day.", exampleArabic: "أنا أعمل كل يوم", category: "أفعال" },
        { id: 150, word: "play", arabic: "يلعب", pronunciation: "بلاي", example: "Let's play football.", exampleArabic: "لنلعب كرة القدم", category: "أفعال" }
    ],
    intermediate: [
        { id: 201, word: "understand", arabic: "يفهم", pronunciation: "أندرستاند", example: "I understand the lesson now.", exampleArabic: "أنا أفهم الدرس الآن", category: "أفعال" },
        { id: 202, word: "interesting", arabic: "مثير للاهتمام", pronunciation: "إينترستينج", example: "This book is very interesting.", exampleArabic: "هذا الكتاب مثير جداً للاهتمام", category: "صفات" },
        { id: 203, word: "different", arabic: "مختلف", pronunciation: "ديفرنت", example: "We have different opinions.", exampleArabic: "لدينا آراء مختلفة", category: "صفات" },
        { id: 204, word: "important", arabic: "مهم", pronunciation: "إمبورتنت", example: "Education is important.", exampleArabic: "التعليم مهم", category: "صفات" },
        { id: 205, word: "believe", arabic: "يؤمن", pronunciation: "بيليف", example: "I believe in you.", exampleArabic: "أنا أؤمن بك", category: "أفعال" },
        { id: 206, word: "remember", arabic: "يتذكر", pronunciation: "ريميمبر", example: "Remember to call me.", exampleArabic: "تذكر أن تتصل بي", category: "أفعال" },
        { id: 207, word: "forget", arabic: "ينسى", pronunciation: "فورجيت", example: "Don't forget your keys.", exampleArabic: "لا تنس مفاتيحك", category: "أفعال" },
        { id: 208, word: "promise", arabic: "يعد", pronunciation: "بروميس", example: "I promise to help you.", exampleArabic: "أعدك بمساعدتك", category: "أفعال" },
        { id: 209, word: "decide", arabic: "يقرر", pronunciation: "ديسايد", example: "I decided to learn English.", exampleArabic: "قررت أن أتعلم الإنجليزية", category: "أفعال" },
        { id: 210, word: "travel", arabic: "يسافر", pronunciation: "ترافل", example: "I want to travel to London.", exampleArabic: "أريد السفر إلى لندن", category: "سفر" },
        { id: 211, word: "experience", arabic: "خبرة", pronunciation: "إكسيبرينس", example: "I have five years of experience.", exampleArabic: "لدي خمس سنوات من الخبرة", category: "عمل" },
        { id: 212, word: "information", arabic: "معلومات", pronunciation: "إنفورميشن", example: "I need more information.", exampleArabic: "أحتاج لمزيد من المعلومات", category: "عام" },
        { id: 213, word: "opportunity", arabic: "فرصة", pronunciation: "أوبورتيونيتي", example: "It's a great opportunity.", exampleArabic: "إنها فرصة عظيمة", category: "عام" },
        { id: 214, word: "improve", arabic: "يتحسن", pronunciation: "إمبروف", example: "I want to improve my English.", exampleArabic: "أريد تحسين لغتي الإنجليزية", category: "أفعال" },
        { id: 215, word: "describe", arabic: "يصف", pronunciation: "ديسكرايب", example: "Can you describe the man?", exampleArabic: "هل يمكنك وصف الرجل؟", category: "أفعال" },
        { id: 216, word: "suggest", arabic: "يقترح", pronunciation: "ساجيست", example: "What do you suggest?", exampleArabic: "ماذا تقترح؟", category: "أفعال" },
        { id: 217, word: "necessary", arabic: "ضروري", pronunciation: "نيسيساري", example: "It's necessary to study.", exampleArabic: "من الضروري الدراسة", category: "صفات" },
        { id: 218, word: "possible", arabic: "ممكن", pronunciation: "بوسبل", example: "Everything is possible.", exampleArabic: "كل شيء ممكن", category: "صفات" },
        { id: 219, word: "impossible", arabic: "مستحيل", pronunciation: "إمبوسبل", example: "Nothing is impossible.", exampleArabic: "لا شيء مستحيل", category: "صفات" },
        { id: 220, word: "excellent", arabic: "ممتاز", pronunciation: "إكسلنت", example: "Your work is excellent.", exampleArabic: "عملك ممتاز", category: "صفات" },
        { id: 221, word: "creative", arabic: "مبدع", pronunciation: "كرييتيف", example: "She is very creative.", exampleArabic: "هي مبدعة جداً", category: "صفات" },
        { id: 222, word: "opinion", arabic: "رأي", pronunciation: "أوبينيون", example: "What's your opinion?", exampleArabic: "ما هو رأيك؟", category: "عام" },
        { id: 223, word: "actually", arabic: "في الحقيقة", pronunciation: "أكتشولي", example: "Actually, I don't know.", exampleArabic: "في الحقيقة، لا أعلم", category: "ظرف" },
        { id: 224, word: "probably", arabic: "من المحتمل", pronunciation: "بروبابلي", example: "I'll probably stay home.", exampleArabic: "من المحتمل أن أبقى في البيت", category: "ظرف" },
        { id: 225, word: "imagine", arabic: "يتخيل", pronunciation: "إيماجن", example: "Imagine you are on a beach.", exampleArabic: "تخيل أنك على الشاطئ", category: "أفعال" },
        { id: 226, word: "prepare", arabic: "يجهز", pronunciation: "بريبير", example: "Prepare for the test.", exampleArabic: "جهز نفسك للاختبار", category: "أفعال" },
        { id: 227, word: "success", arabic: "نجاح", pronunciation: "سكسيس", example: "Hard work leads to success.", exampleArabic: "العمل الجاد يؤدي للنجاح", category: "عام" },
        { id: 228, word: "failure", arabic: "فشل", pronunciation: "فيلير", example: "Don't fear failure.", exampleArabic: "لا تخش الفشل", category: "عام" },
        { id: 229, word: "beautiful", arabic: "جميل", pronunciation: "بيوتيفول", example: "The weather is beautiful.", exampleArabic: "الطقس جميل", category: "صفات" },
        { id: 230, word: "expensive", arabic: "غالي", pronunciation: "إكسبينسيف", example: "The car is expensive.", exampleArabic: "السيارة غالية", category: "صفات" },
        { id: 231, word: "cheap", arabic: "رخيص", pronunciation: "تشيب", example: "The food is cheap.", exampleArabic: "الطعام رخيص", category: "صفات" },
        { id: 232, word: "history", arabic: "تاريخ", pronunciation: "هيستوري", example: "I like reading history.", exampleArabic: "أحب قراءة التاريخ", category: "دراسة" },
        { id: 233, word: "science", arabic: "علوم", pronunciation: "ساينس", example: "Science is interesting.", exampleArabic: "العلوم مثيرة للاهتمام", category: "دراسة" },
        { id: 234, word: "government", arabic: "حكومة", pronunciation: "جافيرمنت", example: "The government made a law.", exampleArabic: "الحكومة سنت قانوناً", category: "عام" },
        { id: 235, word: "culture", arabic: "ثقافة", pronunciation: "كالتشر", example: "Arabic culture is rich.", exampleArabic: "الثقافة العربية غنية", category: "عام" },
        { id: 236, word: "popular", arabic: "مشهور/شائع", pronunciation: "بوبيولار", example: "This song is popular.", exampleArabic: "هذه الأغنية مشهورة", category: "صفات" },
        { id: 237, word: "dangerous", arabic: "خطير", pronunciation: "دينجرس", example: "The lion is dangerous.", exampleArabic: "الأسد خطير", category: "صفات" },
        { id: 238, word: "safe", arabic: "آمن", pronunciation: "سيف", example: "It's safe to stay here.", exampleArabic: "من الآمن البقاء هنا", category: "صفات" },
        { id: 239, word: "healthy", arabic: "صحي", pronunciation: "هيلثي", example: "Eat healthy food.", exampleArabic: "كل طعاماً صحياً", category: "صفات" },
        { id: 240, word: "environment", arabic: "بيئة", pronunciation: "إنفايرومنت", example: "Protect the environment.", exampleArabic: "احمِ البيئة", category: "عام" },
        { id: 241, word: "protect", arabic: "يحمي", pronunciation: "بروتكت", example: "Protect your skin.", exampleArabic: "احمِ بشرتك", category: "أفعال" },
        { id: 242, word: "increase", arabic: "يزداد", pronunciation: "إنكريس", example: "Prices increase every year.", exampleArabic: "الأسعار تزداد كل سنة", category: "أفعال" },
        { id: 243, word: "decrease", arabic: "ينقص", pronunciation: "ديكريس", example: "Decrease the volume.", exampleArabic: "خفض مستوى الصوت", category: "أفعال" },
        { id: 244, word: "distance", arabic: "مسافة", pronunciation: "ديستانس", example: "What is the distance?", exampleArabic: "ما هي المسافة؟", category: "عام" },
        { id: 245, word: "language", arabic: "لغة", pronunciation: "لانجويج", example: "English is a language.", exampleArabic: "الإنجليزية لغة", category: "عام" },
        { id: 246, word: "exercise", arabic: "تمرين", pronunciation: "إكسرسايز", example: "I do exercise daily.", exampleArabic: "أقوم بالتمارين يومياً", category: "عام" },
        { id: 247, word: "regular", arabic: "منتظم", pronunciation: "ريجيولار", example: "A regular meeting.", exampleArabic: "اجتماع منتظم", category: "صفات" },
        { id: 248, word: "relationship", arabic: "علاقة", pronunciation: "ريليشنشيب", example: "A good relationship.", exampleArabic: "علاقة جيدة", category: "علاقات" },
        { id: 249, word: "solution", arabic: "حل", pronunciation: "سولوشن", example: "Find a solution.", exampleArabic: "جد حلاً", category: "عام" },
        { id: 250, word: "problem", arabic: "مشكلة", pronunciation: "بروبلم", example: "No problem.", exampleArabic: "لا مشكلة", category: "عام" }
    ],
    advanced: [
        { id: 301, word: "nevertheless", arabic: "مع ذلك", pronunciation: "نيفرذايليس", example: "It was difficult; nevertheless, I succeeded.", exampleArabic: "كان صعباً؛ مع ذلك، نجحت", category: "روابط" },
        { id: 302, word: "consequently", arabic: "وبالتالي", pronunciation: "كونسيكوينتلي", example: "He didn't study; consequently, he failed.", exampleArabic: "لم يدرس؛ وبالتالي، رسب", category: "روابط" },
        { id: 303, word: "significant", arabic: "كبير/مهم", pronunciation: "سيجنتفيكنت", example: "There was a significant change.", exampleArabic: "كان هناك تغيير كبير", category: "صفات" },
        { id: 304, word: "acknowledge", arabic: "يعترف بـ", pronunciation: "أكنوليدج", example: "He acknowledged his mistake.", exampleArabic: "اعترف بخطئه", category: "أفعال" },
        { id: 305, word: "comprehensive", arabic: "شامل", pronunciation: "كومبريهينسيف", example: "A comprehensive study.", exampleArabic: "دراسة شاملة", category: "صفات" },
        { id: 306, word: "furthermore", arabic: "علاوة على ذلك", pronunciation: "فيرذر-مور", example: "Furthermore, it is free.", exampleArabic: "علاوة على ذلك، إنه مجاني", category: "روابط" },
        { id: 307, word: "implement", arabic: "ينفذ", pronunciation: "إمبليمنت", example: "Implement the plan.", exampleArabic: "نفذ الخطة", category: "أفعال" },
        { id: 308, word: "hypothesis", arabic: "فرضية", pronunciation: "هايبوثيسيس", example: "Testing the hypothesis.", exampleArabic: "اختبار الفرضية", category: "أكاديمي" },
        { id: 309, word: "sustainability", arabic: "استدامة", pronunciation: "ساستين-أبيليتي", example: "Environmental sustainability.", exampleArabic: "الاستدامة البيئية", category: "أكاديمي" },
        { id: 310, word: "phenomenon", arabic: "ظاهرة", pronunciation: "فينومينون", example: "A natural phenomenon.", exampleArabic: "ظاهرة طبيعية", category: "أكاديمي" },
        { id: 311, word: "ambiguous", arabic: "غامض", pronunciation: "أمبيجوس", example: "His answer was ambiguous.", exampleArabic: "رده كان غامضاً", category: "صفات" },
        { id: 312, word: "controversy", arabic: "جدل", pronunciation: "كونتروفيرسي", example: "A big controversy.", exampleArabic: "جدل كبير", category: "عام" },
        { id: 313, word: "sophisticated", arabic: "متطور/معقد", pronunciation: "سوفيسيتيكيتد", example: "Sophisticated technology.", exampleArabic: "تكنولوجيا متطورة", category: "صفات" },
        { id: 314, word: "perspective", arabic: "وجهة نظر", pronunciation: "بيرسبكتيف", example: "A different perspective.", exampleArabic: "وجهة نظر مختلفة", category: "عام" },
        { id: 315, word: "infrastructure", arabic: "بنية تحتية", pronunciation: "إنفراستراكتشر", example: "City infrastructure.", exampleArabic: "البنية التحتية للمدينة", category: "عام" },
        { id: 316, word: "redundant", arabic: "زائد عن الحاجة", pronunciation: "ريدندانت", example: "The word is redundant.", exampleArabic: "الكلمة زائدة عن الحاجة", category: "صفات" },
        { id: 317, word: "vulnerable", arabic: "عرضة للخطر", pronunciation: "فالنيرابل", example: "Vulnerable people.", exampleArabic: "أشخاص عرضة للخطر", category: "صفات" },
        { id: 318, word: "pragmatic", arabic: "واقعي/عملي", pronunciation: "براجماتيك", example: "A pragmatic approach.", exampleArabic: "نهج عملي", category: "صفات" },
        { id: 319, word: "facilitate", arabic: "يسهل", pronunciation: "فاسيلتيت", example: "Facilitate the process.", exampleArabic: "سهل العملية", category: "أفعال" },
        { id: 320, word: "inevitable", arabic: "لا مفر منه", pronunciation: "إينيفتابل", example: "Change is inevitable.", exampleArabic: "التغيير أمر لا مفر منه", category: "صفات" },
        { id: 321, word: "paradigm", arabic: "نموذج", pronunciation: "بارادايم", example: "A new paradigm shift.", exampleArabic: "تحول نموذجي جديد", category: "أكاديمي" },
        { id: 322, word: "ubiquitous", arabic: "موجود في كل مكان", pronunciation: "يوبيكويتوس", example: "Coffee shops are ubiquitous.", exampleArabic: "المقاهي موجودة في كل مكان", category: "صفات" },
        { id: 323, word: "eloquent", arabic: "فصيح", pronunciation: "إيلوكوينت", example: "An eloquent speaker.", exampleArabic: "متحدث فصيح", category: "صفات" },
        { id: 324, word: "scrutinize", arabic: "يدقق", pronunciation: "سكروتينايز", example: "Scrutinize the data.", exampleArabic: "دقق في البيانات", category: "أفعال" },
        { id: 325, word: "resilient", arabic: "مرن/صامد", pronunciation: "ريزيليانت", example: "A resilient economy.", exampleArabic: "اقتصاد صامد", category: "صفات" },
        { id: 326, word: "advocate", arabic: "يدافع عن/يؤيد", pronunciation: "أدفوكيت", example: "Advocate for peace.", exampleArabic: "تأييد السلام", category: "أفعال" },
        { id: 327, word: "conscientious", arabic: "حي الضمير", pronunciation: "كونشينشس", example: "A conscientious worker.", exampleArabic: "عامل حي الضمير", category: "صفات" },
        { id: 328, word: "differentiate", arabic: "يميز بين", pronunciation: "ديفيرينشيت", example: "Differentiate between colors.", exampleArabic: "ميز بين الألوان", category: "أفعال" },
        { id: 329, word: "exacerbate", arabic: "يفاقم", pronunciation: "إيكسازيربيت", example: "Don't exacerbate the problem.", exampleArabic: "لا تفاقم المشكلة", category: "أفعال" },
        { id: 330, word: "meticulous", arabic: "شديد التدقيق", pronunciation: "ميتيكيولوس", example: "Meticulous planning.", exampleArabic: "تخطيط دقيق للغاية", category: "صفات" },
        { id: 331, word: "obsolete", arabic: "عفا عليه الزمن", pronunciation: "أوبسوليت", example: "Obsolete technology.", exampleArabic: "تكنولوجيا قديمة جداً", category: "صفات" },
        { id: 332, word: "plausible", arabic: "معقول", pronunciation: "بلوزابل", example: "A plausible excuse.", exampleArabic: "عذر معقول", category: "صفات" },
        { id: 333, word: "prevalent", arabic: "سائد", pronunciation: "بريفالينت", example: "Prevalent belief.", exampleArabic: "اعتقاد سائد", category: "صفات" },
        { id: 334, word: "profound", arabic: "عميق", pronunciation: "بروفاوند", example: "Profound impact.", exampleArabic: "تأثير عميق", category: "صفات" },
        { id: 335, word: "stagnant", arabic: "راكد", pronunciation: "ستاجنانت", example: "Stagnant economy.", exampleArabic: "اقتصاد راكد", category: "صفات" },
        { id: 336, word: "subtle", arabic: "دقيق/خفي", pronunciation: "ساتل", example: "A subtle difference.", exampleArabic: "فرق بسيط خفي", category: "صفات" },
        { id: 337, word: "tangible", arabic: "ملموس", pronunciation: "تانجيبل", example: "Tangible results.", exampleArabic: "نتائج ملموسة", category: "صفات" },
        { id: 338, word: "tentative", arabic: "مؤقت", pronunciation: "تنتاتيف", example: "A tentative schedule.", exampleArabic: "جدول مؤقت", category: "صفات" },
        { id: 339, word: "unprecedented", arabic: "غير مسبوق", pronunciation: "أنبريسيدينتد", example: "Unprecedented growth.", exampleArabic: "نمو غير مسبوق", category: "صفات" },
        { id: 340, word: "verify", arabic: "يتحقق من", pronunciation: "فيري-فاي", example: "Verify the address.", exampleArabic: "تحقق من العنوان", category: "أفعال" },
        { id: 341, word: "widespread", arabic: "واسع الانتشار", pronunciation: "وايد-سبريد", example: "Widespread use.", exampleArabic: "استخدام واسع الانتشار", category: "صفات" },
        { id: 342, word: "yield", arabic: "ينتج/يثمر", pronunciation: "ييلد", example: "Yield good results.", exampleArabic: "ينتج نتائج جيدة", category: "أفعال" },
        { id: 343, word: "zealous", arabic: "متحمس", pronunciation: "زيلوس", example: "A zealous supporter.", exampleArabic: "مؤيد متحمس", category: "صفات" },
        { id: 344, word: "adversity", arabic: "شدة/محنة", pronunciation: "أدفيرسيتي", example: "Overcoming adversity.", exampleArabic: "التغلب على المحن", category: "عام" },
        { id: 345, word: "benchmark", arabic: "معيار قياس", pronunciation: "بينتش-مارك", example: "Set a benchmark.", exampleArabic: "وضع معيار للقياس", category: "أكاديمي" },
        { id: 346, word: "collaborate", arabic: "يتعاون", pronunciation: "كولابوريت", example: "Collaborate on a project.", exampleArabic: "تعاون في مشروع", category: "أفعال" },
        { id: 347, word: "deviation", arabic: "انحراف", pronunciation: "ديفي-إيشن", example: "Standard deviation.", exampleArabic: "الانحراف المعياري", category: "أكاديمي" },
        { id: 348, word: "empirical", arabic: "تجريبي/واقعي", pronunciation: "إمبيريكال", example: "Empirical evidence.", exampleArabic: "دليل تجريبي", category: "أكاديمي" },
        { id: 349, word: "fluctuate", arabic: "يتذبذب", pronunciation: "فلوكتشويت", example: "Prices fluctuate.", exampleArabic: "الأسعار تتذبذب", category: "أفعال" },
        { id: 350, word: "justification", arabic: "تبرير", pronunciation: "جاستفيكيشن", example: "The justification for war.", exampleArabic: "تبرير الحرب", category: "عام" }
    ]
};

// دوال المساعدة
function getWordsByLevel(level) {
    return WORDS_DATA[level] || [];
}

function searchWords(query) {
    query = query.toLowerCase();
    let results = [];
    
    for (let level in WORDS_DATA) {
        const matches = WORDS_DATA[level].filter(item => 
            item.word.toLowerCase().includes(query) ||
            item.arabic.includes(query)
        );
        results = results.concat(matches);
    }
    
    return results;
}

function getRandomWord() {
    const allWords = [...WORDS_DATA.beginner, ...WORDS_DATA.intermediate, ...WORDS_DATA.advanced];
    return allWords[Math.floor(Math.random() * allWords.length)];
}

function getCategories() {
    const categories = new Set();
    
    for (let level in WORDS_DATA) {
        WORDS_DATA[level].forEach(word => {
            if (word.category) categories.add(word.category);
        });
    }
    
    return Array.from(categories).sort();
            }
