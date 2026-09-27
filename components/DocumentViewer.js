'use client';

import { useState } from 'react';

export default function DocumentViewer({ doc, initialLang }) {
  const [activeLang, setActiveLang] = useState(initialLang || 'ur');
  const imageUrl = doc.imageUrl;
  
  // Base structure for translations if not provided
  const translations = doc.translations || {};
  
  const langs = [
    { code: 'ur', name: 'اردو', dir: 'rtl' },
    { code: 'en', name: 'English', dir: 'ltr' },
    { code: 'ar', name: 'العربية', dir: 'rtl' },
    { code: 'fa', name: 'فارسی', dir: 'rtl' },
    { code: 'es', name: 'Español', dir: 'ltr' }
  ];

  const handlePrint = () => window.print();
  const handleShare = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: translations[activeLang]?.docName || 'Document', url: window.location.href }); } 
      catch (error) {}
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  const activeTranslation = translations[activeLang] || { docName: 'Pending Translation', lines: [] };
  const activeDir = langs.find(l => l.code === activeLang)?.dir || 'ltr';

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .viewer-container { background-color: #000000; min-height: 100vh; padding: 20px 10px; font-family: system-ui, sans-serif; display: flex; justify-content: center; }
        @media (min-width: 640px) { .viewer-container { padding: 40px 20px; } }
        .viewer-card { background-color: #1e1e1e; width: 100%; max-width: 800px; border-radius: 20px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); overflow: hidden; border: 1px solid #333; }
        .tabs-header { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; padding: 16px; background: #121212; border-bottom: 1px solid #333; }
        .tab-btn { padding: 8px 20px; border-radius: 50px; font-size: 14px; font-weight: 700; cursor: pointer; border: 1px solid #444; background: #2a2a2a; color: #a1a1aa; transition: all 0.3s ease; }
        .tab-btn.active { background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%); color: white; border: none; transform: scale(1.1); box-shadow: 0 8px 15px rgba(37,99,235,0.4); outline: 2px solid #3b82f6; outline-offset: 2px; }
        .img-container { display: flex; justify-content: center; padding: 16px 12px; background-color: #18181b; border-bottom: 1px solid #333; }
        .doc-image { width: 100%; max-width: 600px; height: auto; object-fit: contain; border-radius: 12px; border: 1px solid #333; padding: 4px; background-color: #ffffff; }
        .content-body { padding: 30px 6%; background: #1e1e1e; color: #e4e4e7; }
        .doc-title { font-size: 26px; font-weight: 900; color: #f4f4f5; text-align: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid #333; }
        .line-item { display: flex; flex-direction: column; padding: 16px 0; border-bottom: 1px dashed #3f3f46; }
        @media (min-width: 640px) { .line-item { flex-direction: row; padding: 20px 16px; margin: 0 -16px; } }
        .line-label { font-weight: bold; color: #60a5fa; font-size: 18px; margin-bottom: 8px; }
        @media (min-width: 640px) { .line-label { width: 35%; margin-bottom: 0; padding: 0 20px; font-size: 20px; } }
        .line-value { color: #e4e4e7; font-size: 18px; line-height: 1.7; }
        @media (min-width: 640px) { .line-value { width: 65%; font-size: 22px; } }
        .footer-actions { display: flex; justify-content: space-between; align-items: center; padding: 24px; background-color: #121212; border-top: 1px solid #333; }
        .btn-action { display: flex; justify-content: center; align-items: center; gap: 10px; width: 140px; padding: 14px; border-radius: 50px; font-size: 16px; font-weight: bold; color: white; border: none; cursor: pointer; }
        .btn-share { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); }
        .btn-print { background: linear-gradient(135deg, #52525b 0%, #3f3f46 100%); }
        @media print { .viewer-container { padding: 0; background: white; } .viewer-card { box-shadow: none; border: none; max-width: 100%; border-radius: 0; background: white; } .tabs-header, .footer-actions { display: none !important; } .doc-image { border: none; box-shadow: none; } .content-body { background: white; } .doc-title { color: black; border-color: #ddd; } .line-item { border-color: #ddd; } .line-label { color: #333; } .line-value { color: #000; } }
      `}} />

      <div className="viewer-container">
        <div className="viewer-card">
          
          <div className="tabs-header">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setActiveLang(l.code)}
                className={"tab-btn " + (activeLang === l.code ? 'active' : '')}
              >
                {l.name}
              </button>
            ))}
          </div>

          <div className="img-container">
            <img src={imageUrl} alt="Document" className="doc-image" />
          </div>

          <div className="content-body" dir={activeDir}>
            <h1 className="doc-title">
              {activeTranslation.docName || 'Pending Translation'}
            </h1>
            
            <div style={{ background: '#27272a', color: '#e4e4e7', padding: '40px', borderRadius: '12px', border: '1px solid #3f3f46', fontFamily: 'serif', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)' }}>
              {activeTranslation.lines && activeTranslation.lines.length > 0 ? (
                (() => {
                  let genericText = [];
                  let structuredData = [];
                  
                  activeTranslation.lines.forEach((item) => {
                    const isGeneric = ['details', 'تفاصيل', 'جزئیات', 'detalles', 'ترجمہ', 'traducción', 'ترجمه'].includes(item.label.toLowerCase());
                    if (isGeneric || !item.value) {
                      genericText.push(item.value || item.label);
                    } else {
                      structuredData.push(item);
                    }
                  });

                  return (
                    <>
                      {/* Render formal paragraph text */}
                      {genericText.length > 0 && (
                        <div style={{ textAlign: activeDir === 'rtl' ? 'right' : 'left', fontSize: '22px', lineHeight: '2.2', marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px solid #3f3f46', whiteSpace: 'pre-wrap' }}>
                          {genericText.join(' ').replace(/\s+/g, ' ')}
                        </div>
                      )}
                      
                      {/* Render Key-Value structured data */}
                      {structuredData.length > 0 && (
                        <table style={{ width: '100%', fontSize: '18px', borderCollapse: 'collapse' }}>
                          <tbody>
                            {structuredData.map((item, index) => (
                              <tr key={index} style={{ borderBottom: '1px solid #3f3f46' }}>
                                <td style={{ padding: '15px 0', fontWeight: 'bold', width: '35%', color: '#93c5fd' }}>{item.label}:</td>
                                <td style={{ padding: '15px 0', color: '#e4e4e7' }}>{item.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </>
                  );
                })()
              ) : (
                <div style={{ textAlign: 'center', padding: '40px', fontSize: '18px', color: '#64748b' }}>Translation is being processed or not available...</div>
              )}
            </div>
          </div>

          <div className="footer-actions">
            <div style={{ color: '#94a3b8', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Document Viewer
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button onClick={handleShare} className="btn-action btn-share">Share</button>
              <button onClick={handlePrint} className="btn-action btn-print">Print</button>
            </div>
          </div>

        </div>
      </div>
      
      {/* Floating Return Button */}
      <a href={`/${initialLang}/vault`} style={{
        position: 'fixed',
        bottom: '30px',
        right: activeDir === 'rtl' ? 'auto' : '30px',
        left: activeDir === 'rtl' ? '30px' : 'auto',
        background: '#10b981',
        color: 'white',
        padding: '15px 25px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: 'bold',
        boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.4)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        zIndex: 1000,
        transition: 'all 0.3s'
      }}
      onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'; }}
      onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; }}
      >
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" fillRule="evenodd"></path></svg>
        {activeDir === 'rtl' ? 'مین فولڈرز' : 'Main Folders'}
      </a>
    </>
  );
}
