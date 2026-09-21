import Image from 'next/image';

export const metadata = {
  title: 'العائلة',
  description: 'تعريف بعائلة السيدة نصرت فاطمة نقوي',
};

export default function Khandan() {
  const familyMembers = [
    {
      name: 'نصرت فاطمة نقوي',
      relation: 'الشخصية الرئيسية',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964573/f5bc5866-4ab6-4ad7-b095-dfc4c360bb22.png',
      details: [
        { label: 'اسم الأب', value: 'سيد محمد نقوي' },
        { label: 'اسم الأم', value: 'مهر بانو نقوي' },
        { label: 'تاريخ الميلاد', value: '01/01/1958' },
        { label: 'الإقامة', value: 'UK' }
      ]
    },
    {
      name: 'سيد محمد نقوي',
      relation: 'الأب',
      image: null,
      details: [
        { label: 'اسم الأب', value: '-' },
        { label: 'اسم الأم', value: '-' },
        { label: 'تاريخ الميلاد', value: '-' }
      ]
    },
    {
      name: 'مهر بانو',
      relation: 'الأم',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964634/c8942b45-f72a-4f98-8d74-873befae1982.png',
      details: [
        { label: 'اسم الأب', value: '-' },
        { label: 'اسم الأم', value: '-' },
        { label: 'تاريخ الميلاد', value: '-' }
      ]
    },
    {
      name: 'غلام سرور تشودري',
      relation: 'الزوج',
      image: null,
      details: [
        { label: 'اسم الأب', value: 'فضل كريم' },
        { label: 'اسم الأم', value: 'سرداران بي بي' },
        { label: 'تاريخ الميلاد', value: '1945' },
        { label: 'الإقامة', value: 'لاهور' }
      ]
    },
    {
      name: 'هاجرة خاتون تشودري',
      relation: 'الابنة',
      image: null,
      details: [
        { label: 'اسم الأب', value: 'غلام سرور تشودري' },
        { label: 'اسم الأم', value: 'نصرت فاطمة نقوي' },
        { label: 'تاريخ الميلاد', value: '08/01/1985' },
        { label: 'الإقامة', value: 'Spain' }
      ]
    },
    {
      name: 'جواد حيدر تشودري',
      relation: 'الابن',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964508/e206754b-b65c-4470-aeec-61d7bad9b683.png',
      details: [
        { label: 'اسم الأب', value: 'غلام سرور تشودري' },
        { label: 'اسم الأم', value: 'نصرت فاطمة نقوي' },
        { label: 'تاريخ الميلاد', value: '02/05/1987' },
        { label: 'الإقامة', value: 'UK' }
      ]
    },
    {
      name: 'فؤاد حيدر تشودري',
      relation: 'الابن',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964726/ad7c6fd0-b9de-4184-9c11-aac106600886.png',
      details: [
        { label: 'اسم الأب', value: 'غلام سرور تشودري' },
        { label: 'اسم الأم', value: 'نصرت فاطمة نقوي' },
        { label: 'تاريخ الميلاد', value: '18/12/1992' },
        { label: 'الإقامة', value: 'UK' }
      ]
    }
  ];

  return (
    <div className="container">
      <h1>العائلة</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
        تعريف بعائلة السيدة نصرت فاطمة نقوي
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
                  <span>الصورة غير متوفرة</span>
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
