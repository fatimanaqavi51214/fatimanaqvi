import Image from 'next/image';

export const metadata = {
  title: 'خانواده',
  description: 'معرفی خانواده خانم نصرت فاطمه نقوی',
};

export default function Khandan() {
  const familyMembers = [
    {
      name: 'نصرت فاطمه نقوی',
      relation: 'شخصیت اصلی',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006330/735c4dd5-46d1-44ba-b9b8-bef1918756a0.png',
      details: [
        { label: 'نام پدر', value: 'سید محمد نقوی' },
        { label: 'نام مادر', value: 'مهر بانو نقوی' },
        { label: 'تاریخ تولد', value: '01/01/1958' },
        { label: 'محل سکونت', value: 'UK' }
      ]
    },
    {
      name: 'سید محمد نقوی',
      relation: 'پدر',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006303/f2c918f2-375f-42ea-af3a-36edfe28df9d.png',
      details: [
        { label: 'نام پدر', value: '-' },
        { label: 'نام مادر', value: '-' },
        { label: 'تاریخ تولد', value: '-' }
      ]
    },
    {
      name: 'مهر بانو',
      relation: 'مادر',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006260/3d67c470-f668-42da-b8eb-f9bc018cb334.png',
      details: [
        { label: 'نام پدر', value: '-' },
        { label: 'نام مادر', value: '-' },
        { label: 'تاریخ تولد', value: '-' }
      ]
    },
    {
      name: 'غلام سرور چوهدری',
      relation: 'شوهر',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006363/8418d8a8-c052-4ba4-ad4e-e49b4edb2e71.png',
      details: [
        { label: 'نام پدر', value: 'فضل کریم' },
        { label: 'نام مادر', value: 'سرداران بی بی' },
        { label: 'تاریخ تولد', value: '1945' },
        { label: 'محل سکونت', value: 'لاهور' }
      ]
    },
    {
      name: 'هاجره خاتون چوهدری',
      relation: 'دختر',
      image: null,
      details: [
        { label: 'نام پدر', value: 'غلام سرور چوهدری' },
        { label: 'نام مادر', value: 'نصرت فاطمه نقوی' },
        { label: 'تاریخ تولد', value: '08/01/1985' },
        { label: 'محل سکونت', value: 'Spain' }
      ]
    },
    {
      name: 'جواد حیدر چوهدری',
      relation: 'پسر',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006237/9683ab32-ab6b-4d15-a658-ebf31a8e737b.png',
      details: [
        { label: 'نام پدر', value: 'غلام سرور چوهدری' },
        { label: 'نام مادر', value: 'نصرت فاطمه نقوی' },
        { label: 'تاریخ تولد', value: '02/05/1987' },
        { label: 'محل سکونت', value: 'UK' }
      ]
    },
    {
      name: 'فواد حیدر چوهدری',
      relation: 'پسر',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964726/ad7c6fd0-b9de-4184-9c11-aac106600886.png',
      details: [
        { label: 'نام پدر', value: 'غلام سرور چوهدری' },
        { label: 'نام مادر', value: 'نصرت فاطمه نقوی' },
        { label: 'تاریخ تولد', value: '18/12/1992' },
        { label: 'محل سکونت', value: 'UK' }
      ]
    }
  ];

  return (
    <div className="container">
      <h1>خانواده</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
        معرفی خانواده خانم نصرت فاطمه نقوی
      </p>

      <div className="family-grid">
        {familyMembers.map((member, idx) => (
          <div className="family-card" key={idx}>
            <div className="family-image-frame">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="family-image" 
                />
              ) : (
                <div className="family-placeholder">
                  <span>تصویر در دسترس نیست</span>
                </div>
              )}
            </div>
            <div className="family-info">
              <h3>{member.name}</h3>
              <span className="relation">{member.relation}</span>
              
              <div className="family-details">
                {member.details.map((detail, dIdx) => (
                  <div className="detail-row" key={dIdx}>
                    <span className="detail-label">{detail.label}:</span>
                    <span className="detail-value">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="family-bio-section" style={{ marginTop: '50px', padding: '30px', background: 'rgba(255,255,255,0.03)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{ fontSize: '1.15rem', lineHeight: '2.2', textAlign: 'justify', color: '#e0e0e0', margin: 0 }}>
          خانم نصرت فاطمه نقوی در سال ۱۹۵۸ در شهر کراچی پاکستان متولد شد. نام پدر او سید محمد نقوی و نام مادرش مهر بانو است. نصرت فاطمه که در خانواده‌ای تحصیل‌کرده و معتقد به دنیا آمده بود، از همان ابتدا عزم راسخی برای پیشرفت در زمینه‌های علم و عمل داشت و امروز نیز با همان شور و اشتیاق به فعالیت خود ادامه می‌دهد. همسر وی مرحوم غلام سرور چوهدری بود که در ۳۱ اکتبر ۲۰۰۵ در لاهور درگذشت. فرزندان او شامل هاجره خاتون چوهدری، جواد حیدر چوهدری و فواد حیدر چوهدری هستند. آدرس دائمی او در پاکستان گلبرگ ۳، لاهور است. همسرش به توانایی‌های مدیریتی او چنان اعتمادی داشت که در سال ۲۰۰۴ به او اختیار قانونی کامل (وکالت‌نامه خاص) برای اداره تجارت، آموزش فرزندان و امور سفر داد.
        </p>
      </div>
    </div>
  );
}
