'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { FaWhatsapp, FaArrowUp, FaArrowLeft } from 'react-icons/fa';

export default function FloatingIcons() {
  const router = useRouter();
  const pathname = usePathname();
  const [showTopBtn, setShowTopBtn] = useState(false);

  const lang = pathname?.split('/')[1] || 'ur';
  
  const translations = {
    ur: { whatsapp: 'WhatsApp پر رابطہ کریں', top: 'اوپر جائیں', back: 'پچھلے صفحے پر جائیں' },
    en: { whatsapp: 'Contact on WhatsApp', top: 'Scroll to Top', back: 'Go Back' },
    fa: { whatsapp: 'تماس در واتساپ', top: 'برو به بالا', back: 'بازگشت' },
    ar: { whatsapp: 'تواصل عبر واتساب', top: 'الذهاب للأعلى', back: 'رجوع' },
    es: { whatsapp: 'Contactar por WhatsApp', top: 'Ir arriba', back: 'Volver' }
  };

  const t = translations[lang] || translations.ur;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const goBack = () => {
    router.back();
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/447404640052"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title={t.whatsapp}
      >
        <FaWhatsapp size={32} />
      </a>

      {/* Navigation Floating Buttons (Top & Back) */}
      <div className="floating-nav-buttons">
        {showTopBtn && (
          <button onClick={scrollToTop} className="floating-btn top-btn" title={t.top}>
            <FaArrowUp size={20} />
          </button>
        )}
        <button onClick={goBack} className="floating-btn back-btn" title={t.back}>
          <FaArrowLeft size={20} />
        </button>
      </div>
    </>
  );
}
