export default function About() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1787489928/Arabic.webm';
  const videoHeading = '🎥 فيديو تعريفي';
  const content = [
    'ولدت السيدة نصرت فاطمة نقوي في كراتشي، باكستان عام 1958م.',
    'نشأت في أسرة متعلمة وعاملة، وعقدت العزم منذ البداية على التقدم في ميدان العلم والعمل.',
    'والدها السيد محمد نقوي ووالدتها مهر بانو.',
    'هي شخصية تجارية واجتماعية نشطة على المستوى العالمي.'
  ];

  return (
    <div className="container">
      <h1>نبذة</h1>
      
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
