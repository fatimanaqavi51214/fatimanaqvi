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

export const metadata = {
  title: t.siteTitle,
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
