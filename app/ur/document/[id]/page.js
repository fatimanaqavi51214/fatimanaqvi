import fs from 'fs';
import path from 'path';
import DocumentViewer from '../../../../components/DocumentViewer';

export const dynamic = 'force-dynamic';

export default function DocumentPage({ params }) {
  const { id } = params; const lang = 'ur';

  // Read documents data
  const filePath = path.join(process.cwd(), 'documents_data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const documents = JSON.parse(fileContents);

  // Find the document
  const doc = documents.find(d => d.id === id);

  if (!doc) {
    return <div style={{ color: 'white', textAlign: 'center', padding: '50px' }}>Document not found</div>;
  }

  return <DocumentViewer doc={doc} initialLang={lang} />;
}
