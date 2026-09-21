export default function Awards() {
  return (
    <div className="container">
      <div className="hero-banner" style={{ borderRadius: '15px', marginBottom: '40px' }}>
        <div className="banner-inner" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', color: '#d4af37', textShadow: '0 2px 4px rgba(0,0,0,0.5)', marginBottom: '15px' }}>الجوائز والشهادات</h1>
          <p style={{ fontSize: '1.2rem', color: '#b0c4de' }}>يمكن إضافة رسائل وشهادات مختلفة في هذا القسم.</p>
        </div>
      </div>

      <div className="card-grid">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="card" style={{ textAlign: 'center', padding: '30px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
            <div style={{ width: '100%', height: '200px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>مكان الشهادة {item}</span>
            </div>
            <h3 style={{ color: '#55efc4' }}>مكان الشهادة {item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
