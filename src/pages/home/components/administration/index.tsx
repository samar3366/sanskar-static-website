import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

import Director from "./director.jpg";
import Principal from "./principal.jpg";

import "../Administration.scss";

const Administration: React.FC<any> = (props) => {
  return (
    <div className="administration-container">
      <div className="container">
        <h1>ADMINISTRATION</h1>
        <div className="administration-details">
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img alt="Sample" src={Director} />
            <CardBody>
              <CardTitle tag="h5">DIRECTOR</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                B. VENKATESHWAR REDDY <br />
                M.Tech, MBA
              </CardSubtitle>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img alt="Sample" src={Principal} />
            <CardBody>
              <CardTitle tag="h5">PRINCIPAL</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                INDU MANRAI <br />
                M.A, B.Ed
              </CardSubtitle>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Administration;
