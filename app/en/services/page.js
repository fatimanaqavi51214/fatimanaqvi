export default function Services() {
  const list = [
    { icon: '🌍', text: 'Global Business (Dubai, Sharjah, Damascus, United Kingdom, Spain)' },
    { icon: '🤲', text: 'Humanitarian & Welfare Services' },
    { icon: '🕌', text: 'Establishment of Religious Seminaries and Hussainiyas' },
    { icon: '👶', text: 'Sponsorship and Care for Orphans and the Needy' },
    { icon: '📖', text: 'Propagation of Islamic Values and Teachings of Ahlul Bayt (a.s.)' }
  ];

  return (
    <div className="container">
      <h1>Services</h1>
      <div className="card-grid">
        {list.map((item, index) => (
          <div key={index} className="card">
            <span className="icon">{item.icon}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
