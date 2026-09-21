export default function Home() {
  const videoLink = 'https://res.cloudinary.com/b7xbeztp/video/upload/v1787489928/Arabic.mp4';
  const videoHeading = '🎥 فيديو تعريفي';

  const highlights = [
    { icon: '🌍', title: 'الأعمال العالمية', desc: 'نشاطات تجارية في دبي، الشارقة، دمشق، بريطانيا وإسبانيا' },
    { icon: '🤲', title: 'الخدمات الخيرية', desc: 'رعاية الأيتام والمحتاجين والمستحقين' },
    { icon: '🕌', title: 'المراكز الدينية', desc: 'تأسيس وتطوير الحسينية والمدارس والمساجد' },
    { icon: '📚', title: 'الدعوة الدينية', desc: 'نشر تعاليم مدرسة أهل البيت (ع)' },
    { icon: '💊', title: 'المساعدات الطبية', desc: 'هبات أرض ومعدات للمستشفيات والعيادات' },
    { icon: '💝', title: 'الصدقات', desc: 'صدقات جارية وهبات واسعة على مستوى العالم' }
  ];

  return (
    <div className="container">
      <h1>أهلاً وسهلاً</h1>
      <p>
        تعرض هذه الصفحة معلومات شاملة عن خدمات وسيرة السيدة نصرت فاطمة نقفي، وكيانها الإنساني ومميزاتها.
        يمكنكم الاطلاع على تفاصيل أكثر من خلال القوائم في الأعلى.
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

      <h2>نظرة عامة على الخدمات الرئيسية</h2>
      <div className="card-grid">
        {highlights.map((item, idx) => (
          <div className="card" key={idx}>
            <span className="icon">{item.icon}</span>
            <h2 style={{ margin: '8px 0 6px', fontSize: '1.2rem', color: '#00b894' }}>{item.title}</h2>
            <p style={{ marginBottom: 0, opacity: 0.92 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
