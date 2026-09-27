import VaultClient from './VaultClient';

export default function VaultPage({ params }) {
  const lang = 'ur';
  const isRtl = lang === 'ur' || lang === 'ar' || lang === 'fa';
  
  return (
    <VaultClient isRtl={isRtl} lang={lang} />
  );
}
