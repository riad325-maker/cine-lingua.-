// stories-data.js - 30 قصة قصيرة تعليمية (ملف واحد)
const STORIES_DATA = [
    // ==================== المستوى المبتدئ ====================
    {
        id: 101,
        title: "The Cat and the Mouse",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400",
        content: `Once upon a time, there was a hungry cat. He saw a small mouse. The cat ran after the mouse. The mouse ran into a small hole. The cat could not get in. The mouse was safe. "Oh no!" said the cat. "I am still hungry." The mouse stayed in his hole. The cat waited and waited. Finally, the cat went away. The mouse was very happy.`,
        arabic: `كان يا ما كان، كانت هناك قطة جائعة. رأت فأراً صغيراً. ركضت القطة خلف الفأر. ركض الفأر إلى جحر صغير. لم تستطع القطة الدخول. كان الفأر آمناً. "أوه لا!" قالت القطة. "ما زلت جائعة." بقي الفأر في جحره. انتظرت القطة وانتظرت. أخيراً، ذهبت القطة. كان الفأر سعيداً جداً.`,
        questions: [
            {
                question: "Why did the cat run after the mouse?",
                options: ["The cat was bored", "The cat was hungry", "The mouse was playing", "The cat was scared"],
                correct: 1,
                explanation: "The cat was hungry, so it ran after the mouse to eat it."
            },
            {
                question: "Where did the mouse go?",
                options: ["Under the bed", "Into a hole", "Behind the door", "Up the tree"],
                correct: 1,
                explanation: "The mouse ran into a hole to be safe from the cat."
            },
            {
                question: "What happened at the end?",
                options: ["The cat ate the mouse", "The mouse went away", "The cat went away", "They became friends"],
                correct: 2,
                explanation: "The cat got tired of waiting and went away, so the mouse was safe."
            }
        ]
    },
    {
        id: 102,
        title: "The Boy and His Dog",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=400",
        content: `Ahmed had a small dog. The dog's name was Max. Max was brown and white. Every morning, Ahmed took Max for a walk. Max loved to run in the park. One day, Max ran after a ball. He ran very fast. Ahmed could not find him. He looked everywhere. Finally, he saw Max near the big tree. Max was playing with a new friend. Ahmed was very happy.`,
        arabic: `أحمد كان لديه كلب صغير. اسم الكلب ماكس. كان ماكس بنياً وأبيضاً. كل صباح، كان أحمد يأخذ ماكس في نزهة. كان ماكس يحب الركض في الحديقة. في أحد الأيام، ركض ماكس خلف كرة. ركض بسرعة كبيرة. لم يستطع أحمد العثور عليه. بحث في كل مكان. أخيراً، رأى ماكس بالقرب من الشجرة الكبيرة. كان ماكس يلعب مع صديق جديد. كان أحمد سعيداً جداً.`,
        questions: [
            {
                question: "What is the dog's name?",
                options: ["Ahmed", "Max", "Brownie", "Spot"],
                correct: 1,
                explanation: "The dog's name was Max."
            },
            {
                question: "Where did Ahmed take Max every morning?",
                options: ["To school", "To the park", "To the store", "To the beach"],
                correct: 1,
                explanation: "Every morning, Ahmed took Max for a walk in the park."
            },
            {
                question: "Where did Ahmed finally find Max?",
                options: ["Near the house", "Near the big tree", "In the car", "At home"],
                correct: 1,
                explanation: "He saw Max near the big tree playing with a new friend."
            }
        ]
    },
    {
        id: 103,
        title: "The Lost Kite",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1527005982-b4b7b2b2b2b2?w=400",
        content: `Sara had a beautiful red kite. She loved to fly it in the park. The wind was strong that day. The kite flew high up in the sky. Suddenly, the string broke. The kite flew away. Sara ran after it. But the kite was too fast. It went over the trees. Sara was sad. A kind man saw Sara. He helped her get the kite. Sara was so happy. She thanked the man and went home.`,
        arabic: `سارة كان لديها طائرة ورقية حمراء جميلة. كانت تحب أن تطيرها في الحديقة. كان الرياح قوياً في ذلك اليوم. طارت الطائرة الورقية عالياً في السماء. فجأة، انقطع الخيط. طارت الطائرة الورقية بعيداً. ركضت سارة خلفها. لكن الطائرة الورقية كانت سريعة جداً. ذهبت فوق الأشجار. كانت سارة حزينة. رجل طيب رأى سارة. ساعدها في الحصول على الطائرة الورقية. كانت سارة سعيدة جداً. شكرت الرجل وذهبت إلى المنزل.`,
        questions: [
            {
                question: "What color was Sara's kite?",
                options: ["Blue", "Red", "Yellow", "Green"],
                correct: 1,
                explanation: "Sara had a beautiful red kite."
            },
            {
                question: "Why did the kite fly away?",
                options: ["The wind stopped", "The string broke", "Sara let it go", "A bird took it"],
                correct: 1,
                explanation: "Suddenly, the string broke and the kite flew away."
            },
            {
                question: "Who helped Sara get her kite?",
                options: ["Her mother", "Her friend", "A kind man", "A teacher"],
                correct: 2,
                explanation: "A kind man saw Sara and helped her get the kite."
            }
        ]
    },
    {
        id: 104,
        title: "The Little Fish",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400",
        content: `There was a little fish in the sea. His name was Finn. Finn was very small. The big fish always swam faster than him. One day, a big fish tried to eat Finn. Finn was scared. He swam away quickly. He found a small cave. He hid inside. The big fish could not get in. Finn was safe. He learned that being small can be good. He could hide in small places.`,
        arabic: `كان هناك سمكة صغيرة في البحر. اسمه فين. كان فين صغيراً جداً. كانت الأسماك الكبيرة تسبح أسرع منه دائماً. في أحد الأيام، حاولت سمكة كبيرة أكل فين. كان فين خائفاً. سبح بعيداً بسرعة. وجد كهفاً صغيراً. اختبأ في الداخل. لم تستطع السمكة الكبيرة الدخول. كان فين آمناً. تعلم أن الصغر يمكن أن يكون جيداً. يمكنه الاختباء في الأماكن الصغيرة.`,
        questions: [
            {
                question: "What was the little fish's name?",
                options: ["Nemo", "Finn", "Bubbles", "Goldie"],
                correct: 1,
                explanation: "The little fish's name was Finn."
            },
            {
                question: "What happened to Finn one day?",
                options: ["He got lost", "He found a friend", "A big fish tried to eat him", "He swam too far"],
                correct: 2,
                explanation: "A big fish tried to eat Finn."
            },
            {
                question: "Where did Finn hide?",
                options: ["Under a rock", "In a small cave", "In the seaweed", "Behind a ship"],
                correct: 1,
                explanation: "He found a small cave and hid inside."
            }
        ]
    },
    {
        id: 105,
        title: "The Lazy Rabbit",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1535241749838-299277b6305f?w=400",
        content: `Benny was a lazy rabbit. He loved to sleep all day. His friends worked hard. They collected food for winter. Benny did not help. "Winter is far away," he said. But winter came quickly. It was cold and snowy. Benny had no food. He was hungry and cold. He went to his friends. They shared their food with him. Benny learned his lesson. He promised to help next time.`,
        arabic: `بيني كان أرنباً كسولاً. كان يحب النوم طوال اليوم. كان أصدقاؤه يعملون بجد. كانوا يجمعون الطعام للشتاء. لم يساعد بيني. "الشتاء لا يزال بعيداً،" قال. لكن الشتاء جاء بسرعة. كان بارداً ومثلجاً. لم يكن لدى بيني طعام. كان جائعاً وبارداً. ذهب إلى أصدقائه. شاركوه طعامهم. تعلم بيني الدرس. وعد بالمساعدة في المرة القادمة.`,
        questions: [
            {
                question: "What did Benny love to do?",
                options: ["Work hard", "Sleep all day", "Collect food", "Play with friends"],
                correct: 1,
                explanation: "Benny was a lazy rabbit who loved to sleep all day."
            },
            {
                question: "What did Benny's friends do?",
                options: ["They played games", "They collected food", "They slept too", "They went away"],
                correct: 1,
                explanation: "His friends worked hard collecting food for winter."
            },
            {
                question: "What did Benny learn?",
                options: ["Winter is fun", "To sleep more", "To help others", "To play alone"],
                correct: 2,
                explanation: "Benny learned that he should help others and work hard."
            }
        ]
    },
    {
        id: 106,
        title: "The Bird's Nest",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?w=400",
        content: `A little bird built a nest in a tree. She laid three small eggs. She sat on them every day. She kept them warm. One morning, she heard a sound. The eggs were cracking. Baby birds came out. They were small and cute. The mother bird was happy. She found food for her babies. The baby birds grew bigger every day. Soon, they learned to fly.`,
        arabic: `بنت طائر صغير عشاً في شجرة. وضعت ثلاث بيضات صغيرة. جلست عليها كل يوم. أبقتهن دافئات. في صباح أحد الأيام، سمعت صوتاً. كانت البيضات تتكسر. خرجت الطيور الصغيرة. كانت صغيرة ولطيفة. كانت الطيور الأم سعيدة. وجدت طعاماً لأطفالها. كبرت الطيور الصغيرة كل يوم. سرعان ما تعلمت الطيران.`,
        questions: [
            {
                question: "How many eggs did the bird lay?",
                options: ["Two", "Three", "Four", "Five"],
                correct: 1,
                explanation: "The bird laid three small eggs."
            },
            {
                question: "Why did the mother bird sit on the eggs?",
                options: ["To hide them", "To keep them warm", "To play with them", "To sleep"],
                correct: 1,
                explanation: "She sat on them to keep them warm."
            },
            {
                question: "What did the baby birds learn to do?",
                options: ["Sing", "Swim", "Fly", "Dance"],
                correct: 2,
                explanation: "Soon, they learned to fly."
            }
        ]
    },
    {
        id: 107,
        title: "The Lost Keys",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1556740714-8398b3e9a8e2?w=400",
        content: `Lina was going to school. She looked for her keys. She could not find them. She looked in her bag. They were not there. She looked under the bed. Nothing. She was late. She started to cry. Her mother came. "What is wrong?" she asked. "I lost my keys," said Lina. Her mother smiled. "Look on your desk," she said. The keys were there! Lina was so happy.`,
        arabic: `لينا كانت ذاهبة إلى المدرسة. بحثت عن مفاتيحها. لم تستطع العثور عليها. بحثت في حقيبتها. لم تكن هناك. بحثت تحت السرير. لا شيء. كانت متأخرة. بدأت في البكاء. جاءت أمها. "ما الخطأ؟" سألت. "فقدت مفاتيحي،" قالت لينا. ابتسمت أمها. "انظري على مكتبك،" قالت. كانت المفاتيح هناك! كانت لينا سعيدة جداً.`,
        questions: [
            {
                question: "What was Lina looking for?",
                options: ["Her bag", "Her keys", "Her book", "Her phone"],
                correct: 1,
                explanation: "Lina was looking for her keys."
            },
            {
                question: "How did Lina feel when she couldn't find them?",
                options: ["Happy", "Excited", "Sad", "Angry"],
                correct: 2,
                explanation: "She started to cry because she was sad and late."
            },
            {
                question: "Where were the keys?",
                options: ["In her bag", "Under the bed", "On her desk", "In the kitchen"],
                correct: 2,
                explanation: "Her mother found the keys on her desk."
            }
        ]
    },
    {
        id: 108,
        title: "The Rainy Day",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=400",
        content: `It was raining outside. Omar could not play in the park. He was sad. He looked out the window. He saw the rain falling. Then he had an idea. He put on his boots and jacket. He went outside. He jumped in puddles. The water splashed everywhere. He laughed and played. Rain was fun after all! His mother called him inside for hot chocolate. It was a perfect day.`,
        arabic: `كانت تمطر في الخارج. عمر لم يستطع اللعب في الحديقة. كان حزيناً. نظر من النافذة. رأى المطر يتساقط. ثم جاءته فكرة. ارتدى حذاءه وستره. خرج إلى الخارج. قفز في البرك. تناثر الماء في كل مكان. ضحك ولعب. كان المطر ممتعاً بعد كل شيء! نادته أمه للدخول لتناول الشوكولاتة الساخنة. كان يوماً مثالياً.`,
        questions: [
            {
                question: "Why was Omar sad at first?",
                options: ["He was sick", "He couldn't play outside", "He lost his toy", "He was hungry"],
                correct: 1,
                explanation: "Omar was sad because he could not play in the park due to rain."
            },
            {
                question: "What did Omar do outside?",
                options: ["He walked slowly", "He jumped in puddles", "He stayed dry", "He went home"],
                correct: 1,
                explanation: "He jumped in puddles and played in the rain."
            },
            {
                question: "What did Omar's mother give him?",
                options: ["Cookies", "Hot chocolate", "Juice", "Cake"],
                correct: 1,
                explanation: "His mother called him inside for hot chocolate."
            }
        ]
    },
    {
        id: 109,
        title: "The New Pencil",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1585339147947-2ff786a6b61b?w=400",
        content: `Salem got a new pencil. It was yellow and sharp. He loved it very much. He used it at school. He wrote his name. He drew a house. He was careful with it. At the end of the day, he put it in his pencil case. But when he got home, it was gone! He looked everywhere. Then he saw it on his desk. He forgot to put it in his case. He was so happy to find it.`,
        arabic: `حصل سالم على قلم رصاص جديد. كان أصفر وحاداً. أحبه كثيراً. استخدمه في المدرسة. كتب اسمه. رسم منزلاً. كان حريصاً عليه. في نهاية اليوم، وضعه في مقلمته. لكن عندما وصل إلى المنزل، كان قد اختفى! بحث في كل مكان. ثم رآه على مكتبه. نسي وضعه في المقلمة. كان سعيداً جداً بالعثور عليه.`,
        questions: [
            {
                question: "What color was Salem's new pencil?",
                options: ["Blue", "Red", "Yellow", "Green"],
                correct: 2,
                explanation: "The pencil was yellow."
            },
            {
                question: "What did Salem draw?",
                options: ["A tree", "A car", "A house", "A cat"],
                correct: 2,
                explanation: "He drew a house."
            },
            {
                question: "Where did Salem finally find his pencil?",
                options: ["In his bag", "On his desk", "Under his bed", "At school"],
                correct: 1,
                explanation: "He saw it on his desk at home."
            }
        ]
    },
    {
        id: 110,
        title: "The Big Apple",
        level: "beginner",
        difficulty: "مبتدئ",
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400",
        content: `Mona's grandmother gave her a big red apple. It looked delicious. Mona wanted to eat it. But she saw a small worm on it. She was scared. She showed her grandmother. Her grandmother washed the apple. The worm was gone. She cut the apple into pieces. Mona ate the sweet apple. It was very tasty. She thanked her grandmother.`,
        arabic: `أعطت جدة منى تفاحة حمراء كبيرة. بدت لذيذة. أرادت منى أكلها. لكنها رأت دودة صغيرة عليها. كانت خائفة. أظهرتها لجدتها. غسلت جدتها التفاحة. اختفت الدودة. قطعت التفاحة إلى قطع. أكلت منى التفاحة الحلوة. كانت لذيذة جداً. شكرت جدتها.`,
        questions: [
            {
                question: "Who gave Mona the apple?",
                options: ["Her mother", "Her grandmother", "Her father", "Her friend"],
                correct: 1,
                explanation: "Mona's grandmother gave her the apple."
            },
            {
                question: "What did Mona see on the apple?",
                options: ["A leaf", "A worm", "A spot", "A seed"],
                correct: 1,
                explanation: "She saw a small worm on it."
            },
            {
                question: "What did grandmother do with the apple?",
                options: ["Threw it away", "Washed and cut it", "Gave it back", "Cooked it"],
                correct: 1,
                explanation: "She washed the apple and cut it into pieces."
            }
        ]
    },

    // ==================== المستوى المتوسط ====================
    {
        id: 201,
        title: "The Honest Woodcutter",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?w=400",
        content: `A poor woodcutter was cutting wood near a river. His axe fell into the water. He was very sad because he had no money to buy a new one. A water fairy appeared. She brought a gold axe and asked, "Is this yours?" The woodcutter said no. She brought a silver axe. He said no again. Finally, she brought his iron axe. "Yes, that's mine!" he said. The fairy was happy with his honesty. She gave him all three axes as a reward.`,
        arabic: `كان حطاب فقير يقطع الخشب بالقرب من نهر. سقط فأسه في الماء. كان حزيناً جداً لأنه لا يملك مالاً لشراء واحد جديد. ظهرت حورية الماء. أحضرت فأسه من ذهب وسألت: "هل هذا لك؟" قال الحطاب لا. أحضرت فأساً من فضة. قال لا مرة أخرى. أخيراً، أحضرت فأسه الحديدي. "نعم، هذا لي!" قال. كانت الحورية سعيدة بأمانته. أعطته الفؤوس الثلاثة كمكافأة.`,
        questions: [
            {
                question: "Why was the woodcutter sad?",
                options: ["He lost his way", "His axe fell in the river", "He had no food", "It started raining"],
                correct: 1,
                explanation: "He was sad because his axe fell into the water and he had no money to buy a new one."
            },
            {
                question: "What did the fairy bring first?",
                options: ["A silver axe", "An iron axe", "A gold axe", "A wooden axe"],
                correct: 2,
                explanation: "The fairy first brought a gold axe."
            },
            {
                question: "Why did the fairy give him all three axes?",
                options: ["He was poor", "He was honest", "He asked for them", "He was sad"],
                correct: 1,
                explanation: "The fairy was happy with his honesty and rewarded him."
            }
        ]
    },
    {
        id: 202,
        title: "The Farmer and His Sons",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400",
        content: `An old farmer had three sons who always fought. On his deathbed, he called them. He gave them a bundle of sticks. "Break this," he said. Each son tried but failed. Then he gave them single sticks. They broke them easily. "Together you are strong like the bundle," he said. "Apart you are weak like one stick." The sons understood. After he died, they worked together and became successful.`,
        arabic: `كان لمزارع عجوز ثلاثة أبناء يتشاجرون دائماً. على فراش الموت، دعاهم. أعطاهم حزمة من العصي. "اكسروا هذه،" قال. حاول كل ابن لكنه فشل. ثم أعطاهم عصي مفردة. كسروها بسهولة. "معاً أنتم أقوياء مثل الحزمة،" قال. "متفرقين أنتم ضعفاء مثل عصا واحدة." فهم الأبناء. بعد وفاته، عملوا معاً ونجحوا.`,
        questions: [
            {
                question: "What did the farmer give his sons first?",
                options: ["Single sticks", "A bundle of sticks", "A bag of gold", "A field"],
                correct: 1,
                explanation: "He gave them a bundle of sticks."
            },
            {
                question: "Could they break the bundle?",
                options: ["Yes, easily", "No, they couldn't", "Only one could", "They didn't try"],
                correct: 1,
                explanation: "Each son tried but failed to break the bundle."
            },
            {
                question: "What lesson did the farmer teach?",
                options: ["Sticks are strong", "Working together is powerful", "Fighting is good", "Be independent"],
                correct: 1,
                explanation: "He taught that together they are strong, but apart they are weak."
            }
        ]
    },
    {
        id: 203,
        title: "The Greedy Dog",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=400",
        content: `A dog found a big bone. He was very happy. He carried it in his mouth. He walked across a bridge. He looked down and saw his reflection in the water. He thought it was another dog with a bigger bone. He wanted that bone too. He opened his mouth to bark. His bone fell into the water. He lost his bone because he was greedy. He learned that greed leads to loss.`,
        arabic: `وجد كلب عظماً كبيراً. كان سعيداً جداً. حمله في فمه. مشى عبر جسر. نظر إلى الأسفل ورأى انعكاسه في الماء. ظن أنه كلب آخر بعظم أكبر. أراد ذلك العظم أيضاً. فتح فمه لينبح. سقط عظمه في الماء. خسر عظمه لأنه كان طماعاً. تعلم أن الطمع يؤدي إلى الخسارة.`,
        questions: [
            {
                question: "What did the dog find?",
                options: ["A bone", "A stick", "Some food", "A friend"],
                correct: 0,
                explanation: "The dog found a big bone."
            },
            {
                question: "What did the dog see in the water?",
                options: ["A fish", "His reflection", "Another dog", "A bigger bone"],
                correct: 1,
                explanation: "He saw his reflection and thought it was another dog."
            },
            {
                question: "Why did the dog lose his bone?",
                options: ["He dropped it", "He was greedy", "Another dog took it", "He hid it"],
                correct: 1,
                explanation: "He lost his bone because he was greedy and opened his mouth to bark."
            }
        ]
    },
    {
        id: 204,
        title: "The Wind and the Sun",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?w=400",
        content: `The Wind and the Sun argued who was stronger. They saw a traveler. The Wind said, "I can make him take off his coat." The Wind blew hard. But the traveler held his coat tighter. The Sun tried. He shone warmly. The traveler felt hot. He took off his coat. The Sun won. Kindness is stronger than force.`,
        arabic: `تجادلت الرياح والشمس من هو الأقوى. رأوا مسافراً. قالت الرياح: "أستطيع أن أجعله يخلع معطفه." هبت الرياح بقوة. لكن المسافر أمسك معطفه بإحكام. حاولت الشمس. أشرقت بحرارة. شعر المسافر بالحر. خلع معطفه. فازت الشمس. اللطف أقوى من القوة.`,
        questions: [
            {
                question: "What did the Wind and Sun argue about?",
                options: ["Who was faster", "Who was stronger", "Who was hotter", "Who was kinder"],
                correct: 1,
                explanation: "They argued about who was stronger."
            },
            {
                question: "How did the Wind try to win?",
                options: ["By shining", "By blowing hard", "By raining", "By being quiet"],
                correct: 1,
                explanation: "The Wind blew hard to make the traveler take off his coat."
            },
            {
                question: "Why did the traveler take off his coat?",
                options: ["The Wind blew it off", "The Sun shone warmly", "He was tired", "He arrived home"],
                correct: 1,
                explanation: "The Sun shone warmly and the traveler felt hot, so he took off his coat."
            }
        ]
    },
    {
        id: 205,
        title: "The Ant and the Grasshopper",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1555158169-4f9b5a6b8b8b?w=400",
        content: `In summer, an ant worked hard collecting food. A grasshopper played and sang. "Come play with me," said the grasshopper. "I must work for winter," said the ant. Winter came. The grasshopper had no food. He was hungry. He went to the ant. The ant shared his food. "Thank you," said the grasshopper. "Next time I will work hard too."`,
        arabic: `في الصيف، عملت نملة بجد تجمع الطعام. كان جندب يلعب ويغني. "تعال العب معي،" قال الجندب. "يجب أن أعمل للشتاء،" قالت النملة. جاء الشتاء. لم يكن لدى الجندب طعام. كان جائعاً. ذهب إلى النملة. شاركته النملة طعامها. "شكراً،" قال الجندب. "في المرة القادمة سأعمل بجد أيضاً."`,
        questions: [
            {
                question: "What did the ant do in summer?",
                options: ["Played", "Slept", "Collected food", "Sang"],
                correct: 2,
                explanation: "The ant worked hard collecting food."
            },
            {
                question: "What happened to the grasshopper in winter?",
                options: ["He had no food", "He found food", "He was happy", "He slept all day"],
                correct: 0,
                explanation: "The grasshopper had no food and was hungry."
            },
            {
                question: "What did the grasshopper learn?",
                options: ["To play more", "To work hard", "To sing", "To sleep"],
                correct: 1,
                explanation: "He learned to work hard for the future."
            }
        ]
    },
    {
        id: 206,
        title: "The Lion and the Mouse",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=400",
        content: `A lion was sleeping. A mouse ran over his face. The lion woke up and caught the mouse. "Please let me go," said the mouse. "Maybe I can help you one day." The lion laughed but let him go. Later, hunters caught the lion in a net. The mouse heard him roar. He chewed the rope and freed the lion. "Even a small friend can help," said the lion.`,
        arabic: `كان أسد نائماً. ركض فأر على وجهه. استيقظ الأسد وأمسك بالفأر. "من فضلك اتركني أذهب،" قال الفأر. "ربما يمكنني مساعدتك يوماً ما." ضحك الأسد لكنه تركه. فيما بعد، قبض الصيادون على الأسد في شبكة. سمعه الفأر يزأر. قضم الحبل وحرر الأسد. "حتى الصديق الصغير يمكنه المساعدة،" قال الأسد.`,
        questions: [
            {
                question: "What did the mouse do to the lion?",
                options: ["Bit him", "Ran over his face", "Woke him up", "Talked to him"],
                correct: 1,
                explanation: "The mouse ran over the lion's face."
            },
            {
                question: "Why did the lion let the mouse go?",
                options: ["He was scared", "He was kind", "He was full", "He was tired"],
                correct: 1,
                explanation: "The lion laughed at the mouse's offer but let him go."
            },
            {
                question: "How did the mouse help the lion?",
                options: ["He called for help", "He chewed the rope", "He scared the hunters", "He found food"],
                correct: 1,
                explanation: "The mouse chewed the rope and freed the lion."
            }
        ]
    },
    {
        id: 207,
        title: "The Thirsty Crow",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1590523277543-a94c2e4eb00b?w=400",
        content: `A crow was very thirsty. He saw a water jug. There was water at the bottom. But he could not reach it. He tried to push the jug. It did not move. He had an idea. He dropped small stones into the jug. The water rose higher. Finally, he could drink. He was happy. Cleverness can solve problems.`,
        arabic: `كان غراب عطشاناً جداً. رأى إبريق ماء. كان الماء في القاع. لكنه لم يستطع الوصول إليه. حاول دفع الإبريق. لم يتحرك. جاءته فكرة. أسقط حجارة صغيرة في الإبريق. ارتفع الماء. أخيراً، استطاع الشرب. كان سعيداً. الذكاء يمكن أن يحل المشاكل.`,
        questions: [
            {
                question: "Why was the crow thirsty?",
                options: ["It was hot", "He couldn't find water", "He flew too far", "He was sick"],
                correct: 0,
                explanation: "The story doesn't specify why, but he was very thirsty."
            },
            {
                question: "How did the crow reach the water?",
                options: ["He broke the jug", "He pushed it over", "He dropped stones in it", "He waited"],
                correct: 2,
                explanation: "He dropped small stones into the jug to make the water rise."
            },
            {
                question: "What lesson does this story teach?",
                options: ["Crows are smart", "Water is important", "Cleverness solves problems", "Stones are useful"],
                correct: 2,
                explanation: "The story teaches that cleverness can solve problems."
            }
        ]
    },
    {
        id: 208,
        title: "The Boy Who Cried Wolf",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1518022564380-2d3b5b68d7b9?w=400",
        content: `A boy looked after sheep. He was bored. He cried, "Wolf! Wolf!" The villagers came to help. There was no wolf. He laughed. He did it again. The villagers came again. Still no wolf. They were angry. Then a real wolf came. The boy cried for help. No one came. The wolf ate the sheep. Liars are not believed even when they tell the truth.`,
        arabic: `كان صبي يرعى الغنم. كان يشعر بالملل. صرخ: "ذئب! ذئب!" جاء القرويون للمساعدة. لم يكن هناك ذئب. ضحك. فعلها مرة أخرى. جاء القرويون مرة أخرى. لا يزال لا يوجد ذئب. كانوا غاضبين. ثم جاء ذئب حقيقي. صرخ الصبي طلباً للمساعدة. لم يأت أحد. أكل الذئب الغنم. الكذابون لا يصدقون حتى عندما يقولون الحقيقة.`,
        questions: [
            {
                question: "Why did the boy cry wolf the first time?",
                options: ["He saw a wolf", "He was bored", "He was scared", "He was playing"],
                correct: 1,
                explanation: "The boy was bored, so he cried wolf for fun."
            },
            {
                question: "What happened when the real wolf came?",
                options: ["Villagers came quickly", "No one came to help", "The boy ran away", "The wolf ran away"],
                correct: 1,
                explanation: "No one came to help because they thought he was lying again."
            },
            {
                question: "What is the moral of the story?",
                options: ["Sheep are tasty", "Wolves are dangerous", "Don't lie", "Boys are naughty"],
                correct: 2,
                explanation: "Liars are not believed even when they tell the truth."
            }
        ]
    },
    {
        id: 209,
        title: "The Tortoise and the Hare",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1598439210624-06a3d2000b9b?w=400",
        content: `A hare boasted about his speed. He challenged a tortoise to a race. The tortoise accepted. The hare ran fast. He was far ahead. He decided to rest. He fell asleep. The tortoise kept walking slowly. He passed the sleeping hare. The hare woke up. He ran fast. But it was too late. The tortoise won. Slow and steady wins the race.`,
        arabic: `تفاخر أرنب بسرعته. تحدى سلحفاة في سباق. قبلت السلحفاة. ركض الأرنب بسرعة. كان متقدماً كثيراً. قرر أن يستريح. نام. واصلت السلحفاة المشي ببطء. تخطت الأرنب النائم. استيقظ الأرنب. ركض بسرعة. لكنه كان متأخراً جداً. فازت السلحفاة. البطيء والثابت يفوز بالسباق.`,
        questions: [
            {
                question: "Why did the hare challenge the tortoise?",
                options: ["He was bored", "He boasted about his speed", "He liked racing", "He was angry"],
                correct: 1,
                explanation: "The hare boasted about his speed and challenged the tortoise."
            },
            {
                question: "What did the hare do during the race?",
                options: ["Ran faster", "Helped the tortoise", "Fell asleep", "Gave up"],
                correct: 2,
                explanation: "He was far ahead and decided to rest, then fell asleep."
            },
            {
                question: "What is the moral of the story?",
                options: ["Fast is best", "Sleeping is bad", "Slow and steady wins", "Tortoises are slow"],
                correct: 2,
                explanation: "Slow and steady wins the race."
            }
        ]
    },
    {
        id: 210,
        title: "The Fox and the Grapes",
        level: "intermediate",
        difficulty: "متوسط",
        image: "https://images.unsplash.com/photo-1577090636960-2c9faa4b0e0b?w=400",
        content: `A fox saw some grapes hanging high on a vine. He wanted to eat them. He jumped but could not reach. He jumped again. Still no. He tried many times. Finally, he gave up. "Those grapes are probably sour anyway," he said. He walked away. People sometimes pretend to dislike what they cannot have.`,
        arabic: `رأى ثعلب بعض العنب معلقاً عالياً على كرمة. أراد أكله. قفز لكنه لم يستطع الوصول. قفز مرة أخرى. لا يزال لا. حاول عدة مرات. أخيراً، استسلم. "هذا العنب على الأرجح حامض على أي حال،" قال. مشى بعيداً. أحياناً يتظاهر الناس بعدم حب ما لا يستطيعون الحصول عليه.`,
        questions: [
            {
                question: "What did the fox want?",
                options: ["Water", "Grapes", "Meat", "A friend"],
                correct: 1,
                explanation: "The fox saw some grapes and wanted to eat them."
            },
            {
                question: "Why couldn't the fox get the grapes?",
                options: ["They were green", "They were too high", "They were sour", "He wasn't hungry"],
                correct: 1,
                explanation: "The grapes were hanging high on the vine and he couldn't reach them."
            },
            {
                question: "What did the fox say at the end?",
                options: ["I'll try again", "They are probably sour", "I'm not hungry", "Help me"],
                correct: 1,
                explanation: "He said the grapes were probably sour anyway."
            }
        ]
    },

    // ==================== المستوى المتقدم ====================
    {
        id: 301,
        title: "The Fisherman and His Wife",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400",
        content: `A poor fisherman caught a magic fish. The fish could grant wishes. He let it go. His wife was angry. "Ask for a house," she said. He did. The fish granted it. But his wife wanted more. She sent him again. She wanted a castle. Then to be king. Then emperor. Then pope. Each time the fish granted it. Finally, she wanted to be like God. The fish said no. They lost everything and were back in their old hut.`,
        arabic: `صياد فقير اصطاد سمكة سحرية. يمكن للسمكة تحقيق الأمنيات. أطلق سراحها. كانت زوجته غاضبة. "اطلب منزلاً،" قالت. فعل. حققت السمكة ذلك. لكن زوجته أرادت المزيد. أرسلته مرة أخرى. أرادت قلعة. ثم أن تكون ملكة. ثم إمبراطورة. ثم بابا. في كل مرة حققت السمكة ذلك. أخيراً، أرادت أن تكون مثل الله. قالت السمكة لا. خسروا كل شيء وعادوا إلى كوخهم القديم.`,
        questions: [
            {
                question: "What did the fisherman do with the magic fish?",
                options: ["He kept it", "He sold it", "He let it go", "He cooked it"],
                correct: 2,
                explanation: "The fisherman let the magic fish go."
            },
            {
                question: "Why was the wife never satisfied?",
                options: ["She was greedy", "She didn't believe", "She wanted revenge", "She was hungry"],
                correct: 0,
                explanation: "She always wanted more and more, showing her greed."
            },
            {
                question: "What happened in the end?",
                options: ["They became rich", "They lost everything", "They ruled the world", "They were happy"],
                correct: 1,
                explanation: "They lost everything and ended up back in their old hut."
            }
        ]
    },
    {
        id: 302,
        title: "The Emperor's New Clothes",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400",
        content: `An emperor loved clothes. Two swindlers came. They said they could make magical clothes. Only wise people could see them. The emperor paid them. They pretended to weave. No one could see the clothes. But everyone pretended to see. They didn't want to seem foolish. The emperor wore the invisible clothes in a parade. A child cried, "He has nothing on!" Everyone realized the truth. But the emperor kept walking, pretending.`,
        arabic: `كان إمبراطور يحب الملابس. جاء محتالان. قالا إنهما يستطيعان صنع ملابس سحرية. فقط الحكماء يمكنهم رؤيتها. دفع لهما الإمبراطور. تظاهرا بالنسيج. لم يستطع أحد رؤية الملابس. لكن الجميع تظاهروا بالرؤية. لم يريدوا أن يبدوا أغبياء. ارتدى الإمبراطور الملابس غير المرئية في موكب. صرخ طفل: "إنه لا يرتدي شيئاً!" أدرك الجميع الحقيقة. لكن الإمبراطور استمر في المشي متظاهراً.`,
        questions: [
            {
                question: "What did the swindlers claim about their clothes?",
                options: ["They were expensive", "Only wise people could see them", "They were made of gold", "They never tore"],
                correct: 1,
                explanation: "They claimed that only wise people could see the clothes."
            },
            {
                question: "Why did everyone pretend to see the clothes?",
                options: ["They were blind", "They wanted to seem wise", "They liked the emperor", "They were paid"],
                correct: 1,
                explanation: "They didn't want to seem foolish or unwise."
            },
            {
                question: "Who told the truth?",
                options: ["A minister", "A child", "The queen", "A soldier"],
                correct: 1,
                explanation: "A child cried out the truth."
            }
        ]
    },
    {
        id: 303,
        title: "The Selfish Giant",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400",
        content: `A giant had a beautiful garden. Children loved to play there. The giant was selfish. He built a wall. Spring came everywhere but his garden. It was always winter there. The giant was sad. One day, children found a hole. They came in. Spring came with them. The giant's heart melted. He knocked down the wall. He let the children play. He became kind and happy.`,
        arabic: `كان لعملاق حديقة جميلة. أحب الأطفال اللعب هناك. كان العملاق أنانياً. بنى جداراً. جاء الربيع في كل مكان إلا حديقته. كان الشتاء دائماً هناك. كان العملاق حزيناً. في يوم من الأيام، وجد الأطفال ثغرة. دخلوا. جاء الربيع معهم. ذاب قلب العملاق. هدم الجدار. سمح للأطفال باللعب. أصبح طيباً وسعيداً.`,
        questions: [
            {
                question: "Why did the giant build a wall?",
                options: ["He was angry", "He was selfish", "He was scared", "He was tired"],
                correct: 1,
                explanation: "The giant was selfish and didn't want children in his garden."
            },
            {
                question: "What happened to the garden after the wall?",
                options: ["It became beautiful", "It was always winter", "Flowers grew", "It became summer"],
                correct: 1,
                explanation: "Spring never came to the garden; it was always winter."
            },
            {
                question: "What changed the giant?",
                options: ["The weather", "The children playing", "His friends", "The spring"],
                correct: 1,
                explanation: "Seeing the children play made his heart melt and he became kind."
            }
        ]
    },
    {
        id: 304,
        title: "The Princess and the Pea",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=400",
        content: `A prince wanted to marry a real princess. He traveled the world but couldn't find one. One stormy night, a girl came to the castle. She claimed to be a princess. The queen tested her. She put a pea under twenty mattresses. The girl couldn't sleep. She felt the pea. Only a real princess could be so sensitive. The prince married her.`,
        arabic: `أراد أمير الزواج من أميرة حقيقية. سافر حول العالم لكنه لم يجد واحدة. في ليلة عاصفة، جاءت فتاة إلى القلعة. ادعت أنها أميرة. اختبرتها الملكة. وضعت بازلاء تحت عشرين مرتبة. لم تستطع الفتاة النوم. شعرت بالبازلاء. فقط أميرة حقيقية يمكن أن تكون حساسة جداً. تزوجها الأمير.`,
        questions: [
            {
                question: "What did the prince want?",
                options: ["A castle", "A real princess", "A horse", "A crown"],
                correct: 1,
                explanation: "The prince wanted to marry a real princess."
            },
            {
                question: "How did the queen test the girl?",
                options: ["She asked questions", "She gave her a test", "She put a pea under mattresses", "She watched her eat"],
                correct: 2,
                explanation: "The queen put a pea under twenty mattresses to test her sensitivity."
            },
            {
                question: "Why couldn't the girl sleep?",
                options: ["She was scared", "She felt the pea", "The bed was hard", "It was noisy"],
                correct: 1,
                explanation: "She felt the pea through all the mattresses, so she couldn't sleep."
            }
        ]
    },
    {
        id: 305,
        title: "The Ugly Duckling",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1559253664-6f9b8e7a9b8b?w=400",
        content: `A mother duck had many ducklings. One was ugly and different. Everyone made fun of him. He ran away. He saw beautiful swans. He wished he was like them. Winter passed. Spring came. He looked at his reflection. He had become a beautiful swan! He was not ugly at all. He was always meant to be a swan.`,
        arabic: `كان لدى بطّة أم العديد من فراخ البط. كان أحدهم قبيحاً ومختلفاً. سخروا منه الجميع. هرب. رأى بجعات جميلات. تمنى أن يكون مثلهن. مر الشتاء. جاء الربيع. نظر في انعكاسه. أصبح بجعة جميلة! لم يكن قبيحاً على الإطلاق. كان مقدراً له دائماً أن يكون بجعة.`,
        questions: [
            {
                question: "Why did the duckling run away?",
                options: ["He was lost", "He was made fun of", "He was hungry", "He was scared"],
                correct: 1,
                explanation: "He ran away because everyone made fun of him."
            },
            {
                question: "What did the duckling become?",
                options: ["A duck", "A goose", "A swan", "An eagle"],
                correct: 2,
                explanation: "He became a beautiful swan."
            },
            {
                question: "What is the moral of the story?",
                options: ["Looks matter", "Beauty is in the eye of the beholder", "Everyone is beautiful in their own way", "Ducks are ugly"],
                correct: 2,
                explanation: "The story teaches that everyone has their own beauty and time to shine."
            }
        ]
    },
    {
        id: 306,
        title: "The Little Mermaid",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=400",
        content: `A little mermaid fell in love with a prince. She made a deal with a sea witch. She got legs but lost her voice. Every step hurt. She couldn't tell the prince who she was. He married another. Her sisters gave her a knife. If she killed him, she could return to the sea. She couldn't. She jumped into the sea and became foam.`,
        arabic: `وقعت حورية البحر الصغيرة في حب أمير. عقدت صفقة مع ساحرة البحر. حصلت على ساقين لكنها فقدت صوتها. كل خطوة كانت تؤلمها. لم تستطع إخبار الأمير من تكون. تزوج بأخرى. أعطتها أخواتها سكيناً. إذا قتلته، يمكنها العودة إلى البحر. لم تستطع. قفزت في البحر وأصبحت زبداً.`,
        questions: [
            {
                question: "What did the mermaid trade for legs?",
                options: ["Her fins", "Her voice", "Her hair", "Her tail"],
                correct: 1,
                explanation: "She traded her voice to the sea witch for legs."
            },
            {
                question: "Why couldn't the mermaid tell the prince who she was?",
                options: ["She forgot", "She was scared", "She lost her voice", "He was deaf"],
                correct: 2,
                explanation: "She lost her voice and couldn't speak."
            },
            {
                question: "What happened at the end?",
                options: ["She married the prince", "She returned to the sea", "She became foam", "She died"],
                correct: 2,
                explanation: "She couldn't kill the prince and became foam in the sea."
            }
        ]
    },
    {
        id: 307,
        title: "The Snow Queen",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400",
        content: `A evil troll made a mirror. It showed only ugly things. It broke into pieces. A piece hit Kay's eye. He became cold and cruel. The Snow Queen took him. His friend Gerda searched for him everywhere. She traveled far. She faced many dangers. Finally, she reached the Snow Queen's palace. Her tears melted the ice in Kay's heart. They returned home together.`,
        arabic: `صنع قزم شرير مرآة. أظهرت فقط الأشياء القبيحة. تحطمت إلى قطع. أصابت قطعة عين كاي. أصبح بارداً وقاسياً. أخذته ملكة الثلج. بحثت عنه صديقته غيردا في كل مكان. سافرت بعيداً. واجهت العديد من المخاطر. أخيراً، وصلت إلى قصر ملكة الثلج. ذابت دموعها الجليد في قلب كاي. عادوا إلى المنزل معاً.`,
        questions: [
            {
                question: "What happened to Kay?",
                options: ["He got lost", "A mirror piece hit his eye", "He fell in love", "He ran away"],
                correct: 1,
                explanation: "A piece of the evil mirror hit Kay's eye, making him cold and cruel."
            },
            {
                question: "Who took Kay?",
                options: ["The Snow Queen", "The troll", "A witch", "His grandmother"],
                correct: 0,
                explanation: "The Snow Queen took Kay to her palace."
            },
            {
                question: "How did Gerda save Kay?",
                options: ["She fought the queen", "Her tears melted the ice", "She used magic", "She begged"],
                correct: 1,
                explanation: "Gerda's tears melted the ice in Kay's heart."
            }
        ]
    },
    {
        id: 308,
        title: "The Wild Swans",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1559482118-5b1e0b5b5b5b?w=400",
        content: `A king had eleven sons and one daughter. Their evil stepmother turned the brothers into swans. They flew away. The sister, Elisa, searched for them. A fairy told her to knit nettle shirts for them. She couldn't speak while knitting. She was accused of witchcraft. As she was to be burned, the swans came. She threw the shirts on them. They became human again.`,
        arabic: `كان لملك أحد عشر ابناً وابنة واحدة. حولتهم زوجة الأب الشريرة إلى بجعات. طاروا بعيداً. بحثت عنهم الأخت إليزا. أخبرتها جنية أن تحيك لهم قمصاناً من نبات القراص. لم تستطع التحدث أثناء الحياكة. اتهمت بالسحر. بينما كانت ستُحرق، جاء البجع. ألقت القمصان عليهم. عادوا بشراً مرة أخرى.`,
        questions: [
            {
                question: "What did the stepmother do to the brothers?",
                options: ["She killed them", "She turned them into swans", "She sent them away", "She cursed them"],
                correct: 1,
                explanation: "The evil stepmother turned the brothers into wild swans."
            },
            {
                question: "What did Elisa have to do to save them?",
                options: ["Find them", "Knit nettle shirts", "Fight the queen", "Say a spell"],
                correct: 1,
                explanation: "She had to knit shirts from nettles for her brothers."
            },
            {
                question: "Why couldn't Elisa speak?",
                options: ["She was scared", "The fairy forbade it", "She lost her voice", "She was shy"],
                correct: 1,
                explanation: "The fairy told her she couldn't speak while knitting the shirts."
            }
        ]
    },
    {
        id: 309,
        title: "The Steadfast Tin Soldier",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1601758123990-7b9a9b1b4b4b?w=400",
        content: `A tin soldier had one leg. He loved a paper dancer. A goblin was jealous. The soldier fell from the window. Two boys found him. They put him in a paper boat. It sailed into a drain. A rat chased him. A fish ate him. The fish was caught and sold. A cook cut it open. There was the soldier! He was back home. The boy threw him in the fire. The wind blew the dancer in too. They melted together.`,
        arabic: `كان لجندي من الصفيح ساق واحدة. أحب راقصة ورقية. كان العفريت غيوراً. سقط الجندي من النافذة. وجده ولدان. وضعاه في قارب ورقي. أبحر في مصرف. طارده فأر. أكلته سمكة. صيدت السمكة وبيعت. قطعتها طباخة. كان الجندي هناك! عاد إلى المنزل. ألقاه الصبي في النار. هبت الرياح بالراقصة أيضاً. ذابا معاً.`,
        questions: [
            {
                question: "What was special about the tin soldier?",
                options: ["He had one leg", "He was made of gold", "He could move", "He was tiny"],
                correct: 0,
                explanation: "The tin soldier had only one leg."
            },
            {
                question: "Who did the soldier love?",
                options: ["A princess", "A paper dancer", "A ballerina", "A fairy"],
                correct: 1,
                explanation: "He loved a paper dancer."
            },
            {
                question: "What happened at the end?",
                options: ["He married the dancer", "He melted in the fire", "He returned to the box", "He became real"],
                correct: 1,
                explanation: "He was thrown into the fire and melted, and the dancer joined him."
            }
        ]
    },
    {
        id: 310,
        title: "The Nightingale",
        level: "advanced",
        difficulty: "متقدم",
        image: "https://images.unsplash.com/photo-1590523277543-a94c2e4eb00b?w=400",
        content: `An emperor loved a nightingale's song. He kept it in a cage. A mechanical bird arrived. It was beautiful but sang only one song. The real nightingale flew away. The emperor forgot it. The mechanical bird broke. The emperor became sick. Death came for him. The nightingale returned. Its song chased death away. The emperor recovered. The nightingale promised to visit and sing.`,
        arabic: `أحب إمبراطور غناء العندليب. وضعه في قفص. وصل طائر ميكانيكي. كان جميلاً لكنه غنى أغنية واحدة فقط. طار العندليب الحقيقي بعيداً. نسيه الإمبراطور. انكسر الطائر الميكانيكي. مرض الإمبراطور. جاء الموت له. عاد العندليب. طارد غناؤه الموت بعيداً. تعافى الإمبراطور. وعد العندليب بزيارته والغناء.`,
        questions: [
            {
                question: "Why did the emperor love the nightingale?",
                options: ["It was beautiful", "Its song", "It was rare", "It could talk"],
                correct: 1,
                explanation: "The emperor loved the nightingale's beautiful song."
            },
            {
                question: "What replaced the real nightingale?",
                options: ["A parrot", "A mechanical bird", "Another nightingale", "A singer"],
                correct: 1,
                explanation: "A mechanical bird arrived and replaced the real nightingale."
            },
            {
                question: "How did the nightingale save the emperor?",
                options: ["It fought death", "Its song chased death away", "It gave him medicine", "It called for help"],
                correct: 1,
                explanation: "The nightingale's song chased death away and saved the emperor."
            }
        ]
    }
];

// دوال المساعدة للفلترة
function getStoriesByLevel(level) {
    if (level === 'all') return STORIES_DATA;
    return STORIES_DATA.filter(story => story.level === level);
}

function getStoryById(id) {
    return STORIES_DATA.find(story => story.id === id);
}

function getSavedStories(savedIds) {
    return STORIES_DATA.filter(story => savedIds.includes(story.id));
}

// التحقق من التحميل
console.log('✅ stories-data.js loaded with', STORIES_DATA.length, 'قصص');
