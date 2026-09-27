import documents from '@/documents_data.json';
import DocumentViewer from '@/components/DocumentViewer';

export function generateStaticParams() {
  return documents.map((d) => ({ id: d.id }));
}

export default function DocumentPage({ params }) {
  const { id } = params;
  const lang = 'ur';

  // Find the document
  const doc = documents.find((d) => d.id === id);

  if (!doc) {
    return <div style={{ color: 'white', textAlign: 'center', padding: '50px' }}>Document not found</div>;
  }

  return <DocumentViewer doc={doc} initialLang={lang} />;
}
