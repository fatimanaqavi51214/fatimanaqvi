export default function Works() {
  const list = [
    { year: '1982', text: 'Donación de terreno valorado en 25 millones de libras sirias al gobierno sirio' },
    { year: '1981', text: 'Construcción de Hussainia Zainab al-Zahra en Damasco' },
    { year: '1983', text: 'Donación de terreno a la Media Luna Roja para hospital y orfanato' },
    { year: '1989', text: 'Ofrecimiento de construir mezquita, clínica y centro de memorización del Corán en los EAU' },
    { year: '1994', text: 'Donación de terreno a la Asamblea Mundial Ahlul Bayt para biblioteca y Hussainia' },
    { year: '2007', text: 'Donación de equipos médicos y suministros para el centro de salud al-Zahra' }
  ];

  return (
    <div className="container">
      <h1>Logros</h1>
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
