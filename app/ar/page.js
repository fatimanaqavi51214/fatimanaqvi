import ShareWidget from '@/components/ShareWidget';

export default function Home() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1787490225/arabic.mp4';
  const videoHeading = '🎥 لمحة تعريفية';

  const ideology = [
    { icon: '🕊️', title: 'الإنسانية والسلام', desc: 'الإسلام دين السلام والأمن. دعم كل فقير ومكروب ومحتاج هو واجبنا الأساسي.' },
    { icon: '🤝', title: 'وحدة الأمة', desc: 'يجب على جميع المسلمين أن يتحدوا وينسوا الخلافات القديمة. قدموا الإسلام كدين رفاه.' },
    { icon: '🌍', title: 'أيودا إنترناشيونال', desc: 'الالتزام بالأعمال الخيرية الدولية، المقابر الإسلامية، والخدمة المتفانية للإنسانية المعذبة.' },
    { icon: '💡', title: 'الوعي والإدراك', desc: 'القضاء على الجهل من المجتمع لا يكمن في التعليم الرسمي وحده، بل في تطبيق تعاليم الشخصيات الطاهرة.' },
  ];

  const businesses = [
    { 
      country: 'الإمارات العربية المتحدة', 
      icon: '🇦🇪', 
      details: [
        'بدء الأعمال التجارية في دبي والشارقة منذ السبعينيات',
        'مصنع طابوق في الشارقة و"الرافدين للديكور العام" (1977)',
        'كراج الرافدين لتصليح السيارات (1980)',
        'شراكة في مطعم "مطعم الطعمة" في عجمان',
        'مديرة مبيعات في "عسلي للتجارة العامة" (1997)'
      ] 
    },
    { 
      country: 'سوريا (دمشق)', 
      icon: '🇸🇾', 
      details: [
        'فندق فخم وشقق مختلفة في مدينة دمشق التاريخية',
        'شبكة ضخمة للاستيراد والتصدير (حسب غرفة التجارة 2010)',
        'تجارة واسعة في الملابس، الإلكترونيات، الكتب، وأجهزة الكمبيوتر',
        'تجارة عالمية للمعدات الطبية والليزر ومواد البناء'
      ] 
    },
    { 
      country: 'المملكة المتحدة وإسبانيا', 
      icon: '🇬🇧', 
      details: [
        'الإقامة الحالية في المملكة المتحدة وإسبانيا',
        'الإشراف الممتاز على الأنشطة التجارية والاجتماعية العالمية من هناك',
        'توسيع الرؤية الخيرية إلى أوروبا وتأسيس المراكز الدينية'
      ] 
    }
  ];

  const charities = [
    { 
      year: 'التبرعات والبناء في سوريا', 
      title: 'تبرع رسمي واجتماعي كبير', 
      desc: 'في عام 1982، تبرعت بأرض قيمة بقيمة 25 مليون ليرة سورية للحكومة السورية للأعمال الخيرية. بنت "حسينية زينب الزهراء" في عام 1981. أنفقت 1.5 مليون ليرة على بناء مقبرة باب الصغير. تبرعت بأرض لمستوصف في عام 1996 ووفرت المعدات الطبية لمستوصف الزهراء (عيادة خيرية) في عام 2007.' 
    },
    { 
      year: 'المراكز الخيرية في الإمارات', 
      title: 'تأسيس المركز الإسلامي ودار الأيتام', 
      desc: 'في عام 1989، حصلت على 40,000 متر مربع من الأرض بالقرب من مطار أبوظبي وخصصتها لمركز إسلامي، دار للأيتام، مركز لتفسير القرآن، مسجد، وسكن للعمال الذكور والإناث (باكستانيون وهنود وبنغاليون).' 
    },
    { 
      year: 'الأعمال الخيرية في باكستان والهند', 
      title: 'بناء الأضرحة ومساعدة الفقراء', 
      desc: 'تبرعت بملايين الروبيات والعملات الأجنبية لبناء وطلاء داتا دربار (1990)، بي بي باك دامان (1989)، ودربار بري إمام (1995). دفعت مبالغ هائلة لزواج وتدريب وطعام الفتيات الفقيرات في الله آباد (الهند). تم تخصيص قطعة أرض كبيرة في باكستان لمصنع للفقراء ومركز للإنسانية.' 
    },
    { 
      year: 'الخدمات الدينية والتبليغية', 
      title: 'التعاون مع المجمع العالمي لأهل البيت (ع)', 
      desc: 'في يناير 1994، تبرعت بأرض قيمة بقيمة 4 ملايين جنيه سوري للمجمع العالمي لأهل البيت (ع) حتى يمكن بناء مكتبة كبرى وحسينية ودار ضيافة ومكتب هناك.' 
    }
  ];

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="hero-modern">
        <div className="hero-content">
          <p className="hero-desc">
            امرأة عظيمة ذات نضال مستمر وقلب ينبض بحب الإنسانية. بالرغم من نجاحاتها الدنيوية، حافظت على ارتباط روحها بخالق الكون وخدمة البشرية.
          </p>
          <div className="hero-quote">
            "الهدف الأساسي للكتب السماوية الأربعة هو هداية وخلاص البشرية. هذه التعاليم تتطلب أن يتم احترام كل دين بصدق وإخلاص."
            <span style={{ fontSize: '1rem', color: '#55efc4', display: 'block', marginTop: '10px' }}>نصرت فاطمة نقوي</span>
            <ShareWidget title="مقولة السيدة نصرت فاطمة نقوي" text="الهدف الأساسي للكتب السماوية الأربعة هو هداية وخلاص البشرية." />
            <div style={{ marginTop: '30px', lineHeight: '2', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                <span>يا رب، لا ترني ذلك اليوم أبدًا</span>
                <span>الذي أصبح فيه مغرورًا بنفسي</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                <span>أبقني في قلوب الجميع بطريقة</span>
                <span>تجعل كل شخص مجبرًا على الدعاء لي</span>
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
          <ShareWidget title="لمحة تعريفية عن السيدة نصرت فاطمة نقوي" />
        </div>
      </section>

      {/* Detailed Business Section */}
      <section className="business-detailed-section">
        <div className="container">
          <h2 className="section-title text-center">الإنجازات التجارية العالمية</h2>
          <p className="text-center" style={{ color: '#b0c4de', marginBottom: '40px', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px' }}>
            امرأة نشطة وشجاعة أثبتت أنه بالعزيمة والإرادة يمكن رفع راية النجاح في كل مجال.
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
            <ShareWidget title="الإنجازات التجارية العالمية" />
          </div>
        </div>
      </section>

      {/* Detailed Philanthropy / Charities Section */}
      <section className="charity-timeline-section">
        <div className="container">
          <h2 className="section-title text-center">الخدمات الخيرية والاجتماعية العظيمة</h2>
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
            <ShareWidget title="الخدمات الخيرية والاجتماعية العظيمة" />
          </div>
        </div>
      </section>

      {/* Ideology Section */}
      <section className="ideology-section">
        <div className="container">
          <h2 className="section-title text-center">الأفكار والرؤى (صوت الشعب)</h2>
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
              افعل الخير ما دامت قدماك على الأرض، فعندما تذهب تحت الأرض ستكون أنت بحاجة إلى الدعاء والفاتحة.
            </p>
            <span className="quote-author">نصرت فاطمة نقوي</span>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <ShareWidget title="الأفكار والرؤى (صوت الشعب)" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
