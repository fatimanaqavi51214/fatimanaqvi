import React from 'react';

export default function Publications() {
  return (
    <div className="container" style={{ direction: 'rtl', fontFamily: "'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif" }}>
      <div className="hero-banner" style={{ borderRadius: '15px', marginBottom: '40px' }}>
        <div className="banner-inner" style={{ textAlign: 'center' }}>
          <h1 style={{  color: '#d4af37', textShadow: '0 2px 4px rgba(0,0,0,0.5)', marginBottom: '15px' }}>المنشورات</h1>
          <p style={{  color: '#b0c4de' }}>الكتب والصحف والمقالات للسيدة نصرت فاطمة نقوي</p>
        </div>
      </div>
      <div className="content-section" style={{ padding: '40px 20px' }}>
        
        {/* Books Section */}
        <div style={{ background: 'rgba(212, 175, 55, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '15px', padding: '40px 30px', marginBottom: '50px', textAlign: 'center' }}>
          <h2 style={{  color: '#d4af37', marginBottom: '20px' }}>الكتب</h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '30px 20px', borderRadius: '10px', border: '1px solid #333', width: '300px' }}>
              <i className="fa-solid fa-book-open" style={{  color: '#d4af37', marginBottom: '20px' }}></i>
              <h3 style={{  color: '#fff', marginBottom: '10px' }}>كتاب: نداء الخلق</h3>
              <p style={{ color: '#b0c4de', marginBottom: '20px' }}>(عربي)</p>
              <a 
                href="https://res.cloudinary.com/b7xbeztp/image/upload/v1789917032/%D9%86%D8%AF%D8%A7%D8%A1%D9%8F_%D8%A7%D9%84%D8%AE%D9%8E%D9%84%D9%92%D9%82_%D8%B9%D8%B1%D8%A8%DB%8C__compressed.pdf" 
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#d4af37', color: '#000', borderRadius: '5px', textDecoration: 'none',  }}
              >
                اقرأ (PDF)
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
