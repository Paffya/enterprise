import React, { useState, useContext, useEffect } from 'react'
import {slide as Menu} from 'react-burger-menu'
import "../Styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {  Container,  Form, Row, Col } from "react-bootstrap";
import Search from "./NavbarCompo/Search";
import axios from 'axios';
import laptopImg from "../Images/enterpriselaptop.png"
import Modal from 'react-bootstrap/Modal';





import "../Styles/Navbar.css";


const MyContext = React.createContext();


const MyProvider = (props) => {
    const [menuOpenState, setMenuOpenState] = useState(false)

  return (
    <MyContext.Provider value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
      }}>
        {props.children}
        
      </MyContext.Provider>
    )
  }

  const Button = () => {
    const ctx = useContext(MyContext)
    return (
        
      <button style={{border:"transparent", backgroundColor:"#fff"}}  onClick={ctx.toggleMenu}><FontAwesomeIcon icon={faBars}  size="2xl" /></button>
   
      )
  }

  
  
  // create a navigation component that wraps the burger menu
  const Navigation = () => {
    const ctx = useContext(MyContext)

    // const { tag } = useParams();
    const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://192.168.17.8:3000/api/category/subcatlist');
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
        setError(error.message || 'An error occurred while fetching menu items.');
      }
    };

    fetchMenuItems();
  }, []);

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




  
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [policyText, setPolicyText] = useState(
    '*By clicking on the Submit button, you are agreeing with the Privacy Policy with Enterprise Talks.'
  );

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);
    return isValid;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const resetForm = () => {
    setEmail('');
    setIsValidEmail(true);
    setPolicyText(
      '*By clicking on the Submit button, you are agreeing with the Privacy Policy with Enterprise Talks.'
    );
  };

  const handleSubmit = async () => {
    if (validateEmail()) {
      try {
        const response = await fetch('http://192.168.17.8:3000/api/subscribe/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          // The request was successful, you can handle the response here
          console.log('Subscription successful');
          resetForm(); // Reset the form after successful submission
          setPolicyText('Thank you for subscribing!');

          // Reset the complete form after 5 seconds
          setTimeout(() => {
            resetForm();
          }, 5000);
        } else {
          // The request failed, handle the error
          console.error('Subscription failed');
        }
      } catch (error) {
        console.error('Error sending subscription request:', error);
      }
    } else {
      console.log('Invalid email');
    }
  };
  

    return (
        <Menu
          customBurgerIcon={false}
          isOpen={ctx.isMenuOpen}
          onStateChange={(state) => ctx.stateChangeHandler(state)}
          className='menu-content'
        >

<Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="ml-auto borderB">
            

            <Nav.Link className="text-white MobileResponsive" href="/Latest">
              <p className="text-white"><a href="/Latest" >Latest</a></p>
            </Nav.Link>

              
              <NavDropdown  title="Leadership" className=" text-white MobileResponsive">
              {newsPosts.slice(0,1).map((post, index) => (
                <NavDropdown.Item href={`/${post.cat_slug}/${post.post_name}`} key={index}>
                  News
                  
                  <div
                    className="d-flex"
                    style={{
                      width: "100%",
                      gap: "20px",
                      
                    }}
                  >
                    <div style={{ width: "61%", borderBottom: "1px solid #bdbdbd", }} className="paraMob">
                      <h5 className="fw-bold" style={{ fontSize: "15px" }}>
                      <a className="text-black hoverHead line-clamp" href={`/${post.cat_slug}/${post.post_name}`}> {post.post_title}</a>
                      </h5>
                      {/* <div className="DesktopResponsive ">
                        <p style={{ fontSize: "14px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                      </div> */}
                    </div>
                  </div>
                 
                  <NavDropdown.Item href="/ContentCategory/news">
                  <a href="/ContentCategory/news" className="text-black ended">
                    See more
                  </a>
                  </NavDropdown.Item>
                </NavDropdown.Item>
                ))}

{ArticlePosts.slice(0,1).map((post, index) => (
                <NavDropdown.Item href={`/${post.cat_slug}/${post.post_name}`} key={index}>
                  Articles
                 
                  <div
                    className="d-flex"
                    style={{
                      width: "100%",
                      gap: "20px",
                      
                    }}
                  >
                    <div style={{ width: "61%", borderBottom: "1px solid #bdbdbd", }} className="paraMob">
                      <h5 className="fw-bold" style={{ fontSize: "15px" }}>
                      <a className="text-black hoverHead line-clamp" href={`/${post.cat_slug}/${post.post_name}`}> {post.post_title}</a>
                      </h5>
                      {/* <div className="DesktopResponsive ">
                        <p style={{ fontSize: "14px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                      </div> */}
                    </div>
                  </div>
                 
                  <NavDropdown.Item href="/ContentCategory/featured">
                  <a href="/ContentCategory/featured" className="text-black ended">
                    See more
                  </a>
                  </NavDropdown.Item>
                </NavDropdown.Item>
))}
              </NavDropdown>
              



            
              <NavDropdown title="Featured" className="MobileResponsive">
                
              {newsPod.slice(0,1).map((post, index) => (
                <NavDropdown.Item  href={`/${post.cat_slug}/${post.post_name}`} key={index}>
                  Podcasts
                  
                  <div
                    className="d-flex"
                    style={{
                      width: "100%",
                      gap: "20px",
                      borderBottom: "1px solid #bdbdbd",
                    }}
                  >
                    <div style={{ width: "61%" }} className="paraMob">
                      <h5 className="fw-bold" style={{ fontSize: "15px" }}>
                      <a className="text-black hoverHead line-clamp" href={`/${post.cat_slug}/${post.post_name}`}> {post.post_title}</a>
                      </h5>
                      {/* <div className="DesktopResponsive ">
                        <p style={{ fontSize: "14px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                      </div> */}
                    </div>
                  </div>
                 

                  <NavDropdown.Item href="/ContentCategory/podcasts">
                  <a href="/ContentCategory/podcasts" className="text-black ended">
                    See more
                  </a>
                  </NavDropdown.Item>
                </NavDropdown.Item>
                ))}

{interPosts.slice(0,1).map((post, index) => (
                <NavDropdown.Item href={`/${post.cat_slug}/${post.post_name}`} key={index}>
                  Featured Interview

                 
                  <div
                    className="d-flex"
                    style={{
                      width: "100%",
                      gap: "20px",
                      borderBottom: "1px solid #bdbdbd",
                    }}
                  >
                    <div style={{ width: "61%" }} className="paraMob">
                      <h5 className="fw-bold" style={{ fontSize: "15px" }}>
                      <a className="text-black hoverHead line-clamp" href={`/${post.cat_slug}/${post.post_name}`}> {post.post_title}</a>
                      </h5>
                      {/* <div className="DesktopResponsive ">
                        <p style={{ fontSize: "14px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                      </div> */}
                    </div>
                  </div>
                

                  <NavDropdown.Item href="/ContentCategory/interview">
                  <a href="/ContentCategory/interview" className="text-black ended">
                    See more
                  </a>
                  </NavDropdown.Item>
                </NavDropdown.Item>
  ))}


{guestPosts.slice(0,1).map((post, index) => (
                <NavDropdown.Item href={`/${post.cat_slug}/${post.post_name}`} key={index}>
                  Guest Posts

                  
                  <div
                    className="d-flex"
                    style={{
                      width: "100%",
                      gap: "20px",
                      borderBottom: "1px solid #bdbdbd",
                    }}
                  >
                    <div style={{ width: "61%" }} className="paraMob">
                      <h5 className="fw-bold" style={{ fontSize: "15px" }}>
                      <a className="text-black hoverHead line-clamp" href={`/${post.cat_slug}/${post.post_name}`}> {post.post_title}</a>
                      </h5>
                      <div className="DesktopResponsive ">
                        <p style={{ fontSize: "14px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                      </div>
                    </div>
                  </div>
                

                  <NavDropdown.Item href="/ContentCategory/guest-author">
                  <a href="/ContentCategory/guest-author" className="text-black ended">
                    See more
                  </a>
                  </NavDropdown.Item>
               
                </NavDropdown.Item>
    ))}
              </NavDropdown>
          
         



            <Nav.Link className="text-white MobileResponsive" href="https://resources.enterprisetalk.com">
              <p className=" text-white"><a href="https://resources.enterprisetalk.com">Resources</a></p>
            </Nav.Link>



            <Nav.Link className="text-white MobileResponsive" href="/Connect">
              <p className=" text-white"><a href="/Connect">Connect</a></p>
            </Nav.Link>

 
            <Nav.Link className='MobileResponsive searchDisplay'>
            <Search />
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>

            <div className="menu-content d-grid">
   
            {error ? (
        <p>Error fetching menu items: {error}</p>
      ) : (
        
        menuItems.map((menuItem) => (
          <a key={menuItem.id}  className="menu-item hoverHead" href={`/tag/${menuItem.subcat_slug}`}>
      {menuItem.subcat_name}
      
    </a>
    

        ))
      )}

          

          <Nav.Link className="pl-4 mt-0  MobileResponsive mt-3">
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
           
            <Col  md={7} >
           
              <img className="mt-3" style={{width:"100%", borderRadius:"10px"}} src={laptopImg} alt="" />
              <Form.Group className="px-3 mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="email"
          placeholder="Email ID"
          className={`mt-3 py-3 ${isValidEmail ? '' : 'is-invalid'}`}
          value={email}
          onChange={handleEmailChange}
        />
        <div className="mt-3 px-2 fw-bold" style={{ fontSize: '14px' }}>
        {policyText}
        </div> 
        
        {!isValidEmail && <div className="invalid-feedback">Please enter a valid email address.</div>}
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
            </Nav.Link>
          
          </div>

          
        </Menu>
      );
    }
    
  


  const Sidebar = () => {

    
    return (
      <MyProvider>
        <div>
          <Button />
          <Navigation />
        </div>
      </MyProvider>
    )
  }
  
  export default Sidebar;