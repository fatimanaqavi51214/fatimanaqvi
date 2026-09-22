import React from 'react';

export default function Publications() {
  return (
    <div className="container">
      <div className="hero-banner" style={{ borderRadius: '15px', marginBottom: '40px' }}>
        <div className="banner-inner" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', color: '#d4af37', textShadow: '0 2px 4px rgba(0,0,0,0.5)', marginBottom: '15px' }}>Publications</h1>
          <p style={{ fontSize: '1.2rem', color: '#b0c4de' }}>Books, Newspapers, and Columns by Madam Nusrat Fatima Naqvi</p>
        </div>
      </div>
      <div className="content-section" style={{ padding: '40px 20px' }}>
        
        {/* Books Section */}
        <div style={{ background: 'rgba(212, 175, 55, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '15px', padding: '40px 30px', marginBottom: '50px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#d4af37', marginBottom: '20px' }}>Books</h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '30px 20px', borderRadius: '10px', border: '1px solid #333', width: '300px' }}>
              <i className="fa-solid fa-book-open" style={{ fontSize: '4rem', color: '#d4af37', marginBottom: '20px' }}></i>
              <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '10px' }}>Book: Voice of the Creation</h3>
              <p style={{ color: '#b0c4de', marginBottom: '20px' }}>(English)</p>
              <a 
                href="https://res.cloudinary.com/b7xbeztp/image/upload/v1789917153/Voice_of_the_Creation.pdf" 
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#d4af37', color: '#000', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}
              >
                Read (PDF)
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
