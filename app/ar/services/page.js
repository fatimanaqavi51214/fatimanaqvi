export default function Services() {
  const list = [
    { icon: '🌍', text: 'الأعمال التجارية العالمية (دبي، الشارقة، دمشق، بريطانيا، إسبانيا)' },
    { icon: '🤲', text: 'الخدمات الخيرية والاجتماعية' },
    { icon: '🕌', text: 'إنشاء المدارس الدينية والحسينيات' },
    { icon: '👶', text: 'كفالة الأيتام والمستحقين' },
    { icon: '📖', text: 'نشر الدين وتعليم أهل البيت عليهم السلام' }
  ];

  return (
    <div className="container">
      <h1>الخدمات</h1>
      <div className="card-grid">
        {list.map((item, index) => (
          <div key={index} className="card">
            <span className="icon">{item.icon}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
