import React from "react";
import { Table } from "reactstrap";

import "./style.scss";

const TeachingStaff: React.FC<any> = (props) => {
  return (
    <div className="general-information-container">
      <div className="container">
        <h1>STAFF(TEACHING)</h1>
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
                  <td>PRINCIPAL</td>
                  <td>INDU MANRAI</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>TOTAL NO. OF TEACHERS</td>
                  <td>56</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>PGT</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>TGT</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>PRT</td>
                  <td>18</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>OTHERS</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>TEACHERS SECTION RATIO</td>
                  <td>1.5:1</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>DETAILS OF SPECIAL EDUCATOR</td>
                  <td>MAJJIGA SRIKANTH</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>DETAILS OF COUNSELLOR AND WELNESS TEACHER</td>
                  <td>RAJASEKHAR</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachingStaff;
