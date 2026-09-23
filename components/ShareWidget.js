'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp, FaFacebook, FaShareAlt } from 'react-icons/fa';

export default function ShareWidget({ url, title, text, label, useDocumentTitle }) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [canShare, setCanShare] = useState(false);
  const [dynamicTitle, setDynamicTitle] = useState(title || '');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(url || window.location.href);
      
      if (useDocumentTitle && !title) {
        const heading = document.querySelector('h1')?.innerText || document.querySelector('h2')?.innerText;
        setDynamicTitle(heading || document.title);
      } else {
        setDynamicTitle(title || '');
      }

      if (navigator && navigator.share) {
        setCanShare(true);
      }
    }
  }, [url, title, useDocumentTitle]);

  const shareText = text ? `${dynamicTitle}\n\n${text}` : dynamicTitle;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + '\n\n' + currentUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: dynamicTitle,
          text: text,
          url: currentUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Native sharing not supported on this browser.');
    }
  };

  return (
    <div className="share-widget" style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '15px' }}>
      <span style={{ fontSize: '0.9rem', color: '#b0c4de' }}>{label || 'شیئر کریں:'}</span>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontSize: '1.2rem' }}>
        <FaWhatsapp />
      </a>
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2', fontSize: '1.2rem' }}>
        <FaFacebook />
      </a>
      {canShare && (
        <button onClick={handleNativeShare} style={{ background: 'none', border: 'none', color: '#55efc4', fontSize: '1.2rem', cursor: 'pointer', padding: 0 }}>
          <FaShareAlt />
        </button>
      )}
    </div>
  );
}
