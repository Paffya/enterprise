import React, { useEffect} from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Nav, Navbar, Container, NavDropdown, Form, Row, Col } from "react-bootstrap";
import "../App.css";
import "../Styles/Navbar.css";
import Search from "./NavbarCompo/Search";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

const CustomNavbar = () => {

  const options = {
   
    year: 'numeric',
    month: 'short',
    day: 'numeric',
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
        const response = await fetch('http://192.168.17.8:3000/api/post/leadership');
        const data = await response.json();
        setNewsPosts(data.newsData);
        setArticlePosts(data.artilceData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.17.8:3000/api/post/featured');
        const data = await response.json();
        setNewsPod(data.podcastData);
        setInterPosts(data.inteviewData);
        setGuestPosts(data.guestPostData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

 
  
  return (
    <>

      <div>


        
      <div style={{ backgroundColor: "#fff", height:'83px' }} className="fixed-top">
      <Navbar
        collapseOnSelect
        bg='white'
        expand="md"
        className="NavMArLR container container-max justify-content-between"
        style={{padding:"0px 8px"}}
      >




        <div className="marginNav d-flex">
          {/* <Navbar.Toggle aria-controls="responsive-navbar-na" /> */}
          
          <Sidebar />
          &nbsp;
          &nbsp;
          
          <Navbar.Brand className="logoImp">
            
            <a href="/">
            <img
            
            className="MainLogo"
            style={{ width: "70%" }}
            src="https://enterprisetalk.com/wp-content/uploads/2022/10/Asset-5-300x61.png.webp"
            alt=""
          />
            </a>
          </Navbar.Brand>

          
        </div>
        
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
        <img style={{width:"20%"}} src="https://enterprisetalk.com/wp-content/uploads/2022/10/Asset-5-300x61.png.webp" alt="" />
        {/* <Modal.Title style={{textAlign:"center", margin:"auto", fontWeight:"bold"}}>Subscribe to Newsletter</Modal.Title> */}

        </Modal.Header>
        <Container className="popupBack">
          <Row>
            <Col  md={5} className="mb-3">
              <img className="DesktopResponsive mt-3" style={{width:"100%", height:"-webkit-fill-available" ,objectFit:"cover", borderRadius:"10px"}} src="https://www.alexhyett.com/static/674af38197248298565547353d5a5069/5f237/newsletter-iphone.png" alt="" />
             
            </Col>
            <Col  md={7} >
            <div className="">
            <div class="letter-image">
	<div class="animated-mail">
		<div class="back-fold"></div>
		<div class="letter">
			<div class="letter-border"></div>
			<div class="letter-title"></div>
			<div class="letter-context"></div>
			<div class="letter-stamp">
				<div class="letter-stamp-inner"></div>
			</div>
		</div>
		<div class="top-fold"></div>
		<div class="body"></div>
		<div class="left-fold"></div>
	</div>
	{/* <div class="shadow"></div> */}
</div>
            </div>
              {/* <img className="mt-3" style={{width:"100%", borderRadius:"10px"}} src="https://cdn.theatlantic.com/thumbor/PYB6KEn99IAzMg5JDWCuXclJHjI=/0x43:2000x1085/1200x625/media/img/mt/2022/11/Emails/original.gif" alt="" /> */}
            <Form.Group className="px-3 mb-3 martop" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="Email ID" className="mt-3 py-3" />
        <div className="mt-3 px-2 fw-bold" style={{fontSize:"14px"}}>*By clicking on the Submit button, you are agreeing with the Privacy Policy with Enterprise Talks.</div>
      </Form.Group>
      <Modal.Footer className="start">
          {/* <Modal.Text>Subscribe To Newsletter</Modal.Text> */}
          
          <button className="SubBtn " onClick={handleClose}>
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
     
                    <div style={{ backgroundColor: "#eeeded",marginTop:'82px'}} className="gryBoxRepo">
                  
      <Navbar className="DesktopResponsive container-fluid container-max"  >
      
        <Navbar className="w-100" >
        {/* <Sidebar /> */}
          <Container>
          
            <Nav className="w-100 text-center d-flex justify-content-center gap-5">
              <Nav.Link className="text-black fw-bold hover-underline-animation ">
                <Link to="/Latest" className="text-black">Latest</Link>
              </Nav.Link>

              <NavDropdown  
              
                title="Leadership"
                id="basic-nav-dropdown"
                className="custom-dropdown hover-underline-animation "
              >
                <div className="dropdownLeader1">
                  <div className="d-flex justify-content-evenly">
                    <div>
                      <p className="fw-bold text-center mt-2">News</p>

                      {newsPosts.map((post, index) => (
                      <NavDropdown.Item
                      href={`/topic/${post.id}`}
                        className="text-black"
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
                              alt=""
                            />
                          </div>

                          <div style={{ width: "61%" }} className="paraMob">
                            <h5
                              className="fw-bold line-clamp"
                              style={{ fontSize: "15px" , marginTop:"5px", marginBottom:"5px" }}
                            >
                             <a className="text-black hoverHead" href={`/topic/${post.id}`}> {post.post_title}</a>
                            </h5>
                            <div className="DesktopResponsive ">
                              <p style={{ fontSize: "12px" }}>
                                By <span className="fw-bold">{post.post_author}</span> |
                               {new Date(post.post_date).toLocaleDateString(undefined, options)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </NavDropdown.Item>
                      ))}

                     

                      <a href="./" className="text-black ended mx-4">
                        See more
                      </a>
                    </div>

                    {/* <div style={{ borderLeft: "1px solid #bdbdbd" }}></div> */}

                    <div>
                      <p className="fw-bold text-center mt-2">Articles</p>
                      {ArticlePosts.map((post, index) => (
                      <NavDropdown.Item
                      href={`/topic/${post.id}`}
                        className="text-black"
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
                              alt=""
                            />
                          </div>

                          <div style={{ width: "61%" }} className="paraMob">
                            <h5 
                              className="fw-bold line-clamp"
                              style={{ fontSize: "15px", marginTop:"5px", marginBottom:"5px" }}
                            >
                             <a className="text-black hoverHead" href={`/topic/${post.id}`}> {post.post_title}</a>
                            </h5>
                            <div className="DesktopResponsive ">
                              <p style={{ fontSize: "12px" }}>
                                By <span className="fw-bold">{post.post_author}</span> |
                                {new Date(post.post_date).toLocaleDateString(undefined, options)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </NavDropdown.Item>
                      ))}

                     
                      

                      <a href="./" className="text-black ended mx-4">
                        See more
                      </a>
                    </div>
                  </div>
                </div>
              </NavDropdown>

              <NavDropdown
                title="Featured"
                id="basic-nav-dropdown"
                className="custom-dropdown hover-underline-animation "
              >
                <div className="dropdownLeader2">
                  <div className="d-flex justify-content-evenly">
                    <div>
                      <p className="fw-bold text-center mt-2">Podcasts</p>
                      {newsPod.map((post, index) => (
                      <NavDropdown.Item
                      href={`/topic/${post.id}`}
                        className="text-black"
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
                              alt=""
                            />
                          </div>

                          <div style={{ width: "61%" }} className="paraMob">
                            <h5
                              className="fw-bold line-clamp"
                              style={{ fontSize: "15px", marginBottom:'5px', marginTop:"5px" }}
                            >
                             <a className="text-black hoverHead" href={`/topic/${post.id}`}> {post.post_title}</a>
                            </h5>
                            <div className="DesktopResponsive ">
                              <p style={{ fontSize: "12px" }}>
                                By <span className="fw-bold">{post.post_author}</span> |
                                {new Date(post.post_date).toLocaleDateString(undefined, options)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </NavDropdown.Item>
                      ))}

                      

                      <a href="./" className="text-black ended mx-4">
                        See more
                      </a>
                    </div>

                    {/* <div style={{borderLeft:"1px solid #bdbdbd"}}></div> */}

                    <div>
                      <p className="fw-bold text-center mt-2">
                        featured Interview
                      </p>
                      {interPosts.map((post, index) => (
                      <NavDropdown.Item
                      href={`/topic/${post.id}`}
                        className="text-black"
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
                              alt=""
                            />
                          </div>

                          <div style={{ width: "61%" }} className="paraMob">
                            <h5
                              className="fw-bold line-clamp"
                              style={{ fontSize: "15px" , marginBottom:'5px', marginTop:"5px" }}
                            >
                              <a className="text-black hoverHead" href={`/topic/${post.id}`}> {post.post_title}</a>
                            </h5>
                            <div className="DesktopResponsive ">
                              <p style={{ fontSize: "12px" }}>
                                By <span className="fw-bold">{post.post_author}</span> |
                                {new Date(post.post_date).toLocaleDateString(undefined, options)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </NavDropdown.Item>
                      ))}

                      

                      <a href="./" className="text-black ended mx-4">
                        See more
                      </a>
                    </div>

                    {/* <div style={{borderLeft:"1px solid #bdbdbd"}}></div> */}

                    <div>
                      <p className="fw-bold text-center mt-2">Guest Posts</p>
                      {guestPosts.map((post, index) => (
                      <NavDropdown.Item
                      href={`/topic/${post.id}`}
                        className="text-black"
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
                              alt=""
                            />
                          </div>

                          <div style={{ width: "61%" }} className="paraMob">
                            <h5
                              className="fw-bold line-clamp"
                              style={{ fontSize: "15px", marginBottom:'5px', marginTop:"5px" }}
                            >
                              <a className="text-black hoverHead" href={`/topic/${post.id}`}> {post.post_title}</a>
                            </h5>
                            <div className="DesktopResponsive ">
                              <p style={{ fontSize: "12px" }}>
                                By <span className="fw-bold">{post.post_author}</span> |
                                {new Date(post.post_date).toLocaleDateString(undefined, options)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </NavDropdown.Item>
                      ))}

                  

                      <a href="./" className="text-black ended mx-4">
                        See more
                      </a>
                    </div>
                  </div>
                </div>
              </NavDropdown>

              
              <Nav.Link href="/ContentCategory" className="text-black fw-bold hover-underline-animation ">
                Resources
              </Nav.Link>
              <Nav.Link href="/Connect" className="text-black fw-bold hover-underline-animation ">
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
