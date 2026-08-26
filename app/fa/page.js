export default function Home() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1787761493/farsi.webm';
  const videoHeading = '🎥 ویدیو معرفی';

  const highlights = [
    { icon: '🌍', title: 'تجارت جهانی', desc: 'فعالیت‌های تجاری در دبی، شارجه، دمشق، بریتانیا و اسپانیا' },
    { icon: '🤲', title: 'خدمات خیریه', desc: 'حمایت و کمک به یتیم‌ها، فقیرها و افراد نیازمند' },
    { icon: '🕌', title: 'مراکز مذهبی', desc: 'تأسیس و توسعه حسینیه‌ها، مدارس و مساجد' },
    { icon: '📚', title: 'تبلیغ دین', desc: 'انتشار و ترویج تعالیم مکتب اهل بیت علیهم السلام' },
    { icon: '💊', title: 'کمک‌های پزشکی', desc: 'اهدای زمین و تجهیزات برای بیمارستان‌ها و کلینیک‌های خیریه' },
    { icon: '💝', title: 'سخاوت', desc: 'صدقه جاریه و کمک‌های فراوان در سراسر جهان' }
  ];

  return (
    <div className="container">
      <h1>خوش آمدید</h1>
      <p>
        این وب‌سایت اطلاعات جامعی درباره خدمات، دستاوردها و زندگی خانم نصرت فاطمه نقوی ارائه می‌دهد.
        می‌توانید خدمات مهم آن‌ها را در زیر مشاهده کنید. برای جزئیات بیشتر از منوی بالا انتخاب کنید.
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

      <h2>نگاهی سریع به مهم‌ترین خدمات</h2>
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
