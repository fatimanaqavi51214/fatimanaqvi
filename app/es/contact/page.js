export default function Contact() {
  const phone = '+447404640052';
  const email = 'fatimanaqavi51214@gmail.com';
  const address = 'Gulberg Tres, Lahore, Pakistán';

  const cards = [
    {
      icon: '📞',
      label: 'Teléfono / WhatsApp',
      title: 'Contacto directo',
      value: phone,
      href: `tel:${phone}`,
      linkText: 'Llamar',
      note: 'Número del Reino Unido — disponible todos los días',
    },
    {
      icon: '✉️',
      label: 'Correo electrónico',
      title: 'Envíanos un correo',
      value: email,
      href: `mailto:${email}`,
      linkText: 'Escribir email',
      note: 'Las respuestas suelen enviarse en 24 horas',
    },
    {
      icon: '📍',
      label: 'Dirección',
      title: 'Dirección de la oficina',
      value: address,
      href: null,
      linkText: null,
      note: 'Residente en Pakistán — contacte en idioma Urdu local',
    },
  ];

  return (
    <div className="container">
      <h1>Contáctanos</h1>
      <p className="contact-section-subheading">
        No duden en contactarnos — todas sus preguntas y sugerencias son bienvenidas
      </p>

      <div className="contact-grid">
        {cards.map((c, i) => (
          <div className="contact-card" key={i}>
            <div className="cc-icon">{c.icon}</div>
            <span className="cc-label">{c.label}</span>
            <h3>{c.title}</h3>
            {c.href ? (
              <a className="cc-value" href={c.href}>
                <span>🔗</span>
                <span>{c.value}</span>
              </a>
            ) : (
              <div className="cc-value">
                <span>🏠</span>
                <span>{c.value}</span>
              </div>
            )}
            <span className="cc-note">{c.note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
