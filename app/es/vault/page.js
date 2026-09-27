import VaultClient from './VaultClient';

export default function VaultPage({ params }) {
  const lang = 'es';
  const isRtl = lang === 'ur' || lang === 'ar' || lang === 'fa';
  
  return (
    <VaultClient isRtl={isRtl} lang={lang} />
  );
}
