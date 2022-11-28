import React from "react";
import { Table } from "reactstrap";

import "./style.scss";

const Documents: React.FC<any> = (props) => {
  return (
    <div className="documents-container">
      <div className="container">
        <div className="documents-table">
          <div className="table-responsive">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>DOCUMENTS</th>
                  <th>UPLOAD DOCUMENTS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    TC
                  </td>
                  <td>
                    <button>
                      <a href="files/oasis-tc.pdf" target="_blank">
                        Click to View
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    AFFIDAVIT
                  </td>
                  <td>
                    <button>
                      <a href="files/oasis-affidavit.pdf" target="_blank">
                        Click to View
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                   INFRASTRUCTURE
                  </td>
                  <td>
                    <button disabled>
                      <a href="files/oasis-infrastructure.pdf" target="_blank">
                        Click to View
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    DETAILS OF TEACHERS INCLUDING QUALIFICATIONS
                  </td>
                  <td>
                    <button>
                      <a
                        href="files/oasis-details-of-teachers-including-qualifications.pdf"
                        target="_blank"
                      >
                        Click to View
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    STUDENT DETAILS CLASSWISE
                  </td>
                  <td>
                    <button>
                      <a
                        href="files/oasis-student-details-classwise.pdf"
                        target="_blank"
                      >
                        Click to View
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                   CURRICULUM AND LIST OF BOOKS PRESCRIBED IN VARIOUS CLASSES
                  </td>
                  <td>
                    <button>
                      <a
                        href="files/oasis-curriculum.pdf"
                        target="_blank"
                      >
                        Click to View
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    ANNUAL REPORT
                  </td>
                  <td>
                    <button>
                      <a href="files/oasis-annual-report.pdf" target="_blank">
                        Click to View
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>SCHOOL CIRCULARS</td>
                  <td>
                    <button>
                      <a
                        href="files/oasis-school-circulars.pdf"
                        target="_blank"
                      >
                        Click to View
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>DETAILS OF TEACHERS TRAINING</td>
                  <td>
                    <button>
                      <a href="files/oasis-details-of-teachers-training.pdf" target="_blank">
                        Click to View
                      </a>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>SELF CERTIFICATION</td>
                  <td>
                    <button>
                      <a href="files/oasis-self-declaration.pdf" target="_blank">
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

export default Documents;
