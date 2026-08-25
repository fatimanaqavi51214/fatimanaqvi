export default function Home() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1787489086/SeoraNusratFatimaNaqvi_DefensoradelaHumanidad-ezgif.com-video-to-webm-converter.webm';
  const videoHeading = '🎥 Video Introductorio';

  const highlights = [
    { icon: '🌍', title: 'Negocios globales', desc: 'Actividades comerciales en Dubái, Sharjah, Damasco, Reino Unido y España' },
    { icon: '🤲', title: 'Servicios benéficos', desc: 'Apadrinamiento y ayuda a huérfanos, pobres y necesitados' },
    { icon: '🕌', title: 'Centros religiosos', desc: 'Construcción y desarrollo de hussainiyas, escuelas y mezquitas' },
    { icon: '📚', title: 'Difusión del Islam', desc: 'Propagación y promoción de las enseñanzas de Ahlul Bayt (P)' },
    { icon: '💊', title: 'Ayuda médica', desc: 'Donación de terrenos y equipos para hospitales y clínicas benéficas' },
    { icon: '💝', title: 'Generosidad', desc: 'Sadaqah Jariyah y donaciones abundantes por todo el mundo' }
  ];

  return (
    <div className="container">
      <h1>Bienvenidos</h1>
      <p>
        Este sitio ofrece información completa sobre los servicios, logros y vida de la Sra. Nusrat Fatima Naqvi.
        Pueden revisar sus servicios más destacados a continuación. Para más detalles, elijan del menú superior.
      </p>

      <h2 className="video-heading">{videoHeading}</h2>
      <div className="about-video-wrapper">
        <video
          src={videoLink}
          controls
          className="about-video"
          playsInline
        />
      </div>

      <h2>Vista rápida de los servicios más importantes</h2>
      <div className="card-grid">
        {highlights.map((item, idx) => (
          <div className="card" key={idx}>
            <span className="icon">{item.icon}</span>
            <h2 style={{ margin: '8px 0 6px', fontSize: '1.2rem', color: '#00b894' }}>
              {item.title}
            </h2>
            <p style={{ marginBottom: 0, opacity: 0.92 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
