export default function Home() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1787490226/urdu.webm';
  const videoHeading = '🎥 تعارفی ویڈیو';

  const highlights = [
    { icon: '🌍', title: 'عالمی کاروبار', desc: 'دبئی، شارجہ، دمشق، برطانیہ اور سپین میں کاروباری سرگرمیاں' },
    { icon: '🤲', title: 'فلاحی خدمات', desc: 'یتیموں، غریبوں اور مستحقین کی کفالت اور مدد' },
    { icon: '🕌', title: 'مذہبی مراکز', desc: 'حسینیات، مدارس اور مساجد کا قیام اور ترقی' },
    { icon: '📚', title: 'تبلیغِ دین', desc: 'مکتبِ اہل بیتؑ کی تعلیمات کی ترویج اور پرچار' },
    { icon: '💊', title: 'طبی امداد', desc: 'ہسپتال اور کلینکس کے لیے زمین اور آلات کا عطیہ' },
    { icon: '💝', title: 'سکھاوات', desc: 'دنیا بھر میں صدقہ جاریہ اور بے حد عطیات' }
  ];

  return (
    <div className="container">
      <h1>خوش آمدید</h1>
      <p>
        یہ ویب سائٹ محترمہ نصرت فاطمہ نقوی صاحبہ کی خدمات، کارنامے اور زندگی کے متعلق جامع معلومات فراہم کرتی ہے۔
        وہ وکیل انسانیت کے عہدے نامے آپ نیچے دیکھ سکتے ہیں۔ مزید تفصیل کے لیے اوپر دیے گئے مینو پر کلک کریں۔
      </p>

      <h2 className="video-heading">{videoHeading}</h2>
      <div className="about-video-wrapper">
        <video
          src={videoLink}
          controls
          className="about-video"
          playsInline
        />
      </div>

      <h2>اہم خدمات کا جائزہ</h2>
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
