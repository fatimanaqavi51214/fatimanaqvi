const fs = require('fs');

const faPageContent = `import ShareWidget from '@/components/ShareWidget';

export default function Home() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1787761493/farsi.mp4';
  const videoHeading = '🎥 ویدیو معرفی';

  const ideology = [
    { icon: '🕊️', title: 'انسانیت و صلح', desc: 'اسلام دین صلح و امنیت است. حمایت از هر فرد فقیر، پریشان و نیازمند وظیفه اصلی ماست.' },
    { icon: '🤝', title: 'وحدت امت', desc: 'همه مسلمانان باید متحد شوند و اختلافات قدیمی را فراموش کنند. اسلام را به عنوان یک دین رفاهی معرفی کنید.' },
    { icon: '🌍', title: 'آیودا اینترنشنال', desc: 'تعهد به کارهای رفاهی بین‌المللی، گورستان‌های اسلامی و خدمت فداکارانه به بشریت دردمند.' },
    { icon: '💡', title: 'آگاهی و شعور', desc: 'ریشه‌کنی جهل از جامعه تنها در آموزش رسمی نهفته نیست، بلکه در اجرای آموزه‌های شخصیت‌های پاک است.' },
  ];

  const businesses = [
    { 
      country: 'امارات متحده عربی', 
      icon: '🇦🇪', 
      details: [
        'آغاز کسب‌وکار در دبی و شارجه از دهه ۱۹۷۰',
        'کارخانه بلوک در شارجه و "الرافدین جنرال دکور" (۱۹۷۷)',
        'گاراژ تعمیر خودرو "کراج الرافدین" (۱۹۸۰)',
        'مشارکت در رستوران "مطعم الطعمه" در عجمان',
        'مدیر فروش در "عسلی جنرال تریدینگ" (۱۹۹۷)'
      ] 
    },
    { 
      country: 'سوریه (دمشق)', 
      icon: '🇸🇾', 
      details: [
        'هتل مجلل و آپارتمان‌های متعدد در شهر تاریخی دمشق',
        'یک شبکه عظیم واردات و صادرات (طبق اتاق بازرگانی ۲۰۱۰)',
        'تجارت گسترده پوشاک، الکترونیک، کتاب و رایانه',
        'تجارت جهانی تجهیزات پزشکی، لیزری و مصالح ساختمانی'
      ] 
    },
    { 
      country: 'بریتانیا و اسپانیا', 
      icon: '🇬🇧', 
      details: [
        'سکونت فعلی در بریتانیا و اسپانیا',
        'نظارت عالی بر فعالیت‌های تجاری و اجتماعی جهانی از آنجا',
        'گسترش چشم‌انداز رفاهی به اروپا و تأسیس مراکز دینی'
      ] 
    }
  ];

  const charities = [
    { 
      year: 'کمک‌های مالی و ساخت‌وساز در سوریه', 
      title: 'اهدای رسمی و اجتماعی بزرگ', 
      desc: 'در سال ۱۹۸۲، زمین باارزشی به مبلغ ۲۵ میلیون لیره سوریه را برای کارهای خیریه به دولت سوریه اهدا کرد. در سال ۱۹۸۱ "حسینیه زینب الزهرا" را بنا کرد. ۱.۵ میلیون لیره برای بازسازی قبرستان باب الصغیر هزینه کرد. در سال ۱۹۹۶ زمینی برای درمانگاه اهدا کرد و در سال ۲۰۰۷ تجهیزات پزشکی برای مستوصف الزهرا فراهم کرد.' 
    },
    { 
      year: 'مراکز رفاهی در امارات', 
      title: 'تأسیس مرکز اسلامی و یتیم‌خانه', 
      desc: 'در سال ۱۹۸۹، ۴۰ هزار متر زمین نزدیک فرودگاه ابوظبی تهیه کرد و آن را برای مرکز اسلامی، یتیم‌خانه، مرکز تفسیر قرآن، مسجد و اقامتگاه‌های کارگران (پاکستانی، هندی، بنگالی) اختصاص داد.' 
    },
    { 
      year: 'کارهای خیریه در پاکستان و هند', 
      title: 'ساخت زیارتگاه‌ها و کمک به فقرا', 
      desc: 'اهدای میلیون‌ها روپیه و ارز خارجی برای ساخت داتا دربار (۱۹۹۰)، بی‌بی پاک‌دامن (۱۹۸۹) و دربار بری امام (۱۹۹۵). پرداخت مبالغ هنگفت برای ازدواج، آموزش و غذای دختران فقیر در الله‌آباد هند. زمینی بزرگ در پاکستان برای کارخانه فقرا و مرکز انسانیت اختصاص داده شده است.' 
    },
    { 
      year: 'خدمات مذهبی و تبلیغی', 
      title: 'همکاری با مجمع جهانی اهل بیت (ع)', 
      desc: 'در ژانویه ۱۹۹۴، زمین باارزشی به مبلغ ۴ میلیون پوند سوریه به مجمع جهانی اهل بیت (ع) اهدا شد تا در آنجا یک کتابخانه بزرگ، حسینیه، مهمان‌سرا و دفتر ساخته شود.' 
    }
  ];

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="hero-modern">
        <div className="hero-content">
          <p className="hero-desc">
            بانوی عظیمی با تلاش مستمر در خدمت به خلق و دلی دردمند. کسی که با وجود موفقیت‌های دنیوی، پیوند روح خود را با خالق هستی و خدمت به بشریت حفظ کرد.
          </p>
          <div className="hero-quote">
            "هدف اساسی هر چهار کتاب آسمانی هدایت و رستگاری انسان است. این آموزه‌ها ایجاب می‌کند که به هر دینی از صمیم قلب احترام گذاشته شود."
            <span style={{ fontSize: '1rem', color: '#55efc4', display: 'block', marginTop: '10px' }}>نصرت فاطمه نقوی</span>
            <ShareWidget title="سخن بانو نصرت فاطمه نقوی" text="هدف اساسی هر چهار کتاب آسمانی هدایت و رستگاری انسان است." />
            <div style={{ marginTop: '30px', lineHeight: '2', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                <span>خداوندا، هرگز آن روز را به من نشان مده</span>
                <span>که به خودم مغرور شوم</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                <span>مرا چنان در دل‌های همه جای ده</span>
                <span>که هر کس ناگزیر به دعایم شود</span>
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
          <ShareWidget title="نگاهی اجمالی به بانو نصرت فاطمه نقوی" />
        </div>
      </section>

      {/* Detailed Business Section */}
      <section className="business-detailed-section">
        <div className="container">
          <h2 className="section-title text-center">دستاوردهای تجاری در سطح جهانی</h2>
          <p className="text-center" style={{ color: '#b0c4de', marginBottom: '40px', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px' }}>
            بانویی بسیار فعال و شجاع که ثابت کرد با عزم و اراده می‌توان پرچم موفقیت را در هر زمینه‌ای به اهتزاز درآورد.
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
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <ShareWidget title="دستاوردهای تجاری در سطح جهانی" />
          </div>
        </div>
      </section>

      {/* Detailed Philanthropy / Charities Section */}
      <section className="charity-timeline-section">
        <div className="container">
          <h2 className="section-title text-center">خدمات عظیم خیریه و اجتماعی</h2>
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
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <ShareWidget title="خدمات عظیم خیریه و اجتماعی" />
          </div>
        </div>
      </section>

      {/* Ideology Section */}
      <section className="ideology-section">
        <div className="container">
          <h2 className="section-title text-center">دیدگاه‌ها و اندیشه‌ها (صدای مردم)</h2>
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
              تا زمانی که قدم‌هایت روی زمین است نیکی کن، وقتی به زیر زمین رفتی خودت محتاج دعا و فاتحه خواهی شد.
            </p>
            <span className="quote-author">نصرت فاطمه نقوی</span>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <ShareWidget title="دیدگاه‌ها و اندیشه‌ها (صدای مردم)" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
`;

fs.writeFileSync('app/fa/page.js', faPageContent);
console.log('Created fa page.');
