import React from "react";
import { Card, Form } from "react-bootstrap";
import "../Styles/Connect.css";

const Contact = () => {
  return (
   
      <div className="container container-max mb-4">
        <div className="row">
          <div className="col-md-8">
            <div className="borderB mt-4 mb-4">
              <p>
                <span class="label1 h5 fw-bold pinkColor "></span>
              </p>
            </div>

            <div className="locationBox justify-content-around">
              <div>
                <Card
                  style={{ width: "21rem", marginRight: "10px" }}
                  className="box-Card1"
                >
                  <Card
                    className="p-md-3 cardHover"
                    style={{ fontSize: "14px" }}
                  >
                    <div id="future"></div>
                    <Card.Title
                      className="fw-bold"
                      style={{ cursor: "context-menu" }}
                    >
                      United Kingdom
                    </Card.Title>

                    <Card.Text className="fw-bold line-clamp">
                      40 Bloomsbury Way, Lower Ground Floor, London, WC1A 2SE
                    </Card.Text>
                  </Card>
                </Card>
              </div>

              <div>
                <Card
                  style={{ width: "21rem", marginRight: "10px" }}
                  className="box-Card1"
                >
                  <Card
                    className="p-md-3 cardHover"
                    style={{ fontSize: "14px" }}
                  >
                    <div id="future"></div>
                    <Card.Title
                      className="fw-bold"
                      style={{ cursor: "context-menu" }}
                    >
                      India
                    </Card.Title>

                    <Card.Text className="fw-bold line-clamp">
                      Unit No. 779, 7th Floor, Tower 2, World Trade Center,
                      Kharadi, Pune 411014.
                    </Card.Text>
                  </Card>
                </Card>
              </div>
            </div>

            <div className="locationBox mt-2 justify-content-around">
              <div>
                <Card
                  style={{ width: "21rem", marginRight: "10px" }}
                  className="box-Card1"
                >
                  <Card
                    className="p-md-3 cardHover"
                    style={{ fontSize: "14px" }}
                  >
                    <div id="future"></div>
                    <Card.Title
                      className="fw-bold"
                      style={{ cursor: "context-menu" }}
                    >
                      United States of America
                    </Card.Title>

                    <Card.Text className="fw-bold line-clamp">
                      1611 E 2nd St. Suite #137, Casper, WY 82601 United States
                      of America +1 866 366 6368
                    </Card.Text>
                  </Card>
                </Card>
              </div>

              <div>
                <Card
                  style={{ width: "21rem", marginRight: "10px" }}
                  className="box-Card1"
                >
                  <Card
                    className="p-md-3 cardHover"
                    style={{ fontSize: "14px" }}
                  >
                    <div id="future"></div>
                    <Card.Title
                      className="fw-bold"
                      style={{ cursor: "context-menu" }}
                    >
                      Costa Rica
                    </Card.Title>

                    <Card.Text className="fw-bold line-clamp">
                      5th Floor, Creaciones Santos, Sabana, San Jose, Costa Rica
                    </Card.Text>
                  </Card>
                </Card>
              </div>
            </div>

            <div className="locationBox mt-2 justify-content-around">
              <div>
                <Card
                  style={{ width: "21rem", marginRight: "10px" }}
                  className="box-Card1"
                >
                  <Card
                    className="p-md-3 cardHover"
                    style={{ fontSize: "14px" }}
                  >
                    <div id="future"></div>
                    <Card.Title
                      className="fw-bold"
                      style={{ cursor: "context-menu" }}
                    >
                      Singapore
                    </Card.Title>

                    <Card.Text className="fw-bold line-clamp">
                      1 Raffles Place, #44-01A One Raffles Place Singapore.
                      048616
                    </Card.Text>
                  </Card>
                </Card>
              </div>

              <div>
                <Card
                  style={{ width: "21rem", marginRight: "10px" }}
                  className="box-Card1"
                >
                  <Card
                    className="p-md-3 cardHover"
                    style={{ fontSize: "14px" }}
                  >
                    <div id="future"></div>
                    <Card.Title
                      className="fw-bold"
                      style={{ cursor: "context-menu" }}
                    >
                      Philippines
                    </Card.Title>

                    <Card.Text className="fw-bold line-clamp">
                      Prestige Tower, Penthouse II, F.Ortigas Jr. Rd., Pasig
                      City, Philippines
                    </Card.Text>
                  </Card>
                </Card>
              </div>
            </div>

            <div className="emailBox">
              <div className="col-md-4 ">
                <div className="borderB mt-4 mb-4">
                  <h1 className="fw-bold h5 pinkColor">Email Us</h1>
                </div>

                <div>
                  <a
                    className="text-black fw-bold"
                    href="mailto: media@ITSecurityWire.com"
                  >
                    Media@ITSecurityWire.com
                  </a>
                </div>
                <div className="mt-3">
                  <a
                    className="text-black fw-bold"
                    href="mailto: sales@ITSecurityWire.com"
                  >
                    Sales@ITSecurityWire.com
                  </a>
                </div>
              </div>

              <div className="col-md-4 ">
                <div className="borderB mt-4 mb-4">
                  <h2 className="fw-bold h5 pinkColor">CCPA Helpline</h2>
                </div>

                <div>
                  <a className="text-black fw-bold" href="tel:+18005462816">
                    1800-546-2816
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className=" mt-4 mb-4">
              <h3 className="fw-bold pinkColor h5 borderB">
                Send Us a Message
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
                  // pattern="[A-Za-z\s]*"

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
                  label="By checking this box, I agree that ITSecurity Wire can contact me by email or phone and provide more information about the services.*"
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
  
  );
};

export default Contact;
