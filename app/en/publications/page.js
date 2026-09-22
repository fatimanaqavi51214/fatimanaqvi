import React from 'react';
import Image from 'next/image';

export default function Publications() {
  return (
    <div className="container">
      {/* Hero Banner */}
      <div className="hero-banner" style={{ borderRadius: '15px', marginBottom: '20px' }}>
        <div className="banner-inner" style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#d4af37', textShadow: '0 2px 4px rgba(0,0,0,0.5)', marginBottom: '10px' }}>Publications</h1>
          <p style={{ fontSize: '1.1rem', color: '#b0c4de' }}>Books, Newspapers, Articles, and Columns by Madam Nusrat Fatima Naqvi</p>
        </div>
      </div>
      
      <div className="content-section" style={{ padding: '20px' }}>
        
        {/* Books Section */}
        <div style={{ background: 'rgba(212, 175, 55, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '15px', padding: '30px 20px', marginBottom: '40px', textAlign: 'center' }}>
          <h2 style={{ color: '#d4af37', marginBottom: '20px' }}>Books</h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '10px', border: '1px solid #333', width: '250px' }}>
              <i className="fa-solid fa-book-open" style={{ fontSize: '3rem', color: '#d4af37', marginBottom: '15px' }}></i>
              <h3 style={{ color: '#fff', marginBottom: '10px' }}>Voice of the Creation</h3>
              <p style={{ color: '#b0c4de', marginBottom: '15px', fontSize: '1rem' }}>(English)</p>
              <a 
                href="https://res.cloudinary.com/b7xbeztp/image/upload/v1789917153/Voice_of_the_Creation.pdf" 
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-block', padding: '8px 15px', backgroundColor: '#d4af37', color: '#000', borderRadius: '5px', textDecoration: 'none', fontSize: '1rem' }}
              >
                Read (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Newspaper Articles Section */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#d4af37', borderBottom: '2px solid rgba(212, 175, 55, 0.3)', paddingBottom: '10px', marginBottom: '20px' }}>Newspapers & Columns</h2>
          
          {/* Zamana News Article */}
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '10px', marginBottom: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ color: '#55efc4', marginBottom: '5px' }}>Services of Madam Nusrat Fatima Naqvi</h3>
            <p style={{ fontSize: '1rem', color: '#b0c4de' }}>Published in Daily Zamana News</p>
            
            <div style={{ margin: '20px 0', textAlign: 'center' }}>
              <img 
                src="https://res.cloudinary.com/b7xbeztp/image/upload/v1790105268/nusrat-naqvi-zamana-news-8-11-2026.jpg" 
                alt="Zamana News Article" 
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}
              />
            </div>
            
            <div style={{ fontSize: '1.1rem', textAlign: 'justify', maxWidth: '900px', margin: '0 auto' }}>
            <h4 style={{ color: '#d4af37', marginTop: '30px', marginBottom: '15px', textAlign: 'center' }}>Nusrat Fatima Naqvi (Advocate of Humanity): A Great Woman with a Compassionate Heart and Continuous Struggle in the Service of Humanity</h4>
            <p style={{ fontSize: '1rem', textAlign: 'center', color: '#b0c4de' }}>
              Written by: Haji Shabbir Ahmed Shigri
            </p>

            <p style={{ marginBottom: '15px' }}>
              In human history, those personalities are always viewed with utmost respect who, despite reaching the pinnacles of worldly success, keep their souls connected to the Creator of the Universe and the service of humanity. The life of Madam Nusrat Fatima Naqvi is one such shining example, who continues to prove her mettle as a successful international business and social figure today, and is also securing the best 'enduring good deeds' for herself by generously spending her wealth for philanthropic, social, and religious purposes.
            </p>
            <p style={{ marginBottom: '15px' }}>
              Madam Nusrat Fatima Naqvi was born in 1958 in the city of Karachi, Pakistan. Her father was the late Syed Muhammad Naqvi and her mother was the late Mehr Bano. Born into an educated and practicing family, Nusrat Fatima had a firm resolve from the very beginning to advance in the fields of knowledge and action, and she continues to be actively engaged with the same enthusiasm today. Her husband was the late Ghulam Sarwar Chaudhry, who passed away on October 31, 2005, in Lahore. Her children include Jawad Haider, Hajra, and Fawad Haider. Her permanent address in Pakistan is Gulberg III, Lahore. Her husband had such confidence in her administrative abilities that in 2004, he granted her full legal authority (Special Power of Attorney) to manage the business, children's education, and travel matters.
            </p>

            <h4 style={{ color: '#d4af37', marginTop: '20px', marginBottom: '10px' }}>Global Business Achievements</h4>
            <p style={{ marginBottom: '15px' }}>
              She is a highly active, courageous, and world-class business and social personality. The scope of her business activities extends to most countries of the world, and she has proven that a courageous woman can plant the flags of success in every field. She started various businesses in Dubai and Sharjah from the 1970s. A huge part of her business exists in Syria, where she owns a magnificent hotel and various flats in the historic city of Damascus. According to a document from the Pakistani Embassy (2025), she is currently residing in the UK and Spain, and is successfully managing her global business and social activities from there.
            </p>

            <h4 style={{ color: '#d4af37', marginTop: '20px', marginBottom: '10px' }}>Unparalleled Generosity and Charitable Works</h4>
            <p style={{ marginBottom: '15px' }}>
              The brightest aspect of Nusrat Fatima Naqvi's life is her active participation in generosity and charitable works. Worldly wealth never made her oblivious to her true purpose.
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
              <li><strong>Grand Official Donation:</strong> In 1982, she gifted prime land worth 25 million Syrian Liras in the area of Sayyida Zainab (peace be upon her) to the Syrian government for welfare works, for which the Ministry of Awqaf officially thanked her.</li>
              <li><strong>Establishment of Hussainiya and Religious Centers:</strong> In 1981, she took the initiative to build Hussainiya Zainab Al-Zahra in Damascus. In January 1994, she gifted another valuable piece of land to the Ahlul Bayt (a.s.) World Assembly so that a grand library, Hussainiya, guest house, and office could be built there.</li>
              <li><strong>Medical and Social Aid:</strong> In 1983, she gave land to the Red Crescent for a hospital and orphanage. Later, in 2007, she made a generous donation of medical equipment and necessary household items to Mustawsaf Al-Zahra (welfare clinic).</li>
              <li><strong>Welfare Project in UAE:</strong> In 1989, she made a formal offer to the UAE Ministry of Awqaf for the construction of a mosque, clinic, staff accommodation, and a Quran memorization center.</li>
            </ul>

            <h4 style={{ color: '#d4af37', marginTop: '20px', marginBottom: '10px' }}>Final Word</h4>
            <p style={{ marginBottom: '15px' }}>
              The life of Madam Nusrat Fatima Naqvi is a practical example of how a courageous woman is garnering business successes in various countries of the world on the strength of her abilities, and then spending the same wealth in the way of Allah, for the sponsorship of orphans, the construction of hospitals, and the establishment of religious centers. We pray for the health, safety, and long life of Madam Nusrat Fatima Naqvi so that this benevolence of hers continues.
            </p>
            </div>
          </div>

          {/* Daily Alamdar Article */}
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '10px', marginBottom: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ color: '#55efc4', marginBottom: '5px' }}>Interview / Coverage in Daily Alamdar</h3>
            <p style={{ fontSize: '1rem', color: '#b0c4de' }}>Newspaper Clipping</p>
            <div style={{ margin: '20px 0', textAlign: 'center' }}>
              <img 
                src="https://res.cloudinary.com/b7xbeztp/image/upload/v1790105268/WhatsApp_Image_2026-08-23_at_4.18.47_AM.jpg" 
                alt="Daily Alamdar Article" 
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}
              />
            </div>
          </div>

          {/* Hum Watan Spain Poem */}
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '10px', marginBottom: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ color: '#55efc4', marginBottom: '5px' }}>Tribute Poetry in Hum Watan Spain</h3>
            <p style={{ fontSize: '1rem', color: '#b0c4de' }}>Newspaper Clipping</p>
            <div style={{ margin: '20px 0', textAlign: 'center' }}>
              <img 
                src="https://res.cloudinary.com/b7xbeztp/image/upload/v1790105719/WhatsApp_Image_2026-09-07_at_1.24.10_AM-2.jpg" 
                alt="Hum Watan Spain Poem" 
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
