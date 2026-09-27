'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function DocumentViewer({ doc, initialLang }) {
  const [activeLang, setActiveLang] = useState(initialLang);

  if (!doc) {
    return <div style={{ color: 'white', textAlign: 'center', padding: '50px' }}>Document not found</div>;
  }

  const { imageUrl, translations } = doc;
  const langs = Object.keys(translations).map(k => ({ code: k, name: translations[k].name, dir: translations[k].dir }));
  const activeTranslation = translations[activeLang] || {};
  const activeDir = activeTranslation.dir || 'ltr';

  const handlePrint = () => { window.print(); };
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: activeTranslation.docName || 'Document',
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const hiddenLabels = ['details', 'content', 'مضمون', 'متن', 'تفصیلات', 'تفاصيل', 'جزئیات', 'detalles', 'details:', 'خط کا متن', 'عربی متن', 'اردو مفہوم', 'ترجمہ'];

  // Categorize lines into metadata (short properties) and body text (long content/paragraphs)
  const metadata = [];
  const bodyText = [];

  if (activeTranslation.lines) {
    activeTranslation.lines.forEach(item => {
      const labelLower = (item.label || '').toLowerCase().trim();
      const isBody = hiddenLabels.some(hl => labelLower.includes(hl)) || (item.value && item.value.length > 150);
      
      if (isBody) {
        bodyText.push(item);
      } else {
        metadata.push(item);
      }
    });
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .viewer-container { min-height: 100vh; background-color: #000000; padding: 20px; font-family: system-ui, -apple-system, sans-serif; }
        .viewer-card { max-width: 900px; margin: 0 auto; background: #18181b; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5); border: 1px solid #333; }
        .tabs-header { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; padding: 16px; background: #121212; border-bottom: 1px solid #333; }
        .tab-btn { padding: 8px 20px; border-radius: 50px; font-size: 14px; font-weight: 700; cursor: pointer; border: 1px solid #444; background: #2a2a2a; color: #a1a1aa; transition: all 0.3s ease; }
        .tab-btn.active { background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%); color: white; border: none; transform: scale(1.1); box-shadow: 0 8px 15px rgba(37,99,235,0.4); outline: 2px solid #3b82f6; outline-offset: 2px; }
        
        .img-container { display: flex; justify-content: center; padding: 20px; background-color: #121212; border-bottom: 1px solid #333; }
        .doc-image { width: 100%; max-width: 700px; height: auto; object-fit: contain; border-radius: 8px; border: 1px solid #333; }
        
        .content-body { padding: 40px 30px; background: #1e1e1e; color: #e4e4e7; }
        .doc-title { font-size: 26px; font-weight: 900; color: #f4f4f5; text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #3f3f46; line-height: 1.5; }
        
        .metadata-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-bottom: 30px; }
        .metadata-item { background: #27272a; padding: 15px 20px; border-radius: 8px; border: 1px solid #3f3f46; display: flex; flex-direction: column; gap: 5px; }
        .meta-label { font-weight: bold; color: #60a5fa; font-size: 16px; }
        .meta-value { color: #f4f4f5; font-size: 18px; line-height: 1.4; }
        
        .body-text-section { background: #27272a; padding: 30px; border-radius: 12px; border: 1px solid #3f3f46; margin-top: 20px; }
        .body-heading { font-size: 20px; color: #3b82f6; margin-bottom: 20px; font-weight: bold; border-bottom: 1px dashed #4b5563; padding-bottom: 10px; }
        .body-paragraph { font-size: 20px; line-height: 2.2; color: #f4f4f5; white-space: pre-wrap; text-align: justify; margin-bottom: 20px; font-family: Georgia, serif; }
        
        @media (max-width: 600px) {
          .doc-title { font-size: 22px; }
          .metadata-grid { grid-template-columns: 1fr; }
          .body-paragraph { font-size: 18px; text-align: left; }
          [dir="rtl"] .body-paragraph { text-align: right; }
          .viewer-container { padding: 0; }
          .viewer-card { border-radius: 0; border: none; }
          .content-body { padding: 20px 15px; }
          .body-text-section { padding: 20px 15px; }
        }
        
        .footer-actions { display: flex; justify-content: space-between; align-items: center; padding: 24px; background-color: #121212; border-top: 1px solid #333; }
        .btn-action { display: flex; justify-content: center; align-items: center; gap: 10px; padding: 12px 24px; border-radius: 50px; font-size: 16px; font-weight: bold; color: white; border: none; cursor: pointer; }
        .btn-share { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); }
        .btn-print { background: linear-gradient(135deg, #52525b 0%, #3f3f46 100%); }
        
        @media print {
          .viewer-container { padding: 0; background: white; } 
          .viewer-card { box-shadow: none; border: none; max-width: 100%; border-radius: 0; background: white; } 
          .tabs-header, .footer-actions, .floating-btn { display: none !important; } 
          .doc-image { border: none; box-shadow: none; max-width: 100%; } 
          .content-body { background: white; color: black; } 
          .doc-title { color: black; border-color: #ddd; } 
          .metadata-item, .body-text-section { background: white; border-color: #ddd; break-inside: avoid; } 
          .meta-label, .body-heading { color: #333; } 
          .meta-value, .body-paragraph { color: #000; }
        }
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

          {imageUrl && (
            <div className="img-container">
              <img src={imageUrl} alt={activeTranslation.docName || 'Document'} className="doc-image" />
            </div>
          )}

          <div className="content-body" dir={activeDir}>
            <h1 className="doc-title">
              {activeDir === 'rtl' ? 'موضوع: ' : 'Subject: '}
              {activeTranslation.docName || 'Pending Translation'}
            </h1>
            
            {!activeTranslation.lines || activeTranslation.lines.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', fontSize: '18px', color: '#64748b' }}>
                {activeDir === 'rtl' ? 'اس زبان میں ترجمہ دستیاب نہیں ہے۔' : 'Translation is pending or not available in this language.'}
              </div>
            ) : (
              <>
                {/* Metadata Grid (Short fields) */}
                {metadata.length > 0 && (
                  <div className="metadata-grid">
                    {metadata.map((item, index) => {
                      const showLabel = item.label && !hiddenLabels.includes((item.label || '').toLowerCase().trim());
                      return (
                        <div key={index} className="metadata-item">
                          {showLabel && <span className="meta-label">{item.label}</span>}
                          <span className="meta-value">{item.value}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Body Text Section (Long paragraphs / Letters) */}
                {bodyText.length > 0 && (
                  <div className="body-text-section">
                    <div className="body-heading">
                      {activeDir === 'rtl' ? 'اصل متن (ترجمہ):' : 'Document Content / Translation:'}
                    </div>
                    {bodyText.map((item, index) => (
                      <div key={index} className="body-paragraph">
                        {item.value}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          <div className="footer-actions">
            <div style={{ color: '#94a3b8', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Vault
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button onClick={handleShare} className="btn-action btn-share">Share</button>
              <button onClick={handlePrint} className="btn-action btn-print">Print</button>
            </div>
          </div>

        </div>
      </div>
      
      <a href={`/${initialLang}/vault`} className="floating-btn" style={{
        position: 'fixed', bottom: '30px', right: activeDir === 'rtl' ? 'auto' : '30px', left: activeDir === 'rtl' ? '30px' : 'auto',
        background: '#10b981', color: 'white', padding: '15px 25px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold',
        boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.4)', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 1000
      }}>
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" fillRule="evenodd"></path></svg>
        {activeDir === 'rtl' ? 'واپس جائیں' : 'Back to Vault'}
      </a>
    </>
  );
}
