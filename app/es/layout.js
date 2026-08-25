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

export const metadata = {
  title: t.siteTitle,
};

export default function SpanishLayout({ children }) {
  return (
    <html lang="es" dir="ltr">
      <body>
        <Header t={t} lang="es" />
        <main>{children}</main>
        <Footer t={t} />
      </body>
    </html>
  );
}
