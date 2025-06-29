'use client';

import React from 'react';
import { Download } from 'lucide-react';

interface PDFViewerProps {
  title: string;
  pdfPath: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ title, pdfPath }) => {
  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto bg-card text-card-foreground">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold">{title}</h1>
        <a
          href={pdfPath}
          download
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md shadow hover:brightness-90 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download
        </a>
      </div>

      <div className="w-full h-[75vh] border border-border rounded overflow-hidden">
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
