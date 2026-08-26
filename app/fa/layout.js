import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/app/globals.css';

const t = {
  siteTitle: 'نصرت فاطمه نقوی | نمابر',
  nav: {
    home: 'خانه',
    about: 'معرفی',
    services: 'خدمات',
    works: 'دستاوردها',
    business: 'تجارت',
    religious: 'خدمات مذهبی',
    contact: 'تماس با ما'
  },
  footer: 'کلیه حقوق محفوظ است | نصرت فاطمه نقوی'
};

const heroImage = 'https://res.cloudinary.com/b7xbeztp/image/upload/v1787485385/header1.png';

const ogImage = 'https://res.cloudinary.com/b7xbeztp/image/upload/v1787485385/header1.png';
const siteUrl = 'https://fatimanaqvi.vercel.app/fa';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: t.siteTitle,
    template: `%s | ${t.siteTitle}`,
  },
  description: 'تلاش مستمر در خدمت خلق و زنی والا با قلب مهربان، خانم نصرت فاطمه نقوی وکیل بشریت.',
  keywords: [
    'نصرت فاطمه نقوی', 'وکیل بشریت', 'خدمات خیریه',
    'حسینیه‌ها', 'اهل بیت', 'دبی', 'دمشق', 'پاکستان'
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
    locale: 'fa_IR',
    alternateLocale: ['ur_PK', 'ar_SA', 'es_ES'],
    url: siteUrl,
    siteName: t.siteTitle,
    title: t.siteTitle,
    description: 'خانم نصرت فاطمه نقوی - وکیل بشریت، تلاش مستمر در خدمت خلق.',
    images: [
      { url: ogImage, width: 1200, height: 675, alt: 'نصرت فاطمه نقوی' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: t.siteTitle,
    description: 'تلاش مستمر در خدمت خلق و زنی والا با قلب مهربان.',
    images: [ogImage],
  },
};

export default function FarsiLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header t={t} lang="fa" />

        <section className="hero-banner" aria-label="بنر اصلی">
          <div className="banner-inner">
            <div className="banner-image-wrapper">
              <img
                src={heroImage}
                alt="نصرت فاطمه نقوی"
                className="banner-image"
                loading="eager"
                priority
              />
            </div>
            <h1 className="banner-title">نصرت فاطمه نقوی</h1>
            <p className="banner-subtitle">وکیل بشریت</p>
            <p className="banner-description">
              تلاش مستمر در خدمت خلق و زنی والا با قلب مهربان
            </p>
          </div>
        </section>

        <main>{children}</main>
        <Footer t={t} />
      </body>
    </html>
  );
}
