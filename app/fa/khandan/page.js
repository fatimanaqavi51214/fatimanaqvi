import Image from 'next/image';

export const metadata = {
  title: 'خانواده',
  description: 'معرفی خانواده خانم نصرت فاطمه نقوی',
};

export default function Khandan() {
  const familyMembers = [
    {
      name: 'نصرت فاطمه نقوی',
      relation: 'شخصیت اصلی',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964573/f5bc5866-4ab6-4ad7-b095-dfc4c360bb22.png',
      details: [
        { label: 'نام پدر', value: 'سید محمد نقوی' },
        { label: 'نام مادر', value: 'مهر بانو نقوی' },
        { label: 'تاریخ تولد', value: '01/01/1958' },
        { label: 'محل سکونت', value: 'UK' }
      ]
    },
    {
      name: 'سید محمد نقوی',
      relation: 'پدر',
      image: null,
      details: [
        { label: 'نام پدر', value: '-' },
        { label: 'نام مادر', value: '-' },
        { label: 'تاریخ تولد', value: '-' }
      ]
    },
    {
      name: 'مهر بانو',
      relation: 'مادر',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964634/c8942b45-f72a-4f98-8d74-873befae1982.png',
      details: [
        { label: 'نام پدر', value: '-' },
        { label: 'نام مادر', value: '-' },
        { label: 'تاریخ تولد', value: '-' }
      ]
    },
    {
      name: 'غلام سرور چوهدری',
      relation: 'شوهر',
      image: null,
      details: [
        { label: 'نام پدر', value: 'فضل کریم' },
        { label: 'نام مادر', value: 'سرداران بی بی' },
        { label: 'تاریخ تولد', value: '1945' },
        { label: 'محل سکونت', value: 'لاهور' }
      ]
    },
    {
      name: 'هاجره خاتون چوهدری',
      relation: 'دختر',
      image: null,
      details: [
        { label: 'نام پدر', value: 'غلام سرور چوهدری' },
        { label: 'نام مادر', value: 'نصرت فاطمه نقوی' },
        { label: 'تاریخ تولد', value: '08/01/1985' },
        { label: 'محل سکونت', value: 'Spain' }
      ]
    },
    {
      name: 'جواد حیدر چوهدری',
      relation: 'پسر',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964508/e206754b-b65c-4470-aeec-61d7bad9b683.png',
      details: [
        { label: 'نام پدر', value: 'غلام سرور چوهدری' },
        { label: 'نام مادر', value: 'نصرت فاطمه نقوی' },
        { label: 'تاریخ تولد', value: '02/05/1987' },
        { label: 'محل سکونت', value: 'UK' }
      ]
    },
    {
      name: 'فواد حیدر چوهدری',
      relation: 'پسر',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964726/ad7c6fd0-b9de-4184-9c11-aac106600886.png',
      details: [
        { label: 'نام پدر', value: 'غلام سرور چوهدری' },
        { label: 'نام مادر', value: 'نصرت فاطمه نقوی' },
        { label: 'تاریخ تولد', value: '18/12/1992' },
        { label: 'محل سکونت', value: 'UK' }
      ]
    }
  ];

  return (
    <div className="container">
      <h1>خانواده</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
        معرفی خانواده خانم نصرت فاطمه نقوی
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
                  <span>تصویر در دسترس نیست</span>
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
