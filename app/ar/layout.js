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

export const metadata = {
  title: t.siteTitle,
};

export default function ArabicLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Header t={t} lang="ar" />
        <main>{children}</main>
        <Footer t={t} />
      </body>
    </html>
  );
}
