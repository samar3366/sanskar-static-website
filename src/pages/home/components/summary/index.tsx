import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

import "../Summary.scss";

const Summary: React.FC<any> = (props) => {
  return (
    <div className="summary-container">
      <div className="container">
        <div className="summary-details">
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img alt="Sample" src={""} />
            <CardBody>
              <CardTitle tag="h5">CURRICULUM</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.Some quick example text to build
                on the card title and make up the bulk of the card‘s content.
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img alt="Sample" src={""} />
            <CardBody>
              <CardTitle tag="h5">HEALTHY MEALS</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.Some quick example text to build
                on the card title and make up the bulk of the card‘s content.
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "18rem",
            }}
          >
            <img alt="Sample" src={""} />
            <CardBody>
              <CardTitle tag="h5">SPORTS</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.Some quick example text to build
                on the card title and make up the bulk of the card‘s content.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Summary;
