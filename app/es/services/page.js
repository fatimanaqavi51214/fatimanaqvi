export default function Services() {
  const list = [
    { icon: '🌍', text: 'Negocios globales (Dubai, Sharjah, Damasco, Reino Unido, España)' },
    { icon: '🤲', text: 'Servicios benéficos y sociales' },
    { icon: '🕌', text: 'Establecimiento de escuelas religiosas y Hussainiyas' },
    { icon: '👶', text: 'Apoyo a huérfanos y necesitados' },
    { icon: '📖', text: 'Difusión de la religión y la escuela Ahlul Bayt' }
  ];

  return (
    <div className="container">
      <h1>Servicios</h1>
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
