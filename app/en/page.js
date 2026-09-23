import ShareWidget from '@/components/ShareWidget';
export default function Home() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1789978085/Nusrat_Fatima_Naqvi.webm';
  const videoHeading = '🎥 An Introductory Glimpse';

  

  const ideology = [
    { icon: '🕊️', title: 'Humanity and Peace', desc: 'Islam is a religion of peace and security. Supporting every poor, distressed, and needy person is our primary duty.' },
    { icon: '🤝', title: 'Unity of the Ummah', desc: 'All Muslims must unite and forget old differences. Present Islam as a religion of welfare.' },
    { icon: '🌍', title: 'Ayuda International', desc: 'Commitment to international welfare work, Islamic cemeteries, and selfless service to suffering humanity.' },
    { icon: '💡', title: 'Awareness and Consciousness', desc: 'The eradication of ignorance from society is not hidden in formal education alone, but in the implementation of the teachings of the pure personalities.' },
  ];

  const businesses = [
    { 
      country: 'United Arab Emirates', 
      icon: '🇦🇪', 
      details: [
        'Started businesses in Dubai and Sharjah from the 1970s',
        'Block factory in Sharjah and "Al-Rafidain General Decor" (1977)',
        '"Garage Al-Rafidain" vehicle repair garage (1980)',
        'Partnership in "Mat\'am Al-Tuma" restaurant in Ajman',
        'Served as Sales Manager in "Asli General Trading" (1997)'
      ] 
    },
    { 
      country: 'Syria (Damascus)', 
      icon: '🇸🇾', 
      details: [
        'A magnificent hotel and various flats in the historic city of Damascus',
        'A huge import-export network (according to the Chamber of Commerce 2010)',
        'Extensive trade in clothes, electronics, books, and computers',
        'Global trade of medical and laser equipment and construction materials'
      ] 
    },
    { 
      country: 'United Kingdom and Spain', 
      icon: '🇬🇧', 
      details: [
        'Current residence in the UK and Spain',
        'Excellent supervision of global business and social activities from there',
        'Extension of welfare vision to Europe and establishment of religious centers'
      ] 
    }
  ];

  const charities = [
    { 
      year: 'Donations and Constructions in Syria', 
      title: 'Grand Official and Social Donation', 
      desc: 'In 1982, donated prime land valued at 25 million Syrian Liras to the Syrian government for welfare works. Built "Hussainiya Zainab Al-Zahra" in 1981. Spent 1.5 million Liras on the construction of the Bab al-Saghir cemetery. Donated land for a dispensary in 1996 and provided medical equipment to Mustawsaf Al-Zahra (welfare clinic) in 2007.' 
    },
    { 
      year: 'Welfare Centers in UAE', 
      title: 'Establishment of Islamic Center and Orphanage', 
      desc: 'In 1989, acquired 40,000 meters of land near Abu Dhabi Airport and dedicated it for an Islamic center, orphanage, Quranic Tafseer center, mosque, and male/female accommodations for laborers (Pakistani, Indian, Bengali).' 
    },
    { 
      year: 'Charitable Works in Pakistan and India', 
      title: 'Construction of Shrines and Aid to the Poor', 
      desc: 'Donated millions of rupees and foreign currency for the construction and painting of Data Darbar (1990), Bibi Pak Daman (1989), and Darbar Bari Imam (1995). Paid immense amounts for the marriage, training, and food of poor girls in Allahabad (India). A large piece of land is allocated in Pakistan for a factory for the poor and a Center for Humanity.' 
    },
    { 
      year: 'Religious and Preaching Services', 
      title: 'Cooperation with Ahlul Bayt World Assembly', 
      desc: 'In January 1994, donated valuable land worth 4 million Syrian Pounds (worth millions of rupees today) to the Ahlul Bayt (a.s.) World Assembly so that a grand library, Hussainiya, guest house, and office could be built there.' 
    }
  ];

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="hero-modern">
        <div className="hero-content">
          <p className="hero-desc">
            A great woman with constant struggle and a heart for humanity.
            Despite worldly successes, she kept her soul connected to the Creator of the Universe and the service of humanity.
          </p>
          <div className="hero-quote">
            "The fundamental purpose of all four divinely revealed books is the guidance and salvation of mankind. These teachings demand that every religion be respected from the heart."
            <span style={{ fontSize: '1rem', color: '#55efc4', display: 'block', marginTop: '10px' }}>Nusrat Fatima Naqvi</span>
            <ShareWidget title="Quote by Nusrat Fatima Naqvi" text="The fundamental purpose of all four divinely revealed books is the guidance and salvation of mankind." />
            <div style={{ marginTop: '30px', lineHeight: '2', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                <span>May you never show me the day, my Lord</span>
                <span>That I become proud of myself</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                <span>Keep me in the hearts of everyone in such a way</span>
                <span>That everyone is compelled to pray for me</span>
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
          <ShareWidget title="An Introductory Glimpse of Madam Nusrat Fatima Naqvi" />
        </div>
      </section>

      {/* Detailed Business Section */}
      <section className="business-detailed-section">
        <div className="container">
          <h2 className="section-title text-center">Global Business Achievements</h2>
          <p className="text-center" style={{ color: '#b0c4de', marginBottom: '40px', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px' }}>
            A highly active and courageous woman who has proven that with determination and courage, the flags of success can be planted in every field.
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
            <ShareWidget title="Global Business Achievements" />
          </div>
        </div>
      </section>

      {/* Detailed Philanthropy / Charities Section */}
      <section className="charity-timeline-section">
        <div className="container">
          <h2 className="section-title text-center">Grand Philanthropic and Social Services</h2>
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
            <ShareWidget title="Grand Philanthropic and Social Services" />
          </div>
        </div>
      </section>

      {/* Ideology Section */}
      <section className="ideology-section">
        <div className="container">
          <h2 className="section-title text-center">Ideologies and Thoughts (Voice of the Creation)</h2>
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
              Do good deeds as long as your feet are above the ground, 
              for once you go beneath the earth, you yourself will be in need of prayers and Fatiha.
            </p>
            <span className="quote-author">Nusrat Fatima Naqvi</span>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <ShareWidget title="Ideology and Thoughts (Voice of the People)" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
