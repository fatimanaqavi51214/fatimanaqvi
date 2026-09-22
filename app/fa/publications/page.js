import React from 'react';

export default function Publications() {
  return (
    <div className="container" style={{ direction: 'rtl', fontFamily: "'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif" }}>
      <div className="hero-banner" style={{ borderRadius: '15px', marginBottom: '40px' }}>
        <div className="banner-inner" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', color: '#d4af37', textShadow: '0 2px 4px rgba(0,0,0,0.5)', marginBottom: '15px' }}>انتشارات</h1>
          <p style={{ fontSize: '1.2rem', color: '#b0c4de' }}>کتاب‌ها، روزنامه‌ها و مقالات خانم نصرت فاطمه نقوی</p>
        </div>
      </div>
      <div className="content-section" style={{ padding: '40px 20px' }}>
        
        {/* Books Section */}
        <div style={{ background: 'rgba(212, 175, 55, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '15px', padding: '40px 30px', marginBottom: '50px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#d4af37', marginBottom: '20px' }}>کتاب‌ها</h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '30px 20px', borderRadius: '10px', border: '1px solid #333', width: '300px' }}>
              <i className="fa-solid fa-book-open" style={{ fontSize: '4rem', color: '#d4af37', marginBottom: '20px' }}></i>
              <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '10px' }}>کتاب: صدای خلق</h3>
              <p style={{ color: '#b0c4de', marginBottom: '20px' }}>(فارسی)</p>
              <a 
                href="https://res.cloudinary.com/b7xbeztp/image/upload/v1789921756/%DA%A9%D8%AA%D8%A7%D8%A8_%D8%B5%D8%AF%D8%A7%DB%8C_%D8%AE%D9%84%D9%82.pdf" 
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#d4af37', color: '#000', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}
              >
                بخوانید (PDF)
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
