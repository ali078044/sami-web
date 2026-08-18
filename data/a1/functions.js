/* بنك بيانات الكفاءة — المستوى A1 — functions */
var EXAM_FUNCTIONS = [
 {
  "q": "Speaker 1: \"I suggest we go to London?\"\nSpeaker 2: \"I don't think I can.\"\nWhat is Speaker 2 doing?",
  "o": [
   "To condemn",
   "To agree",
   "To refuse",
   "To argue"
  ],
  "a": 2,
  "exp": "Speaker 2 يرفض الاقتراح بلطف بقوله إنه لا يستطيع — أي وظيفة الرفض (To refuse).",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "Speaker A: \"It feels like Spring today!\"\nSpeaker B: \"Really? It feels humid.\"\nWhat is Speaker B doing?",
  "o": [
   "To disagree",
   "To confirm",
   "To mitigate",
   "To excuse"
  ],
  "a": 0,
  "exp": "Speaker B يخالف رأي A حول الطقس (يقول إنه رطب لا ربيعي) — أي وظيفة الاعتراض/المخالفة (To disagree).",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "Room partner: \"Do I have to clean the room twice a day?\"\nSpeaker 2: \"It has never been my mess!\"\nWhat is Speaker 2 doing?",
  "o": [
   "To protest",
   "To mitigate",
   "To agree",
   "To celebrate"
  ],
  "a": 0,
  "exp": "الرد يعترض على تحميله مسؤولية فوضى ليست من صنعه — أي وظيفة الاحتجاج (To protest).",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "Police officer: \"Car registration papers please!\"\nDriver: \"All right Sir.\"\nWhat is the officer doing?",
  "o": [
   "To disagree",
   "To order",
   "To inform",
   "To take leave"
  ],
  "a": 1,
  "exp": "الشرطي يطلب الأوراق بصيغة أمر مباشر — أي وظيفة الأمر (To order).",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "Speaker A: \"I don't want to see you now, get off!\"\nWhat is Speaker A doing?",
  "o": [
   "To agree",
   "To refuse",
   "To dismiss",
   "To claim"
  ],
  "a": 2,
  "exp": "الجملة طرد/إبعاد مباشر لشخص — أي وظيفة الطرد (To dismiss).",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "Player A: \"You had the worst performance today.\"\nPlayer B: \"Yeah, it wasn't actually me.\"\nWhat is Player A doing?",
  "o": [
   "To blame",
   "To order",
   "To celebrate",
   "To thank"
  ],
  "a": 0,
  "exp": "Player A يوجّه اللوم لأداء الفريق — أي وظيفة اللوم (To blame).",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "Teacher: \"You are all present today, right?\"\nStudents: \"Yes Sir.\"\nWhat is the teacher doing?",
  "o": [
   "To confirm",
   "To express anger",
   "To take leave",
   "To volunteer"
  ],
  "a": 0,
  "exp": "المعلم يتأكد من حضور الطلاب — أي وظيفة التأكد/التثبت (To confirm).",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "Player A: \"It is so hot today.\"\nPlayer B: \"I believe that too.\"\nWhat is Player B doing?",
  "o": [
   "To agree",
   "To threaten",
   "To refuse",
   "To remind"
  ],
  "a": 0,
  "exp": "Player B يوافق على ملاحظة A حول الحر — أي وظيفة الموافقة (To agree).",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "Employee: \"I am quitting this job.\"\nDirector: \"Request denied.\"\nWhat is the director doing?",
  "o": [
   "To express anger",
   "To take leave",
   "To volunteer",
   "To deny"
  ],
  "a": 3,
  "exp": "المدير يرفض طلب الموظف رسمياً — أي وظيفة الرفض/عدم الموافقة (To deny).",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "Speaker A: \"If you touch my kid I will call the police.\"\nSpeaker B: \"Come on, I am joking.\"\nWhat is Speaker A doing?",
  "o": [
   "To threaten",
   "To refuse",
   "To assure",
   "To claim"
  ],
  "a": 0,
  "exp": "Speaker A يحذّر بعاقبة إن حدث الفعل — أي وظيفة التهديد (To threaten).",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "Speaker A: \"My father has just died.\"\nSpeaker B: \"I am sorry to hear that.\"\nWhat is Speaker B doing?",
  "o": [
   "To express joy",
   "To express fear",
   "To express condolence",
   "To agree"
  ],
  "a": 2,
  "exp": "الرد على خبر وفاة يكون بتعزية — أي وظيفة التعزية (To express condolence).",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "Speaker A: \"I am from Iraq.\"\nSpeaker B: \"Me too, I am very glad to hear that.\"\nWhat is Speaker B doing?",
  "o": [
   "To fear",
   "To show solidarity",
   "To threaten",
   "To refuse"
  ],
  "a": 1,
  "exp": "Speaker B يعبّر عن تقارب/انتماء مشترك مع A — أي وظيفة إظهار التضامن (To show solidarity).",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"Would you like me to help you with the project?\" What is the speaker doing?",
  "o": [
   "To complain",
   "To invite",
   "To offer",
   "To accept"
  ],
  "a": 2,
  "exp": "عرض تقديم المساعدة = وظيفة العرض (To offer).",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Let's agree or disagree.\" What does this invite the listener to do?",
  "o": [
   "To order",
   "To show different opinions",
   "To state a fact",
   "To reject"
  ],
  "a": 1,
  "exp": "العبارة تدعو لإبداء رأي موافق أو مخالف — أي إظهار آراء مختلفة.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "Boy: \"That's it. You'll see the railway station in front of you.\"\nTourist: \"Oh! Can it be so close by then? I'd never have expected so.\"\nWhat is the tourist doing?",
  "o": [
   "To express interest",
   "To express dismay",
   "To express surprise",
   "To express anxiety"
  ],
  "a": 2,
  "exp": "عبارة \"I'd never have expected so\" تدل على المفاجأة من قرب المكان.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"What shall I do for you?\" What is the speaker doing?",
  "o": [
   "Request",
   "To rest",
   "To offer",
   "To command"
  ],
  "a": 2,
  "exp": "السؤال عرضٌ لتقديم مساعدة أو خدمة — أي وظيفة العرض (To offer).",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Which of the following expressions shows giving permission?\"",
  "o": [
   "You may borrow my pen",
   "You should see a doctor",
   "Why don't we go outside?",
   "I don't think so"
  ],
  "a": 0,
  "exp": "\"may\" فعل ناقص يفيد الإذن/السماح.",
  "tag": "العرض والطلب"
 },
 {
  "q": "Which expression is used to show disagreement?",
  "o": [
   "That's right",
   "I don't agree with you",
   "You are absolutely correct",
   "Exactly"
  ],
  "a": 1,
  "exp": "\"I don't agree with you\" تعبير مباشر عن المخالفة في الرأي.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "Which sentence expresses a strong warning?",
  "o": [
   "You must not touch that wire!",
   "You should try harder.",
   "Let's go to the park.",
   "I'm sorry to hear that."
  ],
  "a": 0,
  "exp": "\"must not\" تفيد نهياً قاطعاً/تحذيراً قوياً.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"I think this shirt is rather expensive.\" What is the speaker doing?",
  "o": [
   "Expressing a statement",
   "Expressing an adjective",
   "Expressing an opinion",
   "Making a compliment"
  ],
  "a": 2,
  "exp": "\"I think...\" مقدمة نموذجية للتعبير عن رأي شخصي.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "Lily: \"Lehman fell while climbing up the tree.\"\nRose: \"I shouldn't have asked him to climb it.\"\nWhat is Rose doing?",
  "o": [
   "To complain",
   "To apologize",
   "To regret",
   "To advise"
  ],
  "a": 2,
  "exp": "\"shouldn't have + p.p.\" تركيب يعبّر عن الندم على فعل ماضٍ.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"Would you please close the door?\" What is this?",
  "o": [
   "Suggest",
   "Apologize",
   "Infer",
   "Request"
  ],
  "a": 3,
  "exp": "صيغة \"Would you please...?\" طلب مهذّب — أي Request.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Could you open the window, please?\" This is a",
  "o": [
   "order",
   "request",
   "advice",
   "offer"
  ],
  "a": 1,
  "exp": "صيغة مهذبة تطلب فعلاً من المستمع — أي طلب (request).",
  "tag": "العرض والطلب"
 },
 {
  "q": "Your friend is sick. What do you say to give advice?",
  "o": [
   "You should see a doctor.",
   "You must be happy.",
   "You don't care.",
   "Let's go shopping."
  ],
  "a": 0,
  "exp": "\"should\" فعل ناقص شائع لتقديم النصيحة.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "A: \"I'm so sorry I broke your vase.\" What is A doing?",
  "o": [
   "To apologize",
   "To complain",
   "To threaten",
   "To boast"
  ],
  "a": 0,
  "exp": "\"I'm so sorry\" صيغة اعتذار مباشرة.",
  "tag": "الاعتذار"
 },
 {
  "q": "A: \"Congratulations on your graduation!\" What is A doing?",
  "o": [
   "To congratulate",
   "To warn",
   "To apologize",
   "To complain"
  ],
  "a": 0,
  "exp": "\"Congratulations\" تُستخدم لتهنئة شخص بإنجاز.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "A: \"Thank you so much for your help.\" What is A doing?",
  "o": [
   "To express gratitude",
   "To request help",
   "To refuse help",
   "To apologize"
  ],
  "a": 0,
  "exp": "\"Thank you\" تعبير مباشر عن الامتنان.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "A: \"Would you mind closing the window?\" What is A doing?",
  "o": [
   "To request",
   "To order",
   "To complain",
   "To apologize"
  ],
  "a": 0,
  "exp": "\"Would you mind...?\" صيغة مهذبة لطلب فعل شيء.",
  "tag": "العرض والطلب"
 },
 {
  "q": "A: \"Why don't we go to the beach this weekend?\" What is A doing?",
  "o": [
   "To suggest",
   "To order",
   "To refuse",
   "To complain"
  ],
  "a": 0,
  "exp": "\"Why don't we...?\" صيغة شائعة لتقديم اقتراح.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "A: \"You'd better not be late again.\" What is A doing?",
  "o": [
   "To warn",
   "To thank",
   "To congratulate",
   "To apologize"
  ],
  "a": 0,
  "exp": "\"You'd better not\" تحذير من عاقبة سلبية.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "A: \"I'm absolutely certain he took the money.\" What is A expressing?",
  "o": [
   "Certainty",
   "Doubt",
   "Surprise",
   "Sympathy"
  ],
  "a": 0,
  "exp": "\"absolutely certain\" تعبّر عن يقين تام.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "A: \"I'm not sure if this is the right decision.\" What is A expressing?",
  "o": [
   "Uncertainty",
   "Certainty",
   "Anger",
   "Excitement"
  ],
  "a": 0,
  "exp": "\"not sure\" تعبّر عن الشك أو عدم اليقين.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "A: \"I promise I'll call you as soon as I land.\" What is A doing?",
  "o": [
   "To promise",
   "To threaten",
   "To refuse",
   "To complain"
  ],
  "a": 0,
  "exp": "\"I promise\" التزام صريح بفعل شيء مستقبلاً.",
  "tag": "العرض والطلب"
 },
 {
  "q": "A: \"Can I use your phone for a minute?\" What is A doing?",
  "o": [
   "To ask for permission",
   "To give permission",
   "To refuse",
   "To order"
  ],
  "a": 0,
  "exp": "\"Can I...?\" صيغة شائعة لطلب الإذن.",
  "tag": "العرض والطلب"
 },
 {
  "q": "A: \"Sure, go ahead.\" (in response to a request) What is A doing?",
  "o": [
   "To give permission",
   "To refuse",
   "To apologize",
   "To warn"
  ],
  "a": 0,
  "exp": "الرد بالموافقة على طلب إذن يمنح الإذن.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "A: \"I'd rather stay home tonight.\" What is A expressing?",
  "o": [
   "Preference",
   "Obligation",
   "Surprise",
   "Regret"
  ],
  "a": 0,
  "exp": "\"I'd rather\" تعبّر عن تفضيل خيار على آخر.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "A: \"You must wear a seatbelt in this car.\" What is A doing?",
  "o": [
   "To express obligation",
   "To express permission",
   "To express preference",
   "To apologize"
  ],
  "a": 0,
  "exp": "\"must\" تفيد إلزاماً/واجباً.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "A: \"You don't have to bring anything to the party.\" What is A expressing?",
  "o": [
   "Absence of obligation",
   "Strong obligation",
   "A prohibition",
   "A threat"
  ],
  "a": 0,
  "exp": "\"don't have to\" تعني عدم وجود إلزام، بعكس \"must not\".",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "A: \"Visitors must not feed the animals.\" What is this?",
  "o": [
   "A prohibition",
   "A suggestion",
   "An invitation",
   "A compliment"
  ],
  "a": 0,
  "exp": "\"must not\" تفيد المنع القاطع.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "A: \"Why don't you try the new Italian restaurant downtown?\" What is A doing?",
  "o": [
   "To recommend",
   "To criticize",
   "To refuse",
   "To order"
  ],
  "a": 0,
  "exp": "\"Why don't you...?\" هنا تُستخدم لتقديم توصية.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "A: \"I can't believe you did that for me!\" What is A expressing?",
  "o": [
   "Surprise and appreciation",
   "Anger",
   "Boredom",
   "Doubt"
  ],
  "a": 0,
  "exp": "\"I can't believe\" تعبّر عن دهشة إيجابية وامتنان.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "A: \"I'm terribly sorry for your loss.\" What is A doing?",
  "o": [
   "To express condolence",
   "To celebrate",
   "To express joy",
   "To complain"
  ],
  "a": 0,
  "exp": "عبارة تعزية تقليدية عند وفاة شخص عزيز.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "A: \"Would you like some tea or coffee?\" What is A doing?",
  "o": [
   "To offer",
   "To request",
   "To refuse",
   "To warn"
  ],
  "a": 0,
  "exp": "تقديم خيارات للضيف = وظيفة العرض.",
  "tag": "العرض والطلب"
 },
 {
  "q": "A: \"No, thanks, I'm fine.\" (responding to an offer) What is A doing?",
  "o": [
   "To decline politely",
   "To accept",
   "To request more",
   "To complain"
  ],
  "a": 0,
  "exp": "رد مهذب برفض عرض مقدَّم.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "A: \"That's a great idea, let's do it!\" What is A doing?",
  "o": [
   "To agree enthusiastically",
   "To disagree",
   "To warn",
   "To apologize"
  ],
  "a": 0,
  "exp": "موافقة حماسية على اقتراح.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "A: \"I completely disagree with that plan.\" What is A doing?",
  "o": [
   "To disagree",
   "To agree",
   "To suggest",
   "To thank"
  ],
  "a": 0,
  "exp": "تعبير مباشر عن المخالفة في الرأي.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "A: \"Watch out! The floor is wet.\" What is A doing?",
  "o": [
   "To warn",
   "To invite",
   "To thank",
   "To apologize"
  ],
  "a": 0,
  "exp": "تحذير من خطر مباشر.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "A: \"Would you like to come to my birthday party?\" What is A doing?",
  "o": [
   "To invite",
   "To refuse",
   "To warn",
   "To complain"
  ],
  "a": 0,
  "exp": "دعوة صريحة لحضور مناسبة.",
  "tag": "العرض والطلب"
 },
 {
  "q": "A: \"I'm really looking forward to the trip.\" What is A expressing?",
  "o": [
   "Excitement/anticipation",
   "Boredom",
   "Regret",
   "Anger"
  ],
  "a": 0,
  "exp": "\"looking forward to\" تعبّر عن التشوّق لأمر قادم.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "A: \"This service is unacceptable! I want a refund.\" What is A doing?",
  "o": [
   "To complain",
   "To compliment",
   "To thank",
   "To offer"
  ],
  "a": 0,
  "exp": "التعبير عن استياء من خدمة سيئة مع طلب حل.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "A: \"Well done! That was an excellent presentation.\" What is A doing?",
  "o": [
   "To compliment",
   "To criticize",
   "To warn",
   "To apologize"
  ],
  "a": 0,
  "exp": "إطراء على أداء جيد.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "A: \"If you don't stop, I'll report you to the manager.\" What is A doing?",
  "o": [
   "To threaten",
   "To invite",
   "To thank",
   "To congratulate"
  ],
  "a": 0,
  "exp": "التلويح بعاقبة سلبية لإجبار الطرف الآخر على التوقف.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "A: \"I guess it might rain later.\" What is A expressing?",
  "o": [
   "A guess/possibility",
   "A fact",
   "A promise",
   "An order"
  ],
  "a": 0,
  "exp": "\"might\" و\"I guess\" تفيدان احتمالاً وليس يقيناً.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "A: \"You really should apologize to her.\" What is A doing?",
  "o": [
   "To advise",
   "To threaten",
   "To apologize",
   "To invite"
  ],
  "a": 0,
  "exp": "\"should\" فعل ناقص شائع لتقديم النصيحة.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "A: \"Let's meet at 5 instead of 6, shall we?\" What is A doing?",
  "o": [
   "To suggest a change",
   "To cancel the meeting",
   "To refuse to meet",
   "To apologize"
  ],
  "a": 0,
  "exp": "اقتراح تعديل موعد اللقاء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "A: \"I'd love to, but I already have plans.\" What is A doing?",
  "o": [
   "To decline politely",
   "To accept immediately",
   "To get angry",
   "To threaten"
  ],
  "a": 0,
  "exp": "رفض مهذب لدعوة مع تبرير.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "A: \"Could you possibly lend me some money?\" What is A doing?",
  "o": [
   "To make a polite request",
   "To lend money",
   "To refuse money",
   "To thank"
  ],
  "a": 0,
  "exp": "صيغة \"Could you possibly...?\" طلب مهذب جداً.",
  "tag": "العرض والطلب"
 },
 {
  "q": "A: \"I bet he's going to be late again.\" What is A expressing?",
  "o": [
   "A confident prediction",
   "A fact he witnessed",
   "An apology",
   "A compliment"
  ],
  "a": 0,
  "exp": "\"I bet\" تعبّر عن توقّع واثق دون تأكيد كامل.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "A: \"It's none of your business!\" What is A doing?",
  "o": [
   "To refuse to share information",
   "To offer help",
   "To apologize",
   "To congratulate"
  ],
  "a": 0,
  "exp": "رفض قاطع لمشاركة معلومة أو التدخل في شأن شخصي.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "A: \"I really appreciate you taking the time to explain this.\" What is A doing?",
  "o": [
   "To express gratitude",
   "To complain",
   "To request more explanation",
   "To disagree"
  ],
  "a": 0,
  "exp": "تعبير صريح عن التقدير والامتنان.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "A: \"Could this possibly be true?\" What is A expressing?",
  "o": [
   "Disbelief/doubt",
   "Certainty",
   "Agreement",
   "Gratitude"
  ],
  "a": 0,
  "exp": "السؤال بصيغة استنكارية يعبّر عن شك أو عدم تصديق.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "A: \"Feel free to ask me anything.\" What is A doing?",
  "o": [
   "To give permission/encourage",
   "To forbid",
   "To warn",
   "To complain"
  ],
  "a": 0,
  "exp": "دعوة مفتوحة للسؤال دون قيود = إعطاء إذن وتشجيع.",
  "tag": "العرض والطلب"
 },
 {
  "q": "A: \"I'm afraid I can't make it to the meeting.\" What is A doing?",
  "o": [
   "To politely refuse/decline",
   "To confirm attendance",
   "To invite others",
   "To thank"
  ],
  "a": 0,
  "exp": "\"I'm afraid I can't\" صيغة مهذبة للاعتذار عن عدم الحضور.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "A: \"Congratulations, you got the job!\" B: \"Thank you, I'm thrilled!\" What is B expressing?",
  "o": [
   "Extreme happiness",
   "Sadness",
   "Anger",
   "Boredom"
  ],
  "a": 0,
  "exp": "\"thrilled\" تعني سعيداً جداً/متحمساً.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"Would you mind closing the door?\" The speaker is ___",
  "o": [
   "politely asking someone to close the door",
   "ordering someone to leave",
   "complaining about the cold",
   "refusing to close the door"
  ],
  "a": 0,
  "exp": "Would you mind + gerund صيغة مهذّبة لطلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"I need this report on my desk by 5 p.m.\" The speaker is ___",
  "o": [
   "giving a clear deadline/instruction",
   "asking for permission",
   "making a suggestion",
   "expressing surprise"
  ],
  "a": 0,
  "exp": "الجملة تحدد موعداً نهائياً واضحاً، فهي تعليمات/طلب مباشر.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Could you possibly lend me your notes?\" The speaker is ___",
  "o": [
   "making a polite request",
   "giving an order",
   "expressing doubt",
   "apologizing"
  ],
  "a": 0,
  "exp": "Could you possibly...؟ صيغة مهذبة جداً لطلب مساعدة أو شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Get out of my office right now!\" The speaker is ___",
  "o": [
   "giving a forceful command",
   "making a polite request",
   "offering help",
   "expressing sympathy"
  ],
  "a": 0,
  "exp": "نبرة الجملة وترتيبها المباشر (أمر + right now) يدلان على أمر حازم/غاضب.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Would it be possible for me to leave early today?\" The speaker is ___",
  "o": [
   "asking for permission",
   "giving an order",
   "making a complaint",
   "expressing regret"
  ],
  "a": 0,
  "exp": "Would it be possible for me to...؟ صيغة مهذبة لطلب الإذن.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Kindly refrain from smoking in this area.\" The speaker is ___",
  "o": [
   "formally instructing someone not to do something",
   "inviting someone to smoke",
   "apologizing for smoking",
   "complaining about smoke"
  ],
  "a": 0,
  "exp": "kindly refrain from صيغة رسمية لإصدار تعليمات بعدم فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"I'm terribly sorry for the inconvenience this has caused.\" The speaker is ___",
  "o": [
   "making a formal apology",
   "making a complaint",
   "giving advice",
   "expressing anger"
  ],
  "a": 0,
  "exp": "I'm terribly sorry for... صيغة اعتذار رسمي عن إزعاج تسبب به.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"It was entirely my fault, and I take full responsibility.\" The speaker is ___",
  "o": [
   "accepting blame and apologizing",
   "blaming someone else",
   "refusing to apologize",
   "making an excuse"
  ],
  "a": 0,
  "exp": "الجملة تعترف بالخطأ بوضوح وتتحمل المسؤولية الكاملة — اعتذار صريح.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I hope you can forgive me for what happened.\" The speaker is ___",
  "o": [
   "seeking forgiveness after a mistake",
   "giving a warning",
   "making a suggestion",
   "expressing pride"
  ],
  "a": 0,
  "exp": "hope you can forgive me صيغة تطلب الصفح بعد ارتكاب خطأ.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I should have told you sooner — I apologize for the delay.\" The speaker is ___",
  "o": [
   "apologizing for not communicating in time",
   "giving instructions",
   "making a request",
   "expressing disbelief"
  ],
  "a": 0,
  "exp": "I should have + PP مع apologize for the delay اعتذار عن التأخر في الإبلاغ.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"Absolutely, I couldn't agree with you more.\" The speaker is ___",
  "o": [
   "strongly agreeing",
   "strongly disagreeing",
   "expressing doubt",
   "asking a question"
  ],
  "a": 0,
  "exp": "Absolutely + couldn't agree more تعبير قوي عن الموافقة التامة.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"You have my word, I will finish it by tomorrow.\" The speaker is ___",
  "o": [
   "making a firm promise",
   "making an excuse",
   "refusing a request",
   "expressing confusion"
  ],
  "a": 0,
  "exp": "you have my word تعبير يؤكد وعداً قاطعاً.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"That's exactly what I was thinking.\" The speaker is ___",
  "o": [
   "expressing agreement",
   "expressing surprise",
   "making a complaint",
   "giving a warning"
  ],
  "a": 0,
  "exp": "exactly what I was thinking تعبير عن اتفاق تام مع فكرة الطرف الآخر.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"I can assure you the product is completely safe.\" The speaker is ___",
  "o": [
   "giving a confident assurance",
   "expressing doubt",
   "apologizing",
   "complaining"
  ],
  "a": 0,
  "exp": "I can assure you صيغة تُستخدم لتقديم تأكيد واثق.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"Watch out! There's a car coming!\" The speaker is ___",
  "o": [
   "warning of immediate danger",
   "giving directions",
   "making a joke",
   "expressing happiness"
  ],
  "a": 0,
  "exp": "Watch out! تحذير فوري من خطر وشيك.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"If you don't stop that, there will be serious consequences.\" The speaker is ___",
  "o": [
   "issuing a threat",
   "giving a compliment",
   "making a suggestion",
   "expressing sympathy"
  ],
  "a": 0,
  "exp": "If you don't...there will be consequences صيغة تهديد واضحة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"Be careful, the floor is wet.\" The speaker is ___",
  "o": [
   "warning about a hazard",
   "giving an order",
   "expressing anger",
   "making an apology"
  ],
  "a": 0,
  "exp": "Be careful + وصف الخطر تحذير وقائي بسيط.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"One more mistake like that and you're fired.\" The speaker is ___",
  "o": [
   "issuing a warning with a threat of consequence",
   "offering a promotion",
   "apologizing",
   "asking for advice"
  ],
  "a": 0,
  "exp": "الجملة تربط خطأ محتملاً بنتيجة سلبية قاسية — تحذير/تهديد.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"If I were in your shoes, I'd take the job offer.\" The speaker is ___",
  "o": [
   "giving advice",
   "making a complaint",
   "expressing anger",
   "giving an order"
  ],
  "a": 0,
  "exp": "If I were in your shoes صيغة شائعة لتقديم نصيحة.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"You'd better see a doctor about that cough.\" The speaker is ___",
  "o": [
   "strongly advising someone",
   "warning of danger",
   "apologizing",
   "making a request"
  ],
  "a": 0,
  "exp": "You'd better + المصدر بدون to صيغة نصيحة قوية.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"In my opinion, this plan needs more work.\" The speaker is ___",
  "o": [
   "expressing a personal opinion",
   "giving an order",
   "making an apology",
   "expressing agreement"
  ],
  "a": 0,
  "exp": "In my opinion صيغة مباشرة لتقديم رأي شخصي.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"Personally, I think we should wait a little longer.\" The speaker is ___",
  "o": [
   "expressing a personal opinion/suggestion",
   "giving a command",
   "making a complaint",
   "expressing regret"
  ],
  "a": 0,
  "exp": "Personally, I think صيغة لتقديم رأي شخصي مقترناً باقتراح.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"I'm afraid that won't be possible.\" The speaker is ___",
  "o": [
   "politely refusing",
   "politely agreeing",
   "apologizing for a mistake",
   "asking a question"
  ],
  "a": 0,
  "exp": "I'm afraid + won't be possible صيغة رفض مهذبة.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"With all due respect, I disagree with that approach.\" The speaker is ___",
  "o": [
   "politely objecting",
   "politely agreeing",
   "giving praise",
   "expressing gratitude"
  ],
  "a": 0,
  "exp": "With all due respect, I disagree صيغة اعتراض مهذبة تحافظ على الاحترام.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"There's no way I'm doing that.\" The speaker is ___",
  "o": [
   "firmly refusing",
   "hesitantly agreeing",
   "politely asking",
   "making a suggestion"
  ],
  "a": 0,
  "exp": "There's no way I'm... تعبير قوي عن الرفض القاطع.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I object to the way this decision was made.\" The speaker is ___",
  "o": [
   "formally objecting",
   "formally agreeing",
   "apologizing",
   "giving a compliment"
  ],
  "a": 0,
  "exp": "I object to صيغة رسمية للاعتراض على شيء.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"Shall I carry that bag for you?\" The speaker is ___",
  "o": [
   "offering help",
   "asking for help",
   "refusing to help",
   "complaining about a bag"
  ],
  "a": 0,
  "exp": "Shall I...? صيغة تُستخدم لعرض المساعدة بأدب.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Feel free to ask me anything you need.\" The speaker is ___",
  "o": [
   "offering assistance/openness",
   "refusing to help",
   "giving a warning",
   "expressing doubt"
  ],
  "a": 0,
  "exp": "Feel free to... تعبير يعرض المساعدة أو التواصل بانفتاح.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Would you like me to explain it again?\" The speaker is ___",
  "o": [
   "offering to help clarify something",
   "asking for clarification",
   "refusing to explain",
   "expressing confusion"
  ],
  "a": 0,
  "exp": "Would you like me to...? صيغة تعرض تقديم مساعدة أو توضيح.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Can I get you anything from the kitchen?\" The speaker is ___",
  "o": [
   "offering to bring something",
   "asking permission to enter the kitchen",
   "complaining about the kitchen",
   "giving instructions"
  ],
  "a": 0,
  "exp": "Can I get you...? صيغة شائعة لعرض إحضار شيء لشخص آخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"You should have double-checked before sending it.\" The speaker is ___",
  "o": [
   "criticizing a past action",
   "giving a compliment",
   "offering help",
   "expressing surprise"
  ],
  "a": 0,
  "exp": "should have + PP يعبّر عن لوم/انتقاد لفعل لم يُنجز بشكل صحيح في الماضي.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"It's your fault we missed the flight.\" The speaker is ___",
  "o": [
   "blaming someone directly",
   "apologizing",
   "giving advice",
   "expressing gratitude"
  ],
  "a": 0,
  "exp": "it's your fault تعبير مباشر يُلقي اللوم على الطرف الآخر.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"How could you forget something so important?\" The speaker is ___",
  "o": [
   "expressing criticism/disappointment",
   "asking for information",
   "giving a compliment",
   "making a request"
  ],
  "a": 0,
  "exp": "How could you...؟ سؤال بلاغي يعبّر عن الانتقاد وخيبة الأمل.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"I expected better from someone with your experience.\" The speaker is ___",
  "o": [
   "expressing disappointment/criticism",
   "giving praise",
   "offering encouragement",
   "asking a favor"
  ],
  "a": 0,
  "exp": "I expected better from... تعبير عن خيبة أمل وانتقاد ضمني.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"I'm so sorry for your loss.\" The speaker is ___",
  "o": [
   "expressing condolences",
   "expressing joy",
   "giving advice",
   "making a complaint"
  ],
  "a": 0,
  "exp": "I'm so sorry for your loss عبارة تعازٍ قياسية عند وفاة شخص.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"Congratulations on your graduation! I'm so proud of you.\" The speaker is ___",
  "o": [
   "expressing joy and pride",
   "expressing sympathy",
   "giving a warning",
   "making a complaint"
  ],
  "a": 0,
  "exp": "Congratulations + proud of you تعبير عن الفرح والفخر بإنجاز.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I can't imagine how hard this must be for you.\" The speaker is ___",
  "o": [
   "expressing sympathy",
   "expressing anger",
   "giving instructions",
   "making a joke"
  ],
  "a": 0,
  "exp": "I can't imagine how hard... تعبير عن التعاطف مع محنة الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"My deepest condolences to you and your family.\" The speaker is ___",
  "o": [
   "formally expressing condolences",
   "formally congratulating",
   "apologizing",
   "complaining"
  ],
  "a": 0,
  "exp": "My deepest condolences عبارة رسمية للتعزية.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I'm thrilled to hear the good news!\" The speaker is ___",
  "o": [
   "expressing excitement/happiness",
   "expressing sadness",
   "giving advice",
   "making an apology"
  ],
  "a": 0,
  "exp": "thrilled to hear تعبير عن سعادة وحماس شديدين.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"Please turn off the lights before you leave the garage.\" The speaker is ___",
  "o": [
   "making an apology",
   "giving an instruction or making a request",
   "politely refusing or objecting",
   "giving advice or a personal opinion"
  ],
  "a": 1,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Please turn off the lights before you leave the classroom.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "giving a compliment or praise",
   "expressing agreement or giving assurance",
   "giving an instruction or making a request"
  ],
  "a": 3,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Please turn off the lights before you leave the office.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "expressing agreement or giving assurance",
   "giving advice or a personal opinion",
   "making a guess or speculation"
  ],
  "a": 0,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Could you send me the invoice by tomorrow morning?\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "making a guess or speculation",
   "giving a compliment or praise",
   "giving an instruction or making a request"
  ],
  "a": 3,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Could you send me the contract by tomorrow morning?\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "giving an instruction or making a request",
   "politely refusing or objecting",
   "making an apology"
  ],
  "a": 1,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Could you send me the file by tomorrow morning?\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "giving an instruction or making a request",
   "politely refusing or objecting",
   "giving a warning"
  ],
  "a": 1,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Make sure you lock the warehouse before you go.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "criticizing or blaming someone",
   "giving an instruction or making a request",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 2,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Make sure you lock the kitchen before you go.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "politely refusing or objecting",
   "giving an instruction or making a request",
   "expressing surprise or disbelief"
  ],
  "a": 2,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"I need you to finish the invoice by Friday.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "giving an instruction or making a request",
   "expressing agreement or giving assurance",
   "making an apology"
  ],
  "a": 1,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"I need you to finish the document by Friday.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "expressing agreement or giving assurance",
   "giving an instruction or making a request",
   "criticizing or blaming someone"
  ],
  "a": 2,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"I need you to finish the presentation by Friday.\" The speaker is ___",
  "o": [
   "giving a warning",
   "giving an instruction or making a request",
   "offering help or something to someone",
   "making a guess or speculation"
  ],
  "a": 1,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Would you please lower your voice a little?\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "giving an instruction or making a request",
   "making a guess or speculation",
   "expressing agreement or giving assurance"
  ],
  "a": 1,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Take this presentation to the manager right away.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "giving an instruction or making a request",
   "politely refusing or objecting",
   "expressing agreement or giving assurance"
  ],
  "a": 1,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Take this contract to the manager right away.\" The speaker is ___",
  "o": [
   "giving a warning",
   "giving an instruction or making a request",
   "politely refusing or objecting",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 1,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Don't forget to bring your essay tomorrow.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "expressing surprise or disbelief",
   "criticizing or blaming someone",
   "giving an instruction or making a request"
  ],
  "a": 3,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Don't forget to bring your invoice tomorrow.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "giving a warning",
   "giving a compliment or praise",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 0,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Don't forget to bring your document tomorrow.\" The speaker is ___",
  "o": [
   "giving a warning",
   "making a guess or speculation",
   "correcting a misunderstanding or clarifying a point",
   "giving an instruction or making a request"
  ],
  "a": 3,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Could you possibly translate this document for me?\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "correcting a misunderstanding or clarifying a point",
   "expressing surprise or disbelief",
   "giving an instruction or making a request"
  ],
  "a": 3,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Could you possibly translate this essay for me?\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "making an apology",
   "giving an instruction or making a request",
   "expressing agreement or giving assurance"
  ],
  "a": 2,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Could you possibly translate this presentation for me?\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "giving an instruction or making a request",
   "politely refusing or objecting",
   "criticizing or blaming someone"
  ],
  "a": 1,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Please hand in your report at the front desk.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "giving an instruction or making a request",
   "politely refusing or objecting",
   "giving a compliment or praise"
  ],
  "a": 1,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Please hand in your document at the front desk.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "giving an instruction or making a request",
   "politely refusing or objecting",
   "giving a compliment or praise"
  ],
  "a": 1,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Please hand in your presentation at the front desk.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "giving a warning",
   "giving a compliment or praise",
   "making a guess or speculation"
  ],
  "a": 0,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"I'd like you to double-check the presentation before submitting it.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "making an apology",
   "giving an instruction or making a request",
   "expressing agreement or giving assurance"
  ],
  "a": 2,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"I'd like you to double-check the invoice before submitting it.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "making an apology",
   "giving advice or a personal opinion",
   "expressing surprise or disbelief"
  ],
  "a": 0,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"I'd like you to double-check the contract before submitting it.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "giving an instruction or making a request",
   "giving a compliment or praise",
   "giving a warning"
  ],
  "a": 1,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Kindly wait here until your name is called.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "giving a warning",
   "politely refusing or objecting",
   "giving an instruction or making a request"
  ],
  "a": 3,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Turn left at the next corner and stop the car.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "giving an instruction or making a request",
   "giving a compliment or praise",
   "giving advice or a personal opinion"
  ],
  "a": 1,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Please keep the warehouse clean at all times.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "giving a compliment or praise",
   "giving a warning",
   "giving an instruction or making a request"
  ],
  "a": 3,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Please keep the classroom clean at all times.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "criticizing or blaming someone",
   "giving advice or a personal opinion",
   "expressing agreement or giving assurance"
  ],
  "a": 0,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Please keep the garage clean at all times.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "criticizing or blaming someone",
   "making a guess or speculation",
   "giving an instruction or making a request"
  ],
  "a": 3,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Could you water the plants while I'm away?\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "making a guess or speculation",
   "correcting a misunderstanding or clarifying a point",
   "expressing agreement or giving assurance"
  ],
  "a": 0,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Set the table before the guests arrive.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "expressing agreement or giving assurance",
   "expressing sympathy, condolences, or strong emotion",
   "giving a compliment or praise"
  ],
  "a": 0,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Please switch off your phone during the report.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "politely refusing or objecting",
   "giving an instruction or making a request",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 2,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"Please switch off your phone during the contract.\" The speaker is ___",
  "o": [
   "giving a warning",
   "giving an instruction or making a request",
   "giving advice or a personal opinion",
   "politely refusing or objecting"
  ],
  "a": 1,
  "exp": "صيغة الجملة (أمر مباشر أو طلب مهذّب) تدل على إصدار تعليمات أو طلب فعل شيء.",
  "tag": "الأوامر والطلبات"
 },
 {
  "q": "\"I'm really sorry for missing your presentation last week.\" The speaker is ___",
  "o": [
   "making an apology",
   "giving a compliment or praise",
   "correcting a misunderstanding or clarifying a point",
   "giving a warning"
  ],
  "a": 0,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I'm really sorry for missing your conference last week.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "making an apology",
   "criticizing or blaming someone",
   "expressing agreement or giving assurance"
  ],
  "a": 1,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I apologize for the mistake in the car.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "expressing surprise or disbelief",
   "expressing agreement or giving assurance",
   "making an apology"
  ],
  "a": 3,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I apologize for the mistake in the watch.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "offering help or something to someone",
   "making an apology",
   "giving advice or a personal opinion"
  ],
  "a": 2,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I'm so sorry I forgot to call you about the phone.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "correcting a misunderstanding or clarifying a point",
   "politely refusing or objecting",
   "making an apology"
  ],
  "a": 3,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I'm so sorry I forgot to call you about the camera.\" The speaker is ___",
  "o": [
   "making an apology",
   "expressing agreement or giving assurance",
   "giving an instruction or making a request",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 0,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I'm so sorry I forgot to call you about the car.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "making an apology",
   "giving a compliment or praise",
   "politely refusing or objecting"
  ],
  "a": 1,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"Please forgive me for being late to the interview.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "making an apology",
   "offering help or something to someone",
   "politely refusing or objecting"
  ],
  "a": 1,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"Please forgive me for being late to the ceremony.\" The speaker is ___",
  "o": [
   "making an apology",
   "giving a compliment or praise",
   "politely refusing or objecting",
   "expressing surprise or disbelief"
  ],
  "a": 0,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"Please forgive me for being late to the conference.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "making an apology",
   "politely refusing or objecting",
   "expressing agreement or giving assurance"
  ],
  "a": 1,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I feel terrible about breaking your laptop.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "giving a compliment or praise",
   "making an apology",
   "giving a warning"
  ],
  "a": 2,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I feel terrible about breaking your car.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "offering help or something to someone",
   "making an apology",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 2,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I feel terrible about breaking your report.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "giving an instruction or making a request",
   "expressing agreement or giving assurance",
   "making an apology"
  ],
  "a": 3,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I owe you an apology for what happened at the party.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "making an apology",
   "correcting a misunderstanding or clarifying a point",
   "offering help or something to someone"
  ],
  "a": 1,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I owe you an apology for what happened at the conference.\" The speaker is ___",
  "o": [
   "giving a warning",
   "expressing sympathy, condolences, or strong emotion",
   "giving a compliment or praise",
   "making an apology"
  ],
  "a": 3,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I owe you an apology for what happened at the presentation.\" The speaker is ___",
  "o": [
   "making an apology",
   "expressing agreement or giving assurance",
   "correcting a misunderstanding or clarifying a point",
   "giving a warning"
  ],
  "a": 0,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I'm sorry for the confusion caused by my vase.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "giving a compliment or praise",
   "giving a warning",
   "making an apology"
  ],
  "a": 3,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I'm sorry for the confusion caused by my laptop.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "offering help or something to someone",
   "making an apology",
   "giving an instruction or making a request"
  ],
  "a": 2,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I'm sorry for the confusion caused by my watch.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "making a guess or speculation",
   "making an apology",
   "expressing agreement or giving assurance"
  ],
  "a": 2,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I should have told you sooner, and I apologize for that.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "making an apology",
   "expressing surprise or disbelief",
   "giving a warning"
  ],
  "a": 1,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I sincerely apologize for the delay in delivering your camera.\" The speaker is ___",
  "o": [
   "making an apology",
   "correcting a misunderstanding or clarifying a point",
   "expressing agreement or giving assurance",
   "criticizing or blaming someone"
  ],
  "a": 0,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I sincerely apologize for the delay in delivering your report.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "correcting a misunderstanding or clarifying a point",
   "making an apology",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 2,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I'm sorry I couldn't attend the ceremony; something urgent came up.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "expressing agreement or giving assurance",
   "making an apology",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 2,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I'm sorry I couldn't attend the conference; something urgent came up.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "making a guess or speculation",
   "making an apology",
   "giving a compliment or praise"
  ],
  "a": 2,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I'm sorry I couldn't attend the meeting; something urgent came up.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "giving a warning",
   "making an apology",
   "expressing surprise or disbelief"
  ],
  "a": 2,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I regret not mentioning this earlier — I'm sorry for the trouble.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "criticizing or blaming someone",
   "making an apology",
   "offering help or something to someone"
  ],
  "a": 2,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"Please accept my apologies for the noise last night.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "making a guess or speculation",
   "making an apology",
   "offering help or something to someone"
  ],
  "a": 2,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I'm sorry for interrupting your wedding.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "criticizing or blaming someone",
   "making an apology",
   "giving a warning"
  ],
  "a": 2,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I'm sorry for interrupting your ceremony.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "making an apology",
   "politely refusing or objecting",
   "making a guess or speculation"
  ],
  "a": 1,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I apologize if my comment upset you during the ceremony.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "giving advice or a personal opinion",
   "giving a compliment or praise",
   "making an apology"
  ],
  "a": 3,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I apologize if my comment upset you during the party.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "giving a warning",
   "making an apology",
   "expressing agreement or giving assurance"
  ],
  "a": 2,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"I apologize if my comment upset you during the presentation.\" The speaker is ___",
  "o": [
   "making an apology",
   "making a guess or speculation",
   "expressing surprise or disbelief",
   "offering help or something to someone"
  ],
  "a": 0,
  "exp": "الجملة تتضمن اعتذاراً صريحاً عن خطأ أو إزعاج تسبب به المتحدث.",
  "tag": "الاعتذار"
 },
 {
  "q": "\"Absolutely, I agree with your plan for the event.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "expressing agreement or giving assurance",
   "making a guess or speculation",
   "politely refusing or objecting"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"Absolutely, I agree with your plan for the budget.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "expressing surprise or disbelief",
   "making an apology",
   "expressing agreement or giving assurance"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"You have my word, the design will be ready on time.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "expressing surprise or disbelief",
   "giving advice or a personal opinion",
   "expressing agreement or giving assurance"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"You have my word, the event will be ready on time.\" The speaker is ___",
  "o": [
   "making an apology",
   "expressing agreement or giving assurance",
   "criticizing or blaming someone",
   "giving advice or a personal opinion"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"I can assure you the event is completely safe.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "correcting a misunderstanding or clarifying a point",
   "giving a compliment or praise",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"I can assure you the proposal is completely safe.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "expressing agreement or giving assurance",
   "making an apology",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"That's exactly right, I couldn't agree more.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "expressing surprise or disbelief",
   "giving a compliment or praise",
   "expressing agreement or giving assurance"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"Yes, definitely — let's go ahead with the trip.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "giving advice or a personal opinion",
   "politely refusing or objecting",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"Yes, definitely — let's go ahead with the schedule.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "expressing agreement or giving assurance",
   "making an apology",
   "giving a warning"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"I promise I will finish the budget by tomorrow.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "criticizing or blaming someone",
   "giving a warning",
   "giving advice or a personal opinion"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"I promise I will finish the design by tomorrow.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "offering help or something to someone",
   "giving a compliment or praise",
   "expressing agreement or giving assurance"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"Of course, that sounds like a great idea for the event.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "giving an instruction or making a request",
   "correcting a misunderstanding or clarifying a point",
   "expressing agreement or giving assurance"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"Of course, that sounds like a great idea for the design.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "offering help or something to someone",
   "politely refusing or objecting",
   "expressing agreement or giving assurance"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"I'm one hundred percent sure about the design.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "politely refusing or objecting",
   "criticizing or blaming someone",
   "expressing agreement or giving assurance"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"I'm one hundred percent sure about the project.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "expressing agreement or giving assurance",
   "offering help or something to someone",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"I'm one hundred percent sure about the event.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "expressing sympathy, condolences, or strong emotion",
   "giving a warning",
   "expressing surprise or disbelief"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"You can count on me to handle the design.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "expressing surprise or disbelief",
   "correcting a misunderstanding or clarifying a point",
   "giving an instruction or making a request"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"You can count on me to handle the trip.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "expressing agreement or giving assurance",
   "giving a warning",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"You can count on me to handle the project.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "expressing agreement or giving assurance",
   "criticizing or blaming someone",
   "offering help or something to someone"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"I fully support your decision about the design.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "correcting a misunderstanding or clarifying a point",
   "expressing agreement or giving assurance",
   "criticizing or blaming someone"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"I fully support your decision about the event.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "politely refusing or objecting",
   "making an apology",
   "expressing agreement or giving assurance"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"I fully support your decision about the project.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "giving a compliment or praise",
   "expressing agreement or giving assurance",
   "giving an instruction or making a request"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"Certainly, I'll make sure the budget is done correctly.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "making a guess or speculation",
   "making an apology",
   "giving an instruction or making a request"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"No doubt about it, that's the right approach for the design.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "expressing agreement or giving assurance",
   "politely refusing or objecting",
   "offering help or something to someone"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"No doubt about it, that's the right approach for the proposal.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "making an apology",
   "expressing agreement or giving assurance",
   "giving a warning"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"No doubt about it, that's the right approach for the project.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "giving an instruction or making a request",
   "politely refusing or objecting",
   "expressing agreement or giving assurance"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن موافقة قوية أو تأكيد/ضمان من المتحدث.",
  "tag": "التأكيد والموافقة"
 },
 {
  "q": "\"Watch out! The project is about to fall.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "giving a warning",
   "making an apology",
   "expressing surprise or disbelief"
  ],
  "a": 1,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"Watch out! The glass is about to fall.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "offering help or something to someone",
   "giving a compliment or praise",
   "giving a warning"
  ],
  "a": 3,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"Be careful, the warehouse floor is very slippery.\" The speaker is ___",
  "o": [
   "giving a warning",
   "making an apology",
   "giving a compliment or praise",
   "offering help or something to someone"
  ],
  "a": 0,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"Be careful, the balcony floor is very slippery.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "making an apology",
   "giving a warning",
   "criticizing or blaming someone"
  ],
  "a": 2,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"If you don't fix this, there will be serious consequences.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "politely refusing or objecting",
   "expressing surprise or disbelief",
   "giving a warning"
  ],
  "a": 3,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"One more mistake with the ladder and you're off the project.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "making a guess or speculation",
   "giving a warning",
   "criticizing or blaming someone"
  ],
  "a": 2,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"One more mistake with the machine and you're off the project.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "giving a warning",
   "expressing agreement or giving assurance",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 1,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"One more mistake with the glass and you're off the project.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "offering help or something to someone",
   "giving a warning",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 2,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"Careful! That equipment is extremely hot.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "giving a warning",
   "giving advice or a personal opinion",
   "making an apology"
  ],
  "a": 1,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"Careful! That machine is extremely hot.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "giving a compliment or praise",
   "giving advice or a personal opinion",
   "giving a warning"
  ],
  "a": 3,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"Careful! That project is extremely hot.\" The speaker is ___",
  "o": [
   "giving a warning",
   "expressing sympathy, condolences, or strong emotion",
   "correcting a misunderstanding or clarifying a point",
   "giving an instruction or making a request"
  ],
  "a": 0,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"You'd better finish the stove soon, or we'll miss the deadline.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "giving advice or a personal opinion",
   "giving a warning",
   "politely refusing or objecting"
  ],
  "a": 2,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"You'd better finish the ladder soon, or we'll miss the deadline.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "offering help or something to someone",
   "giving a warning",
   "criticizing or blaming someone"
  ],
  "a": 2,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"You'd better finish the project soon, or we'll miss the deadline.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "politely refusing or objecting",
   "giving a warning",
   "making a guess or speculation"
  ],
  "a": 2,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"Stop right there — it's dangerous to go near the kitchen.\" The speaker is ___",
  "o": [
   "giving a warning",
   "correcting a misunderstanding or clarifying a point",
   "giving advice or a personal opinion",
   "offering help or something to someone"
  ],
  "a": 0,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"Stop right there — it's dangerous to go near the warehouse.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "giving a warning",
   "expressing agreement or giving assurance",
   "giving advice or a personal opinion"
  ],
  "a": 1,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"If you touch that glass, you might get hurt.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "politely refusing or objecting",
   "giving a warning",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 2,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"If you touch that wire, you might get hurt.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "giving a compliment or praise",
   "giving a warning",
   "expressing agreement or giving assurance"
  ],
  "a": 2,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"If you touch that equipment, you might get hurt.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "politely refusing or objecting",
   "expressing agreement or giving assurance",
   "giving a warning"
  ],
  "a": 3,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"Be careful with the glass; it could break easily.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "expressing surprise or disbelief",
   "politely refusing or objecting",
   "giving a warning"
  ],
  "a": 3,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"Be careful with the machine; it could break easily.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "expressing agreement or giving assurance",
   "giving a warning",
   "giving an instruction or making a request"
  ],
  "a": 2,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"Be careful with the equipment; it could break easily.\" The speaker is ___",
  "o": [
   "giving a warning",
   "making an apology",
   "criticizing or blaming someone",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 0,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"Don't go near the stairwell, it's not safe at night.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "giving a warning",
   "giving an instruction or making a request",
   "expressing agreement or giving assurance"
  ],
  "a": 1,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"If this continues, we'll have to cancel the entire machine.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "expressing surprise or disbelief",
   "giving a warning",
   "criticizing or blaming someone"
  ],
  "a": 2,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"If this continues, we'll have to cancel the entire ladder.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "giving a warning",
   "expressing surprise or disbelief",
   "making an apology"
  ],
  "a": 1,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"If this continues, we'll have to cancel the entire stove.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "giving a warning",
   "making a guess or speculation",
   "making an apology"
  ],
  "a": 1,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"Watch your step, the kitchen stairs are broken.\" The speaker is ___",
  "o": [
   "giving a warning",
   "giving a compliment or praise",
   "making an apology",
   "expressing agreement or giving assurance"
  ],
  "a": 0,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"Watch your step, the balcony stairs are broken.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "expressing surprise or disbelief",
   "giving a warning",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 2,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"Watch your step, the construction site stairs are broken.\" The speaker is ___",
  "o": [
   "giving a warning",
   "politely refusing or objecting",
   "correcting a misunderstanding or clarifying a point",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 0,
  "exp": "الجملة تحذّر من خطر وشيك أو نتيجة سلبية محتملة.",
  "tag": "التحذير والتهديد"
 },
 {
  "q": "\"In my opinion, the investment needs more work before we launch it.\" The speaker is ___",
  "o": [
   "giving a warning",
   "giving advice or a personal opinion",
   "politely refusing or objecting",
   "expressing surprise or disbelief"
  ],
  "a": 1,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"In my opinion, the design needs more work before we launch it.\" The speaker is ___",
  "o": [
   "making an apology",
   "giving advice or a personal opinion",
   "giving a compliment or praise",
   "giving a warning"
  ],
  "a": 1,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"In my opinion, the offer needs more work before we launch it.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "giving advice or a personal opinion",
   "making an apology",
   "giving an instruction or making a request"
  ],
  "a": 1,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"If I were you, I'd think twice about the schedule.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "expressing surprise or disbelief",
   "giving advice or a personal opinion",
   "making a guess or speculation"
  ],
  "a": 2,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"If I were you, I'd think twice about the design.\" The speaker is ___",
  "o": [
   "making an apology",
   "expressing sympathy, condolences, or strong emotion",
   "politely refusing or objecting",
   "giving advice or a personal opinion"
  ],
  "a": 3,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"If I were you, I'd think twice about the offer.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "correcting a misunderstanding or clarifying a point",
   "expressing sympathy, condolences, or strong emotion",
   "giving advice or a personal opinion"
  ],
  "a": 3,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"You'd better reconsider your decision about the plan.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "giving an instruction or making a request",
   "giving advice or a personal opinion",
   "criticizing or blaming someone"
  ],
  "a": 2,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"You'd better reconsider your decision about the report.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "giving advice or a personal opinion",
   "giving an instruction or making a request",
   "making an apology"
  ],
  "a": 1,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"You'd better reconsider your decision about the investment.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "correcting a misunderstanding or clarifying a point",
   "giving advice or a personal opinion",
   "giving an instruction or making a request"
  ],
  "a": 2,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"Personally, I think the report is a great choice.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "expressing agreement or giving assurance",
   "expressing sympathy, condolences, or strong emotion",
   "giving advice or a personal opinion"
  ],
  "a": 3,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"Personally, I think the offer is a great choice.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "expressing surprise or disbelief",
   "criticizing or blaming someone",
   "giving advice or a personal opinion"
  ],
  "a": 3,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"Personally, I think the plan is a great choice.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "offering help or something to someone",
   "giving advice or a personal opinion",
   "criticizing or blaming someone"
  ],
  "a": 2,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"I believe we should postpone the offer until next month.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "making an apology",
   "giving advice or a personal opinion",
   "expressing agreement or giving assurance"
  ],
  "a": 2,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"I believe we should postpone the design until next month.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "expressing sympathy, condolences, or strong emotion",
   "politely refusing or objecting",
   "giving advice or a personal opinion"
  ],
  "a": 3,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"I believe we should postpone the schedule until next month.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "giving a compliment or praise",
   "giving an instruction or making a request",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 0,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"Why don't you ask an expert about the offer first?\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "offering help or something to someone",
   "making an apology",
   "giving advice or a personal opinion"
  ],
  "a": 3,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"Why don't you ask an expert about the schedule first?\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "giving an instruction or making a request",
   "correcting a misunderstanding or clarifying a point",
   "giving advice or a personal opinion"
  ],
  "a": 3,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"Why don't you ask an expert about the design first?\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "giving a warning",
   "giving advice or a personal opinion",
   "giving a compliment or praise"
  ],
  "a": 2,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"You should really talk to someone about the report.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "expressing sympathy, condolences, or strong emotion",
   "making a guess or speculation",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 0,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"You should really talk to someone about the strategy.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "giving a compliment or praise",
   "giving advice or a personal opinion",
   "expressing agreement or giving assurance"
  ],
  "a": 2,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"You should really talk to someone about the design.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "correcting a misunderstanding or clarifying a point",
   "expressing sympathy, condolences, or strong emotion",
   "making an apology"
  ],
  "a": 0,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"It might be a good idea to review the investment again.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "giving a warning",
   "giving advice or a personal opinion",
   "expressing agreement or giving assurance"
  ],
  "a": 2,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"It might be a good idea to review the report again.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "giving an instruction or making a request",
   "giving a compliment or praise",
   "criticizing or blaming someone"
  ],
  "a": 0,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"It might be a good idea to review the strategy again.\" The speaker is ___",
  "o": [
   "making an apology",
   "giving advice or a personal opinion",
   "expressing sympathy, condolences, or strong emotion",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 1,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"I'd suggest taking a different approach to the design.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "politely refusing or objecting",
   "giving advice or a personal opinion",
   "giving a compliment or praise"
  ],
  "a": 2,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"I'd suggest taking a different approach to the report.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "giving advice or a personal opinion",
   "criticizing or blaming someone",
   "giving a warning"
  ],
  "a": 1,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"From my point of view, the schedule could be improved.\" The speaker is ___",
  "o": [
   "making an apology",
   "politely refusing or objecting",
   "giving advice or a personal opinion",
   "criticizing or blaming someone"
  ],
  "a": 2,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"From my point of view, the investment could be improved.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "expressing surprise or disbelief",
   "making a guess or speculation",
   "giving advice or a personal opinion"
  ],
  "a": 3,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"You should try to get some advice before deciding on the schedule.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "expressing sympathy, condolences, or strong emotion",
   "giving a compliment or praise",
   "giving advice or a personal opinion"
  ],
  "a": 3,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"You should try to get some advice before deciding on the offer.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "giving a compliment or praise",
   "making a guess or speculation",
   "giving advice or a personal opinion"
  ],
  "a": 3,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"You should try to get some advice before deciding on the design.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "giving a warning",
   "making a guess or speculation",
   "giving advice or a personal opinion"
  ],
  "a": 3,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"If I were in your position, I would delay the strategy.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "giving an instruction or making a request",
   "offering help or something to someone",
   "giving advice or a personal opinion"
  ],
  "a": 3,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"If I were in your position, I would delay the investment.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "correcting a misunderstanding or clarifying a point",
   "expressing agreement or giving assurance",
   "giving advice or a personal opinion"
  ],
  "a": 3,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"If I were in your position, I would delay the plan.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "giving a compliment or praise",
   "giving advice or a personal opinion",
   "expressing surprise or disbelief"
  ],
  "a": 2,
  "exp": "الجملة تقدّم رأياً شخصياً أو نصيحة حول موقف معيّن.",
  "tag": "الرأي والنصيحة"
 },
 {
  "q": "\"I'm afraid that won't be possible with the offer.\" The speaker is ___",
  "o": [
   "making an apology",
   "expressing sympathy, condolences, or strong emotion",
   "correcting a misunderstanding or clarifying a point",
   "politely refusing or objecting"
  ],
  "a": 3,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I'm afraid that won't be possible with the budget.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "politely refusing or objecting",
   "expressing agreement or giving assurance",
   "criticizing or blaming someone"
  ],
  "a": 1,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"With all due respect, I disagree with the plan.\" The speaker is ___",
  "o": [
   "making an apology",
   "offering help or something to someone",
   "giving a compliment or praise",
   "politely refusing or objecting"
  ],
  "a": 3,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"With all due respect, I disagree with the request.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "making a guess or speculation",
   "expressing sympathy, condolences, or strong emotion",
   "giving a compliment or praise"
  ],
  "a": 0,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"With all due respect, I disagree with the contract.\" The speaker is ___",
  "o": [
   "making an apology",
   "politely refusing or objecting",
   "giving a warning",
   "giving advice or a personal opinion"
  ],
  "a": 1,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"There's no way I'm accepting the plan as it is.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "making an apology",
   "criticizing or blaming someone",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 0,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"There's no way I'm accepting the design as it is.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "expressing agreement or giving assurance",
   "giving advice or a personal opinion",
   "giving an instruction or making a request"
  ],
  "a": 0,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"There's no way I'm accepting the request as it is.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "giving advice or a personal opinion",
   "politely refusing or objecting",
   "offering help or something to someone"
  ],
  "a": 2,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I object to the way the design was handled.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "giving a warning",
   "giving a compliment or praise",
   "politely refusing or objecting"
  ],
  "a": 3,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I object to the way the contract was handled.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "politely refusing or objecting",
   "expressing agreement or giving assurance",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 1,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I object to the way the budget was handled.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "politely refusing or objecting",
   "criticizing or blaming someone",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 1,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I'm sorry, but I can't approve the design right now.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "expressing agreement or giving assurance",
   "giving a warning",
   "politely refusing or objecting"
  ],
  "a": 3,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I'm sorry, but I can't approve the plan right now.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "giving advice or a personal opinion",
   "expressing sympathy, condolences, or strong emotion",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 0,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I'm sorry, but I can't approve the offer right now.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "politely refusing or objecting",
   "giving advice or a personal opinion",
   "giving a compliment or praise"
  ],
  "a": 1,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"Unfortunately, we have to reject the budget proposal.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "offering help or something to someone",
   "politely refusing or objecting",
   "expressing surprise or disbelief"
  ],
  "a": 2,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"Unfortunately, we have to reject the plan proposal.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "giving advice or a personal opinion",
   "politely refusing or objecting",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 2,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"Unfortunately, we have to reject the proposal proposal.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "politely refusing or objecting",
   "expressing sympathy, condolences, or strong emotion",
   "making an apology"
  ],
  "a": 1,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I don't think that's a good idea for the design.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "offering help or something to someone",
   "politely refusing or objecting",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 2,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I don't think that's a good idea for the plan.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "giving an instruction or making a request",
   "politely refusing or objecting",
   "criticizing or blaming someone"
  ],
  "a": 2,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I don't think that's a good idea for the budget.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "making a guess or speculation",
   "giving an instruction or making a request",
   "politely refusing or objecting"
  ],
  "a": 3,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I'm not comfortable with the offer the way it stands.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "giving a warning",
   "politely refusing or objecting",
   "expressing surprise or disbelief"
  ],
  "a": 2,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I'm not comfortable with the proposal the way it stands.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "giving a warning",
   "politely refusing or objecting",
   "expressing surprise or disbelief"
  ],
  "a": 2,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I'm not comfortable with the plan the way it stands.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "correcting a misunderstanding or clarifying a point",
   "making a guess or speculation",
   "expressing agreement or giving assurance"
  ],
  "a": 0,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"That simply won't work for the plan, I'm afraid.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "giving an instruction or making a request",
   "giving advice or a personal opinion",
   "politely refusing or objecting"
  ],
  "a": 3,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"That simply won't work for the budget, I'm afraid.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "expressing surprise or disbelief",
   "offering help or something to someone",
   "expressing agreement or giving assurance"
  ],
  "a": 0,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"That simply won't work for the request, I'm afraid.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "politely refusing or objecting",
   "criticizing or blaming someone",
   "expressing agreement or giving assurance"
  ],
  "a": 1,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I have to say no to the proposal this time.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "offering help or something to someone",
   "politely refusing or objecting",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 2,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I have to say no to the offer this time.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "giving advice or a personal opinion",
   "politely refusing or objecting",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 2,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I have to say no to the plan this time.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "offering help or something to someone",
   "making an apology",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 0,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I can't agree to changing the proposal at this stage.\" The speaker is ___",
  "o": [
   "giving a warning",
   "making a guess or speculation",
   "politely refusing or objecting",
   "criticizing or blaming someone"
  ],
  "a": 2,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I can't agree to changing the budget at this stage.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "criticizing or blaming someone",
   "giving an instruction or making a request",
   "giving advice or a personal opinion"
  ],
  "a": 0,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I can't agree to changing the design at this stage.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "making a guess or speculation",
   "giving advice or a personal opinion",
   "politely refusing or objecting"
  ],
  "a": 3,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I'm going to have to decline the offer offer.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "politely refusing or objecting",
   "offering help or something to someone",
   "making an apology"
  ],
  "a": 1,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I'm going to have to decline the design offer.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "expressing surprise or disbelief",
   "politely refusing or objecting",
   "giving a compliment or praise"
  ],
  "a": 2,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"I'm going to have to decline the contract offer.\" The speaker is ___",
  "o": [
   "giving a warning",
   "making a guess or speculation",
   "making an apology",
   "politely refusing or objecting"
  ],
  "a": 3,
  "exp": "الجملة ترفض طلباً أو تعترض على فكرة بأسلوب مباشر أو مهذّب.",
  "tag": "الرفض والاعتراض"
 },
 {
  "q": "\"Shall I carry that notes for you?\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "offering help or something to someone",
   "criticizing or blaming someone",
   "making an apology"
  ],
  "a": 1,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Shall I carry that report for you?\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "criticizing or blaming someone",
   "offering help or something to someone",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 2,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Would you like me to help with the notes?\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "offering help or something to someone",
   "giving a compliment or praise",
   "criticizing or blaming someone"
  ],
  "a": 1,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Would you like me to help with the project?\" The speaker is ___",
  "o": [
   "making an apology",
   "expressing sympathy, condolences, or strong emotion",
   "expressing surprise or disbelief",
   "offering help or something to someone"
  ],
  "a": 3,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Would you like me to help with the laptop?\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "politely refusing or objecting",
   "giving a warning",
   "offering help or something to someone"
  ],
  "a": 3,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Can I get you anything for the wedding?\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "making an apology",
   "offering help or something to someone",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 2,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Can I get you anything for the ceremony?\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "giving a warning",
   "making an apology",
   "offering help or something to someone"
  ],
  "a": 3,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Can I get you anything for the conference?\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "giving a warning",
   "making a guess or speculation",
   "expressing surprise or disbelief"
  ],
  "a": 0,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Feel free to ask me anything about the bag.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "offering help or something to someone",
   "giving a warning",
   "expressing agreement or giving assurance"
  ],
  "a": 1,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Feel free to ask me anything about the documents.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "giving a warning",
   "politely refusing or objecting",
   "expressing agreement or giving assurance"
  ],
  "a": 0,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Would you like some help with the laptop?\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "correcting a misunderstanding or clarifying a point",
   "offering help or something to someone",
   "giving a compliment or praise"
  ],
  "a": 2,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Would you like some help with the documents?\" The speaker is ___",
  "o": [
   "making an apology",
   "offering help or something to someone",
   "making a guess or speculation",
   "giving an instruction or making a request"
  ],
  "a": 1,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Would you like some help with the bag?\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "giving a warning",
   "expressing surprise or disbelief",
   "politely refusing or objecting"
  ],
  "a": 0,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"I can lend you my report if you need it.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "giving an instruction or making a request",
   "expressing agreement or giving assurance",
   "criticizing or blaming someone"
  ],
  "a": 0,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"I can lend you my notes if you need it.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "expressing sympathy, condolences, or strong emotion",
   "correcting a misunderstanding or clarifying a point",
   "politely refusing or objecting"
  ],
  "a": 0,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"I can lend you my project if you need it.\" The speaker is ___",
  "o": [
   "giving a warning",
   "expressing surprise or disbelief",
   "offering help or something to someone",
   "giving an instruction or making a request"
  ],
  "a": 2,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Let me know if you need help with the project.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "correcting a misunderstanding or clarifying a point",
   "expressing sympathy, condolences, or strong emotion",
   "offering help or something to someone"
  ],
  "a": 3,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Let me know if you need help with the bag.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "offering help or something to someone",
   "expressing agreement or giving assurance",
   "making an apology"
  ],
  "a": 1,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Can I offer you a ride to the presentation?\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "expressing surprise or disbelief",
   "offering help or something to someone",
   "giving a compliment or praise"
  ],
  "a": 2,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Can I offer you a ride to the party?\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "offering help or something to someone",
   "making an apology",
   "giving a compliment or praise"
  ],
  "a": 1,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"I'd be happy to explain the project again if you like.\" The speaker is ___",
  "o": [
   "giving a warning",
   "criticizing or blaming someone",
   "politely refusing or objecting",
   "offering help or something to someone"
  ],
  "a": 3,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"I'd be happy to explain the laptop again if you like.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "politely refusing or objecting",
   "expressing agreement or giving assurance",
   "offering help or something to someone"
  ],
  "a": 3,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Would you like me to take care of the bag for you?\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "making an apology",
   "correcting a misunderstanding or clarifying a point",
   "criticizing or blaming someone"
  ],
  "a": 0,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Would you like me to take care of the notes for you?\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "politely refusing or objecting",
   "expressing agreement or giving assurance",
   "giving a compliment or praise"
  ],
  "a": 0,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Would you like me to take care of the luggage for you?\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "politely refusing or objecting",
   "making an apology",
   "offering help or something to someone"
  ],
  "a": 3,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"I'm happy to cover your shift at the party if needed.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "criticizing or blaming someone",
   "offering help or something to someone",
   "giving an instruction or making a request"
  ],
  "a": 2,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"I'm happy to cover your shift at the interview if needed.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "offering help or something to someone",
   "making an apology",
   "expressing surprise or disbelief"
  ],
  "a": 1,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"I'm happy to cover your shift at the conference if needed.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "giving a warning",
   "offering help or something to someone",
   "making an apology"
  ],
  "a": 2,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Can I do anything to make the documents easier for you?\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "offering help or something to someone",
   "making an apology",
   "giving advice or a personal opinion"
  ],
  "a": 1,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"Can I do anything to make the luggage easier for you?\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "offering help or something to someone",
   "giving advice or a personal opinion",
   "giving an instruction or making a request"
  ],
  "a": 1,
  "exp": "الجملة تعرض تقديم مساعدة أو شيء ما للطرف الآخر.",
  "tag": "العرض والطلب"
 },
 {
  "q": "\"You should have checked the vase before sending it.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "giving advice or a personal opinion",
   "politely refusing or objecting",
   "making a guess or speculation"
  ],
  "a": 0,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"You should have checked the phone before sending it.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "expressing agreement or giving assurance",
   "expressing surprise or disbelief",
   "offering help or something to someone"
  ],
  "a": 0,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"It's your fault we missed the ceremony.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "politely refusing or objecting",
   "criticizing or blaming someone",
   "expressing agreement or giving assurance"
  ],
  "a": 2,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"It's your fault we missed the conference.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "politely refusing or objecting",
   "expressing surprise or disbelief",
   "making a guess or speculation"
  ],
  "a": 0,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"It's your fault we missed the wedding.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "expressing agreement or giving assurance",
   "expressing surprise or disbelief",
   "giving an instruction or making a request"
  ],
  "a": 0,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"How could you forget something as important as the vase?\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "offering help or something to someone",
   "expressing sympathy, condolences, or strong emotion",
   "criticizing or blaming someone"
  ],
  "a": 3,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"How could you forget something as important as the report?\" The speaker is ___",
  "o": [
   "giving a warning",
   "giving a compliment or praise",
   "criticizing or blaming someone",
   "making an apology"
  ],
  "a": 2,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"I expected better from you regarding the car.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "giving an instruction or making a request",
   "giving a warning",
   "criticizing or blaming someone"
  ],
  "a": 3,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"I expected better from you regarding the camera.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "giving advice or a personal opinion",
   "correcting a misunderstanding or clarifying a point",
   "politely refusing or objecting"
  ],
  "a": 0,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"You really should have been more careful with the laptop.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "criticizing or blaming someone",
   "offering help or something to someone",
   "expressing agreement or giving assurance"
  ],
  "a": 1,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"You really should have been more careful with the report.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "giving a warning",
   "criticizing or blaming someone",
   "giving a compliment or praise"
  ],
  "a": 2,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"This mess with the report is entirely your responsibility.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "expressing surprise or disbelief",
   "offering help or something to someone",
   "criticizing or blaming someone"
  ],
  "a": 3,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"This mess with the watch is entirely your responsibility.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "giving advice or a personal opinion",
   "making an apology",
   "criticizing or blaming someone"
  ],
  "a": 3,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"This mess with the laptop is entirely your responsibility.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "expressing surprise or disbelief",
   "criticizing or blaming someone",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 2,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"I can't believe you didn't finish the laptop on time.\" The speaker is ___",
  "o": [
   "making an apology",
   "giving a warning",
   "offering help or something to someone",
   "criticizing or blaming someone"
  ],
  "a": 3,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"I can't believe you didn't finish the car on time.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "criticizing or blaming someone",
   "giving advice or a personal opinion",
   "politely refusing or objecting"
  ],
  "a": 1,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"I can't believe you didn't finish the vase on time.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "expressing agreement or giving assurance",
   "making an apology",
   "giving a compliment or praise"
  ],
  "a": 0,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"You never take the car seriously enough.\" The speaker is ___",
  "o": [
   "giving a warning",
   "criticizing or blaming someone",
   "politely refusing or objecting",
   "making a guess or speculation"
  ],
  "a": 1,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"You never take the phone seriously enough.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "criticizing or blaming someone",
   "giving advice or a personal opinion",
   "giving a warning"
  ],
  "a": 1,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"It was careless of you to leave the report unattended.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "correcting a misunderstanding or clarifying a point",
   "criticizing or blaming someone",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 2,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"It was careless of you to leave the camera unattended.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "politely refusing or objecting",
   "expressing agreement or giving assurance",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 0,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"You should be ashamed of how you handled the vase.\" The speaker is ___",
  "o": [
   "making an apology",
   "giving advice or a personal opinion",
   "expressing sympathy, condolences, or strong emotion",
   "criticizing or blaming someone"
  ],
  "a": 3,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"You should be ashamed of how you handled the laptop.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "politely refusing or objecting",
   "giving advice or a personal opinion",
   "making an apology"
  ],
  "a": 0,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"You should be ashamed of how you handled the car.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "giving a compliment or praise",
   "offering help or something to someone",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 0,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"Why didn't you tell me about the report sooner?\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "making a guess or speculation",
   "criticizing or blaming someone",
   "giving a warning"
  ],
  "a": 2,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"Why didn't you tell me about the car sooner?\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "expressing agreement or giving assurance",
   "giving an instruction or making a request",
   "criticizing or blaming someone"
  ],
  "a": 3,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"Why didn't you tell me about the laptop sooner?\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "criticizing or blaming someone",
   "making an apology",
   "giving a compliment or praise"
  ],
  "a": 1,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"This wouldn't have happened if you had followed the laptop instructions.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "criticizing or blaming someone",
   "expressing sympathy, condolences, or strong emotion",
   "making a guess or speculation"
  ],
  "a": 1,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"This wouldn't have happened if you had followed the vase instructions.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "offering help or something to someone",
   "criticizing or blaming someone",
   "making a guess or speculation"
  ],
  "a": 2,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"This wouldn't have happened if you had followed the watch instructions.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "giving an instruction or making a request",
   "making a guess or speculation",
   "politely refusing or objecting"
  ],
  "a": 0,
  "exp": "الجملة تُلقي اللوم على شخص أو تنتقد تصرفاً معيّناً.",
  "tag": "اللوم والانتقاد"
 },
 {
  "q": "\"I'm so sorry for your loss; my deepest condolences.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "making a guess or speculation",
   "expressing sympathy, condolences, or strong emotion",
   "offering help or something to someone"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"Congratulations on your conference! I'm so proud of you.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "making a guess or speculation",
   "offering help or something to someone",
   "expressing agreement or giving assurance"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"Congratulations on your interview! I'm so proud of you.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "expressing sympathy, condolences, or strong emotion",
   "making a guess or speculation",
   "politely refusing or objecting"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"My heart goes out to you and your family.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "making an apology",
   "giving a compliment or praise",
   "making a guess or speculation"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I'm thrilled to hear the good news about the design!\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "making a guess or speculation",
   "giving a warning",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I'm thrilled to hear the good news about the schedule!\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "expressing sympathy, condolences, or strong emotion",
   "criticizing or blaming someone",
   "giving a warning"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I'm thrilled to hear the good news about the event!\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "giving a warning",
   "politely refusing or objecting",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I'm truly happy for you and your event.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "offering help or something to someone",
   "giving a compliment or praise",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I'm truly happy for you and your trip.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "criticizing or blaming someone",
   "politely refusing or objecting",
   "giving a compliment or praise"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I feel so sad hearing about what happened with the event.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "giving a compliment or praise",
   "making an apology",
   "giving advice or a personal opinion"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I feel so sad hearing about what happened with the budget.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "expressing sympathy, condolences, or strong emotion",
   "criticizing or blaming someone",
   "giving a compliment or praise"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I feel so sad hearing about what happened with the design.\" The speaker is ___",
  "o": [
   "making an apology",
   "giving a warning",
   "expressing sympathy, condolences, or strong emotion",
   "criticizing or blaming someone"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"My deepest sympathy to you during this difficult time.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "offering help or something to someone",
   "expressing sympathy, condolences, or strong emotion",
   "giving a compliment or praise"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I'm overjoyed about your success with the project!\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "criticizing or blaming someone",
   "expressing agreement or giving assurance",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I'm overjoyed about your success with the proposal!\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "making an apology",
   "expressing sympathy, condolences, or strong emotion",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I'm overjoyed about your success with the event!\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "giving a compliment or praise",
   "expressing surprise or disbelief",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I'm heartbroken to hear about the event.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "giving advice or a personal opinion",
   "giving a warning",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I'm heartbroken to hear about the budget.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "making a guess or speculation",
   "expressing surprise or disbelief",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I'm heartbroken to hear about the project.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "criticizing or blaming someone",
   "expressing surprise or disbelief",
   "giving a compliment or praise"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"Wishing you strength and comfort during this hard time.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "giving a warning",
   "expressing sympathy, condolences, or strong emotion",
   "expressing agreement or giving assurance"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I'm so relieved everything worked out with the proposal.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "giving a compliment or praise",
   "correcting a misunderstanding or clarifying a point",
   "making a guess or speculation"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I'm so relieved everything worked out with the event.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "giving an instruction or making a request",
   "expressing sympathy, condolences, or strong emotion",
   "offering help or something to someone"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"I'm so relieved everything worked out with the trip.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "politely refusing or objecting",
   "expressing sympathy, condolences, or strong emotion",
   "making an apology"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن مشاعر المتحدث (تعاطف، حزن، فرح) تجاه موقف الطرف الآخر.",
  "tag": "المشاعر والتعازي"
 },
 {
  "q": "\"Wow, I can't believe the trip is finished already!\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "correcting a misunderstanding or clarifying a point",
   "giving a compliment or praise",
   "politely refusing or objecting"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"Wow, I can't believe the event is finished already!\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "making an apology",
   "expressing surprise or disbelief",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"What a surprise seeing you at the conference!\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "giving advice or a personal opinion",
   "making a guess or speculation",
   "expressing surprise or disbelief"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"What a surprise seeing you at the party!\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "offering help or something to someone",
   "giving advice or a personal opinion",
   "expressing surprise or disbelief"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"I never expected the design to turn out this well!\" The speaker is ___",
  "o": [
   "giving a warning",
   "expressing surprise or disbelief",
   "politely refusing or objecting",
   "giving a compliment or praise"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"I never expected the schedule to turn out this well!\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "politely refusing or objecting",
   "making a guess or speculation",
   "expressing surprise or disbelief"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"I never expected the budget to turn out this well!\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "politely refusing or objecting",
   "expressing sympathy, condolences, or strong emotion",
   "making a guess or speculation"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"Oh my, I didn't see that coming at all!\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "making an apology",
   "giving advice or a personal opinion",
   "expressing surprise or disbelief"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"I'm absolutely amazed by the proposal.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "giving a warning",
   "expressing agreement or giving assurance",
   "expressing surprise or disbelief"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"I'm absolutely amazed by the project.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "expressing surprise or disbelief",
   "criticizing or blaming someone",
   "giving a warning"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"You're kidding! The proposal was approved already?\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "correcting a misunderstanding or clarifying a point",
   "giving advice or a personal opinion",
   "expressing surprise or disbelief"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"I had no idea the interview was today!\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "politely refusing or objecting",
   "giving an instruction or making a request",
   "expressing surprise or disbelief"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"I had no idea the presentation was today!\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "giving a warning",
   "expressing surprise or disbelief",
   "politely refusing or objecting"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"I had no idea the ceremony was today!\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "criticizing or blaming someone",
   "expressing surprise or disbelief",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"That's incredible news about the event!\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "expressing surprise or disbelief",
   "giving a compliment or praise",
   "making an apology"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"That's incredible news about the project!\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "correcting a misunderstanding or clarifying a point",
   "expressing surprise or disbelief",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"I can't believe how fast the proposal was completed.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "correcting a misunderstanding or clarifying a point",
   "expressing surprise or disbelief",
   "expressing agreement or giving assurance"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"I can't believe how fast the event was completed.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "expressing surprise or disbelief",
   "criticizing or blaming someone",
   "expressing agreement or giving assurance"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"I can't believe how fast the schedule was completed.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "expressing agreement or giving assurance",
   "expressing surprise or disbelief",
   "offering help or something to someone"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"What?! I didn't expect the interview to be cancelled.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "correcting a misunderstanding or clarifying a point",
   "making a guess or speculation",
   "expressing surprise or disbelief"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"What?! I didn't expect the presentation to be cancelled.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "criticizing or blaming someone",
   "expressing surprise or disbelief",
   "giving an instruction or making a request"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"What?! I didn't expect the conference to be cancelled.\" The speaker is ___",
  "o": [
   "making an apology",
   "offering help or something to someone",
   "expressing surprise or disbelief",
   "giving a compliment or praise"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"I'm shocked by how much the event has changed.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "making a guess or speculation",
   "giving an instruction or making a request",
   "expressing surprise or disbelief"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"I'm shocked by how much the schedule has changed.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "giving a compliment or praise",
   "correcting a misunderstanding or clarifying a point",
   "giving a warning"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"I'm shocked by how much the proposal has changed.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "expressing sympathy, condolences, or strong emotion",
   "giving a compliment or praise",
   "expressing surprise or disbelief"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"Unbelievable! The budget arrived a week early.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "making a guess or speculation",
   "giving a warning",
   "giving an instruction or making a request"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"Unbelievable! The design arrived a week early.\" The speaker is ___",
  "o": [
   "giving a warning",
   "offering help or something to someone",
   "expressing sympathy, condolences, or strong emotion",
   "expressing surprise or disbelief"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن اندهاش المتحدث من أمر غير متوقع.",
  "tag": "الدهشة والتعجب"
 },
 {
  "q": "\"I guess the schedule will be ready by next week.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "making a guess or speculation",
   "giving an instruction or making a request",
   "expressing agreement or giving assurance"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"I guess the report will be ready by next week.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "criticizing or blaming someone",
   "expressing sympathy, condolences, or strong emotion",
   "making a guess or speculation"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"I guess the offer will be ready by next week.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "expressing sympathy, condolences, or strong emotion",
   "making a guess or speculation",
   "politely refusing or objecting"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"It might rain later, so bring an umbrella to the party.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "expressing surprise or disbelief",
   "giving advice or a personal opinion",
   "making a guess or speculation"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"It might rain later, so bring an umbrella to the wedding.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "making a guess or speculation",
   "expressing sympathy, condolences, or strong emotion",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"She's probably still working on the design.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "expressing sympathy, condolences, or strong emotion",
   "giving advice or a personal opinion",
   "expressing surprise or disbelief"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"She's probably still working on the report.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "offering help or something to someone",
   "making a guess or speculation",
   "expressing surprise or disbelief"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"She's probably still working on the schedule.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "giving advice or a personal opinion",
   "making a guess or speculation",
   "giving an instruction or making a request"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"I bet the investment costs more than we expected.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "criticizing or blaming someone",
   "giving advice or a personal opinion",
   "making a guess or speculation"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"I bet the strategy costs more than we expected.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "giving advice or a personal opinion",
   "making a guess or speculation",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"Maybe they postponed the conference because of the weather.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "expressing sympathy, condolences, or strong emotion",
   "giving a warning",
   "expressing surprise or disbelief"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"Maybe they postponed the ceremony because of the weather.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "making a guess or speculation",
   "criticizing or blaming someone",
   "making an apology"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"Maybe they postponed the presentation because of the weather.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "offering help or something to someone",
   "criticizing or blaming someone",
   "making a guess or speculation"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"He could be running late for the wedding.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "giving advice or a personal opinion",
   "politely refusing or objecting",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"He could be running late for the meeting.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "expressing surprise or disbelief",
   "giving a compliment or praise",
   "giving a warning"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"He could be running late for the ceremony.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "giving an instruction or making a request",
   "offering help or something to someone",
   "making a guess or speculation"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"I suppose the strategy needs a little more time.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "giving an instruction or making a request",
   "making a guess or speculation",
   "expressing surprise or disbelief"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"I suppose the report needs a little more time.\" The speaker is ___",
  "o": [
   "making an apology",
   "politely refusing or objecting",
   "giving advice or a personal opinion",
   "making a guess or speculation"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"I suppose the investment needs a little more time.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "criticizing or blaming someone",
   "expressing agreement or giving assurance",
   "making a guess or speculation"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"They might have already finished the offer.\" The speaker is ___",
  "o": [
   "making an apology",
   "politely refusing or objecting",
   "expressing agreement or giving assurance",
   "making a guess or speculation"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"They might have already finished the investment.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "expressing agreement or giving assurance",
   "making a guess or speculation",
   "giving an instruction or making a request"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"They might have already finished the schedule.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "making a guess or speculation",
   "expressing surprise or disbelief",
   "giving a warning"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"Perhaps the report wasn't delivered on time.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "offering help or something to someone",
   "making a guess or speculation",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"Perhaps the plan wasn't delivered on time.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "making a guess or speculation",
   "making an apology",
   "expressing agreement or giving assurance"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"Perhaps the design wasn't delivered on time.\" The speaker is ___",
  "o": [
   "giving a warning",
   "giving an instruction or making a request",
   "giving advice or a personal opinion",
   "making a guess or speculation"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"It's possible the ceremony will be rescheduled.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "giving advice or a personal opinion",
   "politely refusing or objecting",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"It's possible the conference will be rescheduled.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "politely refusing or objecting",
   "giving a warning",
   "giving an instruction or making a request"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"It's possible the interview will be rescheduled.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "offering help or something to someone",
   "making a guess or speculation",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"I'd guess the investment will take another two days.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "making a guess or speculation",
   "giving advice or a personal opinion",
   "politely refusing or objecting"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"I'd guess the strategy will take another two days.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "expressing agreement or giving assurance",
   "making a guess or speculation",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 2,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"I'd guess the design will take another two days.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "making a guess or speculation",
   "criticizing or blaming someone",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"There's a chance the wedding might get cancelled.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "giving a compliment or praise",
   "making an apology",
   "making a guess or speculation"
  ],
  "a": 3,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"There's a chance the conference might get cancelled.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "politely refusing or objecting",
   "making an apology",
   "giving a compliment or praise"
  ],
  "a": 0,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"There's a chance the party might get cancelled.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "making a guess or speculation",
   "correcting a misunderstanding or clarifying a point",
   "giving a warning"
  ],
  "a": 1,
  "exp": "الجملة تعبّر عن تخمين أو احتمال غير مؤكد لدى المتحدث.",
  "tag": "التخمين والاحتمال"
 },
 {
  "q": "\"Actually, the interview is on Thursday, not Wednesday.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "correcting a misunderstanding or clarifying a point",
   "criticizing or blaming someone",
   "making an apology"
  ],
  "a": 1,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"Actually, the presentation is on Thursday, not Wednesday.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "making an apology",
   "expressing sympathy, condolences, or strong emotion",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 3,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"Actually, the meeting is on Thursday, not Wednesday.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "expressing agreement or giving assurance",
   "expressing sympathy, condolences, or strong emotion",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 3,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"What I meant was the design needs revision, not rejection.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "expressing sympathy, condolences, or strong emotion",
   "correcting a misunderstanding or clarifying a point",
   "criticizing or blaming someone"
  ],
  "a": 2,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"What I meant was the trip needs revision, not rejection.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "correcting a misunderstanding or clarifying a point",
   "giving advice or a personal opinion",
   "giving an instruction or making a request"
  ],
  "a": 1,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"What I meant was the proposal needs revision, not rejection.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "giving an instruction or making a request",
   "offering help or something to someone",
   "politely refusing or objecting"
  ],
  "a": 0,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"To clarify, the proposal deadline is next Monday, not this one.\" The speaker is ___",
  "o": [
   "making an apology",
   "criticizing or blaming someone",
   "correcting a misunderstanding or clarifying a point",
   "giving an instruction or making a request"
  ],
  "a": 2,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"To clarify, the design deadline is next Monday, not this one.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "expressing surprise or disbelief",
   "correcting a misunderstanding or clarifying a point",
   "offering help or something to someone"
  ],
  "a": 2,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"No, that's not quite right — the trip costs less than that.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "making an apology",
   "expressing agreement or giving assurance",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 3,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"No, that's not quite right — the proposal costs less than that.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "making a guess or speculation",
   "giving a warning",
   "giving an instruction or making a request"
  ],
  "a": 0,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"No, that's not quite right — the schedule costs less than that.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "expressing sympathy, condolences, or strong emotion",
   "offering help or something to someone",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 3,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"Let me correct that: the wedding starts at 9, not 10.\" The speaker is ___",
  "o": [
   "giving a warning",
   "correcting a misunderstanding or clarifying a point",
   "criticizing or blaming someone",
   "politely refusing or objecting"
  ],
  "a": 1,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"Let me correct that: the party starts at 9, not 10.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "giving an instruction or making a request",
   "giving a warning",
   "expressing surprise or disbelief"
  ],
  "a": 0,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"Sorry, I think there's a misunderstanding about the project.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "giving an instruction or making a request",
   "criticizing or blaming someone",
   "giving a compliment or praise"
  ],
  "a": 0,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"Sorry, I think there's a misunderstanding about the budget.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "correcting a misunderstanding or clarifying a point",
   "offering help or something to someone",
   "criticizing or blaming someone"
  ],
  "a": 1,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"Sorry, I think there's a misunderstanding about the proposal.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "expressing agreement or giving assurance",
   "correcting a misunderstanding or clarifying a point",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 2,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"Just to be clear, I meant the second budget, not the first.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "giving a compliment or praise",
   "correcting a misunderstanding or clarifying a point",
   "politely refusing or objecting"
  ],
  "a": 2,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"Just to be clear, I meant the second design, not the first.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "correcting a misunderstanding or clarifying a point",
   "giving an instruction or making a request",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 1,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"Actually, it wasn't me who approved the trip.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "offering help or something to someone",
   "expressing sympathy, condolences, or strong emotion",
   "criticizing or blaming someone"
  ],
  "a": 0,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"Actually, it wasn't me who approved the schedule.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "offering help or something to someone",
   "correcting a misunderstanding or clarifying a point",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 2,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"I should clarify — the party was moved to next week.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "correcting a misunderstanding or clarifying a point",
   "criticizing or blaming someone",
   "giving a warning"
  ],
  "a": 1,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"I should clarify — the ceremony was moved to next week.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "correcting a misunderstanding or clarifying a point",
   "expressing sympathy, condolences, or strong emotion",
   "expressing surprise or disbelief"
  ],
  "a": 1,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"That's not exactly what I said about the design.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "giving advice or a personal opinion",
   "giving a warning",
   "politely refusing or objecting"
  ],
  "a": 0,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"That's not exactly what I said about the project.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "offering help or something to someone",
   "expressing surprise or disbelief",
   "giving a compliment or praise"
  ],
  "a": 0,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"To be precise, the event was finished on Tuesday.\" The speaker is ___",
  "o": [
   "giving a warning",
   "correcting a misunderstanding or clarifying a point",
   "giving a compliment or praise",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 1,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"To be precise, the design was finished on Tuesday.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "correcting a misunderstanding or clarifying a point",
   "giving advice or a personal opinion",
   "giving an instruction or making a request"
  ],
  "a": 1,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"To be precise, the budget was finished on Tuesday.\" The speaker is ___",
  "o": [
   "making an apology",
   "correcting a misunderstanding or clarifying a point",
   "criticizing or blaming someone",
   "giving a warning"
  ],
  "a": 1,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"Let me explain again, I think I wasn't clear about the design.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "politely refusing or objecting",
   "giving advice or a personal opinion",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 3,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"Let me explain again, I think I wasn't clear about the schedule.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "making a guess or speculation",
   "making an apology",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 3,
  "exp": "الجملة تصحح معلومة خاطئة أو توضح نقطة كان هناك التباس بشأنها.",
  "tag": "التصحيح والتوضيح"
 },
 {
  "q": "\"Wow, your offer looks absolutely amazing!\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "expressing agreement or giving assurance",
   "offering help or something to someone",
   "giving an instruction or making a request"
  ],
  "a": 0,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"Wow, your design looks absolutely amazing!\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "giving a compliment or praise",
   "expressing surprise or disbelief",
   "giving an instruction or making a request"
  ],
  "a": 1,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"Wow, your report looks absolutely amazing!\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "making an apology",
   "offering help or something to someone",
   "making a guess or speculation"
  ],
  "a": 0,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"You did a fantastic job on the proposal.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "making an apology",
   "expressing sympathy, condolences, or strong emotion",
   "offering help or something to someone"
  ],
  "a": 0,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"You did a fantastic job on the design.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "giving a warning",
   "making a guess or speculation",
   "expressing surprise or disbelief"
  ],
  "a": 0,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"You did a fantastic job on the project.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "giving a compliment or praise",
   "giving a warning",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 1,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"I'm really impressed by your schedule.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "offering help or something to someone",
   "expressing agreement or giving assurance",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 0,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"I'm really impressed by your proposal.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "politely refusing or objecting",
   "making an apology",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 0,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"That was a brilliant report, well done.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "giving a warning",
   "criticizing or blaming someone",
   "giving a compliment or praise"
  ],
  "a": 3,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"That was a brilliant offer, well done.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "expressing surprise or disbelief",
   "giving a compliment or praise",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 2,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"That was a brilliant schedule, well done.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "giving a warning",
   "expressing agreement or giving assurance",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 0,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"Your schedule is truly outstanding.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "criticizing or blaming someone",
   "politely refusing or objecting",
   "giving a compliment or praise"
  ],
  "a": 3,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"Your presentation is truly outstanding.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "expressing agreement or giving assurance",
   "criticizing or blaming someone",
   "giving a compliment or praise"
  ],
  "a": 3,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"I have to say, your report was excellent.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "making an apology",
   "giving a compliment or praise",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 2,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"I have to say, your offer was excellent.\" The speaker is ___",
  "o": [
   "correcting a misunderstanding or clarifying a point",
   "politely refusing or objecting",
   "expressing surprise or disbelief",
   "giving a compliment or praise"
  ],
  "a": 3,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"I have to say, your essay was excellent.\" The speaker is ___",
  "o": [
   "making an apology",
   "correcting a misunderstanding or clarifying a point",
   "giving advice or a personal opinion",
   "giving a compliment or praise"
  ],
  "a": 3,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"What a wonderful design, you should be proud.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "giving advice or a personal opinion",
   "expressing surprise or disbelief",
   "giving a compliment or praise"
  ],
  "a": 3,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"What a wonderful schedule, you should be proud.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "correcting a misunderstanding or clarifying a point",
   "offering help or something to someone",
   "politely refusing or objecting"
  ],
  "a": 0,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"What a wonderful essay, you should be proud.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "politely refusing or objecting",
   "expressing agreement or giving assurance",
   "expressing surprise or disbelief"
  ],
  "a": 0,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"You handled the essay beautifully.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "giving a compliment or praise",
   "giving a warning",
   "giving advice or a personal opinion"
  ],
  "a": 1,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"You handled the proposal beautifully.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "offering help or something to someone",
   "correcting a misunderstanding or clarifying a point",
   "criticizing or blaming someone"
  ],
  "a": 0,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"You handled the presentation beautifully.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "offering help or something to someone",
   "giving a compliment or praise",
   "expressing sympathy, condolences, or strong emotion"
  ],
  "a": 2,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"Your hard work on the presentation really shows.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "expressing sympathy, condolences, or strong emotion",
   "giving advice or a personal opinion",
   "giving a compliment or praise"
  ],
  "a": 3,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"Your hard work on the offer really shows.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "giving a compliment or praise",
   "offering help or something to someone",
   "giving a warning"
  ],
  "a": 1,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"Your hard work on the design really shows.\" The speaker is ___",
  "o": [
   "expressing agreement or giving assurance",
   "giving a compliment or praise",
   "correcting a misunderstanding or clarifying a point",
   "giving a warning"
  ],
  "a": 1,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"I admire how well you managed the report.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "expressing surprise or disbelief",
   "giving a compliment or praise",
   "expressing agreement or giving assurance"
  ],
  "a": 2,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"I admire how well you managed the schedule.\" The speaker is ___",
  "o": [
   "giving an instruction or making a request",
   "expressing agreement or giving assurance",
   "giving a compliment or praise",
   "offering help or something to someone"
  ],
  "a": 2,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"I admire how well you managed the offer.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "expressing agreement or giving assurance",
   "expressing sympathy, condolences, or strong emotion",
   "expressing surprise or disbelief"
  ],
  "a": 0,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"You have a real talent for public speaking.\" The speaker is ___",
  "o": [
   "making a guess or speculation",
   "expressing sympathy, condolences, or strong emotion",
   "offering help or something to someone",
   "giving a compliment or praise"
  ],
  "a": 3,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"You have a real talent for cooking.\" The speaker is ___",
  "o": [
   "giving a warning",
   "making an apology",
   "correcting a misunderstanding or clarifying a point",
   "giving a compliment or praise"
  ],
  "a": 3,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"Well done, your writing has really improved.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "making an apology",
   "politely refusing or objecting",
   "expressing surprise or disbelief"
  ],
  "a": 0,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"Well done, your cooking has really improved.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "giving an instruction or making a request",
   "expressing surprise or disbelief",
   "expressing agreement or giving assurance"
  ],
  "a": 0,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"Well done, your painting has really improved.\" The speaker is ___",
  "o": [
   "expressing surprise or disbelief",
   "giving a compliment or praise",
   "giving an instruction or making a request",
   "making an apology"
  ],
  "a": 1,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"You're clearly very skilled at organizing.\" The speaker is ___",
  "o": [
   "offering help or something to someone",
   "expressing agreement or giving assurance",
   "giving a compliment or praise",
   "giving advice or a personal opinion"
  ],
  "a": 2,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"You're clearly very skilled at teaching.\" The speaker is ___",
  "o": [
   "criticizing or blaming someone",
   "correcting a misunderstanding or clarifying a point",
   "making a guess or speculation",
   "giving a compliment or praise"
  ],
  "a": 3,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"I'm amazed by your painting, it's excellent.\" The speaker is ___",
  "o": [
   "making an apology",
   "expressing agreement or giving assurance",
   "giving a compliment or praise",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 2,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"I'm amazed by your planning, it's excellent.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "giving advice or a personal opinion",
   "criticizing or blaming someone",
   "expressing agreement or giving assurance"
  ],
  "a": 0,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"I'm amazed by your writing, it's excellent.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "expressing sympathy, condolences, or strong emotion",
   "politely refusing or objecting",
   "expressing agreement or giving assurance"
  ],
  "a": 0,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"Your teaching gets better every time.\" The speaker is ___",
  "o": [
   "expressing sympathy, condolences, or strong emotion",
   "giving advice or a personal opinion",
   "giving a compliment or praise",
   "making an apology"
  ],
  "a": 2,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"Your organizing gets better every time.\" The speaker is ___",
  "o": [
   "politely refusing or objecting",
   "giving a compliment or praise",
   "expressing agreement or giving assurance",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 1,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"You're a natural at organizing.\" The speaker is ___",
  "o": [
   "giving a warning",
   "giving a compliment or praise",
   "correcting a misunderstanding or clarifying a point",
   "offering help or something to someone"
  ],
  "a": 1,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"You're a natural at writing.\" The speaker is ___",
  "o": [
   "giving a compliment or praise",
   "expressing sympathy, condolences, or strong emotion",
   "criticizing or blaming someone",
   "politely refusing or objecting"
  ],
  "a": 0,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 },
 {
  "q": "\"You're a natural at cooking.\" The speaker is ___",
  "o": [
   "giving advice or a personal opinion",
   "giving a compliment or praise",
   "criticizing or blaming someone",
   "correcting a misunderstanding or clarifying a point"
  ],
  "a": 1,
  "exp": "الجملة تمدح إنجازاً أو صفة إيجابية في الطرف الآخر.",
  "tag": "الثناء والمديح"
 }
];
