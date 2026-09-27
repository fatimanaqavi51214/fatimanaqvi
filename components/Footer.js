import ShareWidget from '@/components/ShareWidget';
import Link from 'next/link';
import { FaLock } from 'react-icons/fa';

export default function Footer({ t, lang }) {
  const shareLabels = {
    ur: 'یہ صفحہ شیئر کریں:',
    en: 'Share this page:',
    fa: 'این صفحه را به اشتراک بگذارید:',
    ar: 'شارك هذه الصفحة:',
    es: 'Compartir esta página:'
  };
  const vaultLabels = {
    ur: 'ذاتی والٹ',
    en: 'Personal Vault',
    fa: 'گاوصندوق شخصی',
    ar: 'الخزنة الشخصية',
    es: 'Bóveda Personal'
  };

  const shareLabel = shareLabels[lang] || shareLabels['en'];
  const vaultLabel = vaultLabels[lang] || vaultLabels['en'];

  return (
    <footer>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
        <ShareWidget useDocumentTitle={true} label={shareLabel} />
        
        <p>{t.footer}</p>
        
        <div style={{ marginTop: '10px' }}>
          <Link href={`/${lang}/vault`} className="vault-footer-link">
            <FaLock size={12} /> {vaultLabel}
          </Link>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .vault-footer-link {
          display: flex; 
          align-items: center; 
          gap: 8px; 
          color: #64748b; 
          text-decoration: none;
          font-size: 0.9rem;
          padding: 5px 15px;
          border: 1px solid #333;
          border-radius: 20px;
          transition: all 0.3s;
        }
        .vault-footer-link:hover {
          color: #3b82f6;
          border-color: #3b82f6;
        }
      `}} />
    </footer>
  );
}