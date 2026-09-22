'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ t, lang }) {
  const pathname = usePathname();

  // Helper to construct the correct path for a target language
  const getLangLink = (targetLang) => {
    if (!pathname) return `/${targetLang}`;
    
    // Split the pathname (e.g. /ur/ayuda => ['', 'ur', 'ayuda'])
    const segments = pathname.split('/');
    
    // If the first segment after '/' is the current language, replace it
    if (segments[1] === lang) {
      segments[1] = targetLang;
    } else {
      // If we are at the root or unexpected structure, just go to /targetLang
      return `/${targetLang}`;
    }
    
    // Reconstruct the path
    const newPath = segments.join('/');
    return newPath === '' ? '/' : newPath;
  };

  return (
    <>
      <div style={{ backgroundColor: '#0d1117', textAlign: 'center', padding: '2px 0', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ
      </div>
      <header className="main-header" style={{ position: 'relative' }}>
        <div className="container header-inner">
          <nav className="main-nav">
            <Link href={`/${lang}`} className="nav-btn">
              <i className="fa-solid fa-house nav-icon"></i>
              <span className="btn-text">{t.nav.home}</span>
            </Link>
            <Link href={`/${lang}/about`} className="nav-btn">
              <i className="fa-solid fa-user nav-icon"></i>
              <span className="btn-text">{t.nav.about}</span>
            </Link>
            <Link href={`/${lang}/ayuda`} className="nav-btn">
              <i className="fa-solid fa-hand-holding-heart nav-icon"></i>
              <span className="btn-text">{t.nav.ayuda || (lang === 'ur' ? 'ایودا انٹرنیشنل' : 'Ayuda')}</span>
            </Link>
            <Link href={`/${lang}/services`} className="nav-btn">
              <i className="fa-solid fa-handshake nav-icon"></i>
              <span className="btn-text">{t.nav.services}</span>
            </Link>
            <Link href={`/${lang}/business`} className="nav-btn">
              <i className="fa-solid fa-building nav-icon"></i>
              <span className="btn-text">{t.nav.business || (lang === 'ur' ? 'کاروبار' : 'Business')}</span>
            </Link>
            <Link href={`/${lang}/works`} className="nav-btn">
              <i className="fa-solid fa-chart-line nav-icon"></i>
              <span className="btn-text">{t.nav.works}</span>
            </Link>
            <Link href={`/${lang}/publications`} className="nav-btn">
              <i className="fa-solid fa-book-open nav-icon"></i>
              <span className="btn-text">{t.nav.publications || (lang === 'ur' ? 'اشاعت' : 'Publications')}</span>
            </Link>
            <Link href={`/${lang}/awards`} className="nav-btn">
              <i className="fa-solid fa-medal nav-icon"></i>
              <span className="btn-text">{t.nav.awards || (lang === 'ur' ? 'ایوارڈز' : 'Awards')}</span>
            </Link>
            <Link href={`/${lang}/khandan`} className="nav-btn">
              <i className="fa-solid fa-users nav-icon"></i>
              <span className="btn-text">{t.nav.family || (lang === 'ur' ? 'فیملی' : 'Family')}</span>
            </Link>
            <Link href={`/${lang}/contact`} className="nav-btn">
              <i className="fa-solid fa-envelope nav-icon"></i>
              <span className="btn-text">{t.nav.contact}</span>
            </Link>
          </nav>

          <div className="lang-switcher">
            <Link href={getLangLink('ur')} className={`lang-btn ${lang === 'ur' ? 'active' : ''}`}>
              <div className="flag-wrapper"><img src="https://flagcdn.com/24x18/pk.png" alt="PK" className="anim-flag" /></div>
              <span className="lang-text">اردو</span>
            </Link>
            <Link href={getLangLink('en')} className={`lang-btn ${lang === 'en' ? 'active' : ''}`}>
              <div className="flag-wrapper"><img src="https://flagcdn.com/24x18/gb.png" alt="GB" className="anim-flag" /></div>
              <span className="lang-text">English</span>
            </Link>
            <Link href={getLangLink('ar')} className={`lang-btn ${lang === 'ar' ? 'active' : ''}`}>
              <div className="flag-wrapper"><img src="https://flagcdn.com/24x18/sa.png" alt="SA" className="anim-flag" /></div>
              <span className="lang-text">العربية</span>
            </Link>
            <Link href={getLangLink('fa')} className={`lang-btn ${lang === 'fa' ? 'active' : ''}`}>
              <div className="flag-wrapper"><img src="https://flagcdn.com/24x18/ir.png" alt="IR" className="anim-flag" /></div>
              <span className="lang-text">فارسی</span>
            </Link>
            <Link href={getLangLink('es')} className={`lang-btn ${lang === 'es' ? 'active' : ''}`}>
              <div className="flag-wrapper"><img src="https://flagcdn.com/24x18/es.png" alt="ES" className="anim-flag" /></div>
              <span className="lang-text">Español</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}