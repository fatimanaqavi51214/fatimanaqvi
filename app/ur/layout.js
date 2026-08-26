import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/app/globals.css';

const t = {
  siteTitle: 'نصرت فاطمہ نقوی | پورٹ فولیو',
  nav: {
    home: 'ہوم',
    about: 'تعارف',
    services: 'خدمات',
    works: 'کارکردگی',
    business: 'کاروبار',
    religious: 'دینی خدمات',
    contact: 'رابطہ کریں'
  },
  footer: 'تمام حقوق محفوظ ہیں | نصرت فاطمہ نقوی'
};

const heroImage = 'https://res.cloudinary.com/b7xbeztp/image/upload/v1787485385/header1.png';

const ogImage = 'https://res.cloudinary.com/b7xbeztp/image/upload/v1787485385/header1.png';
const siteUrl = 'https://fatimanaqvi.vercel.app/ur';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: t.siteTitle,
    template: `%s | ${t.siteTitle}`,
  },
  description: 'خدمتِ خلق میں جہد مسلسل اور دردِ دل رکھنے والی عظیم خاتون، وکیل انسانیت محترمہ نصرت فاطمہ نقوی کی رسمی ویب سائٹ۔',
  keywords: [
    'نصرت فاطمہ نقوی', 'وکیل انسانیت', 'ماں جي', 'Maan Jee',
    'فلاحی خدمات', 'حسینیات', 'اہل بیت', 'ڈبئی', 'دمشق', 'لاہور'
  ],
  alternates: {
    canonical: '/',
    languages: {
      'ur-PK': '/ur',
      'ar-SA': '/ar',
      'fa-IR': '/fa',
      'es-ES': '/es',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ur_PK',
    alternateLocale: ['ar_SA', 'fa_IR', 'es_ES'],
    url: siteUrl,
    siteName: t.siteTitle,
    title: t.siteTitle,
    description: 'خدمتِ خلق میں جہد مسلسل اور دردِ دل رکھنے والی عظیم خاتون، محترمہ نصرت فاطمہ نقوی۔',
    images: [
      { url: ogImage, width: 1200, height: 675, alt: 'نصرت فاطمہ نقوی' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: t.siteTitle,
    description: 'خدمتِ خلق میں جہد مسلسل اور دردِ دل رکھنے والی عظیم خاتون۔',
    images: [ogImage],
  },
};

export default function UrduLayout({ children }) {
  return (
    <html lang="ur" dir="rtl">
      <body>
        <Header t={t} lang="ur" />

        {/* ہر صفحہ پر دکھائی دینے والا ہیرو بینر */}
        <section className="hero-banner" aria-label="ہیرو بینر">
          <div className="banner-inner">
            <div className="banner-image-wrapper">
              <img
                src={heroImage}
                alt="نصرت فاطمہ نقوی"
                className="banner-image"
                loading="eager"
                priority
              />
            </div>
            <h1 className="banner-title">نصرت فاطمہ نقوی</h1>
            <p className="banner-subtitle">وکیل انسانیت</p>
            <p className="banner-description">
              خدمتِ خلق میں جہد مسلسل اور دردِ دل رکھنے والی عظیم خاتون
            </p>
          </div>
        </section>

        <main>{children}</main>
        <Footer t={t} />
      </body>
    </html>
  );
}
