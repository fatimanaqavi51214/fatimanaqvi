import VaultClient from './VaultClient';
import documents from '@/documents_data.json';

export default function VaultPage({ params }) {
  const lang = 'es';
  const isRtl = lang === 'ur' || lang === 'ar' || lang === 'fa';
  
  // Create a lightweight list for search
  const docsForSearch = documents.map(doc => ({
    id: doc.id,
    category: doc.category,
    urName: doc.translations?.ur?.docName || '',
    enName: doc.translations?.en?.docName || '',
    arName: doc.translations?.ar?.docName || '',
    faName: doc.translations?.fa?.docName || '',
    esName: doc.translations?.es?.docName || '',
    imageUrl: doc.imageUrl || ''
  }));
  
  return (
    <VaultClient isRtl={isRtl} lang={lang} documentsList={docsForSearch} />
  );
}
