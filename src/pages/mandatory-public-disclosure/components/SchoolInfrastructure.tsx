import React from "react";
import { Table } from "reactstrap";

import "./style.scss";

const SchoolInfrastructure: React.FC<any> = (props) => {
  return (
    <div className="general-information-container">
      <div className="container">
        <h1>SCHOOL INFRASTRUCTURE</h1>
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
                  <td>TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)</td>
                  <td>9737</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>NO. AND SIZE OF THE CLASS ROOMS (IN SQ FTMTR)</td>
                  <td>28 & 1361</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ
                    MTR)
                  </td>
                  <td>6 & 436</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>INTERNET FACILITY</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>NO. OF GIRLS TOILETS</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>NO. OF BOYS TOILETS</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING
                    THE INFRASTRUCTURE OF THE SCHOOL
                  </td>
                  <td>
                    <button>
                      <a href="https://www.youtube.com/watch?v=E-kakItYh7w" target={'_blank'}>
                        Youtube
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

export default SchoolInfrastructure;
