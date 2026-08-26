import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/app/globals.css';

const t = {
  siteTitle: 'Nusrat Fatima Naqvi | Portafolio',
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    services: 'Servicios',
    works: 'Logros',
    business: 'Negocios',
    religious: 'Servicios religiosos',
    contact: 'Contacto'
  },
  footer: 'Todos los derechos reservados | Nusrat Fatima Naqvi'
};

const heroImage = 'https://res.cloudinary.com/b7xbeztp/image/upload/v1787485385/header1.png';

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
    <html lang="es" dir="ltr">
      <body>
        <Header t={t} lang="es" />

        {/* Banner principal visible en todas las páginas */}
        <section className="hero-banner" aria-label="Banner principal">
          <div className="banner-inner">
            <div className="banner-image-wrapper">
              <img
                src={heroImage}
                alt="Nusrat Fatima Naqvi"
                className="banner-image"
                loading="eager"
                priority
              />
            </div>
            <h1 className="banner-title">Nusrat Fatima Naqvi</h1>
            <p className="banner-subtitle">Abogada de la Humanidad</p>
            <p className="banner-description">
              Esfuerzo continuo en el servicio a la humanidad y una gran dama de corazón compasivo
            </p>
          </div>
        </section>

        <main>{children}</main>
        <Footer t={t} />
      </body>
    </html>
  );
}
