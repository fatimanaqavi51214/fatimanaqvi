import ShareWidget from '@/components/ShareWidget';

export default function Home() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1794157451/%D8%A7%D9%84%D8%B3%D9%8A%D8%AF%D8%A9_%D9%86%D8%B5%D8%B1%D8%AA_%D9%81%D8%A7%D8%B7%D9%85%D8%A9_%D9%86%D9%82%D9%88%D9%8A_%D9%85%D8%AB%D8%A7%D9%84_%D9%85%D8%B4%D8%B1%D9%82_%D9%84%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9_%D9%88%D8%AE%D8%AF%D9%85%D8%A9_%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9_%D9%88%D8%A7%D9%84%D8%B9%D9%85%D9%84_%D8%A7%D9%84%D8%AE%D9%8A%D8%B1%D9%8A.mp4';
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
          <ShareWidget title="السيدة نصرت فاطمة نقوي — مثال مشرق للوطنية وخدمة الإنسانية والعمل الخيري" />
        </div>

        {/* Video Profile / Introductory Showcase */}
        <div className="video-intro-container">
          <div className="video-intro-header">
            <h3 className="video-intro-title">السيدة نصرت فاطمة نقوي — مثال مشرق للوطنية وخدمة الإنسانية والعمل الخيري</h3>
            <div className="video-intro-divider"></div>
          </div>

          <div className="video-intro-lead">
            <p>
              السيدة الفاضلة نصرت فاطمة نقوي هي باكستانية وطنية حقيقية وصادقة، وامرأة عظيمة ووقورة. على الرغم من أنها أمضت معظم حياتها في أعمال تجارية ومشاغل اجتماعية واسعة في مختلف دول العالم، إلا أن حب وطنها العزيز لم ينقص أبداً في قلبها. لقد ظل شغف الحب لبلدها يتدفق دائماً في صدرها، وبذلت كل جهد ممکن لرفع اسم باكستان عالياً في كل ركن من أركان العالم.
            </p>
          </div>

          <div className="video-intro-grid">
            <div className="video-intro-card">
              <div className="card-head">
                <span className="card-icon">🇵🇰</span>
                <h4>حب الجواز الأخضر والفخر الوطني</h4>
              </div>
              <p>
                إن أوضح وأروع دليل على وطنيتها هو أنها، على الرغم من تحقيقها نجاحات هائلة على المستوى العالمي وقضائها وقتاً طويلاً في الخارج، لم تحصل قط على جنسية أي بلد آخر. إنها فخورة جداً بـ "الجواز الأخضر" لبلدها، والذي يحمل المبدأ الذهبي لمؤسس باكستان "الإيمان، والاتحاد، والنظام" كمنارة تضيء طريقها. وهي تعرف بجواز سفرها لأفراد من دول أخرى بكل فخر قائلة: "انظروا، مكتوب على جواز سفرنا الباكستاني: الإيمان، والاتحاد، والنظام". إن حبها وتفانيها للقائد الأعظم محمد علي جناح ومفكر باكستان العلامة محمد إقبال هما جزء بارز من شخصيتها. وبدافع من روح الوطنية هذه، وعلى الرغم من عيشها في ديار الغربة، فضلت الارتباط والزواج بشخص باكستاني.
              </p>
            </div>

            <div className="video-intro-card">
              <div className="card-head">
                <span className="card-icon">🤝</span>
                <h4>رعاية الباكستانيين في ديار الغربة</h4>
              </div>
              <p>
                لم تقتصر خدمات السيدة نصرت فاطمة نقوي الهائلة على باكستان فحسب، بل شملت أيضاً الباكستانيين المقيمين في الخارج. عندما كان عملها في ذروته في دبي، وفرت فرص عمل لعدد لا يحصى من الباكستانيين من خلال شركتيها "سيراميك الراشدية" و"الرافدين". لقد دعمت أبناء وطنها اقتصادياً ووفرت لهم سكناً ممتازاً ومرافق أخرى. وبالمثل، قدمت خدمات عديدة في سوريا لإرشاد ومساعدة السياح والزوار الباكستانيين.
              </p>
            </div>

            <div className="video-intro-card">
              <div className="card-head">
                <span className="card-icon">🏢</span>
                <h4>الخدمات التجارية في دول مختلفة</h4>
              </div>
              <p>
                بدأت السيدة نصرت فاطمة نقوي أعمالاً تجارية مختلفة في دبي والشارقة منذ السبعينيات. شملت ممتلكاتها التجارية مصنعاً للطابوق في الشارقة، و"الرافدين للديكور العام" (1977)، وكراج "الرافدين" لتصليح السيارات (1980)، وشراكة في "مطعم الطعمة" في عجمان. وعلاوة على ذلك، تولت في عام 1997 شؤوناً إدارية عليا كمديرة مبيعات في "عسلي للتجارة العامة". تمتلك جزءاً كبيراً من أعمالها في سوريا، حيث تمتلك فندقاً فخماً وشققاً مختلفة في مدينة تاريخية مثل دمشق. ووفقاً لوثائق غرفة تجارة دمشق لعام 2010، فهي تمتلك شبكة ضخمة للاستيراد والتصدير، تشمل تجارة واسعة في الملابس والإلكترونيات والكتب وأجهزة الكمبيوتر والأجهزة الطبية وأجهزة الليزر ومواد البناء. ووفقاً لوثيقة من السفارة الباكستانية (2025)، فهي تقيم حالياً في بريطانيا، وما شاء الله، تدير أنشطتها التجارية والاجتماعية العالمية ببراعة من هناك.
              </p>
            </div>

            <div className="video-intro-card">
              <div className="card-head">
                <span className="card-icon">🌧️</span>
                <h4>مساعدة أبناء الوطن في الكوارث الطبيعية</h4>
              </div>
              <p>
                ينبض قلبها دائماً بالتعاطف مع الفقراء والمحتاجين والمضطهدين. كلما واجهت باكستان كوارث طبيعية، مثل الزلازل أو الفيضانات، قدمت السيدة نصرت فاطمة نقوي الدعم بسخاء. لقد دأبت على إرسال شحنات تتكون من عدة شاحنات محملة بالبطانيات والخيام والمراتب والملابس ومبردات المياه وملابس الأطفال كل عام للمستحقين في المناطق المتضررة من الفيضانات، لمسح دموع إخوتها وأخواتها المنكوبين.
              </p>
            </div>

            <div className="video-intro-card">
              <div className="card-head">
                <span className="card-icon">🕊️</span>
                <h4>خدمة الإنسانية — دون تمييز في الدين أو العرق</h4>
              </div>
              <p>
                لا تقتصر خدماتها الخيرية على دين أو طائفة أو مذهب معين؛ بل ينبض قلبها للإنسانية فقط. لقد جعلت من خدمة جميع البشر دون تمييز في اللون أو العرق شعاراً لها. قامت بتوزيع الأموال والبطانيات والشالات والحصائر بسخاء في مقامات كبار الصوفية في باكستان، مثل داتا دربار، وبي بي باك دامان، وبري إمام وغيرها من الأماكن. وما هو أعظم مثال على تسامحها من حقيقة أنها، إلى جانب المساجد، قدمت أيضاً تبرعات لا حصر لها لدور عبادة الأقليات — المعابد الهندوسية ومعابد السيخ (غوردوارا) — في شكل حصص تموينية وحصائر وبطانيات وأموال نقدية.
              </p>
            </div>

            <div className="video-intro-card">
              <div className="card-head">
                <span className="card-icon">🌍</span>
                <h4>الإنجازات الخيرية في سوريا ولبنان والسودان</h4>
              </div>
              <p>
                تكن تفانياً خاصاً لأرض سوريا المقدسة، وهي أرض الأنبياء والأولياء. والهدف الرئيسي من وجودها هناك هو خدمة الإنسانية. ولا تزال خدمة الزوار والسياح الباكستانيين في سوريا مستمرة. وبالإضافة إلى ذلك، وبالتعاون مع الحكومة السورية، قامت ببناء دور للأيتام ومستوصفات ومسارات، وقدمت تبرعات لا حصر لها. ولهذا السبب، يحظى شعب سوريا لها بتقدير واحترام كبيرين. وعلاوة على ذلك، يمتد نطاق أعمالها الخيرية ليشمل بناء دور الأيتام في لبنان وتقديم الإغاثة لضحايا الزلزال في السودان.
              </p>
            </div>
          </div>

          <div className="video-intro-message-card">
            <div className="message-head">
              <span className="message-icon">✨</span>
              <h4>الهدف والرسالة</h4>
            </div>
            <p>
              على المستوى الشخصي، تفضل السيدة نصرت فاطمة نقوي الأشخاص المتفانين والمتمسكين بالمبادئ والمحبين للعدالة والواقفين مع الحق. إن هدف حياتها ورسالتها الواضحة للإنسانية هو:
            </p>
            <div className="video-intro-quote">
              "لقد نسي الناس الله... فبالله عليكم! يجب على الناس أن يعرفوا خالقهم، وأن يتعرفوا على الأنبياء، والنبي محمد (صلى الله عليه وسلم)، وأهل البيت (عليهم السلام)، وأولياء الله، وأن يعملوا بتعاليم هذه الشخصيات العظيمة بإخلاص".
            </div>
            <p className="video-intro-conclusion">
              هذا هو الطريق الوحيد الذي يمكن أن يقود الإنسانية الضالة نحو الخلاص والسلام والنجاح. إن حياة السيدة نصرت فاطمة نقوي وشخصيتها وخدماتها هي مثال مشرق لنا جميعاً.
            </p>
          </div>
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
