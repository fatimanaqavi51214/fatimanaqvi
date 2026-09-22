export default function Home() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1789978085/Nusrat_Fatima_Naqvi.webm';
  const videoHeading = '🎥 An Introductory Glimpse';

  const todaysMessage = [
    {
      title: 'Wealth, Trial, and the Rights of People',
      icon: '⚖️',
      text: 'The wealth bestowed by nature is not merely a blessing, but a severe trial. The wealth held by the affluent is actually a trust for the poor, of which they are merely custodians. On the Day of Judgment, these people of authority and the wealthy will be strictly questioned as to why, when they had the resources, they did not fulfill the rights of the deserving?'
    },
    {
      title: 'Religious Tolerance and Respect for Humanity',
      icon: '🕊️',
      text: 'The fundamental purpose of all four divinely revealed books is the guidance and salvation of mankind. These teachings demand that every religion be respected with utmost sincerity.\n\nAllah Almighty says in Surah Al-An\'am: "And (O Muslims!) do not insult those (false gods) whom they invoke other than Allah, lest they insult Allah in enmity without knowledge."\n\nTherefore, do not speak ill of anyone\'s religion, so that in return, no one speaks ill of yours. This mutual respect and tolerance is the foundation of a peaceful and united humanity.'
    },
    {
      title: 'The Selfless Spirit of Service of the Ahlul Bayt (a.s.)',
      icon: '🕋',
      text: 'The greatest and brightest examples of humanity are found in the lives of the Holy Prophet (PBUH), Hazrat Ali Al-Murtaza, and Imam Zain-ul-Abideen (a.s.). History bears witness that when these pure personalities were bathed after their passing, there were deep scars on their backs and shoulders.\n\nThese marks were not from swords, but were caused by carrying heavy sacks of rations and supplies to the homes of the poor in the darkness of the night for years. Their greatness lay in the fact that while distributing these rations, they never asked about anyone\'s neighborhood, caste, sect, or religion. Whether someone was Jewish, Christian, a disbeliever, or belonged to any other religion, in their eyes, he was first and foremost a "servant of God," and based on this, they selflessly helped everyone.'
    },
    {
      title: 'The Incident of Hazrat Ibrahim (a.s.) and the Vastness of the Lord\'s Mercy',
      icon: '📖',
      text: 'A beautiful glimpse of this love without discrimination is described in Sheikh Saadi\'s book "Bustan." It was the blessed habit of Hazrat Ibrahim (a.s.) that he would never eat without a guest. Once it happened that a whole week passed and no guest arrived. He went out in search of a guest. He saw a very old man, and Hazrat Ibrahim (a.s.) invited him to his house for a meal with great respect.\n\nWhen the food was served, the old man started eating silently. Hazrat Ibrahim (a.s.) asked in surprise: "O respected elder! Is it not better to thank the Lord who provides sustenance?" The frail man replied: "I am a worshipper of fire." Hazrat Ibrahim (a.s.) angrily asked him to leave the table.\n\nAt that very moment, a revelation came from Allah: "O Ibrahim! I gave this person life for a hundred years, provided him sustenance, and despite his disbelief, never stopped his food and water. And you, my servant, could not tolerate him for even a single meal?"\n\nHazrat Ibrahim (a.s.) was overcome with intense remorse. He immediately ran barefoot in search of the old man. He apologized and brought him back with great respect and seated him at the table. The old man was very surprised at this behavior and asked the reason. Hazrat Ibrahim (a.s.) weeping said how the Lord of the Universe had reprimanded His friend for the sake of this old man.\n\nUpon hearing this, the old man was stunned, tears welled up in his eyes, and he cried out: "How Generous, Merciful, and Kind is that Lord who is scolding His beloved Prophet for a disobedient person like me!" He immediately repented with a sincere heart and embraced faith in the Oneness of Allah.'
    },
    {
      title: 'Message of Humanity',
      icon: '🌟',
      text: 'In today\'s world, when society is engulfed in jealousy, malice, and religious and sectarian prejudices, we need to remember that the greatest act of worship in the sight of God is "Humanity." Those who outwardly claim sympathy but inwardly suffer from malice and discrimination should learn from the character of these great personalities that true religion means spreading love, respecting without discrimination, and embracing every human being.'
    }
  ];

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
      {/* Video Section */}
      <section className="video-section">
        <h2 className="section-title glow-text text-center">{videoHeading}</h2>
        <div className="video-container-modern">
          <video src={videoLink} controls playsInline preload="metadata" className="promo-video" />
        </div>
      </section>

      {/* Today's Message Section */}
      <section className="message-section">
        <div className="container">
          <div className="message-paper">
            <div className="message-header">
              <h2 className="message-main-title">Today's Message from Madam Nusrat Fatima Naqvi</h2>
              <div className="message-divider"></div>
            </div>
            
            <div className="message-content-wrapper">
              {todaysMessage.map((msg, idx) => (
                <div className="message-block" key={idx}>
                  <h3 className="message-block-title">
                    <span className="msg-icon">{msg.icon}</span>
                    {msg.title}
                  </h3>
                  {msg.text.split('\n\n').map((paragraph, pIdx) => (
                    <p className="message-block-text" key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>

            <div className="message-footer">
              <div className="signature-box">
                <span className="sig-name">Nusrat Fatima Naqvi</span>
                <span className="sig-title">(Advocate of Humanity)</span>
                <span className="sig-date">September 20, 2026</span>
              </div>
            </div>
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
          </div>
        </div>
      </section>

    </div>
  );
}
