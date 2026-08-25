import { translations } from '@/app/i18n/translations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/app/globals.css';

export async function generateStaticParams() {
  return [{ lang: 'ur' }, { lang: 'ar' }, { lang: 'es' }];
}

export default function RootLayout({ children, params }) {
  const { lang } = params;
  const t = translations[lang];

  return (
    <html lang={lang} dir={lang === 'ur' || lang === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <title>{t.siteTitle}</title>
      </head>
      <body>
        <Header t={t} lang={lang} />
        <main>{children}</main>
        <Footer t={t} />
      </body>
    </html>
  );
}