import Image from 'next/image';

export const metadata = {
  title: 'Family',
  description: 'Family Introduction of Nusrat Fatima Naqvi',
};

export default function Khandan() {
  const familyMembers = [
    {
      name: 'Nusrat Fatima Naqvi',
      relation: 'Main Person',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964573/f5bc5866-4ab6-4ad7-b095-dfc4c360bb22.png',
      details: [
        { label: 'Father's Name', value: 'Syed Muhammad Naqvi' },
        { label: 'Mother's Name', value: 'Mehr Bano Naqvi' },
        { label: 'Date of Birth', value: '01/01/1958' },
        { label: 'Residence', value: 'UK' }
      ]
    },
    {
      name: 'Syed Muhammad Naqvi',
      relation: 'Father',
      image: null,
      details: [
        { label: 'Father's Name', value: '-' },
        { label: 'Mother's Name', value: '-' },
        { label: 'Date of Birth', value: '-' }
      ]
    },
    {
      name: 'Mehr Bano',
      relation: 'Mother',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964634/c8942b45-f72a-4f98-8d74-873befae1982.png',
      details: [
        { label: 'Father's Name', value: '-' },
        { label: 'Mother's Name', value: '-' },
        { label: 'Date of Birth', value: '-' }
      ]
    },
    {
      name: 'Ghulam Sarwar Chaudhry',
      relation: 'Husband',
      image: null,
      details: [
        { label: 'Father's Name', value: 'Fazal Karim' },
        { label: 'Mother's Name', value: 'Sardaran Bibi' },
        { label: 'Date of Birth', value: '1945' },
        { label: 'Residence', value: 'Lahore' }
      ]
    },
    {
      name: 'Hajra Khatoon Chaudhry',
      relation: 'Daughter',
      image: null,
      details: [
        { label: 'Father's Name', value: 'Ghulam Sarwar Chaudhry' },
        { label: 'Mother's Name', value: 'Nusrat Fatima Naqvi' },
        { label: 'Date of Birth', value: '08/01/1985' },
        { label: 'Residence', value: 'Spain' }
      ]
    },
    {
      name: 'Jawad Haider Chaudhry',
      relation: 'Son',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964508/e206754b-b65c-4470-aeec-61d7bad9b683.png',
      details: [
        { label: 'Father's Name', value: 'Ghulam Sarwar Chaudhry' },
        { label: 'Mother's Name', value: 'Nusrat Fatima Naqvi' },
        { label: 'Date of Birth', value: '02/05/1987' },
        { label: 'Residence', value: 'UK' }
      ]
    },
    {
      name: 'Fawad Haider Chaudhry',
      relation: 'Son',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964726/ad7c6fd0-b9de-4184-9c11-aac106600886.png',
      details: [
        { label: 'Father's Name', value: 'Ghulam Sarwar Chaudhry' },
        { label: 'Mother's Name', value: 'Nusrat Fatima Naqvi' },
        { label: 'Date of Birth', value: '18/12/1992' },
        { label: 'Residence', value: 'UK' }
      ]
    }
  ];

  return (
    <div className="container">
      <h1>Family</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
        Family Introduction of Nusrat Fatima Naqvi
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
                  <span>Image not available</span>
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
