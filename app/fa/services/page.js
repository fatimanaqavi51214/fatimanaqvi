export default function Services() {
  const list = [
    { icon: '🌍', text: 'تجارت جهانی (دبی، شارجه، دمشق، بریتانیا، اسپانیا)' },
    { icon: '🤲', text: 'خدمات خیریه و اجتماعی' },
    { icon: '🕌', text: 'تأسیس مدارس مذهبی و حسینیه‌ها' },
    { icon: '👶', text: 'حمایت از یتیم‌ها و افراد نیازمند' },
    { icon: '📖', text: 'تبلیغ دین و ترویج مکتب اهل بیت علیهم السلام' }
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
