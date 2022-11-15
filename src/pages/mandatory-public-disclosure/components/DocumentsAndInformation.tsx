import React from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

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
                    COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT
                    EXTENSION OF AFFILIATION, IF ANY
                  </td>
                  <td>
                    <button>
                      <Link
                        to="./files/affiliation-letter.pdf"
                        target="_blank"
                        download
                      >
                        DOWNLOAD
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL
                    CERTIFICATE, AS APPLICABLE
                  </td>
                  <td>
                    <button>
                      <Link
                        to="./files/society-certficate.pdf"
                        target="_blank"
                        download
                      >
                        DOWNLOAD
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF
                    APPLICABLE, BY THE STATE GOVT./UT
                  </td>
                  <td>
                    <button>
                      <Link
                        to="./files/self-certification.pdf"
                        target="_blank"
                        download
                      >
                        DOWNLOAD
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND
                    IT’S RENEWAL IF APPLICABLE
                  </td>
                  <td>
                    <button>
                      <Link
                        to="./files/recognition-certificate.pdf"
                        target="_blank"
                        download
                      >
                        DOWNLOAD
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE
                    NATIONAL BUILDING CODE
                  </td>
                  <td>
                    <button>
                      <Link
                        to="./files/building-safety-certificate.pdf"
                        target="_blank"
                        download
                      >
                        DOWNLOAD
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE
                    COMPETENT AUTHORITY
                  </td>
                  <td>
                    <button>
                      <Link
                        to="./files/fire-safety-certificate.pdf"
                        target="_blank"
                        download
                      >
                        DOWNLOAD
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR
                    AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATIONOR SELF
                    CERTIFICATION BY SCHOOL
                  </td>
                  <td>
                    <button>
                      <Link
                        to="./files/deo-certificate.pdf"
                        target="_blank"
                        download
                      >
                        DOWNLOAD
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES
                  </td>
                  <td>
                    <button>
                      <Link
                        to="./files/sanitation-certificate.pdf"
                        target="_blank"
                        download
                      >
                        DOWNLOAD
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>COPIES OF LAND CERTIFICATE</td>
                  <td>
                    <button>
                      <Link
                        to="./files/land-certificate.pdf"
                        target="_blank"
                        download
                      >
                        DOWNLOAD
                      </Link>
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
