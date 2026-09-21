import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/app/globals.css';
import FloatingIcons from '@/components/FloatingIcons';

const t = {
  siteTitle: 'Nusrat Fatima Naqvi | Portfolio',
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    works: 'Achievements',
    business: 'Business',
    religious: 'Religious Services',
    contact: 'Contact'
  },
  footer: 'All rights reserved | Nusrat Fatima Naqvi'
};

const heroImage = 'https://res.cloudinary.com/b7xbeztp/image/upload/v1787485385/header1.png';

const ogImage = 'https://res.cloudinary.com/b7xbeztp/image/upload/v1787485385/header1.png';
const siteUrl = 'https://fatimanaqvi.vercel.app/en';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: t.siteTitle,
    template: `%s | ${t.siteTitle}`,
  },
  description: 'Continuous dedication to humanitarian service, Madam Nusrat Fatima Naqvi, Advocate for Humanity.',
  keywords: [
    'Nusrat Fatima Naqvi', 'Advocate for Humanity', 'Maan Jee',
    'Humanitarian Services', 'Hussainiya', 'Ahlul Bayt',
    'Dubai', 'Damascus', 'London', 'Lahore', 'Pakistan'
  ],
  alternates: {
    canonical: '/',
    languages: {
      'ur-PK': '/ur',
      'ar-SA': '/ar',
      'fa-IR': '/fa',
      'es-ES': '/es',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ur_PK', 'ar_SA', 'fa_IR', 'es_ES'],
    url: siteUrl,
    siteName: t.siteTitle,
    title: t.siteTitle,
    description: 'Madam Nusrat Fatima Naqvi - Advocate for Humanity, continuous struggle in service to mankind.',
    images: [
      { url: ogImage, width: 1200, height: 675, alt: 'Nusrat Fatima Naqvi' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: t.siteTitle,
    description: 'Continuous struggle in service to humanity with compassion.',
    images: [ogImage],
  },
};

export default function EnglishLayout({ children }) {
  return (
    <div className="lang-wrapper" lang="en" dir="ltr">
        <Header t={t} lang="en" />

        {/* Hero banner displayed across all pages */}
        <section className="hero-banner" aria-label="Hero Banner">
          <div className="banner-inner">
            <div className="banner-image-wrapper">
              <img
                src={heroImage}
                alt="Nusrat Fatima Naqvi"
                className="banner-image"
                loading="eager"
              />
            </div>
            <h1 className="banner-title">Nusrat Fatima Naqvi</h1>
            <p className="banner-subtitle">Advocate for Humanity</p>
            <p className="banner-description">
              A remarkable lady dedicated to continuous service to humanity with profound compassion
            </p>
          </div>
        </section>

        <main>{children}</main>
        <Footer t={t} />
        <FloatingIcons />
    </div>
  );
}
