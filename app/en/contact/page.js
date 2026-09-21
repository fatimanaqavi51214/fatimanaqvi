export default function Contact() {
  const phone = '+447404640052';
  const email = 'fatimanaqavi51214@gmail.com';
  const address = 'Gulberg III, Lahore, Pakistan';

  const cards = [
    {
      icon: '📞',
      label: 'Phone / WhatsApp',
      title: 'Direct Contact',
      value: phone,
      href: `tel:${phone}`,
      linkText: 'Call Now',
      note: 'UK Number — Available daily',
    },
    {
      icon: '✉️',
      label: 'Email',
      title: 'Send an Email',
      value: email,
      href: `mailto:${email}`,
      linkText: 'Email Now',
      note: 'Responses generally provided within 24 hours',
    },
    {
      icon: '📍',
      label: 'Office Address',
      title: 'Permanent Address',
      value: address,
      href: null,
      linkText: null,
      note: 'Pakistan Address — Gulberg III, Lahore',
    },
  ];

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p className="contact-section-subheading">
        Please feel free to reach out to us — all inquiries, thoughts, and messages are warmly welcomed.
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
