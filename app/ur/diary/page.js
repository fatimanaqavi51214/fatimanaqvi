'use client';

import { useState, useEffect } from 'react';
import ShareWidget from '@/components/ShareWidget';

export default function Diary() {
  const [activeIdx, setActiveIdx] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const diaryImages = [
    { id: 1, title: 'ورق نمبر ۱', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159883/1.png' },
    { id: 2, title: 'ورق نمبر ۲', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159879/2.png' },
    { id: 3, title: 'ورق نمبر ۳', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159879/3.png' },
    { id: 4, title: 'ورق نمبر ۴', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159884/4.png' },
    { id: 5, title: 'ورق نمبر ۵', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159895/5.png' },
    { id: 6, title: 'ورق نمبر ۶', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159909/6.png' },
    { id: 7, title: 'ورق نمبر ۷', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159883/7.png' },
    { id: 8, title: 'ورق نمبر ۸', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159925/8.png' },
    { id: 9, title: 'ورق نمبر ۹', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159934/9.png' },
    { id: 10, title: 'ورق نمبر ۱۰', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159899/10.png' },
    { id: 11, title: 'ورق نمبر ۱۱', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159908/11.png' },
    { id: 12, title: 'ورق نمبر ۱۲', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159885/12.png' },
    { id: 13, title: 'ورق نمبر ۱۳', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159890/13.png' },
    { id: 14, title: 'ورق نمبر ۱۴', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159900/14.png' },
    { id: 15, title: 'ورق نمبر ۱۵', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159910/15.png' },
    { id: 16, title: 'ورق نمبر ۱۶', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159908/16.png' },
    { id: 17, title: 'ورق نمبر ۱۷', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159910/17.png' },
    { id: 18, title: 'ورق نمبر ۱۸', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159892/18.png' },
    { id: 19, title: 'ورق نمبر ۱۹', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159929/19.png' },
    { id: 20, title: 'ورق نمبر ۲۰', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159890/20.png' },
    { id: 21, title: 'ورق نمبر ۲۱', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159923/21.png' },
    { id: 22, title: 'ورق نمبر ۲۲', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159877/22.png' },
    { id: 23, title: 'ورق نمبر ۲۳', url: 'https://res.cloudinary.com/b7xbeztp/image/upload/v1794159878/23.png' }
  ];

  const nextImage = () => {
    setActiveIdx((prev) => (prev + 1) % diaryImages.length);
  };

  const prevImage = () => {
    setActiveIdx((prev) => (prev - 1 + diaryImages.length) % diaryImages.length);
  };

  const closeLightbox = () => {
    setActiveIdx(null);
  };

  useEffect(() => {
    if (activeIdx === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextImage();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx]);

  const diaryEntries = [
    {
      date: '23 ستمبر 2026',
      mainTitle: 'محترمہ نصرت فاطمہ نقوی کی ڈائری کا ورق',
      blocks: [
        {
          title: 'ایک ٹوٹے ہوئے دل کی صدا: محبتوں کے دیار میں جفا کا صدمہ',
          icon: '💔',
          text: 'ملکِ شام محض ایک خطہِ زمین نہیں بلکہ تاریخ اور روحانیت کا ایک عظیم اور مقدس باب ہے۔ یہ وہ مبارک سرزمین ہے جہاں رسولِ خدا صلی اللہ علیہ وآلہ وسلم کی نواسی، ثانیِ زہرا حضرت سیدہ زینب سلام اللہ علیہا اور سید الشہداء امام حسین علیہ السلام کی لاڈلی بیٹی حضرت سکینہ سلام اللہ علیہا آرام فرما ہیں۔ ان کے علاوہ یہ پاکیزہ دھرتی بے شمار انبیائے کرام، صحابہ کرام اور اولیائے عظام کی آخری آرام گاہ ہے۔ اس سرزمین کی اسی روحانیت اور ان پاکیزہ ہستیوں کی محبت نے ہمارے دلوں میں ایسا گھر کیا کہ ہم نے دبئی جیسے پرآسائش شہر کی شاندار زندگی، اپنا بسا بسایا بہترین کاروبار اور آرام دہ سکونت کو بخوشی ترک کر دیا۔\n\nان عظیم ہستیوں کے عشق میں ہم نے شام میں سکونت اختیار کی تاکہ ان کے سائے میں زندگی گزار سکیں۔ ہم نے یہاں اپنا وقت اور سرمایہ صرف کیا، نیا کاروبار جمایا اور فلاحی و سماجی کاموں میں بھرپور حصہ لیا۔ دنیا کے کسی بھی کونے سے آنے والے زائرین اور مسافروں کی خدمت کو اپنا نصب العین سمجھا اور ہر ممکن حد تک ان کی مہمان نوازی کی۔ یہ کوئی ڈھکی چھپی بات نہیں، اس علاقے کا ہر شخص اس بات کا گواہ ہے اور اہلِ مقام مجھے "امِ حیدر" کے نام اور میری ان بے لوث خدمات کے حوالے سے بخوبی جانتے ہیں۔\n\nمگر آج دل نہایت بوجھل ہے اور یہ تحریر کرتے ہوئے انتہائی کرب کا احساس ہو رہا ہے کہ جس سرزمین پر ہم نے اتنی محبت، چاہت اور خلوصِ نیت سے ایک نیک نامی بنائی اور لوگوں کی خدمت کی، بدلے میں ہمیں وہاں کے مقامی لوگوں سے سوائے تکلیف، دکھ اور آزار کے کچھ نہ ملا۔ ہم نے محبت اور وفا کے بیج بوئے، مگر بدلے میں ہمیں بے وفائی اور نقصانات کا سامنا کرنا پڑا۔\n\nچونکہ آج کل میں برطانیہ (UK) میں مقیم ہوں، میری غیر موجودگی کا فائدہ اٹھاتے ہوئے گزشتہ سال شام میں واقع ہمارے فلیٹ کو بے دردی سے لوٹا گیا اور بے حد قیمتی سامان چوری کر لیا گیا۔ ظلم کی انتہا تو یہ ہے کہ ابھی گزشتہ روز اسی فلیٹ کو آگ لگا دی گئی۔ یہ محض ایک املاک کا نقصان نہیں، بلکہ اس اعتماد اور خلوص کا قتل ہے جو ہم نے اس مٹی اور یہاں کے لوگوں پر کیا تھا۔\n\nجس جگہ ہم نے اپنا خون پسینہ ایک کر کے ایک عزت، نیک نامی اور محبت کی پہچان بنائی، وہاں کے لوگوں کا یہ ظالمانہ سلوک ہمارے لیے ایک گہرا اور ناقابلِ فراموش صدمہ ہے۔ آج یہ الفاظ محض ایک تحریر نہیں بلکہ ایک دکھی دل کی وہ کربناک صدا ہے جو اس مایوسی کو بیان کر رہی ہے کہ ہم نے تو اپنا سب کچھ لٹا کر بھی اس دھرتی سے وفا کی، مگر بدلے میں ہمیں راکھ اور رنجشوں کے سوا کچھ نہ دیا گیا۔'
        }
      ]
    },
    {
      date: '20 ستمبر 2026',
      mainTitle: 'محترمہ نصرت فاطمہ نقوی کا آج کا پیغام',
      blocks: [
        {
          title: 'دولت، امتحان اور حقوق العباد',
          icon: '⚖️',
          text: 'قدرت کی جانب سے عطا کردہ مال و دولت محض ایک نعمت نہیں، بلکہ ایک کڑا امتحان ہے۔ اہل ثروت کے پاس موجود دولت دراصل غریبوں کی امانت ہے جس کے وہ محض نگران ہیں۔ کل روزِ محشر ان مسند نشینوں اور امراء سے باقاعدہ پرسش ہوگی کہ جب ان کے پاس وسائل تھے، تو انہوں نے مستحقین کا حق کیوں ادا نہیں کیا؟'
        },
        {
          title: 'مذہبی رواداری اور احترامِ آدمیت',
          icon: '🕊️',
          text: 'اللہ تعالیٰ کی نازل کردہ چاروں الہامی کتابوں کا بنیادی مقصد انسان کی ہدایت اور فلاح ہے۔ ان تعلیمات کا تقاضا ہے کہ ہر مذہب کا خلوصِ دل سے احترام کیا جائے۔\n\nاللہ پاک سورہ انعام میں فرماتا ہے: "اور (اے مسلمانو!) تم ان (جھوٹے معبودوں) کو گالی مت دو جنہیں یہ لوگ اللہ کو چھوڑ کر پکارتے ہیں، ورنہ وہ بھی حد سے گزر کر جہالت کی بنا پر اللہ کو گالی دیں گے۔"\n\nاس لئے تم کسی کے دین کو برا مت کہو، تاکہ جواب میں کوئی تمہارے دین کو برا نہ کہے۔ یہی وہ باہمی احترام اور رواداری ہے جو ایک پرامن اور جڑی ہوئی انسانیت کی بنیاد ہے۔'
        },
        {
          title: 'اہلِ بیتؑ کا بے لوث جذبہِ خدمت',
          icon: '🕋',
          text: 'انسانیت کی سب سے عظیم اور روشن مثالیں ہمیں رسولِ پاک ﷺ، حضرت علی المرتضیٰ اور امام زین العابدین علیہ السلام کی زندگیوں میں ملتی ہیں۔ تاریخ گواہ ہے کہ جب ان پاک ہستیوں کے وصال کے بعد انہیں غسل دیا گیا، تو ان کی پشت اور کندھوں پر گہرے زخموں کے نشانات تھے۔\n\nیہ نشانات کسی تلوار کے نہیں تھے، بلکہ برس ہا برس رات کے اندھیروں میں غریبوں کے گھروں تک راشن اور سامان کی بھاری بوریاں اٹھا کر پہنچانے کی وجہ سے پڑ گئے تھے۔ ان کا کمال یہ تھا کہ یہ راشن بانٹتے وقت وہ کبھی کسی کا محلہ، ذات، فرقہ یا مذہب نہیں پوچھتے تھے۔ چاہے کوئی یہودی ہو، عیسائی، منکرِ خدا یا کسی اور مذہب کا ہی کیوں نہ ہو، ان کی نظر میں وہ سب سے پہلے "خدا کا بندہ" تھا، اور اسی ناتے وہ ہر ایک کی بے لوث مدد کرتے تھے۔'
        },
        {
          title: 'حضرت ابراہیمؑ کا واقعہ اور رب کی وسعتِ رحمت',
          icon: '📖',
          text: 'بغیر کسی تفریق کے اسی محبت کی ایک خوبصورت جھلک شیخ سعدی کی کتاب "بوستان" میں بیان کی گئی ہے۔ حضرت ابراہیم علیہ السلام کی یہ عادتِ مبارکہ تھی کہ وہ کبھی کسی مہمان کے بغیر کھانا تناول نہیں فرماتے تھے۔ ایک مرتبہ ایسا ہوا کہ پورا ہفتہ گزر گیا اور کوئی مہمان نہ آیا۔ آپ مہمان کی تلاش میں نکلے۔ انہیں ایک انتہائی ضعیف شخص نظر آیا، حضرت ابراہیمؑ نے اسے نہایت عزت و احترام کے ساتھ اپنے گھر کھانے پر مدعو کیا۔\n\nجب دسترخوان بچھایا گیا اس بوڑھے نے خاموشی سے کھانا شروع کر دیا۔ حضرت ابراہیمؑ پر شدید ندامت طاری ہو گئی۔ وہ فوراً ننگے پاؤں اس بوڑھے کی تلاش میں دوڑ پڑے۔ معافی مانگی اور انتہائی عزت کے ساتھ واپس لا کر دسترخوان پر بٹھایا۔ وہ ضعیف شخص اس رویے پر بڑا حیران ہوا اور وجہ پوچھی۔ حضرت ابراہیمؑ نے روتے ہوئے فرمایا کہ کس طرح اس بوڑھے کی خاطر ربِ کائنات نے اپنے خلیل کی سرزنش کی ہے۔\n\nیہ سن کر وہ بوڑھا شخص دنگ رہ گیا، آنکھوں میں آنسو آ گئے اور پکار اٹھا: "وہ رب کتنا کریم، رحیم اور مہربان ہے جو مجھ جیسے نافرمان کی خاطر اپنے اتنے پیارے نبی کو ڈانٹ رہا ہے!" اس نے اسی وقت سچے دل سے توبہ کی اور اللہ کی وحدانیت پر ایمان لے آیا۔'
        },
        {
          title: 'پیغامِ انسانیت',
          icon: '🌟',
          text: 'آج کے دور میں جب معاشرہ حسد، بغض اور مذہبی و فرقہ وارانہ تعصبات کی لپیٹ میں ہے، ہمیں یہ یاد رکھنے کی ضرورت ہے کہ خدا کے نزدیک سب سے بڑی عبادت "انسانیت" ہے۔ جو لوگ بظاہر ہمدردی کا دعویٰ کرتے ہیں لیکن اندر سے کینے اور تفریق کا شکار ہیں، انہیں ان عظیم ہستیوں کے کردار سے یہ سبق سیکھنا چاہیے کہ حقیقی دین محبت بانٹنے، بلا تفریق احترام کرنے اور ہر انسان کو سینے سے لگانے کا نام ہے۔'
        }
      ]
    }
  ];

  return (
    <div className="home-wrapper" style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
      <section className="message-section">
        <div className="container" style={{ maxWidth: '1280px' }}>
          <div className="diary-grid-layout">
            {/* Main Diary Entries */}
            <div className="diary-main-column">
              {diaryEntries.map((entry, entryIdx) => (
                <div className="message-paper" key={entryIdx}>
                  <div className="message-header">
                    <h2 className="message-main-title">{entry.mainTitle}</h2>
                    <div className="message-divider"></div>
                  </div>
                  
                  <div className="message-content-wrapper">
                    {entry.blocks.map((msg, idx) => (
                      <div className="message-block" key={idx}>
                        <h3 className="message-block-title">
                          <span className="msg-icon">{msg.icon}</span>
                          {msg.title}
                        </h3>
                        {msg.text.split('\n\n').map((paragraph, pIdx) => (
                          <p className="message-block-text" key={pIdx}>{paragraph}</p>
                        ))}
                      </div>
                    ))}
                  </div>

                  <div className="message-footer">
                    <div className="signature-box">
                      <span className="sig-name">نصرت فاطمہ نقوی</span>
                      <span className="sig-title">(وکیلِ انسانیت)</span>
                      <span className="sig-date">{entry.date}</span>
                    </div>
                    <ShareWidget title={entry.mainTitle} text={entry.blocks[0].title} />
                  </div>
                </div>
              ))}
            </div>

            {/* Side Vertical Scrolling Slider */}
            <aside className="diary-slider-column">
              <div className="diary-slider-header">
                <h3 className="diary-slider-title">
                  <span>📜</span>
                  <span>ڈائری کے تصویری اوراق</span>
                </h3>
                <p className="diary-slider-subtitle">بڑا کر کے دیکھنے کے لیے تصویر پر کلک کریں</p>
                <div className="diary-slider-controls">
                  <button
                    type="button"
                    className="diary-control-btn"
                    onClick={() => setIsPaused(!isPaused)}
                  >
                    {isPaused ? '▶️ سلائیڈ جاری رکھیں' : '⏸️ سلائیڈ روکیں'}
                  </button>
                </div>
              </div>

              <div className="diary-ticker-viewport">
                <div className={`diary-ticker-track ${isPaused ? 'paused' : ''}`}>
                  {/* Duplicate list to create seamless infinite upward scroll */}
                  {[...diaryImages, ...diaryImages].map((img, idx) => {
                    const originalIndex = idx % diaryImages.length;
                    return (
                      <div
                        key={`${img.id}-${idx}`}
                        className="diary-img-card"
                        onClick={() => setActiveIdx(originalIndex)}
                        title={`${img.title} — بڑا کر کے دیکھنے کے لیے کلک کریں`}
                      >
                        <img
                          src={img.url}
                          alt={img.title}
                          className="diary-img-thumb"
                          loading="lazy"
                        />
                        <div className="diary-img-overlay">
                          <span className="diary-img-zoom-btn">
                            🔍 بڑا کر کے دیکھیں
                          </span>
                        </div>
                        <span className="diary-img-badge">{img.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div className="diary-lightbox-backdrop" onClick={closeLightbox}>
          <button
            type="button"
            className="diary-lightbox-close"
            onClick={closeLightbox}
            aria-label="بند کریں"
          >
            ✕
          </button>

          {/* Navigation Arrows */}
          <button
            type="button"
            className="diary-lightbox-nav diary-lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="پچھلی تصویر"
          >
            ‹
          </button>

          <button
            type="button"
            className="diary-lightbox-nav diary-lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="اگلی تصویر"
          >
            ›
          </button>

          <div className="diary-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={diaryImages[activeIdx].url}
              alt={diaryImages[activeIdx].title}
              className="diary-lightbox-img"
            />
          </div>

          <div className="diary-lightbox-footer" onClick={(e) => e.stopPropagation()}>
            <span className="diary-lightbox-counter">
              {diaryImages[activeIdx].title} ({activeIdx + 1} از {diaryImages.length})
            </span>
            <a
              href={diaryImages[activeIdx].url}
              target="_blank"
              rel="noopener noreferrer"
              className="diary-lightbox-open-link"
            >
              اصل سائز میں کھولیں ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
