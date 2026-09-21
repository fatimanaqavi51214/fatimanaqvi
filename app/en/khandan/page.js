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
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006330/735c4dd5-46d1-44ba-b9b8-bef1918756a0.png',
      details: [
        { label: "Father's Name", value: 'Syed Muhammad Naqvi' },
        { label: "Mother's Name", value: 'Mehr Bano Naqvi' },
        { label: 'Date of Birth', value: '01/01/1958' },
        { label: 'Residence', value: 'UK' }
      ]
    },
    {
      name: 'Syed Muhammad Naqvi',
      relation: 'Father',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006303/f2c918f2-375f-42ea-af3a-36edfe28df9d.png',
      details: [
        { label: "Father's Name", value: '-' },
        { label: "Mother's Name", value: '-' },
        { label: 'Date of Birth', value: '-' }
      ]
    },
    {
      name: 'Mehr Bano',
      relation: 'Mother',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006260/3d67c470-f668-42da-b8eb-f9bc018cb334.png',
      details: [
        { label: "Father's Name", value: '-' },
        { label: "Mother's Name", value: '-' },
        { label: 'Date of Birth', value: '-' }
      ]
    },
    {
      name: 'Ghulam Sarwar Chaudhry',
      relation: 'Husband',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006363/8418d8a8-c052-4ba4-ad4e-e49b4edb2e71.png',
      details: [
        { label: "Father's Name", value: 'Fazal Karim' },
        { label: "Mother's Name", value: 'Sardaran Bibi' },
        { label: 'Date of Birth', value: '1945' },
        { label: 'Residence', value: 'Lahore' }
      ]
    },
    {
      name: 'Hajra Khatoon Chaudhry',
      relation: 'Daughter',
      image: null,
      details: [
        { label: "Father's Name", value: 'Ghulam Sarwar Chaudhry' },
        { label: "Mother's Name", value: 'Nusrat Fatima Naqvi' },
        { label: 'Date of Birth', value: '08/01/1985' },
        { label: 'Residence', value: 'Spain' }
      ]
    },
    {
      name: 'Jawad Haider Chaudhry',
      relation: 'Son',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006237/9683ab32-ab6b-4d15-a658-ebf31a8e737b.png',
      details: [
        { label: "Father's Name", value: 'Ghulam Sarwar Chaudhry' },
        { label: "Mother's Name", value: 'Nusrat Fatima Naqvi' },
        { label: 'Date of Birth', value: '02/05/1987' },
        { label: 'Residence', value: 'UK' }
      ]
    },
    {
      name: 'Fawad Haider Chaudhry',
      relation: 'Son',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964726/ad7c6fd0-b9de-4184-9c11-aac106600886.png',
      details: [
        { label: "Father's Name", value: 'Ghulam Sarwar Chaudhry' },
        { label: "Mother's Name", value: 'Nusrat Fatima Naqvi' },
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

      <div className="family-bio-section" style={{ marginTop: '50px', padding: '30px', background: 'rgba(255,255,255,0.03)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{ fontSize: '1.15rem', lineHeight: '2.2', textAlign: 'justify', color: '#e0e0e0', margin: 0 }}>
          Madam Nusrat Fatima Naqvi was born in 1958 in Karachi, Pakistan. Her father's name is Syed Muhammad Naqvi and her mother's name is Mehr Bano. Born into an educated and practicing family, Nusrat Fatima had a firm resolve from the very beginning to advance in the fields of knowledge and action, and she continues to be actively engaged with the same enthusiasm today. Her husband was the late Ghulam Sarwar Chaudhry, who passed away on October 31, 2005, in Lahore. Her children include Hajra Khatoon Chaudhry, Jawad Haider Chaudhry, and Fawad Haider Chaudhry. Her permanent address in Pakistan is Gulberg III, Lahore. Her husband had such confidence in her administrative abilities that in 2004, he granted her full legal authority (Special Power of Attorney) to manage the business, children's education, and travel matters.
        </p>
      </div>
    </div>
  );
}
