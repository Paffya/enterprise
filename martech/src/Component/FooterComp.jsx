import React, { useState } from "react";

import facebook from "../Images/facebook-f.webp";
import instagram from "../Images/instagram.webp";
import linkedin from "../Images/linkedin.webp";
import twitter from "../Images/whiteTwitter.webp";
import abcIT from "../Images/abcIT.webp";
import abcMartech from "../Images/talkcmo1.png";
import abcDev from "../Images/TalkDev.webp";
import abcFin from "../Images/TalkFintech.webp";
import abcEt from "../Images/enterpriseLogo.webp";
import "../Styles/Modal.css";
import { Container, Form, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import TalkMartech from "../Images/martech-logo.webp";
import "../Styles/Content.css";
import newss from "../Images/Sub_envelope.gif";
import newlogo from "../Images/martech-logo.webp"

import "../Styles/Footer.css";

export function FooterComp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <footer className="footerPadding text-black">
      <div className="container container-max">
        <div className="row text-black mt-2">
          <div className="col-md-3 col-12 mt-3">
            <source srcSet={newlogo} type="image/webp" />
            <img
              className="FootLogo"
              src={newlogo}
              // srcSet={`${newlogo} 150w, ${newlogo}@2x 300w`}
              sizes="(max-width: 150px) 150px, 300px"
              alt="TalkCMO Logo"
              loading="lazy"
              width="150"
              height="60"
            />
            <div className="textdata mt-4">
              <p className="mt-1 just-text text-black">
                A Peer Knowledge resource - By the CXO, For the CXO
              </p>
              <p className="mt-3 just-text text-black">
                Expert inputs on challenges, triumphs, and innovative solutions
                from corporate Movers and Shakers in the global Leadership space
                to add value to Business decision-making.
              </p>
              <div className="mt-3">
                <a
                  className="fw-bold hoverHead text-black mt-3 a-tag"
                  href="mailto: media@enterprisetalk.com"
                >
                  Media@EnterpriseTalk.com
                </a>
              </div>
              <div className="mt-3">
                <a
                  className="fw-bold hoverHead text-black a-tag"
                  href="mailto: sales@enterprisetalk.com"
                >
                  Sales@EnterpriseTalk.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12 mt-3">
            <h6 className="h5 fw-bold">About</h6>
            <a className="a-tag" href="/about">
              <p className=" text-black mt-3 borderB hoverHead">About Us</p>
            </a>

            <a className="a-tag" href="/contact-us">
              <p className=" text-black mt-3 borderB hoverHead">Contact Us</p>
            </a>

            <div className=" text-black mt-3 borderB">
              <p className="text-black subclickbtn hoverHead" onClick={handleShow}>
                Subscribe
              </p>
              </div>

              <div className="subscribePopUp">
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header
                    closeButton
                    style={{ backgroundColor: "#f7a01e" }}
                  >
                    <img
                      src={TalkMartech}
                      alt="Banner33"
                      className="subslogo"
                      srcSet={`${TalkMartech} 150w`}
                      sizes="150px"
                    />
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
                          
                          alt="silverLaptop"
                          width="100"
                          loading="lazy"
                        />
                      </Col>
                      <Col md={7}>
                        <div style={{ textAlign: "center" }}>
                          <img
                            className="mt-3"
                            style={{
                              width: "60%",
                              borderRadius: "10px",
                            }}
                            src={newss}
                            alt=""
                          />
                        </div>

                        <Form.Group
                          className="px-3 mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="email"
                            placeholder="Email ID"
                            autoComplete="off"
                            aria-label="email"
                            data-testid="TextInput"
                            className="mt-3 py-3"
                          />
                          <div
                            className="mt-3 px-2 fw-bold"
                            style={{ fontSize: "14px" }}
                          ></div>

                          <div className="invalid-feedback">
                            Please enter a valid email address.
                          </div>
                        </Form.Group>
                        <Modal.Footer className="start">
                          <button className="SubBtn">Submit</button>
                        </Modal.Footer>
                      </Col>
                    </Row>
                  </Container>
                </Modal>
              </div>
            
            <p className=" text-black mt-3 borderB hoverHead">Sitemap</p>
          </div>
          <div className="col-md-3 col-12 mt-3">
            <h6 className="h5 fw-bold">Policies</h6>

            <a className="a-tag" href="/privacy-policy">
              <p className=" text-black mt-3 borderB hoverHead">Privacy Policy</p>
            </a>

            <a className="a-tag" href="/opt-out-form">
              <p className=" text-black mt-3 borderB hoverHead">
                Do Not Sell My Information
              </p>
            </a>
          </div>
          <div className="col-md-3 col-12 mt-3 followPadding">
            <h6 className="h5 fw-bold">Follow us</h6>

            <div className="d-flex mt-4">
              <div  className="facebookImg">
                <a href="https://www.facebook.com/TalkCMO/">
                  <source srcSet={facebook} type="image/webp" />
                  <img
                    className="fIMG"
                    src={facebook}
                    alt="facebook"
                    defer
                    width="640"
                    height="360"
                  />
                </a>
              </div>
              <div  className="facebookImg">
                <a href="https://www.instagram.com/talkcmo/">
                  <source srcSet={instagram} type="image/webp" />
                  <img
                    className="iIMG"
                    src={instagram}
                    alt="instagram"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                </a>
              </div>
              <div  className="facebookImg">
                <a href="https://twitter.com/TalkCMO">
       
                  <img
                    className="xIMG"
                    src={twitter}
                   
             
                    alt="twitter img"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                </a>
              </div>
              <div  className="facebookImg">
                <a href="https://www.linkedin.com/company/talkcmo/">
                  <source srcSet={linkedin} type="image/webp" />
                  <img
                    className="iIMG"
                    src={linkedin}
                    alt="linkedin"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-12 mt-3">
            <h6 className="text-center h5 fw-bold">Other Publications</h6>
          </div>

          <div className="justify-content-center text-center otherPublic">
            <>
              <a href="https://talkmartech.com/">
                <img
                  className="imgPublica"
                  style={{ width: "140px" }}
                  src={abcEt}
                  srcSet={`${abcEt} 140w`}
                  sizes="140px"
                  alt="talkmar"
                  width="150"
                  height="35"
                  loading="lazy"
                />
              </a>
            </>

            <>
              <a href="https://enterprisetalk.com/">
                <img
                  className="imgPublicaEnter"
                  style={{ width: "140px", height: "40px", marginTop: "10px", objectFit:"fill" }}
                  src={abcIT}
                  srcSet={`${abcIT} 150w`}
                  sizes="150px"
                  alt="talkit"
                  width="150"
                  height="35"
                  loading="lazy"
                />
              </a>
            </>

            <>
              <a href="https://talkfintech.com/">
                <img
                  className="imgPublica"
                  style={{ width: "150px", height:"55px", objectFit:"cover", marginTop:"0px" }}
                  src={abcFin}
                  srcSet={`${abcFin} 150w`}
                  sizes="150px"
                  alt="talkfin"
                  width="150"
                  height="35"
                  loading="lazy"
                />
              </a>
            </>
            <>
              <a href="https://talkcmo.com/">
                <img
                  className="imgPublicaCMO"
                  style={{ width: "90px", height:"35px" }}
                  src={abcMartech}
                  srcSet={`${abcMartech} 150w`}
                  sizes="150px"
                  alt="talkcmo"
                  width="150"
                  height="35"
                  loading="lazy"
                />
              </a>
            </>
            <>
              <a href="https://talkdev.com/">
                <img
                  className="imgPublicadev"
                  style={{ width: "115px", height:"50px" ,marginTop: "0px", objectFit:"cover" }}
                  src={abcDev}
                  srcSet={`${abcDev} 150w`}
                  sizes="150px"
                  alt="talkdev"
                  width="150"
                  height="35"
                  loading="lazy"
                />
              </a>
            </>
          </div>

          <div className="borderT mt-3 mb-1">
          <p className="mt-2 text-black" style={{fontSize:" 13px"}}>An Imprint of OnDot ® Media © | All Rights Reserved | <a href="/privacy-policy" className='text-decoration-none hoverHead pRed'>Privacy Policy</a></p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
