import { translations } from '../../i18n/translations';

export default function About({ params }) {
  const { lang } = params;
  const t = translations[lang];

  const videoLinks = {
    ur: 'https://res.cloudinary.com/b7xbeztp/video/upload/v1787490226/urdu.webm',
    ar: 'https://res.cloudinary.com/b7xbeztp/video/upload/v1787489928/Arabic.webm',
    es: 'https://res.cloudinary.com/b7xbeztp/video/upload/v1787489086/SeoraNusratFatimaNaqvi_DefensoradelaHumanidad-ezgif.com-video-to-webm-converter.webm'
  };

  const videoHeadings = {
    ur: '🎥 تعارفی ویڈیو',
    ar: '🎥 فيديو تعريفي',
    es: '🎥 Video Introductorio'
  };

  return (
    <div className="container">
      <h1>{t.about.title}</h1>
      
      <h2 className="video-heading">{videoHeadings[lang]}</h2>

      <div className="about-video-wrapper">
        <video
          src={videoLinks[lang]}
          controls
          className="about-video"
          playsInline
        />
      </div>

      {t.about.content.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </div>
  );
}