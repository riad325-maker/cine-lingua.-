// stories-data.js - 30 قصة قصيرة تعليمية (ملف كامل مع تحسينات النصوص)
const STORIES_DATA = [
    // ==================== المستوى المبتدئ ====================
    {
        id: 101,
        title: "<span class='english-text'>The Cat and the Mouse</span>",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400",
        content: `<span class='english-text'>Once upon a time, there was a hungry cat. He saw a small mouse. The cat ran after the mouse. The mouse ran into a small hole. The cat could not get in. The mouse was safe. "Oh no!" said the cat. "I am still hungry." The mouse stayed in his hole. The cat waited and waited. Finally, the cat went away. The mouse was very happy.</span>`,
        arabic: `<span class='arabic-text'>كان يا ما كان، كانت هناك قطة جائعة. رأت فأراً صغيراً. ركضت القطة خلف الفأر. ركض الفأر إلى جحر صغير. لم تستطع القطة الدخول. كان الفأر آمناً. "أوه لا!" قالت القطة. "ما زلت جائعة." بقي الفأر في جحره. انتظرت القطة وانتظرت. أخيراً، ذهبت القطة. كان الفأر سعيداً جداً.</span>`,
        questions: [
            {
                question: "<span class='english-text'>Why did the cat run after the mouse?</span>",
                options: ["The cat was bored", "The cat was hungry", "The mouse was playing", "The cat was scared"],
                correct: 1,
                explanation: "<span class='english-text'>The cat was hungry, so it ran after the mouse to eat it.</span>"
            },
            {
                question: "<span class='english-text'>Where did the mouse go?</span>",
                options: ["Under the bed", "Into a hole", "Behind the door", "Up the tree"],
                correct: 1,
                explanation: "<span class='english-text'>The mouse ran into a hole to be safe from the cat.</span>"
            },
            {
                question: "<span class='english-text'>What happened at the end?</span>",
                options: ["The cat ate the mouse", "The mouse went away", "The cat went away", "They became friends"],
                correct: 2,
                explanation: "<span class='english-text'>The cat got tired of waiting and went away, so the mouse was safe.</span>"
            }
        ]
    },
    {
        id: 102,
        title: "<span class='english-text'>The Boy and His Dog</span>",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=400",
        content: `<span class='english-text'>Ahmed had a small dog. The dog's name was Max. Max was brown and white. Every morning, Ahmed took Max for a walk. Max loved to run in the park. One day, Max ran after a ball. He ran very fast. Ahmed could not find him. He looked everywhere. Finally, he saw Max near the big tree. Max was playing with a new friend. Ahmed was very happy.</span>`,
        arabic: `<span class='arabic-text'>أحمد كان لديه كلب صغير. اسم الكلب ماكس. كان ماكس بنياً وأبيضاً. كل صباح، كان أحمد يأخذ ماكس في نزهة. كان ماكس يحب الركض في الحديقة. في أحد الأيام، ركض ماكس خلف كرة. ركض بسرعة كبيرة. لم يستطع أحمد العثور عليه. بحث في كل مكان. أخيراً، رأى ماكس بالقرب من الشجرة الكبيرة. كان ماكس يلعب مع صديق جديد. كان أحمد سعيداً جداً.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What is the dog's name?</span>",
                options: ["Ahmed", "Max", "Brownie", "Spot"],
                correct: 1,
                explanation: "<span class='english-text'>The dog's name was Max.</span>"
            },
            {
                question: "<span class='english-text'>Where did Ahmed take Max every morning?</span>",
                options: ["To school", "To the park", "To the store", "To the beach"],
                correct: 1,
                explanation: "<span class='english-text'>Every morning, Ahmed took Max for a walk in the park.</span>"
            },
            {
                question: "<span class='english-text'>Where did Ahmed finally find Max?</span>",
                options: ["Near the house", "Near the big tree", "In the car", "At home"],
                correct: 1,
                explanation: "<span class='english-text'>He saw Max near the big tree playing with a new friend.</span>"
            }
        ]
    },
    {
        id: 103,
        title: "<span class='english-text'>The Lost Kite</span>",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1527005982-b4b7b2b2b2b2?w=400",
        content: `<span class='english-text'>Sara had a beautiful red kite. She loved to fly it in the park. The wind was strong that day. The kite flew high up in the sky. Suddenly, the string broke. The kite flew away. Sara ran after it. But the kite was too fast. It went over the trees. Sara was sad. A kind man saw Sara. He helped her get the kite. Sara was so happy. She thanked the man and went home.</span>`,
        arabic: `<span class='arabic-text'>سارة كان لديها طائرة ورقية حمراء جميلة. كانت تحب أن تطيرها في الحديقة. كان الرياح قوياً في ذلك اليوم. طارت الطائرة الورقية عالياً في السماء. فجأة، انقطع الخيط. طارت الطائرة الورقية بعيداً. ركضت سارة خلفها. لكن الطائرة الورقية كانت سريعة جداً. ذهبت فوق الأشجار. كانت سارة حزينة. رجل طيب رأى سارة. ساعدها في الحصول على الطائرة الورقية. كانت سارة سعيدة جداً. شكرت الرجل وذهبت إلى المنزل.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What color was Sara's kite?</span>",
                options: ["Blue", "Red", "Yellow", "Green"],
                correct: 1,
                explanation: "<span class='english-text'>Sara had a beautiful red kite.</span>"
            },
            {
                question: "<span class='english-text'>Why did the kite fly away?</span>",
                options: ["The wind stopped", "The string broke", "Sara let it go", "A bird took it"],
                correct: 1,
                explanation: "<span class='english-text'>Suddenly, the string broke and the kite flew away.</span>"
            },
            {
                question: "<span class='english-text'>Who helped Sara get her kite?</span>",
                options: ["Her mother", "Her friend", "A kind man", "A teacher"],
                correct: 2,
                explanation: "<span class='english-text'>A kind man saw Sara and helped her get the kite.</span>"
            }
        ]
    },
    {
        id: 104,
        title: "<span class='english-text'>The Little Fish</span>",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400",
        content: `<span class='english-text'>There was a little fish in the sea. His name was Finn. Finn was very small. The big fish always swam faster than him. One day, a big fish tried to eat Finn. Finn was scared. He swam away quickly. He found a small cave. He hid inside. The big fish could not get in. Finn was safe. He learned that being small can be good. He could hide in small places.</span>`,
        arabic: `<span class='arabic-text'>كان هناك سمكة صغيرة في البحر. اسمه فين. كان فين صغيراً جداً. كانت الأسماك الكبيرة تسبح أسرع منه دائماً. في أحد الأيام، حاولت سمكة كبيرة أكل فين. كان فين خائفاً. سبح بعيداً بسرعة. وجد كهفاً صغيراً. اختبأ في الداخل. لم تستطع السمكة الكبيرة الدخول. كان فين آمناً. تعلم أن الصغر يمكن أن يكون جيداً. يمكنه الاختباء في الأماكن الصغيرة.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What was the little fish's name?</span>",
                options: ["Nemo", "Finn", "Bubbles", "Goldie"],
                correct: 1,
                explanation: "<span class='english-text'>The little fish's name was Finn.</span>"
            },
            {
                question: "<span class='english-text'>What happened to Finn one day?</span>",
                options: ["He got lost", "He found a friend", "A big fish tried to eat him", "He swam too far"],
                correct: 2,
                explanation: "<span class='english-text'>A big fish tried to eat Finn.</span>"
            },
            {
                question: "<span class='english-text'>Where did Finn hide?</span>",
                options: ["Under a rock", "In a small cave", "In the seaweed", "Behind a ship"],
                correct: 1,
                explanation: "<span class='english-text'>He found a small cave and hid inside.</span>"
            }
        ]
    },
    {
        id: 105,
        title: "<span class='english-text'>The Lazy Rabbit</span>",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1535241749838-299277b6305f?w=400",
        content: `<span class='english-text'>Benny was a lazy rabbit. He loved to sleep all day. His friends worked hard. They collected food for winter. Benny did not help. "Winter is far away," he said. But winter came quickly. It was cold and snowy. Benny had no food. He was hungry and cold. He went to his friends. They shared their food with him. Benny learned his lesson. He promised to help next time.</span>`,
        arabic: `<span class='arabic-text'>بيني كان أرنباً كسولاً. كان يحب النوم طوال اليوم. كان أصدقاؤه يعملون بجد. كانوا يجمعون الطعام للشتاء. لم يساعد بيني. "الشتاء لا يزال بعيداً،" قال. لكن الشتاء جاء بسرعة. كان بارداً ومثلجاً. لم يكن لدى بيني طعام. كان جائعاً وبارداً. ذهب إلى أصدقائه. شاركوه طعامهم. تعلم بيني الدرس. وعد بالمساعدة في المرة القادمة.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What did Benny love to do?</span>",
                options: ["Work hard", "Sleep all day", "Collect food", "Play with friends"],
                correct: 1,
                explanation: "<span class='english-text'>Benny was a lazy rabbit who loved to sleep all day.</span>"
            },
            {
                question: "<span class='english-text'>What did Benny's friends do?</span>",
                options: ["They played games", "They collected food", "They slept too", "They went away"],
                correct: 1,
                explanation: "<span class='english-text'>His friends worked hard collecting food for winter.</span>"
            },
            {
                question: "<span class='english-text'>What did Benny learn?</span>",
                options: ["Winter is fun", "To sleep more", "To help others", "To play alone"],
                correct: 2,
                explanation: "<span class='english-text'>Benny learned that he should help others and work hard.</span>"
            }
        ]
    },
    {
        id: 106,
        title: "<span class='english-text'>The Bird's Nest</span>",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?w=400",
        content: `<span class='english-text'>A little bird built a nest in a tree. She laid three small eggs. She sat on them every day. She kept them warm. One morning, she heard a sound. The eggs were cracking. Baby birds came out. They were small and cute. The mother bird was happy. She found food for her babies. The baby birds grew bigger every day. Soon, they learned to fly.</span>`,
        arabic: `<span class='arabic-text'>بنت طائر صغير عشاً في شجرة. وضعت ثلاث بيضات صغيرة. جلست عليها كل يوم. أبقتهن دافئات. في صباح أحد الأيام، سمعت صوتاً. كانت البيضات تتكسر. خرجت الطيور الصغيرة. كانت صغيرة ولطيفة. كانت الطيور الأم سعيدة. وجدت طعاماً لأطفالها. كبرت الطيور الصغيرة كل يوم. سرعان ما تعلمت الطيران.</span>`,
        questions: [
            {
                question: "<span class='english-text'>How many eggs did the bird lay?</span>",
                options: ["Two", "Three", "Four", "Five"],
                correct: 1,
                explanation: "<span class='english-text'>The bird laid three small eggs.</span>"
            },
            {
                question: "<span class='english-text'>Why did the mother bird sit on the eggs?</span>",
                options: ["To hide them", "To keep them warm", "To play with them", "To sleep"],
                correct: 1,
                explanation: "<span class='english-text'>She sat on them to keep them warm.</span>"
            },
            {
                question: "<span class='english-text'>What did the baby birds learn to do?</span>",
                options: ["Sing", "Swim", "Fly", "Dance"],
                correct: 2,
                explanation: "<span class='english-text'>Soon, they learned to fly.</span>"
            }
        ]
    },
    {
        id: 107,
        title: "<span class='english-text'>The Lost Keys</span>",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1556740714-8398b3e9a8e2?w=400",
        content: `<span class='english-text'>Lina was going to school. She looked for her keys. She could not find them. She looked in her bag. They were not there. She looked under the bed. Nothing. She was late. She started to cry. Her mother came. "What is wrong?" she asked. "I lost my keys," said Lina. Her mother smiled. "Look on your desk," she said. The keys were there! Lina was so happy.</span>`,
        arabic: `<span class='arabic-text'>لينا كانت ذاهبة إلى المدرسة. بحثت عن مفاتيحها. لم تستطع العثور عليها. بحثت في حقيبتها. لم تكن هناك. بحثت تحت السرير. لا شيء. كانت متأخرة. بدأت في البكاء. جاءت أمها. "ما الخطأ؟" سألت. "فقدت مفاتيحي،" قالت لينا. ابتسمت أمها. "انظري على مكتبك،" قالت. كانت المفاتيح هناك! كانت لينا سعيدة جداً.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What was Lina looking for?</span>",
                options: ["Her bag", "Her keys", "Her book", "Her phone"],
                correct: 1,
                explanation: "<span class='english-text'>Lina was looking for her keys.</span>"
            },
            {
                question: "<span class='english-text'>How did Lina feel when she couldn't find them?</span>",
                options: ["Happy", "Excited", "Sad", "Angry"],
                correct: 2,
                explanation: "<span class='english-text'>She started to cry because she was sad and late.</span>"
            },
            {
                question: "<span class='english-text'>Where were the keys?</span>",
                options: ["In her bag", "Under the bed", "On her desk", "In the kitchen"],
                correct: 2,
                explanation: "<span class='english-text'>Her mother found the keys on her desk.</span>"
            }
        ]
    },
    {
        id: 108,
        title: "<span class='english-text'>The Rainy Day</span>",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=400",
        content: `<span class='english-text'>It was raining outside. Omar could not play in the park. He was sad. He looked out the window. He saw the rain falling. Then he had an idea. He put on his boots and jacket. He went outside. He jumped in puddles. The water splashed everywhere. He laughed and played. Rain was fun after all! His mother called him inside for hot chocolate. It was a perfect day.</span>`,
        arabic: `<span class='arabic-text'>كانت تمطر في الخارج. عمر لم يستطع اللعب في الحديقة. كان حزيناً. نظر من النافذة. رأى المطر يتساقط. ثم جاءته فكرة. ارتدى حذاءه وستره. خرج إلى الخارج. قفز في البرك. تناثر الماء في كل مكان. ضحك ولعب. كان المطر ممتعاً بعد كل شيء! نادته أمه للدخول لتناول الشوكولاتة الساخنة. كان يوماً مثالياً.</span>`,
        questions: [
            {
                question: "<span class='english-text'>Why was Omar sad at first?</span>",
                options: ["He was sick", "He couldn't play outside", "He lost his toy", "He was hungry"],
                correct: 1,
                explanation: "<span class='english-text'>Omar was sad because he could not play in the park due to rain.</span>"
            },
            {
                question: "<span class='english-text'>What did Omar do outside?</span>",
                options: ["He walked slowly", "He jumped in puddles", "He stayed dry", "He went home"],
                correct: 1,
                explanation: "<span class='english-text'>He jumped in puddles and played in the rain.</span>"
            },
            {
                question: "<span class='english-text'>What did Omar's mother give him?</span>",
                options: ["Cookies", "Hot chocolate", "Juice", "Cake"],
                correct: 1,
                explanation: "<span class='english-text'>His mother called him inside for hot chocolate.</span>"
            }
        ]
    },
    {
        id: 109,
        title: "<span class='english-text'>The New Pencil</span>",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1585339147947-2ff786a6b61b?w=400",
        content: `<span class='english-text'>Salem got a new pencil. It was yellow and sharp. He loved it very much. He used it at school. He wrote his name. He drew a house. He was careful with it. At the end of the day, he put it in his pencil case. But when he got home, it was gone! He looked everywhere. Then he saw it on his desk. He forgot to put it in his case. He was so happy to find it.</span>`,
        arabic: `<span class='arabic-text'>حصل سالم على قلم رصاص جديد. كان أصفر وحاداً. أحبه كثيراً. استخدمه في المدرسة. كتب اسمه. رسم منزلاً. كان حريصاً عليه. في نهاية اليوم، وضعه في مقلمته. لكن عندما وصل إلى المنزل، كان قد اختفى! بحث في كل مكان. ثم رآه على مكتبه. نسي وضعه في المقلمة. كان سعيداً جداً بالعثور عليه.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What color was Salem's new pencil?</span>",
                options: ["Blue", "Red", "Yellow", "Green"],
                correct: 2,
                explanation: "<span class='english-text'>The pencil was yellow.</span>"
            },
            {
                question: "<span class='english-text'>What did Salem draw?</span>",
                options: ["A tree", "A car", "A house", "A cat"],
                correct: 2,
                explanation: "<span class='english-text'>He drew a house.</span>"
            },
            {
                question: "<span class='english-text'>Where did Salem finally find his pencil?</span>",
                options: ["In his bag", "On his desk", "Under his bed", "At school"],
                correct: 1,
                explanation: "<span class='english-text'>He saw it on his desk at home.</span>"
            }
        ]
    },
    {
        id: 110,
        title: "<span class='english-text'>The Big Apple</span>",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400",
        content: `<span class='english-text'>Mona's grandmother gave her a big red apple. It looked delicious. Mona wanted to eat it. But she saw a small worm on it. She was scared. She showed her grandmother. Her grandmother washed the apple. The worm was gone. She cut the apple into pieces. Mona ate the sweet apple. It was very tasty. She thanked her grandmother.</span>`,
        arabic: `<span class='arabic-text'>أعطت جدة منى تفاحة حمراء كبيرة. بدت لذيذة. أرادت منى أكلها. لكنها رأت دودة صغيرة عليها. كانت خائفة. أظهرتها لجدتها. غسلت جدتها التفاحة. اختفت الدودة. قطعت التفاحة إلى قطع. أكلت منى التفاحة الحلوة. كانت لذيذة جداً. شكرت جدتها.</span>`,
        questions: [
            {
                question: "<span class='english-text'>Who gave Mona the apple?</span>",
                options: ["Her mother", "Her grandmother", "Her father", "Her friend"],
                correct: 1,
                explanation: "<span class='english-text'>Mona's grandmother gave her the apple.</span>"
            },
            {
                question: "<span class='english-text'>What did Mona see on the apple?</span>",
                options: ["A leaf", "A worm", "A spot", "A seed"],
                correct: 1,
                explanation: "<span class='english-text'>She saw a small worm on it.</span>"
            },
            {
                question: "<span class='english-text'>What did grandmother do with the apple?</span>",
                options: ["Threw it away", "Washed and cut it", "Gave it back", "Cooked it"],
                correct: 1,
                explanation: "<span class='english-text'>She washed the apple and cut it into pieces.</span>"
            }
        ]
    },

    // ==================== المستوى المتوسط ====================
    {
        id: 201,
        title: "<span class='english-text'>The Honest Woodcutter</span>",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?w=400",
        content: `<span class='english-text'>A poor woodcutter was cutting wood near a river. His axe fell into the water. He was very sad because he had no money to buy a new one. A water fairy appeared. She brought a gold axe and asked, "Is this yours?" The woodcutter said no. She brought a silver axe. He said no again. Finally, she brought his iron axe. "Yes, that's mine!" he said. The fairy was happy with his honesty. She gave him all three axes as a reward.</span>`,
        arabic: `<span class='arabic-text'>كان حطاب فقير يقطع الخشب بالقرب من نهر. سقط فأسه في الماء. كان حزيناً جداً لأنه لا يملك مالاً لشراء واحد جديد. ظهرت حورية الماء. أحضرت فأسه من ذهب وسألت: "هل هذا لك؟" قال الحطاب لا. أحضرت فأساً من فضة. قال لا مرة أخرى. أخيراً، أحضرت فأسه الحديدي. "نعم، هذا لي!" قال. كانت الحورية سعيدة بأمانته. أعطته الفؤوس الثلاثة كمكافأة.</span>`,
        questions: [
            {
                question: "<span class='english-text'>Why was the woodcutter sad?</span>",
                options: ["He lost his way", "His axe fell in the river", "He had no food", "It started raining"],
                correct: 1,
                explanation: "<span class='english-text'>He was sad because his axe fell into the water and he had no money to buy a new one.</span>"
            },
            {
                question: "<span class='english-text'>What did the fairy bring first?</span>",
                options: ["A silver axe", "An iron axe", "A gold axe", "A wooden axe"],
                correct: 2,
                explanation: "<span class='english-text'>The fairy first brought a gold axe.</span>"
            },
            {
                question: "<span class='english-text'>Why did the fairy give him all three axes?</span>",
                options: ["He was poor", "He was honest", "He asked for them", "He was sad"],
                correct: 1,
                explanation: "<span class='english-text'>The fairy was happy with his honesty and rewarded him.</span>"
            }
        ]
    },
    {
        id: 202,
        title: "<span class='english-text'>The Farmer and His Sons</span>",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400",
        content: `<span class='english-text'>An old farmer had three sons who always fought. On his deathbed, he called them. He gave them a bundle of sticks. "Break this," he said. Each son tried but failed. Then he gave them single sticks. They broke them easily. "Together you are strong like the bundle," he said. "Apart you are weak like one stick." The sons understood. After he died, they worked together and became successful.</span>`,
        arabic: `<span class='arabic-text'>كان لمزارع عجوز ثلاثة أبناء يتشاجرون دائماً. على فراش الموت، دعاهم. أعطاهم حزمة من العصي. "اكسروا هذه،" قال. حاول كل ابن لكنه فشل. ثم أعطاهم عصي مفردة. كسروها بسهولة. "معاً أنتم أقوياء مثل الحزمة،" قال. "متفرقين أنتم ضعفاء مثل عصا واحدة." فهم الأبناء. بعد وفاته، عملوا معاً ونجحوا.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What did the farmer give his sons first?</span>",
                options: ["Single sticks", "A bundle of sticks", "A bag of gold", "A field"],
                correct: 1,
                explanation: "<span class='english-text'>He gave them a bundle of sticks.</span>"
            },
            {
                question: "<span class='english-text'>Could they break the bundle?</span>",
                options: ["Yes, easily", "No, they couldn't", "Only one could", "They didn't try"],
                correct: 1,
                explanation: "<span class='english-text'>Each son tried but failed to break the bundle.</span>"
            },
            {
                question: "<span class='english-text'>What lesson did the farmer teach?</span>",
                options: ["Sticks are strong", "Working together is powerful", "Fighting is good", "Be independent"],
                correct: 1,
                explanation: "<span class='english-text'>He taught that together they are strong, but apart they are weak.</span>"
            }
        ]
    },
    {
        id: 203,
        title: "<span class='english-text'>The Greedy Dog</span>",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=400",
        content: `<span class='english-text'>A dog found a big bone. He was very happy. He carried it in his mouth. He walked across a bridge. He looked down and saw his reflection in the water. He thought it was another dog with a bigger bone. He wanted that bone too. He opened his mouth to bark. His bone fell into the water. He lost his bone because he was greedy. He learned that greed leads to loss.</span>`,
        arabic: `<span class='arabic-text'>وجد كلب عظماً كبيراً. كان سعيداً جداً. حمله في فمه. مشى عبر جسر. نظر إلى الأسفل ورأى انعكاسه في الماء. ظن أنه كلب آخر بعظم أكبر. أراد ذلك العظم أيضاً. فتح فمه لينبح. سقط عظمه في الماء. خسر عظمه لأنه كان طماعاً. تعلم أن الطمع يؤدي إلى الخسارة.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What did the dog find?</span>",
                options: ["A bone", "A stick", "Some food", "A friend"],
                correct: 0,
                explanation: "<span class='english-text'>The dog found a big bone.</span>"
            },
            {
                question: "<span class='english-text'>What did the dog see in the water?</span>",
                options: ["A fish", "His reflection", "Another dog", "A bigger bone"],
                correct: 1,
                explanation: "<span class='english-text'>He saw his reflection and thought it was another dog.</span>"
            },
            {
                question: "<span class='english-text'>Why did the dog lose his bone?</span>",
                options: ["He dropped it", "He was greedy", "Another dog took it", "He hid it"],
                correct: 1,
                explanation: "<span class='english-text'>He lost his bone because he was greedy and opened his mouth to bark.</span>"
            }
        ]
    },
    {
        id: 204,
        title: "<span class='english-text'>The Wind and the Sun</span>",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?w=400",
        content: `<span class='english-text'>The Wind and the Sun argued who was stronger. They saw a traveler. The Wind said, "I can make him take off his coat." The Wind blew hard. But the traveler held his coat tighter. The Sun tried. He shone warmly. The traveler felt hot. He took off his coat. The Sun won. Kindness is stronger than force.</span>`,
        arabic: `<span class='arabic-text'>تجادلت الرياح والشمس من هو الأقوى. رأوا مسافراً. قالت الرياح: "أستطيع أن أجعله يخلع معطفه." هبت الرياح بقوة. لكن المسافر أمسك معطفه بإحكام. حاولت الشمس. أشرقت بحرارة. شعر المسافر بالحر. خلع معطفه. فازت الشمس. اللطف أقوى من القوة.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What did the Wind and Sun argue about?</span>",
                options: ["Who was faster", "Who was stronger", "Who was hotter", "Who was kinder"],
                correct: 1,
                explanation: "<span class='english-text'>They argued about who was stronger.</span>"
            },
            {
                question: "<span class='english-text'>How did the Wind try to win?</span>",
                options: ["By shining", "By blowing hard", "By raining", "By being quiet"],
                correct: 1,
                explanation: "<span class='english-text'>The Wind blew hard to make the traveler take off his coat.</span>"
            },
            {
                question: "<span class='english-text'>Why did the traveler take off his coat?</span>",
                options: ["The Wind blew it off", "The Sun shone warmly", "He was tired", "He arrived home"],
                correct: 1,
                explanation: "<span class='english-text'>The Sun shone warmly and the traveler felt hot, so he took off his coat.</span>"
            }
        ]
    },
    {
        id: 205,
        title: "<span class='english-text'>The Ant and the Grasshopper</span>",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1555158169-4f9b5a6b8b8b?w=400",
        content: `<span class='english-text'>In summer, an ant worked hard collecting food. A grasshopper played and sang. "Come play with me," said the grasshopper. "I must work for winter," said the ant. Winter came. The grasshopper had no food. He was hungry. He went to the ant. The ant shared his food. "Thank you," said the grasshopper. "Next time I will work hard too."</span>`,
        arabic: `<span class='arabic-text'>في الصيف، عملت نملة بجد تجمع الطعام. كان جندب يلعب ويغني. "تعال العب معي،" قال الجندب. "يجب أن أعمل للشتاء،" قالت النملة. جاء الشتاء. لم يكن لدى الجندب طعام. كان جائعاً. ذهب إلى النملة. شاركته النملة طعامها. "شكراً،" قال الجندب. "في المرة القادمة سأعمل بجد أيضاً."</span>`,
        questions: [
            {
                question: "<span class='english-text'>What did the ant do in summer?</span>",
                options: ["Played", "Slept", "Collected food", "Sang"],
                correct: 2,
                explanation: "<span class='english-text'>The ant worked hard collecting food.</span>"
            },
            {
                question: "<span class='english-text'>What happened to the grasshopper in winter?</span>",
                options: ["He had no food", "He found food", "He was happy", "He slept all day"],
                correct: 0,
                explanation: "<span class='english-text'>The grasshopper had no food and was hungry.</span>"
            },
            {
                question: "<span class='english-text'>What did the grasshopper learn?</span>",
                options: ["To play more", "To work hard", "To sing", "To sleep"],
                correct: 1,
                explanation: "<span class='english-text'>He learned to work hard for the future.</span>"
            }
        ]
    },
    {
        id: 206,
        title: "<span class='english-text'>The Lion and the Mouse</span>",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=400",
        content: `<span class='english-text'>A lion was sleeping. A mouse ran over his face. The lion woke up and caught the mouse. "Please let me go," said the mouse. "Maybe I can help you one day." The lion laughed but let him go. Later, hunters caught the lion in a net. The mouse heard him roar. He chewed the rope and freed the lion. "Even a small friend can help," said the lion.</span>`,
        arabic: `<span class='arabic-text'>كان أسد نائماً. ركض فأر على وجهه. استيقظ الأسد وأمسك بالفأر. "من فضلك اتركني أذهب،" قال الفأر. "ربما يمكنني مساعدتك يوماً ما." ضحك الأسد لكنه تركه. فيما بعد، قبض الصيادون على الأسد في شبكة. سمعه الفأر يزأر. قضم الحبل وحرر الأسد. "حتى الصديق الصغير يمكنه المساعدة،" قال الأسد.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What did the mouse do to the lion?</span>",
                options: ["Bit him", "Ran over his face", "Woke him up", "Talked to him"],
                correct: 1,
                explanation: "<span class='english-text'>The mouse ran over the lion's face.</span>"
            },
            {
                question: "<span class='english-text'>Why did the lion let the mouse go?</span>",
                options: ["He was scared", "He was kind", "He was full", "He was tired"],
                correct: 1,
                explanation: "<span class='english-text'>The lion laughed at the mouse's offer but let him go.</span>"
            },
            {
                question: "<span class='english-text'>How did the mouse help the lion?</span>",
                options: ["He called for help", "He chewed the rope", "He scared the hunters", "He found food"],
                correct: 1,
                explanation: "<span class='english-text'>The mouse chewed the rope and freed the lion.</span>"
            }
        ]
    },
    {
        id: 207,
        title: "<span class='english-text'>The Thirsty Crow</span>",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1590523277543-a94c2e4eb00b?w=400",
        content: `<span class='english-text'>A crow was very thirsty. He saw a water jug. There was water at the bottom. But he could not reach it. He tried to push the jug. It did not move. He had an idea. He dropped small stones into the jug. The water rose higher. Finally, he could drink. He was happy. Cleverness can solve problems.</span>`,
        arabic: `<span class='arabic-text'>كان غراب عطشاناً جداً. رأى إبريق ماء. كان الماء في القاع. لكنه لم يستطع الوصول إليه. حاول دفع الإبريق. لم يتحرك. جاءته فكرة. أسقط حجارة صغيرة في الإبريق. ارتفع الماء. أخيراً، استطاع الشرب. كان سعيداً. الذكاء يمكن أن يحل المشاكل.</span>`,
        questions: [
            {
                question: "<span class='english-text'>Why was the crow thirsty?</span>",
                options: ["It was hot", "He couldn't find water", "He flew too far", "He was sick"],
                correct: 0,
                explanation: "<span class='english-text'>The story doesn't specify why, but he was very thirsty.</span>"
            },
            {
                question: "<span class='english-text'>How did the crow reach the water?</span>",
                options: ["He broke the jug", "He pushed it over", "He dropped stones in it", "He waited"],
                correct: 2,
                explanation: "<span class='english-text'>He dropped small stones into the jug to make the water rise.</span>"
            },
            {
                question: "<span class='english-text'>What lesson does this story teach?</span>",
                options: ["Crows are smart", "Water is important", "Cleverness solves problems", "Stones are useful"],
                correct: 2,
                explanation: "<span class='english-text'>The story teaches that cleverness can solve problems.</span>"
            }
        ]
    },
    {
        id: 208,
        title: "<span class='english-text'>The Boy Who Cried Wolf</span>",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1518022564380-2d3b5b68d7b9?w=400",
        content: `<span class='english-text'>A boy looked after sheep. He was bored. He cried, "Wolf! Wolf!" The villagers came to help. There was no wolf. He laughed. He did it again. The villagers came again. Still no wolf. They were angry. Then a real wolf came. The boy cried for help. No one came. The wolf ate the sheep. Liars are not believed even when they tell the truth.</span>`,
        arabic: `<span class='arabic-text'>كان صبي يرعى الغنم. كان يشعر بالملل. صرخ: "ذئب! ذئب!" جاء القرويون للمساعدة. لم يكن هناك ذئب. ضحك. فعلها مرة أخرى. جاء القرويون مرة أخرى. لا يزال لا يوجد ذئب. كانوا غاضبين. ثم جاء ذئب حقيقي. صرخ الصبي طلباً للمساعدة. لم يأت أحد. أكل الذئب الغنم. الكذابون لا يصدقون حتى عندما يقولون الحقيقة.</span>`,
        questions: [
            {
                question: "<span class='english-text'>Why did the boy cry wolf the first time?</span>",
                options: ["He saw a wolf", "He was bored", "He was scared", "He was playing"],
                correct: 1,
                explanation: "<span class='english-text'>The boy was bored, so he cried wolf for fun.</span>"
            },
            {
                question: "<span class='english-text'>What happened when the real wolf came?</span>",
                options: ["Villagers came quickly", "No one came to help", "The boy ran away", "The wolf ran away"],
                correct: 1,
                explanation: "<span class='english-text'>No one came to help because they thought he was lying again.</span>"
            },
            {
                question: "<span class='english-text'>What is the moral of the story?</span>",
                options: ["Sheep are tasty", "Wolves are dangerous", "Don't lie", "Boys are naughty"],
                correct: 2,
                explanation: "<span class='english-text'>Liars are not believed even when they tell the truth.</span>"
            }
        ]
    },
    {
        id: 209,
        title: "<span class='english-text'>The Tortoise and the Hare</span>",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1598439210624-06a3d2000b9b?w=400",
        content: `<span class='english-text'>A hare boasted about his speed. He challenged a tortoise to a race. The tortoise accepted. The hare ran fast. He was far ahead. He decided to rest. He fell asleep. The tortoise kept walking slowly. He passed the sleeping hare. The hare woke up. He ran fast. But it was too late. The tortoise won. Slow and steady wins the race.</span>`,
        arabic: `<span class='arabic-text'>تفاخر أرنب بسرعته. تحدى سلحفاة في سباق. قبلت السلحفاة. ركض الأرنب بسرعة. كان متقدماً كثيراً. قرر أن يستريح. نام. واصلت السلحفاة المشي ببطء. تخطت الأرنب النائم. استيقظ الأرنب. ركض بسرعة. لكنه كان متأخراً جداً. فازت السلحفاة. البطيء والثابت يفوز بالسباق.</span>`,
        questions: [
            {
                question: "<span class='english-text'>Why did the hare challenge the tortoise?</span>",
                options: ["He was bored", "He boasted about his speed", "He liked racing", "He was angry"],
                correct: 1,
                explanation: "<span class='english-text'>The hare boasted about his speed and challenged the tortoise.</span>"
            },
            {
                question: "<span class='english-text'>What did the hare do during the race?</span>",
                options: ["Ran faster", "Helped the tortoise", "Fell asleep", "Gave up"],
                correct: 2,
                explanation: "<span class='english-text'>He was far ahead and decided to rest, then fell asleep.</span>"
            },
            {
                question: "<span class='english-text'>What is the moral of the story?</span>",
                options: ["Fast is best", "Sleeping is bad", "Slow and steady wins", "Tortoises are slow"],
                correct: 2,
                explanation: "<span class='english-text'>Slow and steady wins the race.</span>"
            }
        ]
    },
    {
        id: 210,
        title: "<span class='english-text'>The Fox and the Grapes</span>",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1577090636960-2c9faa4b0e0b?w=400",
        content: `<span class='english-text'>A fox saw some grapes hanging high on a vine. He wanted to eat them. He jumped but could not reach. He jumped again. Still no. He tried many times. Finally, he gave up. "Those grapes are probably sour anyway," he said. He walked away. People sometimes pretend to dislike what they cannot have.</span>`,
        arabic: `<span class='arabic-text'>رأى ثعلب بعض العنب معلقاً عالياً على كرمة. أراد أكله. قفز لكنه لم يستطع الوصول. قفز مرة أخرى. لا يزال لا. حاول عدة مرات. أخيراً، استسلم. "هذا العنب على الأرجح حامض على أي حال،" قال. مشى بعيداً. أحياناً يتظاهر الناس بعدم حب ما لا يستطيعون الحصول عليه.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What did the fox want?</span>",
                options: ["Water", "Grapes", "Meat", "A friend"],
                correct: 1,
                explanation: "<span class='english-text'>The fox saw some grapes and wanted to eat them.</span>"
            },
            {
                question: "<span class='english-text'>Why couldn't the fox get the grapes?</span>",
                options: ["They were green", "They were too high", "They were sour", "He wasn't hungry"],
                correct: 1,
                explanation: "<span class='english-text'>The grapes were hanging high on the vine and he couldn't reach them.</span>"
            },
            {
                question: "<span class='english-text'>What did the fox say at the end?</span>",
                options: ["I'll try again", "They are probably sour", "I'm not hungry", "Help me"],
                correct: 1,
                explanation: "<span class='english-text'>He said the grapes were probably sour anyway.</span>"
            }
        ]
    },

    // ==================== المستوى المتقدم ====================
    {
        id: 301,
        title: "<span class='english-text'>The Fisherman and His Wife</span>",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400",
        content: `<span class='english-text'>A poor fisherman caught a magic fish. The fish could grant wishes. He let it go. His wife was angry. "Ask for a house," she said. He did. The fish granted it. But his wife wanted more. She sent him again. She wanted a castle. Then to be king. Then emperor. Then pope. Each time the fish granted it. Finally, she wanted to be like God. The fish said no. They lost everything and were back in their old hut.</span>`,
        arabic: `<span class='arabic-text'>صياد فقير اصطاد سمكة سحرية. يمكن للسمكة تحقيق الأمنيات. أطلق سراحها. كانت زوجته غاضبة. "اطلب منزلاً،" قالت. فعل. حققت السمكة ذلك. لكن زوجته أرادت المزيد. أرسلته مرة أخرى. أرادت قلعة. ثم أن تكون ملكة. ثم إمبراطورة. ثم بابا. في كل مرة حققت السمكة ذلك. أخيراً، أرادت أن تكون مثل الله. قالت السمكة لا. خسروا كل شيء وعادوا إلى كوخهم القديم.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What did the fisherman do with the magic fish?</span>",
                options: ["He kept it", "He sold it", "He let it go", "He cooked it"],
                correct: 2,
                explanation: "<span class='english-text'>The fisherman let the magic fish go.</span>"
            },
            {
                question: "<span class='english-text'>Why was the wife never satisfied?</span>",
                options: ["She was greedy", "She didn't believe", "She wanted revenge", "She was hungry"],
                correct: 0,
                explanation: "<span class='english-text'>She always wanted more and more, showing her greed.</span>"
            },
            {
                question: "<span class='english-text'>What happened in the end?</span>",
                options: ["They became rich", "They lost everything", "They ruled the world", "They were happy"],
                correct: 1,
                explanation: "<span class='english-text'>They lost everything and ended up back in their old hut.</span>"
            }
        ]
    },
    {
        id: 302,
        title: "<span class='english-text'>The Emperor's New Clothes</span>",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400",
        content: `<span class='english-text'>An emperor loved clothes. Two swindlers came. They said they could make magical clothes. Only wise people could see them. The emperor paid them. They pretended to weave. No one could see the clothes. But everyone pretended to see. They didn't want to seem foolish. The emperor wore the invisible clothes in a parade. A child cried, "He has nothing on!" Everyone realized the truth. But the emperor kept walking, pretending.</span>`,
        arabic: `<span class='arabic-text'>كان إمبراطور يحب الملابس. جاء محتالان. قالا إنهما يستطيعان صنع ملابس سحرية. فقط الحكماء يمكنهم رؤيتها. دفع لهما الإمبراطور. تظاهرا بالنسيج. لم يستطع أحد رؤية الملابس. لكن الجميع تظاهروا بالرؤية. لم يريدوا أن يبدوا أغبياء. ارتدى الإمبراطور الملابس غير المرئية في موكب. صرخ طفل: "إنه لا يرتدي شيئاً!" أدرك الجميع الحقيقة. لكن الإمبراطور استمر في المشي متظاهراً.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What did the swindlers claim about their clothes?</span>",
                options: ["They were expensive", "Only wise people could see them", "They were made of gold", "They never tore"],
                correct: 1,
                explanation: "<span class='english-text'>They claimed that only wise people could see the clothes.</span>"
            },
            {
                question: "<span class='english-text'>Why did everyone pretend to see the clothes?</span>",
                options: ["They were blind", "They wanted to seem wise", "They liked the emperor", "They were paid"],
                correct: 1,
                explanation: "<span class='english-text'>They didn't want to seem foolish or unwise.</span>"
            },
            {
                question: "<span class='english-text'>Who told the truth?</span>",
                options: ["A minister", "A child", "The queen", "A soldier"],
                correct: 1,
                explanation: "<span class='english-text'>A child cried out the truth.</span>"
            }
        ]
    },
    {
        id: 303,
        title: "<span class='english-text'>The Selfish Giant</span>",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400",
        content: `<span class='english-text'>A giant had a beautiful garden. Children loved to play there. The giant was selfish. He built a wall. Spring came everywhere but his garden. It was always winter there. The giant was sad. One day, children found a hole. They came in. Spring came with them. The giant's heart melted. He knocked down the wall. He let the children play. He became kind and happy.</span>`,
        arabic: `<span class='arabic-text'>كان لعملاق حديقة جميلة. أحب الأطفال اللعب هناك. كان العملاق أنانياً. بنى جداراً. جاء الربيع في كل مكان إلا حديقته. كان الشتاء دائماً هناك. كان العملاق حزيناً. في يوم من الأيام، وجد الأطفال ثغرة. دخلوا. جاء الربيع معهم. ذاب قلب العملاق. هدم الجدار. سمح للأطفال باللعب. أصبح طيباً وسعيداً.</span>`,
        questions: [
            {
                question: "<span class='english-text'>Why did the giant build a wall?</span>",
                options: ["He was angry", "He was selfish", "He was scared", "He was tired"],
                correct: 1,
                explanation: "<span class='english-text'>The giant was selfish and didn't want children in his garden.</span>"
            },
            {
                question: "<span class='english-text'>What happened to the garden after the wall?</span>",
                options: ["It became beautiful", "It was always winter", "Flowers grew", "It became summer"],
                correct: 1,
                explanation: "<span class='english-text'>Spring never came to the garden; it was always winter.</span>"
            },
            {
                question: "<span class='english-text'>What changed the giant?</span>",
                options: ["The weather", "The children playing", "His friends", "The spring"],
                correct: 1,
                explanation: "<span class='english-text'>Seeing the children play made his heart melt and he became kind.</span>"
            }
        ]
    },
    {
        id: 304,
        title: "<span class='english-text'>The Princess and the Pea</span>",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=400",
        content: `<span class='english-text'>A prince wanted to marry a real princess. He traveled the world but couldn't find one. One stormy night, a girl came to the castle. She claimed to be a princess. The queen tested her. She put a pea under twenty mattresses. The girl couldn't sleep. She felt the pea. Only a real princess could be so sensitive. The prince married her.</span>`,
        arabic: `<span class='arabic-text'>أراد أمير الزواج من أميرة حقيقية. سافر حول العالم لكنه لم يجد واحدة. في ليلة عاصفة، جاءت فتاة إلى القلعة. ادعت أنها أميرة. اختبرتها الملكة. وضعت بازلاء تحت عشرين مرتبة. لم تستطع الفتاة النوم. شعرت بالبازلاء. فقط أميرة حقيقية يمكن أن تكون حساسة جداً. تزوجها الأمير.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What did the prince want?</span>",
                options: ["A castle", "A real princess", "A horse", "A crown"],
                correct: 1,
                explanation: "<span class='english-text'>The prince wanted to marry a real princess.</span>"
            },
            {
                question: "<span class='english-text'>How did the queen test the girl?</span>",
                options: ["She asked questions", "She gave her a test", "She put a pea under mattresses", "She watched her eat"],
                correct: 2,
                explanation: "<span class='english-text'>The queen put a pea under twenty mattresses to test her sensitivity.</span>"
            },
            {
                question: "<span class='english-text'>Why couldn't the girl sleep?</span>",
                options: ["She was scared", "She felt the pea", "The bed was hard", "It was noisy"],
                correct: 1,
                explanation: "<span class='english-text'>She felt the pea through all the mattresses, so she couldn't sleep.</span>"
            }
        ]
    },
    {
        id: 305,
        title: "<span class='english-text'>The Ugly Duckling</span>",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1559253664-6f9b8e7a9b8b?w=400",
        content: `<span class='english-text'>A mother duck had many ducklings. One was ugly and different. Everyone made fun of him. He ran away. He saw beautiful swans. He wished he was like them. Winter passed. Spring came. He looked at his reflection. He had become a beautiful swan! He was not ugly at all. He was always meant to be a swan.</span>`,
        arabic: `<span class='arabic-text'>كان لدى بطّة أم العديد من فراخ البط. كان أحدهم قبيحاً ومختلفاً. سخروا منه الجميع. هرب. رأى بجعات جميلات. تمنى أن يكون مثلهن. مر الشتاء. جاء الربيع. نظر في انعكاسه. أصبح بجعة جميلة! لم يكن قبيحاً على الإطلاق. كان مقدراً له دائماً أن يكون بجعة.</span>`,
        questions: [
            {
                question: "<span class='english-text'>Why did the duckling run away?</span>",
                options: ["He was lost", "He was made fun of", "He was hungry", "He was scared"],
                correct: 1,
                explanation: "<span class='english-text'>He ran away because everyone made fun of him.</span>"
            },
            {
                question: "<span class='english-text'>What did the duckling become?</span>",
                options: ["A duck", "A goose", "A swan", "An eagle"],
                correct: 2,
                explanation: "<span class='english-text'>He became a beautiful swan.</span>"
            },
            {
                question: "<span class='english-text'>What is the moral of the story?</span>",
                options: ["Looks matter", "Beauty is in the eye of the beholder", "Everyone is beautiful in their own way", "Ducks are ugly"],
                correct: 2,
                explanation: "<span class='english-text'>The story teaches that everyone has their own beauty and time to shine.</span>"
            }
        ]
    },
    {
        id: 306,
        title: "<span class='english-text'>The Little Mermaid</span>",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=400",
        content: `<span class='english-text'>A little mermaid fell in love with a prince. She made a deal with a sea witch. She got legs but lost her voice. Every step hurt. She couldn't tell the prince who she was. He married another. Her sisters gave her a knife. If she killed him, she could return to the sea. She couldn't. She jumped into the sea and became foam.</span>`,
        arabic: `<span class='arabic-text'>وقعت حورية البحر الصغيرة في حب أمير. عقدت صفقة مع ساحرة البحر. حصلت على ساقين لكنها فقدت صوتها. كل خطوة كانت تؤلمها. لم تستطع إخبار الأمير من تكون. تزوج بأخرى. أعطتها أخواتها سكيناً. إذا قتلته، يمكنها العودة إلى البحر. لم تستطع. قفزت في البحر وأصبحت زبداً.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What did the mermaid trade for legs?</span>",
                options: ["Her fins", "Her voice", "Her hair", "Her tail"],
                correct: 1,
                explanation: "<span class='english-text'>She traded her voice to the sea witch for legs.</span>"
            },
            {
                question: "<span class='english-text'>Why couldn't the mermaid tell the prince who she was?</span>",
                options: ["She forgot", "She was scared", "She lost her voice", "He was deaf"],
                correct: 2,
                explanation: "<span class='english-text'>She lost her voice and couldn't speak.</span>"
            },
            {
                question: "<span class='english-text'>What happened at the end?</span>",
                options: ["She married the prince", "She returned to the sea", "She became foam", "She died"],
                correct: 2,
                explanation: "<span class='english-text'>She couldn't kill the prince and became foam in the sea.</span>"
            }
        ]
    },
    {
        id: 307,
        title: "<span class='english-text'>The Snow Queen</span>",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400",
        content: `<span class='english-text'>A evil troll made a mirror. It showed only ugly things. It broke into pieces. A piece hit Kay's eye. He became cold and cruel. The Snow Queen took him. His friend Gerda searched for him everywhere. She traveled far. She faced many dangers. Finally, she reached the Snow Queen's palace. Her tears melted the ice in Kay's heart. They returned home together.</span>`,
        arabic: `<span class='arabic-text'>صنع قزم شرير مرآة. أظهرت فقط الأشياء القبيحة. تحطمت إلى قطع. أصابت قطعة عين كاي. أصبح بارداً وقاسياً. أخذته ملكة الثلج. بحثت عنه صديقته غيردا في كل مكان. سافرت بعيداً. واجهت العديد من المخاطر. أخيراً، وصلت إلى قصر ملكة الثلج. ذابت دموعها الجليد في قلب كاي. عادوا إلى المنزل معاً.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What happened to Kay?</span>",
                options: ["He got lost", "A mirror piece hit his eye", "He fell in love", "He ran away"],
                correct: 1,
                explanation: "<span class='english-text'>A piece of the evil mirror hit Kay's eye, making him cold and cruel.</span>"
            },
            {
                question: "<span class='english-text'>Who took Kay?</span>",
                options: ["The Snow Queen", "The troll", "A witch", "His grandmother"],
                correct: 0,
                explanation: "<span class='english-text'>The Snow Queen took Kay to her palace.</span>"
            },
            {
                question: "<span class='english-text'>How did Gerda save Kay?</span>",
                options: ["She fought the queen", "Her tears melted the ice", "She used magic", "She begged"],
                correct: 1,
                explanation: "<span class='english-text'>Gerda's tears melted the ice in Kay's heart.</span>"
            }
        ]
    },
    {
        id: 308,
        title: "<span class='english-text'>The Wild Swans</span>",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1559482118-5b1e0b5b5b5b?w=400",
        content: `<span class='english-text'>A king had eleven sons and one daughter. Their evil stepmother turned the brothers into swans. They flew away. The sister, Elisa, searched for them. A fairy told her to knit nettle shirts for them. She couldn't speak while knitting. She was accused of witchcraft. As she was to be burned, the swans came. She threw the shirts on them. They became human again.</span>`,
        arabic: `<span class='arabic-text'>كان لملك أحد عشر ابناً وابنة واحدة. حولتهم زوجة الأب الشريرة إلى بجعات. طاروا بعيداً. بحثت عنهم الأخت إليزا. أخبرتها جنية أن تحيك لهم قمصاناً من نبات القراص. لم تستطع التحدث أثناء الحياكة. اتهمت بالسحر. بينما كانت ستُحرق، جاء البجع. ألقت القمصان عليهم. عادوا بشراً مرة أخرى.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What did the stepmother do to the brothers?</span>",
                options: ["She killed them", "She turned them into swans", "She sent them away", "She cursed them"],
                correct: 1,
                explanation: "<span class='english-text'>The evil stepmother turned the brothers into wild swans.</span>"
            },
            {
                question: "<span class='english-text'>What did Elisa have to do to save them?</span>",
                options: ["Find them", "Knit nettle shirts", "Fight the queen", "Say a spell"],
                correct: 1,
                explanation: "<span class='english-text'>She had to knit shirts from nettles for her brothers.</span>"
            },
            {
                question: "<span class='english-text'>Why couldn't Elisa speak?</span>",
                options: ["She was scared", "She was cursed", "She promised not to", "She lost her voice"],
                correct: 2,
                explanation: "<span class='english-text'>She couldn't speak while knitting the nettle shirts.</span>"
            }
        ]
    },
    {
        id: 309,
        title: "<span class='english-text'>The Steadfast Tin Soldier</span>",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400",
        content: `<span class='english-text'>A tin soldier had only one leg. He loved a paper dancer. A goblin was jealous. He pushed the soldier out the window. The soldier fell into the street. Boys found him and put him in a boat. He floated away. A fish ate him. The fish was caught and sold. When the fish was cut open, there was the soldier! He was back home. He saw the dancer. Then a boy threw them both in the fire. They melted together.</span>`,
        arabic: `<span class='arabic-text'>كان لجندي من الصفيح ساق واحدة فقط. أحب راقصة من الورق. كان العفريت غيوراً. دفعه من النافذة. سقط الجندي في الشارع. وجده الأولاد ووضعوه في قارب. طاف بعيداً. أكلته سمكة. تم صيد السمكة وبيعها. عندما فتحت السمكة، كان الجندي هناك! عاد إلى المنزل. رأى الراقصة. ثم ألقى بهما صبي في النار. ذابا معاً.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What was special about the tin soldier?</span>",
                options: ["He had no arms", "He had one leg", "He was made of gold", "He could talk"],
                correct: 1,
                explanation: "<span class='english-text'>The tin soldier had only one leg.</span>"
            },
            {
                question: "<span class='english-text'>Who did the soldier love?</span>",
                options: ["A princess", "A paper dancer", "A doll", "A fairy"],
                correct: 1,
                explanation: "<span class='english-text'>He loved a paper dancer.</span>"
            },
            {
                question: "<span class='english-text'>What happened at the end?</span>",
                options: ["He married the dancer", "He melted with her", "He returned to his box", "He became real"],
                correct: 1,
                explanation: "<span class='english-text'>They both melted together in the fire.</span>"
            }
        ]
    },
    {
        id: 310,
        title: "<span class='english-text'>The Nightingale</span>",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400",
        content: `<span class='english-text'>An emperor loved a nightingale's song. He kept it in a cage. Then he got a mechanical bird. He forgot the real one. The mechanical bird broke. The emperor became sick. Death came for him. The real nightingale returned. It sang so beautifully that Death left. The emperor got well. He learned that real beauty cannot be replaced.</span>`,
        arabic: `<span class='arabic-text'>أحب إمبراطور غناء العندليب. وضعه في قفص. ثم حصل على طائر ميكانيكي. نسي الطائر الحقيقي. انكسر الطائر الميكانيكي. مرض الإمبراطور. جاء الموت له. عاد العندليب الحقيقي. غنى بشكل جميل لدرجة أن الموت رحل. شفي الإمبراطور. تعلم أن الجمال الحقيقي لا يمكن استبداله.</span>`,
        questions: [
            {
                question: "<span class='english-text'>What did the emperor love?</span>",
                options: ["Gold", "The nightingale's song", "His palace", "His garden"],
                correct: 1,
                explanation: "<span class='english-text'>The emperor loved the nightingale's song.</span>"
            },
            {
                question: "<span class='english-text'>Why did the emperor forget the real nightingale?</span>",
                options: ["It flew away", "He got a mechanical bird", "It stopped singing", "He was busy"],
                correct: 1,
                explanation: "<span class='english-text'>He got a mechanical bird and forgot the real one.</span>"
            },
            {
                question: "<span class='english-text'>How did the nightingale save the emperor?</span>",
                options: ["It brought medicine", "It sang and Death left", "It fought Death", "It called for help"],
                correct: 1,
                explanation: "<span class='english-text'>It sang so beautifully that Death left.</span>"
            }
        ]
    }
];

// التحقق من تحميل البيانات
console.log('✅ stories-data.js loaded with', STORIES_DATA.length, 'قصة');
