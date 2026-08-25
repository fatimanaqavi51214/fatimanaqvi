export default function Works() {
  const list = [
    { year: '1982', text: 'شامی حکومت کو 2.5 کروڑ شامی لیرہ کی زمین ہدیہ' },
    { year: '1981', text: 'دمشق میں حسینیہ زینب الزہراء کی تعمیر' },
    { year: '1983', text: 'ہلال احمر کو ہسپتال اور یتیم خانے کے لیے زمین' },
    { year: '1989', text: 'یو اے ای میں مسجد، کلینک، اور حفظِ قرآن کے مرکز کی تعمیر' },
    { year: '1994', text: 'مجمع جهانی اہل البیت کو لائبریری اور حسینیہ کے لیے زمین' },
    { year: '2007', text: 'مستوصف الزہراء کو طبی آلات اور امداد' }
  ];

  return (
    <div className="container">
      <h1>کارنامے</h1>
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
