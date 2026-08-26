export default function Contact() {
  const phone = '+447404640052';
  const email = 'fatimanaqavi51214@gmail.com';
  const address = 'گلبرگ تھری، لاہور، پاکستان';

  const cards = [
    {
      icon: '📞',
      label: 'الهاتف / واتساب',
      title: 'اتصال مباشر',
      value: phone,
      href: `tel:${phone}`,
      linkText: 'اتصل الآن',
      note: 'رقم بريطاني — متاح يومياً',
    },
    {
      icon: '✉️',
      label: 'البريد الإلكتروني',
      title: 'أرسل بريداً',
      value: email,
      href: `mailto:${email}`,
      linkText: 'أرسل بريداً',
      note: 'عادة ما يتم الرد خلال ٢٤ ساعة',
    },
    {
      icon: '📍',
      label: 'العنوان',
      title: 'عنوان المكتب',
      value: address,
      href: null,
      linkText: null,
      note: 'مقيمة في باكستان — التواصل باللغة الأردية المحلية',
    },
  ];

  return (
    <div className="container">
      <h1>اتصل بنا</h1>
      <p className="contact-section-subheading">
        لا تترددوا في التواصل معنا — جميع أسئلتكم واقتراحاتكم مرحب بها
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
