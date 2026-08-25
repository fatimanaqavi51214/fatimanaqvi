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

export const metadata = {
  title: t.siteTitle,
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
