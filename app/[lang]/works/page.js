import { translations } from '@/app/i18n/translations';

export default function Works({ params }) {
  const { lang } = params;
  const t = translations[lang];

  return (
    <div className="container">
      <h1>{t.works.title}</h1>
      <div className="timeline">
        {t.works.list.map((item, index) => (
          <div key={index} className="timeline-item">
            <span className="year">{item.year}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}