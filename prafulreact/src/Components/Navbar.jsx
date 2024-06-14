import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown, Form, Row, Col } from "react-bootstrap";
import "../App.css";
import "../Styles/Navbar.css";
import Search from "./NavbarCompo/Search";
import Sidebar from "./Sidebar";
// import laptopImg from "../Images/enterpriselaptop.png"
import Modal from "react-bootstrap/Modal";
import silverLaptop from "../Images/silverlaptop.png";

import news6 from "../Images/news6.png";
// import { Link } from "react-router-dom";
import {API_ROOT,webPath} from "../apiConfig";
import EnterpriseLogo from "../Images/enterpriseLogo.webp"




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

  const [feat, setFeat] = useState(false);
  const showFeatdownNav = (e) => {
    setFeat(!feat);
  };
  const hideFeatdownNav = (e) => {
    setFeat(false);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newsPosts, setNewsPosts] = useState([]);
  const [ArticlePosts, setArticlePosts] = useState([]);

  const [newsPod, setNewsPod] = useState([]);
  const [interPosts, setInterPosts] = useState([]);
  const [guestPosts, setGuestPosts] = useState([]);

  const [ feartureArticlePost ,setfeartureArticlePost] = useState([]);
  const [ feartureReadyPosts ,setfeartureReadyPosts] = useState([]);
  const [ feartureLearningPosts ,setfeartureLearningPosts] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_ROOT}/api/post/latestPost`
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
          `${API_ROOT}/api/post/leadership`
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_ROOT}/api/post/featured`
        );
        const data = await response.json();
        setfeartureArticlePost(data.articleData);
        setfeartureReadyPosts(data.futureReadyData);
        setfeartureLearningPosts(data.learningData);
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

  const handleEmailBlur = () => {
    validateEmail(email);
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
          `${API_ROOT}/api/subscribe/add`,
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

  const handleChange = (e) => {
    e.preventDefault();
  };



 

  return (
    <>
      <div >
        
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
              <Sidebar  />
              &nbsp; &nbsp;
              <Navbar.Brand className="logoImp">
                <a href="/">
                  <img
                    className="MainLogo"
                    style={{ width: "70%" }}
                    // src="https://enterprisetalk.com/wp-content/uploads/2022/10/Asset-5-300x61.png.webp"
                    src={EnterpriseLogo}
                    alt="Logo"
                   
                  />
                </a>
              </Navbar.Brand>
            </div>

           

            <div className="d-flex  gap-3">
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
                        
                        src={EnterpriseLogo}
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
                            alt="silverLaptop"
                          />
                        </Col>
                        <Col md={7}>
                         <div style={{textAlign:"center"}}>
                         <img className="mt-3" style={{width:"40%", borderRadius:"10px", filter: 'brightness(0) saturate(100%) invert(14%) sepia(100%) saturate(1000%) hue-rotate(345deg)' }} src={news6} alt="" />
                         </div>
                         
                          <Form.Group
                            className="px-3 mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="email"
                              placeholder="Email ID"
                              onBlur={handleEmailBlur}
                              autoComplete="off"
                              aria-label="email"
                              data-testid="TextInput"
                              className={`mt-3 py-3 ${
                                isValidEmail ? "" : "is-invalid"
                              }`}
                              value={email}
                              onChange={handleEmailChange}
                              onCut={handleChange}
                            onCopy={handleChange}
                            onPaste={handleChange}
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


              <NavDropdown
                  show={open}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                  title="Latest"
                  id="basic-nav-dropdown key1"
                  className="custom-dropdown hover-underline-animation fw-bold"
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
                                  src={`${webPath}${post.banner_img}`}
                                  alt={post.post_title}
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

                        <a href="/topics/news" className="text-black ended mx-4">
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
                                  src={`${webPath}${post.banner_img}`}
                                  alt={post.post_title}
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
                          href="/topics/featured"
                          className="text-black ended mx-4"
                        >
                          See more
                        </a>
                      </div>
                    </div>
                  </div>
                </NavDropdown>


                <NavDropdown
                  show={feat}
                  onMouseEnter={showFeatdownNav}
                  onMouseLeave={hideFeatdownNav}
                  title="Leadership"
                  id="basic-nav-dropdown key2"
                  className="custom-dropdown hover-underline-animation fw-bold"
                  // onSelect={handleDropdownSelect}
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
                                  src={`${webPath}${post.banner_img}`}
                                  alt={post.post_title}
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
                          href="/topics/podcasts"
                          className="text-black ended mx-4"
                        >
                          See more
                        </a>
                      </div>

                      

                      <div className="borderR">
                        <p className="fw-bold text-center mt-2">
                          Featured Interview
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
                                  src={`${webPath}${post.banner_img}`}
                                  alt={post.post_title}
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
                          href="/topics/interview"
                          className="text-black ended mx-4"
                        >
                          See more
                        </a>
                      </div>

                     

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
                                  src={`${webPath}${post.banner_img}`}
                                  alt={post.post_title}
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
                          href="/topics/guest-author"
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
                  title="Features"
                  id="basic-nav-dropdown key3"
                  className="custom-dropdown hover-underline-animation fw-bold"
                >
                  <div className="dropdownLeader3">
                    <div className="d-flex justify-content-evenly">
                      <div className="borderR">
                        <p className="fw-bold text-center mt-2">Articles</p>
                        {feartureArticlePost.map((post, index) => (
                          <NavDropdown.Item
                            href={`/${post.cat_slug}/${post.post_name}`}
                            className="text-black borderB"
                          >
                            <div
                              className="d-flex"
                              style={{
                                width: "100%",
                                gap: "20px",
                               
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
                                  src={`${webPath}${post.banner_img}`}
                                  alt={post.post_title}
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
                          href="/topics/featured"
                          className="text-black ended mx-4"
                        >
                          See more
                        </a>
                      </div>

                      

                      <div className="borderR">
                        <p className="fw-bold text-center mt-2">
                          Future Ready
                        </p>
                        {feartureReadyPosts.map((post, index) => (
                          <NavDropdown.Item
                            href={`/${post.cat_slug}/${post.post_name}`}
                            className="text-black borderB"
                          >
                            <div
                              className="d-flex"
                              style={{
                                width: "100%",
                                gap: "20px",
                               
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
                                  src={`${webPath}${post.banner_img}`}
                                  alt={post.post_title}
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
                          href="/topics/future-ready"
                          className="text-black ended mx-4"
                        >
                          See more
                        </a>
                      </div>

                     

                      <div>
                        <p className="fw-bold text-center mt-2">Learning Center</p>
                        {feartureLearningPosts.map((post, index) => (
                          <NavDropdown.Item
                            href={`/${post.cat_slug}/${post.post_name}`}
                            className="text-black borderB"
                          >
                            <div
                              className="d-flex"
                              style={{
                                width: "100%",
                                gap: "20px",
                               
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
                                  src={`${webPath}${post.banner_img}`}
                                  alt={post.post_title}
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
                          href="/topics/learning-center"
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
                  href="/contact-us"
                  className="text-black fw-bold hover-underline-animation hoverHead"
                >
                  Contact Us
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
