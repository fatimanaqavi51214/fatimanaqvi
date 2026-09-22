export default function Works() {
  const list = [
    { year: '1982', text: 'Donated land worth 25 million Syrian Liras to the Syrian Government' },
    { year: '1981', text: 'Construction of Hussainiya Zainab Al-Zahra in Damascus' },
    { year: '1983', text: 'Donated land to the Red Crescent for a hospital and orphanage' },
    { year: '1989', text: 'Construction of a mosque, clinic, and Quran memorization center in the UAE' },
    { year: '1994', text: 'Donated land to Ahlul Bayt World Assembly for a library and Hussainiya' },
    { year: '2007', text: 'Donated medical equipment and aid to Mustawsaf Al-Zahra' }
  ];

  return (
    <div className="container">
      <h1>Achievements</h1>
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
