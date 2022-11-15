import React from "react";
import { Table } from "reactstrap";

import "./style.scss";

const GeneralInformation: React.FC<any> = (props) => {
  return (
    <div className="general-information-container">
      <div className="container">
        <h1>GENERAL INFORMATION</h1>
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
                  <td>NAME OF THE SCHOOL</td>
                  <td>SANSKAR INNOVATIVE SCHOOL</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>AFFILIATION NO.(IF APPLICABLE)</td>
                  <td>3630208</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>SCHOOL CODE (IF APPLICABLE)</td>
                  <td>57728</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>COMPLETE ADDRESS WITH PIN CODE</td>
                  <td>
                    PLOT NO 889, SURVEY NO 341, NEAR RAILWAY COLONY, MEDCHAL
                    (Mandal and District), TELANGANA, PIN 501401
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>PRINCIPAL NAME</td>
                  <td>INDU MANRAI</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>PRINCIPAL QUALIFICATION</td>
                  <td>M.A and B.ED</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>SCHOOL EMAIL ID</td>
                  <td>principalsanskarschool@gmail.com</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>CONTACT DETAILS (LANDLINE/MOBILE)</td>
                  <td>+91 8008732109</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
