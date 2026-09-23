import ShareWidget from '@/components/ShareWidget';
export default function Footer({ t, lang }) {
  const shareLabel = lang === 'ur' ? 'یہ صفحہ شیئر کریں:' : 'Share this page:';
  return (
    <footer>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
        <ShareWidget useDocumentTitle={true} label={shareLabel} />
        <p>{t.footer}</p>
      </div>
    </footer>
  );
}