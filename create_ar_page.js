const fs = require('fs');

const arDiaryContent = `import ShareWidget from '@/components/ShareWidget';

export default function Diary() {
  const diaryEntries = [
    {
      date: '23 سبتمبر 2026',
      mainTitle: 'صفحة من يوميات السيدة نصرت فاطمة نقوي',
      blocks: [
        {
          title: 'صرخة قلب مكسور: صدمة الجفاء في ديار المحبة',
          icon: '💔',
          text: 'سوريا ليست مجرد قطعة أرض، بل هي فصل عظيم ومقدس من التاريخ والروحانية. إنها الأرض المباركة التي ترقد فيها حفيدة رسول الله (ص)، الزهراء الثانية السيدة زينب (ع) والابنة الحبيبة لسيد الشهداء الإمام الحسين (ع)، السيدة سكينة (ع). بالإضافة إليهم، هذه الأرض الطاهرة هي المثوى الأخير لعدد لا يحصى من الأنبياء والصحابة والأولياء. إن روحانية هذه الأرض وحب هذه الشخصيات الطاهرة سكنت قلوبنا لدرجة أننا تخلينا عن طيب خاطر عن الحياة الفاخرة في مدينة مثل دبي، وأعمالنا التجارية الممتازة ومسكننا المريح.\\n\\nفي حب هذه الشخصيات العظيمة، استقرينا في سوريا لنعيش حياتنا في ظلهم. قضينا وقتنا وأموالنا هنا، وأسسنا أعمالاً جديدة، وشاركنا بالكامل في الأعمال الخيرية والاجتماعية. لقد جعلنا خدمة الزوار والمسافرين القادمين من أي ركن من أركان العالم مهمتنا، واستضفناهم بأفضل ما في وسعنا. هذا ليس سراً؛ كل شخص في المنطقة يشهد على ذلك، والسكان المحليون يعرفونني جيداً باسم "أم حيدر" وبسبب خدماتي الخالصة.\\n\\nولكن اليوم، القلب مثقل للغاية، وكتابة هذه الكلمات تجلب شعوراً بألم شديد. الأرض التي بنينا فيها اسماً طيباً بكل هذا الحب والمودة والإخلاص، وخدمنا الناس، في المقابل لم نتلق من السكان المحليين هناك سوى الألم والحزن والأذى. لقد زرعنا بذور الحب والوفاء، ولكن في المقابل واجهنا الخيانة والخسائر.\\n\\nبما أنني أقيم حالياً في المملكة المتحدة، مستغلين غيابي، تم نهب شقتنا في سوريا بلا رحمة العام الماضي، وسرقت أشياء ثمينة للغاية. وقمة الظلم هي أنه بالأمس فقط، أضرمت النار في هذه الشقة بالذات. هذه ليست مجرد خسارة في الممتلكات، بل هي قتل للثقة والإخلاص الذي وضعناه في هذا التراب وشعبه.\\n\\nالمكان الذي سكبنا فيه دماءنا وعرقنا لبناء سمعة من الشرف والاسم الطيب والحب، السلوك القاسي للناس هناك هو صدمة عميقة لا تنسى بالنسبة لنا. اليوم، هذه الكلمات ليست مجرد كتابة بل هي صرخة مؤلمة لقلب حزين يعبر عن اليأس بأننا أعطينا كل ما لدينا لنبقى أوفياء لهذه الأرض، ولكن في المقابل لم نعط سوى الرماد والضغائن.'
        }
      ]
    },
    {
      date: '20 سبتمبر 2026',
      mainTitle: 'رسالة اليوم من السيدة نصرت فاطمة نقوي',
      blocks: [
        {
          title: 'الثروة، الابتلاء، وحقوق العباد',
          icon: '⚖️',
          text: 'الثروة التي وهبها الله ليست مجرد نعمة، بل هي ابتلاء شديد. إن الثروة التي يملكها الأغنياء هي في الواقع أمانة للفقراء، وهم مجرد أمناء عليها. يوم القيامة، سيُسأل هؤلاء أصحاب السلطة والأثرياء بشدة: عندما كانت لديكم الموارد، لماذا لم تؤدوا حقوق المستحقين؟'
        },
        {
          title: 'التسامح الديني واحترام الإنسانية',
          icon: '🕊️',
          text: 'الهدف الأساسي للكتب السماوية الأربعة هو هداية وخلاص البشرية. هذه التعاليم تتطلب أن يتم احترام كل دين بصدق وإخلاص.\\n\\nيقول الله تعالى في سورة الأنعام: "وَلَا تَسُبُّوا الَّذِينَ يَدْعُونَ مِن دُونِ اللَّهِ فَيَسُبُّوا اللَّهَ عَدْوًا بِغَيْرِ عِلْمٍ".\\n\\nلذلك، لا تتحدثوا بسوء عن دين أي شخص، حتى لا يتحدث أحد بسوء عن دينكم في المقابل. هذا الاحترام المتبادل والتسامح هو أساس البشرية السلمية والموحدة.'
        },
        {
          title: 'روح الخدمة المتفانية لأهل البيت (ع)',
          icon: '🕋',
          text: 'إن أعظم وألمع أمثلة الإنسانية توجد في حياة النبي الأكرم (ص)، والإمام علي المرتضى (ع)، والإمام زين العابدين (ع). يشهد التاريخ أنه عندما تم تغسيل هذه الشخصيات الطاهرة بعد وفاتهم، كانت هناك ندوب عميقة على ظهورهم وأكتافهم.\\n\\nهذه العلامات لم تكن من السيوف، بل بسبب حمل أكياس ثقيلة من المؤن والإمدادات إلى منازل الفقراء في ظلام الليل لسنوات. تكمن عظمتهم في حقيقة أنه أثناء توزيع هذه المؤن، لم يسألوا أبداً عن حي أو طائفة أو مذهب أو دين أي شخص. سواء كان الشخص يهودياً أو مسيحياً أو منكراً لله أو ينتمي إلى أي دين آخر، في نظرهم هو أولاً وقبل كل شيء "عبد لله"، وبناءً على ذلك، ساعدوا الجميع بتفانٍ.'
        },
        {
          title: 'قصة النبي إبراهيم (ع) وسعة رحمة الرب',
          icon: '📖',
          text: 'لمحة جميلة من هذا الحب دون تمييز وُصفت في كتاب "بستان" للشيخ سعدي. كانت العادة المباركة للنبي إبراهيم (ع) أنه لم يكن يأكل أبداً بدون ضيف. حدث ذات مرة أن مر أسبوع كامل ولم يأت أي ضيف. خرج بحثاً عن ضيف. رأى رجلاً طاعناً في السن، فدعاه النبي إبراهيم (ع) إلى منزله لتناول وجبة بكل احترام.\\n\\nعندما قُدم الطعام، بدأ الرجل العجوز يأكل بصمت. سأل النبي إبراهيم (ع) مندهشاً: "أيها الشيخ المحترم! أليس من الأفضل أن تشكر الرب الذي يرزقك؟" أجاب الرجل الضعيف: "أنا عابد للنار". طلب منه النبي إبراهيم (ع) بغضب أن يغادر المائدة.\\n\\nفي تلك اللحظة بالذات، جاء وحي من الله: "يا إبراهيم! لقد أعطيت هذا الشخص الحياة لمدة مائة عام، ورزقته، ورغم كفره لم أقطع عنه طعامه وماءه قط. وأنت، عبدي، لم تستطع تحمله حتى لوجبة واحدة؟"\\n\\nشعر النبي إبراهيم (ع) بندم شديد. ركض فوراً حافي القدمين بحثاً عن الرجل العجوز. اعتذر وأعاده بكل احترام وأجلسه على المائدة. تفاجأ الرجل العجوز جداً بهذا السلوك وسأل عن السبب. قال النبي إبراهيم (ع) باكياً كيف أن رب العالمين وبخ خليله من أجل هذا الرجل العجوز.\\n\\nعند سماع ذلك، ذُهل الرجل العجوز، وامتلأت عيناه بالدموع، وصرخ قائلاً: "كم هو كريم ورحيم ولطيف هذا الرب الذي يوبخ نبيه الحبيب من أجل شخص عاصٍ مثلي!" فتاب على الفور بقلب صادق وآمن بوحدانية الله.'
        },
        {
          title: 'رسالة الإنسانية',
          icon: '🌟',
          text: 'في عالم اليوم، حيث غرق المجتمع في الحسد والحقد والتحيزات الدينية والطائفية، نحتاج أن نتذكر أن أعظم عبادة في نظر الله هي "الإنسانية". أولئك الذين يدعون التعاطف ظاهرياً ولكنهم يعانون داخلياً من الحقد والتمييز، يجب أن يتعلموا من شخصية هؤلاء العظماء أن الدين الحقيقي يعني نشر الحب، والاحترام دون تمييز، واحتضان كل إنسان.'
        }
      ]
    }
  ];

  return (
    <div className="home-wrapper" style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
      <section className="message-section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {diaryEntries.map((entry, entryIdx) => (
            <div className="message-paper" key={entryIdx}>
              <div className="message-header">
                <h2 className="message-main-title">{entry.mainTitle}</h2>
                <div className="message-divider"></div>
              </div>
              
              <div className="message-content-wrapper">
                {entry.blocks.map((msg, idx) => (
                  <div className="message-block" key={idx}>
                    <h3 className="message-block-title">
                      <span className="msg-icon">{msg.icon}</span>
                      {msg.title}
                    </h3>
                    {msg.text.split('\\n\\n').map((paragraph, pIdx) => (
                      <p className="message-block-text" key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="message-footer">
                <div className="signature-box">
                  <span className="sig-name">نصرت فاطمة نقوي</span>
                  <span className="sig-title">(محامية الإنسانية)</span>
                  <span className="sig-date">{entry.date}</span>
                </div>
                <ShareWidget title={entry.mainTitle} text={entry.blocks[0].title} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}`;

const arPageContent = `import ShareWidget from '@/components/ShareWidget';

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
`;

fs.mkdirSync('app/ar/diary', { recursive: true });
fs.writeFileSync('app/ar/diary/page.js', arDiaryContent);
fs.writeFileSync('app/ar/page.js', arPageContent);
console.log('Created ar diary and updated ar page.');
