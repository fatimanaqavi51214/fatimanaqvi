export default function Contact() {
  const phone = '+447404640052';
  const email = 'fatimanaqavi51214@gmail.com';
  const address = 'گلبرگ تھری، لاہور، پاکستان';

  const cards = [
    {
      icon: '📞',
      label: 'فون / واٹس ایپ',
      title: 'براہِ راست رابطہ',
      value: phone,
      href: `tel:${phone}`,
      linkText: 'کال کریں',
      note: 'برطانیہ کا نمبر — روزانہ دستیاب',
    },
    {
      icon: '✉️',
      label: 'ای میل',
      title: 'ای میل بھیجیں',
      value: email,
      href: `mailto:${email}`,
      linkText: 'ای میل کریں',
      note: 'جوابات عام طور پر 24 گھنٹوں میں دیے جاتے ہیں',
    },
    {
      icon: '📍',
      label: 'پتہ',
      title: 'آفس کا پتہ',
      value: address,
      href: null,
      linkText: null,
      note: 'پاکستان میں مقیم — مقامی اردو زبان سے رابطہ کریں',
    },
  ];

  return (
    <div className="container">
      <h1>رابطہ کریں</h1>
      <p className="contact-section-subheading">
        ہم سے رابطہ کرنے میں ہچکچاہٹ نہ کریں — آپ کے تمام سوالات اور مشورے کا استقبال ہے
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
