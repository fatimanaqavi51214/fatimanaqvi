export default function Services() {
  const list = [
    { icon: '🌍', text: 'عالمی کاروبار (دبئی، شارجہ، دمشق، برطانیہ، سپین)' },
    { icon: '🤲', text: 'فلاحی و سماجی خدمات' },
    { icon: '🕌', text: 'دینی مدارس اور حسینیات کا قیام' },
    { icon: '👶', text: 'یتیموں اور مستحقین کی کفالت' },
    { icon: '📖', text: 'تبلیغِ دین اور مکتبِ اہل بیتؑ کی ترویج' }
  ];

  return (
    <div className="container">
      <h1>خدمات</h1>
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
