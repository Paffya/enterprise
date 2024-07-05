import React from "react";
import { Form } from "react-bootstrap";

const Donotsell = () => {
  return (
   
      <div className="container container-max mb-5">
        <div className="row">
          <div className="col-md-12">
            <h5 className="fw-bold borderB">Opt-Out Form</h5>
            <div
              className="col-md-5"
              style={{ alignItems: "center", margin: "auto" }}
            >
              <div className=" mt-4 mb-4">
                <h3 className="fw-bold pinkColor text-center">
                  Do Not Sell My Information
                </h3>
              </div>
              <Form className="border p-2">
                <Form.Group controlId="first_name">
                  <Form.Control
                    type="name"
                    placeholder="First Name *"
                    className="mt-3"
                    name="first_name"
                    pattern="^(?!^[0-9]+$)(?!^[.,@]+$)[A-Za-z\d'.,@\s]*[A-Za-z\d'.,@]$"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid first name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="last_name">
                  <Form.Control
                    type="text"
                    placeholder="Last Name *"
                    className="mt-3"
                    name="last_name"
                    pattern="^(?!^[0-9]+$)(?!^[.,@]+$)[A-Za-z\d'.,@\s]*[A-Za-z\d'.,@]$"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid last name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="Email">
                  <Form.Control
                    type="email"
                    placeholder="name@example.com *"
                    className="mt-3"
                    name="email"
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="phone">
                  <Form.Control
                    type="tel"
                    placeholder="Phone Number *"
                    className="mt-3"
                    name="phone"
                    minLength={6}
                    maxLength={15}
                    pattern="^[0-9\+\-\(\).]+(?:\s?[0-9\+\-\(\).]+)*$"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid phone number.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="Message">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Message"
                    className="mt-3"
                    name="message"
                  />
                </Form.Group>

                <Form.Group controlId="opt_in">
                  <Form.Check
                    className="mt-3 mb-1 checkfeedback"
                    type="checkbox"
                    id="agreementCheckbox"
                    label="By checking this box, I agree that ITSecurity Wire can contact me by email or phone and provide more information about the services. *"
                    name="opt_in"
                    feedback="Acknowledgment is required !"
                    feedbackType="invalid"
                    required
                  />
                </Form.Group>

                <button type="submit" className="SubBtn mt-2 mb-3">
                  Submit
                </button>
                <p className="successmsg"> </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Donotsell;
