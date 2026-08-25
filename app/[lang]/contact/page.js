import { translations } from '../../i18n/translations';

export default function Contact({ params }) {
  const { lang } = params;
  const t = translations[lang];

  return (
    <div className="container">
      <h1>{t.contact.title}</h1>
      <p>{t.contact.email}</p>
      <p>{t.contact.phone}</p>
      <p>{t.contact.address}</p>
    </div>
  );
}