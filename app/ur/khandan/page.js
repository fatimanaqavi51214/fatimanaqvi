import Image from 'next/image';

export const metadata = {
  title: 'خاندان',
  description: 'محترمہ نصرت فاطمہ نقوی کا خاندانی تعارف',
};

export default function Khandan() {
  const familyMembers = [
    {
      name: 'نصرت فاطمہ نقوی',
      relation: 'مرکزی شخصیت',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964573/f5bc5866-4ab6-4ad7-b095-dfc4c360bb22.png',
      details: [
        { label: 'والد کا نام', value: 'سید محمد نقوی' },
        { label: 'والدہ کا نام', value: 'مہر بانو نقوی' },
        { label: 'تاریخ پیدائش', value: '01/01/1958' },
        { label: 'سکونت', value: 'UK' }
      ]
    },
    {
      name: 'سید محمد نقوی',
      relation: 'والد',
      image: null,
      details: [
        { label: 'والد کا نام', value: '-' },
        { label: 'والدہ کا نام', value: '-' },
        { label: 'تاریخ پیدائش', value: '-' }
      ]
    },
    {
      name: 'مہر بانو',
      relation: 'والدہ',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964634/c8942b45-f72a-4f98-8d74-873befae1982.png',
      details: [
        { label: 'والد کا نام', value: '-' },
        { label: 'والدہ کا نام', value: '-' },
        { label: 'تاریخ پیدائش', value: '-' }
      ]
    },
    {
      name: 'غلام سرور چوہدری',
      relation: 'شوہر',
      image: null,
      details: [
        { label: 'والد کا نام', value: 'فضل کریم' },
        { label: 'والدہ کا نام', value: 'سرداراں بی بی' },
        { label: 'تاریخ پیدائش', value: '1945' },
        { label: 'سکونت', value: 'لاہور' }
      ]
    },
    {
      name: 'حاجرہ خاتون چوہدری',
      relation: 'بیٹی',
      image: null,
      details: [
        { label: 'والد کا نام', value: 'غلام سرور چوہدری' },
        { label: 'والدہ کا نام', value: 'نصرت فاطمہ نقوی' },
        { label: 'تاریخ پیدائش', value: '08/01/1985' },
        { label: 'سکونت', value: 'Spain' }
      ]
    },
    {
      name: 'جواد حیدر چوہدری',
      relation: 'بیٹا',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964508/e206754b-b65c-4470-aeec-61d7bad9b683.png',
      details: [
        { label: 'والد کا نام', value: 'غلام سرور چوہدری' },
        { label: 'والدہ کا نام', value: 'نصرت فاطمہ نقوی' },
        { label: 'تاریخ پیدائش', value: '02/05/1987' },
        { label: 'سکونت', value: 'UK' }
      ]
    },
    {
      name: 'فواد حیدر چوہدری',
      relation: 'بیٹا',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1789964726/ad7c6fd0-b9de-4184-9c11-aac106600886.png',
      details: [
        { label: 'والد کا نام', value: 'غلام سرور چوہدری' },
        { label: 'والدہ کا نام', value: 'نصرت فاطمہ نقوی' },
        { label: 'تاریخ پیدائش', value: '18/12/1992' },
        { label: 'سکونت', value: 'UK' }
      ]
    }
  ];

  return (
    <div className="container">
      <h1>خاندان</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
        محترمہ نصرت فاطمہ نقوی کا خاندانی تعارف
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
                  <span>تصویر دستیاب نہیں</span>
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
