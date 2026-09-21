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
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006330/735c4dd5-46d1-44ba-b9b8-bef1918756a0.png',
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
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006303/f2c918f2-375f-42ea-af3a-36edfe28df9d.png',
      details: [
        { label: 'والد کا نام', value: '-' },
        { label: 'والدہ کا نام', value: '-' },
        { label: 'تاریخ پیدائش', value: '-' }
      ]
    },
    {
      name: 'مہر بانو',
      relation: 'والدہ',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006260/3d67c470-f668-42da-b8eb-f9bc018cb334.png',
      details: [
        { label: 'والد کا نام', value: '-' },
        { label: 'والدہ کا نام', value: '-' },
        { label: 'تاریخ پیدائش', value: '-' }
      ]
    },
    {
      name: 'غلام سرور چوہدری',
      relation: 'شوہر',
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006363/8418d8a8-c052-4ba4-ad4e-e49b4edb2e71.png',
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
      image: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1790006237/9683ab32-ab6b-4d15-a658-ebf31a8e737b.png',
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
