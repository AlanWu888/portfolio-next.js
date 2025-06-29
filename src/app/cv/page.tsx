import PDFViewer from "../(components)/PDFViewer";

export default function CVPage() {
  return (
    <PDFViewer
      title="My Curriculum Vitae"
      pdfPath="/pdf/CV.pdf"
    />
  );
}
