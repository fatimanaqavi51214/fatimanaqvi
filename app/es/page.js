export default function Home() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1787489086/SeoraNusratFatimaNaqvi_DefensoradelaHumanidad-ezgif.com-video-to-webm-converter.mp4';
  const videoHeading = '🎥 Video Introductorio';

  const highlights = [
    { icon: '🌍', title: 'Negocios Globales', desc: 'Actividades comerciales en Dubái, Sharjah, Damasco, Reino Unido y España' },
    { icon: '🤲', title: 'Servicios Humanitarios', desc: 'Apoyo a huérfanos, necesitados y familias vulnerables' },
    { icon: '🕌', title: 'Centros Religiosos', desc: 'Fundación y desarrollo de husainiyas, madrasas y mezquitas' },
    { icon: '📚', title: 'Predicación', desc: 'Promoción de la doctrina del Ahlul Bayt' },
    { icon: '💊', title: 'Ayuda Médica', desc: 'Donación de tierra y equipos para hospitales y clínicas' },
    { icon: '💝', title: 'Caridad', desc: 'Sadaqa continua y donaciones generosas a nivel mundial' }
  ];

  return (
    <div className="container">
      <h1>Bienvenido</h1>
      <p>
        Este sitio presenta información completa sobre los servicios, los logros y la vida de Nusrat Fatima Naqvi.
        Puede encontrar más detalles en el menú superior.
      </p>

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

      <h2>Resumen de servicios destacados</h2>
      <div className="card-grid">
        {highlights.map((item, idx) => (
          <div className="card" key={idx}>
            <span className="icon">{item.icon}</span>
            <h2 style={{ margin: '8px 0 6px', color: '#00b894' }}>{item.title}</h2>
            <p style={{ marginBottom: 0, opacity: 0.92 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
