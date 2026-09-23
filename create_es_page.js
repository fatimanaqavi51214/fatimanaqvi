const fs = require('fs');

const esDiaryContent = `import ShareWidget from '@/components/ShareWidget';

export default function Diary() {
  const diaryEntries = [
    {
      date: '23 de septiembre de 2026',
      mainTitle: 'Una página del diario de la Sra. Nusrat Fatima Naqvi',
      blocks: [
        {
          title: 'El grito de un corazón roto: El trauma de la traición en la tierra del amor',
          icon: '💔',
          text: 'Siria no es simplemente un trozo de tierra, sino un capítulo grandioso y sagrado de historia y espiritualidad. Esta es la tierra bendita donde descansan la nieta del Profeta de Dios (BPD), la segunda Zahra, Su Eminencia Syeda Zainab (p), y la amada hija del Maestro de los Mártires Imam Hussain (p), Su Eminencia Sakina (p). Además de ellas, esta tierra pura es el lugar de descanso final de innumerables Profetas, Compañeros y Santos. La espiritualidad de esta tierra y el amor por estas personalidades puras hicieron tal hogar en nuestros corazones que abandonamos con gusto la lujosa vida en una ciudad como Dubái, nuestros excelentes negocios establecidos y nuestra cómoda residencia.\\n\\nEn el amor por estas grandes personalidades, nos instalamos en Siria para vivir nuestras vidas bajo su sombra. Pasamos nuestro tiempo y riqueza aquí, establecimos nuevos negocios y participamos plenamente en obras sociales y filantrópicas. Hicimos nuestra misión servir a los peregrinos y viajeros provenientes de cualquier rincón del mundo, acogiéndolos lo mejor que pudimos. Esto no es un secreto; todos en la zona son testigos de esto, y los lugareños me conocen muy bien por el nombre de "Umm-e-Haider" y por mis servicios desinteresados.\\n\\nPero hoy, el corazón está extremadamente pesado, y escribir estas palabras trae un sentimiento de inmensa agonía. La tierra donde construimos un buen nombre con tanto amor, afecto y sinceridad, y servimos a la gente, a cambio no recibimos más que dolor, tristeza y sufrimiento por parte de los lugareños. Sembramos semillas de amor y lealtad, pero a cambio enfrentamos traición y pérdidas.\\n\\nComo actualmente resido en el Reino Unido, aprovechando mi ausencia, nuestro piso en Siria fue saqueado sin piedad el año pasado, y robaron artículos extremadamente valiosos. El colmo de la opresión es que, justo ayer, este mismo piso fue incendiado. Esto no es simplemente una pérdida de propiedad, sino el asesinato de la confianza y la sinceridad que habíamos depositado en esta tierra y su gente.\\n\\nEl lugar donde derramamos nuestra sangre y sudor para construir una reputación de honor, buen nombre y amor; el comportamiento cruel de la gente de allí es un trauma profundo e inolvidable para nosotros. Hoy, estas palabras no son solo un escrito, sino el grito agónico de un corazón triste, expresando la desesperación de que dimos todo para ser leales a esta tierra, pero a cambio no recibimos más que cenizas y agravios.'
        }
      ]
    },
    {
      date: '20 de septiembre de 2026',
      mainTitle: 'El mensaje de hoy de la Sra. Nusrat Fatima Naqvi',
      blocks: [
        {
          title: 'La riqueza, una prueba y los derechos de las personas',
          icon: '⚖️',
          text: 'La riqueza otorgada por la naturaleza no es simplemente una bendición, sino una prueba severa. La riqueza en manos de los ricos es en realidad un fideicomiso para los pobres, del cual ellos son meramente custodios. En el Día del Juicio, a estas personas con autoridad y a los ricos se les interrogará estrictamente por qué, cuando tenían los recursos, no cumplieron con los derechos de los merecedores.'
        },
        {
          title: 'Tolerancia religiosa y respeto a la humanidad',
          icon: '🕊️',
          text: 'El propósito fundamental de los cuatro libros revelados por la divinidad es la guía y salvación de la humanidad. Estas enseñanzas exigen que toda religión sea respetada con suma sinceridad.\\n\\nAllah Todopoderoso dice en la Sura Al-An\'am: "Y (¡Oh musulmanes!) no insulten a esos (falsos dioses) que ellos invocan en lugar de Allah, no sea que insulten a Allah por enemistad y sin conocimiento."\\n\\nPor lo tanto, no hables mal de la religión de nadie, para que a cambio, nadie hable mal de la tuya. Este respeto y tolerancia mutuos son la base de una humanidad pacífica y unida.'
        },
        {
          title: 'El espíritu desinteresado de servicio de Ahlul Bayt (p)',
          icon: '🕋',
          text: 'Los ejemplos más grandes y brillantes de la humanidad se encuentran en la vida del Santo Profeta (BPD), el Imam Alí Al-Murtaza (p) y el Imam Zain-ul-Abideen (p). La historia es testigo de que cuando estas personalidades puras fueron bañadas después de su fallecimiento, tenían profundas cicatrices en la espalda y los hombros.\\n\\nEstas marcas no eran de espadas, sino causadas por cargar pesados sacos de raciones y suministros a las casas de los pobres en la oscuridad de la noche durante años. Su grandeza radicaba en el hecho de que, al distribuir estas raciones, nunca preguntaban por el vecindario, la casta, la secta o la religión de nadie. Ya fuera que alguien fuera judío, cristiano, un incrédulo o perteneciera a cualquier otra religión, a sus ojos, era ante todo un "siervo de Dios" y, basándose en esto, ayudaban desinteresadamente a todos.'
        },
        {
          title: 'La historia del Profeta Abraham (p) y la inmensidad de la misericordia del Señor',
          icon: '📖',
          text: 'Un hermoso vistazo de este amor sin discriminación se describe en el libro "Bustan" del Jeque Saadi. Era un bendito hábito del Profeta Abraham (p) nunca comer sin un invitado. Una vez sucedió que pasó una semana entera y no llegó ningún invitado. Salió en busca de uno. Vio a un hombre muy anciano y el Profeta Abraham (p) lo invitó a su casa a comer con gran respeto.\\n\\nCuando se sirvió la comida, el anciano comenzó a comer en silencio. El Profeta Abraham (p) preguntó con sorpresa: "¡Oh respetable anciano! ¿No es mejor agradecer al Señor que provee el sustento?". El frágil hombre respondió: "Soy un adorador del fuego". El Profeta Abraham (p) le pidió enojado que abandonara la mesa.\\n\\nEn ese mismo momento, llegó una revelación de Allah: "¡Oh Abraham! Le di vida a esta persona durante cien años, le proveí sustento y, a pesar de su incredulidad, nunca le quité su comida y agua. Y tú, mi siervo, ¿no pudiste tolerarlo ni siquiera para una sola comida?"\\n\\nEl Profeta Abraham (p) fue invadido por un intenso remordimiento. Inmediatamente corrió descalzo en busca del anciano. Se disculpó y lo trajo de vuelta con gran respeto y lo sentó a la mesa. El anciano se sorprendió mucho por este comportamiento y preguntó la razón. El Profeta Abraham (p), llorando, dijo cómo el Señor del Universo había reprendido a Su amigo por el bien de este anciano.\\n\\nAl escuchar esto, el anciano quedó atónito, los ojos se le llenaron de lágrimas y gritó: "¡Cuán Generoso, Misericordioso y Amable es ese Señor que reprende a Su amado Profeta por una persona desobediente como yo!" Inmediatamente se arrepintió con un corazón sincero y abrazó la fe en la Unicidad de Allah.'
        },
        {
          title: 'El Mensaje de la Humanidad',
          icon: '🌟',
          text: 'En el mundo actual, cuando la sociedad está sumida en la envidia, la malicia y los prejuicios religiosos y sectarios, debemos recordar que el mayor acto de adoración a los ojos de Dios es la "Humanidad". Aquellos que externamente afirman tener simpatía pero internamente sufren de malicia y discriminación deben aprender del carácter de estas grandes personalidades que la verdadera religión significa difundir el amor, respetar sin discriminación y abrazar a todo ser humano.'
        }
      ]
    }
  ];

  return (
    <div className="home-wrapper" style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
      <section className="message-section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {diaryEntries.map((entry, entryIdx) => (
            <div className="message-paper" key={entryIdx}>
              <div className="message-header">
                <h2 className="message-main-title">{entry.mainTitle}</h2>
                <div className="message-divider"></div>
              </div>
              
              <div className="message-content-wrapper">
                {entry.blocks.map((msg, idx) => (
                  <div className="message-block" key={idx}>
                    <h3 className="message-block-title">
                      <span className="msg-icon">{msg.icon}</span>
                      {msg.title}
                    </h3>
                    {msg.text.split('\\n\\n').map((paragraph, pIdx) => (
                      <p className="message-block-text" key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="message-footer">
                <div className="signature-box">
                  <span className="sig-name">Nusrat Fatima Naqvi</span>
                  <span className="sig-title">(Abogada de la Humanidad)</span>
                  <span className="sig-date">{entry.date}</span>
                </div>
                <ShareWidget title={entry.mainTitle} text={entry.blocks[0].title} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}`;

const esPageContent = `import ShareWidget from '@/components/ShareWidget';

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
        'Asociación en el restaurante "Mat\\'am Al-Tuma" en Ajman',
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
`;

fs.mkdirSync('app/es/diary', { recursive: true });
fs.writeFileSync('app/es/diary/page.js', esDiaryContent);
fs.writeFileSync('app/es/page.js', esPageContent);
console.log('Created es diary and updated es page.');
