import ShareWidget from '@/components/ShareWidget';
export default function Home() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1787490226/urdu.mp4';
  const videoHeading = '🎥 ایک تعارفی جھلک';

  

  const ideology = [
    { icon: '🕊️', title: 'انسانیت اور امن', desc: 'اسلام امن اور سلامتی کا مذہب ہے۔ ہر غریب، پریشان اور محتاج کا ساتھ دینا ہمارا اولین فرض ہے۔' },
    { icon: '🤝', title: 'اتحادِ امت', desc: 'تمام مسلمانوں کو متحد ہو کر پرانے اختلافات بھلا دینے چاہئیں۔ اسلام کو ایک فلاحی دین کے طور پر پیش کریں۔' },
    { icon: '🌍', title: 'ایودا انٹرنیشنل', desc: 'بین الاقوامی سطح پر رفاہی کام، اسلامی قبرستان اور دکھی انسانیت کی بے لوث خدمت کا عزم۔' },
    { icon: '💡', title: 'شعور و آگاہی', desc: 'معاشرے سے جہالت کا خاتمہ محض رسمی تعلیم سے نہیں، بلکہ پاک ہستیوں کی تعلیمات کے نفاذ میں پوشیدہ ہے۔' },
  ];

  const businesses = [
    { 
      country: 'متحدہ عرب امارات', 
      icon: '🇦🇪', 
      details: [
        '1970 کی دہائی سے دبئی اور شارجہ میں کاروبار کا آغاز',
        'شارجہ میں بلاک فیکٹری اور "الرافدین جنرل ڈیکور" (1977ء)',
        '"کراج الرافدین" گاڑیوں کی مرمت کا گیراج (1980ء)',
        'عجمان میں "مطعم الطعمہ" ریستوران میں شراکت داری',
        '"عسلی جنرل ٹریڈنگ" میں بطور سیلز مینیجر (1997ء)'
      ] 
    },
    { 
      country: 'شام (دمشق)', 
      icon: '🇸🇾', 
      details: [
        'دمشق جیسے تاریخی شہر میں ایک شاندار ہوٹل اور مختلف فلیٹس',
        'امپورٹ ایکسپورٹ کا ایک بہت بڑا نیٹ ورک (چیمبر آف کامرس 2010ء کے مطابق)',
        'کپڑے، الیکٹرانکس، کتابوں، کمپیوٹرز کی وسیع تجارت',
        'طبی و لیزر آلات اور تعمیراتی مواد کی عالمی تجارت'
      ] 
    },
    { 
      country: 'برطانیہ اور سپین', 
      icon: '🇬🇧', 
      details: [
        'موجودہ رہائش برطانیہ اور سپین میں',
        'وہیں سے اپنی عالمی کاروباری اور سماجی سرگرمیوں کی بہترین نگرانی',
        'یورپ تک فلاحی وژن کی رسائی اور مذہبی مراکز کا قیام'
      ] 
    }
  ];

  const charities = [
    { 
      year: 'شام میں عطیات اور تعمیرات', 
      title: 'عظیم الشان سرکاری و سماجی عطیہ', 
      desc: '1982ء میں شامی حکومت کو 2.5 کروڑ (25 ملین) شامی لیرہ مالیت کی زمین فلاحی کاموں کے لیے ہدیہ کی۔ 1981ء میں "حسینیہ زینب الزہراء" کی تعمیر کروائی۔ بابِ صغیر کے قبرستان کی تعمیرات میں پندرہ لاکھ لیرہ خرچ کیے۔ 1996ء میں ڈسپنسری کے لیے زمین دی اور 2007ء میں مستوصف الزہراء (فلاحی کلینک) کو طبی آلات فراہم کیے۔' 
    },
    { 
      year: 'متحدہ عرب امارات میں رفاہی مراکز', 
      title: 'اسلامی مرکز اور یتیم خانے کا قیام', 
      desc: '1989ء میں ابوظہبی ایئرپورٹ کے قریب 40,000 میٹر اراضی حاصل کی اور اسے اسلامی مرکز، یتیم خانہ، تفسیرِ قرآن مرکز، مسجد اور لیبر (پاکستانی، انڈین، بنگالی) کے لیے مردانہ و زنانہ رہائش گاہوں کے لیے وقف کر دیا۔' 
    },
    { 
      year: 'پاکستان اور بھارت میں کارِ خیر', 
      title: 'مزارات کی تعمیر اور غریبوں کی امداد', 
      desc: 'داتا دربار (1990)، بی بی پاک دامن (1989) اور دربار بری امام (1995) کی تعمیرات و رنگ و روغن کے لیے لاکھوں روپے اور غیر ملکی کرنسی عطیہ کی۔ الہ آباد (انڈیا) میں غریب بچیوں کی شادی، تربیت اور خوراک کے لیے بے دریغ رقوم ادا کیں۔ پاکستان میں ایک بڑی اراضی غریبوں کی فیکٹری اور مرکزِ انسانیت کے لیے مختص ہے۔' 
    },
    { 
      year: 'مذہبی و تبلیغی خدمات', 
      title: 'مجمع جهانی اہل البیتؑ سے تعاون', 
      desc: 'جنوری 1994ء میں مجمع جهانی اہل البیتؑ کو 40 لاکھ سیرین پونڈ (آج کے حساب سے کروڑوں روپے) کی قیمتی زمین ہدیہ کی، تاکہ وہاں ایک عظیم الشان لائبریری، حسینیہ، مہمان خانہ اور دفتر تعمیر کیا جا سکے۔' 
    }
  ];

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="hero-modern">
        <div className="hero-content">
          
          
          
          <p className="hero-desc">
            خدمتِ خلق میں جہد مسلسل اور دردِ دل رکھنے والی عظیم خاتون۔
            جنہوں نے دنیاوی کامیابیوں کے باوجود اپنی روح کا رشتہ خالقِ کائنات اور انسانیت کی خدمت سے جوڑے رکھا۔
          </p>
          <div className="hero-quote">
            "اللہ تعالیٰ کی نازل کردہ چاروں الہامی کتابوں کا بنیادی مقصد انسان کی ہدایت اور فلاح ہے۔ ان تعلیمات کا تقاضا ہے کہ ہر مذہب کا دل سے احترام کیا جائے۔"
            <span style={{ fontSize: '1rem', color: '#55efc4', display: 'block', marginTop: '10px' }}>نصرت فاطمہ نقوی</span>
            <ShareWidget title="محترمہ نصرت فاطمہ نقوی کا قول" text="اللہ تعالیٰ کی نازل کردہ چاروں الہامی کتابوں کا بنیادی مقصد انسان کی ہدایت اور فلاح ہے۔" />
            <div style={{ marginTop: '30px', lineHeight: '2', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                <span>وہ دن کبھی مت دکھانا میرے خدا</span>
                <span>کہ مجھے اپنے آپ پر غرور ہوجائے</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                <span>مجھے رکھنا اس طرح سب کے دلوں میں</span>
                <span>کہ ہر کوئی دعا دینے پر مجبور ہوجائے</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <h2 className="section-title glow-text text-center">{videoHeading}</h2>
        <div className="video-container-modern">
          <video src={videoLink} controls playsInline preload="metadata" className="promo-video" />
          <ShareWidget title="محترمہ نصرت فاطمہ نقوی کی ایک تعارفی جھلک" />
        </div>
      </section>

      

      {/* Detailed Business Section */}
      <section className="business-detailed-section">
        <div className="container">
          <h2 className="section-title text-center">عالمی سطح پر کاروباری کامیابیاں</h2>
          <p className="text-center" style={{ color: '#b0c4de', marginBottom: '40px', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px' }}>
            ایک انتہائی فعال اور باہمت خاتون جنہوں نے ثابت کیا کہ اپنے عزم و حوصلے سے ہر شعبے میں کامیابی کے جھنڈے گاڑے جا سکتے ہیں۔
          </p>
          <div className="business-grid-modern">
            {businesses.map((biz, idx) => (
              <div className="business-card-modern" key={idx}>
                <div className="biz-header">
                  <span className="biz-icon">{biz.icon}</span>
                  <h3 className="biz-country">{biz.country}</h3>
                </div>
                <ul className="biz-list">
                  {biz.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Philanthropy / Charities Section */}
      <section className="charity-timeline-section">
        <div className="container">
          <h2 className="section-title text-center">عظیم الشان فلاحی و سماجی خدمات</h2>
          <div className="timeline-modern-container">
            {charities.map((charity, idx) => (
              <div className="timeline-modern-item" key={idx}>
                <div className="timeline-modern-dot"></div>
                <div className="timeline-modern-content">
                  <span className="timeline-modern-year">{charity.year}</span>
                  <h3 className="timeline-modern-title">{charity.title}</h3>
                  <p className="timeline-modern-desc">{charity.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideology Section */}
      <section className="ideology-section">
        <div className="container">
          <h2 className="section-title text-center">نظریات و خیالات (صدائے خلق)</h2>
          <div className="ideology-grid">
            {ideology.map((item, idx) => (
              <div className="ideology-card" key={idx}>
                <div className="card-icon">{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="quote-box">
            <span className="quote-mark">❝</span>
            <p>
              نیکی کر لو جب تک تمہارے قدم زمین کے اوپر ہیں، 
              جب زمین کے اندر چلے گئے تو تم خود محتاجِ دعا و فاتحہ ہو جاؤ گے۔
            </p>
            <span className="quote-author">نصرت فاطمہ نقوی</span>
          </div>
        </div>
      </section>

    </div>
  );
}
