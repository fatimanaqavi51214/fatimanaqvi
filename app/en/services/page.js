export default function Services() {
  const list = [
    { icon: '🌍', text: 'Global Business (Dubai, Sharjah, Damascus, UK, Spain)' },
    { icon: '🤲', text: 'Philanthropic and Social Services' },
    { icon: '🕌', text: 'Establishment of Religious Seminaries and Hussainiyas' },
    { icon: '👶', text: 'Sponsorship of Orphans and the Needy' },
    { icon: '📖', text: 'Propagation of Religion and the School of Ahlul Bayt (a.s.)' }
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
