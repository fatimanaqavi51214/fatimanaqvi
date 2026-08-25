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

export const metadata = {
  title: t.siteTitle,
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
