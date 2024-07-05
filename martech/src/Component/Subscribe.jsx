import React, { useState } from "react";
import { Nav, Container, Form, Row, Col, Modal } from "react-bootstrap";
import TalkMartech from "../Images/martech-logo.webp";
import "../Styles/Modal.css";
import "../Styles/Content.css";
import newss from "../Images/Sub_envelope.gif";

export function Subscribe() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Nav.Link className="pl-4 mt-0 DesktopResponsive">
        <button className="btn-sm" onClick={handleShow}>
          Subscribe
        </button>
      </Nav.Link>
      

      <Modal show={show} onHide={handleClose} className="subscribePopUp">
        <Modal.Header closeButton style={{ backgroundColor: "#f7a01e" }}>
          <img src={TalkMartech} alt="TalkCMO Banner" className="subslogo" />
        </Modal.Header>
        <Container className="popupBack">
          <Row>
            <Col md={5} className="mb-3 laptopmImgback">
              <img
                className="DesktopResponsive mt-3"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                src="https://enterprisetalk.com/static/media/silverlaptop.f1f016cdf7ed12c1cfe2.png"
                alt="Silver Laptop"
              />
            </Col>
            <Col md={7}>
              <div style={{ textAlign: "center" }}>
                <img
                  className="mt-3"
                  style={{
                    width: "60%",
                    borderRadius: "10px"
                  }}
                  src={newss}
                  alt="Newsletter Banner"
                />
              </div>

              <Form className="px-3 mb-3" controlId="emailInput">
                <Form.Group>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    aria-label="Email"
                    data-testid="TextInput"
                    className="mt-3 py-3"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address.
                  </div>
                </Form.Group>
                <Modal.Footer className="start">
                  <button className="SubBtn">Submit</button>
                </Modal.Footer>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal>
    </div>
  );
}
