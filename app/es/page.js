import ShareWidget from '@/components/ShareWidget';

export default function Home() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1794156627/Se%C3%B1ora_Nusrat_Fatima_Naqvi_Un_brillante_ejemplo_de_patriotismo_filantrop%C3%ADa_y_humanidad.mp4';
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
          <ShareWidget title="Señora Nusrat Fatima Naqvi — Un brillante ejemplo de patriotismo, filantropía y humanidad" />
        </div>

        {/* Video Profile / Introductory Showcase */}
        <div className="video-intro-container">
          <div className="video-intro-header">
            <h3 className="video-intro-title">Señora Nusrat Fatima Naqvi — Un brillante ejemplo de patriotismo, filantropía y humanidad</h3>
            <div className="video-intro-divider"></div>
          </div>

          <div className="video-intro-lead">
            <p>
              La señora Nusrat Fatima Naqvi es una verdadera y auténtica patriota pakistaní, una mujer digna y grandiosa. Aunque ha pasado la mayor parte de su vida inmersa en amplias actividades comerciales y sociales en varios países del mundo, el amor por su amada patria nunca ha disminuido en su corazón. La pasión y el amor por su país siempre han latido con fuerza en su pecho, y ha hecho todo lo posible para enaltecer el nombre de Pakistán en todos los rincones del mundo.
            </p>
          </div>

          <div className="video-intro-grid">
            <div className="video-intro-card">
              <div className="card-head">
                <span className="card-icon">🇵🇰</span>
                <h4>Amor por el pasaporte verde y orgullo nacional</h4>
              </div>
              <p>
                La prueba más magnífica y clara de su patriotismo es que, a pesar de lograr un inmenso éxito a nivel mundial y de pasar mucho tiempo en el extranjero, nunca adquirió la ciudadanía de ningún otro país. Está inmensamente orgullosa del 'pasaporte verde' de su país, en el cual el principio dorado del fundador de Pakistán, "Fe, Unidad, Disciplina", le sirve como guía. Presenta su pasaporte con orgullo a personas de otros países diciendo: "Miren, 'Fe, Unidad, Disciplina' está escrito en nuestro pasaporte pakistaní". Su amor y devoción por Quaid-e-Azam Muhammad Ali Jinnah y el pensador de Pakistán, Allama Muhammad Iqbal, son una parte destacada de su personalidad. Impulsada por este mismo espíritu de patriotismo, a pesar de vivir en tierras extranjeras, prefirió casarse con un pakistaní.
              </p>
            </div>

            <div className="video-intro-card">
              <div className="card-head">
                <span className="card-icon">🤝</span>
                <h4>Patrocinio y apoyo a los pakistaníes en el extranjero</h4>
              </div>
              <p>
                La señora Nusrat Fatima Naqvi ha prestado inmensos servicios no solo a Pakistán, sino también a los pakistaníes que viven en el extranjero. Cuando su negocio estaba en la cima en Dubái, proporcionó oportunidades de empleo a innumerables pakistaníes a través de sus empresas llamadas 'Rashidiya Tiles' y 'Al-Rafidain'. Empoderó económicamente a sus compatriotas y organizó excelentes alojamientos y otras instalaciones para ellos. De manera similar, en Siria, ha prestado numerosos servicios para guiar y ayudar a turistas y peregrinos (Zaireen) pakistaníes.
              </p>
            </div>

            <div className="video-intro-card">
              <div className="card-head">
                <span className="card-icon">🏢</span>
                <h4>Servicios comerciales en varios países</h4>
              </div>
              <p>
                La señora Nusrat Fatima Naqvi inició varios negocios en Dubái y Sharjah desde la década de 1970. Su propiedad comercial incluía una fábrica de bloques en Sharjah, 'Al-Rafidain General Decor' (1977), un taller de reparación de automóviles llamado 'Garage Al-Rafidain' (1980), y una asociación en 'Mat\'am Al-Ta\'ma' (restaurante) en Ajmán. Además, en 1997, también gestionó altos asuntos administrativos como Gerente de Ventas en 'Asli General Trading'. Una gran parte de su negocio existe en Siria, donde posee un magnífico hotel y varios apartamentos en una ciudad histórica como Damasco. Según los documentos de la Cámara de Comercio de Damasco de 2010, es propietaria de una enorme red de importación y exportación, que incluye un extenso comercio de ropa, productos electrónicos, libros, computadoras, equipos médicos y láser, y materiales de construcción. Según un documento de la embajada pakistaní (2025), actualmente reside en el Reino Unido y, gracias a Dios, dirige con éxito sus actividades comerciales y sociales a nivel mundial desde allí.
              </p>
            </div>

            <div className="video-intro-card">
              <div className="card-head">
                <span className="card-icon">🌧️</span>
                <h4>Ayuda a los compatriotas durante desastres naturales</h4>
              </div>
              <p>
                Su corazón siempre late con empatía por los pobres, los indigentes y los indefensos. Cada vez que Pakistán se ha enfrentado a desastres naturales como terremotos o inundaciones, la señora Nusrat Fatima Naqvi ha brindado ayuda de todo corazón. Ha estado enviando regularmente varios camiones cargados con mantas, tiendas de campaña, colchones, ropa, enfriadores de agua y prendas para niños cada año para las personas necesitadas en las zonas afectadas por las inundaciones, para secar las lágrimas de sus hermanos y hermanas afligidos.
              </p>
            </div>

            <div className="video-intro-card">
              <div className="card-head">
                <span className="card-icon">🕊️</span>
                <h4>Servicio a la humanidad — sin discriminación de religión o nación</h4>
              </div>
              <p>
                Sus servicios caritativos no se limitan a ninguna religión, secta o credo específico; su corazón late solo por la humanidad. Ha hecho de su lema servir a todos los seres humanos sin discriminación de color o raza. Distribuyó generosamente fondos, mantas, chales y esteras en los santuarios de los grandes santos sufíes de Pakistán, como Data Darbar, Bibi Pak Daman, Bari Imam y otros lugares. ¿Qué mayor ejemplo de su tolerancia podría haber que el hecho de que, junto con las mezquitas, también ha dado innumerables donaciones a los lugares de culto de las minorías —templos hindúes y gurdwaras sijs— en forma de raciones, esteras, mantas y dinero en efectivo.
              </p>
            </div>

            <div className="video-intro-card">
              <div className="card-head">
                <span className="card-icon">🌍</span>
                <h4>Logros caritativos en Siria, Líbano y Sudán</h4>
              </div>
              <p>
                Siente una devoción especial por la tierra santa de Siria, que es la tierra de profetas y santos. Uno de los propósitos principales de su presencia allí es el servicio a la humanidad. El servicio continuo a los peregrinos y turistas pakistaníes en Siria sigue en marcha. Además, en colaboración con el gobierno sirio, construyó orfanatos, dispensarios y caminos, y entregó numerosas donaciones. Es por esto que el pueblo de Siria la tiene en muy alta estima. Además, su círculo filantrópico se extiende a la construcción de orfanatos en el Líbano y la ayuda a las víctimas de terremotos en Sudán.
              </p>
            </div>
          </div>

          <div className="video-intro-message-card">
            <div className="message-head">
              <span className="message-icon">✨</span>
              <h4>Objetivo y mensaje</h4>
            </div>
            <p>
              Personalmente, a la señora Nusrat Fatima Naqvi le agradan las personas desinteresadas que son íntegras, justas y que defienden la verdad. El objetivo de su vida y su claro mensaje para la humanidad es:
            </p>
            <div className="video-intro-quote">
              "La gente se ha olvidado de Allah... ¡Por el amor de Dios! La gente debe reconocer a su Creador, adquirir el conocimiento de los Profetas, del Profeta Muhammad (la paz sea con él), de Ahl al-Bayt (la paz sea con ellos) y de los Awliya Allah (santos), y actuar sinceramente según las enseñanzas de estas grandes personalidades."
            </div>
            <p className="video-intro-conclusion">
              Este es el único camino que puede guiar a la humanidad descarriada hacia la salvación, la paz y el éxito. La vida, el carácter y los servicios de Syeda Nusrat Fatima Naqvi son un ejemplo brillante para todos nosotros.
            </p>
          </div>
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
