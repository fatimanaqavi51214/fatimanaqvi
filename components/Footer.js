import ShareWidget from '@/components/ShareWidget';
export default function Footer({ t, lang }) {
  const shareTitle = lang === 'ur' ? 'اس صفحے کو شیئر کریں' : 'Share this page';
  return (
    <footer>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
        <p>{t.footer}</p>
        <ShareWidget title={shareTitle} />
      </div>
    </footer>
  );
}