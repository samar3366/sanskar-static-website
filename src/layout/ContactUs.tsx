import React from "react";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

const ContactUs: React.FC<any> = (props) => {
  return (
    <div className="contact-us-container">
      <div className="container">
        <h1>LEARN MORE ABOUT US</h1>
        <div className="info-card">
          <div className="row">
            <div className="col-md-6"> Pics</div>
            <div className="col-md-6">
              <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    id="name"
                    name="email"
                    placeholder="with a placeholder"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="mobile">Mobile No</Label>
                  <Input
                    id="mobile"
                    name="email"
                    placeholder="with a placeholder"
                    type="text"
                  />
                </FormGroup>
                <button type="button" className="btn">Submit</button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
