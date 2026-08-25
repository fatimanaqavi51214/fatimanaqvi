export default function About() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1787490226/urdu.webm';
  const videoHeading = '🎥 تعارفی ویڈیو';
  const content = [
    'محترمہ نصرت فاطمہ نقوی 1958ء میں کراچی، پاکستان میں پیدا ہوئیں۔',
    'ایک پڑھے لکھے اور باعمل گھرانے میں آنکھ کھولنے والی نصرت فاطمہ نے ابتدا ہی سے علم اور عمل کے میدان میں آگے بڑھنے کا پختہ عزم کر رکھا ہے۔',
    'ان کے والد کا نام سید محمد نقوی اور والدہ کا نام مہر بانو ہے۔',
    'وہ ایک انتہائی فعال، باہمت اور عالمی سطح کی کاروباری اور سماجی شخصیت ہیں۔'
  ];

  return (
    <div className="container">
      <h1>تعارف</h1>
      
      <h2 className="video-heading">{videoHeading}</h2>

      <div className="about-video-wrapper">
        <video
          src={videoLink}
          controls
          className="about-video"
          playsInline
        />
      </div>

      {content.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </div>
  );
}
