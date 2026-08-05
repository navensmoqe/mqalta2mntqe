/* ====================================================
   منطقيا - JavaScript Application Logic
   Puter.js AI Integration + Quiz + Learning System
==================================================== */

// ── Data: Logical Fallacies & Reasoning Types ──────────
const fallaciesData = [
    {
        id: 'ad-hominem',
        icon: '🗡️',
        title: 'مغالطة الهجوم الشخصي (Ad Hominem)',
        titleEn: 'Ad Hominem',
        category: 'fallacies',
        tag: 'هجوم',
        difficulty: 'easy',
        definition: 'هي مغالطة تحدث عندما يهاجم شخص ما خصمه بدلاً من مناقشة حجته. بدلاً من الرد على الفكرة، يُهاجَم صاحبها بسبب صفاته الشخصية أو ماضيه.',
        example: '"لا تستمع إلى رأيه في الاقتصاد، فهو لم يتخرج من جامعة مرموقة!" — هذا هجوم على الشخص وليس على حجته.',
        tip: 'اسأل نفسك: هل الرد يتناول الفكرة ذاتها أم صاحبها؟ إذا كان الأخير، فغالباً ما نكون أمام مغالطة هجوم شخصي.'
    },
    {
        id: 'straw-man',
        icon: '🎭',
        title: 'مغالطة رجل القش (Straw Man)',
        titleEn: 'Straw Man',
        category: 'fallacies',
        tag: 'تشويه',
        difficulty: 'medium',
        definition: 'تحدث هذه المغالطة عندما يُشوَّه موقف الخصم أو يُبسَّط بشكل مفرط، ثم يُهاجَم هذا الموقف المُشوَّه بدلاً من الموقف الحقيقي.',
        example: '"قال أحمد إننا بحاجة إلى تقليل الإنفاق العسكري. إذن فأحمد لا يريد الدفاع عن بلدنا!" — هذا تشويه لموقف أحمد.',
        tip: 'تحقق من أن الجواب يتعامل مع ما قاله الخصم فعلاً، لا مع نسخة مبالغ فيها من كلامه.'
    },
    {
        id: 'appeal-to-authority',
        icon: '👑',
        title: 'مغالطة الاحتجاج بالسلطة (Appeal to Authority)',
        titleEn: 'Appeal to Authority',
        category: 'fallacies',
        tag: 'سلطة',
        difficulty: 'medium',
        definition: 'تحدث عندما يُستخدَم رأي شخصية ذات سلطة أو شهرة كدليل نهائي، دون تقديم أدلة موضوعية. والسلطة وحدها لا تُثبت الحقيقة.',
        example: '"الطبيب الشهير قال إن هذا الدواء آمن، إذن لا بد أن يكون آمناً!" — الشهرة لا تُعوِّض عن الدليل العلمي.',
        tip: 'تحقق من تخصص السلطة المُحتجِّ بها، وابحث عن أدلة مستقلة تدعم الادعاء.'
    },
    {
        id: 'false-dilemma',
        icon: '⚖️',
        title: 'مغالطة الخيارين الزائفين (False Dilemma)',
        titleEn: 'False Dilemma',
        category: 'fallacies',
        tag: 'تبسيط',
        difficulty: 'medium',
        definition: 'تُقدِّم هذه المغالطة الوضع كأنه يحتوي على خيارين فقط، في حين أن هناك خيارات أخرى ممكنة. تُجبر المستمع على الاختيار بين طرفين، متجاهلةً الوسط.',
        example: '"إما أن تدعمني كاملاً، أو أنت ضدي!" — يتجاهل هذا إمكانية الاتفاق الجزئي أو الحياد.',
        tip: 'ابحث دائماً عن خيارات ثالثة أو رابعة بين الطرفين المقترحين.'
    },
    {
        id: 'slippery-slope',
        icon: '🎿',
        title: 'مغالطة المنحدر الزلق (Slippery Slope)',
        titleEn: 'Slippery Slope',
        category: 'fallacies',
        tag: 'تسلسل',
        difficulty: 'hard',
        definition: 'تدّعي أن خطوة صغيرة ستؤدي حتماً إلى سلسلة من العواقب الكارثية، دون تقديم دليل على هذا التسلسل الحتمي.',
        example: '"إذا سمحنا بزيادة الإجازات، سينتج عن ذلك انهيار الإنتاجية، ثم انهيار الاقتصاد!" — يفترض تسلسلاً خطيراً بلا دليل.',
        tip: 'اطلب دليلاً على كل خطوة في التسلسل المزعوم. هل هي حتمية فعلاً؟'
    },
    {
        id: 'circular-reasoning',
        icon: '🔄',
        title: 'مغالطة الاستدلال الدائري (Circular Reasoning)',
        titleEn: 'Circular Reasoning',
        category: 'fallacies',
        tag: 'حلقة',
        difficulty: 'hard',
        definition: 'تحدث عندما تُستخدَم النتيجة دليلاً على صحتها، أي أن الحجة تفترض ما تُحاول إثباته دون تقديم دليل مستقل.',
        example: '"القرآن حق لأنه كلام الله، والله أوحى بالقرآن." — النتيجة هنا هي الدليل على نفسها.',
        tip: 'تحقق أن المقدمة تختلف عن النتيجة منطقياً، وأنها تقدم دليلاً مستقلاً.'
    },
    {
        id: 'appeal-to-emotion',
        icon: '😭',
        title: 'مغالطة الاستغلال العاطفي (Appeal to Emotion)',
        titleEn: 'Appeal to Emotion',
        category: 'fallacies',
        tag: 'عاطفة',
        difficulty: 'easy',
        definition: 'تُحاول هذه المغالطة التأثير على المستمع عبر إثارة المشاعر القوية (الخوف، الشفقة، الفخر) بدلاً من تقديم أدلة وحجج منطقية.',
        example: '"فكر بالأطفال الجائعين! يجب عليك التبرع لهذه الجمعية الآن!" — إثارة العاطفة بدون تقديم معلومات عن الجمعية.',
        tip: 'لاحظ هل الحجة تخاطب مشاعرك فقط أم تقدم أدلة موضوعية؟ الأدلة يجب أن تصمد بمعزل عن المشاعر.'
    },
    {
        id: 'hasty-generalization',
        icon: '🏃',
        title: 'مغالطة التعميم المتسرع (Hasty Generalization)',
        titleEn: 'Hasty Generalization',
        category: 'fallacies',
        tag: 'تعميم',
        difficulty: 'easy',
        definition: 'تحدث عندما يُستخلَص حكم عام من عينة صغيرة أو غير ممثِّلة. التعميم يحتاج إلى عينة كافية وممثِّلة.',
        example: '"قابلت ثلاثة أشخاص من هذا البلد وكانوا فظين، إذن شعبهم كله فظ!" — تعميم من ثلاثة أفراد على الجميع.',
        tip: 'اسأل: كم حجم العينة؟ هل هي ممثِّلة للمجموعة الأكبر؟'
    },
    {
        id: 'bandwagon',
        icon: '🎪',
        title: 'مغالطة عليك الركب (Bandwagon)',
        titleEn: 'Bandwagon Fallacy',
        category: 'fallacies',
        tag: 'أغلبية',
        difficulty: 'easy',
        definition: 'تستند إلى أن شيئاً ما صحيح أو جيد لأن كثيراً من الناس يؤمنون به أو يفعلونه. الشعبية لا تُثبت الصحة.',
        example: '"الجميع يعتقد أن هذا المنتج رائع! لا بد أن يكون كذلك." — الكثرة لا دليل على الصواب.',
        tip: 'تاريخياً آمن الملايين بأشياء غير صحيحة. الشعبية لا تُثبت الحقيقة.'
    },
    {
        id: 'red-herring',
        icon: '🐟',
        title: 'مغالطة الرنجة الحمراء (Red Herring)',
        titleEn: 'Red Herring',
        category: 'fallacies',
        tag: 'تحويل',
        difficulty: 'hard',
        definition: 'تُقدِّم معلومات غير ذات صلة بالموضوع لتشتيت الانتباه عن النقطة الأصلية وتحويل الحوار بعيداً عنها.',
        example: '"لماذا نتحدث عن الفساد في مؤسستنا بينما هناك فقر في العالم؟" — تحويل الموضوع للتهرب من المسؤولية.',
        tip: 'ارجع دائماً إلى النقطة الأصلية: هل الرد يعالجها مباشرة؟'
    },
    {
        id: 'appeal-to-nature',
        icon: '🌿',
        title: 'مغالطة الطبيعي (Appeal to Nature)',
        titleEn: 'Appeal to Nature',
        category: 'fallacies',
        tag: 'طبيعة',
        difficulty: 'medium',
        definition: 'تُقرِّر أن شيئاً ما جيد أو صحيح لأنه "طبيعي"، وأن ما هو "غير طبيعي" فهو سيئ. الطبيعي لا يساوي الجيد دائماً.',
        example: '"هذا العلاج عشبي وطبيعي تماماً، لذا فهو آمن." — السم قد يكون طبيعياً أيضاً!',
        tip: 'السيانيد طبيعي والبنسلين الاصطناعي. الطبيعية لا تحدد السلامة والفعالية.'
    },
    {
        id: 'post-hoc',
        icon: '🕰️',
        title: 'مغالطة التالي هو السبب (Post Hoc)',
        titleEn: 'Post Hoc Ergo Propter Hoc',
        category: 'fallacies',
        tag: 'سببية',
        difficulty: 'hard',
        definition: 'تستنتج أن حدثاً أ هو سبب حدث ب فقط لأن أ سبق ب زمنياً. التسلسل الزمني لا يعني السببية.',
        example: '"أكلت الأناناس ثم مرضت، إذن الأناناس سبب مرضي!" — التزامن الزمني لا يعني السببية.',
        tip: 'الارتباط ≠ السببية. ابحث عن أدلة على العلاقة السببية الفعلية.'
    }
];

const reasoningData = [
    {
        id: 'deductive',
        icon: '⬇️',
        title: 'الاستدلال الاستنتاجي (Deductive)',
        titleEn: 'Deductive Reasoning',
        category: 'reasoning',
        tag: 'استنتاج',
        difficulty: 'medium',
        definition: 'ينطلق من مقدمات عامة ويصل إلى نتيجة خاصة بالضرورة. إذا كانت المقدمات صحيحة والبنية المنطقية سليمة، فالنتيجة صحيحة حتماً.',
        example: 'كل البشر فانون. (م١) سقراط بشري. (م٢) إذن: سقراط فانٍ. (نتيجة حتمية من المقدمتين)',
        tip: 'قوة الاستدلال الاستنتاجي تعتمد على صحة المقدمات. إذا كانت مقدمة واحدة خاطئة، فالنتيجة قد تكون خاطئة.'
    },
    {
        id: 'inductive',
        icon: '⬆️',
        title: 'الاستدلال الاستقرائي (Inductive)',
        titleEn: 'Inductive Reasoning',
        category: 'reasoning',
        tag: 'استقراء',
        difficulty: 'medium',
        definition: 'ينطلق من ملاحظات خاصة وأنماط ليصل إلى تعميمات. النتيجة محتملة لا حتمية، وهو أساس المنهج العلمي.',
        example: 'لاحظنا أن الشمس شرقت 100,000 يوم متتالياً. إذن: من المرجح جداً أنها ستشرق غداً.',
        tip: 'الاستدلال الاستقرائي يبني المعرفة لكنه لا يُعطي يقيناً مطلقاً. دائماً ضع في الاعتبار الاستثناءات.'
    },
    {
        id: 'abductive',
        icon: '🔎',
        title: 'الاستدلال الافتراضي (Abductive)',
        titleEn: 'Abductive Reasoning',
        category: 'reasoning',
        tag: 'افتراض',
        difficulty: 'hard',
        definition: 'يبدأ بملاحظة ويستنتج التفسير الأبسط والأكثر احتمالاً. يُستخدَم في الطب والتحقيقات الجنائية والعلوم.',
        example: 'لاحظ الطبيب هذه الأعراض وأن هذه الأعراض تظهر غالباً في مرض معين. إذن: التشخيص الأرجح هو هذا المرض (أفضل تفسير متاح).',
        tip: 'هذا الاستدلال يعطي أفضل تفسير متاح، لا اليقين. يمكن مراجعته مع ظهور أدلة جديدة.'
    },
    {
        id: 'analogical',
        icon: '🪞',
        title: 'الاستدلال بالقياس (Analogical)',
        titleEn: 'Analogical Reasoning',
        category: 'reasoning',
        tag: 'قياس',
        difficulty: 'medium',
        definition: 'يستند إلى أوجه الشبه بين حالتين للاستدلال على خاصية مشتركة. قوته تعتمد على كثرة أوجه الشبه وعمقها.',
        example: 'الدماغ البشري يعالج المعلومات ويخزنها. الحاسوب يفعل الشيء ذاته. إذن: قد يتشارك الدماغ والحاسوب آليات معالجة مشابهة.',
        tip: 'القياس الجيد يحتاج أوجه شبه جوهرية ومتعددة. قياس واحد ضعيف لا يكفي.'
    },
    {
        id: 'causal',
        icon: '⚡',
        title: 'الاستدلال السببي (Causal)',
        titleEn: 'Causal Reasoning',
        category: 'reasoning',
        tag: 'سببية',
        difficulty: 'hard',
        definition: 'يحدد علاقة سبب-نتيجة بين ظاهرتين. يحتاج إثبات ثلاثة شروط: الارتباط، الترتيب الزمني، وانعدام التفسير البديل.',
        example: 'التدخين (السبب) → يرفع احتمال سرطان الرئة (النتيجة). أُثبت هذا بدراسات ضابطة مع مجموعات مقارنة.',
        tip: 'لإثبات السببية: ابحث عن الارتباط + الترتيب الزمني + غياب عوامل مربِكة أخرى.'
    },
    {
        id: 'critical-thinking',
        icon: '🧠',
        title: 'التفكير النقدي',
        titleEn: 'Critical Thinking',
        category: 'reasoning',
        tag: 'نقدي',
        difficulty: 'easy',
        definition: 'منهج تفكير منضبط يقوم على التحليل الدقيق، وتقييم الأدلة بموضوعية، وتحدي الافتراضات، وعدم القبول الأعمى بالمعلومات.',
        example: 'عند رؤية خبر، لا تتقبله فوراً. اسأل: من المصدر؟ ما الأدلة؟ هل هناك مصادر أخرى تؤكده؟ ما الدافع وراء نشره؟',
        tip: 'مبادئ التفكير النقدي: التشكيك الدائم، تقييم المصادر، البحث عن الأدلة، وقبول الخطأ والتصحيح.'
    },
    {
        id: 'reductio',
        icon: '💥',
        title: 'الاختزال إلى السخافة (Reductio ad Absurdum)',
        titleEn: 'Reductio ad Absurdum',
        category: 'reasoning',
        tag: 'ردّ',
        difficulty: 'hard',
        definition: 'أسلوب حجاجي يُفنِّد حجة ما بإثبات أن منطقها يؤدي إلى نتيجة سخيفة أو متناقضة. أداة قوية في المنطق الرياضي والفلسفة.',
        example: 'من قال "كل قاعدة لها استثناء" يناقض نفسه لأن هذه القاعدة نفسها يجب أن يكون لها استثناء!',
        tip: 'عندما تريد تفنيد حجة، ابسطها حتى نهايتها المنطقية وانظر هل تصل إلى نتيجة سخيفة.'
    },
    {
        id: 'fallacy-burden',
        icon: '⚖️',
        title: 'عبء الإثبات (Burden of Proof)',
        titleEn: 'Burden of Proof',
        category: 'reasoning',
        tag: 'إثبات',
        difficulty: 'medium',
        definition: 'مبدأ منطقي يُحدِّد على مَن تقع مسؤولية تقديم الأدلة. الادعاءات الاستثنائية تحتاج أدلة استثنائية، ومن ادّعى عليه البرهان.',
        example: '"الأجانب يسرقون وظائفنا، أثبت أن ذلك غير صحيح!" — عبء الإثبات على مَن يدّعي، لا على من ينفي.',
        tip: 'لا يمكن نفي شيء ما بالافتراض؛ من يدّعي عليه أن يثبت ادعاءه أولاً.'
    }
];

// ── Quiz Questions Data ──────────────────────────────
const quizQuestions = {
    easy: [
        {
            question: 'قال أحمد: "لا تستمع لرأيه في التغذية لأنه سمين!" ما نوع هذه المغالطة؟',
            options: ['مغالطة الهجوم الشخصي (Ad Hominem)', 'مغالطة رجل القش', 'مغالطة التعميم', 'مغالطة الاستغلال العاطفي'],
            correct: 0,
            category: 'المغالطات',
            explanation: 'صحيح! هذه مغالطة هجوم شخصي لأنه هاجم المتحدث بدلاً من الرد على حجته عن التغذية.'
        },
        {
            question: '"الجميع يستخدم هذا التطبيق، لا بد أنه رائع!" أي مغالطة هذه؟',
            options: ['مغالطة عليك الركب (Bandwagon)', 'مغالطة الطبيعي', 'مغالطة الاستغلال العاطفي', 'مغالطة التعميم المتسرع'],
            correct: 0,
            category: 'المغالطات',
            explanation: 'صحيح! هذه مغالطة "عليك الركب" إذ تُقرِّر أن الشعبية = الجودة، وهذا ليس بالضرورة صحيحاً.'
        },
        {
            question: '"هذا العلاج طبيعي 100%، إذن فهو آمن تماماً!" ما الخطأ في هذا الاستدلال؟',
            options: ['مغالطة الطبيعي', 'مغالطة الهجوم الشخصي', 'مغالطة الخيارين الزائفين', 'مغالطة الاستدلال الدائري'],
            correct: 0,
            category: 'المغالطات',
            explanation: 'صحيح! الطبيعي لا يساوي الآمن دائماً. السموم الطبيعية موجودة ومميتة!'
        },
        {
            question: 'ما نوع الاستدلال في هذا المثال: "كل الطيور لها أجنحة، والعصفور طائر، إذن العصفور له أجنحة"؟',
            options: ['الاستدلال الاستنتاجي (Deductive)', 'الاستدلال الاستقرائي', 'الاستدلال بالقياس', 'الاستدلال الافتراضي'],
            correct: 0,
            category: 'الاستدلالات',
            explanation: 'صحيح! هذا استدلال استنتاجي (قياسي) من مقدمتين عامتين إلى نتيجة خاصة.'
        },
        {
            question: '"قابلت شخصين من مدينة ما وكانا بخيلين، إذن أهل تلك المدينة بخلاء!" ما المشكلة؟',
            options: ['تعميم متسرع من عينة صغيرة جداً', 'هجوم شخصي', 'استغلال عاطفي', 'مغالطة السلطة'],
            correct: 0,
            category: 'المغالطات',
            explanation: 'صحيح! شخصان لا يمثلان مدينة بأكملها. هذا تعميم متسرع من عينة ضعيفة.'
        }
    ],
    medium: [
        {
            question: 'قال المحامي: "موكلي بريء لأنه لم يُدَن بأي جريمة من قبل!" ما نوع هذا الاستدلال؟',
            options: ['مغالطة Ad Hominem معكوسة', 'الاستدلال الصحيح بالسوابق', 'مغالطة التعميم', 'استدلال سليم'],
            correct: 1,
            category: 'الاستدلالات',
            explanation: 'البراءة السابقة قرينة على حسن السيرة وتُؤخَذ بعين الاعتبار في القانون، لكنها لا تُثبت البراءة في قضية محددة.'
        },
        {
            question: '"إما أن تدعم سياستنا كاملاً أو أنت تكره الوطن!" ما المغالطة هنا؟',
            options: ['مغالطة الخيارين الزائفين', 'مغالطة الهجوم الشخصي', 'مغالطة الرنجة الحمراء', 'مغالطة رجل القش'],
            correct: 0,
            category: 'المغالطات',
            explanation: 'صحيح! هذه مغالطة الخيارين الزائفين. يمكن دعم الوطن مع رفض سياسة معينة.'
        },
        {
            question: 'الطبيب يُشخِّص مرضاً بناءً على مجموعة أعراض ويختار "التفسير الأبسط والأرجح". أي نوع استدلال يستخدم؟',
            options: ['الاستدلال الافتراضي (Abductive)', 'الاستدلال الاستنتاجي', 'الاستدلال بالقياس', 'الاستدلال الاستقرائي'],
            correct: 0,
            category: 'الاستدلالات',
            explanation: 'صحيح! التشخيص الطبي نموذج كلاسيكي للاستدلال الافتراضي: اختيار أفضل تفسير للأعراض المتاحة.'
        },
        {
            question: 'قال سياسي يُسأَل عن الفساد: "بدلاً من التركيز على هذا، لماذا لا نتحدث عن الإنجازات العظيمة؟" ما المغالطة؟',
            options: ['مغالطة الرنجة الحمراء', 'مغالطة رجل القش', 'مغالطة المنحدر الزلق', 'مغالطة الاستغلال العاطفي'],
            correct: 0,
            category: 'المغالطات',
            explanation: 'صحيح! تحويل الموضوع من الفساد إلى الإنجازات هو مغالطة الرنجة الحمراء الكلاسيكية.'
        },
        {
            question: '"ارتديت قميصاً أزرق يوم نجاحي في الاختبار، هذا القميص محظوظ!" أي مغالطة هذه؟',
            options: ['مغالطة التالي هو السبب (Post Hoc)', 'مغالطة التعميم المتسرع', 'مغالطة الاستدلال الدائري', 'مغالطة الخيارين الزائفين'],
            correct: 0,
            category: 'المغالطات',
            explanation: 'صحيح! التسلسل الزمني (ارتداء → نجاح) لا يعني سببية. هذه مغالطة Post Hoc.'
        }
    ],
    hard: [
        {
            question: '"كل شيء أنشأته شركتنا هو أحدث ما توصلت إليه التكنولوجيا، لأننا نستخدم أحدث التقنيات دائماً." ما المغالطة؟',
            options: ['الاستدلال الدائري (Circular Reasoning)', 'مغالطة الهجوم الشخصي', 'مغالطة رجل القش', 'مغالطة التعميم'],
            correct: 0,
            category: 'المغالطات',
            explanation: 'صحيح! "نصنع أحدث التقنيات لأننا نستخدم أحدث التقنيات" — دائرة مفرغة بلا دليل مستقل.'
        },
        {
            question: 'أي هذه الأمثلة يمثل "Reductio ad Absurdum" صحيحاً؟',
            options: [
                'إثبات أن مبدأ "الحرية المطلقة" يؤدي إلى الفوضى الكاملة',
                'مهاجمة شخص بسبب صفاته',
                'تقديم خيارين فقط',
                'الاستشهاد بالأغلبية'
            ],
            correct: 0,
            category: 'الاستدلالات',
            explanation: 'صحيح! إثبات أن تطبيق مبدأ ما حتى نهايته المنطقية يؤدي إلى نتيجة سخيفة هو Reductio ad Absurdum.'
        },
        {
            question: '"إذا سمحنا بالاحتجاج السلمي، سيطالب الناس بالمزيد، ثم ستقع الفوضى، وستنهار الدولة!" ما المغالطة؟',
            options: ['مغالطة المنحدر الزلق', 'مغالطة التعميم المتسرع', 'مغالطة الخيارين الزائفين', 'مغالطة رجل القش'],
            correct: 0,
            category: 'المغالطات',
            explanation: 'صحيح! افتراض سلسلة كارثية بلا دليل على حتميتها هو مغالطة المنحدر الزلق.'
        },
        {
            question: 'ما الفرق الجوهري بين الاستدلال الاستقرائي والاستنتاجي؟',
            options: [
                'الاستنتاجي ينتج يقيناً إذا كانت مقدماته صحيحة، بينما الاستقرائي ينتج احتمالاً',
                'الاستقرائي أقوى دائماً من الاستنتاجي',
                'الاستنتاجي يبدأ من الخاص إلى العام',
                'لا فرق بينهما'
            ],
            correct: 0,
            category: 'الاستدلالات',
            explanation: 'صحيح! الاستنتاجي: مقدمات صحيحة + بنية سليمة = نتيجة حتمية. الاستقرائي: ملاحظات → احتمال عالٍ فقط.'
        },
        {
            question: '"لا تثق بهذا التقرير لأن من كتبه لم يُخبرنا بكل أسباب استنتاجاته." هل هذا نقد مشروع أم مغالطة؟',
            options: [
                'نقد مشروع — الشفافية المنهجية متطلب معقول',
                'مغالطة الهجوم الشخصي',
                'مغالطة الرنجة الحمراء',
                'مغالطة المنحدر الزلق'
            ],
            correct: 0,
            category: 'التفكير النقدي',
            explanation: 'صحيح! المطالبة بالشفافية المنهجية هي ممارسة نقدية سليمة، وليست مغالطة.'
        }
    ]
};

// ── State ──────────────────────────────────────────
let currentCategory = 'fallacies';
let quizDifficulty = 'easy';
let currentQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let quizStartTime = null;
let timerInterval = null;
let totalScore = 0;
let analysisHistory = [];

// ── Init ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    renderLearnCards('fallacies');
    setupScrollObserver();
    updateNavScore();
});

// ── Particle System ──────────────────────────────────
function createParticles() {
    const container = document.getElementById('particles-bg');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 4 + 2;
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            animation-duration: ${Math.random() * 15 + 10}s;
            animation-delay: ${Math.random() * 10}s;
        `;
        container.appendChild(particle);
    }
}

// ── Navigation Active State ──────────────────────────
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = ['section-learn', 'section-quiz', 'section-analyzer'];
    const navIds = ['nav-learn', 'nav-quiz', 'nav-analyzer'];
    sections.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const navEl = document.getElementById(navIds[i]);
        if (navEl) {
            navEl.classList.toggle('active', rect.top < 200 && rect.bottom > 200);
        }
    });
}

// ── Scroll Helper ──────────────────────────────────
function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Learn Section ──────────────────────────────────
function renderLearnCards(category) {
    const grid = document.getElementById('learn-grid');
    const data = category === 'fallacies' ? fallaciesData : reasoningData;
    grid.innerHTML = '';
    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'learn-card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <div class="card-header">
                <div class="card-icon-wrap">${item.icon}</div>
                <span class="card-difficulty diff-${item.difficulty}">
                    ${item.difficulty === 'easy' ? 'سهل' : item.difficulty === 'medium' ? 'متوسط' : 'صعب'}
                </span>
            </div>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-desc">${item.definition}</p>
            <div class="card-footer">
                <span class="card-tag">${item.tag}</span>
                <span class="card-arrow">←</span>
            </div>
        `;
        card.addEventListener('click', () => openModal(item));
        grid.appendChild(card);
    });
}

function switchCategory(category, btn) {
    currentCategory = category;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderLearnCards(category);
}

// ── Modal ──────────────────────────────────────────
function openModal(item) {
    document.getElementById('modal-icon').textContent = item.icon;
    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-badge').innerHTML = `<span class="card-tag">${item.tag}</span>`;
    document.getElementById('modal-definition').textContent = item.definition;
    document.getElementById('modal-example').textContent = item.example;
    const tipBox = document.getElementById('modal-tip-box');
    if (item.tip) {
        tipBox.style.display = '';
        document.getElementById('modal-tip').textContent = item.tip;
    } else {
        tipBox.style.display = 'none';
    }
    document.getElementById('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ── Scroll Animation Observer ──────────────────────
function setupScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    setTimeout(() => {
        document.querySelectorAll('.learn-card, .quiz-container, .analyzer-container').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }, 100);
}

// ── Quiz System ────────────────────────────────────
function setDifficulty(level, btn) {
    quizDifficulty = level;
    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function startQuiz() {
    document.getElementById('quiz-start').style.display = 'none';
    document.getElementById('quiz-game').style.display = 'flex';
    document.getElementById('quiz-result').style.display = 'none';

    currentQuestions = shuffleArray([...quizQuestions[quizDifficulty]]).slice(0, 10);
    // Pad with mixed questions if needed
    if (currentQuestions.length < 10) {
        const allQ = [...quizQuestions.easy, ...quizQuestions.medium, ...quizQuestions.hard];
        const extra = shuffleArray(allQ.filter(q => !currentQuestions.includes(q)));
        currentQuestions = [...currentQuestions, ...extra].slice(0, 10);
    }

    currentQuestionIndex = 0;
    quizScore = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    quizStartTime = Date.now();
    renderQuestion();
}

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function renderQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    if (!q) { endQuiz(); return; }

    const total = currentQuestions.length;
    document.getElementById('q-current').textContent = `سؤال ${currentQuestionIndex + 1}`;
    document.getElementById('q-total').textContent = `من ${total}`;
    document.getElementById('q-score').textContent = quizScore;
    document.getElementById('quiz-progress-fill').style.width = `${(currentQuestionIndex / total) * 100}%`;
    document.getElementById('q-category').textContent = q.category;
    document.getElementById('q-text').textContent = q.question;
    document.getElementById('quiz-feedback').style.display = 'none';
    document.getElementById('btn-next').style.display = 'none';

    const optionsContainer = document.getElementById('quiz-options');
    const letters = ['أ', 'ب', 'ج', 'د'];
    optionsContainer.innerHTML = q.options.map((opt, i) => `
        <button class="option-btn" onclick="selectAnswer(${i})" id="opt-${i}">
            <span class="option-letter">${letters[i]}</span>
            <span>${opt}</span>
        </button>
    `).join('');

    // Start timer
    clearInterval(timerInterval);
    let timeLeft = 30;
    document.getElementById('timer-fill').style.width = '100%';
    document.getElementById('timer-fill').style.transition = 'width 30s linear';
    setTimeout(() => {
        document.getElementById('timer-fill').style.width = '0%';
    }, 50);

    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeoutAnswer();
        }
    }, 1000);
}

function selectAnswer(index) {
    clearInterval(timerInterval);
    const q = currentQuestions[currentQuestionIndex];
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.disabled = true);

    const isCorrect = index === q.correct;
    btns[index].classList.add(isCorrect ? 'correct' : 'wrong');
    btns[q.correct].classList.add('correct');

    if (isCorrect) {
        const bonus = quizDifficulty === 'hard' ? 15 : quizDifficulty === 'medium' ? 10 : 8;
        quizScore += bonus;
        correctAnswers++;
        showFeedback(true, `✅ ${q.explanation}`);
        updateNavScore();
    } else {
        wrongAnswers++;
        showFeedback(false, `❌ ${q.explanation}`);
    }

    document.getElementById('btn-next').style.display = 'flex';
    document.getElementById('q-score').textContent = quizScore;
}

function timeoutAnswer() {
    const q = currentQuestions[currentQuestionIndex];
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.disabled = true);
    btns[q.correct].classList.add('correct');
    wrongAnswers++;
    showFeedback(false, `⏰ انتهى الوقت! ${q.explanation}`);
    document.getElementById('btn-next').style.display = 'flex';
}

function showFeedback(isCorrect, msg) {
    const fb = document.getElementById('quiz-feedback');
    fb.className = `quiz-feedback ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`;
    fb.textContent = msg;
    fb.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= currentQuestions.length) {
        endQuiz();
    } else {
        renderQuestion();
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    const elapsed = Math.round((Date.now() - quizStartTime) / 1000);
    const finalScore = Math.round((quizScore / (currentQuestions.length * 15)) * 100);

    document.getElementById('quiz-game').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';

    let emoji = '😊', title = 'جهد جيد!', sub = 'واصل التعلم والاختبار';
    if (finalScore >= 80) { emoji = '🏆'; title = 'ممتاز!'; sub = 'أنت محلل منطقي بارع!'; }
    else if (finalScore >= 60) { emoji = '🎯'; title = 'جيد جداً!'; sub = 'مهاراتك المنطقية في تطور مستمر'; }
    else if (finalScore >= 40) { emoji = '📚'; title = 'جيد!'; sub = 'راجع الدروس لتحسين نتيجتك'; }
    else { emoji = '🌱'; title = 'تحتاج مزيداً من التدريب'; sub = 'لا تستسلم! المراجعة مفتاح التحسن'; }

    document.getElementById('result-animation').textContent = emoji;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-subtitle').textContent = sub;
    document.getElementById('result-score-num').textContent = finalScore;
    document.getElementById('rstat-correct').textContent = `${correctAnswers} صحيح`;
    document.getElementById('rstat-wrong').textContent = `${wrongAnswers} خطأ`;
    document.getElementById('rstat-time').textContent = `${elapsed} ثانية`;

    // Add to total score
    totalScore += quizScore;
    updateNavScore();
    showToast(`انتهى الاختبار! نتيجتك: ${finalScore}%`, 'success');
}

function restartQuiz() {
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-start').style.display = 'block';
}

function updateNavScore() {
    document.getElementById('score-display').textContent = `${totalScore} نقطة`;
}

// ── AI Argument Analyzer ────────────────────────────
const exampleArguments = [
    'قال المعلم إن الطالب لا يستحق النجاح لأنه دائماً كسول. لكنني أقول لكم إنه شخص سيء الطباع أصلاً لا ينفع في شيء، لذا فرأيه في الطلاب لا قيمة له.',
    'الجميع يقول أن هذا السياسي يقوم بعمل رائع، لذا يجب أن يكون كذلك. ولأن الأغلبية لا تخطئ، فرأيهم هو الصواب بالتأكيد.',
    'إما أن تكون معنا بالكامل في كل ما نقوله ونفعله، أو أنت عدو لنا. لا يوجد خيار وسط في هذه المسألة الوجودية.'
];

function loadExample(index) {
    document.getElementById('argument-input').value = exampleArguments[index];
    showToast('تم تحميل المثال', 'info');
}

async function analyzeArgument() {
    const input = document.getElementById('argument-input').value.trim();
    if (!input) {
        showToast('الرجاء إدخال نص للتحليل', 'error');
        return;
    }

    const depth = document.getElementById('analysis-depth').value;
    const depthGuidance = {
        basic: 'اجعل الشرح قصيراً جداً ومباشراً للمستخدم غير المتخصص.',
        detailed: 'اشرح سبب المغالطة بوضوح مع ربطها بعبارة المتحدث.',
        expert: 'قدّم تحليلاً أدق يوضح بنية الحجة والخلل المنطقي دون إطالة زائدة.'
    }[depth] || 'اشرح سبب المغالطة بوضوح مع ربطها بعبارة المتحدث.';
    const btn = document.getElementById('analyze-btn');
    btn.disabled = true;
    btn.querySelector('.analyze-btn-icon').textContent = '⏳';

    // Show AI response area
    document.getElementById('result-placeholder').style.display = 'none';
    document.getElementById('ai-response').style.display = 'flex';
    document.getElementById('ai-response-body').innerHTML = '<div class="analyzing-pulse">🔍 جارٍ تحديد المغالطة...</div>';
    document.getElementById('counter-example-box')?.remove();

    const analysisPrompt = buildAnalysisPrompt(input, depthGuidance);
    const systemPrompt = 'You are a logical fallacy expert. Return only the requested JSON object. Do not write prose outside JSON.';
    const userPrompt = analysisPrompt;

    try {
        const selectedModel = document.getElementById('ai-model')?.value || 'gpt-4o';
        const showCounter = document.getElementById('show-counter-example')?.checked ?? true;
        const response = await puter.ai.chat(userPrompt, { model: selectedModel, system: systemPrompt });

        const firstResponseText = typeof response === 'string' ? response :
            (response?.message?.content?.[0]?.text || response?.message?.content || '');
        let responseText = firstResponseText;

        if (!isUsableAnalysisResponse(responseText)) {
            responseText = await repairAnalysisResponse(input, firstResponseText, selectedModel, depthGuidance);
        }

        renderStructuredResponse(document.getElementById('ai-response-body'), responseText);

        // Generate an extended counter-example if toggled on
        if (showCounter) {
            generateCounterExample(input, responseText, selectedModel);
        }

        // Save to history
        const historyItem = {
            text: input.substring(0, 60) + (input.length > 60 ? '...' : ''),
            response: responseText,
            timestamp: new Date().toLocaleTimeString('ar')
        };
        analysisHistory.unshift(historyItem);
        renderHistory();

        showToast('تم التحليل بنجاح! ✨', 'success');
    } catch (error) {
        console.error('Puter AI Error:', error);
        const body = document.getElementById('ai-response-body');
        const isAuthError = error?.message?.includes('auth') || error?.message?.includes('sign') || error?.status === 401;
        if (isAuthError) {
            body.innerHTML = `
                <div class="error-box">
                    <div class="error-icon">🔐</div>
                    <p>يجب تسجيل الدخول إلى Puter أولاً لاستخدام الذكاء الاصطناعي.</p>
                    <button class="btn-primary btn-small" onclick="puter.auth.signIn().then(() => analyzeArgument())"> 🔑 تسجيل دخول سريع ومجاني</button>
                </div>
            `;
        } else {
            body.innerHTML = `
                <div class="error-box">
                    <div class="error-icon">⚠️</div>
                    <p>خطأ: ${error?.message || 'تعذّر الاتصال بالذكاء الاصطناعي'}</p>
                    <button class="btn-primary btn-small" onclick="analyzeArgument()">إعادة المحاولة</button>
                </div>
            `;
        }
        showToast('خطأ — انظر التفاصيل في نافذة النتائج', 'error');
    }

    btn.disabled = false;
    btn.querySelector('.analyze-btn-icon').textContent = '🔬';
}

function buildAnalysisPrompt(input, depthGuidance) {
    return `حلل النص التالي بوصفك خبيراً في المغالطات المنطقية.

المطلوب: أعطني النتيجة بصيغة JSON فقط، دون مقدمة ودون Markdown ودون شرح خارج JSON.

الصيغة الإلزامية:
{
  "fallacy_name": "اسم المغالطة بالعربية",
  "explanation": "شرح مختصر وواضح لماذا هذا الكلام يحتوي على هذه المغالطة",
  "example": "مثال عام بسيط يوضح نفس المنطق الخاطئ",
  "reply": "رد مهذب وحاسم يمكن للمستخدم قوله لصاحب الحجة أو المهاجم"
}

قواعد مهمة:
- إذا لم توجد مغالطة واضحة، اكتب "لا توجد مغالطة واضحة" في fallacy_name واشرح السبب.
- لا تعتمد على معلومات تاريخية حساسة إلا بقدر ما يخدم تحليل منطق الحجة.
- الشرح من جملتين إلى ثلاث جمل.
- المثال من جملتين إلى ثلاث جمل.
- الرد يجب أن يكون جاهزاً للاستخدام في النقاش، هادئاً ومحترماً وغير جارح.
- مستوى التحليل: ${depthGuidance}
- كل القيم داخل JSON يجب أن تكون بالعربية.

النص المراد تحليله:
"""${input}"""`;
}

function isUsableAnalysisResponse(text) {
    const rawText = String(text || '').trim();
    const parsed = parseAIResponseJson(rawText);
    if (parsed?.fallacy_name && (parsed.explanation || parsed.example || parsed.reply)) return true;
    return extractMarkedSections(rawText, getResponseMarkerSections()).length >= 2;
}

async function repairAnalysisResponse(originalArgument, unstructuredText, model, depthGuidance) {
    const repairPrompt = `الجواب التالي لم يلتزم بالتنسيق المطلوب. حوّله إلى JSON فقط.

إذا كان الجواب غير كافٍ، حلل النص الأصلي مباشرة ثم أعد JSON فقط.

الصيغة المطلوبة:
{
  "fallacy_name": "اسم المغالطة بالعربية",
  "explanation": "شرح مختصر وواضح لماذا هذا الكلام يحتوي على هذه المغالطة",
  "example": "مثال عام بسيط يوضح نفس المنطق الخاطئ",
  "reply": "رد مهذب وحاسم يمكن للمستخدم قوله لصاحب الحجة أو المهاجم"
}

قواعد:
- لا تكتب أي كلام خارج JSON.
- إن لم توجد مغالطة واضحة، قل ذلك صراحة داخل JSON.
- مستوى التحليل: ${depthGuidance}

النص الأصلي:
"""${originalArgument}"""

الجواب غير المنظم:
"""${String(unstructuredText || '').slice(0, 1800)}"""`;

    try {
        const repaired = await puter.ai.chat(repairPrompt, {
            model: model || 'gpt-4o',
            system: 'Return only one valid JSON object. No markdown. No prose outside JSON.'
        });
        const repairedText = typeof repaired === 'string' ? repaired :
            (repaired?.message?.content?.[0]?.text || repaired?.message?.content || '');

        if (isUsableAnalysisResponse(repairedText)) return repairedText;
    } catch (err) {
        console.error('Analysis repair error:', err);
    }

    return JSON.stringify(buildLocalFallbackAnalysis(originalArgument, unstructuredText));
}

function buildLocalFallbackAnalysis(argument, rawText) {
    const inferred = inferLocalFallacy(argument, rawText);
    if (inferred) return inferred;

    const namedFallacy = String(rawText || '').match(/مغالطة\s+[^.،\n:]{2,45}/);
    if (namedFallacy) {
        return {
            fallacy_name: namedFallacy[0].trim(),
            explanation: 'استطاع التطبيق التقاط اسم المغالطة من جواب النموذج، لكن الجواب لم يكن منظماً بما يكفي. الفكرة العامة: توجد قفزة في الاستدلال تحتاج إلى دليل مباشر بدل الاكتفاء بالانطباع أو القرينة.',
            example: 'كأن يقول شخص: فلان يحمل لقباً معيناً، إذن لا بد أن تكون كل أفكاره وانتماءاته كما أتخيلها. اللقب وحده لا يكفي لإثبات النتيجة.',
            reply: 'لنثبت هذه النتيجة نحتاج دليلاً مباشراً على الادعاء، لا مجرد قرينة عامة أو انطباع.'
        };
    }

    return {
        fallacy_name: 'لم أستطع تحديد مغالطة بثقة',
        explanation: 'رجع النموذج بجواب غير منظم ولم تتوفر علامات كافية لاستخراج نوع المغالطة تلقائياً. أعد التحليل بصياغة أوضح للحجة، واذكر الادعاء والدليل والنتيجة في جملة واحدة إن أمكن.',
        example: 'مثلاً: "فلان قال كذا، والدليل كذا، إذن النتيجة كذا". عند فصل الادعاء عن الدليل يصبح كشف المغالطة أسهل.',
        reply: 'قبل أن أرد، حدّد لي الدليل المباشر على النتيجة حتى لا نخلط بين القرائن والاستنتاج.'
    };
}

function inferLocalFallacy(argument, rawText) {
    const text = `${argument || ''}\n${rawText || ''}`;
    const has = (regex) => regex.test(text);

    const rules = [
        {
            match: () => has(/لقب|لقبه|النسب|نسبه|الأصل|أصله|أموي|هاشمي|قرشي|عربي/) && has(/إذن|اذا|إذا|لذلك|بالتالي|بناء|يثبت|دليل|لأنه|لانه/),
            result: {
                fallacy_name: 'مغالطة الاحتكام إلى الأصل أو النسب',
                explanation: 'الخلل هنا هو تحويل اللقب أو النسب إلى دليل حاسم على الهوية أو المعتقد. الأصل قد يكون قرينة تاريخية، لكنه لا يكفي وحده لإثبات الدين أو اللغة أو الانتماء دون نصوص وسيرة ومصادر مباشرة.',
                example: 'شخص لقبه "المدني"، فيقول آخر: إذن هو بالضرورة من المدينة ويؤيد كل ما ينسب إليها. هذا استنتاج زائد من لقب فقط.',
                reply: 'اللقب أو النسب لا يكفي وحده لإثبات النتيجة. أعطني دليلاً مباشراً من سيرته أو أقواله أو مصادر موثوقة، ثم نناقش الحكم.'
            }
        },
        {
            match: () => has(/لا تستمع|لا تأخذ|لا تصدق|جاهل|غبي|سمين|فاشل|منافق|كذاب/) && has(/لأنه|لانه|هو|هذا الشخص|صاحب/),
            result: {
                fallacy_name: 'مغالطة الهجوم الشخصي',
                explanation: 'بدلاً من مناقشة الحجة نفسها، يتم الطعن في صاحبها أو صفاته. عيب الشخص لا يثبت خطأ الفكرة، وصحة الفكرة تحتاج دليلاً مستقلاً.',
                example: 'يقول شخص: لا تسمع نصيحته عن المال لأنه فقير. الفقر لا يرد على صحة النصيحة ولا على دليلها.',
                reply: 'لنترك الشخص جانباً ونناقش الفكرة نفسها: ما الدليل على أن الحجة خاطئة؟'
            }
        },
        {
            match: () => has(/إما|اما/) && has(/أنت ضدي|عدو|تكره|خائن|لا يوجد خيار|لا خيار/),
            result: {
                fallacy_name: 'مغالطة الخيارين الزائفين',
                explanation: 'تُعرض المسألة كأن فيها خيارين فقط، مع أن الواقع قد يسمح بمواقف وسطية أو بدائل أخرى. هذا يضغط على الطرف الآخر بدل مناقشة الاحتمالات فعلاً.',
                example: 'إما أن توافقني في كل شيء أو أنت تكره الحقيقة. يمكن أن أرفض جزءاً من كلامك وأقبل جزءاً آخر.',
                reply: 'ليس بالضرورة أن تكون الخيارات اثنين فقط. يمكنني رفض هذه النقطة مع الاتفاق على نقاط أخرى.'
            }
        },
        {
            match: () => has(/كل|الجميع|دائماً|دائما|أبداً|ابدا/) && has(/رأيت|قابلت|واحد|اثنين|ثلاثة|بعض/),
            result: {
                fallacy_name: 'مغالطة التعميم المتسرع',
                explanation: 'يتم إطلاق حكم عام اعتماداً على عينة صغيرة أو غير ممثلة. الحكم العام يحتاج شواهد كثيرة ومتنوعة، لا تجربة محدودة.',
                example: 'قابلت شخصين سيئين من مدينة ما، إذن كل أهل المدينة سيئون. هذا تعميم أكبر من الدليل.',
                reply: 'هذا الحكم يحتاج عينة أوسع ودليلاً أقوى. تجربة محدودة لا تكفي لتعميم النتيجة.'
            }
        },
        {
            match: () => has(/إذا سمحنا|اذا سمحنا|لو قبلنا/) && has(/سينهار|ستنهار|فوضى|كارثة|ثم/),
            result: {
                fallacy_name: 'مغالطة المنحدر الزلق',
                explanation: 'تفترض الحجة أن خطوة واحدة ستقود حتماً إلى سلسلة نتائج كارثية دون إثبات كل حلقة في السلسلة. الاحتمال وحده لا يكفي لإثبات الحتمية.',
                example: 'إذا غبت يوماً عن النادي ستترك الرياضة ثم ستنهار حياتك. هذا تسلسل مبالغ فيه بلا دليل.',
                reply: 'أثبت لي كل خطوة في هذه السلسلة. ما الدليل أن النتيجة الكارثية ستحدث حتماً؟'
            }
        },
        {
            match: () => has(/الجميع|كل الناس|الأغلبية|مشهور|منتشر/) && has(/إذن|اذا|إذا|لذلك|لا بد/),
            result: {
                fallacy_name: 'مغالطة الاحتكام إلى الشيوع',
                explanation: 'انتشار الرأي أو كثرة المؤمنين به لا تجعله صحيحاً بالضرورة. الصحة تُثبت بالدليل، لا بعدد المصفقين.',
                example: 'كل الناس يشترون هذا المنتج، إذن هو الأفضل. الشعبية قد تعني دعاية جيدة لا جودة حقيقية.',
                reply: 'انتشار الفكرة ليس دليلاً كافياً. ما الدليل الموضوعي على صحتها؟'
            }
        },
        {
            match: () => has(/قال الشيخ|قال الدكتور|قال الخبير|قال العالم|شخص مشهور/) && has(/إذن|اذا|إذا|لذلك|لا بد/),
            result: {
                fallacy_name: 'مغالطة الاحتكام إلى السلطة',
                explanation: 'يُجعل كلام شخصية ذات مكانة دليلاً نهائياً دون تقديم أدلة مستقلة. رأي المختص قد يكون مهماً، لكنه لا يغني عن البرهان.',
                example: 'قال ممثل مشهور إن الدواء مفيد، إذن هو مفيد. الشهرة ليست تجربة علمية.',
                reply: 'من حقنا سماع رأي المختص، لكن ما الدليل الذي يستند إليه هذا الرأي؟'
            }
        }
    ];

    return rules.find((rule) => rule.match())?.result || null;
}

function typewriterEffect(el, text, speed = 15) {
    el.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            el.textContent += text[i];
            i++;
            el.scrollTop = el.scrollHeight;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

// ── Structured Response Renderer ─────────────────────────
function renderStructuredResponse(container, text) {
    container.innerHTML = '';
    const rawText = String(text || '').trim();
    const parsedResponse = parseAIResponseJson(rawText);

    if (parsedResponse) {
        renderResponseSections(container, [
            {
                id: 'sec-name',
                icon: '🔍',
                title: 'اسم المغالطة',
                colorClass: 'sec-red',
                content: parsedResponse.fallacy_name || 'غير محددة'
            },
            {
                id: 'sec-explanation',
                icon: '📌',
                title: 'شرح المغالطة',
                colorClass: 'sec-blue',
                content: parsedResponse.explanation || 'لا يوجد شرح كافٍ في نتيجة التحليل.'
            },
            {
                id: 'sec-example',
                icon: '💡',
                title: 'مثال يوضح الفكرة',
                colorClass: 'sec-yellow',
                content: parsedResponse.example || 'لا يوجد مثال متاح.'
            },
            {
                id: 'sec-reply',
                icon: '🛡️',
                title: 'رد مقترح',
                colorClass: 'sec-green',
                content: parsedResponse.reply || 'اطلب من الطرف الآخر دليلاً مباشراً على الحجة بدلاً من مهاجمة الشخص أو تغيير الموضوع.'
            }
        ]);
        return;
    }

    const markerSections = getResponseMarkerSections();

    const extracted = extractMarkedSections(rawText, markerSections);
    if (extracted.length > 0) {
        renderResponseSections(container, extracted);
        return;
    }

    renderResponseSections(container, [
        {
            id: 'sec-name',
            icon: '🔍',
            title: 'اسم المغالطة',
            colorClass: 'sec-red',
            content: 'لم أستطع تحديد مغالطة بثقة'
        },
        {
            id: 'sec-explanation',
            icon: '📌',
            title: 'شرح المغالطة',
            colorClass: 'sec-blue',
            content: rawText || 'تعذّر قراءة نتيجة التحليل.'
        },
        {
            id: 'sec-example',
            icon: '💡',
            title: 'مثال يوضح الفكرة',
            colorClass: 'sec-yellow',
            content: 'أعد صياغة الحجة بصيغة: الادعاء، الدليل، النتيجة. عندها يصبح كشف المغالطة أدق.'
        },
        {
            id: 'sec-reply',
            icon: '🛡️',
            title: 'رد مقترح',
            colorClass: 'sec-green',
            content: 'قبل أن أقبل النتيجة، أحتاج دليلاً مباشراً عليها لا مجرد وصف عام أو انتقال سريع من مقدمة إلى حكم.'
        }
    ]);
}

function getResponseMarkerSections() {
    return [
        {
            markers: ['🔍 اسم المغالطة:', 'اسم المغالطة:'],
            id: 'sec-name',
            icon: '🔍',
            title: 'اسم المغالطة',
            colorClass: 'sec-red'
        },
        {
            markers: ['📌 شرح المغالطة:', 'شرح المغالطة:', 'الشرح:'],
            id: 'sec-explanation',
            icon: '📌',
            title: 'شرح المغالطة',
            colorClass: 'sec-blue'
        },
        {
            markers: ['💡 مثال يوضح الغلطة:', '💡 مثال يوضح الفكرة:', 'مثال:', 'المثال:'],
            id: 'sec-example',
            icon: '💡',
            title: 'مثال يوضح الفكرة',
            colorClass: 'sec-yellow'
        },
        {
            markers: ['🛡️ رد مقترح:', 'رد مقترح:', 'كيف ترد:'],
            id: 'sec-reply',
            icon: '🛡️',
            title: 'رد مقترح',
            colorClass: 'sec-green'
        }
    ];
}

function parseAIResponseJson(text) {
    const cleaned = text
        .replace(/^```json\s*/i, '')
        .replace(/^```\s*/i, '')
        .replace(/```$/i, '')
        .trim();

    try {
        return JSON.parse(cleaned);
    } catch (err) {
        const firstBrace = cleaned.indexOf('{');
        const lastBrace = cleaned.lastIndexOf('}');
        if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) return null;

        try {
            return JSON.parse(cleaned.slice(firstBrace, lastBrace + 1));
        } catch (nestedErr) {
            return null;
        }
    }
}

function extractMarkedSections(text, sectionDefinitions) {
    const positions = [];
    sectionDefinitions.forEach((section) => {
        const foundMarkers = section.markers
            .map((marker) => ({ marker, index: text.indexOf(marker) }))
            .filter((item) => item.index !== -1)
            .sort((a, b) => a.index - b.index);

        if (foundMarkers.length > 0) {
            positions.push({ ...section, marker: foundMarkers[0].marker, index: foundMarkers[0].index });
        }
    });

    positions.sort((a, b) => a.index - b.index);

    return positions.map((section, idx) => {
        const contentStart = section.index + section.marker.length;
        const next = positions[idx + 1];
        const content = text.slice(contentStart, next ? next.index : undefined).trim();
        return { ...section, content };
    }).filter((section) => section.content);
}

function renderResponseSections(container, sections) {
    sections.forEach((sec, idx) => {
        const card = document.createElement('div');
        card.className = `response-section ${sec.colorClass}`;
        card.style.animationDelay = `${idx * 0.15}s`;
        card.innerHTML = `
            <div class="rs-header">
                <span class="rs-icon">${sec.icon}</span>
                <span class="rs-title">${sec.title}</span>
            </div>
            <div class="rs-body" id="${sec.id}"></div>
        `;
        container.appendChild(card);

        // Animate each section with typewriter, staggered
        setTimeout(() => {
            typewriterEffect(card.querySelector(`#${sec.id}`), sec.content, 12);
        }, idx * 600);
    });
}

function renderHistory() {
    const historySection = document.getElementById('analyzer-history');
    const historyList = document.getElementById('history-list');

    if (analysisHistory.length === 0) {
        historySection.style.display = 'none';
        return;
    }

    historySection.style.display = 'block';
    historyList.innerHTML = analysisHistory.slice(0, 5).map((item, i) => `
        <div class="history-item" onclick="restoreHistory(${i})">
            <span class="history-text">${item.text}</span>
            <span class="history-badge diff-easy">${item.timestamp}</span>
        </div>
    `).join('');
}

function restoreHistory(index) {
    const item = analysisHistory[index];
    document.getElementById('result-placeholder').style.display = 'none';
    document.getElementById('ai-response').style.display = 'flex';
    renderStructuredResponse(document.getElementById('ai-response-body'), item.response);
    scrollToSection('section-analyzer');
}

// ── Counter-Example Generator ────────────────────────────
async function generateCounterExample(originalArgument, analysisText, model) {
    // Show counter-example section
    let counterBox = document.getElementById('counter-example-box');
    if (!counterBox) {
        counterBox = document.createElement('div');
        counterBox.id = 'counter-example-box';
        counterBox.className = 'counter-example-box';
        document.getElementById('ai-response').appendChild(counterBox);
    }

    counterBox.innerHTML = `
        <div class="counter-header">
            <span class="counter-icon">⚡</span>
            <span>مثال يُبيّن خطأ المهاجم</span>
            <div class="counter-loading">
                <span></span><span></span><span></span>
            </div>
        </div>
        <div class="counter-body" id="counter-body">جارٍ توليد المثال...</div>
    `;

    const counterSystemPrompt = `أنت خبير في المنطق والجدل. مهمتك: بناءً على الحجة الأصلية والتحليل المقدم، 
اكتب مثالاً عملياً قصيراً (4-6 جمل) يُوضح كيف يكون المهاجم/المتحدث مخطئاً. 
اكتب سيناريو واقعياً يُبطل حجته ويُظهر فسادها بشكل واضح وحاد.
أسلوبك: مثال ملموس → توضيح الخطأ → الرد الصحيح المنطقي.
اكتب بالعربية الفصحى فقط.`;

    const counterUserPrompt = `الحجة الأصلية: "${originalArgument}"

التحليل: ${analysisText.substring(0, 400)}...

الآن اكتب مثالاً عملياً قصيراً (لا تكتر من 6 جمل) يُبطل هذه الحجة ويُوضح خطأ صاحبها بشكل حاسم.`;

    try {
        const counterResponse = await puter.ai.chat(counterUserPrompt, {
            model: model || 'gpt-4o',
            system: counterSystemPrompt
        });

        const counterText = typeof counterResponse === 'string' ? counterResponse :
            (counterResponse?.message?.content?.[0]?.text || counterResponse?.message?.content || '');

        const counterBody = document.getElementById('counter-body');
        if (counterBody) {
            counterBody.textContent = '';
            typewriterEffect(counterBody, counterText, 20);
        }
    } catch (err) {
        const counterBody = document.getElementById('counter-body');
        if (counterBody) counterBody.textContent = 'تعذّر توليد المثال.';
        console.error('Counter example error:', err);
    }
}

// ── Model label sync ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const modelSelect = document.getElementById('ai-model');
    const modelLabel = document.getElementById('current-model-label');
    if (modelSelect && modelLabel) {
        modelSelect.addEventListener('change', () => {
            modelLabel.textContent = modelSelect.options[modelSelect.selectedIndex].text;
        });
    }
});

// ── Toast Notifications ────────────────────────────
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    const icons = { success: '✅', error: '❌', info: 'ℹ️' };
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${icons[type]}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-20px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
