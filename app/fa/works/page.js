export default function Works() {
  const list = [
    { year: '۱۹۸۲', text: 'اهدای زمینی به ارزش ۲۵ میلیون لیر سوریه به دولت سوریه' },
    { year: '۱۹۸۱', text: 'ساخت حسینیه زینب الزهرا در دمشق' },
    { year: '۱۹۸۳', text: 'اهدای زمین به هلال احمر برای بیمارستان و خانه یتیم' },
    { year: '۱۹۸۹', text: 'پیشنهاد ساخت مسجد، کلینیک و مرکز حفظ قرآن در امارات' },
    { year: '۱۹۹۴', text: 'اهدای زمین به مجمع جهانی اهل بیت برای کتابخانه و حسینیه' },
    { year: '۲۰۰۷', text: 'تبرع تجهیزات پزشکی و کمک به درمانگاه الزهرا' }
  ];

  return (
    <div className="container">
      <h1>دستاوردها</h1>
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
