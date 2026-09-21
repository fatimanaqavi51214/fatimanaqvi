'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaWhatsapp, FaArrowUp, FaArrowLeft } from 'react-icons/fa';

export default function FloatingIcons() {
  const router = useRouter();
  const [showTopBtn, setShowTopBtn] = useState(false);

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
        title="WhatsApp پر رابطہ کریں"
      >
        <FaWhatsapp size={32} />
      </a>

      {/* Navigation Floating Buttons (Top & Back) */}
      <div className="floating-nav-buttons">
        {showTopBtn && (
          <button onClick={scrollToTop} className="floating-btn top-btn" title="اوپر جائیں">
            <FaArrowUp size={20} />
          </button>
        )}
        <button onClick={goBack} className="floating-btn back-btn" title="پچھلے صفحے پر جائیں">
          <FaArrowLeft size={20} />
        </button>
      </div>
    </>
  );
}
