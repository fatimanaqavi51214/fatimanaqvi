import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/app/globals.css';

const t = {
  siteTitle: 'نصرت فاطمة نقوي | بورتوفوليو',
  nav: {
    home: 'الرئيسية',
    about: 'نبذة',
    services: 'الخدمات',
    works: 'الإنجازات',
    business: 'الأعمال',
    religious: 'الخدمات الدينية',
    contact: 'اتصل بنا'
  },
  footer: 'جميع الحقوق محفوظة | نصرت فاطمة نقوي'
};

const heroImage = 'https://res.cloudinary.com/b7xbeztp/image/upload/v1787485385/header1.png';

const ogImage = 'https://res.cloudinary.com/b7xbeztp/image/upload/v1787485385/header1.png';
const siteUrl = 'https://fatimanaqvi.vercel.app/ar';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: t.siteTitle,
    template: `%s | ${t.siteTitle}`,
  },
  description: 'الجهد المتواصل في خدمة الخلق وذات القلب الحنون، السيدة نصرت فاطمة نقوي وكيلة الإنسانية.',
  keywords: [
    'نصرت فاطمة نقوي', 'وكيلة الإنسانية', 'الخدمات الخيرية',
    'الحسينيات', 'أهل البيت', 'دبي', 'دمشق', 'باكستان'
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
    locale: 'ar_SA',
    alternateLocale: ['ur_PK', 'fa_IR', 'es_ES'],
    url: siteUrl,
    siteName: t.siteTitle,
    title: t.siteTitle,
    description: 'السيدة نصرت فاطمة نقوي - وكيلة الإنسانية، الجهد المتواصل في خدمة الخلق.',
    images: [
      { url: ogImage, width: 1200, height: 675, alt: 'نصرت فاطمة نقوي' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: t.siteTitle,
    description: 'الجهد المتواصل في خدمة الخلق وذات القلب الحنون.',
    images: [ogImage],
  },
};

export default function ArabicLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Header t={t} lang="ar" />

        {/* هيرو بانر يظهر على كل صفحة */}
        <section className="hero-banner" aria-label="بانر رئيسي">
          <div className="banner-inner">
            <div className="banner-image-wrapper">
              <img
                src={heroImage}
                alt="نصرت فاطمة نقوي"
                className="banner-image"
                loading="eager"
                priority
              />
            </div>
            <h1 className="banner-title">نصرت فاطمة نقوي</h1>
            <p className="banner-subtitle">وكيلة الإنسانية</p>
            <p className="banner-description">
              الجهد المتواصل في خدمة الخلق وذات القلب الحنون
            </p>
          </div>
        </section>

        <main>{children}</main>
        <Footer t={t} />
      </body>
    </html>
  );
}
