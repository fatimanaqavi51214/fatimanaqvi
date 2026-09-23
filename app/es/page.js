import ShareWidget from '@/components/ShareWidget';

export default function Home() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1787490225/spanish.mp4';
  const videoHeading = '🎥 Un Vistazo Introductorio';

  const ideology = [
    { icon: '🕊️', title: 'Humanidad y Paz', desc: 'El Islam es una religión de paz y seguridad. Apoyar a cada persona pobre, angustiada y necesitada es nuestro deber principal.' },
    { icon: '🤝', title: 'Unidad de la Ummah', desc: 'Todos los musulmanes deben unirse y olvidar viejas diferencias. Presentar al Islam como una religión de bienestar.' },
    { icon: '🌍', title: 'Ayuda Internacional', desc: 'Compromiso con las labores de bienestar internacional, cementerios islámicos y servicio desinteresado a la humanidad que sufre.' },
    { icon: '💡', title: 'Conciencia y Sensatez', desc: 'La erradicación de la ignorancia de la sociedad no se esconde solo en la educación formal, sino en la implementación de las enseñanzas de las personalidades puras.' },
  ];

  const businesses = [
    { 
      country: 'Emiratos Árabes Unidos', 
      icon: '🇦🇪', 
      details: [
        'Inició negocios en Dubái y Sharjah en la década de 1970',
        'Fábrica de bloques en Sharjah y "Al-Rafidain General Decor" (1977)',
        'Taller de reparación de vehículos "Garage Al-Rafidain" (1980)',
        'Asociación en el restaurante "Mat\'am Al-Tuma" en Ajman',
        'Gerente de Ventas en "Asli General Trading" (1997)'
      ] 
    },
    { 
      country: 'Siria (Damasco)', 
      icon: '🇸🇾', 
      details: [
        'Un magnífico hotel y varios pisos en la histórica ciudad de Damasco',
        'Una enorme red de importación-exportación (según la Cámara de Comercio en 2010)',
        'Amplio comercio de ropa, electrónica, libros y computadoras',
        'Comercio global de equipos médicos, láser y materiales de construcción'
      ] 
    },
    { 
      country: 'Reino Unido y España', 
      icon: '🇬🇧', 
      details: [
        'Residencia actual en el Reino Unido y España',
        'Excelente supervisión de negocios globales y actividades sociales desde allí',
        'Extensión de la visión de bienestar a Europa y establecimiento de centros religiosos'
      ] 
    }
  ];

  const charities = [
    { 
      year: 'Donaciones y Construcciones en Siria', 
      title: 'Gran Donación Oficial y Social', 
      desc: 'En 1982, donó un valioso terreno valorado en 25 millones de liras sirias al gobierno sirio para obras de bienestar. Construyó la "Hussainiya Zainab Al-Zahra" en 1981. Gastó 1,5 millones de liras en la construcción del cementerio de Bab al-Saghir. Donó terrenos para un dispensario en 1996 y proporcionó equipo médico a Mustawsaf Al-Zahra (clínica de bienestar) en 2007.' 
    },
    { 
      year: 'Centros de Bienestar en Emiratos Árabes Unidos', 
      title: 'Establecimiento del Centro Islámico y Orfanato', 
      desc: 'En 1989, adquirió 40.000 metros de terreno cerca del aeropuerto de Abu Dhabi y los dedicó a un centro islámico, un orfanato, un centro de Tafsir del Corán, una mezquita y alojamientos masculinos/femeninos para trabajadores (pakistaníes, indios, bengalíes).' 
    },
    { 
      year: 'Obras de Caridad en Pakistán e India', 
      title: 'Construcción de Santuarios y Ayuda a los Pobres', 
      desc: 'Donó millones de rupias y divisas extranjeras para la construcción y pintura de Data Darbar (1990), Bibi Pak Daman (1989) y Darbar Bari Imam (1995). Pagó inmensas cantidades por el matrimonio, la formación y la alimentación de niñas pobres en Allahabad (India). En Pakistán se ha asignado una gran extensión de terreno para una fábrica para los pobres y un Centro para la Humanidad.' 
    },
    { 
      year: 'Servicios Religiosos y de Predicación', 
      title: 'Cooperación con la Asamblea Mundial de Ahlul Bayt (p)', 
      desc: 'En enero de 1994, donó un valioso terreno por valor de 4 millones de libras sirias a la Asamblea Mundial de Ahlul Bayt (p) para que se pudieran construir allí una gran biblioteca, una Hussainiya, una casa de huéspedes y una oficina.' 
    }
  ];

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="hero-modern">
        <div className="hero-content">
          <p className="hero-desc">
            Una gran mujer de lucha constante y un corazón que late por la humanidad. A pesar de sus éxitos mundanales, mantuvo su alma conectada al Creador del Universo y al servicio a la humanidad.
          </p>
          <div className="hero-quote">
            "El propósito fundamental de los cuatro libros revelados por la divinidad es la guía y salvación de la humanidad. Estas enseñanzas exigen que toda religión sea respetada desde el corazón."
            <span style={{ fontSize: '1rem', color: '#55efc4', display: 'block', marginTop: '10px' }}>Nusrat Fatima Naqvi</span>
            <ShareWidget title="Cita de la Sra. Nusrat Fatima Naqvi" text="El propósito fundamental de los cuatro libros revelados por la divinidad es la guía y salvación de la humanidad." />
            <div style={{ marginTop: '30px', lineHeight: '2', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                <span>Que nunca me muestres el día, mi Señor</span>
                <span>En el que me sienta orgullosa de mí misma</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                <span>Mantenme en los corazones de todos de tal manera</span>
                <span>Que todos se vean obligados a rezar por mí</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <h2 className="section-title glow-text text-center">{videoHeading}</h2>
        <div className="video-container-modern">
          <video src={videoLink} controls playsInline preload="metadata" className="promo-video" />
          <ShareWidget title="Un vistazo introductorio a la Sra. Nusrat Fatima Naqvi" />
        </div>
      </section>

      {/* Detailed Business Section */}
      <section className="business-detailed-section">
        <div className="container">
          <h2 className="section-title text-center">Logros Comerciales Globales</h2>
          <p className="text-center" style={{ color: '#b0c4de', marginBottom: '40px', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px' }}>
            Una mujer muy activa y valiente que ha demostrado que, con determinación y coraje, se pueden plantar las banderas del éxito en todos los campos.
          </p>
          <div className="business-grid-modern">
            {businesses.map((biz, idx) => (
              <div className="business-card-modern" key={idx}>
                <div className="biz-header">
                  <span className="biz-icon">{biz.icon}</span>
                  <h3 className="biz-country">{biz.country}</h3>
                </div>
                <ul className="biz-list">
                  {biz.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <ShareWidget title="Logros Comerciales Globales" />
          </div>
        </div>
      </section>

      {/* Detailed Philanthropy / Charities Section */}
      <section className="charity-timeline-section">
        <div className="container">
          <h2 className="section-title text-center">Grandes Servicios Filantrópicos y Sociales</h2>
          <div className="timeline-modern-container">
            {charities.map((charity, idx) => (
              <div className="timeline-modern-item" key={idx}>
                <div className="timeline-modern-dot"></div>
                <div className="timeline-modern-content">
                  <span className="timeline-modern-year">{charity.year}</span>
                  <h3 className="timeline-modern-title">{charity.title}</h3>
                  <p className="timeline-modern-desc">{charity.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <ShareWidget title="Grandes Servicios Filantrópicos y Sociales" />
          </div>
        </div>
      </section>

      {/* Ideology Section */}
      <section className="ideology-section">
        <div className="container">
          <h2 className="section-title text-center">Ideología y Pensamientos (La Voz del Pueblo)</h2>
          <div className="ideology-grid">
            {ideology.map((item, idx) => (
              <div className="ideology-card" key={idx}>
                <div className="card-icon">{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="quote-box">
            <span className="quote-mark">❝</span>
            <p>
              Haz el bien mientras tus pies estén sobre la tierra, pues cuando vayas bajo la tierra, tú mismo estarás necesitado de oración y Fatiha.
            </p>
            <span className="quote-author">Nusrat Fatima Naqvi</span>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <ShareWidget title="Ideología y Pensamientos (La Voz del Pueblo)" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
