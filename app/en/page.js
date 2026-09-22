export default function Home() {
  const videoLink =
    'https://res.cloudinary.com/b7xbeztp/video/upload/v1787490226/urdu.mp4';
  const videoHeading = '🎥 Introductory Video';

  const highlights = [
    { icon: '🌍', title: 'Global Enterprise', desc: 'Commercial activities in Dubai, Sharjah, Damascus, the UK, and Spain' },
    { icon: '🤲', title: 'Humanitarian Welfare', desc: 'Sponsorship and active assistance for orphans, the impoverished, and deserving families' },
    { icon: '🕌', title: 'Religious Centers', desc: 'Founding and advancing Hussainiyas, seminaries, and mosques' },
    { icon: '📚', title: 'Islamic Outreach', desc: 'Spreading and promoting the teachings of the school of Ahlul Bayt (a.s.)' },
    { icon: '💊', title: 'Medical Aid', desc: 'Donation of prime land and high-tech equipment for hospitals and clinics' },
    { icon: '💝', title: 'Generosity & Charity', desc: 'Endless donations and perpetual charity (Sadaqah Jariyah) across the globe' }
  ];

  return (
    <div className="container">
      <h1>Welcome</h1>
      <p>
        This official website presents comprehensive information regarding the life, noble achievements, and humanitarian services of Madam Nusrat Fatima Naqvi.
        Her credentials as an Advocate for Humanity are highlighted below. For further details, please browse the navigation menu above.
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

      <h2>Overview of Key Services</h2>
      <div className="card-grid">
        {highlights.map((item, idx) => (
          <div className="card" key={idx}>
            <span className="icon">{item.icon}</span>
            <h2 style={{ margin: '8px 0 6px', color: '#00b894' }}>
              {item.title}
            </h2>
            <p style={{ marginBottom: 0, opacity: 0.92 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
