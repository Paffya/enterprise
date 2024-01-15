import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import "../App.css";
import "../Styles/Navbar.css";
import Search from "./NavbarCompo/Search";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
// import laptopImg from "../Images/enterpriselaptop.png"
import Modal from "react-bootstrap/Modal";
import silverLaptop from "../Images/silverlaptop.png";

const CustomNavbar = () => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const [open, setOpen] = useState(false);
  const showDropdown = (e) => {
    setOpen(!open);
  };
  const hideDropdown = (e) => {
    setOpen(false);
  };

  const [nav, setNav] = useState(false);
  const showDropdownNav = (e) => {
    setNav(!nav);
  };
  const hideDropdownNav = (e) => {
    setNav(false);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newsPosts, setNewsPosts] = useState([]);
  const [ArticlePosts, setArticlePosts] = useState([]);

  const [newsPod, setNewsPod] = useState([]);
  const [interPosts, setInterPosts] = useState([]);
  const [guestPosts, setGuestPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.17.8:3000/api/post/leadership"
        );
        const data = await response.json();
        setNewsPosts(data.newsData);
        setArticlePosts(data.artilceData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.17.8:3000/api/post/featured"
        );
        const data = await response.json();
        setNewsPod(data.podcastData);
        setInterPosts(data.inteviewData);
        setGuestPosts(data.guestPostData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [policyText, setPolicyText] = useState(
    "*By clicking on the Submit button, you are agreeing with the Privacy Policy with Enterprise Talks."
  );

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);
    return isValid;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail();
  };

  const resetForm = () => {
    setEmail("");
    setIsValidEmail(true);
    setPolicyText(
      "*By clicking on the Submit button, you are agreeing with the Privacy Policy with Enterprise Talks."
    );
  };

  const handleSubmit = async () => {
    if (validateEmail()) {
      try {
        const response = await fetch(
          "http://192.168.17.8:3000/api/subscribe/add",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );

        if (response.ok) {
          // The request was successful, you can handle the response here
          console.log("Subscription successful");
          resetForm(); // Reset the form after successful submission
          setPolicyText("Thank you for subscribing ✅");

          // Reset the complete form after 5 seconds
          setTimeout(() => {
            resetForm();
          }, 5000);
        } else {
          // The request failed, handle the error
          console.error("Subscription failed");
  
          // Check if the user already exists (assuming a specific response status code)
          setTimeout(() => {
            resetForm();
          }, 5000);
          if (response.status === 404) {
            // User already exists, show a message
            setPolicyText("This email is already subscribed ❌");
          }
        }
        
      } catch (error) {
        console.error("Error sending subscription request:", error);
        
      }
    } else {
      console.log("Invalid email");
    }
  };

  return (
    <>
      <div>
        <div
          style={{ backgroundColor: "#fff", height: "83px" }}
          className="fixed-top"
        >
          <Navbar
            collapseOnSelect
            bg="white"
            expand="md"
            className="NavMArLR container container-max justify-content-between"
            style={{ padding: "0px 8px" }}
          >
            <div className="marginNav d-flex">
              {/* <Navbar.Toggle aria-controls="responsive-navbar-na" /> */}
              <Sidebar />
              &nbsp; &nbsp;
              <Navbar.Brand className="logoImp">
                <a href="/">
                  <img
                    className="MainLogo"
                    style={{ width: "70%" }}
                    src="https://enterprisetalk.com/wp-content/uploads/2022/10/Asset-5-300x61.png.webp"
                    alt="Logo"
                  />
                </a>
              </Navbar.Brand>
            </div>

            {/* <Navbar.Brand className="logoImp mt-2" style={{textAlign:"center", margin:"auto"}}>
            
            <a href="/">
            <img
            
            className="MainLogo"
            style={{ width: "70%" }}
            src="https://enterprisetalk.com/wp-content/uploads/2022/10/Asset-5-300x61.png.webp"
            alt=""
          />
            </a>
          </Navbar.Brand> */}

            {/* <Navbar.Toggle aria-controls="responsive-navbar-na" /> */}

            <div className="d-flex  gap-5">
              <div className="DesktopResponsive">
                <Search />
              </div>

              <Nav.Link className="pl-4 mt-0  DesktopResponsive">
                <button className="btn-sm" onClick={handleShow}>
                  Subscribe
                </button>

                <div className="subscribePopUp">
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <img
                        
                        src="https://enterprisetalk.com/wp-content/uploads/2022/10/Asset-5-300x61.png.webp"
                        alt="Banner"
                        className="subslogo"
                      />
                      {/* <Modal.Title style={{textAlign:"center", margin:"auto", fontWeight:"bold"}}>Subscribe to Newsletter</Modal.Title> */}
                    </Modal.Header>
                    <Container className="popupBack">
                      <Row>
                        <Col md={5} className="mb-3 laptopmImgback">
                          {/* <img className="DesktopResponsive mt-3" style={{width:"100%", height:"-webkit-fill-available" ,objectFit:"cover", borderRadius:"10px"}} src="https://www.alexhyett.com/static/674af38197248298565547353d5a5069/5f237/newsletter-iphone.png" alt="" /> */}
                          <img
                            className="DesktopResponsive mt-3"
                            style={{
                              width: "100%",
                              objectFit: "cover",
                              borderRadius: "10px",
                            }}
                            src={silverLaptop}
                            alt=""
                          />
                        </Col>
                        <Col md={7}>
                          <div className="">
                            <div className="letter-image">
                              <div className="animated-mail">
                                <div className="back-fold"></div>
                                <div className="letter">
                                  <div className="letter-border"></div>
                                  <div className="letter-title"></div>
                                  <div className="letter-context"></div>
                                  <div className="letter-stamp">
                                    <div className="letter-stamp-inner"></div>
                                  </div>
                                </div>
                                <div className="top-fold"></div>
                                <div className="body"></div>
                                <div className="left-fold"></div>
                              </div>
                              {/* <div className="shadow"></div> */}
                            </div>
                          </div>
                          {/* <img className="mt-3" style={{width:"100%", borderRadius:"10px"}} src="https://cdn.theatlantic.com/thumbor/PYB6KEn99IAzMg5JDWCuXclJHjI=/0x43:2000x1085/1200x625/media/img/mt/2022/11/Emails/original.gif" alt="" /> */}
                          <Form.Group
                            className="px-3 mb-3 martop"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="email"
                              placeholder="Email ID"
                              className={`mt-3 py-3 ${
                                isValidEmail ? "" : "is-invalid"
                              }`}
                              value={email}
                              onChange={handleEmailChange}
                            />
                            <div
                              className="mt-3 px-2 fw-bold"
                              style={{ fontSize: "14px" }}
                            >
                              {policyText}
                              
                            </div>

                            {!isValidEmail && (
                              <div className="invalid-feedback">
                                Please enter a valid email address. 
                              </div>
                            )}
                          </Form.Group>
                          <Modal.Footer className="start">
                            <button className="SubBtn" onClick={handleSubmit}>
                              Submit
                            </button>
                          </Modal.Footer>
                        </Col>
                      </Row>
                    </Container>
                  </Modal>
                </div>
                {/* <button className="btn-sm">Subscribe</button> */}
              </Nav.Link>
            </div>
          </Navbar>
        </div>
      </div>

      <div
        style={{ backgroundColor: "#eeeded", marginTop: "82px" }}
        className="gryBoxRepo fixedNav" 
      >
        <Navbar className="DesktopResponsive container-fluid container-max">
          <Navbar className="w-100" >
            {/* <Sidebar /> */}
            <Container >
              <Nav className="w-100 text-center d-flex justify-content-center gap-5" >
                <Nav.Link className="text-black fw-bold hover-underline-animation " id="news">
                  <Link to="/latest" className="text-black hoverHead" >
                    Latest
                  </Link>
                </Nav.Link>

                <NavDropdown
                  show={open}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                  title="Leadership"
                  id="basic-nav-dropdown"
                  className="custom-dropdown hover-underline-animation "
                >
                  <div className="dropdownLeader1">
                    <div className="d-flex justify-content-evenly">
                      <div className="borderR" style={{width:"50%"}}>
                        <p className="fw-bold text-center mt-2">News</p>

                        {newsPosts.map((post, index) => (
                          <NavDropdown.Item
                            href={`/${post.cat_slug}/${post.post_name}`}
                            className="text-black borderB"
                            key={index}
                          >
                            <div
                              className="d-flex"
                              style={{
                                width: "100%",
                                gap: "20px",
                                // borderBottom: "1px solid #bdbdbd",
                              }}
                            >
                              <div style={{ width: "34%" }} className="imgMob">
                                <img
                                  style={{
                                    width: "100%",
                                    borderRadius: "10px",
                                    height: "84px",
                                    objectFit: "cover",
                                  }}
                                  src={post.banner_img}
                                  alt={post.banner_alt}
                                />
                              </div>

                              <div style={{ width: "61%" }} className="paraMob">
                                <h5
                                  className="fw-bold line-clamp"
                                  style={{
                                    fontSize: "15px",
                                    marginTop: "5px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <a
                                    className="text-black hoverHead"
                                    href={`/${post.cat_slug}/${post.post_name}`}
                                  >
                                    {" "}
                                    {post.post_title}
                                  </a>
                                </h5>
                                <div className="DesktopResponsive ">
                                  <p style={{ fontSize: "12px" }}>
                                    By{" "}
                                    <span className="fw-bold">
                                      {post.post_author}
                                    </span>{" "}
                                    |
                                    {new Date(
                                      post.post_date
                                    ).toLocaleDateString(undefined, options)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </NavDropdown.Item>
                        ))}

                        <a href="/topic/news" className="text-black ended mx-4">
                          See more
                        </a>
                      </div>

                      {/* <div style={{ borderLeft: "1px solid #bdbdbd" }}></div> */}

                      <div  style={{width:"50%"}}>
                        <p className="fw-bold text-center mt-2">Articles</p>
                        {ArticlePosts.map((post, index) => (
                          <NavDropdown.Item
                            href={`/${post.cat_slug}/${post.post_name}`}
                            className="text-black borderB"
                            key={index}
                          >
                            <div
                              className="d-flex"
                              style={{
                                width: "100%",
                                gap: "20px",
                                // borderBottom: "1px solid #bdbdbd",
                              }}
                            >
                              <div style={{ width: "34%" }} className="imgMob">
                                <img
                                  style={{
                                    width: "100%",
                                    borderRadius: "10px",
                                    height: "84px",
                                    objectFit: "cover",
                                  }}
                                  src={post.banner_img}
                                  alt={post.banner_alt}
                                />
                              </div>

                              <div style={{ width: "61%" }} className="paraMob">
                                <h5
                                  className="fw-bold line-clamp"
                                  style={{
                                    fontSize: "15px",
                                    marginTop: "5px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <a
                                    className="text-black hoverHead"
                                    href={`/${post.cat_slug}/${post.post_name}`}
                                  >
                                    {" "}
                                    {post.post_title}
                                  </a>
                                </h5>
                                <div className="DesktopResponsive ">
                                  <p style={{ fontSize: "12px" }}>
                                    By{" "}
                                    <span className="fw-bold">
                                      {post.post_author}
                                    </span>{" "}
                                    |
                                    {new Date(
                                      post.post_date
                                    ).toLocaleDateString(undefined, options)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </NavDropdown.Item>
                        ))}

                        <a
                          href="/topic/featured"
                          className="text-black ended mx-4"
                        >
                          See more
                        </a>
                      </div>
                    </div>
                  </div>
                </NavDropdown>

                <NavDropdown
                  show={nav}
                  onMouseEnter={showDropdownNav}
                  onMouseLeave={hideDropdownNav}
                  title="Featured"
                  id="basic-nav-dropdown"
                  className="custom-dropdown hover-underline-animation "
                >
                  <div className="dropdownLeader2">
                    <div className="d-flex justify-content-evenly">
                      <div className="borderR">
                        <p className="fw-bold text-center mt-2">Podcasts</p>
                        {newsPod.map((post, index) => (
                          <NavDropdown.Item
                            href={`/${post.cat_slug}/${post.post_name}`}
                            className="text-black borderB"
                          >
                            <div
                              className="d-flex"
                              style={{
                                width: "100%",
                                gap: "20px",
                                // borderBottom: "1px solid #bdbdbd",
                              }}
                            >
                              <div style={{ width: "34%" }} className="imgMob">
                                <img
                                  style={{
                                    width: "100%",
                                    borderRadius: "10px",
                                    height: "85px",
                                    objectFit: "cover",
                                  }}
                                  src={post.banner_img}
                                  alt={post.banner_alt}
                                />
                              </div>

                              <div style={{ width: "61%" }} className="paraMob">
                                <h5
                                  className="fw-bold line-clamp"
                                  style={{
                                    fontSize: "15px",
                                    marginBottom: "5px",
                                    marginTop: "5px",
                                  }}
                                >
                                  <a
                                    className="text-black hoverHead"
                                    href={`/${post.cat_slug}/${post.post_name}`}
                                  >
                                    {" "}
                                    {post.post_title}
                                  </a>
                                </h5>
                                <div className="DesktopResponsive ">
                                  <p style={{ fontSize: "12px" }}>
                                    By{" "}
                                    <span className="fw-bold">
                                      {post.post_author}
                                    </span>{" "}
                                    |
                                    {new Date(
                                      post.post_date
                                    ).toLocaleDateString(undefined, options)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </NavDropdown.Item>
                        ))}

                        <a
                          href="/topic/podcasts"
                          className="text-black ended mx-4"
                        >
                          See more
                        </a>
                      </div>

                      {/* <div style={{borderLeft:"1px solid #bdbdbd"}}></div> */}

                      <div className="borderR">
                        <p className="fw-bold text-center mt-2">
                          featured Interview
                        </p>
                        {interPosts.map((post, index) => (
                          <NavDropdown.Item
                            href={`/${post.cat_slug}/${post.post_name}`}
                            className="text-black borderB"
                          >
                            <div
                              className="d-flex"
                              style={{
                                width: "100%",
                                gap: "20px",
                                // borderBottom: "1px solid #bdbdbd",
                              }}
                            >
                              <div style={{ width: "34%" }} className="imgMob">
                                <img
                                  style={{
                                    width: "100%",
                                    borderRadius: "10px",
                                    height: "85px",
                                    objectFit: "cover",
                                  }}
                                  src={post.banner_img}
                                  alt={post.banner_alt}
                                />
                              </div>

                              <div style={{ width: "61%" }} className="paraMob">
                                <h5
                                  className="fw-bold line-clamp"
                                  style={{
                                    fontSize: "15px",
                                    marginBottom: "5px",
                                    marginTop: "5px",
                                  }}
                                >
                                  <a
                                    className="text-black hoverHead"
                                    href={`/${post.cat_slug}/${post.post_name}`}
                                  >
                                    {" "}
                                    {post.post_title}
                                  </a>
                                </h5>
                                <div className="DesktopResponsive ">
                                  <p style={{ fontSize: "12px" }}>
                                    By{" "}
                                    <span className="fw-bold">
                                      {post.post_author}
                                    </span>{" "}
                                    |
                                    {new Date(
                                      post.post_date
                                    ).toLocaleDateString(undefined, options)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </NavDropdown.Item>
                        ))}

                        <a
                          href="/topic/interview"
                          className="text-black ended mx-4"
                        >
                          See more
                        </a>
                      </div>

                      {/* <div style={{borderLeft:"1px solid #bdbdbd"}}></div> */}

                      <div>
                        <p className="fw-bold text-center mt-2">Guest Posts</p>
                        {guestPosts.map((post, index) => (
                          <NavDropdown.Item
                            href={`/${post.cat_slug}/${post.post_name}`}
                            className="text-black borderB"
                          >
                            <div
                              className="d-flex"
                              style={{
                                width: "100%",
                                gap: "20px",
                                // borderBottom: "1px solid #bdbdbd",
                              }}
                            >
                              <div style={{ width: "34%" }} className="imgMob">
                                <img
                                  style={{
                                    width: "100%",
                                    borderRadius: "10px",
                                    height: "85px",
                                    objectFit: "cover",
                                  }}
                                  src={post.banner_img}
                                  alt={post.banner_alt}
                                />
                              </div>

                              <div style={{ width: "61%" }} className="paraMob">
                                <h5
                                  className="fw-bold line-clamp"
                                  style={{
                                    fontSize: "15px",
                                    marginBottom: "5px",
                                    marginTop: "5px",
                                  }}
                                >
                                  <a
                                    className="text-black hoverHead"
                                    href={`/${post.cat_slug}/${post.post_name}`}
                                  >
                                    {" "}
                                    {post.post_title}
                                  </a>
                                </h5>
                                <div className="DesktopResponsive ">
                                  <p style={{ fontSize: "12px" }}>
                                    By{" "}
                                    <span className="fw-bold">
                                      {post.post_author}
                                    </span>{" "}
                                    |
                                    {new Date(
                                      post.post_date
                                    ).toLocaleDateString(undefined, options)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </NavDropdown.Item>
                        ))}

                        <a
                          href="/topic/guest-author"
                          className="text-black ended mx-4"
                        >
                          See more
                        </a>
                      </div>
                    </div>
                  </div>
                </NavDropdown>

                <Nav.Link
                  href="https://resources.enterprisetalk.com/"
                  className="text-black fw-bold hover-underline-animation hoverHead"
                >
                  Resources
                </Nav.Link>
                <Nav.Link
                  href="/connect"
                  className="text-black fw-bold hover-underline-animation hoverHead"
                >
                  Connect
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Navbar>
      </div>
    </>
  );
};

export default CustomNavbar;
