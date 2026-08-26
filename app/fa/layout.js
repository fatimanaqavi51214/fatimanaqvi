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

export const metadata = {
  title: t.siteTitle,
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
