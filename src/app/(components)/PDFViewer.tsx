'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Download, ArrowLeft, Sun, Moon } from 'lucide-react';

interface PDFViewerProps {
  title: string;
  pdfPath: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ title, pdfPath }) => {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <div className="p-4 max-w-7xl mx-auto bg-card text-card-foreground min-h-screen">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => router.push('/')}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-muted text-foreground rounded-md shadow hover:bg-muted/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <button
          onClick={toggleDarkMode}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-muted text-foreground rounded-md shadow hover:bg-muted/80 transition-colors"
        >
          {resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>

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

      <div className="w-full border border-border rounded overflow-auto">
        <iframe
          src={pdfPath}
          title="PDF Preview"
          style={{
            width: '100%',
            height: '1500px',
            border: 'none',
          }}
        />
      </div>
    </div>
  );
};

export default PDFViewer;
