'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ t, lang }) {
  const pathname = usePathname();

  const getLangLink = (targetLang) => {
    if (!pathname) return `/${targetLang}`;
    const segments = pathname.split('/');
    if (segments[1] === lang) {
      segments[1] = targetLang;
    } else {
      return `/${targetLang}`;
    }
    const newPath = segments.join('/');
    return newPath === '' ? '/' : newPath;
  };

  return (
    <>
      <div style={{ backgroundColor: '#0d1117', textAlign: 'center', padding: '4px 0', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
        مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ
      </div>
      
      {/* Header Image/Video directly under Masha'Allah with no gap */}
      <div style={{ width: '100%', margin: '0' }}>
        <video
          src="https://res.cloudinary.com/b7xbeztp/video/upload/v1789991269/cover.webm"
          style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '350px', objectFit: 'cover' }}
          autoPlay
          loop
          muted
          playsInline
          poster="https://res.cloudinary.com/b7xbeztp/image/upload/v1787485385/header1.png"
        />
      </div>

      <header className="main-header" style={{ position: 'relative', background: 'rgba(13, 17, 23, 0.95)', padding: '15px 0', borderBottom: '2px solid #00b894' }}>
        <div className="container header-inner" style={{ flexDirection: 'column', gap: '15px', padding: '0 10px' }}>
          
          {/* Header Texts */}
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '1.8rem', margin: '0 0 5px 0', color: '#d4af37', padding: 0, border: 'none' }}>نصرت فاطمہ نقوی</h1>
            <p style={{ fontSize: '1rem', color: '#55efc4', margin: '0 0 5px 0' }}>وکیل انسانیت</p>
            <p style={{ fontSize: '0.9rem', color: '#b0c4de', margin: 0, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              خدمتِ خلق میں جہد مسلسل اور دردِ دل رکھنے والی عظیم خاتون
            </p>
          </div>

          {/* Language Buttons */}
          <div className="lang-switcher" style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
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

          {/* Nav Menu - Smaller and closer */}
          <nav className="main-nav" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4px' }}>
            <Link href={`/${lang}`} className="nav-btn" style={{ fontSize: '0.8rem', padding: '4px 8px' }}>
              <i className="fa-solid fa-house nav-icon" style={{ fontSize: '0.8rem' }}></i>
              <span className="btn-text">{t.nav.home}</span>
            </Link>
            <Link href={`/${lang}/about`} className="nav-btn" style={{ fontSize: '0.8rem', padding: '4px 8px' }}>
              <i className="fa-solid fa-user nav-icon" style={{ fontSize: '0.8rem' }}></i>
              <span className="btn-text">{t.nav.about}</span>
            </Link>
            <Link href={`/${lang}/ayuda`} className="nav-btn" style={{ fontSize: '0.8rem', padding: '4px 8px' }}>
              <i className="fa-solid fa-hand-holding-heart nav-icon" style={{ fontSize: '0.8rem' }}></i>
              <span className="btn-text">{t.nav.ayuda || (lang === 'ur' ? 'ایودا انٹرنیشنل' : 'Ayuda')}</span>
            </Link>
            <Link href={`/${lang}/services`} className="nav-btn" style={{ fontSize: '0.8rem', padding: '4px 8px' }}>
              <i className="fa-solid fa-handshake nav-icon" style={{ fontSize: '0.8rem' }}></i>
              <span className="btn-text">{t.nav.services}</span>
            </Link>
            <Link href={`/${lang}/business`} className="nav-btn" style={{ fontSize: '0.8rem', padding: '4px 8px' }}>
              <i className="fa-solid fa-building nav-icon" style={{ fontSize: '0.8rem' }}></i>
              <span className="btn-text">{t.nav.business || (lang === 'ur' ? 'کاروبار' : 'Business')}</span>
            </Link>
            <Link href={`/${lang}/works`} className="nav-btn" style={{ fontSize: '0.8rem', padding: '4px 8px' }}>
              <i className="fa-solid fa-chart-line nav-icon" style={{ fontSize: '0.8rem' }}></i>
              <span className="btn-text">{t.nav.works}</span>
            </Link>
            <Link href={`/${lang}/publications`} className="nav-btn" style={{ fontSize: '0.8rem', padding: '4px 8px' }}>
              <i className="fa-solid fa-book-open nav-icon" style={{ fontSize: '0.8rem' }}></i>
              <span className="btn-text">{t.nav.publications || (lang === 'ur' ? 'اشاعت' : 'Publications')}</span>
            </Link>
            <Link href={`/${lang}/awards`} className="nav-btn" style={{ fontSize: '0.8rem', padding: '4px 8px' }}>
              <i className="fa-solid fa-medal nav-icon" style={{ fontSize: '0.8rem' }}></i>
              <span className="btn-text">{t.nav.awards || (lang === 'ur' ? 'ایوارڈز' : 'Awards')}</span>
            </Link>
            <Link href={`/${lang}/khandan`} className="nav-btn" style={{ fontSize: '0.8rem', padding: '4px 8px' }}>
              <i className="fa-solid fa-users nav-icon" style={{ fontSize: '0.8rem' }}></i>
              <span className="btn-text">{t.nav.family || (lang === 'ur' ? 'فیملی' : 'Family')}</span>
            </Link>
            <Link href={`/${lang}/contact`} className="nav-btn" style={{ fontSize: '0.8rem', padding: '4px 8px' }}>
              <i className="fa-solid fa-envelope nav-icon" style={{ fontSize: '0.8rem' }}></i>
              <span className="btn-text">{t.nav.contact}</span>
            </Link>
          </nav>
          
        </div>
      </header>
    </>
  );
}