import React from "react";

import GeneralInformation from "../components/GeneralInformation";
import DocumentsAndInformation from "../components/DocumentsAndInformation";
import ResultsAndAcademics from "../components/ResultsAndAcademics";
import TeachingStaff from "../components/TeachingStaff";
import SchoolInfrastructure from "../components/SchoolInfrastructure";

import "./Disclosure.scss";

const Disclosure: React.FC<any> = (props) => {
  return (
    <div className="disclosure-page-container">
      <div className="disclosure-heading">
        <div className="container">
          <h1>MANDATORY PUBLIC DISCLOSURE</h1>
        </div>
      </div>
      <GeneralInformation />
      <DocumentsAndInformation />
      <ResultsAndAcademics />
      <TeachingStaff />
      <SchoolInfrastructure />
    </div>
  );
};

export default Disclosure;
