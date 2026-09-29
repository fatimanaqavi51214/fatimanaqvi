const fs = require('fs');
const translate = require('google-translate-api-x');

const newDocs = [
  {
    id: 'doc_301',
    imageUrl: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790690129/Molana-Muhammad-Husain-Akbar.jpg',
    category: 'letters',
    enDocName: 'Letter of Recommendation / To Whom It May Concern',
    enLines: [
      'Subject: To Whom It May Concern – Letter of Recommendation and Appreciation for Respected Syeda Nusrat Fatima Naqvi',
      'IDARA MINHAJ-UL-HUSSAIN PAKISTAN',
      'Founder & Chief Patron: Dr. Allama Muhammad Hussain Akbar',
      'Date: 10-09-2026 | Ref No: IMH/90/26',
      'To Whom It May Concern',
      'Respected Madam Nusrat Fatima Naqvi is a highly esteemed and trustworthy personality of Pakistan, whose entire life has been dedicated to social and business services. I have known her personally for four decades, and I have always found her dealings to be transparent and flawless. She has always respected others and earned immense respect in return. She personally manages various businesses in Syria, owning a magnificent personal hotel and several flats in the historic city of Damascus.',
      'Respected Madam Nusrat Fatima Naqvi also expanded her business network in Dubai, Sharjah, and Ajman. Currently, she resides in the UK and Spain, and by the grace of Allah, she is efficiently managing her global business and social activities from Europe.',
      'In the 1970s and 1980s, when Dubai was transforming into a modern global commercial hub, the hard work of diligent, honest, and selfless Pakistanis like her husband, Chaudhry Ghulam Sarwar, played a significant role. In collaboration with the ruling family of Dubai, they established a construction company and built numerous commercial buildings alongside several mosques. Through this, they invited countless Pakistanis to Dubai and provided them with employment opportunities.',
      'Alongside her vast business commitments, Madam Nusrat Naqvi has played a vital role in religious and social affairs. She is a compassionate soul, always ready to assist the needy in every possible way. Generosity and charitable acts are the most shining aspects of her life. Selflessly, transcending sects and nationalities, and purely for the sake of humanity, she has been extending her full support to hospitals, clinics, orphanages, and other welfare institutions. It is for this reason she was bestowed with the title of "Advocate of Humanity" (Vakeel-e-Insaniyat).',
      'It is the result of her excellent upbringing that her sons, Fawad Haider and Jawad Haider, and her daughter, Hajra Khatoon, are highly obedient and possess noble character. Since coming of age, they have stood firmly shoulder-to-shoulder with their mother, fully supporting her in all social and business endeavors.',
      'I pray for the health, safety, and long life of Respected Madam Nusrat Fatima Naqvi, so that this continued blessing of her humanitarian service remains ongoing.',
      'Dr. Allama Muhammad Hussain Akbar',
      'Principal, Jamia Minhaj-ul-Hussain',
      'Johar Town, Lahore'
    ],
    urDocName: 'موضوع: متعلقہ افراد کے نام — محترمہ نصرت فاطمہ نقوی صاحبہ کے لیے تعارفی و توصیفی خط',
    urLines: [
      'ادارہ منہاج الحسین پاکستان',
      'بانی و سرپرستِ اعلیٰ: ڈاکٹر علامہ محمد حسین اکبر',
      'تاریخ: 10-09-2026 | حوالہ نمبر: IMH/90/26',
      'متعلقہ افراد کے نام',
      'محترمہ نصرت فاطمہ نقوی پاکستان کی قابل قدر اور قابل اعتماد شخصیت ہیں جن کی ساری زندگی سماجی اور کاروباری خدمات میں گزری ہے۔ میں ذاتی طور پر چار دہائیوں سے انھیں جانتا ہوں میں نے ان میں کبھی کوئی غلط بات نہیں دیکھی، ان کے معاملات میں ہمیشہ شفافیت دیکھی ہے۔ انھوں نے ہمیشہ لوگوں کی عزت کی اور عزت پائی۔ شام میں مختلف کاروبار کو ذاتی طور پر ڈیل کر رہی ہیں۔ دمشق جیسے تاریخی شہر میں ان کا شاندار ذاتی ہوٹل اور کئی فلیٹس ہیں۔',
      'محترمہ نصرت فاطمہ نقوی صاحبہ نے دبئی، شارجہ اور عجمان میں بھی اپنا کاروبار بڑھایا۔ آج کل برطانیہ اور سپین میں مقیم ہیں اور ماشاءاللہ اس وقت یورپ سے اپنی عالمی کاروباری اور سماجی سرگرمیوں کو بخوبی چلا رہی ہیں۔',
      '1970ء اور 1980ء کی دہائی میں جب دبئی ایک جدید عالمی تجارتی مرکز میں تبدیل ہو رہا تھا، تو ان کے شوہر چوہدری غلام سرور جیسے محنتی، ایماندار اور بے لوث پاکستانیوں کی بھی محنت شامل تھی۔ انہوں نے دبئی کے حکمران خاندان کے ساتھ مل کر کنسٹرکشن کمپنی اور دنیاوی عمارتوں کے ساتھ ساتھ متعدد مساجد تعمیر کیں۔ جس کے لئے انھوں نے بے شمار پاکستانیوں کو دبئی بلوا کر ان کا روزگار لگوایا۔',
      'خانم نصرت نقوی صاحبہ نے اپنی وسیع کاروباری مصروفیات کے ساتھ ساتھ دینی وسماجی امور میں بھی اہم کردار ادا کیا ہے۔ محترمہ ایک دردمند ہستی ہیں جو ضرورت مندوں کی ہر ممکن مدد کے لیے ہمہ وقت تیار رہتی ہیں۔ سخاوت اور کارِ خیر ان کی زندگی کے سب سے روشن پہلو ہیں۔ محترمہ بے لوث بغیر فرقہ ملت و قومیت صرف انسانی خدمت کے تحت ہسپتال، کلینک، یتیم خانے، اور دیگر فلاحی و رفاہی اداروں کی بھی بھر پور مدد کرتی رہی ہیں۔ اسی لئے انھیں (وکیل انسانیت) کا خطاب دیا گیا۔',
      'یہ ان کی تربیت کا ہی نتیجہ ہے کہ ان کے بیٹے فواد حیدر، جواد حیدر اور ہاجرہ خاتون بھی بہت فرمانبردار اور نیک خصلتوں کے مالک ہیں۔ انھوں نے جب سے ہوش سنبھالا ہے اپنی والدہ کے ساتھ شانہ بشانہ ثابت قدم کھڑے ہیں اور سماجی اور کاروباری معاملات میں اپنی والدہ کا بھر پور ساتھ دے رہے ہیں۔',
      'میں محترمہ نصرت فاطمہ نقوی صاحبہ کی صحت، سلامتی اور درازی عمر کے لیے دعا گو ہوں تاکہ ان کی انسانی خدمت کا یہ فیض یونہی جاری رہے۔',
      'ڈاکٹر علامہ محمد حسین اکبر'
    ]
  },
  {
    id: 'doc_302',
    imageUrl: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790690129/shabbir-ahmed-shigri.png',
    category: 'letters',
    enDocName: 'Letter of Appreciation and Recognition for Respected Syeda Nusrat Fatima Naqvi by Haji Shabbir Ahmed Shigri',
    enLines: [
      'Date: August 10, 2026',
      'Advocate of Humanity – Letter of Recognition and Appreciation for the Services of Respected Syeda Nusrat Fatima Naqvi',
      'This letter of appreciation and profile is written in recognition of the services of an eminent, dignified, and compassionate personality whose life is a splendid blend of continuous struggle, magnificent achievements, and selfless service to humanity. Respected Syeda Nusrat Fatima Naqvi is an internationally renowned business personality, legal scholar, and a prominent philanthropist who is widely recognized by the title "Advocate of Humanity."',
      'International Business Achievements:',
      'Her business vision and acumen spans from the Middle East to Europe. In the 1970s, she successfully laid the foundation for diverse commercial and industrial ventures across the United Arab Emirates (Dubai, Sharjah, Ajman). Similarly, in Damascus, Syria, she expanded extensive businesses in real estate as well as import and export. Her commercial network in Syria continues to flourish with full vigor today, where vast prime land, numerous luxury flats, and a grand hotel in a historic city like Damascus bear clear witness to her excellent investment and commercial reach. Documents attested by the Damascus Chamber of Commerce further validate these extensive commercial activities. Today, she is based in the United Kingdom and Spain, where she skillfully oversees her global business network.',
      'Exemplary Humanitarian and Philanthropic Services:',
      'Despite attaining the heights of wealth and success, her heart has always beat for humanity and the devoted followers of the Ahl al-Bayt (A.S.). She donated prime land valued at 25 million Syrian Pounds to the Government of Syria for the establishment of a mosque, clinic, and center for the memorization of the Holy Quran. Furthermore, in 1983, near the holy shrine of Sayyida Zainab (S.A.) in Damascus, she endowed her personal land for the construction of a hospital and an orphanage. To propagate the teachings of the School of Ahl al-Bayt (A.S.), she gifted land worth millions for a magnificent library and Husseiniya. Her noble deeds also include providing medical equipment and financial assistance to charitable clinics for the treatment of deserving patients.',
      'Personal Observations and Impressions:',
      'As the writer of these lines, I have personally known her for many decades. During the performance of my diplomatic duties, I have always found her to be an exceptionally prudent, pious, sincere, and dignified lady. She enjoyed excellent, esteemed, and respectful relations with diplomats and international cultural representatives, who held her in the highest regard. Whenever she speaks on any program or forum, her viewpoint reflects the essence of vast global experience, which, combined with a deeply realistic approach, leaves a profound and lasting impression on her listeners. Her sincerity and genuine compassion deeply inspire everyone who meets her.',
      'Concluding Remarks:',
      'The entire life of Respected Nusrat Fatima Naqvi bears witness that whichever institution, society, or country she has been affiliated with, she has always sowed the seeds of development, progress, and welfare. The presence of a dignified and generous personality like hers is a source of pride and an absolute blessing for any organization. I extend my full, unconditional support to her noble character, high-mindedness, and magnificent services.',
      'With Peace and Regards,',
      'Haji Shabbir Ahmed Shigri'
    ],
    urDocName: 'موضوع: صدر پاک ایران فرینڈشپ ایسوسی ایشن، معروف سینئر صحافی و ماہرِ امورِ ثقافت حاجی شبیر احمد شگری کی جانب سے محترمہ نصرت فاطمہ نقوی کے لیے توصیفی خط',
    urLines: [
      'شبیر احمد شگری',
      'صدر پاک ایران فرینڈشپ ایسوسی ایشن | سی ای او، نور پروڈکشنز پاکستان | سینیئر صحافی، مصنف و ماہر امورِ ثقافت | بانی، پہلا بصری قرآن پراجیکٹ | خادمِ روضہ ہائے مبارک امام رضاؑ و حضرت عباسؑ',
      'تاریخ: 10 اگست 2026',
      'وکیلِ انسانیت، قابلِ صد احترام محترمہ نصرت فاطمہ نقوی صاحبہ کی خدمات کا اعترافی و توصیفی خط',
      'یہ توصیفی و تعارف نامہ ایک ایسی عظیم، باوقار اور دردمند شخصیت کی خدمات کے اعتراف میں تحریر کیا جا رہا ہے جن کی زندگی مسلسل جدوجہد، شاندار کامیابیوں اور بے لوث خدمتِ خلق کا ایک حسین امتزاج ہے۔ محترمہ نصرت فاطمہ نقوی صاحبہ ایک عالمی سطح کی نامور کاروباری شخصیت، قانون دان اور ایک عظیم مخیر خاتون ہیں، جنہیں "وکیلِ انسانیت" کے لقب سے جانا جاتا ہے۔',
      'بین الاقوامی کاروباری کامیابیاں:',
      'ان کی کاروباری بصیرت کا دائرہ مشرقِ وسطیٰ سے لے کر یورپ تک پھیلا ہوا ہے۔ انہوں نے 1970ء کی دہائی سے متحدہ عرب امارات (دبئی، شارجہ، عجمان) میں مختلف تجارتی اور صنعتی منصوبوں کی کامیابی سے بنیاد رکھی۔ اسی طرح، شام (دمشق) میں ریئل اسٹیٹ اور امپورٹ ایکسپورٹ کے وسیع کاروبار کو پروان چڑھایا۔ شام میں ان کا کاروبار اور کاروباری نیٹ ورک آج بھی پوری آب و تاب کے ساتھ موجود ہے، جہاں دمشق جیسے تاریخی شہر میں ان کی وسیع پرائم زمینیں، متعدد فلیٹس اور ایک شاندار ہوٹل ان کی بہترین سرمایہ کاری اور تجارتی وسعت کا منہ بولتا ثبوت ہیں۔ ان کی ان وسیع تجارتی سرگرمیوں کی تصدیق دمشق چیمبر آف کامرس کی دستاویزات بھی کرتی ہیں۔ آج کل وہ برطانیہ اور اسپین میں مقیم ہیں اور وہاں سے اپنے عالمی کاروباری نیٹ ورک کی بہترین انداز میں سرپرستی کر رہی ہیں۔',
      'بے مثال خدمتِ خلق اور فلاحی خدمات:',
      'دولت و ثروت کی بلندیوں پر پہنچنے کے باوجود، ان کا دل ہمیشہ انسانیت اور محبانِ اہلِ بیتؑ کی خدمت کے لیے دھڑکتا رہا ہے۔ انہوں ভাগে شام کی حکومت کو 2 کروڑ 50 لاکھ شامی لیرہ مالیت کی قیمتی اراضی مسجد، کلینک اور حفظِ قرآن کے مرکز کے قیام کے لیے عطیہ کی۔ اس کے علاوہ، 1983ء میں انہوں نے دمشق میں سیدہ زینبؑ کے روضہ مبارک کے قریب ہسپتال اور یتیم خانے کی تعمیر کے لیے اپنی زمین وقف کی۔ مکتبِ اہلِ بیتؑ کی ترویج کے لیے انہوں نے ایک عظیم الشان لائبریری اور حسینیہ کے لیے بھی لاکھوں مالیت کی اراضی ہدیہ کی۔ مستحقین کے لیے طبی آلات اور فلاحی کلینکس کی امداد بھی ان کے روشن کارناموں میں شامل ہے۔',
      'ذاتی مشاہدات اور تاثرات:',
      'راقم الحروف ذاتی طور پر انہیں کئی دہائیوں سے جانتا ہے۔ اپنے سفارتی فرائض کی انجام دہی کے دوران میں نے ہمیشہ انہیں ایک انتہائی مدبر، پرہیزگار، مخلص اور باوقار خاتون کے طور پر پایا۔ ان کے سفارت کاروں اور بین الاقوامی ثقافتی نمائندوں کے ساتھ انتہائی شاندار اور عزت پر مبنی مراسم رہے ہیں اور وہ حلقے ان کی بے حد تکریم کرتے ہیں۔ وہ جب بھی کسی پروگرام یا فورم پر گفتگو کرتی ہیں، تو ان کا نقطۂ نظر ان کے وسیع عالمی تجربات کا نچوڑ ہوتا ہے، جو نہایت حقیقت پسندانہ ہونے کے ساتھ ساتھ سننے والوں پر گہرا اور دیرپا اثر مرتب کرتا ہے۔ ان کی شخصیت میں موجود اخلاص اور دردمندی ہر ملنے والے کو متاثر کرتی ہے۔',
      'حرفِ آخر:',
      'محترمہ نصرت فاطمہ نقوی کی پوری زندگی اس بات کی گواہ ہے کہ وہ جس بھی ادارے، معاشرے یا ملک سے وابستہ رہی ہیں، وہاں انہوں نے ہمیشہ تعمیر، ترقی اور فلاح کا بیج بویا ہے۔ کسی بھی ادارے کے لیے ان جیسی باوقار اور مخیر شخصیت کی موجودگی باعثِ افتخار اور ان کا تعاون باعثِ برکت ہوگا۔ میں ان کی اعلیٰ ظرفی، بہترین کردار اور شاندار خدمات کی مکمل اور غیر مشروط تائید کرتا ہوں۔',
      'والسلام،',
      'حاجی شبیر احمد شگری'
    ]
  },
  {
    id: 'doc_303',
    imageUrl: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790690129/WhatsApp_Image_2026-09-22_at_5.22.00_AM_1.jpg',
    category: 'letters',
    enDocName: 'Letter of Appreciation in Recognition of Meritorious Community and Welfare Services',
    enLines: [
      'DAILY AWAZ-E-QALAM',
      'Rawalpindi / Islamabad',
      'Ref: [Unspecified]',
      'Date: 18-08-2026',
      'Letter of Appreciation',
      'Syeda Nusrat Fatima Naqvi, a respected 70-year-old member of the Pakistani community, is widely recognized for her dignified personality, kind nature, and excellent reputation among Pakistani families and the wider deserving community.',
      'Throughout her life, Syeda Nusrat Fatima Naqvi has remained deeply connected with her community and has consistently extended her support to poor, needy, and deserving individuals. Her compassion, generosity, and willingness to help others have earned her great respect and admiration. She has always believed in serving humanity and supporting those who are facing difficult circumstances, regardless of their background.',
      'Syeda Nusrat Fatima Naqvi is a proud mother of three children Jawad Haider, Fawad Haider, and Hajra Khatoon. She was born in Karachi, Pakistan, and later relocated to Dubai.',
      'Her son, Jawad Haider, is actively engaged in private business and is involved in his own commercial activities.',
      'Her son, Fawad Haider, has dedicated a significant part of his life to the service and affairs of the Imambargah. He remains actively engaged in religious and community services, promoting the teachings and message of Muhammad (PBUH) and Aal-e-Muhammad (AS), while also managing his business activities. His commitment to religious service and community welfare is deeply respected.',
      'Her daughter, Hajra Khatoon, along with her husband Imran Zahid is also actively involved in supporting and managing the affairs of the Imambargah alongside Fawad Haider. Together, they are entrusted with the management and affairs of two Imambargahs, serving as members of their respective trusts and contributing to their religious and community activities.',
      'At the age of 70, Syeda Nusrat Fatima Naqvi continues to be held in high esteem by members of the Pakistani community and by poor and deserving people who have benefited from her kindness and support. Her life represents a valuable example of compassion, dignity, family commitment, religious service, and service to others.',
      'We sincerely appreciate and acknowledge her valuable contribution to the community and her continued efforts to support those in need. Her character, generosity, commitment to family, and dedication to helping others are truly commendable and deserving of recognition.',
      'With sincere respect and appreciation,',
      'Safia Parveen',
      'Daily Awaz e Qalam',
      'Editor'
    ],
    urDocName: 'موضوع: توصیفی خط—شاندار سماجی، فلاحی اور مذہبی خدمات کا اعتراف (روزنامہ آوازِ قلم)',
    urLines: [
      'روزنامہ آوازِ قلم',
      'راولپنڈی / اسلام آباد',
      'حوالہ نمبر: [خالی]',
      'تاریخ: 18-08-2026',
      'توصیفی خط',
      'سیدہ نصرت فاطمہ نقوی، پاکستانی کمیونٹی کی ایک معزز 70 سالہ رکن ہیں، جو اپنی باوقار شخصیت، مہربان طبیعت اور پاکستانی خاندانوں سمیت وسیع تر مستحق طبقے میں اپنی بہترین ساکھ کی بدولت قدر کی نگاہ سے دیکھی جاتی ہیں۔',
      'اپنی پوری زندگی میں سیدہ نصرت فاطمہ نقوی اپنی کمیونٹی کے ساتھ گہرا ربط قائم رکھے ہوئے ہیں اور انہوں نے ہمیشہ غریب، نادار اور ضرورت مند افراد کی بھرپور مدد کی ہے۔ ان کے جذبۂ ہمدردی، سخاوت اور دوسروں کی مدد کے جذبے نے انہیں بے پناہ عزت اور ستائش بخشی ہے۔ وہ پس منظر سے بالاتر ہو کر ہمیشہ انسانیت کی خدمت اور مشکل حالات کا سامنا کرنے والوں کی دستگیری پر یقین رکھتی ہیں۔',
      'سیدہ نصرت فاطمہ نقوی تین بچوں—جواد حیدر، فواد حیدر اور ہاجرہ خاتون—کی قابلِ فخر والدہ ہیں۔ وہ کراچی، پاکستان میں پیدا ہوئیں اور بعد ازاں دبئی منتقل ہو گئیں۔',
      'ان کے صاحبزادے، جواد حیدر، نجی کاروبار سے وابستہ ہیں اور اپنی تجارتی سرگرمیوں میں مصروفِ عمل ہیں۔',
      'ان کے دوسرے صاحبزادے، فواد حیدر، نے اپنی زندگی کا ایک نمایاں حصہ امام بارگاہ کی خدمت اور معاملات کے لیے وقف کر رکھا ہے۔ وہ اپنی کاروباری مصروفیات کے ساتھ ساتھ مذہبی و فلاحی خدمات اور حضرت محمد مصطفیٰ ﷺ اور آلِ محمدؑ کی تعلیمات و پیغامات کے فروغ میں سرگرم عمل ہیں۔ مذہبی خدمات اور فلاحِ عامہ کے حوالے سے ان کی یہ لگن بیحد قابلِ احترام ہے۔',
      'ان کی صاحبزادی، ہاجرہ خاتون، اپنے شوہر عمران زاہد کے ہمراہ، فواد حیدر کے ساتھ مل کر امام بارگاہ کے امور و انتظامات سنبھالنے میں فعال کردار ادا کر رہی ہیں۔ یہ دونوں مل کر دو امام بارگاہوں کے انتظام و انصرام کی ذمہ داریاں نبھاتے ہیں، متعلقہ ٹرسٹیز کے اراکین کی حیثیت سے خدمات انجام دیتے ہیں اور مذہبی و سماجی سرگرمیوں میں بھرپور معاونت کرتے ہیں۔',
      '70 سال کی عمر میں بھی سیدہ نصرت فاطمہ نقوی کو پاکستانی کمیونٹی اور ان ضرورت مند افراد کی جانب سے انتہائی عزت و تکریم کی نگاہ سے دیکھا جاتا ہے جنہوں نے ان کی شفقت اور امداد سے فیض پایا ہے۔ ان کی زندگی ہمدردی، وقار، خاندانی وابستگی، مذہبی خدمت اور خلقِ خدا کی خدمت کی ایک تابندہ مثال ہے۔',
      'ہم کمیونٹی کے لیے ان کی گراں قدر خدمات اور ضرورت مندوں کی مسلسل اعانت کے جذبے کو تہہِ دل سے سراہتے ہیں اور اس کا باضابطہ اعتراف کرتے ہیں۔ ان کا بلند کردار، فیاضی، خاندان کے ساتھ مخلصانہ وابستگی اور دکھی انسانیت کی مدد کے لیے ان کا خلوص بلا شبہ لائقِ تحسین اور اعتراف کے قابل ہے۔',
      'نہایت خلوص، احترام اور ستائش کے ساتھ،',
      'صفیہ پروین',
      'روزنامہ آوازِ قلم',
      'ایڈیٹر'
    ]
  },
  {
    id: 'doc_304',
    imageUrl: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790690129/WhatsApp_Image_2026-09-22_at_5.22.00_AM.jpg',
    category: 'letters',
    enDocName: 'Letter of Appreciation in Recognition of Meritorious Community and Welfare Services',
    enLines: [
      'Daily Free Press',
      'Rawalpindi / Islamabad',
      'Ref: [Unspecified]',
      'Date: 18-08-2026',
      'Letter of Appreciation',
      'Syeda Nusrat Fatima Naqvi, a respected 70-year-old member of the Pakistani community, is widely recognized for her dignified personality, kind nature, and excellent reputation among Pakistani families and the wider deserving community.',
      'Throughout her life, Syeda Nusrat Fatima Naqvi has remained deeply connected with her community and has consistently extended her support to poor, needy, and deserving individuals. Her compassion, generosity, and willingness to help others have earned her great respect and admiration. She has always believed in serving humanity and supporting those who are facing difficult circumstances, regardless of their background.',
      'Syeda Nusrat Fatima Naqvi is a proud mother of three children Jawad Haider, Fawad Haider, and Hajra Khatoon. She was born in Karachi, Pakistan, and later relocated to Dubai.',
      'Her son, Jawad Haider, is actively engaged in private business and is involved in his own commercial activities.',
      'Her son, Fawad Haider, has dedicated a significant part of his life to the service and affairs of the Imambargah. He remains actively engaged in religious and community services, promoting the teachings and message of Muhammad (PBUH) and Aal-e-Muhammad (AS), while also managing his business activities. His commitment to religious service and community welfare is deeply respected.',
      'Her daughter, Hajra Khatoon, along with her husband Imran Zahid is also actively involved in supporting and managing the affairs of the Imambargah alongside Fawad Haider. Together, they are entrusted with the management and affairs of two Imambargahs, serving as members of their respective trusts and contributing to their religious and community activities.',
      'At the age of 70, Syeda Nusrat Fatima Naqvi continues to be held in high esteem by members of the Pakistani community and by poor and deserving people who have benefited from her kindness and support. Her life represents a valuable example of compassion, dignity, family commitment, religious service, and service to others.',
      'We sincerely appreciate and acknowledge her valuable contribution to the community and her continued efforts to support those in need. Her character, generosity, commitment to family, and dedication to helping others are truly commendable and deserving of recognition.',
      'With sincere respect and appreciation,',
      'Sohail Anjum Malik',
      'Daily Free Press',
      'Resident Editor'
    ],
    urDocName: 'موضوع: توصیفی خط—شاندار سماجی، فلاحی اور مذہبی خدمات کا اعتراف (روزنامہ فری پریس)',
    urLines: [
      'روزنامہ فری پریس',
      'راولپنڈی / اسلام آباد',
      'حوالہ نمبر: [خالی]',
      'تاریخ: 18-08-2026',
      'توصیفی خط',
      'سیدہ نصرت فاطمہ نقوی، پاکستانی کمیونٹی کی ایک معزز 70 سالہ رکن ہیں، جو اپنی باوقار شخصیت، مہربان طبیعت اور پاکستانی خاندانوں سمیت وسیع تر مستحق طبقے میں اپنی بہترین ساکھ کی بدولت قدر کی نگاہ سے دیکھی جاتی ہیں۔',
      'اپنی پوری زندگی میں سیدہ نصرت فاطمہ نقوی اپنی کمیونٹی کے ساتھ گہرا ربط قائم رکھے ہوئے ہیں اور انہوں نے ہمیشہ غریب، نادار اور ضرورت مند افراد کی بھرپور مدد کی ہے۔ ان کے جذبۂ ہمدردی، سخاوت اور دوسروں کی مدد کے جذبے نے انہیں بے پناہ عزت اور ستائش بخشی ہے۔ وہ پس منظر سے بالاتر ہو کر ہمیشہ انسانیت کی خدمت اور مشکل حالات کا سامنا کرنے والوں کی دستگیری پر یقین رکھتی ہیں۔',
      'سیدہ نصرت فاطمہ نقوی تین بچوں—جواد حیدر، فواد حیدر اور ہاجرہ خاتون—کی قابلِ فخر والدہ ہیں۔ وہ کراچی، پاکستان میں پیدا ہوئیں اور بعد ازاں دبئی منتقل ہو گئیں۔',
      'ان کے صاحبزادے، جواد حیدر، نجی کاروبار سے وابستہ ہیں اور اپنی تجارتی سرگرمیوں میں مصروفِ عمل ہیں۔',
      'ان کے دوسرے صاحبزادے، فواد حیدر، نے اپنی زندگی کا ایک نمایاں حصہ امام بارگاہ کی خدمت اور معاملات کے لیے وقف کر رکھا ہے۔ وہ اپنی کاروباری مصروفیات کے ساتھ ساتھ مذہبی و فلاحی خدمات اور حضرت محمد مصطفیٰ ﷺ اور آلِ محمدؑ کی تعلیمات و پیغامات کے فروغ میں سرگرم عمل ہیں۔ مذہبی خدمات اور فلاحِ عامہ کے حوالے سے ان کی یہ لگن بیحد قابلِ احترام ہے۔',
      'ان کی صاحبزادی، ہاجرہ خاتون، اپنے شوہر عمران زاہد کے ہمراہ، فواد حیدر کے ساتھ مل کر امام بارگاہ کے امور و انتظامات سنبھالنے میں فعال کردار ادا کر رہی ہیں۔ یہ دونوں مل کر دو امام بارگاہوں کے انتظام و انصرام کی ذمہ داریاں نبھاتے ہیں، متعلقہ ٹرسٹیز کے اراکین کی حیثیت سے خدمات انجام دیتے ہیں اور مذہبی و سماجی سرگرمیوں میں بھرپور معاونت کرتے ہیں۔',
      '70 سال کی عمر میں بھی سیدہ نصرت فاطمہ نقوی کو پاکستانی کمیونٹی اور ان ضرورت مند افراد کی جانب سے انتہائی عزت و تکریم کی نگاہ سے دیکھا جاتا ہے جنہوں نے ان کی شفقت اور امداد سے فیض پایا ہے۔ ان کی زندگی ہمدردی، وقار، خاندانی وابستگی، مذہبی خدمت اور خلقِ خدا کی خدمت کی ایک تابندہ مثال ہے۔',
      'ہم کمیونٹی کے لیے ان کی گراں قدر خدمات اور ضرورت مندوں کی مسلسل اعانت کے جذبے کو تہہِ دل سے سراہتے ہیں اور اس کا باضابطہ اعتراف کرتے ہیں۔ ان کا بلند کردار، فیاضی، خاندان کے ساتھ مخلصانہ وابستگی اور دکھی انسانیت کی مدد کے لیے ان کا خلوص بلا شبہ لائقِ تحسین اور اعتراف کے قابل ہے۔',
      'نہایت خلوص، احترام اور ستائش کے ساتھ،',
      'سہیل انجم ملک',
      'روزنامہ فری پریس',
      'ریزیڈنٹ ایڈیٹر'
    ]
  }
];

async function addLetters() {
  console.log('Reading documents_data.json...');
  let data = JSON.parse(fs.readFileSync('documents_data.json', 'utf8'));
  
  const langsToGenerate = ['ar', 'fa', 'es'];
  
  for (const doc of newDocs) {
    console.log(`Processing: ${doc.id}`);
    const newDoc = {
      id: doc.id,
      imageUrl: doc.imageUrl,
      category: doc.category,
      translations: {
        en: {
          name: 'English',
          dir: 'ltr',
          docName: doc.enDocName,
          lines: doc.enLines.map(v => ({ value: v }))
        },
        ur: {
          name: 'اردو',
          dir: 'rtl',
          docName: doc.urDocName,
          lines: doc.urLines.map(v => ({ value: v }))
        }
      }
    };

    for (const lang of langsToGenerate) {
      newDoc.translations[lang] = {
        name: lang === 'ar' ? 'العربية' : lang === 'fa' ? 'فارسی' : 'Español',
        dir: lang === 'es' ? 'ltr' : 'rtl',
        docName: '',
        lines: []
      };
      
      try {
        const titleRes = await translate(doc.enDocName, { to: lang });
        newDoc.translations[lang].docName = titleRes.text;

        const translatedLines = [];
        for (const line of doc.enLines) {
          const res = await translate(line, { to: lang });
          translatedLines.push({ value: res.text });
        }
        newDoc.translations[lang].lines = translatedLines;
      } catch (err) {
        console.error(`Error translating to ${lang}:`, err.message);
      }
    }
    
    data.push(newDoc);
  }

  fs.writeFileSync('documents_data.json', JSON.stringify(data, null, 2));
  console.log('Finished adding all letters!');
}

addLetters().catch(console.error);
