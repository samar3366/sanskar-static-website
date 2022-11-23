import React from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

// @ts-ignore
import AffiliationLetter from "./files/affiliation-letter.pdf";
// @ts-ignore
import SocietyCertficate from "./files/society-certficate.pdf";
// @ts-ignore
import RecognitionCertficate from "./files/recognition-certificate.pdf";
// @ts-ignore
import BuildingSafetyCertficate from "./files/building-safety-certificate.pdf";
// @ts-ignore
import FireSafetyCertficate from "./files/fire-safety-certificate.pdf";
// @ts-ignore
import DEOCertificate from "./files/deo-certificate.pdf";
// @ts-ignore
import SanitationCertificate from "./files/sanitation-certificate.pdf";
// @ts-ignore
import LandCertificate from "./files/land-certificate.pdf";

import "./style.scss";

const DocumentsAndInformation: React.FC<any> = (props) => {
  return (
    <div className="general-information-container">
      <div className="container">
        <h1>DOCUMENTS/INFORMATION</h1>
        <div className="general-information-table">
          <div className="table-responsive">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>DOCUMENTS/INFORMATION</th>
                  <th>UPLOAD DOCUMENTS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF
                    AFFILIATION, IF ANY
                  </td>
                  <td>
                    <button>
                      <a href={AffiliationLetter} target="_blank">
                        Click to View
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS
                    APPLICABLE
                  </td>
                  <td>
                    <button>
                      <a href={SocietyCertficate} target="_blank">
                        Click to View
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE
                    STATE GOVT./UT
                  </td>
                  <td>
                    {/* <button disabled>
                      <a href={"#"} target="_blank">
                        Click to View
                      </a>
                    </button> */}
                    N/A
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT’S
                    RENEWAL IF APPLICABLE
                  </td>
                  <td>
                    <button>
                      <a href={RecognitionCertficate} target="_blank">
                        Click to View
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL
                    BUILDING CODE
                  </td>
                  <td>
                    <button>
                      <a href={BuildingSafetyCertficate} target="_blank">
                        Click to View
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT
                    AUTHORITY
                  </td>
                  <td>
                    <button>
                      <a href={FireSafetyCertficate} target="_blank">
                        Click to View
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR
                    AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATIONOR SELF
                    CERTIFICATION BY SCHOOL
                  </td>
                  <td>
                    <button>
                      <a href={DEOCertificate} target="_blank">
                        Click to View
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>VALID WATER, HEALTH AND SANITATION CERTIFICATES</td>
                  <td>
                    <button>
                      <a href={SanitationCertificate} target="_blank">
                        Click to View
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>LAND CERTIFICATE</td>
                  <td>
                    <button>
                      <a href={LandCertificate} target="_blank">
                        Click to View
                      </a>
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsAndInformation;
