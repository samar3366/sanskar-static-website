import React, { useState } from "react";
import { Document, Page } from "react-pdf";

// @ts-ignore
import AffiliationLetter from "../components/files/affiliation-letter.pdf";

import "./Disclosure.scss";

const Disclosure: React.FC<any> = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  return (
    <div className="disclosure-page-container">
      <div className="disclosure-heading">
        <div className="container">
          <h1>Affiliation Letter</h1>
        </div>
        <div>
          <Document
            file={'../components/files/affiliation-letter.pdf'}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclosure;
