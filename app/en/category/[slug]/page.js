import documents from '@/documents_data.json';
import Link from 'next/link';

const categoryTitles = {
  'residency': { ur: 'اقامے اور شناختی کارڈ', en: 'Residency & Iqama', ar: 'الإقامات والبطاقات', fa: 'اقامت و کارت‌ها', es: 'Residencia e Iqama' },
  'property': { ur: 'جائیداد کے کاغذات', en: 'Property Documents', ar: 'وثائق العقارات', fa: 'اسناد ملک', es: 'Documentos de Propiedad' },
  'business': { ur: 'بزنس اور معاہدات', en: 'Business & Contracts', ar: 'الأعمال والعقود', fa: 'کسب و کار و قراردادها', es: 'Negocios y Contratos' },
  'embassy': { ur: 'سرکاری اور سفارتی خطوط', en: 'Official & Embassy Letters', ar: 'خطابات رسمية', fa: 'نامه‌های رسمی', es: 'Cartas Oficiales' },
  'personal': { ur: 'ذاتی دستاویزات', en: 'Personal Documents', ar: 'وثائق شخصية', fa: 'اسناد شخصی', es: 'Documentos Personales' },
  'visas': { ur: 'ویزا جات', en: 'Visas', ar: 'تأشيرات', fa: 'ویزاها', es: 'Visas' },
};

export function generateStaticParams() {
  return Object.keys(categoryTitles).map((slug) => ({ slug }));
}

export default function CategoryPage({ params }) {
  const { slug } = params;
  const lang = 'en';

  // Filter documents by category (include official in embassy)
  const categoryDocs = documents.filter((doc) => doc.category === slug || (slug === 'embassy' && doc.category === 'official'));

  const title = categoryTitles[slug]?.[lang] || slug;
  const isRtl = false;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .cat-container { background-color: #09090b; min-height: 100vh; padding: 40px 20px; font-family: system-ui, sans-serif; color: white; }
        .cat-header { text-align: center; margin-bottom: 50px; }
        .cat-title { font-size: 3rem; font-weight: 900; background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 15px; }
        .cat-subtitle { color: #a1a1aa; font-size: 1.2rem; }
        
        .grid-layout { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 30px; max-width: 1300px; margin: 0 auto; }
        
        .doc-card { 
          background-color: #18181b; 
          border-radius: 16px; 
          overflow: hidden; 
          border: 1px solid #27272a; 
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .doc-card:hover { transform: translateY(-10px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5), 0 0 15px rgba(59, 130, 246, 0.3); border-color: #3b82f6; }
        
        .doc-img-wrap { width: 100%; height: 240px; background: #fff; padding: 10px; display: flex; align-items: center; justify-content: center; }
        .doc-img { max-width: 100%; max-height: 100%; object-fit: contain; transition: transform 0.3s; }
        .doc-card:hover .doc-img { transform: scale(1.05); }
        
        .doc-content { padding: 20px; flex-grow: 1; display: flex; flex-direction: column; }
        .doc-name { font-size: 1.1rem; font-weight: bold; color: #f4f4f5; line-height: 1.5; margin-bottom: 15px; }
        
        .view-btn { 
          margin-top: auto; 
          display: block; 
          text-align: center; 
          padding: 12px; 
          background: #2563eb; 
          color: white; 
          border-radius: 8px; 
          font-weight: bold; 
          transition: background 0.3s; 
        }
        .doc-card:hover .view-btn { background: #1d4ed8; }
        
        .badge { position: absolute; top: 15px; right: 15px; background: rgba(0,0,0,0.7); color: white; padding: 5px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; backdrop-filter: blur(4px); }
        .floating-btn { position: fixed; bottom: 30px; background: #10b981; color: white; padding: 15px 25px; border-radius: 50px; text-decoration: none; font-weight: bold; box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.4); display: flex; align-items: center; gap: 10px; z-index: 1000; transition: all 0.3s; }
        .cat-container[dir="rtl"] .floating-btn { left: 30px; }
        .cat-container[dir="ltr"] .floating-btn { right: 30px; }
        .floating-btn:hover { transform: translateY(-5px) scale(1.05); background: #059669; }
`}} />

      <div className="cat-container" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="cat-header">
          <h1 className="cat-title">{title}</h1>
          <p className="cat-subtitle">
            All documents related to this category
          </p>
        </div>
        
        <div className="grid-layout">
          {categoryDocs.length > 0 ? categoryDocs.map((doc) => {
            const docName = doc.translations?.[lang]?.docName || doc.translations?.en?.docName || doc.translations?.ur?.docName || `Document ${doc.id}`;
            return (
              <Link href={`/${lang}/document/${doc.id}`} key={doc.id} style={{ textDecoration: 'none' }}>
                <div className="doc-card">
                  <span className="badge">{doc.id}</span>
                  <div className="doc-img-wrap">
                    <img src={doc.imageUrl} alt={docName} className="doc-img" />
                  </div>
                  <div className="doc-content">
                    <h3 className="doc-name">{docName}</h3>
                    <span className="view-btn">
                      View Document
                    </span>
                  </div>
                </div>
              </Link>
            );
          }) : (
            <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '50px', fontSize: '1.2rem', color: '#71717a' }}>
              No documents found in this category.
            </div>
          )}
        </div>
        
        <Link href={`/${lang}/vault`} className="floating-btn">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" fillRule="evenodd"></path></svg>
          Main Folders
        </Link>
      </div>
    </>
  );
}
