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
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964573/f5bc5866-4ab6-4ad7-b095-dfc4c360bb22.png',
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
      image: null,
      details: [
        { label: 'Nombre del Padre', value: '-' },
        { label: 'Nombre de la Madre', value: '-' },
        { label: 'Fecha de Nacimiento', value: '-' }
      ]
    },
    {
      name: 'Mehr Bano',
      relation: 'Madre',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964634/c8942b45-f72a-4f98-8d74-873befae1982.png',
      details: [
        { label: 'Nombre del Padre', value: '-' },
        { label: 'Nombre de la Madre', value: '-' },
        { label: 'Fecha de Nacimiento', value: '-' }
      ]
    },
    {
      name: 'Ghulam Sarwar Chaudhry',
      relation: 'Esposo',
      image: null,
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
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964508/e206754b-b65c-4470-aeec-61d7bad9b683.png',
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
    </div>
  );
}
