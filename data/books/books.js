/* قصة سامي — مكتبة الكتب الطويلة (قصص متعددة الصفحات بمستوى A2 تقريباً)
   كل كتاب: id, level, icon, t_en, t_ar, desc_ar, pages:[نص كل صفحة بالإنكليزية],
   vocab:[[كلمة, معنى بالعربية], ...] لاختبار المعاني، synonyms:[[كلمة1, كلمة2, معنى بالعربية], ...] لاختبار المرادفات،
   checkpoints:[{afterPage: رقم الصفحة (١-فهرسة) التي بعدها يظهر اختبار المرحلة, comp:[{q,o,a}, ...]}, ...]
   اختبار كل مرحلة يمزج أسئلة الفهم اليدوية مع سؤال معاني وسؤال مرادفات يُولَّدان تلقائياً من vocab/synonyms. */
const BOOKS_LONG=[
{
  id:'lost-notebook', level:'A2', icon:'📗',
  t_en:'The Lost Notebook', t_ar:'الدفتر المفقود',
  desc_ar:'يفقد سامي دفتره المهم الذي يحوي رسالة من جدّه، ويبحث عنه بمساعدة صديقته لينا — قصة عن الصدق والصبر والصداقة.',
  pages:[
"Sami was a student at Al-Noor School in Basra. He was fourteen years old, and he loved English very much. Every day after school, he wrote his homework in a green notebook. This notebook was very special to him. Inside the front cover, there was a letter from his grandfather. His grandfather wrote it before he passed away last year. The letter said, 'Study hard, my son, and always be honest.' Sami read this letter almost every night. He kept the notebook in his school bag all the time, and he never let anyone else touch it.",
"One Thursday afternoon, Sami came home from school. He was very tired, so he put his bag on his bed and went to have lunch with his family. After lunch, he wanted to finish his English homework. He opened his bag and looked inside. His pens were there. His books were there. But the green notebook was not there! Sami's heart began to beat fast. He checked every pocket of his bag, but he could not find it. 'Where is my notebook?' he thought. 'I had it this morning at school. Now it is gone.'",
"Sami ran to his sister's room. Her name was Noor, and she was sixteen years old. 'Noor, have you seen my green notebook?' he asked. Noor shook her head. 'No, I haven't seen it. Did you leave it at school?' Sami tried to remember his day. He remembered writing in the notebook during his English class. Then he remembered eating lunch in the school yard with his friend Lina. After that, he could not remember anything clearly. 'Maybe I left it in the classroom,' Sami said. 'Or maybe I dropped it in the yard.' He decided he had to go back to school and look for it.",
"The next morning, Sami arrived at school very early, before most of the other students. He went straight to his classroom. The room was empty and quiet. He looked under his desk, behind the cupboard, and inside his old bag. He found an old pencil and a coin, but no notebook. Then he saw Mr. Yousif, the school custodian, cleaning the hallway. 'Excuse me,' Sami said. 'Did you find a green notebook yesterday?' Mr. Yousif thought for a moment. 'I found some papers near the gate,' he said, 'but I am not sure if there was a notebook. Ask your friends. Maybe someone picked it up.'",
"During the break, Sami found his friend Lina near the library. Lina was one of the best students in the class, and she always helped her friends. 'Lina, I lost my green notebook,' Sami said sadly. 'It has my homework and a special letter from my grandfather inside it.' Lina's eyes opened wide. 'That sounds very important! Don't worry, I will help you look for it,' she said. 'Let's think carefully. Where were you yesterday after English class?' Sami tried to remember again. 'I was in the classroom, then the school yard, then near the gate before I went home,' he said.",
"Sami and Lina went back to the classroom first. They searched under every desk and behind every chair, but they found nothing. Then Lina noticed something interesting on the floor near Sami's desk: a small torn page with English words on it. 'Look, Sami! Is this from your notebook?' Lina asked. Sami looked at the page carefully. 'Yes! This is my handwriting!' he said excitedly. 'But how did this page get torn?' They looked around more, but they could not find the rest of the notebook. 'Someone must have picked it up,' Lina said. 'Let's check the school yard next.'",
"Sami and Lina walked to the school yard, where students often sat under the big tree to eat lunch. Sami showed Lina the exact spot where he sat the day before. They searched around the tree and near the benches, but the yard was clean. A group of younger students were playing football nearby. 'Excuse me,' Lina called out. 'Did any of you find a green notebook yesterday?' The children looked at each other and shook their heads. 'No, we didn't see anything like that,' one boy said. Sami felt worried. 'Maybe someone already took it home,' he said quietly.",
"On their way out of school, Sami and Lina passed by the small shop near the gate, where students bought snacks and pens. The shop owner, Abu Karim, knew almost every student in the school. 'Abu Karim, did you see a green notebook near your shop yesterday afternoon?' Sami asked politely. Abu Karim thought carefully. 'I don't remember a notebook,' he said, 'but I saw your classmate Karim standing here for a long time yesterday. He looked like he was searching for something on the ground.' Sami and Lina looked at each other. 'Karim? That's strange,' Lina whispered.",
"The next day at school, Sami noticed that Karim was acting differently. Karim usually talked a lot and laughed with his friends, but today he was very quiet. He did not look at Sami directly. During the break, Sami decided to ask him a question. 'Karim, did you see my green notebook near the gate two days ago?' Sami asked. Karim's face turned red. 'No... I didn't see anything,' he said quickly, and then he walked away fast. Lina looked at Sami. 'Did you see that? He looked very nervous,' she said. 'I think Karim knows something about your notebook.'",
"Sami felt confused and a little angry. He wanted to ask Karim again, but he did not want to accuse him without proof. That afternoon, Sami saw Karim sitting alone near the school garden. He walked over slowly and sat next to him. 'Karim, I'm not angry,' Sami said calmly. 'I just really need my notebook back. It has a letter from my grandfather inside it, and he passed away last year.' Karim looked down at the ground. His eyes became wet. 'I... I need to tell you something,' Karim said quietly, 'but please don't be angry with me.'",
"That evening, Sami went home feeling sad and confused. He still did not have his notebook, and now he was worried about what Karim wanted to tell him. At dinner, his mother noticed that he was very quiet. 'What's wrong, Sami?' she asked gently. Sami told her the whole story: losing the notebook, searching with Lina, and Karim's strange behavior. His mother listened carefully. 'Sometimes,' she said, 'people make small mistakes, and then they feel too scared to fix them. Be patient with Karim. If he wants to tell you something, give him time and show him kindness, not anger.'",
"Sami thought about his mother's words all night. The next morning, he saw Karim standing near the classroom door, waiting for him. 'Sami,' Karim said nervously, 'two days ago, I found a green notebook near the gate. I picked it up because I was curious, and I read a little bit. Then I felt scared that you would think I stole it, so I hid it in my bag. I'm really sorry.' Sami felt a mix of relief and surprise. 'Do you still have it?' he asked. Karim nodded and opened his bag. There, inside, was Sami's green notebook, a little dusty but safe.",
"Sami took the notebook in his hands and opened it carefully. His homework was still there, and so was the torn page that Lina had found. Most importantly, his grandfather's letter was still safe inside the front cover. 'Thank you, Karim,' Sami said with a warm smile. 'I understand why you were scared. I'm just happy to have it back.' Karim looked relieved. 'I'm sorry I didn't give it back sooner,' he said. 'I was afraid you and the other students would think badly of me.' Lina, who was standing nearby, smiled too. 'Everyone makes mistakes,' she said. 'What matters is telling the truth in the end.'",
"Word about the notebook spread around the school. Mr. Yousif, the custodian, heard the story and smiled. 'I told you to ask your friends,' he said to Sami. Even the teacher, Miss Rana, heard about it during class. 'This is an important lesson for all of you,' she told the students. 'If you find something that is not yours, the best thing to do is return it immediately and tell the truth. Waiting only makes things harder.' Karim looked embarrassed but nodded seriously. From that day, Karim became more careful and honest, and he and Sami slowly became good friends.",
"That night, Sami sat on his bed and read his grandfather's letter one more time: 'Study hard, my son, and always be honest.' Now the words felt even more meaningful to him. He had learned that losing something important could be stressful, but with patience, good friends, and honesty, problems can always be solved. The next day, Sami thanked Lina for her help and even invited Karim to study English together after school. From that day on, the three friends often studied together, and Sami never left his green notebook alone again. He kept his grandfather's advice close to his heart forever."
  ],
  vocab:[
    ["notebook","دفتر"],["special","خاص/مميّز"],["grandfather","جدّ"],["honest","صادق"],
    ["tired","متعب"],["remember","يتذكّر"],["classroom","غرفة الصف"],["yard","ساحة"],
    ["custodian","عامل النظافة/الحارس"],["gate","بوابة"],["worried","قلِق"],["nervous","متوتّر"],
    ["accuse","يتّهم"],["proof","دليل"],["calmly","بهدوء"],["mistake","خطأ"],
    ["scared","خائف"],["patient","صبور"],["kindness","لطف"],["relief","ارتياح"],
    ["curious","فضولي"],["embarrassed","محرج"],["truth","الحقيقة"],["lesson","درس"],
    ["search","يبحث"],["torn","ممزّق"],["dusty","مغبّر"],["passed away","توفّي"]
  ],
  synonyms:[
    ["scared","afraid","خائف"],["sad","unhappy","حزين"],["quiet","silent","هادئ"],
    ["search","look for","يبحث عن"],["mistake","error","خطأ"],["important","special","مهم/خاص"],
    ["happy","glad","سعيد"],["quickly","fast","بسرعة"],["kind","nice","لطيف"],["tired","exhausted","متعب"]
  ],
  checkpoints:[
    {afterPage:3, comp:[
      {q:"What was inside the front cover of Sami's notebook?",o:["A letter from his grandfather","A photo of his family","Money","A map"],a:0},
      {q:"Where did Sami first notice that his notebook was missing?",o:["At school","At home, after lunch","At the shop","At his friend's house"],a:1}
    ]},
    {afterPage:6, comp:[
      {q:"What did Mr. Yousif, the custodian, find near the gate?",o:["A green notebook","Some papers","A pencil case","Nothing"],a:1},
      {q:"What did Lina find on the classroom floor?",o:["Sami's pen","A torn page with English words","A coin","Sami's bag"],a:1}
    ]},
    {afterPage:9, comp:[
      {q:"According to Abu Karim, who was searching near the shop the day before?",o:["Lina","Karim","Mr. Yousif","Noor"],a:1},
      {q:"How did Karim behave when Sami asked him about the notebook?",o:["He laughed and joked","He looked nervous and walked away","He gave it back immediately","He asked Lina for help"],a:1}
    ]},
    {afterPage:12, comp:[
      {q:"What advice did Sami's mother give him?",o:["To be angry with Karim","To tell the teacher immediately","To be patient and show kindness","To stop looking for the notebook"],a:2},
      {q:"Why did Karim hide the notebook instead of returning it right away?",o:["He wanted to keep it","He was scared Sami would think he stole it","He didn't know whose it was","He lost it again"],a:1}
    ]},
    {afterPage:15, comp:[
      {q:"What lesson did Miss Rana teach the class?",o:["Never trust your classmates","If you find something, return it and tell the truth immediately","Notebooks are not important","Grandparents' letters are not important"],a:1},
      {q:"What did Sami do after getting his notebook back?",o:["He stopped talking to Karim","He invited Karim to study English together","He told the principal to punish Karim","He gave the notebook to Lina"],a:1}
    ]}
  ]
},
{
  id:'market-day', level:'A1', icon:'🛒',
  t_en:'A Day at the Market', t_ar:'يوم في السوق',
  desc_ar:'تذهب رنا مع والدتها إلى السوق الأسبوعي، وتتعلّم أن كلمة لطيفة قد تكون أهم من الثمن.',
  pages:[
"Rana was nine years old. Every Friday morning, she went to the market with her mother. The market was big and noisy. There were many stalls with vegetables, fruit, bread, and spices. Rana loved the smell of fresh bread. Her mother carried a big basket. 'Today we need tomatoes, onions, and apples,' her mother said. Rana held her mother's hand tightly because the market was very crowded.",
"First, they stopped at a vegetable stall. An old man named Abu Sattar sold tomatoes, onions, and cucumbers. 'Good morning, Abu Sattar!' Rana's mother said with a smile. 'Good morning! What do you need today?' he asked. Rana's mother chose five red tomatoes and three big onions. Abu Sattar put them in a bag. 'How much is this?' she asked. 'Three thousand dinars,' he said. Rana's mother paid him, and he thanked her kindly.",
"Next, they walked to the fruit stall. There were oranges, apples, and bananas. Rana wanted to choose the apples herself. She picked five big red apples and put them in a bag. The seller, a young woman named Zainab, smiled at her. 'You have a good eye for fruit!' Zainab said. Rana felt very proud. Her mother paid for the apples, and they said goodbye to Zainab.",
"Suddenly, Rana saw an old man sitting near a small stall. He was selling eggs, but he looked very tired and sad. Nobody was buying from him. Rana pulled her mother's hand. 'Mama, look at that man. He looks sad,' she said. Her mother looked at him kindly. 'Let's buy some eggs from him,' she said. They walked over together.",
"'Hello, sir. How much are your eggs?' Rana's mother asked. The old man looked up, surprised. 'One thousand dinars for ten eggs,' he said quietly. 'We will take two boxes, please,' she said. The man's face became happy. 'Thank you very much! You are my first customer today,' he said. Rana smiled at him. 'I hope you sell everything today,' she said kindly.",
"On the way home, Rana asked her mother, 'Why did we buy eggs from that sad man?' Her mother said, 'Sometimes people need a little kindness, not just money. A smile and a purchase can make someone's whole day better.' Rana thought about this. That night, she told her father about the market and the old man. 'You did a good thing today,' her father said proudly. Rana felt happy, and she decided to always be kind at the market."
  ],
  vocab:[
    ["market","سوق"],["stall","كشك/بسطة"],["vegetables","خضار"],["fruit","فاكهة"],
    ["basket","سلّة"],["crowded","مزدحم"],["tomato","طماطة"],["onion","بصلة"],
    ["cucumber","خيار"],["seller","بائع"],["customer","زبون"],["proud","فخور"],
    ["kindness","لطف"],["purchase","عملية شراء"],["tired","متعب"],["sad","حزين"],
    ["smile","ابتسامة"],["surprised","متفاجئ"]
  ],
  synonyms:[
    ["buy","purchase","يشتري"],["sad","unhappy","حزين"],["big","large","كبير"],
    ["happy","glad","سعيد"],["kind","nice","لطيف"],["old","elderly","كبير في السن"],
    ["tired","exhausted","متعب"]
  ],
  checkpoints:[
    {afterPage:2, comp:[
      {q:"What did Rana's mother buy from Abu Sattar?",o:["Tomatoes and onions","Apples and bananas","Eggs and bread","Rice and sugar"],a:0},
      {q:"How much did Rana's mother pay Abu Sattar?",o:["One thousand dinars","Two thousand dinars","Three thousand dinars","Five thousand dinars"],a:2}
    ]},
    {afterPage:4, comp:[
      {q:"Who sold Rana the apples?",o:["Abu Sattar","Zainab","Rana's mother","An old man"],a:1},
      {q:"Why did Rana pull her mother's hand?",o:["She was hungry","She saw a sad old man","She wanted to go home","She lost her basket"],a:1}
    ]},
    {afterPage:6, comp:[
      {q:"What lesson did Rana learn at the market?",o:["Money is more important than kindness","A smile and a purchase can make someone's day better","Old men should not sell eggs","The market is always crowded"],a:1},
      {q:"What did Rana's father say to her?",o:["\"You did a good thing today.\"","\"Never talk to strangers.\"","\"The market is too far.\"","\"Buy more eggs next time.\""],a:0}
    ]}
  ]
},
{
  id:'new-neighbor', level:'A1', icon:'🏘️',
  t_en:'The New Neighbor', t_ar:'الجار الجديد',
  desc_ar:'تنتقل عائلة جديدة إلى حيّ عمر، ويتردد قبل أن يكتشف أن الجار الجديد يحب الرسم مثله تماماً.',
  pages:[
"Omar lived in a small house on Al-Zahra Street. He was ten years old and had many friends on his street. One Saturday morning, Omar saw a big truck outside the empty house next door. Men were carrying boxes, chairs, and a red bicycle into the house. 'Mama, someone is moving into the empty house!' Omar shouted. His mother smiled. 'Yes, a new family is coming today. Maybe you will have a new friend.'",
"Omar watched from his window all afternoon. He saw a boy about his age carrying a small box. The boy looked shy and did not smile. Omar wanted to say hello, but he felt nervous too. 'What if he doesn't like me?' Omar thought. He decided to wait until the next day. That evening, Omar's mother made extra bread. 'Let's take this to the new family tomorrow,' she said.",
"The next morning, Omar and his mother walked to the new house with warm bread. A woman opened the door. 'Hello, welcome to the street! This is some fresh bread for your family,' Omar's mother said kindly. The woman smiled widely. 'Thank you so much! Please, come in.' Omar saw the boy from yesterday sitting on the sofa. 'This is my son, Karrar,' the woman said. Karrar looked at Omar quietly.",
"'Hi, I'm Omar. I live next door,' Omar said. Karrar looked down at his shoes. 'Hi,' he said softly. Omar noticed a notebook full of drawings on the table. 'Wow, did you draw these?' Omar asked, excited. Karrar's face changed. 'Yes... I love drawing animals,' he said, a little more confident now. 'That's amazing! I love drawing too, but I'm not very good,' Omar said, laughing. Karrar smiled for the first time.",
"Karrar showed Omar his drawings: a lion, a horse, and a small bird. 'Can you teach me how to draw a horse?' Omar asked. Karrar's eyes lit up. 'Sure! It's not hard. First, you draw a big oval for the body,' Karrar explained, showing Omar with a pencil. They sat together for an hour, drawing and laughing. Omar forgot that he had felt nervous before. Karrar was friendly once you got to know him.",
"After that day, Omar and Karrar became best friends. They walked to school together every morning and drew pictures together after class. Karrar was not shy anymore when he was with Omar. One evening, Omar's mother asked him, 'Are you happy that a new family moved next door?' Omar smiled. 'Yes! I almost didn't say hello because I was nervous. But now Karrar is my best friend. I'm glad we brought them bread.'"
  ],
  vocab:[
    ["neighbor","جار"],["empty","فارغ"],["truck","شاحنة"],["shy","خجول"],
    ["nervous","متوتّر"],["welcome","ترحيب/أهلاً"],["fresh","طازج"],["notebook","دفتر"],
    ["drawing","رسمة"],["confident","واثق"],["amazing","رائع"],["lion","أسد"],
    ["oval","بيضاوي"],["pencil","قلم رصاص"],["friendly","ودود"],["glad","سعيد"]
  ],
  synonyms:[
    ["shy","nervous","خجول"],["amazing","wonderful","رائع"],["glad","happy","سعيد"],
    ["friendly","kind","ودود"],["quiet","silent","هادئ"],["draw","sketch","يرسم"],["begin","start","يبدأ"]
  ],
  checkpoints:[
    {afterPage:2, comp:[
      {q:"What did the new family bring with them?",o:["Boxes, chairs, and a bicycle","A car and a dog","Only furniture","Nothing"],a:0},
      {q:"How did Omar feel about saying hello to the new boy?",o:["Excited","Nervous","Angry","Bored"],a:1}
    ]},
    {afterPage:4, comp:[
      {q:"What did Omar and his mother bring to the new family?",o:["Fresh bread","A gift box","Flowers","Money"],a:0},
      {q:"What is the new boy's name?",o:["Karim","Karrar","Yousif","Ali"],a:1}
    ]},
    {afterPage:6, comp:[
      {q:"What did Karrar love to draw?",o:["Cars","Animals","Houses","Flowers"],a:1},
      {q:"What did Omar and Karrar become?",o:["Classmates only","Best friends","Cousins","Rivals"],a:1}
    ]}
  ]
},
{
  id:'football-match', level:'A2', icon:'⚽',
  t_en:'The School Football Match', t_ar:'مباراة كرة القدم المدرسية',
  desc_ar:'إصابة قائد الفريق قبل النهائي المدرسي المهم تجبر الفريق على اكتشاف قيمة العمل الجماعي والقيادة الحقيقية.',
  pages:[
"Al-Noor School was preparing for the biggest football match of the year — the final against Al-Amal School. Yasir was the captain of the team and their best striker. He had scored the winning goal in every match this season. The whole school was excited. Posters on the walls said, 'Support our team — Friday, 4 PM!' Yasir practiced every day after school, running and shooting the ball into the goal again and again.",
"Two days before the final match, disaster struck. During practice, Yasir jumped to head the ball and landed awkwardly. He felt a sharp pain in his ankle. 'Ahh!' he shouted, falling to the ground. The coach, Mr. Adnan, ran over immediately. 'Don't move, Yasir. Let me look,' he said. After checking Yasir's ankle, the coach looked worried. 'I think it's a bad sprain. You cannot play in the final match.'",
"The news spread quickly through the school. Without their captain and best scorer, many students believed the team would lose. Yasir sat at home with his foot up, feeling terrible. 'It's my fault. Now the team will lose because of me,' he said to his older brother. His brother shook his head. 'It's not your fault, but you can still help your team. A good captain supports his teammates even when he cannot play.'",
"The next day, Yasir went to school on crutches. His teammates gathered around him, looking nervous. 'Who will score our goals now?' asked Faisal, a quiet boy who usually sat on the bench. Yasir looked at Faisal carefully. He remembered that Faisal was actually very fast and had good footwork, but he never had the confidence to try hard in matches. 'Faisal, I believe you can do this,' Yasir said. 'You just need to believe in yourself too.'",
"That afternoon, Yasir sat with Mr. Adnan and helped plan the team's strategy, even though he could not play. 'Faisal should play as the striker,' Yasir suggested. 'He's fast, and he can surprise the other team.' Mr. Adnan agreed. During practice, Yasir stood on the side, on his crutches, shouting instructions and encouragement. 'Good pass, Faisal! Run faster next time!' Slowly, Faisal's confidence grew, and his passes and shots became stronger.",
"On the day of the final match, the whole school gathered to watch. Yasir sat on the bench beside Mr. Adnan, wearing the team jersey even though he could not play. The match was very close. In the second half, Faisal received a perfect pass from his teammate. He ran fast, dodged two defenders, and shot the ball hard into the goal. GOAL! The crowd went wild, and Faisal looked at Yasir on the bench with a huge smile.",
"Al-Noor School won the match two goals to one. After the game, the team lifted the trophy together, and they carried Yasir on their shoulders even though his foot was injured. 'You are still our captain,' Faisal said. 'You helped us win, even without playing.' Yasir felt very proud. He learned that being a good leader does not always mean scoring goals yourself — sometimes it means helping others believe in their own strength. The team celebrated together long into the evening."
  ],
  vocab:[
    ["captain","قائد"],["striker","مهاجم"],["ankle","كاحل"],["sprain","التواء"],
    ["coach","مدرّب"],["crutches","عكّازات"],["confidence","ثقة بالنفس"],["strategy","خطّة"],
    ["defender","مدافع"],["encouragement","تشجيع"],["teammate","زميل الفريق"],["trophy","كأس"],
    ["injured","مصاب"],["believe","يصدّق/يثق"],["leader","قائد"],["strength","قوّة"],
    ["celebrate","يحتفل"],["instructions","تعليمات"],["pass","تمريرة"],["goal","هدف"]
  ],
  synonyms:[
    ["fast","quick","سريع"],["worried","nervous","قلِق"],["proud","pleased","فخور"],
    ["believe","trust","يثق"],["strong","powerful","قوي"],["help","support","يساعد"],
    ["win","succeed","يفوز"],["shout","yell","يصرخ"]
  ],
  checkpoints:[
    {afterPage:3, comp:[
      {q:"What happened to Yasir during practice?",o:["He scored a goal","He hurt his ankle","He missed practice","He argued with the coach"],a:1},
      {q:"How did Yasir feel about the injury?",o:["He didn't care","He blamed himself","He was happy","He blamed Faisal"],a:1}
    ]},
    {afterPage:5, comp:[
      {q:"Who did Yasir suggest should play as striker?",o:["Himself","Faisal","Mr. Adnan","His brother"],a:1},
      {q:"What did Yasir do during practice even on crutches?",o:["Nothing, he went home","He gave instructions and encouragement","He argued with Faisal","He played anyway"],a:1}
    ]},
    {afterPage:7, comp:[
      {q:"What was the final score of the match?",o:["1-1","2-1 for Al-Noor","3-0 for Al-Amal","2-2"],a:1},
      {q:"What lesson did Yasir learn?",o:["Only scoring goals matters","Leadership means helping others believe in themselves","Football is not important","Injuries end a player's career"],a:1}
    ]}
  ]
},
{
  id:'letter-to-cousin', level:'A2', icon:'✉️',
  t_en:'A Letter to My Cousin', t_ar:'رسالة إلى ابن عمي',
  desc_ar:'تكتب هدى رسالة طويلة لابن عمّها المهاجر تحكي فيها أخبار العائلة والمدينة، فتكتشف قوّة الكلمات في تقريب المسافات.',
  pages:[
"Huda sat at her desk with a blank piece of paper in front of her. Her cousin Zaid had moved to Sweden with his family two years ago, and she missed him very much. Her aunt said Zaid felt homesick and lonely there. 'Why don't you write him a letter?' her mother suggested. 'A real letter, not just a text message. It will mean more to him.' Huda picked up her pen and began to write: 'Dear Zaid, I hope this letter finds you well...'",
"Huda continued writing about their old neighborhood. 'Do you remember our street, with the big date palm tree in front of Abu Salim's shop? It's still there! Abu Salim asks about you every time I pass by. He says you were his favorite customer because you always said thank you so politely.' Huda smiled as she remembered childhood afternoons playing football with Zaid in that same street, before his family moved far away.",
"Next, Huda wrote about the changes in their city. 'A new park opened near our school last month. There's a small lake with ducks, and families go there in the evenings. I think you would love it — remember how much you liked feeding the ducks at the river when we were little?' She paused, wondering if these small details would make Zaid feel closer to home, or make him miss it even more.",
"Then Huda wrote about school and her studies. 'I'm in the ninth grade now, and my English is getting much better! My teacher, Miss Rana, says I should keep practicing by writing letters like this one. I also joined the school choir this year. We are preparing songs for the spring festival. I wish you could be here to watch.' She felt a small tear in her eye, remembering how Zaid used to sing loudly and badly, always making everyone laugh.",
"In the final part of the letter, Huda wrote something more personal. 'I know it must be hard living so far from home, in a cold country with a different language. But please remember that your family here loves you and thinks about you every single day. Distance cannot change that. Please write back and tell me about your new school and your new friends. I want to know everything about your life there, even the small things.'",
"Huda finished the letter with, 'With all my love, your cousin, Huda.' She folded the paper carefully and put it in an envelope. Three weeks later, a reply arrived from Sweden. Zaid wrote that reading her letter made him cry happy tears, and that it was the best gift he had received since moving away. From that day, Huda and Zaid wrote to each other every month, and the letters made the distance between them feel just a little bit smaller."
  ],
  vocab:[
    ["cousin","ابن العمّ/الخال"],["homesick","يحنّ للوطن"],["lonely","وحيد"],["blank","فارغ"],
    ["neighborhood","حيّ"],["customer","زبون"],["politely","بأدب"],["park","حديقة"],
    ["lake","بحيرة"],["feed","يُطعم"],["choir","جوقة/كورال"],["festival","مهرجان"],
    ["distance","مسافة"],["envelope","ظرف رسالة"],["reply","ردّ"],["gift","هديّة"],["folded","مطوي"]
  ],
  synonyms:[
    ["lonely","alone","وحيد"],["remember","recall","يتذكّر"],["reply","answer","يردّ"],
    ["gift","present","هديّة"],["small","little","صغير"],["love","adore","يحبّ كثيراً"],["far","distant","بعيد"]
  ],
  checkpoints:[
    {afterPage:2, comp:[
      {q:"Why did Huda's mother suggest writing a real letter?",o:["It's cheaper","It means more than a text message","Zaid has no phone","It's a school project"],a:1},
      {q:"Where did Zaid move to?",o:["Sweden","Egypt","Turkey","Jordan"],a:0}
    ]},
    {afterPage:4, comp:[
      {q:"What did Huda write about happening in the city?",o:["A new park with a lake","A new school building","A new shop","A new bridge"],a:0},
      {q:"What did Huda join at school?",o:["The football team","The school choir","The art club","The debate team"],a:1}
    ]},
    {afterPage:6, comp:[
      {q:"How did Zaid feel when he read Huda's letter?",o:["Angry","He cried happy tears","Bored","Confused"],a:1},
      {q:"What did Huda and Zaid start doing after this letter?",o:["Calling every day","Writing to each other every month","Meeting every summer","Forgetting each other"],a:1}
    ]}
  ]
},
{
  id:'lost-in-city', level:'A2', icon:'🏙️',
  t_en:'Lost in the City', t_ar:'ضائع في المدينة',
  desc_ar:'يضيع أحمد عن عائلته في سوق مزدحم أثناء زيارة إلى مدينة كبيرة، ويتعلّم كيف يبقى هادئاً ويطلب المساعدة بحكمة.',
  pages:[
"Ahmed and his family were visiting Baghdad for the first time. They came from a small town to see his uncle and to visit the famous Al-Mutanabbi Street, which was full of bookshops and busy crowds. 'Stay close to us, Ahmed,' his father said as they entered the crowded street. Ahmed was excited. He had never seen so many people, books, and colorful shops in one place before. He held his mother's hand tightly at first.",
"The street was full of interesting things: old books, paintings, and street musicians playing traditional instruments. Ahmed saw a shop with beautiful old maps in the window. 'Can we look at this shop?' he asked his father. 'Just for a moment, then we must catch up with your mother and sister,' his father said. Ahmed stared at the maps, fascinated. When he looked up a minute later, his father was gone. The crowd had separated them completely.",
"Ahmed's heart began to race. He looked left and right, but he could not see his family anywhere. Hundreds of strangers walked past him in every direction. 'Baba! Mama!' he called out, but his voice was lost in the noise of the crowd. Panic started to rise inside him. He remembered what his teacher once said: 'If you ever get lost, stop, stay calm, and think before you act.' Ahmed took a deep breath and tried to remember this advice.",
"Ahmed remembered that his father had mentioned a large bookshop called 'Shahbandar Café' near the middle of the street. He decided not to run around randomly, but to walk carefully toward where he thought that shop was. On the way, he saw a police officer standing near a corner, helping tourists with directions. Ahmed's mother had once told him, 'If you are ever lost, look for a police officer or a shop owner — they can help you.'",
"Ahmed walked up to the police officer, his hands shaking slightly. 'Excuse me, sir. I am lost. I was with my father, mother, and sister, but I lost them in the crowd,' he explained, trying to keep his voice steady. The officer smiled kindly. 'Don't worry, son. What is your name, and what does your father look like?' Ahmed described his father's blue shirt and told the officer his family's names. The officer spoke into his radio to the other officers nearby.",
"While waiting with the police officer, Ahmed felt less frightened. The officer gave him a bottle of water and asked him questions about his hometown to keep him calm. 'You did the right thing by staying in one place and asking for help,' the officer said. 'Many children make the mistake of running around, which makes it harder to find them.' After about fifteen minutes, which felt like hours to Ahmed, he heard a familiar voice shouting his name.",
"'Ahmed!' His father ran through the crowd, his face full of worry and relief. Ahmed's mother and sister were right behind him, both crying with happiness. His father hugged him tightly. 'We were so scared! Are you okay?' his father asked. Ahmed nodded, feeling safe again. 'I remembered what my teacher taught me — stay calm and ask a police officer for help,' Ahmed explained proudly. His father thanked the police officer many times. That evening, the family stayed close together, and Ahmed never let go of his father's hand again."
  ],
  vocab:[
    ["crowd","حشد"],["fascinated","منبهر"],["separated","انفصل"],["panic","ذعر"],
    ["calm","هادئ"],["advice","نصيحة"],["randomly","عشوائياً"],["tourist","سائح"],
    ["directions","اتّجاهات"],["shaking","يرتجف"],["steady","ثابت"],["describe","يصف"],
    ["radio","جهاز لاسلكي"],["frightened","خائف"],["familiar","مألوف"],["relief","ارتياح"],
    ["hug","عناق"],["safe","آمن"],["proud","فخور"],["mistake","خطأ"]
  ],
  synonyms:[
    ["calm","relaxed","هادئ"],["frightened","scared","خائف"],["lost","missing","ضائع/مفقود"],
    ["familiar","recognizable","مألوف"],["advice","guidance","نصيحة"],["crowd","mass of people","حشد"],
    ["safe","secure","آمن"],["proud","pleased","فخور"]
  ],
  checkpoints:[
    {afterPage:3, comp:[
      {q:"Where was Ahmed's family visiting?",o:["Al-Mutanabbi Street in Baghdad","A football stadium","A beach","A farm"],a:0},
      {q:"What did Ahmed's father say before they entered the crowd?",o:["Stay close to us","Go buy some books","Wait in the car","Call your mother"],a:0}
    ]},
    {afterPage:5, comp:[
      {q:"What advice did Ahmed remember from his teacher?",o:["Run and find your family quickly","Stay calm and think before you act","Cry loudly for help","Hide in a shop"],a:1},
      {q:"Who did Ahmed decide to ask for help?",o:["A shop owner","A police officer","A stranger","No one"],a:1}
    ]},
    {afterPage:7, comp:[
      {q:"What did the police officer say many children do wrong when lost?",o:["They ask for help","They run around, making it harder to find them","They stay calm","They call the police"],a:1},
      {q:"How did the story end?",o:["Ahmed's family found him and hugged him","Ahmed never found his family","Ahmed went home alone","The police officer adopted Ahmed"],a:0}
    ]}
  ]
},
{
  id:'job-interview', level:'B1', icon:'💼',
  t_en:'The Job Interview', t_ar:'مقابلة العمل',
  desc_ar:'يستعد سرمد لأوّل مقابلة عمل في حياته بعد التخرّج، ويكتشف أن الصدق والاستعداد الجيّد أهمّ من الكمال.',
  pages:[
"Sarmad had just graduated from university with a degree in business administration, and after months of searching, he finally received an email inviting him to a job interview at a well-known company in Baghdad. He felt a mixture of excitement and terror. This would be his very first professional interview, and he desperately wanted to make a good impression. That night, he barely slept, running through possible questions in his head over and over again.",
"The next morning, Sarmad's older sister, Dina, who had worked in human resources for several years, offered to help him prepare. 'The most common mistake people make,' she explained, 'is failing to research the company beforehand. You should know what they do, who their clients are, and why you specifically want to work there.' Sarmad spent the entire afternoon reading the company's website, taking notes on their projects and their mission statement, determined not to appear unprepared.",
"On the day of the interview, Sarmad arrived twenty minutes early, dressed in a formal suit that he had borrowed from his father. His hands were trembling slightly as he waited in the reception area. When his name was finally called, he took a deep breath and walked into the interview room, where two managers sat behind a large desk. 'Please, have a seat,' said the older manager, gesturing toward an empty chair. Sarmad sat down, trying to appear calm despite his racing heart.",
"The interview began smoothly with general questions about his education and background. However, halfway through, one manager asked, 'Can you describe a time when you failed at something, and what you learned from it?' Sarmad froze for a moment; he had not prepared for this particular question. Instead of panicking, he remembered his sister's advice: 'Honesty is always better than a rehearsed, perfect-sounding answer.' He took a breath and described a group project at university that had gone poorly due to his poor time management.",
"Sarmad explained how that failure had taught him the importance of planning ahead and communicating clearly with teammates, skills he had since worked hard to improve. The younger manager nodded thoughtfully and made a note. 'That's a mature answer,' she said. 'Many candidates try to hide their weaknesses instead of discussing what they learned from them.' Sarmad felt a wave of relief; perhaps his honesty had actually worked in his favor rather than against him.",
"Toward the end of the interview, the managers asked if Sarmad had any questions for them. He asked thoughtfully about the team he would be working with and the opportunities for professional growth within the company, questions he had specifically prepared based on his research. The older manager smiled approvingly. 'It's clear you've done your homework,' he said. 'Most candidates don't bother asking us anything at all.' Sarmad thanked them both and left the building feeling cautiously optimistic about his chances.",
"A week later, Sarmad received a phone call from the company offering him the position. He was overjoyed and immediately called his sister to thank her for her advice. 'I was so nervous about that question about failure,' he admitted, 'but being honest actually helped me more than trying to sound perfect.' Dina laughed. 'That's exactly the point,' she said. 'Interviewers aren't looking for perfect people; they're looking for people who can reflect honestly and grow from their mistakes.' Sarmad started his new job the following month, grateful for the lesson he had learned."
  ],
  vocab:[
    ["graduate","يتخرّج"],["degree","شهادة جامعية"],["interview","مقابلة"],["terror","رعب"],
    ["impression","انطباع"],["research","بحث/يبحث"],["client","عميل"],["formal","رسمي"],
    ["trembling","يرتجف"],["reception","استقبال"],["panic","ذعر"],["rehearsed","محفوظ مسبقاً"],
    ["honesty","صدق"],["weakness","نقطة ضعف"],["mature","ناضج"],["approvingly","بارتياح/موافقة"],
    ["optimistic","متفائل"],["overjoyed","مسرور جداً"],["reflect","يتأمّل/يفكّر بعمق"],["opportunity","فرصة"]
  ],
  synonyms:[
    ["nervous","anxious","متوتّر"],["prepare","get ready","يستعدّ"],["honest","truthful","صادق"],
    ["mistake","error","خطأ"],["mature","thoughtful","ناضج"],["relief","comfort","ارتياح"],
    ["optimistic","hopeful","متفائل"],["overjoyed","delighted","مسرور جداً"],["improve","develop","يتحسّن/يطوّر"]
  ],
  checkpoints:[
    {afterPage:3, comp:[
      {q:"What degree did Sarmad graduate with?",o:["Business administration","Medicine","Engineering","Law"],a:0},
      {q:"What mistake did Dina say most people make before interviews?",o:["Arriving too early","Failing to research the company","Wearing formal clothes","Asking too many questions"],a:1}
    ]},
    {afterPage:5, comp:[
      {q:"What difficult question did the manager ask Sarmad?",o:["About his salary expectations","About a time he failed and what he learned","About his hobbies","About his family"],a:1},
      {q:"What advice from his sister did Sarmad remember?",o:["Honesty is better than a rehearsed answer","Never admit mistakes","Talk as much as possible","Avoid eye contact"],a:0}
    ]},
    {afterPage:7, comp:[
      {q:"What did Sarmad ask the managers at the end of the interview?",o:["About salary only","About the team and growth opportunities","Nothing at all","About vacation days"],a:1},
      {q:"What lesson did Sarmad learn from the experience?",o:["Perfection is required to get a job","Honest reflection on mistakes can help more than sounding perfect","Interviews are impossible to prepare for","His sister was wrong"],a:1}
    ]}
  ]
},
{
  id:'marshes-trip', level:'B1', icon:'🌾',
  t_en:'A Trip to the Marshes', t_ar:'رحلة إلى الأهوار',
  desc_ar:'تسافر مجموعة من طلاب الجامعة إلى أهوار جنوب العراق في رحلة دراسية، فيكتشفون جمال الطبيعة وتراث سكان الأهوار.',
  pages:[
"As part of their environmental science course, a group of university students from Basra organized a field trip to the marshes of southern Iraq, a unique wetland ecosystem that had recently been recognized as a UNESCO World Heritage site. Layla, one of the students, had grown up in the city and had never actually visited the marshes before, despite living so close to them her entire life. She was both curious and slightly nervous about the unfamiliar environment awaiting her.",
"The group departed early in the morning, traveling by bus for nearly two hours before arriving at a small village on the edge of the marshes. There, they were greeted by a local guide named Abu Jassim, whose family had lived in the marshes for generations. 'Welcome,' he said warmly, 'the marshes are not just water and reeds; they are a way of life that has survived for thousands of years.' The students then boarded traditional narrow boats called 'mashoof' to begin their journey deeper into the wetlands.",
"As the boats glided silently through the water, surrounded by tall reeds swaying gently in the breeze, Layla felt a sense of peace she had never experienced in the busy city. Flocks of birds flew overhead, and buffalo swam lazily nearby. Abu Jassim explained how the marsh people, known as the Ma'dan, traditionally built their houses entirely from reeds, without using a single nail. 'Everything comes from the water and the reeds,' he explained. 'Nothing is wasted.'",
"The group stopped at a traditional reed house called a 'mudhif,' an impressive guest hall built entirely of arched reed columns. Layla was amazed by its architecture; despite being made only of reeds and mud, the structure was remarkably strong and beautiful. Inside, an elderly woman served the students traditional tea and told stories about how the marshes had almost completely dried up decades ago due to political conflict, before slowly being restored through dedicated conservation efforts.",
"Layla asked Abu Jassim how the local community felt about the recent efforts to protect the marshes as a UNESCO site. 'We are proud,' he answered, 'but we also worry. Tourism can help us, bringing money and attention to preserve our home, but too many visitors who don't respect our traditions and environment could also harm this fragile place.' His words made Layla think deeply about the responsibility that came with being a visitor to such a special ecosystem.",
"Later that afternoon, the students helped a local family plant reeds along a section of shoreline that had suffered erosion, part of an ongoing environmental restoration project. Layla found the work surprisingly satisfying, feeling connected to the land in a way her city life had never allowed. One of her classmates, Mustafa, commented, 'I studied about wetland conservation in textbooks for two years, but nothing compares to actually doing this work with my own hands.'",
"As the sun began to set, painting the water in brilliant orange and pink, the students gathered for a final meal with Abu Jassim's family before returning to Basra. Layla realized that this single day had taught her more about environmental responsibility, cultural heritage, and human resilience than any classroom lecture ever could. On the bus ride home, she quietly promised herself that she would return to the marshes again, not merely as a curious tourist, but as someone determined to help protect this remarkable place."
  ],
  vocab:[
    ["marshes","أهوار"],["wetland","أرض رطبة"],["ecosystem","نظام بيئي"],["heritage","تراث"],
    ["reeds","قصب"],["guide","مرشد"],["generations","أجيال"],["boat","قارب"],
    ["breeze","نسيم"],["buffalo","جاموس"],["architecture","عمارة/بناء"],["arched","مقوّس"],
    ["conservation","حفاظ/صون"],["fragile","هشّ"],["erosion","تآكل"],["restoration","ترميم/إعادة تأهيل"],
    ["shoreline","خطّ الساحل"],["satisfying","مُرضٍ"],["resilience","صمود"],["responsibility","مسؤولية"]
  ],
  synonyms:[
    ["unique","remarkable","فريد/رائع"],["peaceful","calm","هادئ"],["proud","pleased","فخور"],
    ["fragile","delicate","هشّ"],["protect","preserve","يحمي/يحافظ على"],["curious","interested","فضولي"],
    ["amazed","astonished","مندهش"],["satisfying","rewarding","مُرضٍ"],["responsibility","duty","مسؤولية"]
  ],
  checkpoints:[
    {afterPage:3, comp:[
      {q:"What is the marshes' special status mentioned in the story?",o:["A UNESCO World Heritage site","A national park","A military zone","A private farm"],a:0},
      {q:"What kind of boat did the students use?",o:["A mashoof","A ferry","A canoe","A sailboat"],a:0}
    ]},
    {afterPage:5, comp:[
      {q:"What material is a 'mudhif' built from?",o:["Concrete and steel","Reeds and mud","Wood and glass","Stone"],a:1},
      {q:"What happened to the marshes decades ago?",o:["They expanded greatly","They almost completely dried up due to conflict","They became a city","Nothing changed"],a:1}
    ]},
    {afterPage:7, comp:[
      {q:"What did Abu Jassim worry about regarding tourism?",o:["Too much money","Visitors who don't respect traditions and environment","Not enough visitors","The weather"],a:1},
      {q:"What did the students help do in the afternoon?",o:["Build a new mudhif","Plant reeds to fight erosion","Catch fish","Paint boats"],a:1}
    ]}
  ]
},
{
  id:'broken-promise', level:'B1', icon:'🤝',
  t_en:'The Broken Promise', t_ar:'الوعد المكسور',
  desc_ar:'يعد زياد صديقه المقرّب بحضور مناسبة مهمة، لكن ظرفاً عائلياً يجبره على الاختيار الصعب بين الوفاء بوعده وواجبه العائلي.',
  pages:[
"Ziad and Hassan had been best friends since primary school, inseparable through every stage of their lives. When Hassan told Ziad that he had been selected to present his graduation project at a prestigious university exhibition, Ziad promised immediately, 'Of course I'll be there. I wouldn't miss it for anything.' Hassan had worked on his engineering project for nearly a year, and having his best friend in the audience meant more to him than almost anything else.",
"Two days before the exhibition, however, Ziad received an urgent phone call from his mother. His grandfather, who lived in a village several hours away, had suddenly fallen seriously ill and been admitted to the hospital. 'We need to go see him immediately, Ziad. The whole family is traveling tomorrow morning,' his mother said, her voice trembling with worry. Ziad felt his stomach drop; tomorrow morning was exactly when Hassan's exhibition was scheduled to begin.",
"Ziad spent that entire night wrestling with an impossible decision. His grandfather, who had raised him for several years while his parents worked abroad, might be seriously unwell, possibly even dying. Yet he had made a solemn promise to Hassan, who had no other close friends and had been anxiously anticipating Ziad's support for months. Ziad tried calling Hassan to explain the situation, but his phone rang and rang without an answer; Hassan must have been busy with final preparations.",
"Ultimately, Ziad made the difficult choice to travel with his family to see his grandfather, reasoning that family obligations, especially concerning something as serious as potential loss of life, had to take priority over a promise, no matter how important that promise felt. He sent Hassan a long, apologetic text message explaining the situation before boarding the early morning bus, hoping desperately that his friend would understand the impossible circumstances he found himself in.",
"Hassan, unfortunately, did not see the message until after his presentation had already concluded, as he had turned off his phone to focus completely on his exhibition. When he finally read Ziad's explanation, he felt a confusing mixture of emotions: relief that Ziad had a legitimate reason, but also a lingering hurt that his best friend had not been present during one of the most important moments of his academic life, an event he had anticipated for so long.",
"When Ziad returned three days later, having witnessed his grandfather thankfully stabilize and slowly begin recovering, he immediately went to see Hassan, feeling deeply anxious about how his friend would react to his absence. 'I'm so sorry, Hassan. I know I promised, and breaking that promise must have really hurt you,' Ziad said sincerely. Hassan was quiet for a long moment before responding. 'I understand about your grandfather, truly I do. But it still hurt, not seeing you there after everything.'",
"The two friends talked honestly for hours that evening, working through their complicated feelings together. Hassan eventually admitted that he had been more disappointed by the silence beforehand than by Ziad's absence itself, while Ziad acknowledged he should have found a way to communicate more clearly despite the emergency. 'Real friendship,' Hassan finally said, 'means being honest about how we feel, even when it's complicated, and forgiving each other when life gets difficult.' From that day forward, their friendship grew even stronger, built on deeper understanding."
  ],
  vocab:[
    ["inseparable","لا يُفترقان"],["prestigious","مرموق"],["exhibition","معرض"],["urgent","عاجل"],
    ["admitted (hospital)","أُدخل (المستشفى)"],["trembling","يرتجف"],["solemn","جدّي/رسمي"],["anticipate","يترقّب"],
    ["obligation","واجب/التزام"],["priority","أولوية"],["apologetic","معتذر"],["circumstances","ظروف"],
    ["legitimate","مشروع/مبرَّر"],["lingering","باقٍ/مستمرّ"],["stabilize","يستقرّ"],["recovering","يتعافى"],
    ["anxious","قلِق"],["sincerely","بصدق"],["disappointed","خائب الأمل"],["forgive","يسامح"]
  ],
  synonyms:[
    ["urgent","pressing","عاجل"],["promise","vow","وعد"],["disappointed","let down","خائب الأمل"],
    ["honest","sincere","صادق"],["difficult","complicated","صعب/معقّد"],["worry","anxiety","قلق"],
    ["forgive","pardon","يسامح"],["priority","most important","أولوية"],["understand","comprehend","يفهم"]
  ],
  checkpoints:[
    {afterPage:3, comp:[
      {q:"What did Ziad promise Hassan?",o:["To help him study","To attend his graduation exhibition","To lend him money","To travel with him"],a:1},
      {q:"What emergency happened to Ziad's family?",o:["His grandfather fell seriously ill","Their house caught fire","His father lost his job","Nothing happened"],a:0}
    ]},
    {afterPage:5, comp:[
      {q:"Why couldn't Ziad reach Hassan by phone?",o:["Hassan's phone was broken","Hassan was busy preparing and didn't answer","Hassan blocked him","Ziad didn't try calling"],a:1},
      {q:"What choice did Ziad ultimately make?",o:["He ignored his grandfather","He traveled to see his sick grandfather","He stayed for the exhibition","He did neither"],a:1}
    ]},
    {afterPage:7, comp:[
      {q:"How did Hassan feel when he read Ziad's message?",o:["Only angry","A mix of relief and lingering hurt","Completely indifferent","Overjoyed"],a:1},
      {q:"What did the friends conclude about real friendship?",o:["It means never making mistakes","It means honesty and forgiveness even when things are complicated","It means always being together physically","It means avoiding difficult conversations"],a:1}
    ]}
  ]
},
{
  id:'small-business', level:'B1', icon:'🏪',
  t_en:'Starting a Small Business', t_ar:'بدء مشروع صغير',
  desc_ar:'تحوّل مايا شغفها بصناعة الحلويات المنزلية إلى مشروع تجاري صغير، وتتعلّم دروساً قيّمة في التخطيط والمثابرة والتعامل مع الفشل.',
  pages:[
"Maya had always loved baking, spending countless weekend afternoons in her mother's kitchen experimenting with new dessert recipes since she was a young girl. After graduating from high school, while many of her friends were deciding which universities to attend, Maya found herself increasingly drawn to a different idea: starting her own small business selling homemade sweets. Her family was supportive but cautious. 'Running a business is much harder than baking for fun,' her father warned gently.",
"Determined to prove that her idea could succeed, Maya spent weeks researching how to start a small business, from calculating ingredient costs to understanding basic marketing on social media. She created an Instagram page showcasing photos of her beautifully decorated cakes and traditional Iraqi sweets like baklava and kleicha. Her first order came from a family friend who wanted a birthday cake, and Maya stayed up until midnight perfecting every small decorative detail, determined to make an excellent first impression.",
"Word spread quickly around her neighborhood, and within a month, Maya was receiving several orders each week. However, success brought unexpected challenges. She struggled to balance orders with her limited kitchen space and equipment, and on one particularly stressful occasion, she accidentally burned an entire batch of kleicha meant for a large wedding order, forcing her to work through the entire night to remake everything before the morning deadline, exhausted but determined not to disappoint her client.",
"As her business, which she named 'Maya's Sweet Corner,' continued growing steadily, Maya realized she needed proper business skills beyond just baking talent. She enrolled in a free online course about small business management, learning about pricing strategies, managing expenses, and handling difficult customers professionally. One particularly difficult customer complained unfairly about a cake that had actually been delivered perfectly, and Maya learned, through this uncomfortable experience, the importance of remaining calm and professional even when facing unreasonable criticism.",
"After six months of steady growth, Maya faced her biggest challenge yet: a well-known local bakery began offering similar homemade-style sweets at significantly lower prices, directly threatening her small operation. Discouraged, Maya considered giving up entirely, wondering whether her small business could ever truly compete against an established company with far greater resources. Her mother encouraged her to focus not on competing directly on price, but instead on what made her products genuinely special and different.",
"Taking her mother's advice seriously, Maya decided to focus on offering highly personalized, custom-designed cakes for special occasions, something the larger bakery could not easily replicate given their standardized processes and larger scale. She began offering personal consultations with clients, understanding exactly what they envisioned for their celebrations, and even started teaching small baking workshops on weekends. This new approach helped her stand out, and gradually, her loyal customer base returned and even continued to expand.",
"One year after that first small birthday cake order, Maya's business had grown enough that she hired her first part-time assistant to help manage the increasing workload. Looking back, she realized that the most valuable lessons she had learned were not really about baking at all, but about resilience, adapting to unexpected challenges, and genuinely believing in the unique value of her own work even during the most difficult moments. 'Every failure taught me something I couldn't have learned any other way,' she often told curious friends who asked about starting their own businesses."
  ],
  vocab:[
    ["bake","يخبز"],["recipe","وصفة"],["cautious","حذر"],["ingredient","مكوّن"],
    ["marketing","تسويق"],["order","طلب (شراء)"],["decorative","زخرفي"],["impression","انطباع"],
    ["batch","دفعة إنتاج"],["deadline","موعد نهائي"],["exhausted","منهك"],["strategy","خطّة"],
    ["expense","مصروف"],["criticism","انتقاد"],["discouraged","محبَط"],["compete","ينافس"],
    ["resources","موارد"],["personalized","مخصَّص"],["consultation","استشارة"],["workshop","ورشة عمل"]
  ],
  synonyms:[
    ["determined","resolute","مصمّم"],["cautious","careful","حذر"],["exhausted","tired","منهك"],
    ["discouraged","disheartened","محبَط"],["unique","special","فريد/مميّز"],["grow","expand","ينمو/يتوسّع"],
    ["challenge","difficulty","تحدٍّ"],["professional","skilled","محترف"],["valuable","important","قيّم"]
  ],
  checkpoints:[
    {afterPage:3, comp:[
      {q:"What did Maya decide to start after high school?",o:["A university degree","A small baking business","A restaurant","A cooking show"],a:1},
      {q:"What did Maya use to showcase her cakes?",o:["A newspaper ad","An Instagram page","A TV commercial","A billboard"],a:1}
    ]},
    {afterPage:5, comp:[
      {q:"What mistake happened before the wedding order deadline?",o:["She forgot the order","She burned an entire batch of kleicha","She lost the client's phone number","She overcharged the client"],a:1},
      {q:"What did Maya learn from the unfair customer complaint?",o:["To stop taking orders","To remain calm and professional despite unfair criticism","To argue back angrily","To close her business"],a:1}
    ]},
    {afterPage:7, comp:[
      {q:"How did Maya respond to competition from the local bakery?",o:["She gave up immediately","She focused on personalized, custom-designed cakes","She lowered her prices drastically","She stopped using social media"],a:1},
      {q:"What did Maya consider the most valuable lesson from her experience?",o:["How to bake perfectly every time","Resilience and believing in the unique value of her work","How to avoid all failure","How to compete only on price"],a:1}
    ]}
  ]
}
];
