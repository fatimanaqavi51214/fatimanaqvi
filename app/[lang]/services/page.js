import { translations } from '../../i18n/translations';

export default function Services({ params }) {
  const { lang } = params;
  const t = translations[lang];

  return (
    <div className="container">
      <h1>{t.services.title}</h1>
      <div className="card-grid">
        {t.services.list.map((item, index) => (
          <div key={index} className="card">
            <span className="icon">{item.icon}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}