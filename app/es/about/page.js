export default function About() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1787489086/SeoraNusratFatimaNaqvi_DefensoradelaHumanidad-ezgif.com-video-to-webm-converter.mp4';
  const videoHeading = '🎥 Video Introductorio';
 
  const content = [
    'Nusrat Fatima Naqvi es una personalidad destacada por su servicio humano y su compromiso con la dignidad y la justicia social.',
    'Escritor: Haji Shabbir Ahmed Shakri',
    'Su vida refleja esfuerzo, integridad y servicio continuo a la comunidad.',
    'A lo largo de los años, ha trabajado en proyectos sociales, religiosos y comerciales en varios países.',
    'Actividad empresarial global',
    'Ha emprendido y liderado proyectos comerciales en Dubái, Sharjah, Damasco, Reino Unido y España.',
    'Servicio social y religioso',
    'También ha promovido la construcción de mezquitas, madrasas, centros de ayuda y espacios de servicio comunitario.',
    'Charidad y apoyo',
    'Su generosidad se refleja en donaciones para hospitales, clínicas, orfanatos y proyectos de bienestar social.',
    'Conclusión',
    'Pedimos a Dios que la proteja, le conceda salud y prolongue su vida para seguir haciendo el bien.'
  ];

  return (
    <div className="container">
      <h1>Introducción</h1>

      <h2 className="video-heading">{videoHeading}</h2>

      <div className="about-video-wrapper">
        <video
          src={videoLink}
          controls
          className="about-video"
          playsInline
          preload="metadata"
        />
      </div>

      {content.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </div>
  );
}
