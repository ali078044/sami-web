/* بنك بيانات الكفاءة — المستوى A1 — dialogues (محادثات كتابية) */
var EXAM_DIALOGUES = [
 {
  "q": "A: Good morning! How are you today?\nB: ______",
  "o": [
   "I'm fine, thanks. And you?",
   "I'm 25 years old.",
   "It's on the second floor.",
   "I like tea, please."
  ],
  "a": 0,
  "exp": "سؤال \"How are you?\" يُجاب عليه بوصف الحال، ثم يُعاد السؤال بلطف \"And you?\".",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Hi, I don't think we've met. I'm Sarah.\nB: ______",
  "o": [
   "Nice to meet you, I'm Tom.",
   "See you later!",
   "I'm sorry to hear that.",
   "Yes, please, two sugars."
  ],
  "a": 0,
  "exp": "عند التعارف لأول مرة يُرد بذكر الاسم وعبارة \"Nice to meet you\".",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: It's been a long time! How have you been?\nB: ______",
  "o": [
   "Pretty good, staying busy with work.",
   "No, thank you, I'm full.",
   "It's next to the bank.",
   "I don't have any siblings."
  ],
  "a": 0,
  "exp": "\"How have you been?\" سؤال عن الأحوال بعد غياب، يُجاب بوصف عام للحال.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: I'd like you to meet my colleague, Ahmed.\nB: ______",
  "o": [
   "Pleased to meet you, Ahmed.",
   "I'm going home now.",
   "That sounds delicious.",
   "Turn left at the light."
  ],
  "a": 0,
  "exp": "عند التقديم لشخص جديد، الرد المهذّب المعتاد هو \"Pleased/Nice to meet you\".",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: How's everything going with the new job?\nB: ______",
  "o": [
   "It's going well, thanks for asking.",
   "I paid ten dollars for it.",
   "The train leaves at six.",
   "I don't like coffee."
  ],
  "a": 0,
  "exp": "السؤال عن سير الأمور في العمل يُجاب بتعليق عام عن الحال (going well / not bad...).",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Could you help me carry these boxes, please?\nB: ______",
  "o": [
   "Sure, no problem.",
   "I am fine, thanks.",
   "It's on the table.",
   "Yes, I like it very much."
  ],
  "a": 0,
  "exp": "الرد المناسب على طلب مساعدة هو القبول أو الرفض المباشر؛ \"Sure, no problem\" قبول مهذّب.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Excuse me, could you tell me the time?\nB: ______",
  "o": [
   "Yes, it's almost four o'clock.",
   "No, I don't have any brothers.",
   "It's a beautiful color.",
   "I'm from Baghdad."
  ],
  "a": 0,
  "exp": "\"Could you tell me the time?\" سؤال مباشر عن الوقت، فيكون الرد بذكر الوقت.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Would you like some help with your bags?\nB: ______",
  "o": [
   "That's very kind of you, thank you.",
   "I have been here for two years.",
   "It costs five dollars.",
   "He left an hour ago."
  ],
  "a": 0,
  "exp": "عند عرض المساعدة \"Would you like some help?\" يُشكر الطرف الآخر ويقبل العرض بلطف.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Can you give me a hand with this table?\nB: ______",
  "o": [
   "Of course, where do you want it?",
   "I don't have a table.",
   "It's Monday today.",
   "She is a doctor."
  ],
  "a": 0,
  "exp": "\"give someone a hand\" تعبير بمعنى مساعدة؛ الرد المنطقي هو الموافقة والسؤال عن التفاصيل.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Do you need anything from the shop while I'm out?\nB: ______",
  "o": [
   "Yes, could you get some milk, please?",
   "I went there yesterday.",
   "It's very cold outside.",
   "He works in a bank."
  ],
  "a": 0,
  "exp": "سؤال عرض شراء شيء من المحل يُجاب بذكر ما هو مطلوب أو بالرفض المهذب.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Would you like to come to my birthday party on Friday?\nB: ______",
  "o": [
   "I'd love to, thank you for inviting me.",
   "I'm sorry, I don't know him.",
   "It's my favorite color.",
   "He is thirty years old."
  ],
  "a": 0,
  "exp": "الرد على دعوة يكون بالقبول (I'd love to) أو الاعتذار عن الحضور.",
  "tag": "الدعوات"
 },
 {
  "q": "A: We're having a barbecue this weekend. Can you join us?\nB: ______",
  "o": [
   "I'd really like to, but I'm busy on Saturday.",
   "It's on the third floor.",
   "I bought it last week.",
   "He is very tall."
  ],
  "a": 0,
  "exp": "الاعتذار المهذّب عن دعوة يتضمّن الرغبة بالمشاركة مع ذكر سبب عدم الحضور.",
  "tag": "الدعوات"
 },
 {
  "q": "A: How about going to the cinema tonight?\nB: ______",
  "o": [
   "Sounds great! What time shall we meet?",
   "I have three brothers.",
   "It's raining outside.",
   "No, I don't own a car."
  ],
  "a": 0,
  "exp": "\"How about + gerund?\" اقتراح؛ القبول يكون بعبارة حماسية والسؤال عن التفاصيل.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I'm having some friends over for dinner. Are you free?\nB: ______",
  "o": [
   "Thanks, I'd love to come.",
   "It's next to the hospital.",
   "I usually wake up at seven.",
   "She doesn't like fish."
  ],
  "a": 0,
  "exp": "دعوة اجتماعية يُرد عليها بالشكر والقبول أو الاعتذار.",
  "tag": "الدعوات"
 },
 {
  "q": "A: Would you be interested in joining our study group?\nB: ______",
  "o": [
   "That sounds useful, count me in.",
   "I already finished my homework.",
   "It's a two-hour flight.",
   "He forgot his keys."
  ],
  "a": 0,
  "exp": "\"count me in\" تعبير شائع للقبول بالمشاركة في نشاط مُقترح.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I'm so sorry I'm late, the traffic was terrible.\nB: ______",
  "o": [
   "Don't worry about it, we just started.",
   "I'll have the chicken, please.",
   "It's very expensive.",
   "He is my cousin."
  ],
  "a": 0,
  "exp": "الرد المهذّب على اعتذار هو طمأنة الطرف الآخر بأن الأمر لا يستدعي القلق.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I apologize for breaking your mug yesterday.\nB: ______",
  "o": [
   "That's alright, it was an old one anyway.",
   "I bought it in Paris.",
   "It's on sale this week.",
   "He drinks tea every morning."
  ],
  "a": 0,
  "exp": "قبول الاعتذار يكون بعبارة تخفف من الموقف مثل \"That's alright\".",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I'm really sorry, I forgot to call you back.\nB: ______",
  "o": [
   "No problem, I know you've been busy.",
   "It's five kilometers away.",
   "I don't eat meat.",
   "She studies medicine."
  ],
  "a": 0,
  "exp": "قبول الاعتذار عادة يتضمن تفهّم الظرف الذي أدى إلى الخطأ.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I owe you an apology for what I said earlier.\nB: ______",
  "o": [
   "It's okay, let's just forget about it.",
   "I need a bigger size.",
   "The museum opens at nine.",
   "He speaks three languages."
  ],
  "a": 0,
  "exp": "\"I owe you an apology\" اعتراف رسمي بالخطأ؛ الرد المعتاد تخفيف الموقف وتجاوزه.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: Sorry for the mess, I wasn't expecting visitors.\nB: ______",
  "o": [
   "Please, don't worry about it at all.",
   "It's my favorite song.",
   "He lives on the top floor.",
   "I paid by credit card."
  ],
  "a": 0,
  "exp": "اعتذار عن الفوضى في المنزل يُرد عليه بطمأنة الضيف الآخر.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: This soup is cold. Could you heat it up, please?\nB: ______",
  "o": [
   "I'm so sorry, I'll bring you a hot one right away.",
   "It's next to the church.",
   "I don't have any change.",
   "He arrived on time."
  ],
  "a": 0,
  "exp": "شكوى في مطعم يُرد عليها بالاعتذار ثم تقديم حل فوري.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: I've been waiting for over an hour and no one has helped me.\nB: ______",
  "o": [
   "I apologize for the delay, let me assist you now.",
   "It's a lovely day today.",
   "I'll take the blue one.",
   "She lives nearby."
  ],
  "a": 0,
  "exp": "الرد المهني على شكوى تأخير هو الاعتذار الفوري وتقديم المساعدة.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: The room I booked online is not what I see in the pictures.\nB: ______",
  "o": [
   "I understand your concern; let me check what we can do.",
   "Breakfast is served at eight.",
   "I really enjoyed the trip.",
   "He checked out yesterday."
  ],
  "a": 0,
  "exp": "شكوى من فندق يُرد عليها بالتفهّم والوعد بمعالجة الموضوع.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: This isn't what I ordered. I asked for no onions.\nB: ______",
  "o": [
   "I'm very sorry, I'll have it remade immediately.",
   "It's on the third shelf.",
   "He likes spicy food.",
   "I paid in cash."
  ],
  "a": 0,
  "exp": "خطأ في الطلب يستدعي اعتذاراً وتصحيحاً سريعاً للخطأ.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: I'm not happy with the service I received today.\nB: ______",
  "o": [
   "I'm sorry to hear that. Could you tell me what happened?",
   "It's a bit far from here.",
   "I usually take the bus.",
   "He works night shifts."
  ],
  "a": 0,
  "exp": "الرد المهني الأول على شكوى عامة هو الاعتذار وطلب التفاصيل لفهم المشكلة.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: Excuse me, how much does this shirt cost?\nB: ______",
  "o": [
   "It's twenty dollars.",
   "It's made of cotton.",
   "I bought it yesterday.",
   "It fits me well."
  ],
  "a": 0,
  "exp": "سؤال \"How much does it cost?\" سؤال مباشر عن السعر، فيكون الجواب بذكر المبلغ.",
  "tag": "التسوق"
 },
 {
  "q": "A: Do you have this in a smaller size?\nB: ______",
  "o": [
   "Let me check in the back for you.",
   "It's very comfortable.",
   "I like the color red.",
   "He bought two shirts."
  ],
  "a": 0,
  "exp": "استفسار عن مقاس آخر في متجر يُجاب بالتحقق من التوفر.",
  "tag": "التسوق"
 },
 {
  "q": "A: Can I try this on before I buy it?\nB: ______",
  "o": [
   "Of course, the fitting room is over there.",
   "It costs fifteen dollars.",
   "I don't have a receipt.",
   "She wears a uniform."
  ],
  "a": 0,
  "exp": "طلب تجربة قطعة ملابس يُجاب بالموافقة وتوجيه الزبون لغرفة القياس.",
  "tag": "التسوق"
 },
 {
  "q": "A: I'd like to return this jacket. It doesn't fit.\nB: ______",
  "o": [
   "No problem, do you have the receipt?",
   "It's very warm today.",
   "I love this style.",
   "He works at the till."
  ],
  "a": 0,
  "exp": "طلب إرجاع منتج يستدعي عادة سؤال البائع عن إيصال الشراء.",
  "tag": "التسوق"
 },
 {
  "q": "A: Is this price final, or can we negotiate?\nB: ______",
  "o": [
   "I can give you a ten percent discount.",
   "It closes at nine tonight.",
   "I usually shop online.",
   "He paid by card."
  ],
  "a": 0,
  "exp": "سؤال عن إمكانية التفاوض على السعر يُجاب بعرض تخفيض أو رفضه بوضوح.",
  "tag": "التسوق"
 },
 {
  "q": "A: Excuse me, how do I get to the train station from here?\nB: ______",
  "o": [
   "Go straight ahead and turn left at the bank.",
   "It's a two-hour journey.",
   "I take the bus every day.",
   "The ticket costs three dollars."
  ],
  "a": 0,
  "exp": "سؤال عن الاتجاهات \"How do I get to...?\" يُجاب بإرشادات مباشرة للطريق.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Is the museum within walking distance?\nB: ______",
  "o": [
   "Yes, it's about ten minutes on foot.",
   "It opens at ten in the morning.",
   "I visited it last summer.",
   "Entrance is free on Sundays."
  ],
  "a": 0,
  "exp": "سؤال عن قرب مكان يُجاب بذكر المسافة أو الزمن اللازم للوصول مشياً.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Which bus do I take to get to the airport?\nB: ______",
  "o": [
   "You need bus number twelve.",
   "The flight leaves at noon.",
   "I always travel by taxi.",
   "It's a small airport."
  ],
  "a": 0,
  "exp": "سؤال عن رقم الحافلة المناسبة يُجاب بذكر الرقم مباشرة.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Could you tell me where the nearest pharmacy is?\nB: ______",
  "o": [
   "It's just around the corner, next to the bakery.",
   "I need some medicine.",
   "It closes early on Fridays.",
   "He works as a pharmacist."
  ],
  "a": 0,
  "exp": "سؤال عن أقرب مكان (صيدلية) يُجاب بوصف الموقع بدقة.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: I'm lost. Can you show me the way to the hotel?\nB: ______",
  "o": [
   "Sure, follow me, it's not far from here.",
   "I stayed there last year.",
   "The hotel has a pool.",
   "It's quite expensive."
  ],
  "a": 0,
  "exp": "شخص تائه يطلب إرشاداً؛ الرد المناسب تقديم المساعدة الفورية بإرشاده للطريق.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Hello, may I speak to Mr. Ali, please?\nB: ______",
  "o": [
   "Speaking, how can I help you?",
   "I'm fine, thank you.",
   "It's raining today.",
   "He left the office."
  ],
  "a": 0,
  "exp": "عند الرد على مكالمة يطلب فيها المتصل التحدث مع الشخص نفسه، يُقال \"Speaking\".",
  "tag": "الهاتف"
 },
 {
  "q": "A: I'm sorry, he's not available right now. Can I take a message?\nB: ______",
  "o": [
   "Yes, please ask him to call me back.",
   "No, I don't have his number.",
   "He works from nine to five.",
   "I called him yesterday."
  ],
  "a": 0,
  "exp": "عند عرض \"take a message\" يُجاب بترك رسالة أو طلب أن يُعاد الاتصال.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Could you hold on a moment while I transfer your call?\nB: ______",
  "o": [
   "Sure, no problem.",
   "I called an hour ago.",
   "He works in accounting.",
   "It's a wrong number."
  ],
  "a": 0,
  "exp": "طلب \"hold on\" أثناء تحويل مكالمة يستدعي ردّاً بسيطاً بالموافقة على الانتظار.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Sorry, this is a bad connection. Could you repeat that?\nB: ______",
  "o": [
   "Sure, I said the meeting is at 3 p.m.",
   "I'll call you back tomorrow.",
   "He hung up already.",
   "The line is busy."
  ],
  "a": 0,
  "exp": "طلب إعادة الكلام بسبب سوء الاتصال يُجاب بتكرار المعلومة المطلوبة.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Thanks for calling. Is there anything else I can help you with?\nB: ______",
  "o": [
   "No, that's all. Thank you very much.",
   "I don't have a phone.",
   "He called twice.",
   "It rang for a long time."
  ],
  "a": 0,
  "exp": "نهاية مكالمة يُرد عليها بالشكر وإنهاء الحديث بلطف.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Do you think we should postpone the meeting?\nB: ______",
  "o": [
   "Yes, I completely agree with you.",
   "It's on the fifth floor.",
   "I'll bring my laptop.",
   "He is the manager."
  ],
  "a": 0,
  "exp": "الرد بالموافقة على رأي يكون بعبارة \"I agree\" ونحوها.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: I don't think this plan will work. What do you think?\nB: ______",
  "o": [
   "Actually, I disagree — I think it could succeed.",
   "I bought a new plan.",
   "It's a great idea.",
   "He works too much."
  ],
  "a": 0,
  "exp": "الرد بالرفض/الاختلاف في الرأي يبدأ بعبارة مثل \"I disagree\" مع توضيح موجز.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Shall we go with the blue design instead of the red one?\nB: ______",
  "o": [
   "Sure, that works for me.",
   "I don't like blue at all.",
   "It's a nice weather today.",
   "He designed it himself."
  ],
  "a": 0,
  "exp": "اقتراح خيار بديل يُقبل بعبارة موافقة بسيطة مثل \"That works for me\".",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: I really think we made the right decision.\nB: ______",
  "o": [
   "I couldn't agree more.",
   "It's next to the window.",
   "I'll think about it later.",
   "He decided yesterday."
  ],
  "a": 0,
  "exp": "\"I couldn't agree more\" تعبير قوي عن الموافقة التامة مع رأي شخص آخر.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Do you agree that we should hire more staff?\nB: ______",
  "o": [
   "Not really, I think we can manage with the current team.",
   "We hired him last month.",
   "The office is quite small.",
   "She works part-time."
  ],
  "a": 0,
  "exp": "الرد بالرفض المهذب لرأي يبدأ بـ\"Not really\" متبوعاً بتوضيح موجز للسبب.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: I have a terrible headache. What should I do?\nB: ______",
  "o": [
   "Why don't you take some medicine and rest?",
   "I have a headache too.",
   "It's a nice day outside.",
   "He works in a hospital."
  ],
  "a": 0,
  "exp": "\"Why don't you...?\" صيغة شائعة لتقديم اقتراح أو نصيحة.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I can't decide what to study at university.\nB: ______",
  "o": [
   "Maybe you should think about what you enjoy most.",
   "I studied engineering.",
   "The university is far away.",
   "He graduated last year."
  ],
  "a": 0,
  "exp": "نصيحة تُقدَّم بصيغة \"Maybe you should...\" لمساعدة الشخص على التفكير في قراره.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I'm feeling really stressed about the exam.\nB: ______",
  "o": [
   "You should try to relax and study a little at a time.",
   "I passed my exam already.",
   "It's next Monday.",
   "He never studies."
  ],
  "a": 0,
  "exp": "نصيحة للتعامل مع التوتر تبدأ عادة بـ\"You should...\" لتقديم حل عملي.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: My computer keeps crashing. Any advice?\nB: ______",
  "o": [
   "You might want to have it checked by a technician.",
   "I bought a new computer.",
   "It's very fast.",
   "He fixed it himself."
  ],
  "a": 0,
  "exp": "\"You might want to...\" صيغة لطيفة لتقديم اقتراح أو نصيحة عملية.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: If I were you, I'd apply for that job.\nB: ______",
  "o": [
   "That's good advice, I think I will.",
   "I already have a job.",
   "He applied last week.",
   "It's a small company."
  ],
  "a": 0,
  "exp": "\"If I were you, I'd...\" صيغة تقديم نصيحة؛ الرد المنطقي تقبّل النصيحة أو مناقشتها.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: Thank you so much for helping me move house.\nB: ______",
  "o": [
   "You're welcome, that's what friends are for.",
   "I moved last year too.",
   "It's a big house.",
   "He lives far away."
  ],
  "a": 0,
  "exp": "الرد على الشكر يكون بعبارة مثل \"You're welcome\" لتخفيف الامتنان.",
  "tag": "الشكر"
 },
 {
  "q": "A: I really appreciate you staying late to finish this.\nB: ______",
  "o": [
   "It was no trouble at all, happy to help.",
   "I usually leave at five.",
   "The office closes at six.",
   "He stayed home today."
  ],
  "a": 0,
  "exp": "الرد على تقدير الجهد يكون بالتقليل من الأمر وإظهار الاستعداد للمساعدة.",
  "tag": "الشكر"
 },
 {
  "q": "A: Thanks a lot for the lovely gift!\nB: ______",
  "o": [
   "You're very welcome, I'm glad you like it.",
   "I bought it at the mall.",
   "It was quite expensive.",
   "He gave me one too."
  ],
  "a": 0,
  "exp": "الرد المهذب على الشكر على هدية هو التعبير عن السرور لإعجاب الطرف الآخر.",
  "tag": "الشكر"
 },
 {
  "q": "A: I can't thank you enough for your support this year.\nB: ______",
  "o": [
   "It was my pleasure, anytime.",
   "I supported the team last year.",
   "He works hard every day.",
   "It's been a difficult year."
  ],
  "a": 0,
  "exp": "\"It was my pleasure\" رد مهذّب شائع على شكر عميق أو ممتد.",
  "tag": "الشكر"
 },
 {
  "q": "A: Thank you for waiting for me. I know I'm late.\nB: ______",
  "o": [
   "No worries at all, I just got here myself.",
   "I waited an hour yesterday.",
   "He is never late.",
   "It's five minutes away."
  ],
  "a": 0,
  "exp": "الرد على الشكر بسبب التأخير يكون بطمأنة الطرف الآخر وتخفيف الموقف.",
  "tag": "الشكر"
 },
 {
  "q": "A: What do you think about working from home?\nB: ______",
  "o": [
   "Personally, I think it improves work-life balance.",
   "I work in an office.",
   "It's close to my house.",
   "He started last month."
  ],
  "a": 0,
  "exp": "سؤال عن الرأي \"What do you think...?\" يُجاب بعبارة رأي مثل \"Personally, I think...\".",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: In your opinion, is social media good or bad for teenagers?\nB: ______",
  "o": [
   "I believe it has both benefits and drawbacks.",
   "I don't use social media.",
   "He is seventeen years old.",
   "It was invented years ago."
  ],
  "a": 0,
  "exp": "سؤال عن رأي متوازن يُجاب برأي يوازن بين الجوانب الإيجابية والسلبية.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: Do you think studying abroad is worth it?\nB: ______",
  "o": [
   "Yes, I believe it broadens your perspective.",
   "I studied at home.",
   "It's very costly.",
   "He traveled last year."
  ],
  "a": 0,
  "exp": "سؤال رأي يُجاب بعبارة تعبّر عن قناعة شخصية مدعومة بسبب موجز.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: What's your view on the new company policy?\nB: ______",
  "o": [
   "Honestly, I have some concerns about it.",
   "The policy started in June.",
   "He works in HR.",
   "It's a long document."
  ],
  "a": 0,
  "exp": "التعبير عن رأي نقدي يبدأ غالباً بـ\"Honestly\" أو \"To be honest\".",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: Some people say technology makes us less social. Do you agree?\nB: ______",
  "o": [
   "To some extent, yes, but it also connects people.",
   "I don't have a phone.",
   "Technology is expensive.",
   "He doesn't use a computer."
  ],
  "a": 0,
  "exp": "الرد المتوازن على رأي جدلي يبدأ بـ\"To some extent\" ثم يوضّح الرأي الشخصي.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: Are you ready to order, or do you need more time?\nB: ______",
  "o": [
   "I think we're ready. I'll have the grilled chicken.",
   "It's a small restaurant.",
   "I paid by cash.",
   "He works as a chef."
  ],
  "a": 0,
  "exp": "سؤال النادل عن الاستعداد للطلب يُجاب بذكر الطلب مباشرة.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Would you like anything to drink with your meal?\nB: ______",
  "o": [
   "Just water, please.",
   "It was delicious.",
   "I don't eat meat.",
   "He is a vegetarian."
  ],
  "a": 0,
  "exp": "سؤال عن المشروبات مع الوجبة يُجاب بذكر المشروب المطلوب مباشرة.",
  "tag": "في المطعم"
 },
 {
  "q": "A: How would you like your steak cooked?\nB: ______",
  "o": [
   "Medium, please.",
   "It's on the menu.",
   "I don't like steak.",
   "He cooked it himself."
  ],
  "a": 0,
  "exp": "سؤال عن درجة نضج اللحم يُجاب بذكر الدرجة المطلوبة (rare/medium/well-done).",
  "tag": "في المطعم"
 },
 {
  "q": "A: Could we have the bill, please?\nB: ______",
  "o": [
   "Certainly, I'll bring it right away.",
   "It's very tasty.",
   "We enjoyed the meal.",
   "He paid last time."
  ],
  "a": 0,
  "exp": "طلب الفاتورة في مطعم يُجاب بالموافقة الفورية على إحضارها.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Is this table by the window available?\nB: ______",
  "o": [
   "Yes, please, have a seat.",
   "It's a lovely view.",
   "We reserved it already.",
   "He prefers the window seat."
  ],
  "a": 0,
  "exp": "سؤال عن توفر طاولة يُجاب بالتأكيد ودعوة الزبون للجلوس.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Long time no see! What have you been up to?\nB: ______",
  "o": [
   "Not much, just working and studying.",
   "It's next to the park.",
   "He is my brother.",
   "I paid ten dollars."
  ],
  "a": 0,
  "exp": "\"What have you been up to?\" سؤال عن الأنشطة الأخيرة، يُجاب بوصف عام.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: I don't think I caught your name.\nB: ______",
  "o": [
   "It's Layla, nice to meet you.",
   "I'm from Iraq.",
   "It's five o'clock.",
   "He works with me."
  ],
  "a": 0,
  "exp": "\"I didn't catch your name\" طريقة مهذبة لسؤال شخص عن اسمه من جديد.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Welcome to our team! We're glad to have you.\nB: ______",
  "o": [
   "Thank you, I'm excited to be here.",
   "I don't have a team.",
   "It's a big building.",
   "He left the team."
  ],
  "a": 0,
  "exp": "الرد على الترحيب بالانضمام لفريق يكون بالشكر والتعبير عن الحماس.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: How do you two know each other?\nB: ______",
  "o": [
   "We were classmates in university.",
   "She lives far away.",
   "It's a small world.",
   "He doesn't know her."
  ],
  "a": 0,
  "exp": "سؤال عن كيفية تعارف شخصين يُجاب بذكر السياق الذي جمعهما.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: I'm having trouble with this exercise. Could you explain it?\nB: ______",
  "o": [
   "Sure, let me walk you through it.",
   "I finished mine already.",
   "It's on page ten.",
   "He is a teacher."
  ],
  "a": 0,
  "exp": "طلب شرح يُجاب بالموافقة والاستعداد للمساعدة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Would you mind keeping an eye on my bag for a minute?\nB: ______",
  "o": [
   "Not at all, take your time.",
   "It's very heavy.",
   "I don't have a bag.",
   "He is watching TV."
  ],
  "a": 0,
  "exp": "طلب مراقبة شيء يُجاب بالموافقة \"Not at all\" (لا مانع).",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: I'm stuck. Can you show me how this works?\nB: ______",
  "o": [
   "Of course, it's actually quite simple.",
   "I don't know how it works either.",
   "It's broken.",
   "He bought it yesterday."
  ],
  "a": 0,
  "exp": "طلب توضيح آلية عمل شيء يُجاب بالموافقة على الشرح.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: We're organizing a trip to the mountains next month. Interested?\nB: ______",
  "o": [
   "Definitely, I've always wanted to go there.",
   "I don't like mountains.",
   "It rained last week.",
   "He went there before."
  ],
  "a": 0,
  "exp": "دعوة لرحلة يُجاب عليها بالقبول الحماسي أو الرفض المهذب.",
  "tag": "الدعوات"
 },
 {
  "q": "A: Feel free to drop by anytime this weekend.\nB: ______",
  "o": [
   "Thanks, I might stop by on Saturday.",
   "I don't have your address.",
   "It's very far.",
   "He visited last weekend."
  ],
  "a": 0,
  "exp": "دعوة مفتوحة للزيارة يُرد عليها بالشكر وتحديد إمكانية الحضور.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I'm sorry I couldn't make it to your event yesterday.\nB: ______",
  "o": [
   "That's okay, I understand you were busy.",
   "It was a great event.",
   "I don't remember it.",
   "He came instead."
  ],
  "a": 0,
  "exp": "اعتذار عن عدم الحضور يُجاب بالتفهم وتخفيف الموقف.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I apologize if I said something that upset you.\nB: ______",
  "o": [
   "Don't worry, I know you didn't mean it.",
   "I wasn't upset at all before.",
   "It's a nice day.",
   "He said something too."
  ],
  "a": 0,
  "exp": "اعتذار عن كلام مزعج يُجاب بتخفيف الموقف وتفهم النية.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: This product stopped working after just two days.\nB: ______",
  "o": [
   "I'm very sorry, we'll replace it for you right away.",
   "It's a popular product.",
   "I bought two of them.",
   "He recommended it."
  ],
  "a": 0,
  "exp": "شكوى من منتج معطوب يُجاب بالاعتذار وتقديم حل فوري.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: My flight was delayed for five hours with no explanation.\nB: ______",
  "o": [
   "I sincerely apologize for the inconvenience caused.",
   "Flights are usually on time.",
   "I traveled last year.",
   "He missed his flight too."
  ],
  "a": 0,
  "exp": "شكوى عن تأخير رحلة تستدعي اعتذاراً رسمياً من موظف الشركة.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: Do you accept credit cards here?\nB: ______",
  "o": [
   "Yes, we accept all major cards.",
   "It's on the shelf.",
   "I paid in cash.",
   "He works at the counter."
  ],
  "a": 0,
  "exp": "سؤال عن وسائل الدفع المقبولة يُجاب بذكرها مباشرة.",
  "tag": "التسوق"
 },
 {
  "q": "A: Is there a warranty on this item?\nB: ______",
  "o": [
   "Yes, it comes with a one-year warranty.",
   "It's very durable.",
   "I bought it last month.",
   "He doesn't like it."
  ],
  "a": 0,
  "exp": "سؤال عن الضمان يُجاب بذكر مدته أو توفره.",
  "tag": "التسوق"
 },
 {
  "q": "A: Do I need to take a taxi, or can I walk there?\nB: ______",
  "o": [
   "You can easily walk, it's only five minutes away.",
   "The taxi is expensive.",
   "I don't like walking.",
   "He took a taxi."
  ],
  "a": 0,
  "exp": "سؤال عن أفضل وسيلة للوصول يُجاب بمعلومة عملية عن المسافة أو الوسيلة.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Which exit should I take to reach the mall?\nB: ______",
  "o": [
   "Take exit number four, then follow the signs.",
   "The mall opens at ten.",
   "I shop there often.",
   "He drove there."
  ],
  "a": 0,
  "exp": "سؤال عن مخرج معين يُجاب بذكر رقمه أو موقعه بدقة.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: I'll call you back in five minutes, is that okay?\nB: ______",
  "o": [
   "Sure, I'll be waiting for your call.",
   "I called you yesterday.",
   "He doesn't have a phone.",
   "It's a long call."
  ],
  "a": 0,
  "exp": "الموافقة على إعادة الاتصال لاحقاً تُصاغ بعبارة انتظار بسيطة.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Sorry, I think I dialed the wrong number.\nB: ______",
  "o": [
   "No problem, that happens sometimes.",
   "I called first.",
   "It's a new number.",
   "He never answers."
  ],
  "a": 0,
  "exp": "الرد على خطأ في الاتصال يكون بتفهم بسيط للموقف.",
  "tag": "الهاتف"
 },
 {
  "q": "A: I think we should launch the product next month, not this one.\nB: ______",
  "o": [
   "I see your point, let's discuss the timing.",
   "I disagree completely, no discussion needed.",
   "It's a good product.",
   "He launched it already."
  ],
  "a": 0,
  "exp": "الرد المتزن على رأي مختلف يفتح باب النقاش بدل الرفض القاطع.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Do you think this color works for the logo?\nB: ______",
  "o": [
   "I'm not so sure, maybe we should try another one.",
   "I painted my room blue.",
   "It's a nice logo.",
   "He designed it."
  ],
  "a": 0,
  "exp": "الرد بالتردد/عدم الموافقة الكاملة يُصاغ بعبارة مهذبة مثل \"I'm not so sure\".",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: I keep forgetting my appointments. Any suggestions?\nB: ______",
  "o": [
   "Why not set reminders on your phone?",
   "I never forget anything.",
   "It's a busy schedule.",
   "He missed his appointment."
  ],
  "a": 0,
  "exp": "اقتراح حل عملي يُصاغ غالباً بصيغة \"Why not...?\".",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I'm thinking about changing my career. What do you think?\nB: ______",
  "o": [
   "It might be worth exploring your options first.",
   "I never changed my job.",
   "It's a difficult decision for everyone.",
   "He changed his career twice."
  ],
  "a": 0,
  "exp": "نصيحة متزنة بخصوص قرار مهم تُقدَّم بحذر مع اقتراح خطوة أولى.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: Thanks for covering my shift yesterday.\nB: ______",
  "o": [
   "Anytime, I know you'd do the same for me.",
   "I worked a double shift.",
   "It's a long shift.",
   "He covered it too."
  ],
  "a": 0,
  "exp": "الرد على الشكر لتغطية مناوبة يكون بعبارة تُظهر الاستعداد المتبادل للمساعدة.",
  "tag": "الشكر"
 },
 {
  "q": "A: I really appreciate your patience with me while I was learning.\nB: ______",
  "o": [
   "It was my pleasure, you've improved a lot.",
   "I don't have much patience.",
   "Learning takes time.",
   "He is patient too."
  ],
  "a": 0,
  "exp": "الرد على الشكر بخصوص الصبر يكون بالتقليل من الأمر والإشادة بتقدّم الطرف الآخر.",
  "tag": "الشكر"
 },
 {
  "q": "A: Do you think remote work will continue after the pandemic?\nB: ______",
  "o": [
   "I believe many companies will keep some remote options.",
   "I never worked remotely.",
   "The pandemic started years ago.",
   "He works in an office."
  ],
  "a": 0,
  "exp": "سؤال رأي عن مستقبل موضوع معين يُجاب برأي مبني على توقع منطقي.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: What's your take on reducing plastic use?\nB: ______",
  "o": [
   "I think it's essential for protecting the environment.",
   "I use plastic bags often.",
   "Plastic is cheap to produce.",
   "He recycles sometimes."
  ],
  "a": 0,
  "exp": "\"What's your take on...?\" سؤال عن الرأي، يُجاب برأي شخصي واضح.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: Do you have any vegetarian options on the menu?\nB: ______",
  "o": [
   "Yes, we have several vegetarian dishes.",
   "The menu is quite large.",
   "I don't eat vegetables.",
   "He is a chef."
  ],
  "a": 0,
  "exp": "سؤال عن خيارات نباتية في المطعم يُجاب بتأكيد توفرها.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Could you recommend something from the menu?\nB: ______",
  "o": [
   "Sure, the grilled fish is very popular here.",
   "The menu changes every season.",
   "I don't usually eat here.",
   "He recommended a different restaurant."
  ],
  "a": 0,
  "exp": "طلب توصية من النادل يُجاب باقتراح طبق مع سبب.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Hi! My name is Yusuf. What's your name?\nB: ______",
  "o": [
   "I'm fine, thank you.",
   "Nice to meet you. I'm Mona.",
   "See you later.",
   "It's on the corner."
  ],
  "a": 1,
  "exp": "عند التعارف نذكر اسمنا ونعبّر عن السرور بالتعرّف.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Hi! My name is Sara. What's your name?\nB: ______",
  "o": [
   "It's on the corner.",
   "See you later.",
   "I'm fine, thank you.",
   "Nice to meet you. I'm Tariq."
  ],
  "a": 3,
  "exp": "عند التعارف نذكر اسمنا ونعبّر عن السرور بالتعرّف.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Hi! My name is Mona. What's your name?\nB: ______",
  "o": [
   "See you later.",
   "It's on the corner.",
   "I'm fine, thank you.",
   "Nice to meet you. I'm Hassan."
  ],
  "a": 3,
  "exp": "عند التعارف نذكر اسمنا ونعبّر عن السرور بالتعرّف.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Good evening! Have we met before?\nB: ______",
  "o": [
   "No, I don't like it.",
   "I don't think so. I'm Layla.",
   "Yes, it's five o'clock.",
   "It's very expensive."
  ],
  "a": 1,
  "exp": "الرد المنطقي على سؤال عن معرفة سابقة هو نفي أو تأكيد ثم التعريف بالنفس.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: How's it going, Ahmed?\nB: ______",
  "o": [
   "He is my brother.",
   "Pretty good, thanks. How about you?",
   "It's next to the bank.",
   "I bought it yesterday."
  ],
  "a": 1,
  "exp": "سؤال غير رسمي عن الحال يُجاب بوصف الحال ورد السؤال.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: How's it going, Omar?\nB: ______",
  "o": [
   "It's next to the bank.",
   "He is my brother.",
   "I bought it yesterday.",
   "Pretty good, thanks. How about you?"
  ],
  "a": 3,
  "exp": "سؤال غير رسمي عن الحال يُجاب بوصف الحال ورد السؤال.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: How's it going, Karim?\nB: ______",
  "o": [
   "Pretty good, thanks. How about you?",
   "He is my brother.",
   "It's next to the bank.",
   "I bought it yesterday."
  ],
  "a": 0,
  "exp": "سؤال غير رسمي عن الحال يُجاب بوصف الحال ورد السؤال.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Long time no see, Ali! How have you been?\nB: ______",
  "o": [
   "The bus leaves at nine.",
   "I've been well, thanks for asking!",
   "I don't know him.",
   "It costs ten dollars."
  ],
  "a": 1,
  "exp": "تحية لمن لم نره منذ فترة، يُرد عليها بوصف الحال.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Long time no see, Sara! How have you been?\nB: ______",
  "o": [
   "I've been well, thanks for asking!",
   "It costs ten dollars.",
   "The bus leaves at nine.",
   "I don't know him."
  ],
  "a": 0,
  "exp": "تحية لمن لم نره منذ فترة، يُرد عليها بوصف الحال.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Long time no see, Noor! How have you been?\nB: ______",
  "o": [
   "I don't know him.",
   "I've been well, thanks for asking!",
   "The bus leaves at nine.",
   "It costs ten dollars."
  ],
  "a": 1,
  "exp": "تحية لمن لم نره منذ فترة، يُرد عليها بوصف الحال.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Excuse me, are you Tariq's friend?\nB: ______",
  "o": [
   "I have two brothers.",
   "Yes, I am. Nice to meet you.",
   "It's a beautiful day.",
   "No, I am not hungry."
  ],
  "a": 1,
  "exp": "الرد على سؤال تعارف بالإيجاب أو النفي مع تحية مناسبة.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Excuse me, are you Zainab's friend?\nB: ______",
  "o": [
   "No, I am not hungry.",
   "I have two brothers.",
   "It's a beautiful day.",
   "Yes, I am. Nice to meet you."
  ],
  "a": 3,
  "exp": "الرد على سؤال تعارف بالإيجاب أو النفي مع تحية مناسبة.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Excuse me, are you Karim's friend?\nB: ______",
  "o": [
   "It's a beautiful day.",
   "Yes, I am. Nice to meet you.",
   "No, I am not hungry.",
   "I have two brothers."
  ],
  "a": 1,
  "exp": "الرد على سؤال تعارف بالإيجاب أو النفي مع تحية مناسبة.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Welcome to our team! I'm Rana, the manager.\nB: ______",
  "o": [
   "The meeting is over.",
   "Thank you! I'm Ahmed, glad to be here.",
   "It's raining outside.",
   "I'm sorry to hear that."
  ],
  "a": 1,
  "exp": "عند الترحيب في مكان عمل جديد نشكر ونعرّف بأنفسنا.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Welcome to our team! I'm Omar, the manager.\nB: ______",
  "o": [
   "It's raining outside.",
   "Thank you! I'm Karim, glad to be here.",
   "I'm sorry to hear that.",
   "The meeting is over."
  ],
  "a": 1,
  "exp": "عند الترحيب في مكان عمل جديد نشكر ونعرّف بأنفسنا.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Welcome to our team! I'm Lina, the manager.\nB: ______",
  "o": [
   "I'm sorry to hear that.",
   "Thank you! I'm Ahmed, glad to be here.",
   "The meeting is over.",
   "It's raining outside."
  ],
  "a": 1,
  "exp": "عند الترحيب في مكان عمل جديد نشكر ونعرّف بأنفسنا.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: It's been a while, Adam! What have you been up to?\nB: ______",
  "o": [
   "He left an hour ago.",
   "Not much, just working and studying.",
   "It's in the drawer.",
   "I paid fifty dollars."
  ],
  "a": 1,
  "exp": "'What have you been up to?' سؤال عمّا كان يفعله الشخص مؤخراً.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: It's been a while, Mona! What have you been up to?\nB: ______",
  "o": [
   "I paid fifty dollars.",
   "Not much, just working and studying.",
   "He left an hour ago.",
   "It's in the drawer."
  ],
  "a": 1,
  "exp": "'What have you been up to?' سؤال عمّا كان يفعله الشخص مؤخراً.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: It's been a while, Sara! What have you been up to?\nB: ______",
  "o": [
   "It's in the drawer.",
   "I paid fifty dollars.",
   "Not much, just working and studying.",
   "He left an hour ago."
  ],
  "a": 2,
  "exp": "'What have you been up to?' سؤال عمّا كان يفعله الشخص مؤخراً.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Hello, I don't believe we've been introduced. I'm Ali.\nB: ______",
  "o": [
   "I'll call you tomorrow.",
   "That sounds expensive.",
   "Pleased to meet you. I'm Tariq.",
   "It's under the table."
  ],
  "a": 2,
  "exp": "عبارة تعارف رسمية يُرد عليها بذكر السرور والاسم.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Hello, I don't believe we've been introduced. I'm Tariq.\nB: ______",
  "o": [
   "It's under the table.",
   "That sounds expensive.",
   "Pleased to meet you. I'm Lina.",
   "I'll call you tomorrow."
  ],
  "a": 2,
  "exp": "عبارة تعارف رسمية يُرد عليها بذكر السرور والاسم.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Hello, I don't believe we've been introduced. I'm Noor.\nB: ______",
  "o": [
   "It's under the table.",
   "I'll call you tomorrow.",
   "That sounds expensive.",
   "Pleased to meet you. I'm Hassan."
  ],
  "a": 3,
  "exp": "عبارة تعارف رسمية يُرد عليها بذكر السرور والاسم.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Good to see you again, Yusuf! It's been ages.\nB: ______",
  "o": [
   "Good to see you too! Time flies.",
   "I need a new phone.",
   "The store closes at nine.",
   "She is very tall."
  ],
  "a": 0,
  "exp": "رد مناسب على تحية لقاء بعد غياب طويل.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Good to see you again, Sara! It's been ages.\nB: ______",
  "o": [
   "I need a new phone.",
   "Good to see you too! Time flies.",
   "The store closes at nine.",
   "She is very tall."
  ],
  "a": 1,
  "exp": "رد مناسب على تحية لقاء بعد غياب طويل.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Good to see you again, Sami! It's been ages.\nB: ______",
  "o": [
   "I need a new phone.",
   "The store closes at nine.",
   "She is very tall.",
   "Good to see you too! Time flies."
  ],
  "a": 3,
  "exp": "رد مناسب على تحية لقاء بعد غياب طويل.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Hi there! Is this seat taken?\nB: ______",
  "o": [
   "It's my birthday today.",
   "No, please, go ahead.",
   "He works downtown.",
   "I'm sorry for the delay."
  ],
  "a": 1,
  "exp": "سؤال عن مقعد فارغ يُجاب بالإذن للجلوس.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: I don't think we've met, Ahmed. What do you do?\nB: ______",
  "o": [
   "I'm a teacher. And you?",
   "It's five kilometers away.",
   "I bought it on sale.",
   "The film starts soon."
  ],
  "a": 0,
  "exp": "'What do you do?' يُسأل عن المهنة عند التعارف.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: I don't think we've met, Karim. What do you do?\nB: ______",
  "o": [
   "I bought it on sale.",
   "The film starts soon.",
   "I'm a teacher. And you?",
   "It's five kilometers away."
  ],
  "a": 2,
  "exp": "'What do you do?' يُسأل عن المهنة عند التعارف.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: I don't think we've met, Zainab. What do you do?\nB: ______",
  "o": [
   "I'm a teacher. And you?",
   "The film starts soon.",
   "I bought it on sale.",
   "It's five kilometers away."
  ],
  "a": 0,
  "exp": "'What do you do?' يُسأل عن المهنة عند التعارف.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Nice to finally meet you in person, Tariq!\nB: ______",
  "o": [
   "Likewise! I've heard a lot about you.",
   "I need to buy some milk.",
   "It's too far to walk.",
   "The book is on the shelf."
  ],
  "a": 0,
  "exp": "'Likewise' تعني وأنا كذلك، رد شائع عند لقاء أول.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Nice to finally meet you in person, Dina!\nB: ______",
  "o": [
   "Likewise! I've heard a lot about you.",
   "The book is on the shelf.",
   "It's too far to walk.",
   "I need to buy some milk."
  ],
  "a": 0,
  "exp": "'Likewise' تعني وأنا كذلك، رد شائع عند لقاء أول.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Nice to finally meet you in person, Hassan!\nB: ______",
  "o": [
   "Likewise! I've heard a lot about you.",
   "The book is on the shelf.",
   "I need to buy some milk.",
   "It's too far to walk."
  ],
  "a": 0,
  "exp": "'Likewise' تعني وأنا كذلك، رد شائع عند لقاء أول.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Hey Karim, how's everything?\nB: ______",
  "o": [
   "Everything's great, thanks!",
   "He's my cousin.",
   "I don't have time.",
   "It's over there."
  ],
  "a": 0,
  "exp": "رد بسيط ومناسب على سؤال عام عن الحال.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Hey Zainab, how's everything?\nB: ______",
  "o": [
   "It's over there.",
   "Everything's great, thanks!",
   "I don't have time.",
   "He's my cousin."
  ],
  "a": 1,
  "exp": "رد بسيط ومناسب على سؤال عام عن الحال.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Hey Omar, how's everything?\nB: ______",
  "o": [
   "He's my cousin.",
   "I don't have time.",
   "Everything's great, thanks!",
   "It's over there."
  ],
  "a": 2,
  "exp": "رد بسيط ومناسب على سؤال عام عن الحال.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Hassan, this is my colleague Dina.\nB: ______",
  "o": [
   "Nice to meet you, Dina.",
   "The taxi is waiting.",
   "It's Monday today.",
   "I already ate lunch."
  ],
  "a": 0,
  "exp": "عند التعريف بشخص ثالث، نرد بالترحيب وذكر اسمه.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Mona, this is my colleague Sami.\nB: ______",
  "o": [
   "The taxi is waiting.",
   "Nice to meet you, Sami.",
   "I already ate lunch.",
   "It's Monday today."
  ],
  "a": 1,
  "exp": "عند التعريف بشخص ثالث، نرد بالترحيب وذكر اسمه.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Ali, this is my colleague Dina.\nB: ______",
  "o": [
   "It's Monday today.",
   "The taxi is waiting.",
   "I already ate lunch.",
   "Nice to meet you, Dina."
  ],
  "a": 3,
  "exp": "عند التعريف بشخص ثالث، نرد بالترحيب وذكر اسمه.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Have you two met? Mona, meet Yusuf.\nB: ______",
  "o": [
   "I forgot my keys.",
   "No, we haven't. Hi Yusuf, nice to meet you.",
   "It's a great movie.",
   "Yes, it's very cold."
  ],
  "a": 1,
  "exp": "رد مناسب عند تقديم شخصين لبعضهما لأول مرة.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Have you two met? Zainab, meet Dina.\nB: ______",
  "o": [
   "I forgot my keys.",
   "No, we haven't. Hi Dina, nice to meet you.",
   "Yes, it's very cold.",
   "It's a great movie."
  ],
  "a": 1,
  "exp": "رد مناسب عند تقديم شخصين لبعضهما لأول مرة.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Have you two met? Rana, meet Huda.\nB: ______",
  "o": [
   "I forgot my keys.",
   "It's a great movie.",
   "No, we haven't. Hi Huda, nice to meet you.",
   "Yes, it's very cold."
  ],
  "a": 2,
  "exp": "رد مناسب عند تقديم شخصين لبعضهما لأول مرة.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Could you help me carry this a jacket, please?\nB: ______",
  "o": [
   "I am fine, thanks.",
   "Sure, no problem.",
   "Yes, I like it very much.",
   "It's on the table."
  ],
  "a": 1,
  "exp": "الرد المناسب على طلب مساعدة هو القبول أو الرفض المباشر.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Could you help me carry this sunglasses, please?\nB: ______",
  "o": [
   "Yes, I like it very much.",
   "It's on the table.",
   "Sure, no problem.",
   "I am fine, thanks."
  ],
  "a": 2,
  "exp": "الرد المناسب على طلب مساعدة هو القبول أو الرفض المباشر.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Could you help me carry this a scarf, please?\nB: ______",
  "o": [
   "It's on the table.",
   "I am fine, thanks.",
   "Yes, I like it very much.",
   "Sure, no problem."
  ],
  "a": 3,
  "exp": "الرد المناسب على طلب مساعدة هو القبول أو الرفض المباشر.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Would you mind opening the door for me?\nB: ______",
  "o": [
   "Not at all, here you go.",
   "That's a nice color.",
   "It's five dollars.",
   "I saw him yesterday."
  ],
  "a": 0,
  "exp": "'Would you mind...?' سؤال مهذب لطلب مساعدة، يُجاب بالقبول أو الاعتذار.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Can I give you a hand with those bags?\nB: ______",
  "o": [
   "He lives nearby.",
   "It's Tuesday today.",
   "I don't have any bags.",
   "That would be great, thank you!"
  ],
  "a": 3,
  "exp": "عرض مساعدة يُقبل بالشكر أو يُرفض بلطف.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Excuse me, could you show me how to use this machine?\nB: ______",
  "o": [
   "She is my sister.",
   "I bought it last week.",
   "Of course, let me explain.",
   "It's very old."
  ],
  "a": 2,
  "exp": "طلب شرح أو توضيح يُجاب بالموافقة وتقديم المساعدة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Do you need any help with your homework?\nB: ______",
  "o": [
   "The store is closed.",
   "It's a sunny day.",
   "No, I finished eating.",
   "Yes, please. I'm stuck on this question."
  ],
  "a": 3,
  "exp": "عرض مساعدة يُقبل بذكر ما يحتاجه الشخص تحديداً.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: I'm having trouble with my computer. Can you take a look?\nB: ______",
  "o": [
   "I like coffee better.",
   "It's raining outside.",
   "Sure, let me see what's wrong.",
   "He's at work now."
  ],
  "a": 2,
  "exp": "طلب مساعدة تقنية يُجاب بالموافقة على المساعدة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Would you be able to lend me a hand tomorrow morning?\nB: ______",
  "o": [
   "I paid in cash.",
   "The train was late.",
   "It's my favorite restaurant.",
   "Yes, I'm free then. What do you need?"
  ],
  "a": 3,
  "exp": "طلب مساعدة مستقبلي يُجاب بتأكيد التوفر والسؤال عن التفاصيل.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Excuse me, would you mind helping me find my seat?\nB: ______",
  "o": [
   "Not at all. May I see your ticket?",
   "I don't drink coffee.",
   "That's a good book.",
   "It's too loud in here."
  ],
  "a": 0,
  "exp": "طلب مساعدة في مكان عام يُجاب بالموافقة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Can you spare a few minutes to review my report?\nB: ______",
  "o": [
   "Sure, send it over and I'll take a look.",
   "He called me yesterday.",
   "I'm not hungry right now.",
   "It's a long way from here."
  ],
  "a": 0,
  "exp": "طلب وقت للمساعدة يُجاب بالموافقة وتحديد الآلية.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: I can't reach the top shelf. Could you get that box for me?\nB: ______",
  "o": [
   "I already left.",
   "It's a great idea.",
   "The weather is nice today.",
   "Sure, hold on a second."
  ],
  "a": 3,
  "exp": "طلب مساعدة بسبب صعوبة جسدية يُجاب بالموافقة الفورية.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Would you like some help setting up the projector?\nB: ______",
  "o": [
   "It's very far from here.",
   "I have three children.",
   "No, I don't like tea.",
   "Yes, please. I'm not sure how it works."
  ],
  "a": 3,
  "exp": "عرض مساعدة تقنية يُقبل بذكر الحاجة الفعلية.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: My car broke down. Could you give me a ride?\nB: ______",
  "o": [
   "She works in a bank.",
   "It's a beautiful painting.",
   "Of course, hop in.",
   "I already ate breakfast."
  ],
  "a": 2,
  "exp": "طلب توصيلة عند تعطل السيارة يُجاب بالموافقة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Can I offer you some assistance with your luggage?\nB: ______",
  "o": [
   "That's very kind, thank you.",
   "He plays football well.",
   "It's closed on Sundays.",
   "I don't have any luggage with me."
  ],
  "a": 0,
  "exp": "عرض مساعدة يُقابَل بالشكر.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: I need someone to watch my kids for an hour. Could you help?\nB: ______",
  "o": [
   "It's a nice neighborhood.",
   "That movie was long.",
   "Sure, I'd be happy to.",
   "I bought two tickets."
  ],
  "a": 2,
  "exp": "طلب مساعدة برعاية الأطفال يُجاب بالموافقة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Could you pass me the salt, please?\nB: ______",
  "o": [
   "I don't like salt.",
   "Sure, here you are.",
   "It's five o'clock.",
   "He is a doctor."
  ],
  "a": 1,
  "exp": "طلب بسيط على الطاولة يُجاب بالتلبية الفورية.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Would you mind keeping an eye on my seat while I go to the restroom?\nB: ______",
  "o": [
   "I paid by card.",
   "It's my first time here.",
   "That's a nice jacket.",
   "No problem, go ahead."
  ],
  "a": 3,
  "exp": "طلب مراقبة مكان مؤقتاً يُجاب بالموافقة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: I'm new here. Could you point me to the manager's office?\nB: ______",
  "o": [
   "It's very hot today.",
   "Sure, it's down the hall on the left.",
   "I don't work here.",
   "She likes music."
  ],
  "a": 1,
  "exp": "طلب اتجاهات داخل مبنى يُجاب بتوضيح المكان.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Can you help me translate this letter?\nB: ______",
  "o": [
   "Sure, let me read it first.",
   "He arrived late.",
   "I don't speak English.",
   "It's a red car."
  ],
  "a": 0,
  "exp": "طلب مساعدة بالترجمة يُجاب بالموافقة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Excuse me, do you have a moment to help me with this form?\nB: ______",
  "o": [
   "I already filled it out.",
   "Of course. What do you need help with?",
   "It's closed today.",
   "That's an old building."
  ],
  "a": 1,
  "exp": "طلب مساعدة بملء استمارة يُجاب بالموافقة والاستفسار.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: My internet isn't working. Could you check the router?\nB: ______",
  "o": [
   "I don't have internet at home.",
   "It's a nice day outside.",
   "He bought a new phone.",
   "Sure, let me have a look."
  ],
  "a": 3,
  "exp": "طلب مساعدة تقنية منزلية يُجاب بالموافقة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: I need to move this table. Can you give me a hand?\nB: ______",
  "o": [
   "She's on vacation.",
   "Yeah, where do you want it?",
   "It's too expensive.",
   "I don't have a table."
  ],
  "a": 1,
  "exp": "طلب مساعدة بنقل شيء ثقيل يُجاب بالموافقة والاستفسار عن الوجهة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Could someone walk me through this process step by step?\nB: ______",
  "o": [
   "I finished my homework.",
   "The store just opened.",
   "I can do that. Let's start.",
   "It's a complicated recipe."
  ],
  "a": 2,
  "exp": "طلب شرح خطوة بخطوة يُجاب بالموافقة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Would you be willing to proofread my essay before I submit it?\nB: ______",
  "o": [
   "He teaches math.",
   "Sure, email it to me.",
   "I already submitted mine.",
   "It's raining hard."
  ],
  "a": 1,
  "exp": "طلب مراجعة عمل كتابي يُجاب بالموافقة وتحديد الوسيلة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: I'm lost. Could you help me find my way back to the hotel?\nB: ______",
  "o": [
   "I'm a tourist too.",
   "Sure, which hotel are you staying at?",
   "It's a lovely city.",
   "The shops close at ten."
  ],
  "a": 1,
  "exp": "طلب مساعدة لشخص تائه يُجاب بالموافقة والاستفسار عن التفاصيل.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Would you like to come to my birthday party on Monday?\nB: ______",
  "o": [
   "It's five kilometers away.",
   "I'd love to! Thanks for inviting me.",
   "He is my neighbor.",
   "I don't like parties."
  ],
  "a": 1,
  "exp": "الرد على دعوة يكون بالقبول بحماس أو الاعتذار بلطف.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I'm hosting a dinner tonight. Would you like to come?\nB: ______",
  "o": [
   "I'd love to, but I have other plans tonight.",
   "I bought a new car.",
   "It's very cold outside.",
   "He speaks three languages."
  ],
  "a": 0,
  "exp": "الاعتذار عن دعوة يكون بذكر سبب مهذب.",
  "tag": "الدعوات"
 },
 {
  "q": "A: Are you free to join us for coffee tomorrow?\nB: ______",
  "o": [
   "I don't drink coffee at all.",
   "It's on the third floor.",
   "He left the company.",
   "Sure, what time works for you?"
  ],
  "a": 3,
  "exp": "قبول دعوة يُتبع بالسؤال عن التفاصيل كالوقت.",
  "tag": "الدعوات"
 },
 {
  "q": "A: We're going to the beach on Saturday. Want to come along?\nB: ______",
  "o": [
   "It's a long book.",
   "That sounds fun! What time are we leaving?",
   "The shop is closed.",
   "I don't know how to swim."
  ],
  "a": 1,
  "exp": "قبول دعوة نشاط يُتبع بالاستفسار عن التفاصيل.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I'd like to invite you to my graduation ceremony.\nB: ______",
  "o": [
   "I'd be honored to attend. Congratulations!",
   "That's an old photo.",
   "It's raining today.",
   "I don't have a car."
  ],
  "a": 0,
  "exp": "دعوة لمناسبة مهمة يُرد عليها بالتشريف والتهنئة.",
  "tag": "الدعوات"
 },
 {
  "q": "A: Would you like to join our book club?\nB: ______",
  "o": [
   "I already read that book.",
   "I'd love to! When do you meet?",
   "He is very tall.",
   "It's too expensive."
  ],
  "a": 1,
  "exp": "قبول دعوة للانضمام لنشاط جماعي يُتبع بالاستفسار.",
  "tag": "الدعوات"
 },
 {
  "q": "A: My family is having a get-together on Friday. You're welcome to come.\nB: ______",
  "o": [
   "I don't like Fridays.",
   "She moved last month.",
   "It's a small apartment.",
   "Thank you so much for the invitation!"
  ],
  "a": 3,
  "exp": "شكر مهذب على الدعوة قبل الرد بالقبول أو الرفض.",
  "tag": "الدعوات"
 },
 {
  "q": "A: Can you make it to the wedding next month?\nB: ______",
  "o": [
   "It's a beautiful ring.",
   "I'll definitely be there!",
   "I don't own a suit.",
   "He works in finance."
  ],
  "a": 1,
  "exp": "تأكيد الحضور لمناسبة يُصاغ بعبارة حاسمة إيجابية.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I'm throwing a surprise party for Rana. Can you help me plan it?\nB: ______",
  "o": [
   "Absolutely, I'd love to help!",
   "I don't know {n}.",
   "He forgot his keys.",
   "It's a public holiday."
  ],
  "a": 0,
  "exp": "قبول المشاركة بالتخطيط لدعوة يُعبَّر عنه بالحماس.",
  "tag": "الدعوات"
 },
 {
  "q": "A: Would you care to join us for a movie night?\nB: ______",
  "o": [
   "Sounds fun, what are we watching?",
   "I don't have a television.",
   "She teaches English.",
   "It's a busy street."
  ],
  "a": 0,
  "exp": "قبول دعوة يُتبع بسؤال عن التفاصيل.",
  "tag": "الدعوات"
 },
 {
  "q": "A: We're celebrating our anniversary this Saturday. Please join us.\nB: ______",
  "o": [
   "It's a rainy season.",
   "He drives a truck.",
   "I don't like sweets.",
   "Congratulations! We'll be there."
  ],
  "a": 3,
  "exp": "الرد على دعوة احتفال يشمل التهنئة والتأكيد.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I have two extra tickets to the concert. Interested?\nB: ______",
  "o": [
   "Yes! I'd love to go with you.",
   "He is my uncle.",
   "I don't listen to music.",
   "It's a small room."
  ],
  "a": 0,
  "exp": "قبول عرض حضور فعالية يُعبَّر عنه بالحماس.",
  "tag": "الدعوات"
 },
 {
  "q": "A: Would you like to come over for lunch on Friday?\nB: ______",
  "o": [
   "I already have lunch every day.",
   "He is very shy.",
   "That would be lovely, thank you.",
   "It's a busy road."
  ],
  "a": 2,
  "exp": "قبول دعوة غداء يكون بالشكر والموافقة.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I'm afraid I can't make it to your event, I have a prior commitment.\nB: ______",
  "o": [
   "That's the best restaurant in town.",
   "No worries, maybe next time!",
   "It's a new phone model.",
   "He works from home."
  ],
  "a": 1,
  "exp": "الرد المهذب على اعتذار شخص آخر عن دعوة.",
  "tag": "الدعوات"
 },
 {
  "q": "A: We'd love for you to join our team for the trip next weekend.\nB: ______",
  "o": [
   "I don't own a suitcase.",
   "It's a quiet neighborhood.",
   "I really appreciate the invite, I'll be there!",
   "She studies medicine."
  ],
  "a": 2,
  "exp": "الرد الإيجابي على دعوة رحلة جماعية.",
  "tag": "الدعوات"
 },
 {
  "q": "A: Can you come to the housewarming party this evening?\nB: ______",
  "o": [
   "I don't like new houses.",
   "It's a very old car.",
   "Of course! What should I bring?",
   "He is allergic to cats."
  ],
  "a": 2,
  "exp": "قبول دعوة يُتبع بسؤال مجامل عمّا يمكن إحضاره.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I'm not sure I can attend the meeting on Wednesday. Can we reschedule?\nB: ______",
  "o": [
   "I already bought the tickets.",
   "He lives downtown.",
   "Sure, how about the next day instead?",
   "It's a wonderful idea."
  ],
  "a": 2,
  "exp": "اقتراح إعادة جدولة موعد يُقبل بتقديم بديل.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I'm so sorry I'm late. The bus was late.\nB: ______",
  "o": [
   "That's okay, don't worry about it.",
   "He arrived early.",
   "It's a nice restaurant.",
   "I don't accept apologies."
  ],
  "a": 0,
  "exp": "قبول اعتذار يكون بطمأنة الطرف الآخر.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I apologize for forgetting your birthday.\nB: ______",
  "o": [
   "I never forget anything.",
   "She likes chocolate.",
   "It's alright, thank you for remembering now.",
   "It's a public park."
  ],
  "a": 2,
  "exp": "الرد على اعتذار عن نسيان يكون بالتسامح.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I'm sorry for breaking your vase. I'll replace it.\nB: ______",
  "o": [
   "He collects stamps.",
   "Don't worry about it, accidents happen.",
   "I bought it in Paris.",
   "It was very expensive."
  ],
  "a": 1,
  "exp": "قبول اعتذار عن ضرر مادي يكون بالتسامح.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I apologize for the confusion earlier.\nB: ______",
  "o": [
   "I was very confused.",
   "She works in HR.",
   "No problem, it happens to everyone.",
   "It's a difficult subject."
  ],
  "a": 2,
  "exp": "قبول اعتذار يكون بالتخفيف من وطأة الموقف.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I'm really sorry for shouting at you yesterday.\nB: ______",
  "o": [
   "I wasn't there yesterday.",
   "He never shouts.",
   "It's okay, I understand you were stressed.",
   "It's a loud street."
  ],
  "a": 2,
  "exp": "قبول اعتذار عن تصرف انفعالي يكون بالتفهم.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I owe you an apology for missing the deadline.\nB: ______",
  "o": [
   "She works part-time.",
   "Thanks for saying that. Let's find a solution.",
   "It's a short document.",
   "The deadline was last year."
  ],
  "a": 1,
  "exp": "قبول اعتذار في سياق العمل يكون بالتركيز على الحل.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: Sorry for interrupting, but I have an urgent question.\nB: ______",
  "o": [
   "No problem, go ahead.",
   "He left early.",
   "It's a long meeting.",
   "I don't have any questions."
  ],
  "a": 0,
  "exp": "الرد على اعتذار عن مقاطعة يكون بالسماح بالمتابعة.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I'm sorry I couldn't make it to your presentation.\nB: ______",
  "o": [
   "It's a boring topic.",
   "That's alright, I'll send you the slides.",
   "The presentation was canceled.",
   "He is my manager."
  ],
  "a": 1,
  "exp": "الرد على اعتذار عن غياب يكون بحل بديل.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I apologize for the delay in my response.\nB: ______",
  "o": [
   "It's a formal letter.",
   "I replied immediately.",
   "No worries at all, I understand you're busy.",
   "She checks email rarely."
  ],
  "a": 2,
  "exp": "قبول اعتذار عن تأخر بالرد يكون بالتفهم.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I'm sorry, I think I took your umbrella by mistake.\nB: ______",
  "o": [
   "He bought a new one.",
   "I never carry an umbrella.",
   "Oh, that's fine, these things happen.",
   "It's going to rain tomorrow."
  ],
  "a": 2,
  "exp": "قبول اعتذار عن خطأ بسيط يكون بالتسامح.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: Please accept my apology for the misunderstanding.\nB: ______",
  "o": [
   "He speaks clearly.",
   "It's a complicated issue.",
   "I don't understand the problem.",
   "Apology accepted, let's move forward."
  ],
  "a": 3,
  "exp": "قبول اعتذار رسمي يكون بعبارة صريحة.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I'm sorry for not calling you back sooner.\nB: ______",
  "o": [
   "I called you five times.",
   "It's a new phone number.",
   "She lost her phone.",
   "It's fine, I know you've been busy."
  ],
  "a": 3,
  "exp": "قبول اعتذار عن تأخر بالاتصال يكون بالتفهم.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I feel terrible about missing our lunch date.\nB: ______",
  "o": [
   "He canceled the reservation.",
   "It's a fancy restaurant.",
   "I already ate without you.",
   "Don't be too hard on yourself, we can reschedule."
  ],
  "a": 3,
  "exp": "الرد على اعتذار مصحوب بشعور بالذنب يكون بالتخفيف والاقتراح.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I'm sorry for the noise last night, we had guests over.\nB: ______",
  "o": [
   "No problem at all, I didn't even notice.",
   "He moved out.",
   "It's a quiet building.",
   "I love loud parties."
  ],
  "a": 0,
  "exp": "قبول اعتذار عن إزعاج يكون بالتسامح.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I apologize if I offended you with my comment.\nB: ______",
  "o": [
   "I appreciate you saying that, it means a lot.",
   "He never comments.",
   "I wasn't offended by anything.",
   "It's an interesting comment."
  ],
  "a": 0,
  "exp": "قبول اعتذار عن كلام جارح يكون بتقدير الاعتذار.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: Sorry to keep you waiting, I overslept.\nB: ______",
  "o": [
   "It's a short wait.",
   "It's no trouble at all, take your time.",
   "He waited outside.",
   "I've been waiting for an hour."
  ],
  "a": 1,
  "exp": "قبول اعتذار عن الانتظار يكون بالطمأنة.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: Excuse me, this soup is cold. Could you heat it up?\nB: ______",
  "o": [
   "It's a nice restaurant.",
   "He ordered the same dish.",
   "The soup is very tasty.",
   "I'm so sorry, I'll take it back right away."
  ],
  "a": 3,
  "exp": "الرد على شكوى في مطعم يكون بالاعتذار وحل المشكلة.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: I've been waiting for over an hour for my order.\nB: ______",
  "o": [
   "The order was perfect.",
   "He just arrived.",
   "It's a busy day today.",
   "I apologize for the delay, let me check on it now."
  ],
  "a": 3,
  "exp": "الرد على شكوى من تأخير يكون بالاعتذار والمتابعة.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: I think there's a mistake on my bill.\nB: ______",
  "o": [
   "Let me check that for you right away.",
   "The bill was paid already.",
   "He never checks bills.",
   "It's a small restaurant."
  ],
  "a": 0,
  "exp": "الرد على اعتراض على فاتورة يكون بالتحقق الفوري.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: I'm not satisfied with the service I received today.\nB: ______",
  "o": [
   "The service was excellent.",
   "It's a five-star hotel.",
   "I understand, could you tell me more so I can fix it?",
   "He works nearby."
  ],
  "a": 2,
  "exp": "الرد على شكوى عامة يكون بطلب توضيح لحل المشكلة.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: My room hasn't been cleaned since I checked in.\nB: ______",
  "o": [
   "It's on the fifth floor.",
   "The room is very large.",
   "I apologize, I'll send housekeeping immediately.",
   "He checked out yesterday."
  ],
  "a": 2,
  "exp": "الرد على شكوى في فندق يكون بالاعتذار والحل السريع.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: This isn't what I ordered.\nB: ______",
  "o": [
   "I'm very sorry, let me bring you the correct order.",
   "He is the chef.",
   "It looks delicious.",
   "I ordered the same thing."
  ],
  "a": 0,
  "exp": "الرد على شكوى من طلب خاطئ يكون بالتصحيح الفوري.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: I've called three times and no one has fixed the issue.\nB: ______",
  "o": [
   "He never calls.",
   "I apologize for the inconvenience, I'll escalate this now.",
   "It's a common problem.",
   "The issue was fixed last week."
  ],
  "a": 1,
  "exp": "الرد على شكوى متكررة يكون بتصعيد الحل.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: The Wi-Fi in my room isn't working at all.\nB: ______",
  "o": [
   "The Wi-Fi is very fast.",
   "He doesn't use the internet.",
   "I'm sorry about that, I'll send a technician right away.",
   "It's a new router."
  ],
  "a": 2,
  "exp": "الرد على شكوى تقنية يكون بإرسال حل فني.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: I object to the extra charge on my receipt.\nB: ______",
  "o": [
   "You're right, let me remove that charge for you.",
   "It's a small amount.",
   "He paid in cash.",
   "The charge is correct and fair."
  ],
  "a": 0,
  "exp": "الرد على اعتراض مالي مبرر يكون بالتصحيح.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: This isn't the size I asked for.\nB: ______",
  "o": [
   "It's the last one in stock.",
   "He bought a different color.",
   "It fits perfectly.",
   "My apologies, let me get you the right size."
  ],
  "a": 3,
  "exp": "الرد على شكوى من مقاس خاطئ يكون بالتصحيح.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: I'm disappointed with how long the repair took.\nB: ______",
  "o": [
   "I completely understand, I'll offer you a discount for the delay.",
   "It's a complicated machine.",
   "The repair was very quick.",
   "He fixed it himself."
  ],
  "a": 0,
  "exp": "الرد على شكوى من تأخر إصلاح يكون بالتعويض.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: The flight was delayed and no one informed us.\nB: ______",
  "o": [
   "It's a short trip.",
   "The flight was on time.",
   "He missed the flight.",
   "I sincerely apologize, here is some information about compensation."
  ],
  "a": 3,
  "exp": "الرد على شكوى بخصوص رحلة طيران يكون بالاعتذار وتقديم حل.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: I'd like to complain about the noise from the construction site.\nB: ______",
  "o": [
   "It's a beautiful building.",
   "He lives far from there.",
   "The construction is almost finished.",
   "I understand your concern, I'll report it to the management."
  ],
  "a": 3,
  "exp": "الرد على شكوى بيئية يكون بأخذها على محمل الجد.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: This isn't acceptable, I want to speak to the manager.\nB: ______",
  "o": [
   "It's a small request.",
   "The manager is on vacation.",
   "Of course, let me get the manager for you right away.",
   "He is a new employee."
  ],
  "a": 2,
  "exp": "الرد على طلب تصعيد الشكوى يكون بالاستجابة الفورية.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: I paid for express shipping but it still took a week.\nB: ______",
  "o": [
   "Express shipping is always fast.",
   "He shipped it himself.",
   "It's a heavy package.",
   "I apologize, I'll refund the shipping fee immediately."
  ],
  "a": 3,
  "exp": "الرد على شكوى من تأخر شحن يكون بالتعويض.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: How much does this a bag cost?\nB: ______",
  "o": [
   "He likes it too.",
   "I bought it yesterday.",
   "It's on the second floor.",
   "It's twenty dollars."
  ],
  "a": 3,
  "exp": "سؤال عن السعر يُجاب بذكر السعر مباشرة.",
  "tag": "التسوق"
 },
 {
  "q": "A: Do you have this in a larger size?\nB: ______",
  "o": [
   "It's a nice color.",
   "I don't like large sizes.",
   "He wears medium.",
   "Let me check the stockroom for you."
  ],
  "a": 3,
  "exp": "سؤال عن مقاس متوفر يُجاب بالتحقق من التوفر.",
  "tag": "التسوق"
 },
 {
  "q": "A: Can I try this a laptop on?\nB: ______",
  "o": [
   "It's very expensive.",
   "Sure, the fitting room is right over there.",
   "It doesn't fit anyone.",
   "He bought it already."
  ],
  "a": 1,
  "exp": "طلب تجربة قطعة ملابس يُجاب بالإرشاد لغرفة القياس.",
  "tag": "التسوق"
 },
 {
  "q": "A: Is this item on sale?\nB: ______",
  "o": [
   "It's out of stock.",
   "No, we don't sell that.",
   "He returned it yesterday.",
   "Yes, it's 20% off today."
  ],
  "a": 3,
  "exp": "سؤال عن الخصومات يُجاب بذكر نسبة الخصم إن وجدت.",
  "tag": "التسوق"
 },
 {
  "q": "A: Do you accept credit cards?\nB: ______",
  "o": [
   "Yes, we accept all major cards.",
   "It closes at nine.",
   "He paid in cash.",
   "No, we only sell shoes."
  ],
  "a": 0,
  "exp": "سؤال عن طرق الدفع يُجاب بتوضيح الطرق المقبولة.",
  "tag": "التسوق"
 },
 {
  "q": "A: I'd like to return this, it doesn't fit.\nB: ______",
  "o": [
   "We don't sell that item.",
   "No problem, do you have the receipt?",
   "He bought two.",
   "It fits you perfectly."
  ],
  "a": 1,
  "exp": "طلب إرجاع منتج يُجاب بالتحقق من الفاتورة.",
  "tag": "التسوق"
 },
 {
  "q": "A: Can you gift-wrap this for me, please?\nB: ______",
  "o": [
   "It's a heavy item.",
   "Of course, that'll just take a minute.",
   "We don't have any wrapping paper.",
   "He doesn't like gifts."
  ],
  "a": 1,
  "exp": "طلب تغليف هدية يُجاب بالموافقة.",
  "tag": "التسوق"
 },
 {
  "q": "A: What time does the shop close today?\nB: ______",
  "o": [
   "It's closed on Fridays only.",
   "We open at 9 AM.",
   "He works until midnight.",
   "We close at 9 PM tonight."
  ],
  "a": 3,
  "exp": "سؤال عن وقت الإغلاق يُجاب بذكر الوقت مباشرة.",
  "tag": "التسوق"
 },
 {
  "q": "A: Do you have this in another color?\nB: ______",
  "o": [
   "Yes, we have it in blue and black too.",
   "He likes red.",
   "It's very heavy.",
   "No, we only sell shoes here."
  ],
  "a": 0,
  "exp": "سؤال عن ألوان أخرى يُجاب بذكر الألوان المتوفرة.",
  "tag": "التسوق"
 },
 {
  "q": "A: Excuse me, where can I find the electronics section?\nB: ______",
  "o": [
   "It's on the third floor, near the elevators.",
   "We don't sell electronics.",
   "It's very expensive there.",
   "He bought a laptop."
  ],
  "a": 0,
  "exp": "سؤال عن موقع قسم داخل متجر يُجاب بتحديد المكان.",
  "tag": "التسوق"
 },
 {
  "q": "A: Is there a discount if I buy more than one?\nB: ______",
  "o": [
   "It's the last one in stock.",
   "Yes, you get 10% off for two or more.",
   "He bought three.",
   "No, prices never change."
  ],
  "a": 1,
  "exp": "سؤال عن خصم الكمية يُجاب بتوضيح الشرط.",
  "tag": "التسوق"
 },
 {
  "q": "A: Can I get a refund instead of store credit?\nB: ______",
  "o": [
   "It's a final sale item.",
   "He wants store credit.",
   "Sure, I can process a refund to your card.",
   "We don't offer refunds ever."
  ],
  "a": 2,
  "exp": "طلب استرجاع نقدي يُجاب بالموافقة إن أمكن.",
  "tag": "التسوق"
 },
 {
  "q": "A: Do you have this item in stock?\nB: ______",
  "o": [
   "We closed early today.",
   "He bought the last one.",
   "Let me check the system for you.",
   "It's a beautiful design."
  ],
  "a": 2,
  "exp": "سؤال عن توفر منتج يُجاب بالتحقق.",
  "tag": "التسوق"
 },
 {
  "q": "A: I'm just browsing, thank you.\nB: ______",
  "o": [
   "Of course, let me know if you need any help.",
   "You must buy something.",
   "We don't allow browsing.",
   "It's closing time now."
  ],
  "a": 0,
  "exp": "الرد المهذب على عميل يتصفح فقط دون شراء.",
  "tag": "التسوق"
 },
 {
  "q": "A: Could I have a receipt for this purchase?\nB: ______",
  "o": [
   "He lost his receipt.",
   "It's a used item.",
   "Of course, here you go.",
   "We don't give receipts."
  ],
  "a": 2,
  "exp": "طلب فاتورة يُجاب بالتسليم الفوري.",
  "tag": "التسوق"
 },
 {
  "q": "A: Is this the final price or can we negotiate?\nB: ______",
  "o": [
   "It's free today.",
   "He negotiated a discount.",
   "This is a fixed price, I'm afraid.",
   "You can pay whatever you like."
  ],
  "a": 2,
  "exp": "سؤال عن إمكانية التفاوض يُجاب بتوضيح سياسة السعر.",
  "tag": "التسوق"
 },
 {
  "q": "A: Do you sell gift cards here?\nB: ______",
  "o": [
   "Yes, they're available at the checkout counter.",
   "It's only for members.",
   "He bought a watch.",
   "No, we stopped selling gifts."
  ],
  "a": 0,
  "exp": "سؤال عن بطاقات الهدايا يُجاب بتوضيح مكان الشراء.",
  "tag": "التسوق"
 },
 {
  "q": "A: Excuse me, how do I get to the post office from here?\nB: ______",
  "o": [
   "Go straight and turn left at the second light.",
   "It's very expensive to visit.",
   "I go there every day.",
   "He works there."
  ],
  "a": 0,
  "exp": "سؤال عن الاتجاهات يُجاب بوصف الطريق.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Is the mosque far from here?\nB: ______",
  "o": [
   "Yes, I really like it there.",
   "It's closed on Sundays.",
   "He visited last week.",
   "No, it's about a ten-minute walk."
  ],
  "a": 3,
  "exp": "سؤال عن المسافة يُجاب بتقدير الزمن أو المسافة.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Which bus goes to the city center?\nB: ______",
  "o": [
   "The bus is very crowded.",
   "He missed the bus.",
   "Take the number 12 bus from that stop.",
   "It costs two dollars."
  ],
  "a": 2,
  "exp": "سؤال عن خط الحافلة يُجاب بذكر رقم الحافلة.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Can you tell me the way to the nearest pharmacy?\nB: ______",
  "o": [
   "Sure, it's just around the corner, next to the bakery.",
   "He is a pharmacist.",
   "The pharmacy is closed today.",
   "I need some medicine too."
  ],
  "a": 0,
  "exp": "سؤال عن أقرب مكان يُجاب بتحديد الموقع.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Excuse me, I'm looking for the stadium. Am I going the right way?\nB: ______",
  "o": [
   "He got lost too.",
   "You are walking too fast.",
   "It's a lovely place.",
   "Actually, you need to go back and turn right."
  ],
  "a": 3,
  "exp": "سؤال للتأكد من الاتجاه الصحيح يُجاب بالتصحيح إن لزم.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: How long does it take to walk to the train station?\nB: ______",
  "o": [
   "I take the train every day.",
   "It usually takes about fifteen minutes.",
   "He drives instead.",
   "The train station is very old."
  ],
  "a": 1,
  "exp": "سؤال عن الوقت اللازم للوصول يُجاب بتقدير الزمن.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Do I need to take a taxi to get there, or can I walk?\nB: ______",
  "o": [
   "It's within walking distance, so you can walk.",
   "He never walks anywhere.",
   "It's a dangerous area.",
   "Taxis are always available."
  ],
  "a": 0,
  "exp": "سؤال عن طريقة الوصول يُجاب بالنصح المناسب.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Where is the nearest bus stop?\nB: ______",
  "o": [
   "He waits there daily.",
   "It's right across the street, next to the shop.",
   "It's a modern bus.",
   "The bus comes every hour."
  ],
  "a": 1,
  "exp": "سؤال عن أقرب موقف حافلة يُجاب بتحديد المكان.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: I think I'm lost. Can you help me find my way to the hotel?\nB: ______",
  "o": [
   "He checked out already.",
   "Sure, which hotel are you looking for?",
   "It's a five-star hotel.",
   "I'm lost too, actually."
  ],
  "a": 1,
  "exp": "طلب مساعدة من شخص تائه يُجاب بطرح سؤال توضيحي.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Should I turn left or right at the traffic light?\nB: ______",
  "o": [
   "It's a busy intersection.",
   "Turn right, then continue straight for two blocks.",
   "The traffic light is broken.",
   "He drives carefully."
  ],
  "a": 1,
  "exp": "سؤال عن اتجاه محدد يُجاب بتوضيح دقيق.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Is there a shortcut to the park from here?\nB: ______",
  "o": [
   "There's no other way to get there.",
   "It's a beautiful park.",
   "He avoids shortcuts.",
   "Yes, you can cut through the park to save time."
  ],
  "a": 3,
  "exp": "سؤال عن طريق مختصر يُجاب بتقديم بديل أسرع.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: How far is the airport from downtown?\nB: ______",
  "o": [
   "I flew there last year.",
   "The airport is very busy.",
   "It's about thirty minutes by car.",
   "He works at the airport."
  ],
  "a": 2,
  "exp": "سؤال عن مسافة لمكان بعيد يُجاب بتقدير الوقت بالسيارة.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Which exit should I take for the museum?\nB: ______",
  "o": [
   "The museum is very interesting.",
   "He visited twice.",
   "It's closed on Mondays.",
   "Take exit 5 and follow the signs."
  ],
  "a": 3,
  "exp": "سؤال عن مخرج طريق سريع يُجاب برقم المخرج.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Can you point me toward the nearest ATM?\nB: ______",
  "o": [
   "He withdrew cash earlier.",
   "I don't use ATMs.",
   "ATMs are always busy.",
   "Sure, there's one inside the supermarket."
  ],
  "a": 3,
  "exp": "سؤال عن أقرب صراف آلي يُجاب بتحديد المكان.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Do I cross the bridge to get to the airport?\nB: ______",
  "o": [
   "He built that bridge.",
   "Yes, cross the bridge and it will be on your right.",
   "I crossed it yesterday.",
   "The bridge is very old."
  ],
  "a": 1,
  "exp": "سؤال عن عبور جسر للوصول لمكان يُجاب بالتأكيد وتوضيح الاتجاه.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Hello, may I speak to Lina, please?\nB: ______",
  "o": [
   "Speaking. How can I help you?",
   "He is out of the country.",
   "I don't know that person.",
   "It's a wrong number."
  ],
  "a": 0,
  "exp": "الرد عند استقبال مكالمة موجهة للشخص نفسه: 'Speaking.'",
  "tag": "الهاتف"
 },
 {
  "q": "A: Hi, is Huda available right now?\nB: ______",
  "o": [
   "I'm sorry, he's in a meeting. Can I take a message?",
   "It's a busy line.",
   "He never answers his phone.",
   "The call dropped."
  ],
  "a": 0,
  "exp": "الرد عند عدم توفر الشخص المطلوب يكون بعرض تدوين رسالة.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Could you please hold for a moment?\nB: ______",
  "o": [
   "It's a short call.",
   "Sure, no problem.",
   "He hung up already.",
   "I can't hold anything."
  ],
  "a": 1,
  "exp": "الرد على طلب الانتظار على الخط يكون بالموافقة.",
  "tag": "الهاتف"
 },
 {
  "q": "A: I'm sorry, you have the wrong number.\nB: ______",
  "o": [
   "He called twice.",
   "Oh, I apologize for the confusion.",
   "That's exactly the right number.",
   "It's a private number."
  ],
  "a": 1,
  "exp": "الرد عند اكتشاف رقم خاطئ يكون بالاعتذار.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Can I leave a message for Sami?\nB: ______",
  "o": [
   "The line is busy.",
   "It's a long message.",
   "He doesn't take messages.",
   "Of course, go ahead."
  ],
  "a": 3,
  "exp": "طلب ترك رسالة يُجاب بالسماح بذلك.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Sorry, the line is breaking up. Can you hear me?\nB: ______",
  "o": [
   "It's a new phone model.",
   "He is very loud.",
   "I never use the phone.",
   "I can hear you a little better now."
  ],
  "a": 3,
  "exp": "الرد على مشكلة في وضوح الصوت يكون بوصف الوضع الحالي.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Could you spell your last name for me, please?\nB: ______",
  "o": [
   "He forgot his name.",
   "I don't have a last name.",
   "Sure, it's S-M-I-T-H.",
   "It's a common name."
  ],
  "a": 2,
  "exp": "طلب تهجئة اسم عبر الهاتف يُجاب بذكر الحروف.",
  "tag": "الهاتف"
 },
 {
  "q": "A: I'm calling to confirm my appointment for tomorrow.\nB: ______",
  "o": [
   "Let me check the schedule for you.",
   "The appointment was canceled last year.",
   "He confirmed his too.",
   "I don't have any appointments."
  ],
  "a": 0,
  "exp": "الرد على تأكيد موعد هاتفياً يكون بالتحقق من الجدول.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Do you have Karim's phone number?\nB: ______",
  "o": [
   "He changed his number.",
   "Yes, let me text it to you.",
   "I don't have a phone.",
   "It's a private matter."
  ],
  "a": 1,
  "exp": "طلب رقم هاتف شخص يُجاب بالمساعدة.",
  "tag": "الهاتف"
 },
 {
  "q": "A: My phone battery is about to die, I'll call you later.\nB: ______",
  "o": [
   "He lost his phone.",
   "I never charge my phone.",
   "Okay, talk to you soon!",
   "It's a new charger."
  ],
  "a": 2,
  "exp": "الرد على إشعار بانتهاء البطارية يكون بالتفهم.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Could you please repeat that? I didn't catch it.\nB: ______",
  "o": [
   "I already told you twice.",
   "It's a private conversation.",
   "He speaks too fast.",
   "Sure, I said the meeting is at 3 PM."
  ],
  "a": 3,
  "exp": "طلب إعادة الكلام يُجاب بتكرار المعلومة بوضوح.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Is this a good time to talk?\nB: ______",
  "o": [
   "Yes, go ahead, I'm listening.",
   "I never have free time.",
   "He is asleep.",
   "It's midnight right now."
  ],
  "a": 0,
  "exp": "سؤال عن ملاءمة وقت المكالمة يُجاب بالتأكيد أو الاعتذار.",
  "tag": "الهاتف"
 },
 {
  "q": "A: I'm returning your call from earlier.\nB: ______",
  "o": [
   "Thanks for calling back, I have a quick question.",
   "I never called you.",
   "He is out today.",
   "It's a wrong number."
  ],
  "a": 0,
  "exp": "الرد على معاودة اتصال يكون بشكر المتصل.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Shall we meet at 10 AM tomorrow?\nB: ______",
  "o": [
   "He never meets anyone.",
   "I completely disagree.",
   "Sounds good to me.",
   "It's a nice place."
  ],
  "a": 2,
  "exp": "الموافقة على اقتراح تكون بعبارة إيجابية بسيطة.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: I think we should postpone the meeting. Do you agree?\nB: ______",
  "o": [
   "He arrived early.",
   "Yes, I think that's a good idea.",
   "No, meetings are always on time.",
   "It's a large room."
  ],
  "a": 1,
  "exp": "الموافقة على رأي تكون بتأييد الفكرة.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Would you like to switch seats with me?\nB: ______",
  "o": [
   "Yes, this seat is broken.",
   "It's a comfortable seat.",
   "I'd rather not, but thank you for asking.",
   "He is sitting there."
  ],
  "a": 2,
  "exp": "الرفض المهذب يكون بعبارة لطيفة مع الشكر.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Can we reschedule our appointment to next week?\nB: ______",
  "o": [
   "It's too late now.",
   "That works for me.",
   "I never make appointments.",
   "He canceled his."
  ],
  "a": 1,
  "exp": "الموافقة على تغيير موعد تكون بعبارة قبول بسيطة.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Do you want to split the bill?\nB: ______",
  "o": [
   "It's a cheap restaurant.",
   "I never pay for anything.",
   "Sure, that's fair.",
   "He already paid."
  ],
  "a": 2,
  "exp": "الموافقة على اقتراح مالي تكون بتأييد العدالة فيه.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Would you be interested in joining the committee?\nB: ______",
  "o": [
   "He joined last year.",
   "Yes, committees are boring.",
   "It's a small group.",
   "I'm afraid I have to decline, I'm too busy."
  ],
  "a": 3,
  "exp": "الرفض المهذب لعرض انضمام يكون بذكر سبب.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Let's go with option B instead of option A.\nB: ______",
  "o": [
   "Option A is more expensive.",
   "I refuse to consider that.",
   "I agree, option B seems better.",
   "He prefers option C."
  ],
  "a": 2,
  "exp": "الموافقة على اختيار تكون بتأييد السبب.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Can you cover my shift on Sunday?\nB: ______",
  "o": [
   "Sure, shifts are always easy.",
   "He works nights.",
   "It's a long shift.",
   "I'm sorry, I already have plans that day."
  ],
  "a": 3,
  "exp": "الرفض بسبب التزام سابق يكون بذكر السبب باعتذار.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Do you think we should hire her for the position?\nB: ______",
  "o": [
   "He applied too.",
   "No, hiring is never necessary.",
   "It's a difficult position.",
   "Absolutely, she has great qualifications."
  ],
  "a": 3,
  "exp": "الموافقة على قرار توظيف تكون بذكر سبب داعم.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: I'd like to propose a toast to our success.\nB: ______",
  "o": [
   "He gave a speech.",
   "I'll gladly raise my glass to that!",
   "It's a formal event.",
   "I don't drink at all."
  ],
  "a": 1,
  "exp": "الموافقة الحماسية على اقتراح احتفالي.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Should we cancel the trip due to the weather?\nB: ______",
  "o": [
   "No, weather never matters.",
   "I think that's a wise decision.",
   "He packed his bags.",
   "It's a long trip."
  ],
  "a": 1,
  "exp": "الموافقة على قرار حذر تكون بتأييد الحكمة فيه.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Can I borrow your car this weekend?\nB: ______",
  "o": [
   "I'm sorry, I need it myself this time.",
   "It's a new car.",
   "He doesn't drive.",
   "Sure, cars are cheap to rent."
  ],
  "a": 0,
  "exp": "الرفض المهذب لطلب استعارة يكون بذكر السبب.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Do you agree that we need more staff?\nB: ______",
  "o": [
   "Definitely, we're understaffed right now.",
   "No, we have too many staff.",
   "He just quit.",
   "It's a small office."
  ],
  "a": 0,
  "exp": "الموافقة على رأي إداري تكون بتأييد الملاحظة.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Would you consider working overtime this week?\nB: ______",
  "o": [
   "He works overtime often.",
   "I'd rather not, I have family commitments.",
   "It's a short week.",
   "Sure, overtime is never tiring."
  ],
  "a": 1,
  "exp": "الرفض المهذب لطلب عمل إضافي يكون بذكر التزام شخصي.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: I can't decide what to study at university. Any advice?\nB: ______",
  "o": [
   "Studying isn't important.",
   "You should ask a stranger.",
   "You should pick randomly.",
   "Why don't you choose something you're passionate about?"
  ],
  "a": 3,
  "exp": "نصيحة اختيار تخصص تكون بالتفكير بالشغف الشخصي.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I'm always tired in the mornings. What do you suggest?\nB: ______",
  "o": [
   "You should drink more coffee all day.",
   "Maybe you should try going to bed earlier.",
   "You should skip breakfast.",
   "You should sleep less."
  ],
  "a": 1,
  "exp": "اقتراح لمشكلة صحية بسيطة يتعلق بتحسين نمط النوم.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I want to save more money. Do you have any tips?\nB: ______",
  "o": [
   "You should spend more on luxuries.",
   "Saving money is impossible.",
   "You should never plan ahead.",
   "You could try setting a monthly budget."
  ],
  "a": 3,
  "exp": "نصيحة مالية عملية تتعلق بوضع ميزانية.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: My back hurts after sitting all day. Any suggestions?\nB: ______",
  "o": [
   "You should avoid moving at all.",
   "You should sit even longer.",
   "You should ignore the pain.",
   "You should take short breaks to stretch."
  ],
  "a": 3,
  "exp": "نصيحة صحية بسيطة تتعلق بأخذ فترات راحة.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I'm nervous about my job interview tomorrow. What should I do?\nB: ______",
  "o": [
   "You shouldn't prepare at all.",
   "You should arrive very late.",
   "You should cancel the interview.",
   "You should prepare answers to common questions tonight."
  ],
  "a": 3,
  "exp": "نصيحة قبل مقابلة عمل تتعلق بالتحضير المسبق.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I keep forgetting my appointments. What can I do?\nB: ______",
  "o": [
   "You should ignore your calendar.",
   "Forgetting is completely normal.",
   "Why don't you set reminders on your phone?",
   "You should stop making appointments."
  ],
  "a": 2,
  "exp": "اقتراح عملي لتنظيم المواعيد.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I want to improve my English speaking skills. Any advice?\nB: ______",
  "o": [
   "Reading alone is enough.",
   "You should practice speaking with native speakers regularly.",
   "You should avoid speaking entirely.",
   "You should stop studying English."
  ],
  "a": 1,
  "exp": "نصيحة لتحسين مهارة تعلم لغة تتعلق بالممارسة.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I feel stressed about my exams next week. What should I do?\nB: ______",
  "o": [
   "You should ignore the exams.",
   "Stress will disappear on its own.",
   "Try to make a study schedule and take breaks.",
   "You should stop studying completely."
  ],
  "a": 2,
  "exp": "نصيحة للتعامل مع ضغط الامتحانات تتعلق بالتنظيم.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I want to eat healthier but don't know where to start.\nB: ______",
  "o": [
   "Healthy eating is unnecessary.",
   "You could start by adding more vegetables to your meals.",
   "You should eat only desserts.",
   "You should skip all meals."
  ],
  "a": 1,
  "exp": "نصيحة صحية بسيطة تتعلق بالبدء التدريجي.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: My plants keep dying. What am I doing wrong?\nB: ______",
  "o": [
   "You should keep them in the dark.",
   "You might be overwatering them, try watering less often.",
   "Plants don't need water.",
   "You should water them every hour."
  ],
  "a": 1,
  "exp": "نصيحة عملية بخصوص العناية بالنباتات.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I want to start exercising but I'm not sure how.\nB: ______",
  "o": [
   "Why don't you start with a short walk every day?",
   "You should start with extreme workouts immediately.",
   "Exercise isn't necessary.",
   "You should avoid all movement."
  ],
  "a": 0,
  "exp": "نصيحة للمبتدئين تتعلق بالبدء التدريجي في الرياضة.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I'm having trouble focusing while studying. Any tips?\nB: ______",
  "o": [
   "You should study in a noisy place.",
   "Try studying in short sessions with breaks in between.",
   "You should study for twelve hours straight.",
   "Focus doesn't matter."
  ],
  "a": 1,
  "exp": "نصيحة لتحسين التركيز أثناء الدراسة.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: Our team's productivity has dropped. What do you suggest?\nB: ______",
  "o": [
   "Maybe we should have a meeting to identify the issues.",
   "We should work fewer hours.",
   "We should ignore the problem.",
   "We should hire no one."
  ],
  "a": 0,
  "exp": "اقتراح إداري لحل مشكلة إنتاجية.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I want to make new friends in this city. Any advice?\nB: ______",
  "o": [
   "You should stay home all the time.",
   "You should avoid social events.",
   "You should join a local club or group activity.",
   "Making friends is impossible as an adult."
  ],
  "a": 2,
  "exp": "نصيحة اجتماعية تتعلق بالانضمام لأنشطة.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: Thank you so much for helping me move last weekend.\nB: ______",
  "o": [
   "I didn't help you at all.",
   "You're welcome, happy to help anytime!",
   "He moved too.",
   "It's a heavy sofa."
  ],
  "a": 1,
  "exp": "الرد على شكر يكون بعبارة ترحيب بسيطة.",
  "tag": "الشكر"
 },
 {
  "q": "A: I really appreciate you taking the time to explain this.\nB: ______",
  "o": [
   "He explained it wrong.",
   "I don't have time for that.",
   "It's my pleasure, anytime you need help.",
   "It's a difficult topic."
  ],
  "a": 2,
  "exp": "الرد على شكر يكون بالتعبير عن السرور بالمساعدة.",
  "tag": "الشكر"
 },
 {
  "q": "A: I can't thank you enough for your support during this difficult time.\nB: ______",
  "o": [
   "It's a hard time for everyone.",
   "Of course, that's what friends are for.",
   "I didn't do much really.",
   "He supported me too."
  ],
  "a": 1,
  "exp": "الرد على شكر عميق يكون بعبارة دافئة.",
  "tag": "الشكر"
 },
 {
  "q": "A: Thank you for waiting for me, I'm sorry I'm late.\nB: ______",
  "o": [
   "I waited for two hours.",
   "He was late too.",
   "No problem at all, don't worry about it.",
   "It's a busy street."
  ],
  "a": 2,
  "exp": "الرد على شكر مصحوب باعتذار يكون بالطمأنة.",
  "tag": "الشكر"
 },
 {
  "q": "A: I wanted to thank you for recommending me for the job.\nB: ______",
  "o": [
   "You deserved it, congratulations!",
   "I didn't recommend anyone.",
   "It's a difficult job.",
   "He got the job too."
  ],
  "a": 0,
  "exp": "الرد على شكر يتعلق بمساعدة مهنية يكون بالتهنئة.",
  "tag": "الشكر"
 },
 {
  "q": "A: Thanks for driving me to the airport this morning.\nB: ______",
  "o": [
   "He missed his flight.",
   "It's a long drive.",
   "Anytime, safe travels!",
   "I don't have a car."
  ],
  "a": 2,
  "exp": "الرد على شكر بعد تقديم مساعدة عملية يكون بتمني السلامة.",
  "tag": "الشكر"
 },
 {
  "q": "A: I'm so grateful for all your advice over the years.\nB: ______",
  "o": [
   "He ignored my advice.",
   "It's good advice generally.",
   "That means a lot to me, thank you for saying so.",
   "I never gave you any advice."
  ],
  "a": 2,
  "exp": "الرد على شكر عاطفي عميق يكون بالتعبير عن التقدير.",
  "tag": "الشكر"
 },
 {
  "q": "A: Thank you for covering my shift yesterday.\nB: ______",
  "o": [
   "He works mornings.",
   "It's a night shift.",
   "I didn't cover anyone's shift.",
   "No worries, I know you'd do the same for me."
  ],
  "a": 3,
  "exp": "الرد على شكر بخصوص تبادل مساعدة يكون بالمعاملة بالمثل.",
  "tag": "الشكر"
 },
 {
  "q": "A: Thanks for the delicious meal, everything was perfect.\nB: ______",
  "o": [
   "It's an expensive restaurant.",
   "The meal was actually terrible.",
   "I'm so glad you enjoyed it!",
   "He cooked it."
  ],
  "a": 2,
  "exp": "الرد على شكر بعد وجبة يكون بالتعبير عن السرور.",
  "tag": "الشكر"
 },
 {
  "q": "A: I owe you a huge thank you for fixing my computer.\nB: ______",
  "o": [
   "I broke your computer.",
   "It's an old computer.",
   "Don't mention it, I enjoy doing that kind of thing.",
   "He bought a new one."
  ],
  "a": 2,
  "exp": "الرد على شكر بعد مساعدة تقنية يكون بالتقليل من الجهد المبذول.",
  "tag": "الشكر"
 },
 {
  "q": "A: Do you believe technology has made our lives better?\nB: ______",
  "o": [
   "It's a new phone.",
   "I think it has, though it also brings new challenges.",
   "He avoids technology.",
   "Technology doesn't exist."
  ],
  "a": 1,
  "exp": "التعبير عن رأي متوازن حول موضوع نقاشي.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: What's your take on the new company policy?\nB: ______",
  "o": [
   "It's a long document.",
   "He wrote the policy.",
   "Honestly, I think it needs some adjustments.",
   "I have no opinion on policies."
  ],
  "a": 2,
  "exp": "التعبير عن رأي نقدي بلباقة.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: I personally think we should focus more on renewable energy.\nB: ______",
  "o": [
   "I disagree, renewable energy is useless.",
   "It's a hot topic in the news.",
   "I agree, it's better for the environment in the long run.",
   "He works in oil."
  ],
  "a": 2,
  "exp": "الاتفاق مع رأي مطروح مع إضافة سبب.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: Some people say social media does more harm than good. What do you think?\nB: ______",
  "o": [
   "It's a popular app.",
   "I never use social media.",
   "He has many followers.",
   "I see both sides, but I lean toward agreeing with that."
  ],
  "a": 3,
  "exp": "التعبير عن رأي متوازن مع الميل لجانب معين.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: Do you think students should have more homework?\nB: ______",
  "o": [
   "He never does homework.",
   "Students should never study.",
   "Not really, I believe quality matters more than quantity.",
   "Homework is a new invention."
  ],
  "a": 2,
  "exp": "التعبير عن رأي تعليمي مع تبرير.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: In your opinion, is it better to live in a big city or a small town?\nB: ______",
  "o": [
   "Personally, I prefer small towns for the quiet lifestyle.",
   "Cities don't exist.",
   "I've never lived anywhere.",
   "He moved abroad."
  ],
  "a": 0,
  "exp": "التعبير عن تفضيل شخصي مع سبب.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: What's your opinion on this new law?\nB: ______",
  "o": [
   "It's a long document.",
   "Laws are never necessary.",
   "He voted against it.",
   "I think it's a step in the right direction, overall."
  ],
  "a": 3,
  "exp": "التعبير عن رأي إيجابي حول موضوع قانوني.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: Do you agree that reading books is more valuable than watching videos?\nB: ______",
  "o": [
   "Videos are always better.",
   "I'd say it depends on the content, not just the format.",
   "He never reads.",
   "Books don't exist anymore."
  ],
  "a": 1,
  "exp": "التعبير عن رأي متوازن يرفض التعميم.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: I think remote learning is just as effective as in-person classes.\nB: ______",
  "o": [
   "I'm not entirely convinced, I think in-person has advantages too.",
   "Learning is unimportant.",
   "I completely agree with no doubts.",
   "He never attends class."
  ],
  "a": 0,
  "exp": "الاختلاف بلباقة مع رأي مطروح.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: What do you think is the biggest challenge facing young people today?\nB: ______",
  "o": [
   "I believe it's finding stable job opportunities.",
   "Young people have no challenges.",
   "He is unemployed.",
   "It's a difficult exam."
  ],
  "a": 0,
  "exp": "التعبير عن رأي حول قضية اجتماعية.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: Do you think artificial intelligence will replace most jobs?\nB: ______",
  "o": [
   "I think it will change many jobs, but not eliminate them entirely.",
   "It's a science fiction movie.",
   "AI doesn't affect anything.",
   "He works with robots."
  ],
  "a": 0,
  "exp": "التعبير عن رأي متوازن حول تأثير التكنولوجيا.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: Some argue that fast food should be taxed more heavily. Your thoughts?\nB: ______",
  "o": [
   "I have no thoughts on taxes.",
   "I actually support that, it could encourage healthier choices.",
   "He owns a restaurant.",
   "Fast food is always healthy."
  ],
  "a": 1,
  "exp": "دعم رأي اقتصادي/صحي مع سبب.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: What do you think makes a good leader?\nB: ______",
  "o": [
   "Leaders don't need any qualities.",
   "I believe honesty and the ability to listen are essential.",
   "He is not a leader.",
   "It's a management book."
  ],
  "a": 1,
  "exp": "التعبير عن رأي حول صفات القيادة.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: Good evening, do you have a reservation?\nB: ______",
  "o": [
   "No, I don't like reservations.",
   "Yes, it's under the name Huda.",
   "He made it yesterday.",
   "It's a nice restaurant."
  ],
  "a": 1,
  "exp": "سؤال عن حجز في مطعم يُجاب بتأكيد الحجز واسم صاحبه.",
  "tag": "في المطعم"
 },
 {
  "q": "A: What would you like to drink?\nB: ______",
  "o": [
   "It's a hot day.",
   "I'll have a glass of orange juice, please.",
   "I don't drink anything.",
   "He likes coffee."
  ],
  "a": 1,
  "exp": "سؤال عن المشروبات يُجاب بذكر الطلب.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Would you like to see the dessert menu?\nB: ______",
  "o": [
   "It's a long menu.",
   "No, I don't eat desserts, ever.",
   "He is on a diet.",
   "Yes, please, that sounds great."
  ],
  "a": 3,
  "exp": "سؤال عن قائمة الحلويات يُجاب بالقبول أو الرفض.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Is everything to your satisfaction?\nB: ______",
  "o": [
   "Yes, everything is delicious, thank you.",
   "He left early.",
   "No, I'm not hungry.",
   "It's a crowded place."
  ],
  "a": 0,
  "exp": "سؤال النادل عن الرضا عن الوجبة يُجاب بالتقييم.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Would you like separate checks or one bill?\nB: ______",
  "o": [
   "I don't want to pay.",
   "It's an expensive meal.",
   "Separate checks, please.",
   "He already paid."
  ],
  "a": 2,
  "exp": "سؤال عن طريقة تقسيم الفاتورة يُجاب بتحديد التفضيل.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Can I get you anything else?\nB: ______",
  "o": [
   "No, thank you, that's all for now.",
   "He wants more bread.",
   "It's a small table.",
   "Yes, I want to leave."
  ],
  "a": 0,
  "exp": "سؤال النادل عن طلبات إضافية يُجاب بالنفي أو الإضافة.",
  "tag": "في المطعم"
 },
 {
  "q": "A: The food here looks amazing! What do you recommend?\nB: ______",
  "o": [
   "It's a new restaurant.",
   "He doesn't like chicken.",
   "The grilled chicken is our specialty, I'd recommend that.",
   "I've never eaten here."
  ],
  "a": 2,
  "exp": "طلب توصية من النادل يُجاب باقتراح طبق مميز.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Could we get a table for four, please?\nB: ______",
  "o": [
   "He reserved a table.",
   "We only have tables for two.",
   "Of course, please follow me.",
   "It's fully booked forever."
  ],
  "a": 2,
  "exp": "طلب طاولة يُجاب بالترحيب والإرشاد.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Excuse me, could we get some more water, please?\nB: ______",
  "o": [
   "We don't serve water here.",
   "He drank it all.",
   "Of course, I'll bring it right away.",
   "It's a hot day."
  ],
  "a": 2,
  "exp": "طلب مياه إضافية في مطعم يُجاب بالتلبية الفورية.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Is this dish spicy?\nB: ______",
  "o": [
   "It's not food at all.",
   "He doesn't like spicy food.",
   "It's a cold dish.",
   "It has a mild kick, but it's not too spicy."
  ],
  "a": 3,
  "exp": "سؤال عن حدة التوابل في طبق يُجاب بوصف مستوى الحرارة.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Do you take reservations for large groups?\nB: ______",
  "o": [
   "No, we never take reservations.",
   "Yes, for groups over eight we recommend booking a day ahead.",
   "It's a small restaurant.",
   "He booked a table for two."
  ],
  "a": 1,
  "exp": "سؤال عن حجز لمجموعات كبيرة يُجاب بتوضيح السياسة.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Morning! Did you sleep well?\nB: ______",
  "o": [
   "He lives upstairs.",
   "Yes, I did, thank you for asking.",
   "It's ten dollars.",
   "I don't like mornings."
  ],
  "a": 1,
  "exp": "سؤال ودي صباحي يُجاب بوصف حال النوم.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: I heard you just moved to town. Welcome!\nB: ______",
  "o": [
   "I sold my car.",
   "It's a beautiful painting.",
   "He travels a lot.",
   "Thank you! I'm still getting settled in."
  ],
  "a": 3,
  "exp": "الرد على ترحيب بقادم جديد يكون بالشكر ووصف الحال.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Haven't seen you in ages! You look great.\nB: ______",
  "o": [
   "I bought new shoes.",
   "Thank you, you too! It's been way too long.",
   "He works downtown.",
   "It's a small gift."
  ],
  "a": 1,
  "exp": "الرد على مجاملة مع تحية لقاء بعد غياب.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Is this your first time at this event?\nB: ______",
  "o": [
   "No, I organized it.",
   "It's a formal event.",
   "Yes, actually, a friend invited me.",
   "He didn't come."
  ],
  "a": 2,
  "exp": "سؤال عن أول حضور لحدث يُجاب بالوصف.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: I just wanted to introduce myself, I'm your new neighbor.\nB: ______",
  "o": [
   "I don't have neighbors.",
   "Oh wonderful, welcome to the building!",
   "He moved out.",
   "It's a quiet street."
  ],
  "a": 1,
  "exp": "الرد على تعارف جار جديد يكون بالترحيب.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Good to meet you at last, I've heard great things.\nB: ______",
  "o": [
   "It's a big company.",
   "I've never heard of you.",
   "That's very kind, likewise!",
   "He works remotely."
  ],
  "a": 2,
  "exp": "الرد على مجاملة تعارف يكون بالشكر.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Would you help me proofread this email before I send it?\nB: ______",
  "o": [
   "Sure, let me take a quick look.",
   "It's a long email.",
   "He never replies.",
   "I don't check emails."
  ],
  "a": 0,
  "exp": "طلب مراجعة يُجاب بالموافقة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: I can't lift this alone, could you grab the other end?\nB: ______",
  "o": [
   "Yeah, on three, let's lift together.",
   "I hurt my back.",
   "He is stronger than me.",
   "It's not heavy at all."
  ],
  "a": 0,
  "exp": "طلب مساعدة برفع شيء ثقيل يُجاب بالتنسيق للقيام بذلك معاً.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Do you mind helping me practice for my speech?\nB: ______",
  "o": [
   "I hate public speaking.",
   "It's a short speech.",
   "He gave one yesterday.",
   "Not at all, I'd love to listen."
  ],
  "a": 3,
  "exp": "عرض المساعدة بالتدرب يُقبل بالموافقة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Could you keep an eye on my plants while I'm away?\nB: ______",
  "o": [
   "It's a big garden.",
   "Of course, just tell me how often to water them.",
   "I don't like plants.",
   "He forgot to water his."
  ],
  "a": 1,
  "exp": "طلب رعاية أثناء السفر يُجاب بالموافقة والاستفسار.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: I'm struggling to understand this chapter. Could you explain it?\nB: ______",
  "o": [
   "I haven't read that book.",
   "It's a thick book.",
   "He wrote a summary.",
   "Sure, which part is confusing you?"
  ],
  "a": 3,
  "exp": "طلب شرح دراسي يُجاب بالموافقة والاستفسار عن التفاصيل.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Would you offer to drive if I pay for gas?\nB: ______",
  "o": [
   "He doesn't drive well.",
   "I don't own a car.",
   "Deal, I'll pick you up at eight.",
   "It's a long drive."
  ],
  "a": 2,
  "exp": "الاتفاق على عرض متبادل يُجاب بالقبول وتحديد التفاصيل.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: I'm organizing a charity event next month. Would you like to volunteer?\nB: ______",
  "o": [
   "He volunteered last year.",
   "I'd be glad to help out, count me in.",
   "It's a small event.",
   "I don't believe in charity."
  ],
  "a": 1,
  "exp": "قبول دعوة تطوع يكون بالحماس.",
  "tag": "الدعوات"
 },
 {
  "q": "A: We're planning a road trip. Interested in joining?\nB: ______",
  "o": [
   "He doesn't like trips.",
   "That sounds amazing, I'm in!",
   "I get carsick easily.",
   "It's a long drive."
  ],
  "a": 1,
  "exp": "قبول دعوة رحلة يكون بالحماس.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I'd love for you to be my plus-one at the gala.\nB: ______",
  "o": [
   "I'm honored, I'll be there.",
   "He is busy that night.",
   "I don't own formal clothes.",
   "It's a fancy event."
  ],
  "a": 0,
  "exp": "قبول دعوة رسمية يكون بالتشريف.",
  "tag": "الدعوات"
 },
 {
  "q": "A: Care to join our study group this semester?\nB: ______",
  "o": [
   "He failed the exam.",
   "I study better alone always.",
   "It's a big class.",
   "Yes, that would really help me."
  ],
  "a": 3,
  "exp": "قبول دعوة انضمام لمجموعة دراسية.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I'm afraid I won't be able to attend your event, something came up.\nB: ______",
  "o": [
   "You must attend no matter what.",
   "He canceled too.",
   "That's alright, I hope everything's okay.",
   "It's a big loss."
  ],
  "a": 2,
  "exp": "الرد المتفهم على اعتذار عن دعوة.",
  "tag": "الدعوات"
 },
 {
  "q": "A: Would you like to be a guest speaker at our conference?\nB: ______",
  "o": [
   "It's a small conference.",
   "I've never spoken publicly.",
   "He spoke last year.",
   "I'd be honored, thank you for thinking of me."
  ],
  "a": 3,
  "exp": "قبول دعوة كمتحدث ضيف.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I'm sorry for eating your lunch by mistake.\nB: ______",
  "o": [
   "I never bring lunch.",
   "Ha, it's okay, I'll just order something else.",
   "It's a big kitchen.",
   "He ate mine too."
  ],
  "a": 1,
  "exp": "قبول اعتذار عن خطأ بسيط بروح الدعابة.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I apologize for the mess I left in the kitchen.\nB: ______",
  "o": [
   "It's a small kitchen.",
   "The kitchen is spotless.",
   "He never cooks.",
   "Don't worry, I'll help you clean it up."
  ],
  "a": 3,
  "exp": "قبول اعتذار عن فوضى منزلية يكون بالمساعدة.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I'm sorry I gave you the wrong directions earlier.\nB: ______",
  "o": [
   "The directions were perfect.",
   "He got lost too.",
   "No harm done, I found my way eventually.",
   "It's a short distance."
  ],
  "a": 2,
  "exp": "قبول اعتذار عن خطأ بالإرشاد يكون بالتخفيف.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I feel bad for canceling our plans last minute.\nB: ______",
  "o": [
   "It's a busy week.",
   "He never cancels.",
   "I had no other plans anyway.",
   "It happens, let's just reschedule for next week."
  ],
  "a": 3,
  "exp": "قبول اعتذار عن إلغاء خطة يكون باقتراح بديل.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I'm sorry for texting you so late at night.\nB: ______",
  "o": [
   "It's a short text.",
   "He texts often.",
   "No problem, I was still awake anyway.",
   "I was already asleep for hours."
  ],
  "a": 2,
  "exp": "قبول اعتذار عن رسالة متأخرة يكون بالطمأنة.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I apologize for raising my voice during the discussion.\nB: ______",
  "o": [
   "It's understandable, tempers run high sometimes.",
   "He apologized too.",
   "It's a calm discussion.",
   "You never raised your voice."
  ],
  "a": 0,
  "exp": "قبول اعتذار عن انفعال أثناء نقاش.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: This jacket I bought has a tear in it already.\nB: ______",
  "o": [
   "I'm very sorry, we'll replace it free of charge.",
   "He returned his too.",
   "It's a nice color.",
   "The jacket looks brand new."
  ],
  "a": 0,
  "exp": "الرد على شكوى بمنتج معيب يكون بحل مجاني.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: I've emailed customer service three times with no response.\nB: ______",
  "o": [
   "Customer service always replies instantly.",
   "He never emails.",
   "It's a busy season.",
   "I apologize, let me personally follow up on this for you."
  ],
  "a": 3,
  "exp": "الرد على شكوى بخصوص عدم استجابة يكون بمتابعة شخصية.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: The taxi driver overcharged me for the ride.\nB: ______",
  "o": [
   "He took the bus instead.",
   "It's a short ride.",
   "I'm sorry to hear that, I'll report it and refund the difference.",
   "Taxi fares are always fixed."
  ],
  "a": 2,
  "exp": "الرد على شكوى مالية بخصوص مواصلات يكون بالتحقيق والتعويض.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: I object to being charged a cancellation fee, I canceled within the time limit.\nB: ______",
  "o": [
   "He never cancels.",
   "The fee is non-negotiable ever.",
   "It's a small fee.",
   "You're right, let me waive that fee for you."
  ],
  "a": 3,
  "exp": "الرد على اعتراض مبرر يكون بإسقاط الرسوم.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: The instructions for this product are unclear.\nB: ______",
  "o": [
   "It's a simple product.",
   "I apologize for that, I'll send you a clearer guide.",
   "The instructions are very clear.",
   "He read them twice."
  ],
  "a": 1,
  "exp": "الرد على شكوى بخصوص تعليمات غامضة يكون بتقديم بديل أوضح.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: I'm upset that my package arrived damaged.\nB: ______",
  "o": [
   "He shipped it carefully.",
   "I sincerely apologize, we'll send a replacement right away.",
   "It's a fragile item.",
   "Damaged packages are normal."
  ],
  "a": 1,
  "exp": "الرد على شكوى بمنتج تالف يكون باستبدال فوري.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: Do you offer free shipping on orders over fifty dollars?\nB: ______",
  "o": [
   "He paid for shipping.",
   "Yes, free shipping kicks in at fifty dollars.",
   "It's a heavy order.",
   "No, shipping is always expensive."
  ],
  "a": 1,
  "exp": "سؤال عن سياسة الشحن المجاني يُجاب بتوضيحها.",
  "tag": "التسوق"
 },
 {
  "q": "A: Can I exchange this for a different item instead of a refund?\nB: ______",
  "o": [
   "Sure, you can exchange it within thirty days.",
   "Exchanges are never allowed.",
   "It's a final sale.",
   "He wants a refund."
  ],
  "a": 0,
  "exp": "سؤال عن سياسة الاستبدال يُجاب بتوضيحها.",
  "tag": "التسوق"
 },
 {
  "q": "A: Is this bag made of real leather?\nB: ______",
  "o": [
   "He bought a wallet.",
   "Yes, it's genuine leather.",
   "It's very light.",
   "No, we don't sell bags."
  ],
  "a": 1,
  "exp": "سؤال عن خامة منتج يُجاب بالتوضيح.",
  "tag": "التسوق"
 },
 {
  "q": "A: Do you have a loyalty program I can join?\nB: ______",
  "o": [
   "Yes, you can sign up at the register for free.",
   "He is already a member.",
   "No, we don't reward customers.",
   "It's only for staff."
  ],
  "a": 0,
  "exp": "سؤال عن برنامج ولاء يُجاب بتوضيح كيفية الانضمام.",
  "tag": "التسوق"
 },
 {
  "q": "A: Can you hold this item for me until tomorrow?\nB: ______",
  "o": [
   "He already bought it.",
   "It's the only one left.",
   "Sure, I'll put it aside with your name on it.",
   "We never hold items."
  ],
  "a": 2,
  "exp": "طلب حجز منتج مؤقتاً يُجاب بالموافقة.",
  "tag": "التسوق"
 },
 {
  "q": "A: What's your return policy for sale items?\nB: ______",
  "o": [
   "He bought it full price.",
   "It's a big discount.",
   "Sale items can never be returned.",
   "Sale items can be returned within seven days."
  ],
  "a": 3,
  "exp": "سؤال عن سياسة إرجاع منتجات مخفّضة يُجاب بالتوضيح.",
  "tag": "التسوق"
 },
 {
  "q": "A: Which platform does the train to the airport leave from?\nB: ______",
  "o": [
   "He missed his train.",
   "It's a short trip.",
   "The train is always late.",
   "It leaves from platform 4, just down the stairs."
  ],
  "a": 3,
  "exp": "سؤال عن رصيف القطار يُجاب برقمه.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: I'm trying to find parking near the stadium. Any suggestions?\nB: ______",
  "o": [
   "Parking is impossible to find.",
   "There's a parking garage two blocks north of here.",
   "It's a big stadium.",
   "He walked instead."
  ],
  "a": 1,
  "exp": "سؤال عن موقف سيارات يُجاب بتحديد المكان.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Does this road lead to the highway?\nB: ______",
  "o": [
   "It's a busy road.",
   "Yes, just follow it for another mile.",
   "No, this road is a dead end.",
   "He drives this way daily."
  ],
  "a": 1,
  "exp": "سؤال عن اتصال طريق بطريق سريع يُجاب بالتأكيد.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: How do I get to the second floor from here?\nB: ______",
  "o": [
   "Take the elevator or the stairs to your right.",
   "He works on the first floor.",
   "It's a tall building.",
   "The second floor doesn't exist."
  ],
  "a": 0,
  "exp": "سؤال عن الوصول لطابق معين يُجاب بذكر الخيارات.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Is the beach within walking distance of the hotel?\nB: ______",
  "o": [
   "It's a private beach.",
   "He swims every day.",
   "The beach is very far away.",
   "Yes, it's just a five-minute walk from the lobby."
  ],
  "a": 3,
  "exp": "سؤال عن مسافة الشاطئ يُجاب بتقدير الوقت.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Can you tell me which way is north from here?\nB: ______",
  "o": [
   "I don't know directions at all.",
   "It's a cloudy day.",
   "North is that direction, toward the mountains.",
   "He has a compass."
  ],
  "a": 2,
  "exp": "سؤال عن اتجاه جغرافي يُجاب بالإشارة.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Sorry, I missed your call earlier. What's up?\nB: ______",
  "o": [
   "No worries, I just wanted to confirm our meeting time.",
   "I never called you.",
   "It's a busy day.",
   "He is out of office."
  ],
  "a": 0,
  "exp": "الرد على استفسار عن سبب اتصال فائت.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Can you text me the address instead of calling?\nB: ______",
  "o": [
   "I don't know the address.",
   "It's a long text.",
   "He forgot the address.",
   "Sure, I'll send it right now."
  ],
  "a": 3,
  "exp": "طلب إرسال معلومة عبر رسالة نصية يُجاب بالموافقة.",
  "tag": "الهاتف"
 },
 {
  "q": "A: The call keeps dropping, let's try again in a minute.\nB: ______",
  "o": [
   "Okay, I'll call you right back.",
   "It's a new phone.",
   "He is driving.",
   "I never have signal issues."
  ],
  "a": 0,
  "exp": "الاتفاق على معاودة الاتصال بعد انقطاعه.",
  "tag": "الهاتف"
 },
 {
  "q": "A: I'm calling about the job posting I saw online.\nB: ______",
  "o": [
   "He already applied.",
   "It's a small company.",
   "Great, let me transfer you to HR.",
   "We don't have any job openings."
  ],
  "a": 2,
  "exp": "الرد على استفسار هاتفي عن وظيفة يكون بالتحويل للجهة المختصة.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Could you put me through to the sales department, please?\nB: ______",
  "o": [
   "It's a busy line.",
   "Sure, one moment while I transfer your call.",
   "He works in sales.",
   "Sales department is closed forever."
  ],
  "a": 1,
  "exp": "طلب تحويل مكالمة يُجاب بالموافقة.",
  "tag": "الهاتف"
 },
 {
  "q": "A: I think we got disconnected, can you hear me now?\nB: ______",
  "o": [
   "He hung up.",
   "It's a bad signal area.",
   "Yes, I can hear you clearly now.",
   "I never lost the connection."
  ],
  "a": 2,
  "exp": "التأكد من استمرارية الاتصال بعد انقطاعه.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Should we invite the whole department to the party?\nB: ______",
  "o": [
   "He isn't invited.",
   "It's a big department.",
   "I think that's a great idea, the more the merrier.",
   "No, parties should be small and closed only."
  ],
  "a": 2,
  "exp": "الموافقة على اقتراح اجتماعي مع تعليل.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Would you be willing to relocate for this job?\nB: ______",
  "o": [
   "He relocated already.",
   "Absolutely not, under any circumstances.",
   "It's a great job.",
   "I'd need to think about it, but I'm open to the idea."
  ],
  "a": 3,
  "exp": "رد متحفظ يجمع بين تردد وانفتاح.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Can we push the deadline back by two days?\nB: ______",
  "o": [
   "No, deadlines are always fixed forever.",
   "It's a tight deadline.",
   "That should be fine, I'll let the team know.",
   "He missed it already."
  ],
  "a": 2,
  "exp": "الموافقة على تمديد موعد نهائي.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Do you want to try the new restaurant downtown tonight?\nB: ______",
  "o": [
   "He ate there yesterday.",
   "I'm not really in the mood tonight, maybe another time.",
   "It's a fancy place.",
   "Yes, restaurants are always empty."
  ],
  "a": 1,
  "exp": "الرفض المهذب لاقتراح مع تأجيل.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Should we go with the cheaper supplier?\nB: ______",
  "o": [
   "Yes, price is the only thing that matters.",
   "It's a small difference.",
   "I'd say no, the quality difference isn't worth the savings.",
   "He works for the supplier."
  ],
  "a": 2,
  "exp": "الرفض المبرر لاقتراح مع سبب.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Are you on board with the new schedule?\nB: ______",
  "o": [
   "Yes, I think it works better for everyone.",
   "No, schedules are pointless.",
   "It's a flexible schedule.",
   "He made the schedule."
  ],
  "a": 0,
  "exp": "الموافقة على جدول جديد.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: I keep losing my keys around the house. Any tips?\nB: ______",
  "o": [
   "You should buy a new house.",
   "You could hang a key holder by the front door.",
   "Losing things is unavoidable.",
   "You should stop using keys."
  ],
  "a": 1,
  "exp": "اقتراح عملي لتنظيم أغراض المنزل.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I want to learn to cook but don't know where to start.\nB: ______",
  "o": [
   "You should eat out forever.",
   "Try starting with a few simple recipes online.",
   "Cooking is too difficult to learn.",
   "You should never cook at home."
  ],
  "a": 1,
  "exp": "نصيحة للمبتدئين في الطبخ.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: My phone battery drains too fast. What should I do?\nB: ______",
  "o": [
   "Batteries can't be improved.",
   "You should never charge it.",
   "You could lower the screen brightness and close unused apps.",
   "You should buy a new phone every month."
  ],
  "a": 2,
  "exp": "نصيحة تقنية عملية لتوفير البطارية.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I'm overwhelmed with too many tasks at work. Any advice?\nB: ______",
  "o": [
   "Try prioritizing tasks and delegating what you can.",
   "Work harder without a plan.",
   "Just ignore some tasks completely.",
   "You should quit your job immediately."
  ],
  "a": 0,
  "exp": "نصيحة إدارية للتعامل مع ضغط العمل.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I want to reduce my screen time. Any suggestions?\nB: ______",
  "o": [
   "You could set a daily time limit on your apps.",
   "You should throw away your phone.",
   "You should use it more.",
   "Screen time doesn't matter at all."
  ],
  "a": 0,
  "exp": "نصيحة صحية رقمية.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I keep procrastinating on my assignments. What can I do?\nB: ______",
  "o": [
   "Try breaking the assignment into smaller, manageable steps.",
   "Wait until the last minute always.",
   "Procrastination is impossible to fix.",
   "You should give up on assignments."
  ],
  "a": 0,
  "exp": "نصيحة لتنظيم الوقت والتغلب على التسويف.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: Thank you for always being honest with me.\nB: ______",
  "o": [
   "It's a difficult trait.",
   "I've never been honest with you.",
   "That means a lot, honesty is important to me too.",
   "He lies often."
  ],
  "a": 2,
  "exp": "الرد على شكر لصفة شخصية يكون بالتقدير المتبادل.",
  "tag": "الشكر"
 },
 {
  "q": "A: I want to thank you for believing in me when no one else did.\nB: ______",
  "o": [
   "I never believed in you.",
   "It's a hard situation.",
   "He gave up.",
   "You earned that belief through your hard work."
  ],
  "a": 3,
  "exp": "الرد على شكر عاطفي عميق يكون بتقدير جهد الطرف الآخر.",
  "tag": "الشكر"
 },
 {
  "q": "A: Thanks for staying late to help finish the project.\nB: ______",
  "o": [
   "I left early actually.",
   "Of course, we're a team, happy to pitch in.",
   "He works alone.",
   "The project failed."
  ],
  "a": 1,
  "exp": "الرد على شكر جماعي بعد عمل مشترك.",
  "tag": "الشكر"
 },
 {
  "q": "A: I appreciate you being so understanding about my mistake.\nB: ______",
  "o": [
   "It's a serious mistake.",
   "Everyone makes mistakes, don't worry about it.",
   "He never makes mistakes.",
   "I wasn't understanding at all."
  ],
  "a": 1,
  "exp": "الرد على شكر بعد تفهم خطأ يكون بالتطمين.",
  "tag": "الشكر"
 },
 {
  "q": "A: Thank you for the wonderful recommendation letter.\nB: ______",
  "o": [
   "He didn't get the job.",
   "It's a formal letter.",
   "I wrote a bad letter actually.",
   "You deserved every word of it."
  ],
  "a": 3,
  "exp": "الرد على شكر لخطاب توصية.",
  "tag": "الشكر"
 },
 {
  "q": "A: Do you think public transportation should be free?\nB: ______",
  "o": [
   "It's an expensive bus.",
   "He drives to work.",
   "Public transportation doesn't exist.",
   "I think it could reduce traffic, so I'm in favor of it."
  ],
  "a": 3,
  "exp": "التعبير عن رأي مؤيد لقضية عامة.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: What's your view on working long hours to get ahead?\nB: ______",
  "o": [
   "He never works.",
   "It's a common practice.",
   "I don't think it's sustainable in the long run.",
   "I love working all day and night."
  ],
  "a": 2,
  "exp": "التعبير عن رأي نقدي حول عادة عمل.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: Do you think everyone should learn a second language?\nB: ______",
  "o": [
   "He speaks one language.",
   "Learning languages is a waste of time.",
   "I believe it's very beneficial, both for the brain and for opportunities.",
   "It's a difficult subject."
  ],
  "a": 2,
  "exp": "التعبير عن رأي إيجابي حول تعلم اللغات.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: Some say money can't buy happiness. Do you agree?\nB: ______",
  "o": [
   "He is very wealthy.",
   "I partly agree, money helps, but it isn't everything.",
   "It's an old saying.",
   "Money is the only source of happiness."
  ],
  "a": 1,
  "exp": "التعبير عن رأي متوازن حول علاقة المال بالسعادة.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: What do you think about mandatory military service?\nB: ______",
  "o": [
   "It's a controversial law.",
   "I have mixed feelings, it has benefits but also drawbacks.",
   "I have no opinion on anything ever.",
   "He served in the army."
  ],
  "a": 1,
  "exp": "التعبير عن رأي متوازن حول قضية جدلية.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: We're ready to order now, thank you for waiting.\nB: ______",
  "o": [
   "I'm not a waiter.",
   "Great, what can I get started for you?",
   "It's a busy night.",
   "He already ordered."
  ],
  "a": 1,
  "exp": "رد النادل عند استعداد الزبائن للطلب.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Could we sit outside on the terrace instead?\nB: ______",
  "o": [
   "Of course, let me check if a table is available.",
   "He prefers indoors.",
   "The terrace is closed forever.",
   "It's a rainy day."
  ],
  "a": 0,
  "exp": "طلب تغيير مكان الجلوس يُجاب بالتحقق من التوفر.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Is the fish fresh today?\nB: ______",
  "o": [
   "Yes, it was delivered fresh this morning.",
   "He doesn't like fish.",
   "It's a small portion.",
   "No, we never serve fish."
  ],
  "a": 0,
  "exp": "سؤال عن طزاجة الطعام يُجاب بالتوضيح.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Can you make this dish without nuts? I have an allergy.\nB: ______",
  "o": [
   "He loves nuts.",
   "Nuts can't be removed from any dish.",
   "It's a popular dish.",
   "Absolutely, I'll let the kitchen know right away."
  ],
  "a": 3,
  "exp": "طلب تعديل طبق بسبب حساسية يُجاب بالتعاون الفوري.",
  "tag": "في المطعم"
 },
 {
  "q": "A: What's today's special?\nB: ______",
  "o": [
   "It's a Tuesday.",
   "Today we have grilled salmon with vegetables.",
   "We don't have any specials today.",
   "He ordered the special."
  ],
  "a": 1,
  "exp": "سؤال عن طبق اليوم يُجاب بذكره.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Could we get a booster seat for our toddler?\nB: ______",
  "o": [
   "He is too old for that.",
   "It's a fancy restaurant.",
   "Of course, I'll bring one right over.",
   "We don't allow children here."
  ],
  "a": 2,
  "exp": "طلب كرسي أطفال يُجاب بالتلبية الفورية.",
  "tag": "في المطعم"
 },
 {
  "q": "A: I don't think we've officially met, I'm {n}.\nB: ______",
  "o": [
   "Nice to meet you, I'm {n2}.",
   "He works upstairs.",
   "I already have a coffee.",
   "It's a nice office."
  ],
  "a": 0,
  "exp": "تعارف رسمي بسيط.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: You must be the new intern, welcome aboard!\nB: ______",
  "o": [
   "It's my first day off.",
   "He left the internship.",
   "Thank you, I'm excited to be here.",
   "I'm not an intern."
  ],
  "a": 2,
  "exp": "الرد على ترحيب بموظف جديد.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Good afternoon! Did you have a nice weekend?\nB: ______",
  "o": [
   "Yes, it was relaxing, thanks for asking!",
   "He traveled abroad.",
   "I worked all weekend.",
   "It's Monday morning now."
  ],
  "a": 0,
  "exp": "سؤال ودي عن نهاية الأسبوع.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: I saw you at the conference last year, right?\nB: ______",
  "o": [
   "Yes! Good memory, nice to see you again.",
   "I've never attended a conference.",
   "It's a big venue.",
   "He missed it."
  ],
  "a": 0,
  "exp": "تذكر لقاء سابق يُجاب بالتأكيد.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Could you double-check these numbers for me?\nB: ______",
  "o": [
   "He calculated them.",
   "Numbers are never wrong.",
   "Sure, give me a minute to go through them.",
   "It's a long spreadsheet."
  ],
  "a": 2,
  "exp": "طلب مراجعة أرقام يُجاب بالموافقة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: I need someone to cover the front desk for an hour.\nB: ______",
  "o": [
   "It's a busy hour.",
   "He works from home.",
   "The front desk is always empty.",
   "I can do that, just show me what to do."
  ],
  "a": 3,
  "exp": "طلب تغطية مهمة مؤقتة يُجاب بالموافقة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Would you mind giving me some feedback on my design?\nB: ______",
  "o": [
   "He designed it too.",
   "Not at all, I'll take a look now.",
   "It's a colorful design.",
   "I don't understand design."
  ],
  "a": 1,
  "exp": "طلب رأي وملاحظات يُجاب بالموافقة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Can you show me around the office since it's my first day?\nB: ______",
  "o": [
   "It's a big building.",
   "I don't know this office.",
   "He started yesterday.",
   "Of course, let's start with the break room."
  ],
  "a": 3,
  "exp": "طلب جولة تعريفية يُجاب بالموافقة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: I need a hand setting up chairs for the event.\nB: ______",
  "o": [
   "I don't like events.",
   "Sure, where do you want them arranged?",
   "It's an outdoor event.",
   "He canceled the event."
  ],
  "a": 1,
  "exp": "طلب مساعدة بتحضير فعالية.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Feel free to stop by anytime this weekend.\nB: ______",
  "o": [
   "It's a busy weekend.",
   "I never visit anyone.",
   "Thanks, I might take you up on that!",
   "He is out of town."
  ],
  "a": 2,
  "exp": "دعوة غير رسمية يُرد عليها بالشكر.",
  "tag": "الدعوات"
 },
 {
  "q": "A: We'd love to have you over for tea sometime.\nB: ______",
  "o": [
   "He visited already.",
   "It's a small house.",
   "That sounds lovely, just let me know when.",
   "I don't drink tea at all."
  ],
  "a": 2,
  "exp": "قبول دعوة غير محددة الموعد يُتبع بطلب تحديد الوقت.",
  "tag": "الدعوات"
 },
 {
  "q": "A: Join us for a picnic in the park this Sunday?\nB: ______",
  "o": [
   "Picnics are not for me.",
   "I'd love to, should I bring anything?",
   "He hates the park.",
   "It's going to be sunny."
  ],
  "a": 1,
  "exp": "قبول دعوة نزهة يُتبع بسؤال عمّا يمكن إحضاره.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I'm hosting a game night, want to come?\nB: ______",
  "o": [
   "I don't like games.",
   "Absolutely, I love game nights!",
   "It's a quiet evening.",
   "He lost the game."
  ],
  "a": 1,
  "exp": "قبول دعوة اجتماعية يُعبَّر عنه بالحماس.",
  "tag": "الدعوات"
 },
 {
  "q": "A: You're invited to my art exhibition opening.\nB: ______",
  "o": [
   "I wouldn't miss it for the world, congratulations!",
   "He painted it.",
   "It's a small gallery.",
   "I don't like art."
  ],
  "a": 0,
  "exp": "قبول دعوة لمعرض فني مع تهنئة.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I'm sorry for showing up unannounced.\nB: ______",
  "o": [
   "You're never welcome here.",
   "He called ahead.",
   "Not a problem, come on in!",
   "It's a small house."
  ],
  "a": 2,
  "exp": "قبول اعتذار عن زيارة مفاجئة يكون بالترحيب.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I apologize for the confusion about the meeting time.\nB: ______",
  "o": [
   "It's a short meeting.",
   "No worries, these things happen.",
   "The meeting time was clear.",
   "He was on time."
  ],
  "a": 1,
  "exp": "قبول اعتذار عن سوء تفاهم بخصوص موعد.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I'm sorry I doubted you, you were right all along.\nB: ______",
  "o": [
   "He never doubts anyone.",
   "It's alright, I appreciate you saying that.",
   "It's a complicated matter.",
   "I was actually wrong."
  ],
  "a": 1,
  "exp": "قبول اعتذار عن شك سابق.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I feel bad that I forgot to reply to your message.\nB: ______",
  "o": [
   "He replied immediately.",
   "Don't worry about it, I know you're busy.",
   "I never sent a message.",
   "It's an old message."
  ],
  "a": 1,
  "exp": "قبول اعتذار عن تأخر بالرد.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: Sorry for being so quiet today, I have a lot on my mind.\nB: ______",
  "o": [
   "He is very cheerful.",
   "You're always talkative.",
   "It's a loud room.",
   "That's okay, I hope things get better."
  ],
  "a": 3,
  "exp": "قبول اعتذار عن سلوك غير معتاد بسبب ضغوط.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: This chair I bought is already wobbly.\nB: ______",
  "o": [
   "He assembled it wrong.",
   "I apologize, we'll send a replacement immediately.",
   "It's a comfortable chair.",
   "The chair is very sturdy."
  ],
  "a": 1,
  "exp": "الرد على شكوى بمنتج أثاث معيب.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: I was charged twice for the same order.\nB: ______",
  "o": [
   "You were only charged once.",
   "It's a small order.",
   "He ordered twice.",
   "I'm so sorry, I'll refund the extra charge right away."
  ],
  "a": 3,
  "exp": "الرد على خطأ في الفوترة.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: The air conditioning in my room isn't working.\nB: ______",
  "o": [
   "It's a hot day.",
   "He likes it warm.",
   "The AC is working fine.",
   "My apologies, I'll send maintenance up immediately."
  ],
  "a": 3,
  "exp": "الرد على شكوى تعطل جهاز في غرفة فندق.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: I object to being put on hold for thirty minutes.\nB: ______",
  "o": [
   "Thirty minutes is a short wait.",
   "It's a busy call center.",
   "He hung up.",
   "I completely understand your frustration, I apologize for the wait."
  ],
  "a": 3,
  "exp": "الرد على شكوى انتظار طويل.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: This isn't the quality I expected for the price.\nB: ______",
  "o": [
   "It's a fair price.",
   "I hear you, let me see what we can do to make it right.",
   "He paid full price.",
   "You got exactly what you paid for."
  ],
  "a": 1,
  "exp": "الرد على شكوى بخصوص جودة منتج.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: Do you price-match with other stores?\nB: ______",
  "o": [
   "Yes, bring in proof and we'll match the price.",
   "He compared prices.",
   "No, our prices are always higher.",
   "It's a small store."
  ],
  "a": 0,
  "exp": "سؤال عن سياسة مطابقة الأسعار.",
  "tag": "التسوق"
 },
 {
  "q": "A: Can I use this coupon on sale items?\nB: ______",
  "o": [
   "Unfortunately, coupons don't apply to sale items.",
   "He has two coupons.",
   "It's an expired coupon.",
   "Coupons work on everything always."
  ],
  "a": 0,
  "exp": "سؤال عن استخدام قسيمة خصم.",
  "tag": "التسوق"
 },
 {
  "q": "A: Where's the fitting room located?\nB: ______",
  "o": [
   "We don't have fitting rooms.",
   "It's a small store.",
   "It's right past the shoe section, to your left.",
   "He is trying on shoes."
  ],
  "a": 2,
  "exp": "سؤال عن موقع غرفة القياس.",
  "tag": "التسوق"
 },
 {
  "q": "A: Is delivery available for this item?\nB: ______",
  "o": [
   "No, you must carry it yourself.",
   "He picked it up himself.",
   "Yes, we offer delivery within three business days.",
   "It's a light item."
  ],
  "a": 2,
  "exp": "سؤال عن خدمة التوصيل.",
  "tag": "التسوق"
 },
 {
  "q": "A: Can I pay with a mobile wallet?\nB: ______",
  "o": [
   "No, we only accept cash.",
   "He paid by card.",
   "It's a modern store.",
   "Yes, we accept all major mobile payment apps."
  ],
  "a": 3,
  "exp": "سؤال عن طرق دفع حديثة.",
  "tag": "التسوق"
 },
 {
  "q": "A: Is there a more scenic route to the coast?\nB: ______",
  "o": [
   "He prefers the highway.",
   "There's only one road available.",
   "Yes, the coastal road takes a bit longer but it's beautiful.",
   "It's a rainy day."
  ],
  "a": 2,
  "exp": "سؤال عن طريق أجمل للوصول.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Which side of the street is the bakery on?\nB: ______",
  "o": [
   "It's on the left side, right after the bank.",
   "He bought bread there.",
   "It's a busy street.",
   "The bakery closed down years ago."
  ],
  "a": 0,
  "exp": "سؤال عن موقع محدد على شارع.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: How many stops until the city center?\nB: ______",
  "o": [
   "It's a long ride.",
   "The city center has no stops.",
   "He got off early.",
   "Just three more stops from here."
  ],
  "a": 3,
  "exp": "سؤال عن عدد المحطات.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Do I need to change trains to get there?\nB: ______",
  "o": [
   "No changes are ever needed.",
   "Yes, you'll need to switch at the next station.",
   "He missed his connection.",
   "It's a direct flight."
  ],
  "a": 1,
  "exp": "سؤال عن تبديل وسيلة نقل.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Is the entrance on this side of the building?\nB: ______",
  "o": [
   "It's a tall building.",
   "There's no entrance to this building.",
   "He entered already.",
   "No, the main entrance is around the back."
  ],
  "a": 3,
  "exp": "سؤال عن موقع مدخل مبنى.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: I'd like to schedule a callback for tomorrow morning.\nB: ______",
  "o": [
   "He called this morning.",
   "We don't do callbacks.",
   "Sure, what time works best for you?",
   "It's already tomorrow."
  ],
  "a": 2,
  "exp": "طلب جدولة معاودة اتصال.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Can you confirm you received my voicemail?\nB: ______",
  "o": [
   "He deleted it.",
   "I never check voicemail.",
   "Yes, I got it and I'll respond shortly.",
   "It's a long voicemail."
  ],
  "a": 2,
  "exp": "التأكد من استلام رسالة صوتية.",
  "tag": "الهاتف"
 },
 {
  "q": "A: I'm calling to update my contact information.\nB: ______",
  "o": [
   "It's an old number.",
   "Sure, let's start with your new phone number.",
   "He changed address only.",
   "We never update information."
  ],
  "a": 1,
  "exp": "طلب تحديث معلومات عبر الهاتف.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Sorry, can you speak up a little? It's noisy here.\nB: ______",
  "o": [
   "It's a quiet room.",
   "I'm already shouting.",
   "He whispered instead.",
   "Sure, is this better?"
  ],
  "a": 3,
  "exp": "طلب رفع الصوت أثناء اتصال.",
  "tag": "الهاتف"
 },
 {
  "q": "A: I'll send you the details by text right after this call.\nB: ______",
  "o": [
   "He forgot his phone.",
   "I don't receive texts.",
   "Perfect, I'll keep an eye out for it.",
   "It's a short call."
  ],
  "a": 2,
  "exp": "الاتفاق على إرسال تفاصيل عبر رسالة.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Do you approve of the changes to the design?\nB: ______",
  "o": [
   "Yes, I think they're a real improvement.",
   "No, the original design was worse.",
   "He rejected it.",
   "It's a colorful design."
  ],
  "a": 0,
  "exp": "الموافقة على تعديلات تصميم.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Can we agree to split the responsibilities equally?\nB: ______",
  "o": [
   "That sounds fair to me.",
   "He disagrees always.",
   "It's a big project.",
   "No, one person should do everything."
  ],
  "a": 0,
  "exp": "الموافقة على تقسيم عادل للمهام.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: I'd rather not discuss this in front of everyone, is that okay?\nB: ______",
  "o": [
   "No, everyone must know now.",
   "Of course, we can talk about it privately later.",
   "It's a private matter.",
   "He already told everyone."
  ],
  "a": 1,
  "exp": "الموافقة على تأجيل نقاش حساس.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Would you be against extending the warranty for a small fee?\nB: ______",
  "o": [
   "Yes, warranties are a waste of money.",
   "He never buys warranties.",
   "It's a long warranty.",
   "Not at all, that seems reasonable."
  ],
  "a": 3,
  "exp": "الموافقة على عرض تمديد ضمان.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Should we accept their offer or negotiate further?\nB: ______",
  "o": [
   "He accepted immediately.",
   "It's a fair offer already.",
   "I'd say let's negotiate a little more first.",
   "We should never negotiate anything."
  ],
  "a": 2,
  "exp": "اقتراح التفاوض بدل القبول الفوري.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: I want to reduce food waste at home. Any ideas?\nB: ______",
  "o": [
   "You should buy more food.",
   "You could plan your meals ahead and buy only what you need.",
   "Food waste can't be reduced.",
   "Throw away leftovers always."
  ],
  "a": 1,
  "exp": "نصيحة عملية لتقليل هدر الطعام.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: My internet connection at home is really slow. Suggestions?\nB: ______",
  "o": [
   "Slow internet can't be fixed.",
   "Buy a new house instead.",
   "Try restarting your router, or contact your provider.",
   "You should stop using the internet."
  ],
  "a": 2,
  "exp": "نصيحة تقنية لتحسين سرعة الإنترنت.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I want to be more punctual. Any advice?\nB: ______",
  "o": [
   "You should always be late.",
   "Ignore the time completely.",
   "Try setting your clocks a few minutes early.",
   "Punctuality doesn't matter much."
  ],
  "a": 2,
  "exp": "نصيحة عملية لتحسين الالتزام بالمواعيد.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I'm trying to quit sugary drinks. What helps?\nB: ______",
  "o": [
   "You should drink more soda instead.",
   "Quitting suddenly is impossible.",
   "Replacing them gradually with water or unsweetened tea helps a lot.",
   "Sugar isn't bad for you."
  ],
  "a": 2,
  "exp": "نصيحة صحية للإقلاع عن المشروبات السكرية.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: I want to improve my handwriting. Any tips?\nB: ______",
  "o": [
   "Handwriting can't be improved after childhood.",
   "Ignore your handwriting completely.",
   "Practicing a little every day really helps.",
   "You should type everything instead."
  ],
  "a": 2,
  "exp": "نصيحة لتحسين مهارة الكتابة اليدوية.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: Thank you for always making time for me.\nB: ______",
  "o": [
   "He is often late.",
   "You're one of my favorite people to spend time with.",
   "I never have time for you.",
   "It's a busy schedule."
  ],
  "a": 1,
  "exp": "الرد على شكر لصداقة صادقة.",
  "tag": "الشكر"
 },
 {
  "q": "A: I want to thank the whole team for their hard work.\nB: ______",
  "o": [
   "We appreciate you saying that, it motivates us.",
   "It's a small team.",
   "He joined recently.",
   "The team didn't work hard at all."
  ],
  "a": 0,
  "exp": "الرد الجماعي على شكر فريق عمل.",
  "tag": "الشكر"
 },
 {
  "q": "A: Thanks for lending me your notes before the exam.\nB: ______",
  "o": [
   "He failed the exam.",
   "No problem, I hope they helped you study.",
   "I don't take notes.",
   "It's a difficult exam."
  ],
  "a": 1,
  "exp": "الرد على شكر لمساعدة دراسية.",
  "tag": "الشكر"
 },
 {
  "q": "A: I really appreciate your honesty about the situation.\nB: ______",
  "o": [
   "It's a complicated situation.",
   "I wasn't being honest at all.",
   "I always believe honesty is the best policy.",
   "He avoided the topic."
  ],
  "a": 2,
  "exp": "الرد على شكر لصراحة.",
  "tag": "الشكر"
 },
 {
  "q": "A: Do you think online shopping will replace physical stores?\nB: ______",
  "o": [
   "It's a new trend.",
   "He never shops online.",
   "Physical stores will always dominate completely.",
   "I think it will reduce them, but not fully replace them."
  ],
  "a": 3,
  "exp": "التعبير عن رأي متوازن حول اتجاه اقتصادي.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: What's your opinion on strict school uniforms?\nB: ______",
  "o": [
   "He never wore one.",
   "I think they reduce distractions, so I support them.",
   "It's a private school policy.",
   "Uniforms should never exist."
  ],
  "a": 1,
  "exp": "التعبير عن رأي مؤيد لسياسة مدرسية.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: Do you believe competition brings out the best in people?\nB: ______",
  "o": [
   "It's a sports event.",
   "Sometimes, though it can also create unnecessary stress.",
   "He avoids competition.",
   "Competition has no effect on people."
  ],
  "a": 1,
  "exp": "التعبير عن رأي متوازن حول المنافسة.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: Some think cities should ban cars from the center. Thoughts?\nB: ______",
  "o": [
   "I actually support that, it would improve air quality.",
   "He owns three cars.",
   "It's an expensive project.",
   "Cars should be allowed everywhere always."
  ],
  "a": 0,
  "exp": "التعبير عن رأي بيئي مؤيد.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: Do you have a kids' menu available?\nB: ______",
  "o": [
   "It's an adult-only place.",
   "He ordered from the adult menu.",
   "Yes, right here, it has smaller portions.",
   "We don't allow children in this restaurant."
  ],
  "a": 2,
  "exp": "سؤال عن قائمة طعام للأطفال.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Could we get the check split between four people?\nB: ______",
  "o": [
   "We only accept one payment per table.",
   "He paid for everyone.",
   "It's a large bill.",
   "Of course, I'll divide it evenly for you."
  ],
  "a": 3,
  "exp": "طلب تقسيم فاتورة بين عدة أشخاص.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Is this table by the window still available?\nB: ______",
  "o": [
   "It's a small table.",
   "He sat there already.",
   "Yes, it just opened up, right this way.",
   "That table was reserved an hour ago."
  ],
  "a": 2,
  "exp": "سؤال عن توفر طاولة معينة.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Could we get some extra napkins, please?\nB: ______",
  "o": [
   "He brought his own.",
   "We ran out of napkins completely.",
   "It's a clean table.",
   "Of course, I'll bring some right over."
  ],
  "a": 3,
  "exp": "طلب مناديل إضافية.",
  "tag": "في المطعم"
 },
 {
  "q": "A: I think you dropped this, are you Rana?\nB: ______",
  "o": [
   "Oh yes, thank you! And you are?",
   "I never drop anything.",
   "It's a small wallet.",
   "He found it."
  ],
  "a": 0,
  "exp": "رد على تعارف مصاحب لموقف عرضي.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: What brings you to this event?\nB: ______",
  "o": [
   "I organize all events.",
   "A colleague invited me, and you?",
   "He didn't come.",
   "It's a formal event."
  ],
  "a": 1,
  "exp": "سؤال عن سبب الحضور في تعارف.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Could you translate this sign for me?\nB: ______",
  "o": [
   "It's a metal sign.",
   "He parked anyway.",
   "Sure, it says 'no parking'.",
   "I can't read signs."
  ],
  "a": 2,
  "exp": "طلب ترجمة لافتة.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: I need help choosing a gift for my mom. Ideas?\nB: ______",
  "o": [
   "I never buy gifts.",
   "It's her birthday.",
   "How about a nice scarf or some flowers?",
   "He forgot the date."
  ],
  "a": 2,
  "exp": "طلب اقتراح لهدية.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: Would you like to come watch the game with us on Friday?\nB: ______",
  "o": [
   "It's a long game.",
   "He missed the game.",
   "Sure, I'll bring some snacks!",
   "I don't like sports."
  ],
  "a": 2,
  "exp": "قبول دعوة لمشاهدة مباراة.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I'm having a few people over, feel free to swing by.\nB: ______",
  "o": [
   "Thanks, I'll try to stop by after work.",
   "It's a small apartment.",
   "I never go to gatherings.",
   "He left early."
  ],
  "a": 0,
  "exp": "قبول دعوة غير رسمية.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I'm sorry, I think I sent that email to the wrong person.\nB: ______",
  "o": [
   "No harm done, just let them know it was a mistake.",
   "It's a formal email.",
   "That email was perfect.",
   "He replied already."
  ],
  "a": 0,
  "exp": "قبول اعتذار عن خطأ بالبريد الإلكتروني.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I apologize for not introducing you at the party.\nB: ______",
  "o": [
   "It's fine, I introduced myself anyway.",
   "You introduced me twice.",
   "He left early.",
   "It's a big party."
  ],
  "a": 0,
  "exp": "قبول اعتذار عن إغفال بسيط اجتماعياً.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: The hotel room smells like smoke, but I booked non-smoking.\nB: ______",
  "o": [
   "All our rooms smell like that.",
   "It's a nice smell.",
   "He smokes too.",
   "I sincerely apologize, I'll move you to another room right away."
  ],
  "a": 3,
  "exp": "الرد على شكوى بخصوص غرفة فندق.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: I object to the meeting being scheduled without asking us first.\nB: ______",
  "o": [
   "You're right, I should have consulted everyone, I apologize.",
   "It's a short meeting.",
   "Meetings never need approval.",
   "He scheduled it."
  ],
  "a": 0,
  "exp": "الرد على اعتراض بخصوص عدم التشاور.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: Can I pay in installments for this item?\nB: ______",
  "o": [
   "It's an expensive item.",
   "Yes, we offer a three-month installment plan.",
   "He paid in full.",
   "No, full payment only, always."
  ],
  "a": 1,
  "exp": "سؤال عن الدفع بالتقسيط.",
  "tag": "التسوق"
 },
 {
  "q": "A: Do you sell this brand in other branches?\nB: ______",
  "o": [
   "It's a popular brand.",
   "No, this is the only branch.",
   "He checked online.",
   "Yes, most of our branches carry this brand."
  ],
  "a": 3,
  "exp": "سؤال عن توفر منتج في فروع أخرى.",
  "tag": "التسوق"
 },
 {
  "q": "A: Do I need a car to get around this city, or is walking enough?\nB: ______",
  "o": [
   "He never drives.",
   "Walking is fine for downtown, but you'll want a car for the suburbs.",
   "You can't walk anywhere in this city.",
   "It's a small city."
  ],
  "a": 1,
  "exp": "نصيحة عن التنقل داخل مدينة.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: What's the quickest way to the conference center?\nB: ______",
  "o": [
   "He drove there.",
   "It's a long walk.",
   "Take the metro, it's the fastest option at this hour.",
   "There's no fast way there."
  ],
  "a": 2,
  "exp": "سؤال عن أسرع وسيلة للوصول.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Is there an extension number for the accounting department?\nB: ______",
  "o": [
   "Yes, dial extension 205 for accounting.",
   "Accounting doesn't have a phone.",
   "It's a small department.",
   "He works there."
  ],
  "a": 0,
  "exp": "سؤال عن رقم فرعي لقسم.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Could you email me instead, since I'm hard to reach by phone?\nB: ______",
  "o": [
   "I only communicate by phone.",
   "Sure, what's the best email address to use?",
   "It's a busy day.",
   "He doesn't use email."
  ],
  "a": 1,
  "exp": "طلب التواصل عبر البريد الإلكتروني بدلاً من الهاتف.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Are you okay with me sharing this information with the team?\nB: ______",
  "o": [
   "It's confidential forever.",
   "He already shared it.",
   "No, that information is never shareable.",
   "Yes, go ahead, I have nothing to hide."
  ],
  "a": 3,
  "exp": "الموافقة على مشاركة معلومة.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: Would you object if I brought a guest to the dinner?\nB: ______",
  "o": [
   "It's a small dinner.",
   "He came alone.",
   "Yes, guests are never welcome.",
   "Not at all, the more the merrier."
  ],
  "a": 3,
  "exp": "الموافقة على إحضار ضيف إضافي.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: I want to start journaling but don't know how to begin.\nB: ______",
  "o": [
   "Journaling requires years of training.",
   "Just start by writing a few sentences about your day.",
   "It's only for professional writers.",
   "You should never write your thoughts."
  ],
  "a": 1,
  "exp": "نصيحة للبدء بكتابة اليوميات.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: My kids won't eat vegetables. Any suggestions?\nB: ______",
  "o": [
   "Force them to eat immediately.",
   "Try mixing them into dishes they already enjoy.",
   "Kids should never eat vegetables.",
   "Vegetables aren't necessary."
  ],
  "a": 1,
  "exp": "نصيحة تربوية بخصوص التغذية.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: Thanks for always cheering me up when I'm down.\nB: ______",
  "o": [
   "It's a hard day.",
   "He is always busy.",
   "I never notice when you're down.",
   "That's what friends are for, anytime."
  ],
  "a": 3,
  "exp": "الرد على شكر لدعم معنوي.",
  "tag": "الشكر"
 },
 {
  "q": "A: Do you think it's better to specialize early or explore many fields first?\nB: ______",
  "o": [
   "You should never explore anything new.",
   "He never decided.",
   "Specializing is always a mistake.",
   "I lean toward exploring first, then specializing later."
  ],
  "a": 3,
  "exp": "التعبير عن رأي حول التخصص المهني.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: We'd like to order dessert now, please.\nB: ______",
  "o": [
   "It's closing time.",
   "We don't serve dessert here.",
   "Great choice, here's our dessert menu.",
   "He already ate dessert."
  ],
  "a": 2,
  "exp": "طلب قائمة الحلويات بعد الوجبة الرئيسية.",
  "tag": "في المطعم"
 },
 {
  "q": "A: Could you recommend a good place to eat around here?\nB: ______",
  "o": [
   "It's closed today.",
   "He cooked at home.",
   "I never eat out.",
   "There's a great café just around the corner."
  ],
  "a": 3,
  "exp": "طلب توصية بمكان أكل قريب.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: Excuse me, is this seat available on the bus?\nB: ______",
  "o": [
   "It's a long ride.",
   "Yes, please, go ahead and sit.",
   "He is standing.",
   "No, buses don't have seats."
  ],
  "a": 1,
  "exp": "سؤال عن توفر مقعد في الحافلة.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Would you mind helping me carry these files to the meeting room?\nB: ______",
  "o": [
   "Not at all, lead the way.",
   "It's a short meeting.",
   "Files are too heavy for me.",
   "He filed them already."
  ],
  "a": 0,
  "exp": "طلب مساعدة بنقل ملفات.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: We're celebrating a promotion tonight, come join us!\nB: ______",
  "o": [
   "It's a work night.",
   "He got promoted too.",
   "Promotions don't matter much.",
   "Congratulations! I'd love to celebrate with you."
  ],
  "a": 3,
  "exp": "قبول دعوة احتفال بترقية.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I'm sorry for parking in your spot by mistake.\nB: ______",
  "o": [
   "No worries, I found another spot easily.",
   "That's not a real parking spot.",
   "He never parks there.",
   "It's a small lot."
  ],
  "a": 0,
  "exp": "قبول اعتذار عن خطأ بسيط بالمواقف.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: I found a hair in my food, this is unacceptable.\nB: ______",
  "o": [
   "That happens in every restaurant.",
   "He didn't notice.",
   "I'm extremely sorry, let me replace that dish immediately and it's on the house.",
   "It's a popular dish."
  ],
  "a": 2,
  "exp": "الرد على شكوى خطيرة بخصوص نظافة الطعام.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: Do you carry organic products in this store?\nB: ______",
  "o": [
   "Yes, we have a whole organic section in aisle five.",
   "He buys organic only.",
   "No, we don't sell food here.",
   "It's a small aisle."
  ],
  "a": 0,
  "exp": "سؤال عن توفر منتجات عضوية.",
  "tag": "التسوق"
 },
 {
  "q": "A: I can't get through to the support line, it's always busy.\nB: ______",
  "o": [
   "It's a new phone system.",
   "The support line is never busy.",
   "He called yesterday.",
   "I apologize, let me help you directly instead."
  ],
  "a": 3,
  "exp": "الرد على شكوى بخصوص خط دعم مشغول.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Are you fine with us starting the meeting ten minutes late?\nB: ______",
  "o": [
   "It's a short meeting.",
   "He arrived early.",
   "That's fine with me, no issue at all.",
   "No, meetings can never start late."
  ],
  "a": 2,
  "exp": "الموافقة على تأخير بسيط لبدء اجتماع.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: I want to stop biting my nails. Any advice?\nB: ______",
  "o": [
   "You should bite them more.",
   "Try keeping your hands busy with something else, like a stress ball.",
   "Ignore the habit completely.",
   "That habit can never be broken."
  ],
  "a": 1,
  "exp": "نصيحة للإقلاع عن عادة سيئة.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: Thank you for trusting me with this responsibility.\nB: ______",
  "o": [
   "You've earned that trust, I have full confidence in you.",
   "He refused it.",
   "It's a big responsibility.",
   "I don't trust you at all."
  ],
  "a": 0,
  "exp": "الرد على شكر لمنح ثقة ومسؤولية.",
  "tag": "الشكر"
 },
 {
  "q": "A: Do you think traditional classrooms will disappear completely?\nB: ______",
  "o": [
   "I doubt it, but they will likely blend with online learning.",
   "He teaches online only.",
   "It's an old building.",
   "Classrooms disappeared years ago."
  ],
  "a": 0,
  "exp": "التعبير عن رأي حول مستقبل التعليم.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: Could we get a bit more time before ordering?\nB: ______",
  "o": [
   "He already ordered.",
   "We don't allow extra time.",
   "Of course, take all the time you need.",
   "It's a busy night."
  ],
  "a": 2,
  "exp": "طلب وقت إضافي قبل الطلب في مطعم.",
  "tag": "في المطعم"
 },
 {
  "q": "A: I just wanted to say it's great working with you.\nB: ______",
  "o": [
   "Thank you, the feeling is mutual!",
   "He quit yesterday.",
   "I've never worked with you.",
   "It's a new office."
  ],
  "a": 0,
  "exp": "الرد على مجاملة عمل ودية.",
  "tag": "تحيات وتعارف"
 },
 {
  "q": "A: Could you double check that the door is locked?\nB: ______",
  "o": [
   "Sure, I'll go check right now.",
   "It's a heavy door.",
   "He locked it twice.",
   "Doors don't need checking."
  ],
  "a": 0,
  "exp": "طلب التحقق من أمر بسيط.",
  "tag": "طلب المساعدة والعروض"
 },
 {
  "q": "A: I'd love it if you could come to my recital next week.\nB: ______",
  "o": [
   "He performed last year.",
   "I don't like music at all.",
   "I wouldn't miss it, what time does it start?",
   "It's a short recital."
  ],
  "a": 2,
  "exp": "قبول دعوة لحفل موسيقي.",
  "tag": "الدعوات"
 },
 {
  "q": "A: I'm sorry for stepping on your foot.\nB: ______",
  "o": [
   "No worries, it didn't hurt at all.",
   "It's a crowded train.",
   "He apologized twice.",
   "You stepped on it on purpose."
  ],
  "a": 0,
  "exp": "قبول اعتذار عن حادث بسيط.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: The elevator in this building has been broken for a week.\nB: ______",
  "o": [
   "It's a tall building.",
   "The elevator works perfectly fine.",
   "He takes the stairs.",
   "I apologize for the inconvenience, a technician is coming today."
  ],
  "a": 3,
  "exp": "الرد على شكوى بخصوص عطل مستمر.",
  "tag": "الشكوى والاعتراض"
 },
 {
  "q": "A: Do you have gift receipts available?\nB: ______",
  "o": [
   "It's a holiday season.",
   "We don't offer gift receipts.",
   "He wrapped it himself.",
   "Yes, just let the cashier know at checkout."
  ],
  "a": 3,
  "exp": "سؤال عن إيصال هدية.",
  "tag": "التسوق"
 },
 {
  "q": "A: Can you tell me if this street is one-way?\nB: ______",
  "o": [
   "This street doesn't exist.",
   "He drove the wrong way.",
   "Yes, it's one-way heading north only.",
   "It's a quiet street."
  ],
  "a": 2,
  "exp": "سؤال عن اتجاه شارع.",
  "tag": "الاتجاهات"
 },
 {
  "q": "A: I'd like to update the voicemail greeting on my line.\nB: ______",
  "o": [
   "Sure, I can help you record a new one now.",
   "It's an old phone.",
   "He never checks voicemail.",
   "Voicemail greetings can't be changed."
  ],
  "a": 0,
  "exp": "طلب تحديث تحية البريد الصوتي.",
  "tag": "الهاتف"
 },
 {
  "q": "A: Do you mind if we start the presentation five minutes early?\nB: ______",
  "o": [
   "Presentations must start exactly on time always.",
   "Not at all, that works fine for me.",
   "It's a long presentation.",
   "He is running late."
  ],
  "a": 1,
  "exp": "الموافقة على بدء مبكر لعرض تقديمي.",
  "tag": "الموافقة والرفض"
 },
 {
  "q": "A: I want to drink more water each day. Any tips?\nB: ______",
  "o": [
   "Drinking water isn't important.",
   "Just drink soda instead.",
   "Try carrying a reusable water bottle with you everywhere.",
   "You should avoid water."
  ],
  "a": 2,
  "exp": "نصيحة لزيادة شرب الماء يومياً.",
  "tag": "الاقتراحات والنصائح"
 },
 {
  "q": "A: Thank you for always checking in on me.\nB: ______",
  "o": [
   "It's a busy week.",
   "Of course, I care about how you're doing.",
   "I never check in on anyone.",
   "He forgot to call."
  ],
  "a": 1,
  "exp": "الرد على شكر للاهتمام والمتابعة.",
  "tag": "الشكر"
 },
 {
  "q": "A: Do you think handwritten letters are becoming obsolete?\nB: ______",
  "o": [
   "It's an old tradition.",
   "Handwritten letters were never used.",
   "He writes letters daily.",
   "I think so, though they still feel more personal than texts."
  ],
  "a": 3,
  "exp": "التعبير عن رأي حول وسائل التواصل التقليدية.",
  "tag": "الرأي والنقاش"
 },
 {
  "q": "A: Could you bring the check when you get a chance?\nB: ______",
  "o": [
   "He already paid.",
   "It's a long wait.",
   "We don't provide checks here.",
   "Sure, I'll have it ready for you shortly."
  ],
  "a": 3,
  "exp": "طلب الفاتورة بشكل غير مستعجل.",
  "tag": "في المطعم"
 }
];
