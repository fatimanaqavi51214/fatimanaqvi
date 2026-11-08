import ShareWidget from '@/components/ShareWidget';
export default function Home() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1794157060/Madam_Nusrat_Fatima_Naqvi_A_Shining_Example_of_Patriotism_Philanthropy_and_Humanity.mp4';
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
          <ShareWidget title="Madam Nusrat Fatima Naqvi — A Shining Example of Patriotism, Philanthropy, and Humanity" />
        </div>

        {/* Video Profile / Introductory Showcase */}
        <div className="video-intro-container">
          <div className="video-intro-header">
            <h3 className="video-intro-title">Madam Nusrat Fatima Naqvi — A Shining Example of Patriotism, Philanthropy, and Humanity</h3>
            <div className="video-intro-divider"></div>
          </div>

          <div className="video-intro-lead">
            <p>
              Madam Nusrat Fatima Naqvi is a true and genuine patriotic Pakistani, a dignified, and a great woman. Although she has spent most of her life engaged in vast business and social activities in various countries around the world, the love for her beloved homeland in her heart has never diminished. The passion and love for her country have always surged in her heart, and she has made every possible effort to illuminate Pakistan's name in every corner of the world.
            </p>
          </div>

          <div className="video-intro-grid">
            <div className="video-intro-card">
              <div className="card-head">
                <span className="card-icon">🇵🇰</span>
                <h4>Love for the Green Passport and National Pride</h4>
              </div>
              <p>
                The most magnificent and clear proof of her patriotism is that despite achieving immense global success and spending a long time abroad, she never acquired the citizenship of any other country. She is immensely proud of her country's 'Green Passport', upon which the golden principle of the founder of Pakistan, "Faith, Unity, Discipline", serves as a guiding light for her. She proudly introduces her passport to people of other countries, saying, "Look, 'Faith, Unity, Discipline' is written on our Pakistani passport." Her love and devotion for Quaid-e-Azam Muhammad Ali Jinnah and the thinker of Pakistan, Allama Muhammad Iqbal, is a prominent part of her personality. Driven by this same spirit of patriotism, despite living in foreign lands, she preferred to marry a Pakistani.
              </p>
            </div>

            <div className="video-intro-card">
              <div className="card-head">
                <span className="card-icon">🤝</span>
                <h4>Patronage of Pakistanis Abroad</h4>
              </div>
              <p>
                Madam Nusrat Fatima Naqvi has rendered immense services not only to Pakistan but also to Pakistanis living abroad. When her business was at its peak in Dubai, she provided employment opportunities to countless Pakistanis through her companies named 'Rashidiya Tiles' and 'Al-Rafidain'. She economically empowered her compatriots and arranged excellent accommodation and other facilities for them. Similarly, in Syria, she has rendered numerous services to guide and assist Pakistani tourists and pilgrims (Zaireen).
              </p>
            </div>

            <div className="video-intro-card">
              <div className="card-head">
                <span className="card-icon">🏢</span>
                <h4>Business Services in Various Countries</h4>
              </div>
              <p>
                Madam Nusrat Fatima Naqvi started various businesses in Dubai and Sharjah from the 1970s. Her business ownership included a block factory in Sharjah, 'Al-Rafidain General Decor' (1977), a car repair garage named 'Garage Al-Rafidain' (1980), and a partnership in 'Mat\'am Al-Ta\'ma' (restaurant) in Ajman. Furthermore, in 1997, she also managed top administrative affairs as a Sales Manager at 'Asli General Trading'. A massive part of her business exists in Syria, where she owns a magnificent hotel and various flats in a historic city like Damascus. According to the 2010 Damascus Chamber of Commerce documents, she is the owner of a huge import-export network, which includes an extensive trade of clothes, electronics, books, computers, medical and laser equipment, and construction materials. According to a Pakistani embassy document (2025), she is currently residing in the UK and, by the grace of God, is successfully running her global business and social activities from there.
              </p>
            </div>

            <div className="video-intro-card">
              <div className="card-head">
                <span className="card-icon">🌧️</span>
                <h4>Assisting Compatriots During Natural Disasters</h4>
              </div>
              <p>
                Her heart always beats with sympathy for the poor, destitute, and helpless. Whenever Pakistan faced natural disasters like earthquakes or floods, Madam Nusrat Fatima Naqvi provided aid wholeheartedly. She has been regularly sending several truckloads consisting of blankets, tents, mattresses, clothes, water coolers, and children's garments every year for the deserving people in flood-affected areas to wipe the tears of her afflicted brothers and sisters.
              </p>
            </div>

            <div className="video-intro-card">
              <div className="card-head">
                <span className="card-icon">🕊️</span>
                <h4>Service to Humanity — Without Discrimination of Religion or Nation</h4>
              </div>
              <p>
                Her charitable services are not limited to any specific religion, sect, or creed; her heart beats only for humanity. She has made it her motto to serve all human beings without discrimination of color and race. She generously distributed funds, blankets, shawls, and mats at the shrines of Pakistan's great Sufi saints, such as Data Darbar, Bibi Pak Daman, Bari Imam, and other places. What could be a greater example of her tolerance than the fact that, along with mosques, she has also given countless donations to the places of worship of minorities—temples and gurdwaras—in the form of rations, mats, blankets, and cash.
              </p>
            </div>

            <div className="video-intro-card">
              <div className="card-head">
                <span className="card-icon">🌍</span>
                <h4>Charitable Achievements in Syria, Lebanon, and Sudan</h4>
              </div>
              <p>
                She holds a special devotion for the holy land of Syria, which is the land of prophets and saints. A major purpose of her presence there is the service of humanity. The continuous service to Pakistani pilgrims and tourists in Syria is ongoing. In addition, in collaboration with the Syrian government, she built orphanages, dispensaries, and pathways, and gave numerous donations. This is why the people of Syria hold her in very high esteem. Moreover, her philanthropic circle extends to the construction of orphanages in Lebanon and aid for earthquake victims in Sudan.
              </p>
            </div>
          </div>

          <div className="video-intro-message-card">
            <div className="message-head">
              <span className="message-icon">✨</span>
              <h4>Aim and Message</h4>
            </div>
            <p>
              Personally, Madam Nusrat Fatima Naqvi likes selfless people who are principled, just, and stand by the truth. The aim of her life and her clear message for humanity is:
            </p>
            <div className="video-intro-quote">
              "People have forgotten Allah... For God's sake! People must recognize their Creator, acquire the recognition of the Prophets, Prophet Muhammad (PBUH), the Ahl al-Bayt (peace be upon them), and the Awliya Allah (saints), and sincerely act upon the teachings of these great personalities."
            </div>
            <p className="video-intro-conclusion">
              This is the only path that can lead misguided humanity towards salvation, peace, and success. The life, character, and services of Syeda Nusrat Fatima Naqvi are a shining example for us all.
            </p>
          </div>
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
