'use client';

import React from 'react';
import { Download } from 'lucide-react';

interface PDFViewerProps {
  title: string;
  pdfPath: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ title, pdfPath }) => {
  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold">{title}</h1>
        <a
          href={pdfPath}
          download
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 rounded-md shadow hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download
        </a>
      </div>

      <div className="w-full h-[75vh] border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
        <iframe
          src={pdfPath}
          className="w-full h-full"
          title="PDF Preview"
        />
      </div>
    </div>
  );
};

export default PDFViewer;
