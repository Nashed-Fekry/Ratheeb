/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CONFIG
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const WA = '971503110244';
const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzXljX39ro1_A2l_YcEiEYLl8w9Q-3H9c2dHAiytJvZDFRyL-vzhlEt6BWJxI9ciAQqcg/exec';
const GA_ID = 'GA_MEASUREMENT_ID'; // استبدل بـ G-XXXXXXXXXX الخاص بك
const TOTAL_STEPS = 9;
let currentStep = 1;
let formStarted = false;

function gtagEvent(eventName, params) {
  if (typeof gtag === 'function') gtag('event', eventName, { ...params, send_to: GA_ID });
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const I = {
  ar: {
    nav_cta: 'احجز تقييم النمو', nav_about: 'من نحن', nav_portfolio: 'الأعمال', nav_problem: 'المشكلة', nav_framework: 'المنهجية',
    nav_proof: 'النتائج', nav_faq: 'الأسئلة', nav_ind: 'القطاعات',
    about_label: 'الفريق خلف النتائج', about_title: 'نحن لا نبيع خدمات —<br>نحن نبني شراكات',
    about_p1: 'راثيب بدأت في الإمارات عام 2018 بفكرة بسيطة: إن صاحب البزنس يستحق شريكاً يفهم أرقامه ويتحمل معه مسؤولية النتيجة — لا مورد يبيع باقات ويختفي.',
    about_p2: 'اليوم نعمل مع براندات في الإمارات ومصر، ونتوسع في السوق المصري بنفس المنهجية التي حوّلت DHG من 30 ألف إلى 380 ألف درهم في شهر واحد.',
    about_stat1: 'في الخليج', about_stat2: 'في مصر', about_stat3: 'في المغرب',
    founder_name: '[اسم المؤسس]', founder_title: 'المؤسس والرئيس التنفيذي',
    founder_bio: 'خبرة 7+ سنوات في نمو الإيرادات للبراندات الخليجية',
    founder_quote: '"نثق فيما نقوله لعميلنا — لأننا عشناه مع كل براند اشتغلنا معه."',
    founder_cite: '— مؤسس راثيب',
    port_label: 'الأعمال', port_title: 'أعمالنا المميزة', port_all: 'عرض كل المشاريع',
    consult_badge: 'استشارة مجانية', consult_title: 'احجز استشارة مجانية الآن',
    consult_sub: 'هل أنت مستعد لتطوير علامتك التجارية؟ دعنا نناقش رؤيتك ونبني استراتيجية مخصصة تحقق نتائج حقيقية.',
    consult_btn: 'احجز استشارة مجانية', consult_note: '✓ بدون التزام ✓ رد خلال 24 ساعة ✓ استشارة من خبراء',
    hero_eyebrow: 'شريك هندسة الإيراد',
    hero_dim: 'توقّف عن شراء التسويق', hero_accent: 'ابدأ بناء نظام الإيراد',
    hero_sub: 'راثيب لا تبيع باقات تسويق. راثيب تصمم هياكل نمو تحوّل كل جنيه في الإعلانات والمحتوى إلى إيراد قابل للقياس — لأصحاب البزنسات الجادين الذين يريدون شريكاً لا مورّداً.',
    hero_cta_1: 'احجز تقييم النمو المجاني ←', hero_cta_2: 'اكتشف كيف نعمل',
    stat_brands: 'براند ناجح', stat_since: 'منذ عام', stat_roas: 'متوسط ROAS', stat_conv: 'معدل التحويل',
    prob_label: 'المشكلة الحقيقية', prob_title: 'لماذا تشتري التسويق<br>ولا تشتري النمو؟',
    prob_sub: 'معظم البزنسات تشتري خدمات منفصلة بدون منظومة. النتيجة إنفاق بلا عائد واضح.',
    prob_stat_1: 'من الشركات تقيس نجاحها بالشكل والمشاهدات والإعجابات، بينما المبيعات لا تتحرك بالسرعة التي تستحقها',
    prob_stat_2: 'زيادة الميزانية الإعلانية قبل فهم المشكلة الحقيقية قد تضاعف الخسائر بدلًا من الأرباح',
    prob_stat_3: 'أكبر خسارة في التسويق ليست المال الذي يُصرف، بل العملاء والفرص التي تضيع بسبب غياب نظام نمو واضح',
    comp_label: 'وكالة مقابل شريك', comp_title: 'أي وكالة تستطيع تنفيذ المهام<br>لكن قليلون من يبنون <span>نظامًا يحقق نموًا حقيقيًا</span>',
    fw_label: 'المنهجية', fw_title: 'خمس خطوات تفصل بين<br>الإنفاق والنمو الحقيقي',
    wa_title: 'تواصل معنا على واتساب',
    sg_banner: 'الفرق بين الإنفاق والنمو ليس في الميزانية… بل في <span>النظام الذي يديرها</span>.',
    mp_label: 'الميديا برودكشن', mp_title: 'لا نبيع منشورات وإعلانات<br>بل <span>نبني نظامًا يحوّل الإنفاق إلى إيرادات</span>',
    mp_p1: 'محتوى مصمم لبناء الثقة وتحويل المتابع إلى عميل.',
    mp_p2: 'كل جنيه يُنفَق له هدف واضح وخطة لتحسين عائده.',
    mp_p3: 'إطلاق مبني على خطة واضحة تقلل المخاطر وتسرّع الوصول إلى الربحية.',
    ind_label: 'القطاعات', ind_title: 'نتخصص حيث يصعب التعميم',
    ind_sub: 'لكل قطاع لغته ومنطقه وجمهوره. نجاح راثيب مبني على العمق لا الاتساع.',
    out_label: 'التحولات الفعلية', out_title: 'لا نبيع خدمات<br>نصنع تحولات',
    case_badge: 'تحليل حقيقي · موثّق بالأرقام',
    case_title: 'من 30,000 إلى 380,000 درهم<br>في 30 يوماً فقط',
    case_meta: 'أكاديمية DHG الرياضية — أبوظبي، الإمارات · قطاع: أكاديميات رياضية للأطفال',
    case_before_l: 'قبل راثيب', case_growth_l: 'نمو المبيعات', case_after_l: 'بعد راثيب',
    case_unit: 'درهم / شهر', case_growth_s: 'في شهر واحد',
    case_did_title: 'ما الذي فعلناه بالضبط',
    case_did_1: 'بنينا استراتيجية محتوى كاملة مبنية على احتياجات الآباء في أبوظبي — لا على افتراضات',
    case_did_2: 'أدرنا حملات Meta Ads بـ targeting دقيق يستهدف الآباء في المنطقة الجغرافية الصحيحة',
    case_did_3: 'أنتجنا محتوى فيديو يُظهر تجربة الأطفال الفعلية داخل الأكاديمية — يبني ثقة فورية',
    case_did_4: 'ربطنا الإعلانات بـ funnel مبيعات واضح — من أول ظهور للإعلان حتى تسجيل الطفل',
    case_quote: '"راثيب مش وكالة تسويق عادية — هم شركاء نمو حقيقيون. في شهر واحد شفنا أرقام ما كنا نتوقعها في سنة كاملة."',
    case_cite: 'إدارة أكاديمية DHG — أبوظبي',
    case_cta_q: 'بزنسك التالي في قائمة التحولات؟',
    case2_badge: 'كافيه سبيشالتي · دبي',
    case2_title: 'Mcocco Coffee —<br>استهداف الـ 1% في دبي',
    case2_meta: 'كافيه سبيشالتي يستهدف الفئة الأكثر إنفاقاً في سوق دبي',
    case2_stat1_l: 'الإنفاق التسويقي', case2_stat1_s: 'درهم — كامبين كامل',
    case2_stat2_l: 'العائد على الإنفاق', case2_stat2_s: 'ROAS موثّق',
    case2_stat3_l: 'المبيعات المحققة', case2_stat3_s: 'درهم',
    auth_quote: 'نحن لا نبيع لك <strong>خدمة تسويق</strong>.<br>نحن نبني معك <strong>هيكل إيراد</strong> — منهجية واضحة، أرقام موثقة، ومسؤولية حقيقية عن النتيجة.',
    auth_1: 'ضمان رؤية نتائج أولية موثقة أو نكمل بدون رسوم',
    auth_2_t: 'نتائجنا تتكلم عننا',
    auth_2: 'نهتم بكل جوانب البزنس من الألف إلى الياء، ونوفّر عليك وقت التفكير والبحث عن الحلول — بل نحن من نوفّرها لك.',
    auth_3: 'من القرارات مبنية على بيانات لا افتراضات',
    proof_label: 'ما يقوله عملاؤنا', proof_title: 'النتائج تتكلم',
    faq_label: 'الاعتراضات الشائعة', faq_title: 'إجابات صريحة على<br>الأسئلة الحقيقية',
    qual_label: 'من نعمل معه', qual_title: 'راثيب ليست للجميع<br>وهذا ما يميّز نتائجنا',
    qual_ideal_title: 'العميل المثالي لراثيب', qual_avoid_title: 'لا نعمل مع ✗',
    qual_box_title: 'الشراكة الجادة تبدأ بتقييم حقيقي',
    qual_box_desc: 'لا نرسل عروض أسعار قبل أن نفهم بزنسك كاملاً. كل proposal مكتوب لعميل واحد. التقييم مجاني وبدون أي التزام.',
    qual_cta: 'احجز تقييم النمو المجاني ←', qual_note: 'مكالمة 25 دقيقة لفهم البزنس الخاص بك ومعرفة مشاكلك والتعرّف على تفاصيله الكاملة',
    bridge_title: 'لنرَ إن كنّا الاختيار الصحيح لبعضنا',
    bridge_desc: 'لا نعمل مع الجميع — ونفتخر بذلك. تقييم النمو مجاني ومصمم ليجيب على سؤال واحد: هل راثيب هي الشريك الذي يحتاجه بزنسك الآن؟',
    bridge_eyebrow: 'WHERE IDEAS TAKE FLIGHT',
    bridge_cta: 'أكمل تقييم النمو ←', bridge_note: 'الاستمارة تستغرق 7 دقائق · لا رسوم · لا التزام',
    form_title: 'تقييم نمو البزنس', form_sub: 'كل إجابة تساعدنا نفهم بزنسك ونحدد الفرص الحقيقية لنموه',
    btn_next: 'التالي', btn_back: 'رجوع', btn_submit: 'إرسال وحجز المكالمة',
    s1_title:'بياناتك الشخصية', s1_sub:'سنتواصل معك لتحديد موعد مكالمة التقييم',
    s1_name:'الاسم بالكامل', s1_name_ph:'الاسم الأول والأخير',
    s1_phone:'رقم الهاتف', s1_phone_ph:'01xxxxxxxxx',
    s1_email:'البريد الإلكتروني', s1_brand:'اسم البراند', s1_brand_ph:'ما هو اسم بزنسك؟',
    s2_title:'معلومات عن البزنس', s2_sub:'نريد أن نفهم طبيعة نشاطك وحضوره الرقمي',
    s2_sector:'القطاع', s2_years:'منذ متى البزنس شغّال؟', s2_branches:'عدد الفروع',
    s2_ig:'لينك الإنستجرام', s2_site:'الموقع الإلكتروني',
    ind_1:'مطاعم وكافيهات', ind_3:'فاشون وملابس',
    ind_4:'ريتيل وتجزئة', ind_5:'خدمات مهنية', ind_6:'أخرى', ind_7:'عقارات',
    ind_select:'اختر هذا القطاع ←',
    select_placeholder:'اختر...',
    yr_1:'أقل من سنة', yr_2:'1 - 3 سنوات', yr_3:'3 - 5 سنوات', yr_4:'أكثر من 5 سنوات',
    br_1:'فرع واحد', br_2:'2 - 5 فروع', br_3:'6 - 15 فرع', br_4:'أكثر من 15',
    s3_title:'الإيرادات الحالية', s3_sub:'هذه المعلومات سرية وتساعدنا نحدد الفرص الحقيقية',
    s3_rev:'متوسط المبيعات الشهرية الحالية', s3_orders:'متوسط الطلبات شهرياً', s3_orders_ph:'عدد تقريبي',
    s3_aov:'متوسط قيمة الطلب (جنيه)', s3_target:'الإيراد الشهري المستهدف', s3_target_ph:'مثال: 2 مليون جنيه',
    rev_1:'أقل من 300,000 جنيه', rev_2:'300,000 — 700,000 جنيه', rev_3:'700,000 — 1.5 مليون',
    rev_4:'1.5 مليون — 5 مليون', rev_5:'أكثر من 5 مليون',
    s4_title:'ابدأ تقييم نظام النمو الخاص بشركتك',
    s4_sub:'أجب عن 3 أسئلة فقط لنكتشف معًا أين توجد أكبر فرصة لزيادة الإيرادات وتحسين كفاءة التسويق.',
    s4_q1:'كم تستثمر شهريًا في التسويق؟',
    spend_1:'أقل من 250,000 جنيه', spend_2:'250,000 — 500,000 جنيه', spend_3:'500,000 — 1,000,000 جنيه', spend_4:'أكثر من 1,000,000 جنيه',
    s4_q2:'هل تعرف تكلفة اكتساب العميل (CAC) الخاصة بك؟',
    cac_1:'نعم، وأتابعها باستمرار', cac_2:'لديّ رقم تقريبي', cac_3:'لا أعرفها',
    s4_q3:'هل تعرف صافي الربح الحقيقي بعد جميع التكاليف؟',
    profit_1:'نعم', profit_2:'أعرفه بشكل تقريبي', profit_3:'لا',
    s4_smart:'إذا لم تكن تعرف الـ CAC أو صافي الربح الحقيقي، فمن المحتمل أنك تتخذ قرارات تسويقية اعتمادًا على بيانات غير مكتملة — وهو أحد أكثر أسباب تباطؤ النمو شيوعًا لدى الشركات.',
    s4_who:'من يتولى التسويق الآن؟', s4_challenge:'أكبر تحدٍّ في التسويق حالياً',
    s4_challenge_ph:'اكتب بحرية — هذا يساعدنا نفهم وضعك الحقيقي...',
    mkt_1:'وكالة تسويق خارجية', mkt_2:'فريق داخلي', mkt_3:'فريلانسر أو مستقل', mkt_4:'لا يوجد دعم تسويقي',
    s5_title:'منظومة المبيعات', s5_sub:'التسويق الجيد بحاجة لمنظومة مبيعات تكمله',
    s5_sales_team:'هل لديك فريق مبيعات؟', s5_leads:'كم ليد تستقبل شهرياً؟', s5_conv:'معدل التحويل (%)',
    s5_crm:'هل لديك CRM أو نظام لمتابعة العملاء؟',
    sales_1:'نعم، فريق مبيعات متكامل', sales_2:'شخص أو اثنان فقط',
    sales_3:'أنا شخصياً من يتابع المبيعات', sales_4:'لا يوجد فريق مبيعات',
    crm_1:'نعم', crm_2:'لا', crm_3:'Excel / Google Sheets',
    s6_title:'الموقع والتتبع', s6_sub:'نفهم بنيتك التقنية الحالية لنحدد الفجوات',
    s6_site:'هل لديك موقع إلكتروني؟', s6_tracking:'أدوات التتبع المُثبّتة',
    multi_select:'(اختيار متعدد)', tracking_none:'لا يوجد تتبع',
    site_1:'نعم، موقع احترافي يعمل بكفاءة', site_2:'نعم، لكنه يحتاج تحسين', site_3:'لا يوجد موقع',
    s7_title:'أكبر التحديات', s7_sub:'اختر أهم 3 تحديات تواجهها في بزنسك الآن',
    s7_pick:'اختر ما ينطبق عليك', max3:'(حتى 3)',
    ch_1:'زيادة المبيعات', ch_2:'الوعي بالبراند', ch_3:'جودة المحتوى', ch_4:'كفاءة الإعلانات',
    ch_5:'الموقع ومعدل التحويل', ch_6:'الاحتفاظ بالعملاء', ch_7:'التوسع وفتح فروع',
    ch_8:'البيانات والقياس', ch_9:'الهوية البصرية', ch_10:'بناء فريق التسويق',
    s8_title:'أهداف النمو', s8_sub:'نريد أن نفهم أين تريد أن تكون — لا أين أنت الآن',
    s8_target:'ما الإيراد الشهري الذي تريد تحقيقه في 12 شهر؟', s8_target_ph:'مثال: 3 مليون جنيه',
    s8_expand:'هل تخطط لفتح فروع جديدة؟', s8_why:'لماذا لم تصل لهدفك حتى الآن؟',
    s8_why_ph:'كن صريحاً — هذه الإجابة هي أهم معلومة تعطينا إياها...',
    exp_1:'نعم، خلال 6 أشهر', exp_2:'نعم، خلال سنة', exp_3:'لا، التركيز على الفروع الحالية',
    s9_title:'جاهزية القرار', s9_sub:'سؤال أخير — والأهم من وجهة نظرنا',
    s9_dm:'من صانع القرار في التسويق؟', s9_timing:'متى تريد أن تبدأ؟',
    s9_q_label:'السؤال الأهم',
    s9_q_sub:'لو راثيب ساعدك تزيد إيراداتك 30% في الـ 12 شهر القادمة — ماذا سيتغير في بزنسك وفي حياتك؟',
    s9_final_ph:'اكتب بصراحة كاملة — هذه الإجابة تعطينا صورة حقيقية عن طموحك...',
    dm_1:'أنا شخصياً (صاحب البزنس)', dm_2:'أنا وشريكي معاً', dm_3:'مدير التسويق',
    t_1:'فوراً — جاهز للانطلاق', t_2:'خلال 30 يوم', t_3:'خلال 90 يوم', t_4:'في مرحلة البحث والمقارنة',
    footer_tag:'شريك هندسة الإيراد — نبني أنظمة نمو تحوّل الإنفاق التسويقي إلى إيراد قابل للقياس.',
    footer_copy:'© 2026 راثيب. جميع الحقوق محفوظة.',
    footer_geo:'السعودية · المغرب', footer_built:'بُني بـ', footer_method:'منهجية النتيجة أولاً'
  },
  en: {
    nav_cta: 'Book Growth Review', nav_about: 'About', nav_portfolio: 'Work', nav_problem: 'Problem', nav_framework: 'Methodology',
    nav_proof: 'Results', nav_faq: 'FAQs', nav_ind: 'Sectors',
    about_label: ‘The Team Behind the Results’, about_title: "We don’t sell services —<br>we build partnerships",
    about_p1: 'Rathib started in the UAE in 2018 with a simple idea: a business owner deserves a partner who understands their numbers and shares accountability for the outcome — not a vendor who sells packages and disappears.',
    about_p2: 'Today we work with brands across the UAE and Egypt, expanding into the Egyptian market with the same methodology that grew DHG from 30K to 380K AED in a single month.',
    about_stat1: 'in the Gulf', about_stat2: 'in Egypt', about_stat3: 'in Morocco',
    founder_name: '[Founder Name]', founder_title: 'Founder & CEO',
    founder_bio: '7+ years of experience growing revenue for Gulf brands',
    founder_quote: “\”We trust what we tell our clients — because we’ve lived it with every brand we’ve worked with.\””,
    founder_cite: '— Rathib Founder',
    port_label: 'Work', port_title: 'Our Featured Work', port_all: 'View All Projects',
    consult_badge: 'Free Consultation', consult_title: 'Book a Free Consultation Now',
    consult_sub: "Ready to grow your brand? Let’s discuss your vision and build a tailored strategy that delivers real results.",
    consult_btn: 'Book a Free Consultation', consult_note: '✓ No commitment ✓ Reply within 24 hours ✓ Expert consultation',
    hero_eyebrow: 'Revenue Engineering Partner',
    hero_dim: 'Stop Buying Marketing', hero_accent: 'Start Building Revenue Systems',
    hero_sub: 'Rathib does not sell marketing packages. We engineer growth frameworks that convert every pound spent on ads and content into measurable revenue — for serious business owners who want a partner, not a vendor.',
    hero_cta_1: 'Book Free Growth Review ←', hero_cta_2: 'Discover How We Work',
    stat_brands: 'Brands Scaled', stat_since: 'Since Year', stat_roas: 'Avg ROAS', stat_conv: 'Conv. Rate',
    prob_label: 'The Real Problem', prob_title: 'Why Buy Marketing<br>Instead of Buying Growth?',
    prob_sub: 'Most businesses buy disconnected services without a system. The result: spend without return.',
    prob_stat_1: "Of companies measure success by looks, views and likes — while sales don’t move as fast as they should",
    prob_stat_2: 'Raising your ad budget before understanding the real problem can multiply losses instead of profits',
    prob_stat_3: "The biggest marketing loss isn’t the money spent, but the customers and opportunities lost to the absence of a clear growth system",
    comp_label: 'Agency vs Partner', comp_title: 'Any agency can execute tasks<br>but few build <span>a system that creates real growth</span>',
    fw_label: 'Methodology', fw_title: 'Five Steps Separating<br>Spend from True Growth',
    wa_title: 'Chat with us on WhatsApp',
    sg_banner: "The gap between spending and growth isn’t in the budget… it’s in <span>the system that runs it</span>.",
    mp_label: ‘Media Production’, mp_title: "We don’t sell posts and ads<br>we <span>build a system that turns spend into revenue</span>",
    mp_p1: 'Content designed to build trust and turn followers into customers.',
    mp_p2: 'Every pound spent has a clear goal and a plan to improve its return.',
    mp_p3: 'Launches built on a clear plan that reduce risk and accelerate profitability.',
    ind_label: 'Sectors', ind_title: 'Specialized Where Generalizing Fails',
    ind_sub: 'Every sector has its language and audience. Our success is built on depth, not breadth.',
    out_label: 'Actual Transformations', out_title: "We Don't Sell Services<br>We Build Transformations",
    case_badge: 'Real Analysis · Verified by the Numbers',
    case_title: 'From 30,000 to 380,000 AED<br>in Just 30 Days',
    case_meta: 'DHG Sports Academy — Abu Dhabi, UAE · Sector: Kids Sports Academies',
    case_before_l: 'Before Rathib', case_growth_l: 'Sales Growth', case_after_l: 'After Rathib',
    case_unit: 'AED / month', case_growth_s: 'in one month',
    case_did_title: 'What Exactly We Did',
    case_did_1: 'Built a full content strategy based on the real needs of Abu Dhabi parents — not assumptions',
    case_did_2: 'Ran Meta Ads campaigns with precise targeting reaching parents in the right geography',
    case_did_3: "Produced video content showing the kids’ real experience inside the academy — building instant trust",
    case_did_4: "Connected the ads to a clear sales funnel — from first ad impression to a child’s enrollment",
    case_quote: "\"Rathib is not a regular marketing agency — they are real growth partners. In a single month we saw numbers we didn’t expect in a full year.\"",
    case_cite: 'DHG Academy Management — Abu Dhabi',
    case_cta_q: 'Is your business next on the transformations list?',
    case2_badge: 'Specialty Coffee · Dubai',
    case2_title: 'Mcocco Coffee —<br>Targeting the Top 1% in Dubai',
    case2_meta: "A specialty café targeting the highest-spending segment in Dubai's market",
    case2_stat1_l: 'Marketing Spend', case2_stat1_s: 'AED — full campaign',
    case2_stat2_l: 'Return on Ad Spend', case2_stat2_s: 'verified ROAS',
    case2_stat3_l: 'Revenue Generated', case2_stat3_s: 'AED',
    auth_quote: "We don't sell you a <strong>marketing service</strong>.<br>We build a <strong>revenue structure</strong> with you — clear methodology, verified numbers, and real accountability.",
    auth_1: 'Guaranteed initial results in 90 days or we work for free',
    auth_2_t: 'Our results speak for us',
    auth_2: 'We handle every aspect of your business from A to Z — saving you the time of thinking and searching for solutions; we provide them for you.',
    auth_3: 'Of decisions based on actual data, not assumptions',
    proof_label: 'What Our Clients Say', proof_title: 'The Results Talk',
    faq_label: 'Common Objections', faq_title: 'Honest Answers to<br>The Real Questions',
    qual_label: 'Who We Work With', qual_title: "Rathib Isn't for Everyone<br>That's Why Our Results Work",
    qual_ideal_title: 'Ideal Rathib Client', qual_avoid_title: 'We Do Not Work With ✗',
    qual_box_title: 'Serious Partnership Starts with a Real Audit',
    qual_box_desc: "We don't send proposals before fully auditing your business. Every roadmap is custom-written. The audit is free and without obligation.",
    qual_cta: 'Book Free Growth Review ←', qual_note: '25-min call to understand your business, identify your challenges, and learn its full details',
    bridge_title: "Let's See if We're the Right Fit",
    bridge_desc: "We don't work with everyone — and we're proud of it. The growth review is free and answers one question: Is Rathib the partner your business needs now?",
    bridge_eyebrow: 'WHERE IDEAS TAKE FLIGHT',
    bridge_cta: 'Complete Growth Review ←', bridge_note: 'Takes 7 minutes · No fees · No obligation',
    form_title: 'Business Growth Assessment', form_sub: 'Every answer helps us identify actual growth paths',
    btn_next: 'Next', btn_back: 'Back', btn_submit: 'Submit & Book Call',
    s1_title:'Personal Information', s1_sub:'We will reach out to schedule your assessment call',
    s1_name:'Full Name', s1_name_ph:'First and last name',
    s1_phone:'Phone Number', s1_phone_ph:'e.g. 01xxxxxxxxx',
    s1_email:'Email Address', s1_brand:'Brand / Business Name', s1_brand_ph:'What is your business name?',
    s2_title:'Business Information', s2_sub:'Help us understand your sector and digital footprint',
    s2_sector:'Sector', s2_years:'How long has the business been running?', s2_branches:'Number of Branches',
    s2_ig:'Instagram Profile', s2_site:'Website Link',
    ind_1:'Restaurants &amp; Cafes', ind_3:'Fashion &amp; Apparel',
    ind_4:'Retail', ind_5:'Professional Services', ind_6:'Other', ind_7:'Real Estate',
    ind_select:'Choose this sector →',
    select_placeholder:'Select...',
    yr_1:'Less than a year', yr_2:'1 - 3 Years', yr_3:'3 - 5 Years', yr_4:'More than 5 Years',
    br_1:'1 Branch', br_2:'2 - 5 Branches', br_3:'6 - 15 Branches', br_4:'More than 15',
    s3_title:'Current Revenue', s3_sub:'This data is strictly confidential',
    s3_rev:'Average Monthly Revenue', s3_orders:'Avg. Monthly Orders', s3_orders_ph:'Approximate count',
    s3_aov:'Avg. Order Value (EGP)', s3_target:'Target Monthly Revenue', s3_target_ph:'e.g. 2 Million EGP',
    rev_1:'Under 300,000 EGP', rev_2:'300,000 — 700,000 EGP', rev_3:'700,000 — 1.5M EGP',
    rev_4:'1.5M — 5M EGP', rev_5:'Over 5M EGP',
    s4_title:'Start Your Company’s Growth-System Assessment',
    s4_sub:'Answer just 3 questions so we can discover together where your biggest opportunity to grow revenue and improve marketing efficiency is.',
    s4_q1:'How much do you invest in marketing monthly?',
    spend_1:'Less than 250,000 EGP', spend_2:'250,000 — 500,000 EGP', spend_3:'500,000 — 1,000,000 EGP', spend_4:'More than 1,000,000 EGP',
    s4_q2:'Do you know your Customer Acquisition Cost (CAC)?',
    cac_1:'Yes, and I track it continuously', cac_2:'I have a rough number', cac_3:"I don't know it",
    s4_q3:'Do you know your real net profit after all costs?',
    profit_1:'Yes', profit_2:'I know it roughly', profit_3:'No',
    s4_smart:"If you don't know your CAC or real net profit, you're likely making marketing decisions on incomplete data — one of the most common reasons growth slows down for companies.",
    s4_who:'Who manages your marketing?', s4_challenge:'Biggest Marketing Bottleneck',
    s4_challenge_ph:'Write freely — this helps us understand your real situation...',
    mkt_1:'External Marketing Agency', mkt_2:'In-house Team', mkt_3:'Freelancer', mkt_4:'No active marketing',
    s5_title:'Sales System', s5_sub:'Great marketing needs a strong sales system',
    s5_sales_team:'Do you have a sales team?', s5_leads:'Avg. Monthly Leads', s5_conv:'Conversion Rate (%)',
    s5_crm:'Do you use a CRM?',
    sales_1:'Yes, full sales team', sales_2:'1 or 2 salespeople',
    sales_3:'I handle sales myself', sales_4:'No sales setup',
    crm_1:'Yes', crm_2:'No', crm_3:'Excel / Google Sheets',
    s6_title:'Website & Tracking', s6_sub:'We audit your tech stack to find conversion gaps',
    s6_site:'Do you have a website?', s6_tracking:'Installed Tracking Tools',
    multi_select:'(Select all that apply)', tracking_none:'No tracking setup',
    site_1:'Yes, professional and working well', site_2:'Yes, needs optimization', site_3:'No website',
    s7_title:'Biggest Challenges', s7_sub:'Choose the top 3 challenges in your business right now',
    s7_pick:'Select what applies', max3:'(Up to 3)',
    ch_1:'Increase Sales', ch_2:'Brand Awareness', ch_3:'Content Quality', ch_4:'Ad Efficiency',
    ch_5:'Website Conv. Rate', ch_6:'Customer Retention', ch_7:'Expansion & Branches',
    ch_8:'Data & Analytics', ch_9:'Visual Identity', ch_10:'Building Marketing Team',
    s8_title:'Growth Goals', s8_sub:"We need to understand where you want to go, not just where you are",
    s8_target:'Target Monthly Revenue in 12 Months?', s8_target_ph:'e.g. 3 Million EGP',
    s8_expand:'Planning to open new branches?', s8_why:"Why haven't you hit your target yet?",
    s8_why_ph:"Be honest — this is the most important info you'll give us...",
    exp_1:'Yes, within 6 months', exp_2:'Yes, within a year', exp_3:'No, focusing on current locations',
    s9_title:'Decision Readiness', s9_sub:'One last question — the most vital one',
    s9_dm:'Who makes the marketing decisions?', s9_timing:'When do you want to start?',
    s9_q_label:'The Most Important Question',
    s9_q_sub:'If Rathib helps you grow revenues by 30% in the next 12 months — what changes in your business and life?',
    s9_final_ph:'Answer honestly — this tells us about your real ambitions...',
    dm_1:'Myself (Business Owner)', dm_2:'My partner and I', dm_3:'Marketing Director',
    t_1:'Immediately — ready to go', t_2:'Within 30 days', t_3:'Within 90 days', t_4:'Researching options',
    footer_tag:'Revenue Engineering Partner — building growth engines that turn budgets into measurable revenue.',
    footer_copy:'© 2026 Rathib. All rights reserved.',
    footer_geo:'Saudi Arabia · Morocco', footer_built:'Built with', footer_method:'Result-First Methodology'
  }
};

const TICKER_DATA = {
  ar: ['<strong>119</strong> بزنس ناجح','<strong>السعودية · المغرب</strong>','<strong>7.3x</strong> متوسط ROAS','<strong>منذ 2018</strong> في السوق','<strong>منهجية النتيجة</strong> أولاً دائماً','<strong>إنتاج سينمائي</strong> بمنطق تجاري','<strong>ضمان</strong> نتائج موثقة بالأرقام','<strong>مطاعم · فاشون · كافيهات</strong>'],
  en: ['<strong>119</strong> Successful Brands','<strong>KSA · Morocco</strong>','<strong>7.3x</strong> Average ROAS','<strong>Since 2018</strong> in Market','<strong>Result-First</strong> Methodology','<strong>Cinematic Production</strong> with ROI Logic','<strong>Guaranteed</strong> Quantified Results','<strong>Deep Expertise</strong> in F&B, Fashion, Cafes']
};

const SVG = {
  doc:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  megaphone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  palette:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  barChart:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  building:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 22V12h6v10M3 9h18"/></svg>`,
  search:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  map:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>`,
  film:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>`,
  trending:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  rocket:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
  utensils:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`,
  coffee:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`,
  scissors:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`,
  store:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>`,
  network:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="9" width="4" height="6" rx="1"/><rect x="18" y="9" width="4" height="6" rx="1"/><rect x="10" y="2" width="4" height="6" rx="1"/><path d="M12 8v4"/><path d="M4 12h6"/><path d="M14 12h6"/></svg>`,
  user:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  lineUp:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  target:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  award:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  refresh:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  plus:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  arrowUp:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`,
  checkCircle:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>`,
  alertTriangle:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  starFilled:   `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  diamond:      `<svg viewBox="0 0 10 10" fill="currentColor" stroke="none"><polygon points="5 0 10 5 5 10 0 5"/></svg>`
};

const PROBLEM_ITEMS = {
  ar: [
    { icon: 'doc',       title: 'تنتج محتوى', desc: 'لكن المبيعات ثابتة' },
    { icon: 'megaphone', title: 'تشغّل إعلانات', desc: 'لكن تكلفة العميل تزيد كل شهر' },
    { icon: 'palette',   title: 'تصمم هوية', desc: 'لكن السوق لا يتذكرك' },
    { icon: 'barChart',  title: 'تجمع بيانات', desc: 'لكن لا تعرف ماذا تفعل بها' },
    { icon: 'building',  title: 'تدفع للوكالة', desc: 'لكن لا تعرف أين يذهب المال' }
  ],
  en: [
    { icon: 'doc',       title: 'You produce content', desc: 'but sales stay flat' },
    { icon: 'megaphone', title: 'You run ads', desc: 'but cost per customer climbs every month' },
    { icon: ‘palette’,   title: ‘You design an identity’, desc: "but the market doesn’t remember you" },
    { icon: ‘barChart’,  title: ‘You collect data’, desc: "but you don’t know what to do with it" },
    { icon: ‘building’,  title: ‘You pay an agency’, desc: "but you don’t know where the money goes" }
  ]
};

const COMP_DATA = {
  ar: {
    trad: { tag: 'الوكالة التقليدية', rows: ['تبيع مهاماً منفصلة: منشورات، تصاميم، إعلانات','تقيس النجاح بعدد المنشورات والإمبريشن','لا تفهم P&L ولا هامش الربح','تعمل على البزنس من الخارج','الفاتورة ثابتة سواء نجحت أم لا','تتبدل فريقاً كل بضعة أشهر','تسأل: "ماذا تريد أن ننشر؟"'] },
    rath: { tag: 'راثيب — شريك هندسة الإيراد', rows: ['يبني نظام نمو يربط التسويق بالمبيعات والعمليات والإيرادات في منظومة واحدة','يقيس النجاح بالإيرادات، CAC، MER، ROAS وصافي الربح... وليس بعدد المنشورات','يفكر في المبيعات والهامش قبل أي قرار إبداعي','يعمل شريكاً داخلياً يعرف أرقامك وأهدافك','أهداف واضحة، مؤشرات أداء قابلة للقياس، ومراجعة مستمرة لضمان التحسين','فريق متخصص ثابت لكل عميل بدون تدوير','يسأل: "ما الإيراد الذي تريد تحقيقه ولماذا؟"'] }
  },
  en: {
    trad: { tag: 'Traditional Agency', rows: ['Sells isolated deliverables: posts, designs, ads','Measures success by output volume & impressions','Does not understand P&L or profit margins','Works externally, away from your real data','Invoice is fixed whether they succeed or fail','Team keeps rotating every few months','Asks: "What do you want us to post?"'] },
    rath: { tag: 'Rathib — Revenue Engineering Partner', rows: ['Builds a growth system linking marketing, sales, operations, and revenue under one structure','Measures success by revenue, CAC, MER, ROAS, and net profit — not by number of posts','Thinks about sales & margin before any creative decision','Acts as an internal partner who knows your numbers','Clear goals, measurable KPIs, and continuous review to guarantee improvement','Dedicated, stable team per client, no rotation','Asks: "What revenue are you targeting and why?"'] }
  }
};

const FW_STEPS = {
  ar: [
    { n:'01', icon:'search', title:'R-Discover', gloss:'اكتشف · التشخيص', desc:'نفهم البزنس من الداخل: الإيرادات، المبيعات، الهوامش، رحلة العميل، السوق، والمنافسين، قبل اتخاذ أي قرار تسويقي.' },
    { n:'02', icon:'map',    title:'R-Architect', gloss:'ابنِ · هندسة النمو', desc:'نبني نظام نمو يربط الأهداف التجارية بالمحتوى والإعلانات والمبيعات ومؤشرات الأداء داخل خطة واحدة.' },
    { n:'03', icon:'film',   title:'R-Execute', gloss:'نفّذ · التنفيذ', desc:'محتوى وإنتاج بصري يليق بمستوى طموحك — من التصوير الاحترافي للإعلانات عالية التحويل.' },
    { n:'04', icon:'trending',title:'R-Optimize', gloss:'حسّن · التحسين', desc:'نقيس كل شيء ونعدّل في الوقت الفعلي — بناءً على البيانات الفعلية ومؤشرات الأداء، وليس على التخمين أو الانطباعات.' },
    { n:'05', icon:'rocket', title:'R-Scale', gloss:'وسّع · التوسع', desc:'نبني معك الأنظمة التي تجعل النمو قابلاً للاستدامة والتوسع دون إعادة البناء من الصفر.' }
  ],
  en: [
    { n:'01', icon:'search',  title:'R-Discover', gloss:'Discover', desc:'We understand the business from the inside: revenue, sales, margins, the customer journey, the market, and competitors — before any marketing decision.' },
    { n:'02', icon:'map',     title:'R-Architect', gloss:'Architect', desc:'We build a growth system that links business goals with content, ads, sales, and KPIs inside one plan.' },
    { n:'03', icon:'film',    title:'R-Execute', gloss:'Execute', desc:'Visual content production that matches your ambition — from elite shoots to conversion-focused ads.' },
    { n:'04', icon:'trending',title:'R-Optimize', gloss:'Optimize', desc:'We measure everything and adjust in real time — based on actual data and KPIs, not guesswork or impressions.' },
    { n:'05', icon:'rocket',  title:'R-Scale', gloss:'Scale', desc:'We build systems that make growth sustainable and scalable without starting from scratch.' }
  ]
};

const IND_ITEMS = {
  ar: [
    { icon:'utensils', key:'مطاعم وكافيهات', name:'المطاعم والكافيهات', desc:'من بناء الهوية البصرية إلى استراتيجية محتوى تحوّل المتابعين لزوار وحجوزات يومية — وتمييز يجعل مكانك يستحق الزيارة ويُحكى عنه بدون الاعتماد على الخصومات.', out:'نمو قاعدة الزبائن وزيادة متوسط الفاتورة' },
    { icon:'scissors', key:'فاشون', name:'الفاشون والموضة', desc:'إنتاج بصري يبيع ليس يعرض فقط — من Reels الفيديو للكمبيين الإعلاني للـ ROAS الذي تراه في الأرقام.', out:'المبيعات الأونلاين ومعدل الشراء المتكرر' },
    { icon:'store',    key:'ريتيل', name:'الريتيل والتجزئة', desc:'ربط الحضور الرقمي بالمبيعات الفعلية — محتوى يدفع للمتجر وإعلانات تحوّل الزيارة لمبيعة.', out:'معدل التحويل من الأونلاين للأوفلاين' },
    { icon:'building', key:'عقارات', name:'العقارات', desc:'تسويق يبيع الوحدات لا يعرضها فقط — توليد ليدات مؤهلة، محتوى يبني الثقة في المشروع، وحملات إعلانية تقصّر دورة البيع.', out:'ليدات مؤهلة وتسريع دورة البيع' },
    { icon:'network',  key:'أخرى', name:'التوسع وفتح الفروع', desc:'استراتيجية إطلاق مدروسة لكل فرع جديد — بناء وعي محلي سريع وتحقيق Break-Even في أقل وقت ممكن.', out:'سرعة الوصول لـ Break-Even في الفرع الجديد' },
    { icon:'user',     key:'أخرى', name:'Personal Branding للـ CEO', desc:'تحويل اسم صاحب البزنس لـ Authority يقصر دورة المبيعات ويفتح أبواباً يصعب فتحها بالإعلانات وحدها.', out:'الثقة المؤسسية وتقليص وقت القرار لدى العملاء' }
  ],
  en: [
    { icon:'utensils', key:'مطاعم وكافيهات', name:'Restaurants & Cafes', desc:'From visual identity to a content strategy that turns followers into daily visitors and reservations — distinctive positioning that makes your place worth visiting and worth talking about, without relying on discounts.', out:'Customer base growth & avg. ticket size' },
    { icon:'scissors', key:'فاشون', name:'Fashion & Apparel', desc:'Visual production designed to sell, not just showcase — from Reels to ad campaigns with measurable ROAS.', out:'Online sales & repeat purchase rate' },
    { icon:'store',    key:'ريتيل', name:'Retail & Local Shops', desc:'Connecting digital presence to physical sales — content driving store visits and ads that convert foot traffic.', out:'Online-to-offline conversion rate' },
    { icon:'building', key:'عقارات', name:'Real Estate', desc:'Marketing that sells units, not just showcases them — qualified lead generation, content that builds trust in the project, and campaigns that shorten the sales cycle.', out:'Qualified leads & a faster sales cycle' },
    { icon:'network',  key:'أخرى', name:'Multi-branch Expansion', desc:'Structured launch strategy for every new branch — fast local awareness and break-even in minimum time.', out:'Speed to break-even for each new branch' },
    { icon:'user',     key:'أخرى', name:'CEO Personal Branding', desc:'Turning a founder\'s name into an Authority that shortens sales cycles and opens doors ads alone cannot.', out:'Institutional trust & faster decision cycles' }
  ]
};

const OUT_ITEMS = {
  ar: [
    { icon:'lineUp',  before:'محتوى غير منتظم لا يحوّل', after:'محرك محتوى يجلب عملاء كل أسبوع', desc:'نظام كونتينت مبني على فانل واضح — كل قطعة تخدم هدفاً تجارياً محدداً لا مجرد ملء الكالندر.' },
    { icon:'target',  before:'إعلانات عشوائية تحترق بدون عائد', after:'إعلانات بـ ROAS قابل للقياس والتحسين', desc:'كل جنيه في الإعلانات يُتابَع من الإمبريشن حتى المبيعة — ونحسّن يومياً لا شهرياً.' },
    { icon:'award',   before:'براند ضعيف يتنافس بالسعر', after:'براند بـ Authority يتنافس بالقيمة', desc:'هوية بصرية وصوتية متماسكة تبني ثقة قبل أي إعلان وتجعل العميل يختارك حتى بسعر أعلى.' },
    { icon:'refresh', before:'إطلاق فرع يعتمد على الحظ', after:'إطلاق مدروس يحقق Break-Even بسرعة', desc:'خطة إطلاق متكاملة — بناء وعي قبل الافتتاح، ضجة يوم الافتتاح، ومتابعة استراتيجية بعده.' }
  ],
  en: [
    { icon:'lineUp',  before:'Irregular content that does not convert', after:'A content engine driving weekly leads', desc:'Content systems built on active funnels — every piece serves a commercial goal, not just calendar filler.' },
    { icon:'target',  before:'Random ad spend with no clear return', after:'Measurable ads with optimized ROAS', desc:'Every pound in ads is tracked from impression to sale — we optimize daily, not monthly.' },
    { icon:'award',   before:'Weak brand competing on price', after:'Authority brand competing on value', desc:'Cohesive visual and voice identity that builds trust before any ad, making clients choose you even at premium prices.' },
    { icon:'refresh', before:'Branch launches relying on luck', after:'Structured launch hitting break-even fast', desc:'Integrated launch plan — pre-opening awareness, grand opening buzz, and strategic post-launch follow-up.' }
  ]
};

const PROOF_ITEMS = {
  ar: [
    { av:'أ', avColor:'#FF0044', text:'"قبل راثيب كنا بنصرف على إعلانات ومش شايفين نتيجة واضحة. بعد 3 أشهر صبح عندنا dashboard واضح وبنعرف كل جنيه رايح فين وراجع بكام."', name:'أحمد م.', role:'صاحب سلسلة مطاعم — القاهرة', m1:'3.2x', l1:'ROAS في 90 يوم', m2:'+68%', l2:'نمو المبيعات' },
    { av:'د', avColor:'#C9A227', text:'"الفرق مش بس في الأرقام — الفرق إن راثيب بيفكر في بزنسي زي ما أنا بفكر فيه. بيسألوا أسئلة مش حد سألهالي من قبل وبتوصل لـ insights حقيقية."', name:'دينا ك.', role:'مؤسِّسة براند فاشون — مصر', m1:'+145%', l1:'مبيعات أونلاين', m2:'2.1x', l2:'معدل التفاعل' },
    { av:'خ', avColor:'#CC0033', text:'"فتحنا فرع جديد واتعاملنا مع راثيب من اليوم الأول. كان عندنا خطة إطلاق كاملة وبعد شهر ونص وصلنا لـ Break-Even قبل المتوقع بكتير."', name:'خالد ع.', role:'مالك سلسلة كافيهات — الجيزة', m1:'45 يوم', l1:'للوصول لـ Break-Even', m2:'92%', l2:'نسبة الرضا' }
  ],
  en: [
    { av:'A', avColor:'#FF0044', text:'"Before Rathib, we spent blindly on ads with no clear return. 3 months in, we had a clear dashboard tracking every pound to its exact revenue return."', name:'Ahmed M.', role:'Restaurant Chain Owner — Cairo', m1:'3.2x', l1:'ROAS in 90 Days', m2:'+68%', l2:'Sales Growth' },
    { av:'D', avColor:'#C9A227', text:'"The difference is not just the numbers. Rathib thinks about my business like I do. They ask questions nobody asked before and surface real, actionable insights."', name:'Dina K.', role:'Fashion Brand Founder — Egypt', m1:'+145%', l1:'Online Sales', m2:'2.1x', l2:'Engagement Rate' },
    { av:'K', avColor:'#CC0033', text:'"We opened a new branch with Rathib from day one. We had a complete launch plan and hit break-even 45 days in — well ahead of projections."', name:'Khaled A.', role:'Cafe Chain Owner — Giza', m1:'45 Days', l1:'To Break-Even', m2:'92%', l2:'Satisfaction Rate' }
  ]
};

const FAQ_ITEMS = {
  ar: [
    { q:'عندنا وكالة تانية شغالة معانا دلوقتي', a:'رائع — والسؤال الأهم: هل تعرف بالضبط كم جنيه أنتجته الوكالة في إيراد فعلي الشهر اللي فات؟ لو الإجابة "مش متأكد تماماً" — فهذه بالضبط المشكلة. راثيب لا تأتي لتحل محل وكالتك، بل لتحل محل الغموض. نتحدث معك ونرى أين الفجوة الحقيقية.' },
    { q:'سعركم غالي مقارنة بالسوق', a:'لو نظرت لراثيب كمصاريف — نعم، ربما غالي. لكن لو نظرت إليه كاستثمار ذو عائد قابل للقياس — المعادلة تتغير تماماً. عميل يدفع 80,000 جنيه شهرياً ويحقق زيادة 400,000 في إيراده — هذا ليس تكلفة، هذا رافعة.' },
    { q:'جربنا وكالات قبل كده وما نجحت', a:'هذا يقودنا للسؤال الأهم: هل كانت الوكالات السابقة مسؤولة عن نتائج محددة بأرقام وتواريخ؟ راثيب تختلف في نقطة واحدة جوهرية: نحن نضع ضماناً على النتائج الأولية في 90 يوم. فشلنا في تحقيقها يعني نكمل بدون رسوم إضافية.' },
    { q:'محتاجين سوشيال ميديا وإعلانات بس', a:'هذا ما يقوله الجميع في البداية. لكن السوشيال ميديا وحدها بدون استراتيجية، landing page، وtracking صحيح — هي مصاريف لا استثمار. راثيب يبدأ من حيث تبدأ المشكلة الحقيقية ويبني كل ما يلزم لتحويل الإعلان لمبيعة.' },
    { q:'لمن راثيب مناسبة؟', a:'راثيب مبنية للبزنسات التي تحقق إيراداً شهرياً يبدأ من 700,000 جنيه وتسعى لنمو منهجي. المطاعم والكافيهات وبراندات الفاشون والبزنسات متعددة الفروع والمدراء التنفيذيين الذين يريدون Authority positioning.' }
  ],
  en: [
    { q:'We are already working with another agency', a:"Great! But here's the real question: do you know exactly how much net revenue they produced for you last month? If the answer is 'not entirely sure', that's the gap. Rathib doesn't replace your agency; we replace the mystery." },
    { q:'Your prices are higher than the market', a:"If you look at Rathib as an expense, yes. But if you view it as a measurable investment, the equation changes entirely. A client paying 80k EGP monthly to net a 400k revenue increase is not paying a cost — they're using leverage." },
    { q:'We tried marketing agencies before and it failed', a:"This leads us to the critical question: were previous agencies contractually responsible for specific numbers? Rathib is different: we back initial results in 90 days. If we fail, we continue for free. This is unlike any setup you've tried." },
    { q:'We only need social media and ads', a:"That's what everyone says at first. But social media without strategy, landing pages, funnels, and proper tracking is an expense, not an investment. Rathib fixes the foundation to ensure every ad converts." },
    { q:'Who is Rathib suitable for?', a:"Rathib is built for businesses generating at least 700,000 EGP monthly seeking structured growth. F&B, Cafes, Fashion Brands, multi-branch retailers, and CEOs seeking Authority positioning." }
  ]
};

const QUAL_IDEAL = {
  ar: ['إيراد شهري يبدأ من 700,000 جنيه','صاحب البزنس نفسه أو صانع القرار هو من يتواصل معنا','لديه منتج أو خدمة حقيقية جاهزة للسوق','يريد شريكاً للنمو لا مورداً للخدمة','مستعد للاستثمار في منهجية مثبتة','يفهم أن النتائج الحقيقية تحتاج وقتاً ومنهجية'],
  en: ['Monthly revenue starting from 700,000 EGP','Business owner or decision-maker is who engages with us','Has a validated product/service ready for scale','Wants a dedicated growth partner, not just a vendor','Ready to invest in a proven framework','Understands that real scaling takes structured time']
};

const QUAL_AVOID = {
  ar: ['بزنسات في مرحلة الفكرة بدون إيراد فعلي','من يبحث عن أرخص سعر في السوق','من يريد التحكم في كل خطوة تنفيذية'],
  en: ['Startups with zero active revenue','Clients hunting for the cheapest vendor','Managers wanting to micro-manage every step']
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   AMBIENT OCEAN WAVE ANIMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function initAmbient() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  /*
   * Dense vertical ocean waves — many thin lines, very low opacity
   * gap    : spacing between lines (fraction of width) — small = more lines
   * amp    : max horizontal sway (fraction of width)
   * cycles : sine cycles visible top→bottom
   * flow   : downward streaming speed
   * drift  : horizontal drift speed
   * lw     : stroke width (thin = 0.6–1px)
   * a      : base alpha (very low)
   */
  /* Fewer layers + larger gaps on mobile for GPU headroom */
  const mobile = window.innerWidth < 768;
  const layers = mobile ? [
    { rgb:'220,10,50',  a:0.11, amp:0.042, cycles:2.6, flow:0.22, drift:0.0030, gap:0.065, lw:1.2, blur:3, phase:0           },
    { rgb:'200,10,44',  a:0.07, amp:0.028, cycles:3.8, flow:0.14, drift:0.0018, gap:0.090, lw:0.9, blur:2, phase:Math.PI*1.5 },
  ] : [
    { rgb:'220,10,50',  a:0.13, amp:0.040, cycles:2.6, flow:0.24, drift:0.0035, gap:0.040, lw:1.4, blur:5, phase:0            },
    { rgb:'180,5,32',   a:0.09, amp:0.032, cycles:3.4, flow:0.18, drift:0.0028, gap:0.050, lw:1.2, blur:4, phase:Math.PI*0.55  },
    { rgb:'200,155,0',  a:0.07, amp:0.026, cycles:2.0, flow:0.30, drift:0.0030, gap:0.060, lw:1.0, blur:3, phase:Math.PI*1.25  },
    { rgb:'200,10,44',  a:0.055,amp:0.022, cycles:4.0, flow:0.14, drift:0.0020, gap:0.072, lw:0.90,blur:2, phase:Math.PI*1.8   },
  ];

  /* Golden-ratio seed for natural per-line variation */
  const PHI = 1.6180339887;

  let t = 0;

  function drawLayer(l) {
    const W = canvas.width, H = canvas.height;
    const count = Math.ceil(1 / l.gap) + 3;

    ctx.lineCap  = 'round';
    ctx.lineJoin = 'round';

    for (let i = 0; i < count; i++) {
      const rawX  = (i * l.gap + (t * l.drift) % l.gap) % 1.0;
      const xBase = rawX * W;

      /* soft fade at left & right screen edges */
      const margin   = W * 0.05;
      const edgeFade = Math.min(xBase / margin, 1) * Math.min((W - xBase) / margin, 1);
      if (edgeFade <= 0) continue;

      /* natural variation per line — no two waves identical */
      const vary     = 0.65 + Math.abs(Math.sin(i * PHI)) * 0.55;
      const localAmp = l.amp * vary;
      const localA   = l.a * edgeFade * (0.72 + Math.abs(Math.sin(i * 2.399)) * 0.28);

      ctx.beginPath();
      for (let py = 0; py <= H; py += 3) {
        const yr  = py / H;
        const phi = yr * Math.PI * 2 * l.cycles
                  - t * l.flow
                  + l.phase
                  + i * (PHI * 0.8);
        const x   = xBase + Math.sin(phi) * localAmp * W;
        py === 0 ? ctx.moveTo(x, py) : ctx.lineTo(x, py);
      }

      const alpha = +localA.toFixed(4);
      ctx.strokeStyle = `rgba(${l.rgb},${alpha})`;
      ctx.lineWidth   = l.lw;
      ctx.shadowColor = `rgba(${l.rgb},${+(alpha * 0.5).toFixed(4)})`;
      ctx.shadowBlur  = l.blur;
      ctx.stroke();
    }

    ctx.shadowBlur = 0;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    layers.forEach(drawLayer);
    t += 0.016;
    requestAnimationFrame(draw);
  }

  draw();
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   LANGUAGE & THEME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
let lang = localStorage.getItem('rathib_lang') || 'ar';
let theme = localStorage.getItem('rathib_theme') || 'dark';

function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('en', l === 'en');
  document.getElementById('lang-btn').textContent = l === 'ar' ? 'EN' : 'AR';
  const drawerLang = document.getElementById('drawer-lang-btn');
  if (drawerLang) drawerLang.textContent = l === 'ar' ? 'EN' : 'AR';
  const t = I[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.innerHTML = t[k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.getAttribute('data-i18n-ph');
    if (t[k] !== undefined) el.placeholder = t[k];
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const k = el.getAttribute('data-i18n-title');
    if (t[k] !== undefined) el.title = t[k];
  });
  renderDynamic(l);
  const authN1 = document.getElementById('auth-n-1');
  if (authN1) authN1.innerHTML = l === 'ar' ? '90<em> يوم</em>' : '90<em> Days</em>';
  localStorage.setItem('rathib_lang', l);
  if (typeof initScrollAnimations === 'function') initScrollAnimations();
}

function toggleLang() { applyLang(lang === 'ar' ? 'en' : 'ar'); }

/* ━━━ MOBILE DRAWER ━━━ */
function toggleDrawer() {
  const drawer = document.getElementById('mobile-drawer');
  const burger = document.getElementById('burger-btn');
  const isOpen = !drawer.classList.contains('open');
  drawer.classList.toggle('open', isOpen);
  drawer.setAttribute('aria-hidden', String(!isOpen));
  burger.classList.toggle('active', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}
function closeDrawer() {
  const drawer = document.getElementById('mobile-drawer');
  const burger = document.getElementById('burger-btn');
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  burger.classList.remove('active');
  document.body.style.overflow = '';
}
/* Close drawer on Escape key */
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

function applyTheme(t) {
  theme = t;
  document.body.classList.toggle('light', t === 'light');
  document.getElementById('theme-icon-dark').style.display = t === 'light' ? 'none' : '';
  document.getElementById('theme-icon-light').style.display = t === 'light' ? '' : 'none';
  localStorage.setItem('rathib_theme', t);
}

function toggleTheme() { applyTheme(theme === 'dark' ? 'light' : 'dark'); }

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   RENDER DYNAMIC SECTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
/* ── Ticker: JS-driven animation (immune to RTL layout quirks) ── */
let _tickerRaf = null;
let _tickerPaused = false;
let _tickerX = 0;

function buildTicker(l) {
  const track = document.getElementById('ticker-track');
  if (!track) return;

  /* Stop any running animation */
  if (_tickerRaf) { cancelAnimationFrame(_tickerRaf); _tickerRaf = null; }
  _tickerX = 0;

  const itemHTML = TICKER_DATA[l].map(t =>
    `<div class="ticker-item">${t}</div><span class="ticker-sep"></span>`
  ).join('');

  /* Build one group until it's wider than 1.5× viewport */
  let groupHTML = itemHTML;
  track.innerHTML = `<div class="ticker-group">${groupHTML}</div>`;
  const g = track.firstElementChild;
  let guard = 0;
  while (g.offsetWidth < window.innerWidth * 1.5 && guard < 32) {
    groupHTML += itemHTML;
    g.innerHTML = groupHTML;
    guard++;
  }

  const groupW = g.offsetWidth; /* exact px width of one group */

  /* Two identical groups — JS moves by px so direction never matters */
  track.innerHTML =
    `<div class="ticker-group">${groupHTML}</div>` +
    `<div class="ticker-group" aria-hidden="true">${groupHTML}</div>`;
  track.style.transform = 'translateX(0px)';

  const SPEED = 72; /* px / second */
  let lastT = null;

  function tick(now) {
    if (!_tickerPaused && lastT !== null) {
      _tickerX -= SPEED * Math.min(now - lastT, 50) / 1000;
      if (_tickerX <= -groupW) _tickerX += groupW; /* seamless loop */
      track.style.transform = `translateX(${Math.round(_tickerX)}px)`;
    }
    lastT = now;
    _tickerRaf = requestAnimationFrame(tick);
  }
  _tickerRaf = requestAnimationFrame(tick);
}

let __tickerRT;
window.addEventListener('resize', () => {
  clearTimeout(__tickerRT);
  __tickerRT = setTimeout(() => buildTicker(lang), 250);
}, { passive: true });

function renderDynamic(l) {
  // Ticker
  buildTicker(l);

  // Problem list
  const pList = document.getElementById('problem-list');
  if (pList) {
    pList.innerHTML = PROBLEM_ITEMS[l].map(item => `
      <li class="problem-item sc-item">
        <div class="problem-icon">${SVG[item.icon]}</div>
        <div class="problem-text">
          <strong>${item.title}</strong>
          <span>${item.desc}</span>
        </div>
      </li>`).join('');
    pList.classList.add('stagger-children');
  }

  // Comparison
  const compStd = document.getElementById('comp-standard');
  const compRath = document.getElementById('comp-rathib');
  if (compStd && compRath) {
    const d = COMP_DATA[l];
    compStd.innerHTML = `<div class="comp-tag">${d.trad.tag}</div>` +
      d.trad.rows.map(r => `<div class="comp-row sc-item" data-anim="right"><span class="comp-bullet bullet-x">✕</span>${r}</div>`).join('');
    compRath.innerHTML = `<div class="comp-tag">${d.rath.tag}</div>` +
      d.rath.rows.map(r => `<div class="comp-row sc-item" data-anim="left"><span class="comp-bullet bullet-ok">✓</span><strong>${r}</strong></div>`).join('');
    compStd.classList.add('stagger-children');
    compRath.classList.add('stagger-children');
  }

  // Framework steps
  const fwSteps = document.getElementById('fw-steps');
  if (fwSteps) {
    fwSteps.innerHTML = FW_STEPS[l].map((s, i) => `
      <div class="fw-step sc-item">
        <div class="fw-step-num">${s.n}</div>
        <div class="fw-step-icon">${SVG[s.icon]}</div>
        <div class="fw-step-title">${s.title}</div>
        <div class="fw-step-gloss">${s.gloss}</div>
        <div class="fw-step-desc">${s.desc}</div>
      </div>`).join('');
    fwSteps.classList.add('stagger-children');
  }

  // Industries
  const indGrid = document.getElementById('ind-grid');
  if (indGrid) {
    const selTxt = (I[l] && I[l].ind_select) || 'اختر هذا القطاع ←';
    indGrid.innerHTML = IND_ITEMS[l].map((item, i) => `
      <div class="industry-card sc-item is-selectable" data-anim="scale" role="button" tabindex="0" data-ind-key="${item.key}" data-ind-name="${item.name}">
        <div class="industry-icon">${SVG[item.icon]}</div>
        <div class="industry-name">${item.name}</div>
        <div class="industry-desc">${item.desc}</div>
        <div class="industry-outcome">${SVG.arrowUp}<span>${item.out}</span></div>
        <div class="industry-select">${selTxt}</div>
      </div>`).join('');
    indGrid.classList.add('stagger-children');
  }

  // Outcomes
  const outGrid = document.getElementById('outcomes-grid');
  if (outGrid) {
    outGrid.innerHTML = OUT_ITEMS[l].map((item, i) => `
      <div class="outcome-card sc-item">
        <div class="outcome-icon">${SVG[item.icon]}</div>
        <div>
          <div class="outcome-before">${item.before}</div>
          <div class="outcome-after">${item.after}</div>
          <div class="outcome-desc">${item.desc}</div>
        </div>
      </div>`).join('');
    outGrid.classList.add('stagger-children');
  }

  // Proof
  const proofGrid = document.getElementById('proof-grid');
  if (proofGrid) {
    const starsSVG = Array(5).fill(`<span style="width:14px;height:14px;color:var(--gold);display:inline-flex;">${SVG.starFilled}</span>`).join('');
    proofGrid.innerHTML = PROOF_ITEMS[l].map((item, i) => `
      <div class="proof-card sc-item">
        <div class="proof-stars" style="display:flex;gap:3px;margin-bottom:var(--sp-4);">${starsSVG}</div>
        <p class="proof-text">${item.text}</p>
        <div class="proof-divider"></div>
        <div class="proof-meta">
          <div class="proof-avatar" style="background:${item.avColor}1a;border-color:${item.avColor}40;color:${item.avColor};font-family:var(--f-display);font-size:18px;font-weight:800;">${item.av}</div>
          <div><div class="proof-name">${item.name}</div><div class="proof-role">${item.role}</div></div>
        </div>
        <div class="proof-pill">
          <div><div class="proof-metric">${item.m1}</div><div class="proof-metric-label">${item.l1}</div></div>
          <div style="text-align:${l==='ar'?'left':'right'}"><div class="proof-metric">${item.m2}</div><div class="proof-metric-label">${item.l2}</div></div>
        </div>
      </div>`).join('');
    proofGrid.classList.add('stagger-children');
  }

  // FAQ
  const faqList = document.getElementById('faq-list');
  if (faqList) {
    faqList.innerHTML = FAQ_ITEMS[l].map(item => `
      <div class="faq-item sc-item">
        <button class="faq-question" onclick="toggleFaq(this)">
          <span>${item.q}</span>
          <span class="faq-toggle">${SVG.plus}</span>
        </button>
        <div class="faq-answer"><div class="faq-answer-inner">${item.a}</div></div>
      </div>`).join('');
    faqList.classList.add('stagger-children');
  }

  // Qualification lists
  const qIdeal = document.getElementById('qual-ideal');
  const qAvoid = document.getElementById('qual-avoid');
  if (qIdeal) {
    qIdeal.innerHTML = QUAL_IDEAL[l].map(item => `<li class="qual-item sc-item" data-anim="left"><span class="qual-check check-good">✓</span>${item}</li>`).join('');
    qIdeal.classList.add('stagger-children');
  }
  if (qAvoid) {
    qAvoid.innerHTML = QUAL_AVOID[l].map(item => `<li class="qual-item sc-item" data-anim="right"><span class="qual-check check-bad">✕</span>${item}</li>`).join('');
    qAvoid.classList.add('stagger-children');
  }

  // Update step counter language
  updateStepUI(currentStep);

  // Register all stagger containers (called once after all content is built)
  reObserve();
  reStagger();
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SCROLL ANIMATIONS — GSAP ScrollTrigger
   Works on ALL devices: desktop, tablet, mobile (iOS + Android)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function initScrollAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  /* Kill existing triggers before re-registering */
  ScrollTrigger.getAll().forEach(t => t.kill());

  /* Mobile: iOS Safari fires scroll events differently — normalize */
  ScrollTrigger.config({ ignoreMobileResize: true });

  const ease   = 'power3.out';
  const isMob  = window.innerWidth < 768;
  /* On mobile viewport is smaller so trigger a bit earlier */
  const rStart = isMob ? 'top 96%' : 'top 92%';
  const sStart = isMob ? 'top 94%' : 'top 88%';

  /* ── 1. Single-block reveals (.reveal) ── */
  document.querySelectorAll('.reveal').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.70, ease,
        scrollTrigger: {
          trigger: el, start: rStart,
          once: true, invalidateOnRefresh: true
        }
      }
    );
  });

  /* ── 2. Stagger groups (.stagger-children → .sc-item) ── */
  document.querySelectorAll('.stagger-children').forEach(container => {
    const items = [...container.querySelectorAll('.sc-item')];
    if (!items.length) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container, start: sStart,
        once: true, invalidateOnRefresh: true
      }
    });

    items.forEach((item, i) => {
      const anim = item.dataset.anim || 'up';
      const from =
        anim === 'scale' ? { opacity: 0, scale: 0.88, y: 16 } :
        anim === 'left'  ? { opacity: 0, x: -40 }             :
        anim === 'right' ? { opacity: 0, x:  40 }             :
                           { opacity: 0, y:  38 };
      tl.fromTo(item, from,
        { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.58, ease },
        i * 0.08
      );
    });
  });

  /* First refresh — then a delayed second refresh for iOS font/image layout */
  ScrollTrigger.refresh();
  setTimeout(() => ScrollTrigger.refresh(), 400);
}

/* No-op stubs — renderDynamic still calls these, now harmless */
function reObserve() {}
function reStagger() {}

(() => {
  const bar = document.getElementById('progress-bar');
  const nav = document.getElementById('main-nav');
  let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  let ticking = false;
  const recalc = () => { maxScroll = document.documentElement.scrollHeight - window.innerHeight; };
  const update = () => {
    const scrolled = window.scrollY;
    if (bar) bar.style.width = (maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0) + '%';
    if (nav) nav.classList.toggle('pinned', scrolled > 50);
    ticking = false;
  };
  // rAF-throttle: at most one DOM write per frame, no layout reads on scroll
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', recalc, { passive: true });
  window.addEventListener('load', recalc);
})();

// Pause hero orbit/glow animations (incl. heavy blurs) once the hero scrolls away
(() => {
  const hero = document.getElementById('home');
  if (!hero || !('IntersectionObserver' in window)) return;
  new IntersectionObserver(
    ([e]) => hero.classList.toggle('anim-paused', !e.isIntersecting),
    { threshold: 0 }
  ).observe(hero);
})();

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FORM INTERACTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
// Radio & checkbox delegated events
document.addEventListener('click', e => {
  const radio = e.target.closest('.radio-label');
  if (radio) {
    const input = radio.querySelector('input[type="radio"]');
    if (input) {
      document.querySelectorAll(`input[name="${input.name}"]`).forEach(r => r.closest('.radio-label').classList.remove('selected'));
      radio.classList.add('selected');
      input.checked = true;
      if (input.name === 'cac_know' || input.name === 'profit_know') updateSmartMsg();
    }
  }
  const check = e.target.closest('.check-label');
  if (check && !e.target.matches('input')) {
    check.classList.toggle('selected');
    const cb = check.querySelector('input');
    if (cb) cb.checked = check.classList.contains('selected');
  }
});

// Industry showcase → pre-select the sector in the form, capture interest, scroll
function selectIndustry(key, name) {
  const hidden = document.getElementById('f-interest');
  if (hidden) hidden.value = name || '';
  if (key) {
    const radio = document.querySelector(`input[name="industry"][value="${key}"]`);
    if (radio) {
      document.querySelectorAll('input[name="industry"]').forEach(r => r.closest('.radio-label').classList.remove('selected'));
      radio.checked = true;
      radio.closest('.radio-label').classList.add('selected');
      if (typeof clearGroupError === 'function') clearGroupError('rad-industry');
    }
  }
  gtagEvent('industry_select', { industry: key || '—', interest: name || '—' });
  const form = document.getElementById('form-section');
  if (form) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('click', e => {
  const card = e.target.closest('.industry-card.is-selectable');
  if (card) selectIndustry(card.dataset.indKey, card.dataset.indName);
});
document.addEventListener('keydown', e => {
  const card = e.target.closest && e.target.closest('.industry-card.is-selectable');
  if (card && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault();
    selectIndustry(card.dataset.indKey, card.dataset.indName);
  }
});

// Media production carousel — continuous marquee (seamless infinite loop)
function initMediaCarousel() {
  const track = document.getElementById('mp-track');
  if (!track) return;
  const originals = [...track.children];
  if (!originals.length) return;
  // Duplicate the set once so translateX(-50%) loops seamlessly
  originals.forEach(node => {
    const clone = node.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.querySelectorAll('img').forEach(img => img.setAttribute('aria-hidden', 'true'));
    track.appendChild(clone);
  });

  // Touch / drag support for mobile
  const wrap = track.parentElement;
  let tsX = 0, txStart = 0;

  wrap.addEventListener('touchstart', e => {
    tsX = e.touches[0].clientX;
    const mat = new DOMMatrix(getComputedStyle(track).transform);
    txStart = mat.m41;
    track.style.animation = 'none';
    track.style.transform = `translateX(${txStart}px)`;
  }, { passive: true });

  wrap.addEventListener('touchmove', e => {
    const dx = e.touches[0].clientX - tsX;
    const half = track.scrollWidth / 2;
    let tx = txStart + dx;
    if (tx > 0) tx -= half;
    if (tx < -half) tx += half;
    track.style.transform = `translateX(${tx}px)`;
  }, { passive: true });

  wrap.addEventListener('touchend', () => {
    const mat = new DOMMatrix(getComputedStyle(track).transform);
    const tx = mat.m41;
    const half = track.scrollWidth / 2;
    const progress = Math.abs(tx) / half;
    const delay = -(progress * 60);
    track.style.transform = '';
    track.style.animation = `mpScroll 60s linear ${delay}s infinite`;
  }, { passive: true });
}

// Reveal the smart insight when CAC or net-profit is unknown/approximate
function updateSmartMsg() {
  const msg = document.getElementById('s4-smart-msg');
  if (!msg) return;
  const cac    = document.querySelector('input[name="cac_know"]:checked')?.value;
  const profit = document.querySelector('input[name="profit_know"]:checked')?.value;
  const weak = v => v === 'approx' || v === 'no';
  msg.style.display = (weak(cac) || weak(profit)) ? 'flex' : 'none';
}

function buildStepDots() {
  const dots = document.getElementById('step-dots');
  dots.innerHTML = Array.from({length: TOTAL_STEPS}, (_, i) =>
    `<div class="step-dot${i === 0 ? ' active' : ''}" data-dot="${i+1}"></div>`
  ).join('');
}

function updateStepUI(step) {
  document.querySelectorAll('.step-dot').forEach((d, i) => {
    d.classList.remove('active', 'done');
    if (i + 1 === step) d.classList.add('active');
    else if (i + 1 < step) d.classList.add('done');
  });
  document.getElementById('step-counter').textContent = `${step} / ${TOTAL_STEPS}`;
  document.getElementById('progress-fill').style.width = `${(step / TOTAL_STEPS) * 100}%`;
}

function showStep(step) {
  document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
  document.getElementById(`step-${step}`).classList.add('active');
  updateStepUI(step);
  document.querySelector('.form-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── Validation helpers ── */
function showFieldError(fieldId, msg) {
  const el = document.getElementById(fieldId);
  if (!el) return;
  el.style.borderColor = 'var(--red)';
  let err = el.parentElement.querySelector('.field-error');
  if (!err) { err = document.createElement('span'); err.className = 'field-error'; el.parentElement.appendChild(err); }
  err.textContent = msg;
}
function clearFieldError(fieldId) {
  const el = document.getElementById(fieldId);
  if (!el) return;
  el.style.borderColor = '';
  el.parentElement.querySelector('.field-error')?.remove();
}
function showGroupError(groupId, msg) {
  const el = document.getElementById(groupId);
  if (!el) return;
  el.style.outline = '1px solid var(--red)';
  let err = el.parentElement.querySelector('.field-error');
  if (!err) { err = document.createElement('span'); err.className = 'field-error'; el.parentElement.appendChild(err); }
  err.textContent = msg;
}
function clearGroupError(groupId) {
  const el = document.getElementById(groupId);
  if (!el) return;
  el.style.outline = '';
  el.parentElement.querySelector('.field-error')?.remove();
}

function validateStep(step) {
  const ar = lang === 'ar';
  let ok = true;

  const reqText = (id, msgAr, msgEn) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!el.value.trim()) { showFieldError(id, ar ? msgAr : msgEn); ok = false; }
    else clearFieldError(id);
  };

  const reqPhone = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!el.value.trim()) {
      showFieldError(id, ar ? 'رقم الهاتف مطلوب' : 'Phone is required');
      ok = false;
    } else clearFieldError(id);
  };

  const optEmail = (id) => {
    const el = document.getElementById(id);
    if (!el || !el.value.trim()) { clearFieldError(id); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(el.value.trim())) {
      showFieldError(id, ar ? 'بريد إلكتروني غير صحيح' : 'Invalid email address');
      ok = false;
    } else clearFieldError(id);
  };

  const reqRadio = (name, groupId, msgAr, msgEn) => {
    if (!document.querySelector(`input[name="${name}"]:checked`)) {
      showGroupError(groupId, ar ? msgAr : msgEn); ok = false;
    } else clearGroupError(groupId);
  };

  if (step === 1) {
    reqText('f-name',  'الاسم مطلوب',           'Name is required');
    reqPhone('f-phone');
    optEmail('f-email');
    reqText('f-brand', 'اسم البراند مطلوب',      'Brand name is required');
  }
  if (step === 2) reqRadio('industry', 'rad-industry', 'اختر قطاع النشاط',   'Please select a sector');
  if (step === 3) reqRadio('revenue',  'rad-revenue',  'اختر نطاق الإيراد',  'Please select revenue range');

  return ok;
}

function nextStep(from) {
  if (!validateStep(from)) return;
  gtagEvent('form_step_complete', { form_name: 'growth_assessment', step_number: from });
  if (from < TOTAL_STEPS) { currentStep = from + 1; showStep(currentStep); }
}

function prevStep(from) {
  if (from > 1) { currentStep = from - 1; showStep(currentStep); }
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function handleSubmit() {
  const get = id => (document.getElementById(id)?.value || '—');
  const radio = name => (document.querySelector(`input[name="${name}"]:checked`)?.value || '—');
  const checks = id => [...document.querySelectorAll(`#${id} input:checked`)].map(e => e.value).join(', ') || '—';

  const payload = {
    name: get('f-name'), phone: get('f-phone'), email: get('f-email'), brand: get('f-brand'),
    sector: radio('industry'), interest: get('f-interest'), years: get('f-years'), branches: get('f-branches'),
    ig: get('f-ig'), website: get('f-website'),
    revenue: radio('revenue'), orders: get('f-orders'), aov: get('f-aov'), goal: get('f-goal'),
    mkt_who: radio('mkt_who'), spend: radio('mkt_spend'), cac: radio('cac_know'), profit: radio('profit_know'), challenge: get('f-challenge'),
    sales: radio('has_sales'), leads: get('f-leads'), conv: get('f-conv'), crm: radio('crm'),
    has_site: radio('has_site'), tracking: checks('chk-tracking'),
    challenges: checks('chk-challenges'),
    target: get('f-target'), expand: radio('expand'), why: get('f-why'),
    dm: radio('dm'), timing: radio('timing'), final: get('f-final'),
    lang: lang.toUpperCase()
  };

  const isAr = lang === 'ar';

  gtagEvent('generate_lead', {
    form_name: 'growth_assessment',
    brand: payload.brand,
    revenue_range: payload.revenue,
    start_timing: payload.timing,
    ad_spend: payload.spend,
    language: payload.lang
  });

  // إظهار الـ loader
  const overlay   = document.getElementById('submit-overlay');
  const overlayTx = document.getElementById('overlay-text');
  const overlaySb = document.getElementById('overlay-sub');
  const submitBtn = document.getElementById('btn-submit');
  overlayTx.textContent = isAr ? 'جاري حفظ البيانات...' : 'Saving your data...';
  overlaySb.textContent = isAr ? 'لحظة من فضلك'         : 'Please wait';
  overlay.classList.add('active');
  if (submitBtn) submitBtn.disabled = true;

  const done = (success) => {
    overlay.classList.remove('active');
    if (submitBtn) submitBtn.disabled = false;
    document.querySelector('.form-container').innerHTML = `
      <div style="padding:var(--sp-10) var(--sp-7);text-align:center;background:var(--bg-2);border-radius:var(--r-lg);">
        <div style="width:72px;height:72px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto var(--sp-4);background:${success?'rgba(34,197,94,0.12)':'rgba(251,191,36,0.12)'};border:1.5px solid ${success?'rgba(34,197,94,0.4)':'rgba(251,191,36,0.4)'};">
          <span style="width:36px;height:36px;color:${success?'#22c55e':'#fbbf24'};display:flex;">${success ? SVG.checkCircle : SVG.alertTriangle}</span>
        </div>
        <h3 style="font-family:var(--f-display);font-size:24px;font-weight:800;color:var(--text-1);margin-bottom:var(--sp-3);">
          ${success
            ? (isAr ? 'شكراً! سيتواصل معك فريق راثيب' : 'Thank you! Rathib team will reach out.')
            : (isAr ? 'حدث خطأ أثناء الإرسال'         : 'Something went wrong')}
        </h3>
        <p style="font-size:15px;color:var(--text-2);line-height:1.8;max-width:420px;margin:0 auto var(--sp-6);">
          ${success
            ? (isAr ? 'استلمنا معلوماتك وسيتواصل معك أحد أعضاء الفريق خلال 24 ساعة لتحديد موعد مكالمة التقييم.' : 'We received your info and a team member will contact you within 24 hours.')
            : (isAr ? 'يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.' : 'Please try again or contact us directly.')}
        </p>
        <a href="/" class="btn btn-primary">${isAr ? 'العودة للرئيسية' : 'Back to Home'}</a>
      </div>`;
  };

  fetch(SHEETS_URL, {
    method: 'POST', mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...payload, timestamp: new Date().toISOString() })
  })
    .then(() => done(true))
    .catch(() => done(false));
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   INIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(theme);
  applyLang(lang);
  buildStepDots();
  initScrollAnimations();   /* GSAP — fires after renderDynamic has built all content */
  initMediaCarousel();

  // مسح خطأ الحقل فور بدء الكتابة
  document.getElementById('form-section').addEventListener('input', e => {
    const id = e.target.id;
    if (id) clearFieldError(id);
  });

  // تتبع بدء تعبئة الفورم عند أول تفاعل
  const formSection = document.getElementById('form-section');
  if (formSection) {
    formSection.addEventListener('focusin', () => {
      if (!formStarted) {
        formStarted = true;
        gtagEvent('form_start', { form_name: 'growth_assessment' });
      }
    });
  }

  /* Ticker hover pause */
  const tickerEl = document.querySelector('.ticker');
  if (tickerEl) {
    tickerEl.addEventListener('mouseenter', () => { _tickerPaused = true; });
    tickerEl.addEventListener('mouseleave', () => { _tickerPaused = false; });
  }
});
