// stories-data.js
const STORIES_DATA = {
    beginner: [
        {
            id: 1,
            title: "My Daily Routine",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400",
            content: "I wake up at 7 o'clock every morning. First, I wash my face and brush my teeth. Then, I eat breakfast with my family. I usually have bread with cheese and a cup of tea. After breakfast, I go to school. My school is near my house, so I walk there. I study many subjects like Arabic, English, and Math. I like English class because we read stories.",
            arabic: "أستيقظ الساعة 7 صباحاً كل يوم. أولاً، أغسل وجهي وأفرك أسناني. ثم، أتناول الفطور مع عائلتي. عادةً آكل خبزاً مع جبن وكوب شاي. بعد الفطور، أذهب إلى المدرسة. مدرستي قريبة من منزلي، لذا أمشي إليها. أدرس مواد كثيرة مثل العربية والإنجليزية والرياضيات. أحب حصة الإنجليزية لأننا نقرأ قصصاً.",
            difficulty: "مبتدئ",
            words: ["wake up", "breakfast", "school", "homework", "sleep"]
        },
        {
            id: 2,
            title: "The Red Apple",
            image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400",
            content: "A little boy named Sami was playing in the garden. He saw a big tree with red apples. One apple looked very delicious. Sami felt hungry. He wanted to eat the apple. The tree was tall, but Sami was clever. He found a long stick. He used the stick to get the apple down. The apple fell on the soft grass.",
            arabic: "صبي صغير اسمه سامي كان يلعب في الحديقة. رأى شجرة كبيرة عليها تفاح أحمر. تفاحة واحدة بدت لذيذة جداً. شعر سامي بالجوع. أراد أن يأكل التفاحة. كانت الشجرة طويلة، لكن سامي كان ذكياً. وجد عصا طويلة. استخدم العصا لإسقاط التفاحة. سقطت التفاحة على العشب الناعم.",
            difficulty: "مبتدئ",
            words: ["apple", "tree", "hungry", "happy", "sweet"]
        },
        {
            id: 3,
            title: "My Friend Ahmed",
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400",
            content: "Ahmed is my best friend. We live in the same neighborhood. Ahmed is ten years old, like me. He has short black hair and brown eyes. He is very kind and always helps me. After school, we often play football together. Ahmed is a good player. He can run fast. On weekends, we sometimes go to the park.",
            arabic: "أحمد هو صديقي المفضل. نحن نعيش في نفس الحي. عمر أحمد عشر سنوات، مثلي. لديه شعر أسود قصير وعينان بنيتان. إنه لطيف جداً ويساعدني دائماً. بعد المدرسة، غالباً ما نلعب كرة القدم معاً. أحمد لاعب جيد. يستطيع الركض بسرعة. في عطلات نهاية الأسبوع، نذهب أحياناً إلى الحديقة.",
            difficulty: "مبتدئ",
            words: ["friend", "neighborhood", "kind", "play", "weekend"]
        },
        {
            id: 4,
            title: "The Blue Sky",
            image: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=400",
            content: "It was a beautiful day. The sky was blue and clear. The sun was shining brightly. Sara and her little brother Omar went to the park. Their mother gave them a picnic basket. They sat under a big tree. Sara saw many flowers. There were red, yellow, and purple flowers. Omar saw birds flying in the sky.",
            arabic: "كان يوماً جميلاً. كانت السماء زرقاء وصافية. كانت الشمس مشرقة. ذهبت سارة وأخوها الصغير عمر إلى الحديقة. أعطتهم أمهما سلة طعام. جلسوا تحت شجرة كبيرة. رأت سارة أزهاراً كثيرة. كان هناك أزهار حمراء وصفراء وبنفسجية. رأى عمر طيوراً تطير في السماء.",
            difficulty: "مبتدئ",
            words: ["sky", "sun", "park", "flowers", "birds"]
        },
        {
            id: 5,
            title: "At the School",
            image: "https://images.unsplash.com/photo-1503676596287-62081e8d3b1c?w=400",
            content: "My school is big and beautiful. There are many classrooms and a big playground. My favorite teacher is Mr. Khaled. He teaches English. He is very kind and patient. In class, we learn new words and read short stories. Yesterday, we learned about animals. I learned the words elephant, lion, and giraffe.",
            arabic: "مدرستي كبيرة وجميلة. هناك فصول كثيرة وملعب كبير. معلمي المفضل هو الأستاذ خالد. يدرس اللغة الإنجليزية. إنه لطيف جداً وصبور. في الصف، نتعلم كلمات جديدة ونقرأ قصصاً قصيرة. بالأمس، تعلمنا عن الحيوانات. تعلمت كلمات فيل وأسد وزرافة.",
            difficulty: "مبتدئ",
            words: ["school", "teacher", "classroom", "playground", "learn"]
        }
    ],
    intermediate: [
        {
            id: 6,
            title: "A Trip to London",
            image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400",
            content: "Last summer, my family and I traveled to London. It was my first time visiting England. I was very excited. We flew on a plane for about five hours. When we arrived, the weather was cloudy but not too cold. We stayed in a small hotel near the city center. The hotel was comfortable.",
            arabic: "الصيف الماضي، سافرت أنا وعائلتي إلى لندن. كانت زيارتي الأولى لإنجلترا. كنت متحمساً جداً. سافرنا بالطائرة لمدة خمس ساعات تقريباً. عندما وصلنا، كان الطقس غائماً لكن لم يكن بارداً جداً. مكثنا في فندق صغير قرب وسط المدينة. كان الفندق مريحاً.",
            difficulty: "متوسط",
            words: ["travel", "visit", "famous", "delicious", "wonderful"]
        },
        {
            id: 7,
            title: "The Importance of Success",
            image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=400",
            content: "Success is something many people want. But success is not easy. It takes hard work and patience. My older brother, Ali, is a good example. He wanted to become a doctor. He studied very hard every day. Sometimes, he felt tired, but he did not give up. He always remembered his goal.",
            arabic: "النجاح شيء يتمناه الكثير من الناس. لكن النجاح ليس سهلاً. يتطلب عملاً شاقاً وصبراً. أخي الأكبر، علي، مثال جيد. أراد أن يصبح طبيباً. درس بجد كل يوم. في بعض الأحيان، كان يشعر بالتعب، لكنه لم يستسلم. كان يتذكر دائماً هدفه.",
            difficulty: "متوسط",
            words: ["success", "hard work", "goal", "achieve", "proud"]
        },
        {
            id: 8,
            title: "Healthy Lifestyle",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400",
            content: "Living a healthy lifestyle is very important. It helps us feel good and stay strong. There are several things you can do to be healthy. First, you should eat healthy food. Eat fruits and vegetables every day. Try to avoid too much sugar and fast food. Second, exercise is necessary.",
            arabic: "العيش بنمط حياة صحي مهم جداً. يساعدنا على الشعور بالرضا والبقاء أقوياء. هناك عدة أشياء يمكنك فعلها لتكون بصحة جيدة. أولاً، يجب أن تأكل طعاماً صحياً. كل الفواكه والخضروات كل يوم. حاول تجنب الكثير من السكر والوجبات السريعة. ثانياً، التمرين ضروري.",
            difficulty: "متوسط",
            words: ["healthy", "exercise", "sleep", "water", "important"]
        },
        {
            id: 9,
            title: "Digital Technology",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
            content: "Technology has changed our lives in many ways. Today, we use computers, tablets, and smartphones every day. We can use them to learn new things. For example, we can watch educational videos or read articles online. We can also communicate with friends and family who live far away.",
            arabic: "غيرت التكنولوجيا حياتنا بطرق عديدة. اليوم، نستخدم أجهزة الكمبيوتر والأجهزة اللوحية والهواتف الذكية كل يوم. يمكننا استخدامها لتعلم أشياء جديدة. على سبيل المثال، يمكننا مشاهدة فيديوهات تعليمية أو قراءة مقالات على الإنترنت. يمكننا أيضاً التواصل مع الأصدقاء والعائلة الذين يعيشون بعيداً.",
            difficulty: "متوسط",
            words: ["technology", "computer", "communicate", "balance", "useful"]
        },
        {
            id: 10,
            title: "Environment Protection",
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400",
            content: "Our planet Earth is beautiful. It has forests, oceans, mountains, and many animals. But our planet is in danger. Pollution is a big problem. People throw trash on the ground and in the oceans. Factories and cars make the air dirty. This hurts the animals and the environment.",
            arabic: "كوكبنا الأرض جميل. فيه غابات ومحيطات وجبال والعديد من الحيوانات. لكن كوكبنا في خطر. التلوث مشكلة كبيرة. يرمي الناس القمامة على الأرض وفي المحيطات. المصانع والسيارات تجعل الهواء قذراً. هذا يؤذي الحيوانات والبيئة.",
            difficulty: "متوسط",
            words: ["planet", "pollution", "recycle", "protect", "environment"]
        }
    ],
    advanced: [
        {
            id: 11,
            title: "The Economic Fluctuation",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400",
            content: "The global economy is a complex system that rarely stays the same. It tends to fluctuate significantly due to various factors like political events, natural disasters, and changes in technology. During periods of growth, people feel optimistic and spend more money. Companies hire more workers.",
            arabic: "الاقتصاد العالمي نظام معقد نادراً ما يبقى على حاله. يميل إلى التذبذب بشكل كبير بسبب عوامل مختلفة مثل الأحداث السياسية والكوارث الطبيعية والتغيرات في التكنولوجيا. خلال فترات النمو، يشعر الناس بالتفاؤل وينفقون المزيد من المال. توظف الشركات المزيد من العمال.",
            difficulty: "متقدم",
            words: ["economy", "fluctuate", "resilient", "sophisticated", "sustainable"]
        },
        {
            id: 12,
            title: "Scientific Hypothesis",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400",
            content: "In the world of science, discovery begins with curiosity. Scientists observe a phenomenon and they ask questions. From these questions, they develop a hypothesis. A hypothesis is an educated guess or a proposed explanation. However, it must be tested through rigorous experimentation.",
            arabic: "في عالم العلوم، يبدأ الاكتشاف بالفضول. يلاحظ العلماء ظاهرة ويطرحون أسئلة. من هذه الأسئلة، يطورون فرضية. الفرضية هي تخمين مدروس أو تفسير مقترح. ومع ذلك، يجب اختبارها من خلال تجارب دقيقة.",
            difficulty: "متقدم",
            words: ["hypothesis", "scrutinize", "meticulous", "widespread", "verify"]
        },
        {
            id: 13,
            title: "Cultural Perspective",
            image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400",
            content: "In our interconnected world, understanding different cultures is a necessity. It helps us navigate a world full of diverse customs, beliefs, and communication styles. Without it, interactions can be filled with misunderstandings. Cultural awareness is inevitable for success in a global environment.",
            arabic: "في عالمنا المترابط، فهم الثقافات المختلفة ضرورة. يساعدنا على التنقل في عالم مليء بالعادات والمعتقدات وأنماط التواصل المتنوعة. بدونه، يمكن أن تمتلئ التفاعلات بسوء الفهم. الوعي الثقافي أمر لا مفر منه للنجاح في بيئة عالمية.",
            difficulty: "متقدم",
            words: ["perspective", "pragmatic", "inevitable", "ambiguous", "diverse"]
        },
        {
            id: 14,
            title: "Infrastructure and Development",
            image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400",
            content: "Modern infrastructure is a benchmark for national progress. Neglected public transport systems lead to traffic congestion and slow economic growth. Consequently, investing in unprecedented urban development projects is essential for facilitating sustainable economic development for the entire nation.",
            arabic: "البنية التحتية الحديثة هي معيار للتقدم الوطني. أنظمة النقل العام المهملة تؤدي إلى الازدحام المروري وبطء النمو الاقتصادي. وبناءً على ذلك، فإن الاستثمار في مشاريع تنمية حضرية غير مسبوقة أمر ضروري لتسهيل التنمية الاقتصادية المستدامة للأمة بأكملها.",
            difficulty: "متقدم",
            words: ["infrastructure", "benchmark", "consequently", "unprecedented", "sustainable"]
        },
        {
            id: 15,
            title: "Adversity and Resilience",
            image: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?w=400",
            content: "Communities face periods of great adversity. How they respond defines their character. Conscientious leaders advocate for unity even when fear is tempting. Profound collaboration across different groups can help overcome the most daunting obstacles and demonstrate human resilience.",
            arabic: "تواجه المجتمعات فترات من المحن العظيمة. كيف يستجيبون يحدد شخصيتهم. القادة حيو الضمير يدعون للوحدة حتى عندما يكون الخوف مغرياً. التعاون العميق عبر المجموعات المختلفة يمكن أن يساعد في التغلب على أصعب العقبات ويظهر صمود البشر.",
            difficulty: "متقدم",
            words: ["adversity", "resilient", "conscientious", "advocate", "profound"]
        }
    ]
};
