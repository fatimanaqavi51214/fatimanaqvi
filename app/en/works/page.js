export default function Works() {
  const list = [
    { year: '1982', text: 'Donated prime land valued at 25 million Syrian Pounds to the Syrian Government for welfare initiatives' },
    { year: '1981', text: 'Construction and founding of Hussainiya Zainab Al-Zahra in Damascus' },
    { year: '1983', text: 'Donated valuable land to the Red Crescent for a hospital and orphanage' },
    { year: '1989', text: 'Constructed mosque, healthcare clinic, and Quran memorization center in the UAE' },
    { year: '1994', text: 'Donated prime land to Ahlul Bayt World Assembly for building a grand library and Hussainiya' },
    { year: '2007', text: 'Provided advanced medical equipment and aid to Al-Zahra Welfare Clinic' }
  ];

  return (
    <div className="container">
      <h1>Key Achievements & Milestones</h1>
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
