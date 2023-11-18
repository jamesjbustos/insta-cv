import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

function PDFViewer({ pdfUrl }) {
  if (!pdfUrl) {
    return (
      <div className="flex flex-col overflow-auto">
        <div className="h-[60px] items-end px-6 mb-auto lg:border-b text-center font-medium text-2xl pt-5">
          <span>Preview</span>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <div className="h-full rounded-lg border border-zinc-200 border-dashed bg-zinc-100/60 dark:border-zinc-800 dark:bg-zinc-800/60 flex items-center justify-center">
            <span className="text-gray-500">PDF Preview will appear here</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col overflow-auto">
      <div className="h-[60px] items-end px-6 mb-auto lg:border-b text-center font-medium text-2xl pt-5">
        <span>Preview</span>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <div className="h-full rounded-lg border border-zinc-200 border-dashed bg-zinc-100/60 dark:border-zinc-800 dark:bg-zinc-800/60">
          <div className="p-4">
            <div className="pdf-viewer">
              <Document file={pdfUrl} loading={null}>
                <Page pageNumber={1} loading={null} />
              </Document>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDFViewer;
