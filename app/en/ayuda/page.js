'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AyudaPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [viewerMode, setViewerMode] = useState('google'); // 'google' | 'native'

  // PDF Links (Cloudinary and Local)
  const pdfCloudinaryUrl =
    'https://res.cloudinary.com/b7xbeztp/image/upload/v1789917153/Voice_of_the_Creation.pdf'; // Using English PDF link
  const pdfLocalUrl = '/Voice_of_the_Creation.pdf';

  // Google Docs Embedded Viewer Link
  const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(
    pdfCloudinaryUrl
  )}&embedded=true`;

  // Detailed Historical Services and Donations Data
  const milestones = [
    {
      year: '1982',
      date: 'July 25, 1982',
      location: 'Damascus, Syria',
      title: 'Historic Donation to Sunni Waqf ($500,000)',
      amount: '$500,000 (Cash & Land)',
      desc: 'Handed over cash and land to the Minister of Awqaf in Damascus (Muhammad Muhammad Khatib), which was used to build formal residential settlements for poor refugees and deserving people from Palestine, Lebanon, Afghanistan, and Syria.',
      icon: '🏘️',
      category: 'housing'
    },
    {
      year: '1983',
      date: '1983',
      location: 'Damascus, Syria',
      title: 'Vast Land to Red Crescent for Orphanage',
      amount: '24,166 sq. meters of land',
      desc: 'Donated 24,166 square meters of land to the Red Crescent for a grand orphanage project.',
      icon: '👶',
      category: 'orphan'
    },
    {
      year: '1989',
      date: '1989',
      location: 'Abu Dhabi, UAE',
      title: '40,000 sq. meters Land and Islamic Welfare Center',
      amount: '40,000 sq. meters of land',
      desc: 'Acquired 40,000 meters of land near the airport from the Ministry of Awqaf and dedicated it for an Islamic center, orphanage, Quranic Tafseer center, and separate male/female accommodations for laborers (Pakistani, Baloch, Bengali, Indian).',
      icon: '🕌',
      category: 'welfare'
    },
    {
      year: '1989',
      date: '1989',
      location: 'Lahore, Pakistan',
      title: 'Construction and Decoration of Bibi Pak Daman (a.s.) Shrine',
      amount: '4,000 Dirhams and 2,000 Pounds Sterling',
      desc: 'Paid extensive funds for the construction, painting, and decoration of the holy shrine of Bibi Pak Daman (a.s.) in Lahore.',
      icon: '🌸',
      category: 'religious'
    },
    {
      year: '1989',
      date: '1989',
      location: 'Allahabad, India',
      title: 'Sponsorship of Orphans and Marriages of Deserving Girls',
      amount: 'Special Welfare Funds',
      desc: 'Paid for the formal education, food, and care of poor children and the marriage expenses of girls from destitute families in Allahabad.',
      icon: '💝',
      category: 'welfare'
    },
    {
      year: '1990',
      date: '1990',
      location: 'Lahore, Pakistan',
      title: 'Constructions at Hazrat Data Ganj Bakhsh (Data Darbar)',
      amount: 'Substantial Financial Donation',
      desc: 'Donated a large sum for the architectural expansion of the shrine of Hazrat Ali Hujwiri Data Ganj Bakhsh and for the convenience of pilgrims in Lahore.',
      icon: '🕌',
      category: 'religious'
    },
    {
      year: '1994',
      date: 'April 26, 1994',
      location: 'Damascus, Syria / Iran',
      title: 'Library, Clinic, and Quran Tafseer Center',
      amount: '4 Million Syrian Pounds',
      desc: 'Delegated a grand piece of land to Sheikh Badyani of Iran so that a central institution for a library, clinic, Hussainiya, guest house, and Quranic Tafseer could be established there.',
      icon: '📚',
      category: 'religious'
    },
    {
      year: '1995',
      date: '1995',
      location: 'Islamabad, Pakistan',
      title: 'Constructions at Darbar Hazrat Bari Imam Sarkar',
      amount: '200,000 PKR and $1,800',
      desc: 'Provided cash assistance for construction activities at the holy shrine of Hazrat Sakhi Shah Latif Bari Imam in Islamabad.',
      icon: '🌟',
      category: 'religious'
    },
    {
      year: '1996',
      date: '1996',
      location: 'Syria',
      title: 'Free Dispensary for the Poor and Children',
      amount: 'Donation of Land for Clinic',
      desc: 'Established a dispensary by dedicating land for the medical treatment and free medical facilities of children and under-resourced destitute classes.',
      icon: '💊',
      category: 'health'
    },
    {
      year: '2007',
      date: '2007',
      location: 'Syria',
      title: 'Medical Machinery and Aid to Mustawsaf Al-Zahra Clinic',
      amount: 'Modern Medical Equipment',
      desc: 'Presented a donation of the latest medical machinery, laser equipment, and essential items for deserving patients to the welfare clinic Mustawsaf Al-Zahra.',
      icon: '🏥',
      category: 'health'
    },
    {
      year: 'Continuous',
      date: 'Spanning Decades',
      location: 'Damascus, Syria',
      title: 'Cemetery Constructions at Bab al-Saghir',
      amount: '1.5 Million Syrian Pounds',
      desc: 'Fully participated financially in the construction, repair, boundary walls, and management of the cemetery in the historic Bab al-Saghir premises.',
      icon: '⚰️',
      category: 'welfare'
    },
    {
      year: 'Future',
      date: 'Ongoing Project',
      location: 'Pakistan',
      title: 'Center for Humanity, Welfare Factory & Housing Project',
      amount: 'Vast Owned Land in Pakistan',
      desc: 'Vision to allocate vast personal land in Pakistan for housing the poor, a grand mosque, a Center for Humanity, and a welfare factory so that poor people can get dignified employment.',
      icon: '🏭',
      category: 'welfare'
    }
  ];

  const filteredMilestones =
    activeTab === 'all'
      ? milestones
      : activeTab === 'housing'
      ? milestones.filter((m) => m.category === 'housing' || m.category === 'welfare')
      : activeTab === 'religious'
      ? milestones.filter((m) => m.category === 'religious')
      : milestones;

  return (
    <div className="container ayuda-page-wrapper">
      {/* --- HEADER AND VIDEOS --- */}
      <section className="hero-modern" style={{ padding: '40px 20px 20px' }}>
        <div className="hero-content">
          <h1 className="hero-title">Nusrat Fatima Naqvi</h1>
          <h2 className="hero-subtitle" style={{ marginTop: '10px', color: '#55efc4' }}>( Advocate of Humanity )</h2>
          <p className="hero-desc" style={{ marginTop: '15px', fontSize: '1.2rem' }}>Continuous Struggle in the Service of Humanity</p>
        </div>
      </section>

      <section className="video-section" style={{ padding: '0 20px 40px' }}>
        <div className="video-container-modern" style={{ maxWidth: '1000px', margin: '0 auto', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <video 
            src="https://res.cloudinary.com/b7xbeztp/video/upload/v1789991996/ayuda-cover.mp4" autoPlay loop muted playsInline style={{ width: "100%", display: "block" }} />
        </div>
      </section>

      <section className="video-section" style={{ padding: '40px 20px', background: 'rgba(255,255,255,0.02)' }}>
        <h2 className="section-title glow-text text-center" style={{ marginBottom: '30px' }}>Video Introduction of Ayuda</h2>
        <div className="video-container-modern" style={{ maxWidth: '1000px', margin: '0 auto', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <video 
            src="https://res.cloudinary.com/b7xbeztp/video/upload/v1789891305/sada-e-khalq-urdu-webm-.webm" controls autoPlay={false} playsInline 
            preload="metadata" 
            style={{ width: '100%', display: 'block' }} 
          />
        </div>
      </section>
      {/* --- END HEADER AND VIDEOS --- */}


      {/* PDF Quick Modal */}
      {showPdfModal && (
        <div className="pdf-modal-overlay" onClick={() => setShowPdfModal(false)}>
          <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>📖 Book "Voice of the Creation" — Author: Nusrat Fatima Naqvi</h3>
              <button className="close-btn" onClick={() => setShowPdfModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="pdf-info-banner">
                <div className="book-cover-mockup">
                  <span className="book-symbol">📜</span>
                  <h4>Voice of the Creation</h4>
                  <p>Advocate of Humanity, Nusrat Fatima Naqvi</p>
                  <span className="edition-tag">Complete 17 Pages</span>
                </div>
                <div className="book-details">
                  <h4>Key Contents of the Book:</h4>
                  <ul>
                    <li>✓ Conditions of the Muslim Ummah and the call for global peace</li>
                    <li>✓ Eradication of sectarianism and unity among Muslims</li>
                    <li>✓ The philosophy of true wealth (The inspiring incident of the goat's shoulder)</li>
                    <li>✓ Raising children: Children learn from actions like a computer</li>
                    <li>✓ Millions in donations by Foundation Ayuda International since 1982</li>
                    <li>✓ Registered Foundation in Europe (30,000 Euro Bank Deposit)</li>
                  </ul>
                  <div className="modal-actions">
                    <a
                      href={pdfCloudinaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download="Voice_of_the_Creation_Nusrat_Fatima_Naqvi.pdf"
                      className="btn-primary-golden"
                    >
                      📥 Download Original PDF
                    </a>
                    <a
                      href="#book-reader"
                      onClick={() => setShowPdfModal(false)}
                      className="btn-secondary-outline"
                    >
                      📖 Read Online on Page
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Online Digital Book Reader Section */}
      <section id="book-reader" className="ayuda-reader-section">
        <div className="reader-container-card">
          <div className="reader-header-bar">
            <div className="reader-title-area">
              <span className="reader-badge">📖 Online Digital Library</span>
              <h2 className="reader-title">Book: Voice of the Creation — Complete Online Reading</h2>
              <p className="reader-subtitle">
                You can read all the pages of the book right here by scrolling or flipping without leaving the page.
              </p>
            </div>

            {/* Reader Controls */}
            <div className="reader-controls-bar">
              <div className="mode-toggle-group">
                <button
                  className={`reader-mode-btn ${viewerMode === 'google' ? 'active' : ''}`}
                  onClick={() => setViewerMode('google')}
                  title="Best mode for mobile phones and all browsers"
                >
                  📱 Mobile Friendly Reader
                </button>
                <button
                  className={`reader-mode-btn ${viewerMode === 'native' ? 'active' : ''}`}
                  onClick={() => setViewerMode('native')}
                  title="High resolution browser reader for desktop"
                >
                  💻 Desktop Reader (Native)
                </button>
              </div>

              <div className="reader-action-links">
                <a
                  href={pdfCloudinaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reader-icon-link"
                  title="Open full screen in a new window"
                >
                  🔍 Open Full Screen
                </a>

                <a
                  href={pdfCloudinaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Voice_of_the_Creation_Nusrat_Fatima_Naqvi.pdf"
                  className="reader-icon-link download-btn"
                  title="Download PDF file"
                >
                  📥 Download PDF
                </a>
              </div>
            </div>
          </div>

          {/* Reader Frame */}
          <div className="reader-frame-wrapper">
            {viewerMode === 'google' ? (
              <iframe
                src={googleViewerUrl}
                title="Voice of the Creation - Online Reader"
                className="book-reader-iframe"
                loading="lazy"
                allowFullScreen
              />
            ) : (
              <iframe
                src={`${pdfLocalUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                title="Voice of the Creation - PDF Reader"
                className="book-reader-iframe"
                loading="lazy"
              />
            )}
          </div>

          <div className="reader-footer-tips">
            <span className="tip-item">💡 <strong>Tip:</strong> Scroll down with your mouse or finger to go to the next pages, or click the page numbers provided above and below.</span>
            <span className="tip-item">🔍 Use the <strong>(+)</strong> and <strong>(-)</strong> buttons in the reader to zoom in or zoom out.</span>
          </div>
        </div>
      </section>

      {/* Inspiring Quotes and Golden Sayings */}
      <section className="ayuda-quotes-section">
        <h2 className="section-title">✨ Golden Sayings and Insights of "Voice of the Creation"</h2>
        
        <div className="quotes-grid">
          <div className="quote-card">
            <div className="quote-icon">💫</div>
            <blockquote>
              "The condition of a nation cannot change until the nation itself thinks of changing its condition."
            </blockquote>
            <cite>— Divine Command (Holy Quran)</cite>
          </div>

          <div className="quote-card">
            <div className="quote-icon">⚔️</div>
            <blockquote>
              "Death with dignity is better than a life of humiliation."
            </blockquote>
            <cite>— Saying of Imam Hussain (peace be upon him)</cite>
          </div>

          <div className="quote-card highlight-quote">
            <div className="quote-icon">💝</div>
            <blockquote>
              "Man thinks that what is in his bank account is his wealth. But true wealth is what you give in the way of Allah and secure forever in the account of the hereafter!"
            </blockquote>
            <cite>— Madam Nusrat Fatima Naqvi (Voice of the Creation)</cite>
          </div>

          <div className="quote-card">
            <div className="quote-icon">🌱</div>
            <blockquote>
              "Children are like a computer; they learn exactly what their parents practically do. True affection is that which is shown to a poor and ragged person without any selfish motive."
            </blockquote>
            <cite>— Madam Nusrat Fatima Naqvi</cite>
          </div>
        </div>
      </section>

      {/* Historic Donations and Services of Foundation Ayuda International */}
      <section id="services-milestones" className="ayuda-milestones-section">
        <div className="section-header-flex">
          <div>
            <h2 className="section-title">🏛️ Foundation Ayuda International: Historic Services</h2>
            <p className="section-subtitle">
              A comprehensive overview of unforgettable philanthropic donations paid from the personal business and property of Madam Nusrat Fatima Naqvi
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="milestone-tabs">
            <button
              className={`m-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Services ({milestones.length})
            </button>
            <button
              className={`m-tab-btn ${activeTab === 'housing' ? 'active' : ''}`}
              onClick={() => setActiveTab('housing')}
            >
              Housing & Public Welfare
            </button>
            <button
              className={`m-tab-btn ${activeTab === 'religious' ? 'active' : ''}`}
              onClick={() => setActiveTab('religious')}
            >
              Religious & Spiritual Centers
            </button>
          </div>
        </div>

        <div className="milestone-cards-grid">
          {filteredMilestones.map((item, idx) => (
            <div className="milestone-card" key={idx}>
              <div className="card-top-bar">
                <span className="m-icon">{item.icon}</span>
                <span className="m-year-badge">{item.year}</span>
              </div>
              <h3 className="m-title">{item.title}</h3>
              <div className="m-amount-tag">
                <span>💰 Donation: </span>
                <strong>{item.amount}</strong>
              </div>
              <p className="m-desc">{item.desc}</p>
              <div className="card-footer-meta">
                <span className="m-location">📍 {item.location}</span>
                {item.date && <span className="m-date">🗓️ {item.date}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Model Islamic Cemetery and Future Vision */}
      <section id="cemetery-vision" className="ayuda-cemetery-section">
        <div className="cemetery-inner-card">
          <div className="cemetery-text">
            <span className="sub-badge">⚰️ Comprehensive Plan for Afterlife Care and Dignified Burial</span>
            <h2>Grand Vision of Model Islamic Cemetery and Welfare Center</h2>
            <p>
              The fundamental focus of Madam Nusrat Fatima Naqvi's speeches has always been the concern for the hereafter and preparation for death:
            </p>
            <blockquote className="cemetery-quote">
              "Ultimately everyone has to die, who will live forever? Wisdom dictates that we do not die in negligence. We should be concerned that if death comes right now, where will our funeral go, is the shroud pure and halal or not? What a great act of charity it is to arrange a burial place for the poor and destitute travelers!"
            </blockquote>
            
            <div className="cemetery-features-grid">
              <div className="c-feature">
                <span className="cf-icon">🕌</span>
                <h4>Free Shroud, Bathing & Funeral Prayer</h4>
                <p>Dignified and Islamic arrangements for the destitute, helpless, and travelers suffering sudden death</p>
              </div>

              <div className="c-feature">
                <span className="cf-icon">📖</span>
                <h4>Quran Recitation and Majalis Hall</h4>
                <p>A dedicated place for gatherings and prayers for the conveying of rewards and peace of the soul</p>
              </div>

              <div className="c-feature">
                <span className="cf-icon">🏛️</span>
                <h4>Legal Approval in Europe</h4>
                <p>Formally registered foundation with a bank deposit of 30,000 Euros</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Summary and Full Text of the Book */}
      <section id="book-full-text" className="ayuda-fulltext-section">
        <div className="text-container-card">
          <div className="book-text-header">
            <h2>📜 Book "Voice of the Creation" — Author: Nusrat Fatima Naqvi (Summary & Articles)</h2>
            <p className="author-tag">Chairperson Foundation Ayuda International (Advocate of Humanity)</p>
          </div>

          <div className="prose-content">
            <h3>Causes of Restlessness, Oppression, and Apathy in the World</h3>
            <p>
              Why is it that most countries in the world are victims of war and unrest? Selfishness prevails everywhere. Worldly glitter has overshadowed humanity; the lust for wealth has made humans cruel and ruthless. Massacres rule. The permissible (Halal) is being declared impermissible (Haram) and vice versa. New methods are being invented to humiliate Muslims. Sometimes a mosque is demolished, sometimes the veil is disrespected, and sometimes provocations are made through blasphemous caricatures. Under some pretext or another, heaps of corpses are piled up. Humans, despite being the crown of creation, have not understood their true value.
            </p>
            <p>
              Distance from the One God and disobedience to heavenly books are making us worse day by day. Where will this condition take us, how long will we remain part of this corruption? The Divine Command is:
              <strong> "The condition of a nation cannot change until the nation itself thinks of changing its condition."</strong>
            </p>

            <h3>Islam: The Cradle of Peace and the High Status of Women</h3>
            <p>
              Let us together awaken our conscience and tell the world that Islam is indeed a religion of peace and security, and women hold a high status in it. The Master's saying is: <em>"Do good deeds as long as your feet are above the ground, for once you go beneath the earth, you yourself will be in need of prayers and Fatiha."</em> Jihad is being termed extremism and the Muslim nation is being branded with titles of usurpers and terrorists. Let us unite to answer the oppressor by following the commands of the Last Prophet (PBUH) and the Ahlul Bayt (a.s.). Every oppressor is inherently cowardly and hollow. Do not fear, introduce yourselves with bravery. Unite to teach the lesson of humanity so that every person in the world, regardless of their country, religion, or region, can live a prosperous and peaceful life.
            </p>

            <h3>Eradication of Sectarianism and Unity Among Muslims</h3>
            <p>
              The Messenger of Allah (PBUH) repeatedly stated:
              <em> "Hold firmly to the rope of Allah until you meet me at the Fountain of Kauthar. Never let go of the Quran and the Progeny (Ahlul Bayt), if you leave the Quran and the Progeny (Ahlul Bayt a.s.), you will fall into sectarianism."</em>
            </p>
            <p>
              The eternal saying of Imam Hussain (a.s.) is: <strong>"Death with dignity is better than a life of humiliation."</strong> Now, looking at the state of the world, everyone should come to their senses. For God's sake, everyone should unite, forget old differences and become one voice, washing away the false stains of sectarianism and terrorism from the garment of Islam so that its radiant face becomes clear to the world.
            </p>

            <h3>What is True Wealth? (An Inspiring Incident)</h3>
            <p>
              Once, the family of the Holy Prophet (PBUH) slaughtered a goat (or meat arrived). The Holy Prophet (PBUH) asked: <em>"What is left of it?"</em> He was told that only one shoulder is left; the rest has been distributed among the poor. Upon this, the Messenger of Allah (PBUH) made a deeply insightful remark: <strong>"Except for this shoulder, the entire goat is what is left!"</strong>
            </p>
            <p>
              This incident gives us a great lesson that charity and alms do not decrease wealth; rather, they make it eternal. What we have used in the world is finished, and what we have given in the name of Allah becomes ours until the Day of Judgment and is secured forever in the account of the hereafter.
            </p>

            <h3>The Urgent Need for Media and Global Representation</h3>
            <p>
              Today is the era of media. Our endeavor is to introduce ourselves according to international standards. For this, the establishment of our own channel, newspaper, radio station, and magazine is absolutely essential. Walk with our foundation "Ayuda International" in every region of the world, because with your cooperation, millions of humans can attain comfort and salvation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact and Invitation to Join */}
      <section className="ayuda-cta-section">
        <div className="cta-box">
          <h2>🤝 Become a Part of Foundation Ayuda International</h2>
          <p>
            Any compassionate human being from any region of the world can become a member of our foundation. Let us join hands in doing good before the thread of breaths breaks.
          </p>
          <div className="cta-contact-links">
            <a href="tel:+447404640052" className="cta-btn phone">
              📞 +447404640052 (Phone / WhatsApp)
            </a>
            <a href="mailto:fatimanaqavi51214@gmail.com" className="cta-btn email">
              ✉️ fatimanaqavi51214@gmail.com
            </a>
            <Link href="/en/contact" className="cta-btn contact-page">
              📍 Detailed Contact Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
