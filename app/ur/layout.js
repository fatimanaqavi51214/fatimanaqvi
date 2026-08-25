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

export const metadata = {
  title: t.siteTitle,
};

export default function UrduLayout({ children }) {
  return (
    <html lang="ur" dir="rtl">
      <body>
        <Header t={t} lang="ur" />
        <main>{children}</main>
        <Footer t={t} />
      </body>
    </html>
  );
}
