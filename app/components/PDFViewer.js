import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useCallback, useState } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { useResizeObserver } from '@wojtekmaj/react-hooks';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};

const maxWidth = 800;

// # https://github.com/wojtekmaj/react-pdf/blob/main/sample/next-app/app/Sample.tsx

const PDFViewer = () => {
    // type PDFFile = string | File | null;

    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [file, setFile] = useState('/chatgpt_com_share_1e628154_8477_4ac5_bd87_2d1d99747dfa.pdf');

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const pdfUrl = 'https://thuvienhoasen.org/images/file/7V-n5mJm2ggQAFsg/hat-giong-tam-hon-tap-1.pdf'; // Replace with your PDF URL


    return (
        <div>
            <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    );
};

export default PDFViewer;