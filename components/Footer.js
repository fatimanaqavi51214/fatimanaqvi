import ShareWidget from '@/components/ShareWidget';
export default function Footer({ t, lang }) {
  const shareLabels = {
    ur: 'یہ صفحہ شیئر کریں:',
    en: 'Share this page:',
    fa: 'این صفحه را به اشتراک بگذارید:',
    ar: 'شارك هذه الصفحة:',
    es: 'Compartir esta página:'
  };
  const shareLabel = shareLabels[lang] || shareLabels['en'];
  return (
    <footer>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
        <ShareWidget useDocumentTitle={true} label={shareLabel} />
        <p>{t.footer}</p>
      </div>
    </footer>
  );
}