import Image from 'next/image';

export const metadata = {
  title: 'Familia',
  description: 'Introducción familiar de Nusrat Fatima Naqvi',
};

export default function Khandan() {
  const familyMembers = [
    {
      name: 'Nusrat Fatima Naqvi',
      relation: 'Persona Principal',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006330/735c4dd5-46d1-44ba-b9b8-bef1918756a0.png',
      details: [
        { label: 'Nombre del Padre', value: 'Syed Muhammad Naqvi' },
        { label: 'Nombre de la Madre', value: 'Mehr Bano Naqvi' },
        { label: 'Fecha de Nacimiento', value: '01/01/1958' },
        { label: 'Residencia', value: 'UK' }
      ]
    },
    {
      name: 'Syed Muhammad Naqvi',
      relation: 'Padre',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006303/f2c918f2-375f-42ea-af3a-36edfe28df9d.png',
      details: [
        { label: 'Nombre del Padre', value: '-' },
        { label: 'Nombre de la Madre', value: '-' },
        { label: 'Fecha de Nacimiento', value: '-' }
      ]
    },
    {
      name: 'Mehr Bano',
      relation: 'Madre',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006260/3d67c470-f668-42da-b8eb-f9bc018cb334.png',
      details: [
        { label: 'Nombre del Padre', value: '-' },
        { label: 'Nombre de la Madre', value: '-' },
        { label: 'Fecha de Nacimiento', value: '-' }
      ]
    },
    {
      name: 'Ghulam Sarwar Chaudhry',
      relation: 'Esposo',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006363/8418d8a8-c052-4ba4-ad4e-e49b4edb2e71.png',
      details: [
        { label: 'Nombre del Padre', value: 'Fazal Karim' },
        { label: 'Nombre de la Madre', value: 'Sardaran Bibi' },
        { label: 'Fecha de Nacimiento', value: '1945' },
        { label: 'Residencia', value: 'Lahore' }
      ]
    },
    {
      name: 'Hajra Khatoon Chaudhry',
      relation: 'Hija',
      image: null,
      details: [
        { label: 'Nombre del Padre', value: 'Ghulam Sarwar Chaudhry' },
        { label: 'Nombre de la Madre', value: 'Nusrat Fatima Naqvi' },
        { label: 'Fecha de Nacimiento', value: '08/01/1985' },
        { label: 'Residencia', value: 'Spain' }
      ]
    },
    {
      name: 'Jawad Haider Chaudhry',
      relation: 'Hijo',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006237/9683ab32-ab6b-4d15-a658-ebf31a8e737b.png',
      details: [
        { label: 'Nombre del Padre', value: 'Ghulam Sarwar Chaudhry' },
        { label: 'Nombre de la Madre', value: 'Nusrat Fatima Naqvi' },
        { label: 'Fecha de Nacimiento', value: '02/05/1987' },
        { label: 'Residencia', value: 'UK' }
      ]
    },
    {
      name: 'Fawad Haider Chaudhry',
      relation: 'Hijo',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964726/ad7c6fd0-b9de-4184-9c11-aac106600886.png',
      details: [
        { label: 'Nombre del Padre', value: 'Ghulam Sarwar Chaudhry' },
        { label: 'Nombre de la Madre', value: 'Nusrat Fatima Naqvi' },
        { label: 'Fecha de Nacimiento', value: '18/12/1992' },
        { label: 'Residencia', value: 'UK' }
      ]
    }
  ];

  return (
    <div className="container">
      <h1>Familia</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
        Introducción familiar de Nusrat Fatima Naqvi
      </p>

      <div className="family-grid">
        {familyMembers.map((member, idx) => (
          <div className="family-card" key={idx}>
            <div className="family-image-frame">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="family-image" 
                />
              ) : (
                <div className="family-placeholder">
                  <span>Imagen no disponible</span>
                </div>
              )}
            </div>
            <div className="family-info">
              <h3>{member.name}</h3>
              <span className="relation">{member.relation}</span>
              
              <div className="family-details">
                {member.details.map((detail, dIdx) => (
                  <div className="detail-row" key={dIdx}>
                    <span className="detail-label">{detail.label}:</span>
                    <span className="detail-value">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="family-bio-section" style={{ marginTop: '50px', padding: '30px', background: 'rgba(255,255,255,0.03)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{ fontSize: '1.15rem', lineHeight: '2.2', textAlign: 'justify', color: '#e0e0e0', margin: 0 }}>
          La señora Nusrat Fatima Naqvi nació en 1958 en la ciudad de Karachi, Pakistán. El nombre de su padre es Syed Muhammad Naqvi y el de su madre es Mehr Bano. Nacida en una familia educada y practicante, Nusrat Fatima tuvo desde el principio la firme determinación de avanzar en los campos del conocimiento y la acción, y hoy sigue participando activamente con el mismo entusiasmo. Su marido fue el difunto Ghulam Sarwar Chaudhry, que falleció el 31 de octubre de 2005 en Lahore. Sus hijos incluyen a Hajra Khatoon Chaudhry, Jawad Haider Chaudhry y Fawad Haider Chaudhry. Su dirección permanente en Pakistán es Gulberg III, Lahore. Su esposo tenía tanta confianza en sus habilidades administrativas que en 2004 le otorgó plenos poderes legales (Poder Especial) para administrar el negocio, la educación de los niños y los asuntos de viaje.
        </p>
      </div>
    </div>
  );
}
