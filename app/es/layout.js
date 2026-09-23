import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/app/globals.css';
import FloatingIcons from '@/components/FloatingIcons';
import { translations } from '@/app/i18n/translations';

const t = translations.es;

const heroImage = 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789990290/nusratfatimacover-ezgif.com-optimize_1.gif';

const ogImage = 'https://res.cloudinary.com/b7xbeztp/image/upload/v1787485385/header1.png';
const siteUrl = 'https://fatimanaqvi.vercel.app/es';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: t.siteTitle,
    template: `%s | ${t.siteTitle}`,
  },
  description: 'Esfuerzo continuo en el servicio a la humanidad, la Sra. Nusrat Fatima Naqvi, Abogada de la Humanidad.',
  keywords: [
    'Nusrat Fatima Naqvi', 'Abogada de la Humanidad',
    'Servicios benéficos', 'Hussainiya', 'Ahlul Bayt',
    'Dubái', 'Damasco', 'Pakistán'
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
    locale: 'es_ES',
    alternateLocale: ['ur_PK', 'ar_SA', 'fa_IR'],
    url: siteUrl,
    siteName: t.siteTitle,
    title: t.siteTitle,
    description: 'Sra. Nusrat Fatima Naqvi - Abogada de la Humanidad, servicio continuo a la humanidad.',
    images: [
      { url: ogImage, width: 1200, height: 675, alt: 'Nusrat Fatima Naqvi' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: t.siteTitle,
    description: 'Esfuerzo continuo en el servicio a la humanidad.',
    images: [ogImage],
  },
};

export default function SpanishLayout({ children }) {
  return (
    <div className="lang-wrapper" lang="es" dir="ltr">
        <Header t={t} lang="es" />

        {/* Banner principal visible en todas las páginas */}
        

        <main>{children}</main>
        <Footer t={t} lang="es" />
        <FloatingIcons />
    </div>
  );
}
