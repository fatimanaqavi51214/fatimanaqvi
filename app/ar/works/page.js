export default function Works() {
  const list = [
    { year: '1982', text: 'هبة أرض بقيمة 25 مليون ليرة سورية للحكومة السورية' },
    { year: '1981', text: 'بناء حسينية زينب الزهراء في دمشق' },
    { year: '1983', text: 'هبة أرض للهلال الأحمر لبناء مستشفى ودار أيتام' },
    { year: '1989', text: 'عرض بناء مسجد وعيادة ومركز لتحفيظ القرآن في الإمارات' },
    { year: '1994', text: 'هبة أرض لمجمع أهل البيت لبناء مكتبة وحسينية' },
    { year: '2007', text: 'تبرع بالأجهزة الطبية والمستلزمات المنزلية لمستوصف الزهراء' }
  ];

  return (
    <div className="container">
      <h1>الإنجازات</h1>
      <div className="timeline">
        {list.map((item, index) => (
          <div key={index} className="timeline-item">
            <span className="year">{item.year}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
