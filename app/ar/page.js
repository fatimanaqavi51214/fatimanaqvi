export default function Home() {
  const highlights = [
    { icon: '🌍', title: 'الأعمال العالمية', desc: 'النشاطات التجارية في دبي، الشارقة، دمشق، بريطانيا وإسبانيا' },
    { icon: '🤲', title: 'الخدمات الخيرية', desc: 'كفالة ومساعدة الأيتام والمحتاجين والمستحقين' },
    { icon: '🕌', title: 'المراكز الدينية', desc: 'إنشاء وتطوير الحسينيات والمدارس والمساجد' },
    { icon: '📚', title: 'الدعوة الإسلامية', desc: 'نشر وترويج تعاليم مذهب أهل البيت عليهم السلام' },
    { icon: '💊', title: 'المساعدة الطبية', desc: 'هبة الأراضي والأجهزة للمستشفيات والعيادات الخيرية' },
    { icon: '💝', title: 'السخاء', desc: 'الصدقات الجارية والهبات الوفيرة حول العالم' }
  ];

  return (
    <div className="container">
      <h1>أهلاً وسهلاً</h1>
      <p>
        هذا الموقع يقدم معلومات شاملة عن خدمات، إنجازات وحياة السيدة نصرت فاطمة نقوي.
        يمكنكم الاطلاع على أبرز الخدمات أدناه. لمزيد من التفاصيل اختروا من القائمة أعلاه.
      </p>

      <h2>نظرة سريعة على أهم الخدمات</h2>
      <div className="card-grid">
        {highlights.map((item, idx) => (
          <div className="card" key={idx}>
            <span className="icon">{item.icon}</span>
            <h2 style={{ margin: '8px 0 6px', fontSize: '1.2rem', color: '#00b894' }}>
              {item.title}
            </h2>
            <p style={{ marginBottom: 0, opacity: 0.92 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
