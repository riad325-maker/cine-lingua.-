const GRAMMAR_DATA = [
  // ===== ARTICLES =====
  {id:1, cat:"articles", title:"A / An", sub:"نكرة — للمفرد", color:"#6366f1",
   rule:"نستخدم A قبل الأصوات الساكنة، و An قبل الأصوات المتحركة (a, e, i, o, u).",
   formula:"a + consonant sound | an + vowel sound",
   examples:[
     {en:"I have a cat.",ar:"لدي قطة."},
     {en:"She is an engineer.",ar:"هي مهندسة."},
     {en:"He ate an apple.",ar:"أكل تفاحة."},
     {en:"It was a unique idea.",ar:"كانت فكرة فريدة."},
   ],
   tip:"a unique — تُنطق 'yu' فهي صوت ساكن.",
   tags:["مبتدئ"]},

  {id:2, cat:"articles", title:"The", sub:"معرّف — للمعلوم", color:"#6366f1",
   rule:"نستخدم The مع الأسماء المحددة أو التي سبق ذكرها أو المعروفة للجميع.",
   formula:"the + specific noun",
   examples:[
     {en:"The sun rises in the east.",ar:"الشمس تشرق في الشرق."},
     {en:"Close the door please.",ar:"أغلق الباب من فضلك."},
     {en:"I saw a dog. The dog was big.",ar:"رأيت كلباً. الكلب كان ضخماً."},
     {en:"The Nile is the longest river.",ar:"النيل هو أطول نهر."},
   ],
   tip:"لا نستخدم The مع البلدان عادةً، إلا الجمع: the USA.",
   tags:["مبتدئ"]},

  // ===== PREPOSITIONS =====
  {id:3, cat:"prepositions", title:"In / On / At — الزمان", sub:"حروف الجر للوقت", color:"#ec4899",
   rule:"In للشهر والسنة والفصل، On لليوم والتاريخ، At للوقت المحدد.",
   formula:"in + month/year | on + day/date | at + time",
   examples:[
     {en:"I was born in 1999.",ar:"وُلدت في عام 1999."},
     {en:"The meeting is on Monday.",ar:"الاجتماع يوم الاثنين."},
     {en:"She arrives at 8 AM.",ar:"تصل الساعة 8 صباحاً."},
     {en:"It snows in winter.",ar:"تثلج في الشتاء."},
   ],
   tip:"at night — الليل استثناء، نقول at وليس in.",
   tags:["مبتدئ"]},

  {id:4, cat:"prepositions", title:"In / On / At — المكان", sub:"حروف الجر للموقع", color:"#ec4899",
   rule:"At للنقطة المحددة، On للسطح، In للداخل.",
   formula:"at (point) | on (surface) | in (enclosed space)",
   examples:[
     {en:"She lives in Cairo.",ar:"تعيش في القاهرة."},
     {en:"The book is on the table.",ar:"الكتاب على الطاولة."},
     {en:"Wait for me at the door.",ar:"انتظرني عند الباب."},
     {en:"There is milk in the fridge.",ar:"يوجد حليب في الثلاجة."},
   ],
   tip:"at school / at work / at home — أماكن الروتين تأتي مع at.",
   tags:["مبتدئ"]},

  // ===== TENSES =====
  {id:5, cat:"tenses", title:"Present Simple", sub:"المضارع البسيط", color:"#10b981",
   rule:"للعادات والحقائق والروتين اليومي. مع he/she/it نضيف s أو es للفعل.",
   formula:"I/you/we/they + V1 | he/she/it + V1s",
   examples:[
     {en:"I drink coffee every morning.",ar:"أشرب القهوة كل صباح."},
     {en:"She works at a hospital.",ar:"هي تعمل في مستشفى."},
     {en:"The earth goes around the sun.",ar:"الأرض تدور حول الشمس."},
     {en:"He doesn't like spicy food.",ar:"هو لا يحب الأكل الحار."},
   ],
   tip:"Does/Do في الأسئلة، doesn't/don't في النفي.",
   tags:["مبتدئ"]},

  {id:6, cat:"tenses", title:"Present Continuous", sub:"المضارع المستمر", color:"#10b981",
   rule:"لما يحدث الآن في لحظة الكلام، أو في المستقبل القريب المخطط.",
   formula:"am/is/are + verb-ing",
   examples:[
     {en:"I am studying right now.",ar:"أنا أدرس الآن."},
     {en:"She is talking on the phone.",ar:"هي تتحدث على الهاتف."},
     {en:"They are leaving tomorrow.",ar:"سيغادرون غداً."},
     {en:"What are you doing?",ar:"ماذا تفعل؟"},
   ],
   tip:"الأفعال الحالة مثل know, love, want لا تأتي بصيغة ing.",
   tags:["مبتدئ"]},

  {id:7, cat:"tenses", title:"Past Simple", sub:"الماضي البسيط", color:"#10b981",
   rule:"لأحداث انتهت في وقت محدد في الماضي. الأفعال المنتظمة تأخذ ed.",
   formula:"subject + V2 (regular: +ed | irregular: V2)",
   examples:[
     {en:"I watched a movie last night.",ar:"شاهدت فيلماً أمس بالليل."},
     {en:"She went to Paris in 2022.",ar:"ذهبت إلى باريس عام 2022."},
     {en:"He didn't come to class.",ar:"لم يأتِ إلى الفصل."},
     {en:"Did you eat breakfast?",ar:"هل أكلت الفطور؟"},
   ],
   tip:"did/didn't للأسئلة والنفي — الفعل يرجع للمصدر بعدهما.",
   tags:["مبتدئ"]},

  {id:8, cat:"tenses", title:"Present Perfect", sub:"المضارع التام", color:"#10b981",
   rule:"لأحداث في الماضي لها علاقة بالحاضر، أو تجارب حياتية، أو أحداث حديثة.",
   formula:"have/has + V3 (past participle)",
   examples:[
     {en:"I have visited Japan twice.",ar:"زرت اليابان مرتين."},
     {en:"She has just finished her work.",ar:"هي انتهت للتو من عملها."},
     {en:"Have you ever eaten sushi?",ar:"هل أكلت السوشي من قبل؟"},
     {en:"He has lived here for 5 years.",ar:"يعيش هنا منذ 5 سنوات."},
   ],
   tip:"for = للمدة (for 3 years) | since = من نقطة البداية (since 2020).",
   tags:["متوسط"]},

  {id:9, cat:"tenses", title:"Future Simple", sub:"المستقبل البسيط", color:"#10b981",
   rule:"للتوقعات والوعود والقرارات الفورية والحقائق المستقبلية.",
   formula:"will + V1 (base form)",
   examples:[
     {en:"I will call you tomorrow.",ar:"سأتصل بك غداً."},
     {en:"It will rain today.",ar:"ستمطر اليوم."},
     {en:"She won't be late.",ar:"لن تتأخر."},
     {en:"Will you help me?",ar:"هل ستساعدني؟"},
   ],
   tip:"Going to للخطط المرسومة، will للقرارات اللحظية.",
   tags:["مبتدئ"]},

  // ===== CONDITIONALS =====
  {id:10, cat:"conditionals", title:"Zero Conditional", sub:"شرط — حقائق علمية", color:"#f59e0b",
   rule:"للحقائق العامة والعلمية. نتيجة ثابتة دائماً عند وقوع الشرط.",
   formula:"If + present simple, present simple",
   examples:[
     {en:"If you heat water, it boils.",ar:"إذا سخّنت الماء يغلي."},
     {en:"If it rains, the ground gets wet.",ar:"إذا أمطرت تبتل الأرض."},
     {en:"Plants die if they don't get water.",ar:"النباتات تموت إن لم تحصل على ماء."},
     {en:"If you mix red and blue, you get purple.",ar:"إذا خلطت الأحمر والأزرق تحصل على البنفسجي."},
   ],
   tip:"يمكن استخدام When بدل If في الشرط الصفري.",
   tags:["متوسط"]},

  {id:11, cat:"conditionals", title:"First Conditional", sub:"شرط — محتمل الحدوث", color:"#f59e0b",
   rule:"لأشياء ممكنة وقريبة الحدوث في المستقبل.",
   formula:"If + present simple, will + V1",
   examples:[
     {en:"If it rains, I will stay home.",ar:"إذا أمطرت سأبقى في البيت."},
     {en:"She will pass if she studies.",ar:"ستنجح إذا درست."},
     {en:"If you're tired, you can rest.",ar:"إذا كنت متعباً يمكنك الراحة."},
     {en:"I'll call you if I'm late.",ar:"سأتصل بك إذا تأخرت."},
   ],
   tip:"لا تستخدم will بعد if في نفس الجملة.",
   tags:["متوسط"]},

  {id:12, cat:"conditionals", title:"Second Conditional", sub:"شرط — غير واقعي", color:"#f59e0b",
   rule:"لمواقف خيالية أو غير واقعية في الحاضر أو المستقبل.",
   formula:"If + past simple, would + V1",
   examples:[
     {en:"If I were rich, I would travel.",ar:"لو كنت غنياً لسافرت."},
     {en:"She would help if she knew.",ar:"كانت ستساعد لو عرفت."},
     {en:"If I had wings, I would fly.",ar:"لو كان لي جناحان لطرت."},
     {en:"What would you do if you lost your phone?",ar:"ماذا كنت ستفعل لو فقدت هاتفك؟"},
   ],
   tip:"نستخدم were مع الجميع: If I were / If she were — ليس was.",
   tags:["متوسط"]},

  {id:13, cat:"conditionals", title:"Third Conditional", sub:"شرط — ماضٍ افتراضي", color:"#f59e0b",
   rule:"للتحدث عن ماضٍ مختلف لم يحدث، والندم أو التخيل.",
   formula:"If + past perfect, would have + V3",
   examples:[
     {en:"If she had studied, she would have passed.",ar:"لو درست لكانت اجتازت الامتحان."},
     {en:"He would have called if he had known.",ar:"كان سيتصل لو كان يعرف."},
     {en:"If I had left earlier, I wouldn't have been late.",ar:"لو غادرت مبكراً لما تأخرت."},
     {en:"Would you have gone if I had invited you?",ar:"هل كنت ستذهب لو دعوتك؟"},
   ],
   tip:"الشرط الثالث للندم — ما حدث لا يتغير لكن نتخيل لو كان غير ذلك.",
   tags:["متقدم"]},

  // ===== PASSIVE =====
  {id:14, cat:"passive", title:"Passive Voice", sub:"المبني للمجهول", color:"#8b5cf6",
   rule:"نستخدمه حين الفاعل مجهول أو غير مهم، أو نريد التركيز على المفعول به.",
   formula:"subject + be (am/is/are/was/were) + V3",
   examples:[
     {en:"The letter was sent yesterday.",ar:"أُرسلت الرسالة أمس."},
     {en:"English is spoken worldwide.",ar:"الإنجليزية تُتحدث حول العالم."},
     {en:"The car has been repaired.",ar:"تم إصلاح السيارة."},
     {en:"The project will be completed soon.",ar:"سيتم إنجاز المشروع قريباً."},
   ],
   tip:"لتحويل جملة: المفعول به يصبح فاعلاً + be + V3 + by (اختياري).",
   tags:["متوسط"]},

  // ===== MODAL VERBS =====
  {id:15, cat:"modal", title:"Can / Could", sub:"قدرة وطلب مؤدب", color:"#06b6d4",
   rule:"Can للقدرة في الحاضر، Could للماضي أو الطلب المؤدب.",
   formula:"can/could + base verb (V1)",
   examples:[
     {en:"I can speak three languages.",ar:"أستطيع التحدث بثلاث لغات."},
     {en:"She could swim when she was five.",ar:"كانت تستطيع السباحة وهي بعمر خمس سنوات."},
     {en:"Could you help me please?",ar:"هل يمكنك مساعدتي؟"},
     {en:"Can I use your phone?",ar:"هل يمكنني استخدام هاتفك؟"},
   ],
   tip:"Could أكثر أدباً من Can في الطلبات.",
   tags:["مبتدئ"]},

  {id:16, cat:"modal", title:"Should / Must", sub:"نصيحة والتزام", color:"#06b6d4",
   rule:"Should للنصيحة والتوصية، Must للإلزام الضروري.",
   formula:"should/must + base verb (V1)",
   examples:[
     {en:"You should sleep early.",ar:"يجب عليك النوم مبكراً."},
     {en:"She must submit the report today.",ar:"عليها تسليم التقرير اليوم."},
     {en:"You shouldn't eat junk food.",ar:"لا ينبغي أن تأكل الوجبات السريعة."},
     {en:"You must wear a seatbelt.",ar:"يجب عليك ارتداء حزام الأمان."},
   ],
   tip:"Must = إلزام داخلي | Have to = إلزام خارجي (قانون أو قاعدة).",
   tags:["مبتدئ"]},

  {id:17, cat:"modal", title:"Will / Would", sub:"مستقبل وتوقع", color:"#06b6d4",
   rule:"Will للمستقبل والوعود، Would للماضي المعتاد أو الطلب المؤدب.",
   formula:"will/would + base verb (V1)",
   examples:[
     {en:"I will call you tomorrow.",ar:"سأتصل بك غداً."},
     {en:"Would you like some tea?",ar:"هل تريد بعض الشاي؟"},
     {en:"She would always sing in the morning.",ar:"كانت دائماً تغني في الصباح."},
     {en:"I won't be late again.",ar:"لن أتأخر مجدداً."},
   ],
   tip:"Would you like = طريقة مؤدبة للعرض والطلب.",
   tags:["متوسط"]},

  {id:18, cat:"modal", title:"May / Might", sub:"احتمال وإذن", color:"#06b6d4",
   rule:"May للاحتمال المتوسط أو طلب الإذن رسمياً، Might للاحتمال الأضعف.",
   formula:"may/might + base verb (V1)",
   examples:[
     {en:"It may rain tomorrow.",ar:"قد تمطر غداً."},
     {en:"She might be late.",ar:"ربما تتأخر."},
     {en:"May I come in?",ar:"هل يمكنني الدخول؟"},
     {en:"He might not know the answer.",ar:"قد لا يعرف الإجابة."},
   ],
   tip:"May = 50% احتمال | Might = أقل من 50%.",
   tags:["متوسط"]},

  // ===== PRONOUNS =====
  {id:19, cat:"pronouns", title:"Subject Pronouns", sub:"ضمائر الفاعل", color:"#ef4444",
   rule:"تأتي في بداية الجملة كفاعل للفعل.",
   formula:"I / you / he / she / it / we / they",
   examples:[
     {en:"I love learning English.",ar:"أنا أحب تعلم الإنجليزية."},
     {en:"He is my best friend.",ar:"هو أفضل صديق لي."},
     {en:"They live in Dubai.",ar:"هم يعيشون في دبي."},
     {en:"We study together every day.",ar:"نحن ندرس معاً كل يوم."},
   ],
   tip:"I دائماً بحرف كبير حتى في منتصف الجملة.",
   tags:["مبتدئ"]},

  {id:20, cat:"pronouns", title:"Object Pronouns", sub:"ضمائر المفعول", color:"#ef4444",
   rule:"تأتي بعد الفعل أو حرف الجر كمفعول به.",
   formula:"me / you / him / her / it / us / them",
   examples:[
     {en:"She loves him.",ar:"هي تحبه."},
     {en:"Call me tomorrow.",ar:"اتصل بي غداً."},
     {en:"I can help them.",ar:"أستطيع مساعدتهم."},
     {en:"He gave her a gift.",ar:"أعطاها هدية."},
   ],
   tip:"بعد حروف الجر دائماً object pronouns: with me, for him.",
   tags:["مبتدئ"]},

  {id:21, cat:"pronouns", title:"Possessive", sub:"ضمائر الملكية", color:"#ef4444",
   rule:"Possessive adjectives قبل الاسم، Possessive pronouns بدون اسم بعدها.",
   formula:"my/your/his/her/our/their + noun | mine/yours/his/hers/ours/theirs",
   examples:[
     {en:"This is my book.",ar:"هذا كتابي."},
     {en:"Is this pen yours?",ar:"هل هذا القلم لك؟"},
     {en:"Her car is new.",ar:"سيارتها جديدة."},
     {en:"The decision is ours.",ar:"القرار لنا."},
   ],
   tip:"it's = it is | its = ملكية — لا تخلط بينهما!",
   tags:["مبتدئ"]},

  // ===== QUESTIONS =====
  {id:22, cat:"questions", title:"Yes/No Questions", sub:"أسئلة نعم أو لا", color:"#16a34a",
   rule:"نبدأ بالفعل المساعد قبل الفاعل.",
   formula:"Do/Does/Did/Is/Are/Was/Were + subject + verb?",
   examples:[
     {en:"Do you speak Arabic?",ar:"هل تتحدث العربية؟"},
     {en:"Does she work here?",ar:"هل تعمل هنا؟"},
     {en:"Did you eat breakfast?",ar:"هل أكلت الفطور؟"},
     {en:"Is he coming tonight?",ar:"هل هو قادم الليلة؟"},
   ],
   tip:"في المضارع: Do مع I/you/we/they | Does مع he/she/it.",
   tags:["مبتدئ"]},

  {id:23, cat:"questions", title:"Wh- Questions", sub:"أسئلة الاستفسار", color:"#16a34a",
   rule:"تبدأ بكلمة استفهام ثم الفعل المساعد ثم الفاعل.",
   formula:"Wh + auxiliary + subject + verb?",
   examples:[
     {en:"Where do you live?",ar:"أين تعيش؟"},
     {en:"What time does the class start?",ar:"متى تبدأ الحصة؟"},
     {en:"Why did she leave early?",ar:"لماذا غادرت مبكراً؟"},
     {en:"How long have you studied English?",ar:"كم مدة دراستك للإنجليزية؟"},
   ],
   tip:"Who كفاعل لا تحتاج do/does: Who called you? ليس Who did call you?",
   tags:["مبتدئ"]},

  // ===== ADJECTIVES =====
  {id:24, cat:"adjectives", title:"Comparative", sub:"المقارنة بين اثنين", color:"#db2777",
   rule:"للمقارنة بين شيئين. الصفات القصيرة: er + than. الصفات الطويلة: more + than.",
   formula:"adj + er + than | more + adj + than",
   examples:[
     {en:"She is taller than her brother.",ar:"هي أطول من أخيها."},
     {en:"This phone is more expensive than that one.",ar:"هذا الهاتف أغلى من ذاك."},
     {en:"He runs faster than me.",ar:"يركض أسرع مني."},
     {en:"Today is hotter than yesterday.",ar:"اليوم أحر من أمس."},
   ],
   tip:"good → better | bad → worse | far → farther (شاذة).",
   tags:["مبتدئ"]},

  {id:25, cat:"adjectives", title:"Superlative", sub:"المقارنة بين ثلاثة+", color:"#db2777",
   rule:"للمقارنة بين ثلاثة أشياء أو أكثر. نضيف the + est أو the most.",
   formula:"the + adj + est | the most + adj",
   examples:[
     {en:"This is the most beautiful city.",ar:"هذه أجمل مدينة."},
     {en:"He is the tallest in the class.",ar:"هو الأطول في الفصل."},
     {en:"It's the cheapest option.",ar:"هذا أرخص خيار."},
     {en:"She is the most talented student.",ar:"هي أكثر الطلاب موهبة."},
   ],
   tip:"الصفات التي تنتهي بـ y: happy → happiest | easy → easiest.",
   tags:["مبتدئ"]},

  // ===== GERUND =====
  {id:26, cat:"gerund", title:"Gerund vs Infinitive", sub:"verb+ing أو to+verb", color:"#0891b2",
   rule:"بعض الأفعال تتبعها صيغة ing وبعضها to + المصدر.",
   formula:"enjoy/avoid/finish + ing | want/need/decide + to + V1",
   examples:[
     {en:"I enjoy reading books.",ar:"أستمتع بقراءة الكتب."},
     {en:"She decided to leave early.",ar:"قررت المغادرة مبكراً."},
     {en:"He avoided making mistakes.",ar:"تجنب ارتكاب الأخطاء."},
     {en:"I want to improve my English.",ar:"أريد تحسين إنجليزيتي."},
   ],
   tip:"بعد حروف الجر دائماً ing: Thank you for helping me.",
   tags:["متوسط"]},

  // ===== REPORTED SPEECH =====
  {id:27, cat:"reported", title:"Reported Speech", sub:"الكلام المنقول", color:"#7c3aed",
   rule:"ننقل كلام شخص آخر بدون اقتباس مباشر مع تغيير الأزمنة والضمائر.",
   formula:"said (that) + [tense one step back]",
   examples:[
     {en:"\"I am tired.\" → He said he was tired.",ar:"\"أنا متعب\" ← قال إنه كان متعباً."},
     {en:"\"I will help.\" → She said she would help.",ar:"\"سأساعد\" ← قالت إنها ستساعد."},
     {en:"\"Are you ready?\" → He asked if I was ready.",ar:"سأل إذا كنت مستعداً."},
     {en:"\"Where do you live?\" → She asked where I lived.",ar:"سألت أين أعيش."},
   ],
   tip:"الحقائق العامة لا تتغير: He said the earth is round.",
   tags:["متقدم"]},

  // ===== COUNTABLE =====
  {id:28, cat:"nouns", title:"Countable & Uncountable", sub:"أسماء معدودة وغير معدودة", color:"#059669",
   rule:"الأسماء المعدودة قابلة للعد والجمع. غير المعدودة لها قواعد خاصة.",
   formula:"many/few + countable | much/little + uncountable",
   examples:[
     {en:"I have a few books but little time.",ar:"لدي بضعة كتب لكن وقتاً قليلاً."},
     {en:"How much water do you need?",ar:"كم من الماء تحتاج؟"},
     {en:"How many students are there?",ar:"كم عدد الطلاب؟"},
     {en:"She gave me good advice.",ar:"أعطتني نصيحة جيدة."},
   ],
   tip:"advice / information / news — لا تُجمع أبداً.",
   tags:["متوسط"]},
];
