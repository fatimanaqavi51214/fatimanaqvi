import Link from 'next/link';

export default function Header({ t, lang }) {
  return (
    <header>
      <div className="container header-inner">
        <nav>
          <Link href={`/${lang}`} className="nav-link">{t.nav.home}</Link>
          <Link href={`/${lang}/about`} className="nav-link">{t.nav.about}</Link>
          <Link href={`/${lang}/services`} className="nav-link">{t.nav.services}</Link>
          <Link href={`/${lang}/works`} className="nav-link">{t.nav.works}</Link>
          <Link href={`/${lang}/business`} className="nav-link">{t.nav.business}</Link>
          <Link href={`/${lang}/religious`} className="nav-link">{t.nav.religious}</Link>
          <Link href={`/${lang}/contact`} className="nav-link">{t.nav.contact}</Link>
        </nav>

        <div className="lang-switcher">
          <Link href="/ur" className={`lang-link ${lang === 'ur' ? 'active' : ''}`}>
            <span className="flag">🇵🇰</span> اردو
          </Link>
          <Link href="/ar" className={`lang-link ${lang === 'ar' ? 'active' : ''}`}>
            <span className="flag">🇸🇦</span> العربية
          </Link>
          <Link href="/es" className={`lang-link ${lang === 'es' ? 'active' : ''}`}>
            <span className="flag">🇪🇸</span> Español
          </Link>
        </div>
      </div>
    </header>
  );
}