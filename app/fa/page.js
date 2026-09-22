export default function Home() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1787761493/farsi.mp4';
  const videoHeading = '🎥 ویدیو معرفی';

  const highlights = [
    { icon: '🌍', title: 'کسب‌وکار جهانی', desc: 'فعالیت‌های تجاری در دبئی، شارجه، دمشق، انگلستان و اسپانیا' },
    { icon: '🤲', title: 'خدمات خیریه', desc: 'یاری یتیمان، مستمندان و نیازمندان' },
    { icon: '🕌', title: 'مراکز دینی', desc: 'تأسیس و توسعه حسینیه‌ها، مدارس و مساجد' },
    { icon: '📚', title: 'تبلیغ دین', desc: 'ترویج آموزه‌های مکتب اهل بیت(ع)' },
    { icon: '💊', title: 'کمک‌های پزشکی', desc: 'اهدای زمین و تجهیزات به بیمارستان‌ها و کلینیک‌ها' },
    { icon: '💝', title: 'صدقات', desc: 'صدقات جاری و عطایا در سطح جهان' }
  ];

  return (
    <div className="container">
      <h1>خوش آمدید</h1>
      <p>
        این وب‌سایت اطلاعات جامعی درباره خدمات، دستاوردها و زندگی سرکار نصرت فاطمه نقوی ارائه می‌دهد.
        برای مشاهده جزئیات بیشتر، روی منوهای بالا کلیک کنید.
      </p>

      <h2 className="video-heading">{videoHeading}</h2>
      <div className="about-video-wrapper">
        <video
          src={videoLink}
          controls
          className="about-video"
          playsInline
          preload="metadata"
        />
      </div>

      <h2>مروری بر خدمات مهم</h2>
      <div className="card-grid">
        {highlights.map((item, idx) => (
          <div className="card" key={idx}>
            <span className="icon">{item.icon}</span>
            <h2 style={{ margin: '8px 0 6px', color: '#00b894' }}>{item.title}</h2>
            <p style={{ marginBottom: 0, opacity: 0.92 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
