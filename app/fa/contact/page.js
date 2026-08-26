export default function Contact() {
  const phone = '+447404640052';
  const email = 'fatimanaqavi51214@gmail.com';
  const address = 'گلبرگ سه، لاہور، پاکستان';

  const cards = [
    {
      icon: '📞',
      label: 'تلفن / واتساپ',
      title: 'تماس مستقیم',
      value: phone,
      href: `tel:${phone}`,
      linkText: 'تماس بگیرید',
      note: 'شماره بریتانیا — در دسترس روزانه',
    },
    {
      icon: '✉️',
      label: 'ایمیل',
      title: 'ایمیل بفرستید',
      value: email,
      href: `mailto:${email}`,
      linkText: 'ایمیل بفرستید',
      note: 'پاسخ‌ها معمولاً ظرف ۲۴ ساعت داده می‌شوند',
    },
    {
      icon: '📍',
      label: 'آدرس',
      title: 'آدرس دفتر',
      value: address,
      href: null,
      linkText: null,
      note: 'مقیم پاکستان — با زبان محلی اردو تماس بگیرید',
    },
  ];

  return (
    <div className="container">
      <h1>تماس با ما</h1>
      <p className="contact-section-subheading">
        در تماس با ما تردید نکنید — همهٔ سوالات و پیشنهادهای شما خوش‌آمد است
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
