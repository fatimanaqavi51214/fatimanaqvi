import { translations } from '@/app/i18n/translations';

export default function Home({ params }) {
  const { lang } = params;
  const t = translations[lang];

  return (
    <div className="hero">
      <div className="container">
        {/* تصویر - مکمل چوڑائی کے ساتھ */}
        <div className="hero-image-wrapper">
          <img
            src="https://res.cloudinary.com/b7xbeztp/image/upload/v1787485385/header1.png"
            alt="نصرت فاطمہ نقوی"
            className="hero-image-full"
          />
        </div>

        <h1>{t.home.title}</h1>
        <p className="subtitle">{t.home.subtitle}</p>
        <p className="description">{t.home.description}</p>
      </div>
    </div>
  );
}