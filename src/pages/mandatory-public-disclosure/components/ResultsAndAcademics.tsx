import React from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

import "./style.scss";

const ResultsAndAcademics: React.FC<any> = (props) => {
  return (
    <div className="general-information-container">
      <div className="container">
        <h1>RESULTS/ACADEMICS</h1>
        <div className="general-information-table">
          <div className="table-responsive">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>INFORMATION</th>
                  <th>DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>FEE STRUCTURE OF THE SCHOOL</td>
                  <td>
                    <button>
                      <Link
                        to="./files/fee-structure.docx"
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
                  <td>ANNUAL ACADEMIC CALANDER</td>
                  <td>
                    <button>
                      <Link
                        to="./files/annual-academic-calender.pdf"
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
                  <td>LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td>
                  <td>
                    <button>
                      <Link to="./files/smc.xls" target="_blank" download>
                        DOWNLOAD
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</td>
                  <td>
                    <button>
                      <Link to="./files/pta.xlsx" target="_blank" download>
                        DOWNLOAD
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER
                    APPLICABILITY
                  </td>
                  <td>
                    <button>
                      <Link
                        to="./files/last-three-years-results.xlsx"
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
        <h1>RESULTS CLASS X</h1>
        <div className="general-information-table">
          <div className="table-responsive">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>ACADEMIC YEAR</th>
                  <th>NO OF STUDENTS APPEARED</th>
                  <th>NO OF STUDENTS PASSED</th>
                  <th>PASS PERCENTAGE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2017-18</td>
                  <td>56</td>
                  <td>56</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2017-18</td>
                  <td>56</td>
                  <td>56</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>2017-18</td>
                  <td>56</td>
                  <td>56</td>
                  <td>100%</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <h1>RESULTS CLASS XII</h1>
        <div className="general-information-table">
          <div className="table-responsive">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>ACADEMIC YEAR</th>
                  <th>NO OF STUDENTS APPEARED</th>
                  <th>NO OF STUDENTS PASSED</th>
                  <th>PASS PERCENTAGE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsAndAcademics;
