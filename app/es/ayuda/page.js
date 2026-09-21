'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AyudaPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [viewerMode, setViewerMode] = useState('google'); // 'google' | 'native'

  // پی ڈی ایف کے لنکس (کلاؤڈ نری اور لوکل)
  const pdfCloudinaryUrl =
    'https://res.cloudinary.com/b7xbeztp/image/upload/v1789916924/%DA%A9%D8%AA%D8%A7%D8%A8_%D8%B5%D8%AF%D8%A7%D8%A6%DB%92_%D8%AE%D9%84%D9%82_compresed.pdf';
  const pdfLocalUrl = '/sada-e-khalq.pdf';

  // گوگل ڈاکس ایمبیڈڈ ویور لنک (تمام موبائلز اور ڈیسک ٹاپ کے لیے بہترین)
  const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(
    pdfCloudinaryUrl
  )}&embedded=true`;

  // تاریخی خدمات اور عطیات کا تفصیلی ڈیٹا
  const milestones = [
    {
      year: '1982',
      date: '25 جولائی 1982',
      location: 'دمشق، شام',
      title: 'اوقاف اہلِ سنت کو تاریخی عطیہ (5 لاکھ ڈالر)',
      amount: '500,000 ڈالر (کیش و اراضی)',
      desc: 'وزیر اوقاف دمشق (محمد محمد خطیب) کے سپرد کیش اور زمین کی، جس سے فلسطین، لبنان، افغانستان اور شام کے غریب مہاجرین اور مستحق عوام کے لیے باقاعدہ رہائشی بستیاں تعمیر کی گئیں۔',
      icon: '🏘️',
      category: 'housing'
    },
    {
      year: '1983',
      date: '1983ء',
      location: 'دمشق، شام',
      title: 'مرکز ہلال احمر کو یتیم خانے کے لیے وسیع اراضی',
      amount: '24,166 مربع میٹر اراضی',
      desc: 'یتیم خانۂ خیر کے عظیم الشان منصوبے کے لیے 24 ہزار 166 میٹر اراضی ہلال احمر کو ہدیہ کی گئی۔',
      icon: '👶',
      category: 'orphan'
    },
    {
      year: '1989',
      date: '1989ء',
      location: 'ابوظہبی، متحدہ عرب امارات',
      title: '40 ہزار مربع میٹر اراضی اور اسلامی فلاحی مرکز',
      amount: '40,000 مربع میٹر اراضی',
      desc: 'وزارتِ اوقاف سے ایئرپورٹ کے قریب چالیس ہزار میٹر زمین حاصل کر کے اسلامی مرکز، یتیم خانہ، تفسیرِ قرآن مرکز اور محنت کشوں (پاکستانی، بلوچی، بنگالی، انڈین) کے لیے مردانہ و زنانہ الگ الگ رہائش گاہوں کے لیے وقف کی۔',
      icon: '🕌',
      category: 'welfare'
    },
    {
      year: '1989',
      date: '1989ء',
      location: 'لاہور، پاکستان',
      title: 'مزار بی بی پاک دامنؑ کی تعمیر و تزئین',
      amount: '4,000 درہم اور 2,000 پاؤنڈ سٹرلنگ',
      desc: 'لاہور میں بی بی پاک دامن علیہا السلام کے دربارِ اقدس کی تعمیر، رنگ و روغن اور تزئین و آرائش کے لیے کثیر فنڈز ادا کیے۔',
      icon: '🌸',
      category: 'religious'
    },
    {
      year: '1989',
      date: '1989ء',
      location: 'الٰہ آباد، ہندوستان',
      title: 'یتیم بچوں کی کفالت و مستحق بچیوں کی شادیاں',
      amount: 'خصوصی فلاحی فنڈز',
      desc: 'الہ آباد میں غریب بچوں کی باقاعدہ تعلیم، خوراک، نگہداشت اور نادار خاندانوں کی بچیوں کے بیاہ کے اخراجات کی ادائیگی۔',
      icon: '💝',
      category: 'welfare'
    },
    {
      year: '1990',
      date: '1990ء',
      location: 'لاہور، پاکستان',
      title: 'حضرت داتا گنج بخشؒ (داتا دربار) کی تعمیرات',
      amount: 'خطیر مالی عطیہ',
      desc: 'لاہور میں حضرت علی ہجویری داتا گنج بخشؒ کے مزار کی تعمیراتی توسیع اور زائرین کی سہولت کے لیے بھاری رقم عطیہ کی۔',
      icon: '🕌',
      category: 'religious'
    },
    {
      year: '1994',
      date: '26 اپریل 1994',
      location: 'دمشق، شام / ایران',
      title: 'لائبریری، کلینک اور تفسیرِ قرآن سینٹر',
      amount: '40 لاکھ سیرین پاؤنڈز (60 لاکھ پاکستانی روپے)',
      desc: 'ایران کے شیخ بادیانی کو عظیم الشان رقبہ تفویض کیا گیا تاکہ وہاں لائبریری، کلینک، حسینیہ، مہمان خانہ اور قرآن مجید کی تفاسیر کا مرکزی ادارہ قائم ہو۔',
      icon: '📚',
      category: 'religious'
    },
    {
      year: '1995',
      date: '1995ء',
      location: 'اسلام آباد، پاکستان',
      title: 'دربار حضرت بری امام سرکارؒ کی تعمیرات',
      amount: '2 لاکھ پاکستانی روپے اور 1,800 ڈالر',
      desc: 'اسلام آباد میں دربارِ عالیہ حضرت سخی شاہ لطیف بری امامؒ کی تعمیراتی سرگرمیوں کے لیے نقدی امداد فراہم کی۔',
      icon: '🌟',
      category: 'religious'
    },
    {
      year: '1996',
      date: '1996ء',
      location: 'شام',
      title: 'غریبوں اور بچوں کے لیے مفت ڈسپنسری',
      amount: 'اراضی کا ہبہ برائے کلینک',
      desc: 'بچوں اور کم وسائل رکھنے والے نادار طبقات کے علاج معالجے اور مفت طبی سہولیات کے لیے زمین وقف کر کے ڈسپنسری قائم کروائی۔',
      icon: '💊',
      category: 'health'
    },
    {
      year: '2007',
      date: '2007ء',
      location: 'شام',
      title: 'مستوصف الزہراء کلینک کو طبی مشینری اور امداد',
      amount: 'جدید طبی آلات و سازوسامان',
      desc: 'فلاحی کلینک مستوصف الزہراء کو مستحق مریضوں کے لیے جدید ترین طبی مشینری، لیزر آلات اور اشیائے ضروریہ کا عطیہ پیش کیا۔',
      icon: '🏥',
      category: 'health'
    },
    {
      year: 'مسلسل',
      date: 'دہائیوں پر محیط',
      location: 'دمشق، شام',
      title: 'مقاماتِ بابِ صغیر میں قبرستان کی تعمیرات',
      amount: '15 لاکھ سیرین پاؤنڈ',
      desc: 'تاریخی بابِ صغیر کے احاطے میں قبرستان کی تعمیر و مرمت، چاردیواری اور انتظامات میں بھرپور مالی شرکت کی۔',
      icon: '⚰️',
      category: 'welfare'
    },
    {
      year: 'مستقبل',
      date: 'جاری منصوبہ',
      location: 'پاکستان',
      title: 'مرکزِ انسانیت، فلاحی فیکٹری و رہائشی منصوبہ',
      amount: 'پاکستان میں وسیع ملکیتی زمین',
      desc: 'پاکستان میں موجود وسیع ذاتی اراضی کو غریبوں کی رہائش، جامع مسجد، مرکزِ انسانیت اور فلاحی فیکٹری کے لیے مختص کرنے کا وژن، تاکہ غریب افراد کو باعزت روزگار میسر آ سکے۔',
      icon: '🏭',
      category: 'welfare'
    }
  ];

  const filteredMilestones =
    activeTab === 'all'
      ? milestones
      : activeTab === 'housing'
      ? milestones.filter((m) => m.category === 'housing' || m.category === 'welfare')
      : activeTab === 'religious'
      ? milestones.filter((m) => m.category === 'religious')
      : milestones;

  return (
    <div className="container ayuda-page-wrapper">
      {/* ہیرو سیکشن */}
      
      {/* --- NEW HEADER AND VIDEOS --- */}
      <section className="hero-modern" style={{ padding: '40px 20px 20px' }}>
        <div className="hero-content">
          <h1 className="hero-title">Nusrat Fatima Naqvi</h1>
          <h2 className="hero-subtitle" style={{ marginTop: '10px', color: '#55efc4' }}>(Defensora de la Humanidad)</h2>
          <p className="hero-desc" style={{ marginTop: '15px', fontSize: '1.2rem' }}>Lucha continua al servicio de la humanidad</p>
        </div>
      </section>

      <section className="video-section" style={{ padding: '0 20px 40px' }}>
        <div className="video-container-modern" style={{ maxWidth: '1000px', margin: '0 auto', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <video 
            src="https://res.cloudinary.com/b7xbeztp/video/upload/v1789991996/ayuda-cover.mp4" autoPlay loop muted playsInline style={{ width: "100%", display: "block" }} />
        </div>
      </section>

      <section className="video-section" style={{ padding: '40px 20px', background: 'rgba(255,255,255,0.02)' }}>
        <h2 className="section-title glow-text text-center" style={{ marginBottom: '30px' }}>Introducción en Video de Ayuda</h2>
        <div className="video-container-modern" style={{ maxWidth: '1000px', margin: '0 auto', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <video 
            src="https://res.cloudinary.com/b7xbeztp/video/upload/v1789896211/sada-e-haq-spanish.webm" 
            controls autoPlay={false} playsInline 
            preload="metadata" 
            style={{ width: '100%', display: 'block' }} 
          />
        </div>
      </section>
      {/* --- END NEW HEADER AND VIDEOS --- */}


      {/* پی ڈی ایف کوئیک موڈل (اگر یوزر بٹن دبائے) */}
      {showPdfModal && (
        <div className="pdf-modal-overlay" onClick={() => setShowPdfModal(false)}>
          <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>📖 کتاب "صدائےِ خلق" — مصنفہ نصرت فاطمہ نقوی</h3>
              <button className="close-btn" onClick={() => setShowPdfModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="pdf-info-banner">
                <div className="book-cover-mockup">
                  <span className="book-symbol">📜</span>
                  <h4>صدائےِ خلق</h4>
                  <p>وکیلِ انسانیت نصرت فاطمہ نقوی</p>
                  <span className="edition-tag">مکمل 17 صفحات</span>
                </div>
                <div className="book-details">
                  <h4>کتاب کے اہم مندرجات:</h4>
                  <ul>
                    <li>✓ امتِ مسلمہ کے حالات اور عالمی امن کی پکار</li>
                    <li>✓ تفرقہ بازی کا خاتمہ اور اتحادِ بین المسلمین</li>
                    <li>✓ اصل مال کا فلسفہ (بکری کے کندھے کا ایمان افروز واقعہ)</li>
                    <li>✓ تربیتِ اولاد: بچے کمپیوٹر کی طرح عمل سے سیکھتے ہیں</li>
                    <li>✓ فاؤنڈیشن ایودا انٹرنیشنل کے 1982ء سے اب تک کے کروڑوں کے عطیات</li>
                    <li>✓ یورپ میں رجسٹرڈ فاؤنڈیشن (30,000 یورو بینک ڈپازٹ)</li>
                  </ul>
                  <div className="modal-actions">
                    <a
                      href={pdfCloudinaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download="کتاب_صدائے_خلق_نصرت_فاطمہ_نقوی.pdf"
                      className="btn-primary-golden"
                    >
                      📥 اصل PDF ڈاؤن لوڈ کریں
                    </a>
                    <a
                      href="#book-reader"
                      onClick={() => setShowPdfModal(false)}
                      className="btn-secondary-outline"
                    >
                      📖 صفحے پر آن لائن پڑھیں
                    </a>
                    <a
                      href="/sada-e-khalq.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary-outline"
                    >
                      🖨️ پرنٹ ایبل نسخہ کھولیں
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* آن لائن ڈیجیٹل بک ریڈر سیکشن (Digital Book Reader) */}
      <section id="book-reader" className="ayuda-reader-section">
        <div className="reader-container-card">
          <div className="reader-header-bar">
            <div className="reader-title-area">
              <span className="reader-badge">📖 آن لائن ڈیجیٹل لائبریری</span>
              <h2 className="reader-title">کتاب: صدائےِ خلق — مکمل آن لائن مطالعہ (17 صفحات)</h2>
              <p className="reader-subtitle">
                آپ صفحہ چھوڑے بغیر یہیں نیچے کتاب کے تمام صفحات ورق گردانی (Scroll / Flip) کر کے پڑھ سکتے ہیں۔
              </p>
            </div>

            {/* ریڈر کے کنٹرولز اور بٹنز */}
            <div className="reader-controls-bar">
              <div className="mode-toggle-group">
                <button
                  className={`reader-mode-btn ${viewerMode === 'google' ? 'active' : ''}`}
                  onClick={() => setViewerMode('google')}
                  title="موبائل فونز اور تمام براؤزرز کے لیے بہترین موڈ"
                >
                  📱 موبائل فرینڈلی ریڈر
                </button>
                <button
                  className={`reader-mode-btn ${viewerMode === 'native' ? 'active' : ''}`}
                  onClick={() => setViewerMode('native')}
                  title="ڈیسک ٹاپ کے لیے ہائی ریزولوشن براؤزر ریڈر"
                >
                  💻 ڈیسک ٹاپ ریڈر (Native)
                </button>
              </div>

              <div className="reader-action-links">
                <a
                  href={pdfCloudinaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reader-icon-link"
                  title="نئی ونڈو میں فل اسکرین کھولیں"
                >
                  🔍 فل اسکرین کھولیں
                </a>

                <a
                  href={pdfCloudinaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="کتاب_صدائے_خلق_نصرت_فاطمہ_نقوی.pdf"
                  className="reader-icon-link download-btn"
                  title="پی ڈی ایف فائل ڈاؤن لوڈ کریں"
                >
                  📥 ڈاؤن لوڈ PDF (522 KB)
                </a>

                <a
                  href="/sada-e-khalq.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reader-icon-link"
                  title="پرنٹ فرینڈلی ویب ایڈیشن کھولیں"
                >
                  🖨️ پرنٹ فرینڈلی نسخہ
                </a>
              </div>
            </div>
          </div>

          {/* ریڈر فریم */}
          <div className="reader-frame-wrapper">
            {viewerMode === 'google' ? (
              <iframe
                src={googleViewerUrl}
                title="صدائے خلق - آن لائن ریڈر"
                className="book-reader-iframe"
                loading="lazy"
                allowFullScreen
              />
            ) : (
              <iframe
                src={`${pdfLocalUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                title="صدائے خلق - پی ڈی ایف ریڈر"
                className="book-reader-iframe"
                loading="lazy"
              />
            )}
          </div>

          <div className="reader-footer-tips">
            <span className="tip-item">💡 <strong>رہنمائی:</strong> اگلے صفحات پر جانے کے لیے ماؤس یا انگلی سے نیچے اسکرول کریں، یا اوپر نیچے دیے گئے پیج نمبرز پر کلک کریں۔</span>
            <span className="tip-item">🔍 زوم ان یا زوم آؤٹ کرنے کے لیے ریڈر میں موجود <strong>(+)</strong> اور <strong>(-)</strong> کے بٹن استعمال کریں۔</span>
          </div>
        </div>
      </section>

      {/* ایمان افروز اقوال و زریں فرمودات */}
      <section className="ayuda-quotes-section">
        <h2 className="section-title">✨ صدائےِ خلق کے زریں فرمودات و بصیرت</h2>
        
        <div className="quotes-grid">
          <div className="quote-card">
            <div className="quote-icon">💫</div>
            <blockquote>
              "کسی قوم کی حالت نہیں بدل سکتی، جب تک خود اس قوم کو اپنی حالت بدلنے کا خیال نہ آئے۔"
            </blockquote>
            <cite>— فرمانِ الٰہی (قرآنِ حکیم)</cite>
          </div>

          <div className="quote-card">
            <div className="quote-icon">⚔️</div>
            <blockquote>
              "عزت کی موت ذلت کی زندگی سے بہتر ہے۔"
            </blockquote>
            <cite>— فرمانِ امام حسین علیہ السلام</cite>
          </div>

          <div className="quote-card highlight-quote">
            <div className="quote-icon">💝</div>
            <blockquote>
              "انسان سمجھتا ہے کہ جو اس کے بینک اکاؤنٹ میں ہے وہ اس کا مال ہے۔ لیکن اصل مال وہ ہے جو آپ نے اللہ کی راہ میں دے کر آخرت کے اکاؤنٹ میں ہمیشہ کے لیے محفوظ کر لیا!"
            </blockquote>
            <cite>— محترمہ نصرت فاطمہ نقوی (صدائےِ خلق)</cite>
          </div>

          <div className="quote-card">
            <div className="quote-icon">🌱</div>
            <blockquote>
              "اولاد ایک کمپیوٹر کی طرح ہے، جو ماں باپ خود پریکٹیکلی کرتے ہیں بچہ وہی سیکھتا ہے۔ حقیقی چاہت وہ ہے جو کسی مفلس اور پھٹے کپڑوں والے سے بغیر غرض کی جائے۔"
            </blockquote>
            <cite>— محترمہ نصرت فاطمہ نقوی</cite>
          </div>
        </div>
      </section>

      {/* فاؤنڈیشن ایودا انٹرنیشنل کے تاریخ ساز عطیات و خدمات */}
      <section id="services-milestones" className="ayuda-milestones-section">
        <div className="section-header-flex">
          <div>
            <h2 className="section-title">🏛️ فاؤنڈیشن ایودا انٹرنیشنل: تاریخ ساز خدمات</h2>
            <p className="section-subtitle">
              محترمہ نصرت فاطمہ نقوی صاحبہ کے ذاتی کاروبار اور جائیداد سے ادا کردہ ناقابلِ فراموش فلاحی عطیات کا جامع جائزہ
            </p>
          </div>

          {/* فلٹر ٹیبز */}
          <div className="milestone-tabs">
            <button
              className={`m-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              تمام خدمات ({milestones.length})
            </button>
            <button
              className={`m-tab-btn ${activeTab === 'housing' ? 'active' : ''}`}
              onClick={() => setActiveTab('housing')}
            >
              رہائش و رفاہِ عامہ
            </button>
            <button
              className={`m-tab-btn ${activeTab === 'religious' ? 'active' : ''}`}
              onClick={() => setActiveTab('religious')}
            >
              مذہبی و روحانی مراکز
            </button>
          </div>
        </div>

        <div className="milestone-cards-grid">
          {filteredMilestones.map((item, idx) => (
            <div className="milestone-card" key={idx}>
              <div className="card-top-bar">
                <span className="m-icon">{item.icon}</span>
                <span className="m-year-badge">{item.year}</span>
              </div>
              <h3 className="m-title">{item.title}</h3>
              <div className="m-amount-tag">
                <span>💰 عطیہ: </span>
                <strong>{item.amount}</strong>
              </div>
              <p className="m-desc">{item.desc}</p>
              <div className="card-footer-meta">
                <span className="m-location">📍 {item.location}</span>
                {item.date && <span className="m-date">🗓️ {item.date}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ماڈل اسلامی قبرستان اور مستقبل کا وژن */}
      <section id="cemetery-vision" className="ayuda-cemetery-section">
        <div className="cemetery-inner-card">
          <div className="cemetery-text">
            <span className="sub-badge">⚰️ فکرِ آخرت اور باوقار تدفین کا جامع منصوبہ</span>
            <h2>ماڈل اسلامی قبرستان اور فلاحی مرکز کا عظیم وژن</h2>
            <p>
              محترمہ نصرت فاطمہ نقوی کی تقاریر کا بنیادی محور ہمیشہ فکرِ آخرت اور مرنے کی تیاری رہا ہے:
            </p>
            <blockquote className="cemetery-quote">
              "بالآخر سبھی کو مر جانا ہے، کون زندہ رہے گا؟ عقلمندی یہ ہے کہ ہم غفلت میں نہ مریں۔ ہمیں یہ فکر ہونی چاہیے کہ ابھی اگر موت آ جائے تو ہمارا جنازہ کہاں جائے گا، کفن پاکیزہ اور حلال ہے یا نہیں؟ غریبوں اور بے سہارا مسافروں کے لیے تدفین کی جگہ کا انتظام ہونا کتنا بڑا کارِ خیر ہے!"
            </blockquote>
            
            <div className="cemetery-features-grid">
              <div className="c-feature">
                <span className="cf-icon">🕌</span>
                <h4>مفت کفن، غسل و نمازِ جنازہ</h4>
                <p>نادار، بے سہارا اور ناگہانی موت کا شکار مسافروں کے لیے باوقار اور شرعی انتظام</p>
              </div>

              <div className="c-feature">
                <span className="cf-icon">📖</span>
                <h4>قرآن خوانی و مجالس ہال</h4>
                <p>ایصالِ ثواب اور تسکینِ روح کے لیے مجالس اور عبادات کی مخصوص جگہ</p>
              </div>

              <div className="c-feature">
                <span className="cf-icon">🏛️</span>
                <h4>یورپ میں قانونی منظوری</h4>
                <p>30,000 یورو کے بینک ڈپازٹ کے ساتھ باقاعدہ رجسٹرڈ فاؤنڈیشن</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* کتاب کا تفصیلی خلاصہ و مکمل متن */}
      <section id="book-full-text" className="ayuda-fulltext-section">
        <div className="text-container-card">
          <div className="book-text-header">
            <h2>📜 کتاب "صدائےِ خلق" — مصنفہ نصرت فاطمہ نقوی (خلاصہ و مضامین)</h2>
            <p className="author-tag">چیئر پرسن فاؤنڈیشن ایودا انٹرنیشنل (وکیلِ انسانیت)</p>
          </div>

          <div className="prose-content">
            <h3>دنیا میں بے چینی، ظلم اور بے حسی کے اسباب</h3>
            <p>
              آخر ایسا کیوں ہے کہ دنیا میں اکثر ممالک جنگ و جدل اور بدامنی کا شکار ہیں؟ ہر سمت نفسا نفسی کا دور ہے۔ دنیاوی چمک دمک انسان پر چھائی ہوئی ہے، دولت کی ہوس نے انسان کو ظالم اور بے رحم بنا رکھا ہے۔ قتل و غارت گری کا راج ہے۔ حلال کو حرام اور حرام کو حلال قرار دیا جا رہا ہے۔ مسلمانوں کو ذلیل و خوار کرنے کے لیے نئے نئے طریقے ایجاد کیے جا رہے ہیں۔ کبھی مسجد مسمار کی جاتی ہے، کبھی چادر اُچھالی جاتی ہے، اور کبھی توہین آمیز خاکوں سے بھڑکایا جاتا ہے۔ کوئی نہ کوئی بہانہ بنا کر لاشوں کے انبار لگا دیے جاتے ہیں۔ انسان، اشرف المخلوقات ہونے کے باوجود، اپنی اہمیت کو نہیں سمجھا۔
            </p>
            <p>
              خدائے واحد سے دوری اور آسمانی کتابوں کی حکم عدولی ہمیں روز بروز بدتر بناتی جا رہی ہے۔ یہ کیفیت ہمیں کہاں لے جائے گی، کب ہم اس فتور کا حصہ بنے رہیں گے؟ فرمانِ الہی ہے کہ:
              <strong> "کسی قوم کی حالت نہیں بدل سکتی، جب تک خود اس قوم کو اپنی حالت بدلنے کا خیال نہ آئے۔"</strong>
            </p>

            <h3>اسلام امن کا گہوارہ اور عورت کا اعلیٰ مقام</h3>
            <p>
              آؤ مل کر اپنے ضمیر کو جگائیں اور دنیا کو بتائیں کہ اسلام تو امن اور سلامتی کا مذہب ہے، اور عورت کا اعلیٰ مقام ہے۔ مولا کا فرمان ہے کہ: <em>"نیکی کر لو جب تک تمہارے قدم زمین کے اوپر ہیں، جب زمین کے اندر چلے گئے تو تم خود محتاجِ دعا و فاتحہ ہو جاؤ گے۔"</em> جہاد کو انتہا پسندی کہا جا رہا ہے اور مسلمان قوم کو غاصب اور دہشت گرد کے القابات سے نوازا جا رہا ہے۔ آؤ مل کر خاتم المرسلینﷺ اور اہل بیت علیہم السلام کے احکامات کی پیروی کرتے ہوئے ظالم کو جواب دیں۔ ہر ظالم بذات خود ڈرپوک اور کھوکھلا ہوتا ہے۔ ڈریں نہ، اپنا تعارف جوانمردی سے کرائیں۔ سب ایک ہو کر انسانیت کا سبق پڑھائیں تاکہ دنیا کا ہر انسان، خواہ وہ کسی بھی ملک، مذہب یا خطے کا باشندہ ہو، خوشحال اور پرامن زندگی گزار سکے۔
            </p>

            <h3>تفرقہ بازی کا خاتمہ اور اتحادِ بین المسلمین</h3>
            <p>
              رسول اللہ ﷺ نے بار بار ارشاد فرمایا:
              <em> "اللہ کی رسی کو مضبوطی سے تھامے رکھو جب تک حوض کوثر پر مجھ سے نہ آ ملو۔ قرآن اور عترت کا دامن کبھی مت چھوڑو، اگر قرآن اور عترت (یعنی اہل بیت علیہم السلام) کا دامن چھوڑ دیا تو تفرقے میں پڑ جاؤ گے۔"</em>
            </p>
            <p>
              امام حسین علیہ السلام کا ابدی فرمان ہے: <strong>"عزت کی موت ذلت کی زندگی سے بہتر ہے۔"</strong> اب دنیا کے حالات دیکھتے ہوئے سب کو ہوش آ جانا چاہیے۔ خدا کے لیے سب متحد ہو جائیں، پرانے اختلافات بھلا کر ایک آواز بن جائیں اور اسلام کے دامن سے فرقہ واریت اور دہشت گردی کے جھوٹے داغ دھو ڈالیں تاکہ اسلام کا نورانی چہرہ دنیا پر واضح ہو سکے۔
            </p>

            <h3>اصل مال کیا ہے؟ (ایک ایمان افروز واقعہ)</h3>
            <p>
              ایک مرتبہ نبی کریم ﷺ کے گھر والوں نے ایک بکری ذبح کی (یا گوشت آیا)۔ نبی کریم ﷺ نے دریافت فرمایا: <em>"اس میں سے کیا باقی بچا ہے؟"</em> بتایا گیا کہ اس میں سے صرف ایک دست (کندھے کا گوشت) باقی بچا ہے، باقی سب غریبوں میں تقسیم کر دیا گیا ہے۔ اس پر رسول اللہ ﷺ نے ایک نہایت بصیرت افروز بات ارشاد فرمائی: <strong>"اس دست کے سوا وہ ساری کی ساری بکری باقی بچ گئی ہے!"</strong>
            </p>
            <p>
              اس واقعے سے ہمیں یہ عظیم سبق ملتا ہے کہ صدقہ و خیرات مال کو کم نہیں کرتے، بلکہ اسے دائمی بنا دیتے ہیں۔ جو ہم نے دنیا میں استعمال کر لیا وہ ختم ہو گیا، اور جو اللہ کے نام پر دے دیا، وہ قیامت تک کے لیے ہمارا ہو گیا اور آخرت کے اکاؤنٹ میں ہمیشہ کے لیے محفوظ ہو گیا۔
            </p>

            <h3>میڈیا کی اشد ضرورت اور عالمی نمائندگی</h3>
            <p>
              آج میڈیا کا دور ہے۔ ہماری کوشش ہے کہ ہم اپنا تعارف بین الاقوامی معیار کے مطابق کروا سکیں۔ جس کے لیے اپنا چینل، اخبار، ریڈیو اسٹیشن اور میگزین کا قیام انتہائی ضروری ہے۔ دنیا کے ہر خطے میں ہماری فاؤنڈیشن "ایودا انٹرنیشنل" کے ساتھ چلیں، کیونکہ آپ کے تعاون سے کروڑوں انسانوں کو تسکین اور فلاح نصیب ہو سکتی ہے۔
            </p>
          </div>
        </div>
      </section>

      {/* رابطہ و شمولیت کی دعوت */}
      <section className="ayuda-cta-section">
        <div className="cta-box">
          <h2>🤝 فاؤنڈیشن ایودا انٹرنیشنل کا حصہ بنیں</h2>
          <p>
            ہماری فاؤنڈیشن میں دنیا کے ہر خطے سے دردِ دل رکھنے والا کوئی بھی انسان ممبر بن سکتا ہے۔ آئیے مل کر نیکی کا ہاتھ بڑھائیں قبل اس کے کہ سانسوں کی ڈوری ٹوٹ جائے۔
          </p>
          <div className="cta-contact-links">
            <a href="tel:+447404640052" className="cta-btn phone">
              📞 +447404640052 (فون / واٹس ایپ)
            </a>
            <a href="mailto:fatimanaqavi51214@gmail.com" className="cta-btn email">
              ✉️ fatimanaqavi51214@gmail.com
            </a>
            <Link href="/ur/contact" className="cta-btn contact-page">
              📍 تفصیلی رابطے کا صفحہ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
