'use client';

import { useState } from 'react';

export default function SampleDocPage() {
  const [activeLang, setActiveLang] = useState('ur');

  const imageUrl = "https://res.cloudinary.com/b7xbeztp/image/upload/image001.jpg";

  const translations = {
    ur: {
      name: "اردو",
      dir: "rtl",
      docName: "شامی رہائشی سرٹیفکیٹ",
      lines: [
        { label: "محکمہ", value: "شامی عرب جمہوریہ - وزارتِ داخلہ" },
        { label: "دستاویز کی قسم", value: "سند اقامہ (رہائشی سرٹیفکیٹ)" },
        { label: "نام", value: "نصرت فاطمہ نقوی بنت سید محمد" },
        { label: "والدہ کا نام", value: "مہر بانو" },
        { label: "جائے اور سالِ پیدائش", value: "پاکستان، 1958" },
        { label: "حلفیہ بیان", value: "میں، جس کے دستخط ذیل میں ہیں، اقرار کرتی ہوں کہ میں فی الحال شہر دمشق، الصالحیہ، زین العابدین میں مقیم ہوں..." },
        { label: "تاریخ", value: "7 فروری 2024" },
        { label: "تصدیق", value: "اس پر متعلقہ علاقے کے مختار اور دمشق گورنریٹ کی تصدیقی مہریں ثبت ہیں۔" }
      ]
    },
    en: {
      name: "English",
      dir: "ltr",
      docName: "Syrian Residence Certificate",
      lines: [
        { label: "Authority", value: "Syrian Arab Republic - Ministry of Interior" },
        { label: "Document Type", value: "Residence Certificate (سند إقامة)" },
        { label: "Name", value: "Nusrat Fatima Naqvi bint Syed Muhammad" },
        { label: "Mother's Name", value: "Mehar Bano" },
        { label: "Place & Year of Birth", value: "Pakistan, 1958" },
        { label: "Declaration", value: "I, the undersigned, declare that I currently reside in the city of Damascus, Al-Salihiyah, Zain Al-Abidin..." },
        { label: "Date", value: "07 / 02 / 2024" },
        { label: "Authentication", value: "Bears the official authentication stamps of the Mukhtar and the Damascus Governorate." }
      ]
    },
    ar: {
      name: "العربية",
      dir: "rtl",
      docName: "شهادة إقامة سورية",
      lines: [
        { label: "الجهة", value: "الجمهورية العربية السورية - وزارة الداخلية" },
        { label: "نوع الوثيقة", value: "سند إقامة" },
        { label: "الاسم", value: "نصرت فاطمة نقوي بنت سيد محمد" },
        { label: "اسم الأم", value: "مهر بانو" },
        { label: "مكان وسنة الولادة", value: "باكستان، 1958" },
        { label: "التصريح", value: "أصرح أنا الموقعة أدناه أنني أقيم حالياً في مدينة دمشق، الصالحية، زين العابدین..." },
        { label: "التاريخ", value: "07 / 02 / 2024" },
        { label: "التصديق", value: "يحتوي على أختام التصديق الرسمية من المختار ومحافظة دمشق." }
      ]
    },
    fa: {
      name: "فارسی",
      dir: "rtl",
      docName: "گواهی اقامت سوریه",
      lines: [
        { label: "مرجع", value: "جمهوری عربی سوریه - وزارت کشور" },
        { label: "نوع سند", value: "گواهی اقامت (سند إقامة)" },
        { label: "نام", value: "نصرت فاطمه نقوی بنت سید محمد" },
        { label: "نام مادر", value: "مهر بانو" },
        { label: "محل و سال تولد", value: "پاکستان، 1958" },
        { label: "اظهاریه", value: "اینجانب امضاکننده زیر تایید می‌کنم که در حال حاضر در شهر دمشق، الصالحیه، زین العابدین اقامت دارم..." },
        { label: "تاریخ", value: "07 / 02 / 2024" },
        { label: "تاییدیه", value: "دارای مهرهای رسمی تایید مختار و استانداری دمشق می‌باشد." }
      ]
    },
    es: {
      name: "Español",
      dir: "ltr",
      docName: "Certificado de Residencia Sirio",
      lines: [
        { label: "Autoridad", value: "República Árabe Siria - Ministerio del Interior" },
        { label: "Tipo de Documento", value: "Certificado de Residencia (سند إقامة)" },
        { label: "Nombre", value: "Nusrat Fatima Naqvi bint Syed Muhammad" },
        { label: "Nombre de la Madre", value: "Mehar Bano" },
        { label: "Lugar y Año de Nacimiento", value: "Pakistán, 1958" },
        { label: "Declaración", value: "Yo, la abajo firmante, declaro que resido actualmente en la ciudad de Damasco, Al-Salihiyah, Zain Al-Abidin..." },
        { label: "Fecha", value: "07 / 02 / 2024" },
        { label: "Autenticación", value: "Lleva los sellos oficiales de autenticación del Mukhtar y la Gobernación de Damasco." }
      ]
    }
  };

  const handlePrint = () => window.print();
  const handleShare = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: translations[activeLang].docName, url: window.location.href }); } 
      catch (error) {}
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .viewer-container {
          background-color: #000000;
          min-height: 100vh;
          padding: 20px 10px;
          font-family: system-ui, -apple-system, sans-serif;
          display: flex;
          justify-content: center;
        }
        @media (min-width: 640px) {
          .viewer-container { padding: 40px 20px; }
        }
        .viewer-card {
          background-color: #1e1e1e;
          width: 100%;
          max-width: 800px;
          border-radius: 20px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          border: 1px solid #333;
        }
        .tabs-header {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          padding: 16px;
          background: #121212;
          border-bottom: 1px solid #333;
        }
        .tab-btn {
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          border: 1px solid #444;
          background: #2a2a2a;
          color: #a1a1aa;
          transition: all 0.3s ease;
          box-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        .tab-btn:hover {
          transform: translateY(-2px) scale(1.05);
          color: #60a5fa;
          border-color: #60a5fa;
          background: #333;
        }
        .tab-btn.active {
          background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
          color: white;
          border: none;
          transform: scale(1.1);
          box-shadow: 0 8px 15px rgba(37, 99, 235, 0.4);
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        .img-container {
          display: flex;
          justify-content: center;
          padding: 16px 12px;
          background-color: #18181b;
          border-bottom: 1px solid #333;
        }
        @media (min-width: 640px) {
          .img-container { padding: 32px; }
        }
        .doc-image {
          width: 100%;
          max-width: 600px;
          height: auto;
          object-fit: contain;
          border-radius: 12px;
          border: 1px solid #333;
          padding: 4px;
          background-color: #ffffff;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5);
          transition: transform 0.5s ease;
        }
        .doc-image:hover {
          transform: scale(1.03);
        }
        .content-body {
          padding: 30px 6%;
          background: #1e1e1e;
        }
        @media (min-width: 640px) {
          .content-body { padding: 40px 10%; }
        }
        .doc-title {
          font-size: 26px;
          font-weight: 900;
          color: #f4f4f5;
          text-align: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 2px solid #333;
        }
        @media (min-width: 640px) {
          .doc-title { font-size: 32px; margin-bottom: 32px; padding-bottom: 20px; }
        }
        .line-item {
          display: flex;
          flex-direction: column;
          padding: 16px 0;
          border-bottom: 1px dashed #3f3f46;
          transition: background-color 0.2s;
          border-radius: 8px;
        }
        .line-item:hover {
          background-color: #27272a;
        }
        @media (min-width: 640px) {
          .line-item {
            flex-direction: row;
            padding: 20px 16px;
            margin: 0 -16px;
          }
        }
        .line-label {
          font-weight: bold;
          color: #60a5fa;
          font-size: 18px;
          margin-bottom: 8px;
        }
        @media (min-width: 640px) {
          .line-label { width: 35%; margin-bottom: 0; padding-right: 20px; padding-left: 20px; font-size: 20px; }
        }
        .line-value {
          color: #e4e4e7;
          font-size: 18px;
          line-height: 1.7;
        }
        @media (min-width: 640px) {
          .line-value { width: 65%; font-size: 22px; }
        }
        .footer-actions {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 24px;
          background-color: #121212;
          border-top: 1px solid #333;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          gap: 16px;
        }
        @media (min-width: 640px) {
          .footer-actions { flex-direction: row; padding: 32px; gap: 20px; }
        }
        .btn-action {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          width: 140px;
          padding: 14px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: bold;
          color: white;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-share {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          box-shadow: 0 8px 15px rgba(37, 99, 235, 0.3);
        }
        .btn-share:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 20px rgba(37, 99, 235, 0.5);
        }
        .btn-print {
          background: linear-gradient(135deg, #52525b 0%, #3f3f46 100%);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
        }
        .btn-print:hover {
          background: linear-gradient(135deg, #3f3f46 0%, #27272a 100%);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.6);
        }
        @media print {
          .viewer-container { padding: 0; background: white; }
          .viewer-card { box-shadow: none; border: none; max-width: 100%; border-radius: 0; background: white; }
          .tabs-header, .footer-actions { display: none !important; }
          .doc-image { border: none; box-shadow: none; }
          .content-body { background: white; }
          .doc-title { color: black; border-color: #ddd; }
          .line-item { border-color: #ddd; }
          .line-label { color: #333; }
          .line-value { color: #000; }
        }
      `}} />

      <div className="viewer-container">
        <div className="viewer-card">
          
          <div className="tabs-header">
            {Object.keys(translations).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={"tab-btn " + (activeLang === lang ? 'active' : '')}
              >
                {translations[lang].name}
              </button>
            ))}
          </div>

          <div className="img-container">
            <img src={imageUrl} alt="Document Thumbnail" className="doc-image" />
          </div>

          <div className="content-body" dir={translations[activeLang].dir}>
            <h1 className="doc-title">
              {translations[activeLang].docName}
            </h1>
            
            <div>
              {translations[activeLang].lines.map((item, index) => (
                <div key={index} className="line-item">
                  <div className="line-label">{item.label}:</div>
                  <div className="line-value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-actions">
            <div style={{ color: '#94a3b8', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Document Viewer
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button onClick={handleShare} className="btn-action btn-share">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                Share
              </button>
              <button onClick={handlePrint} className="btn-action btn-print">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                Print
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
