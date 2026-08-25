export default function About() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1787489086/SeoraNusratFatimaNaqvi_DefensoradelaHumanidad-ezgif.com-video-to-webm-converter.webm';
  const videoHeading = '🎥 Video Introductorio';
  const content = [
    'La Sra. Nusrat Fatima Naqvi nació en Karachi, Pakistán, en 1958.',
    'Creció en una familia educada y trabajadora, y desde el principio se propuso avanzar en el campo del conocimiento y la acción.',
    'Su padre se llamaba Syed Muhammad Naqvi y su madre Mehr Bano.',
    'Es una empresaria y figura social activa a nivel mundial.'
  ];

  return (
    <div className="container">
      <h1>Sobre mí</h1>
      
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
