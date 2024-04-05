import React, { useState, useContext, useEffect, useCallback } from "react";
import { slide as Menu } from "react-burger-menu";
import "../Styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Container, Form, Row, Col } from "react-bootstrap";
// import Search from "./NavbarCompo/Search";
import axios from "axios";
// import laptopImg from "../Images/enterpriselaptop.png";
import Modal from "react-bootstrap/Modal";

import "../Styles/Navbar.css";

import useOnclickOutside from "react-cool-onclickoutside";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import news6 from "../Images/news6.png";

// import { Link } from "react-router-dom";
import {API_ROOT,webPath} from "../apiConfig";

const MyContext = React.createContext();

const MyProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  return (
    <MyContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen),
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

const Button = () => {
  const ctx = useContext(MyContext);
  return (
    <button
      style={{ border: "transparent", backgroundColor: "#fff" }}
      onClick={ctx.toggleMenu}
    >
      <FontAwesomeIcon icon={faBars} size="2xl" />
    </button>
  );
};

// create a navigation component that wraps the burger menu
const Navigation = () => {
  const ctx = useContext(MyContext);

  // const { tag } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(
          `${API_ROOT}/api/category/subcatlist`
        );
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
        setError(
          error.message || "An error occurred while fetching menu items."
        );
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
















  

  const [search, setSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggle = () => {
    setSearch(!search);
  };

  const closeSearch = () => {
    setSearch(false);
    setSearchQuery(""); // Clear the searchQuery
  };

  const ref = useOnclickOutside(() => {
    if (searchQuery.trim() !== "") {
      fetchData();
    }
    closeSearch();
    
  });

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      // console.log("Sending search query:", searchQuery);
      const response = await fetch(`${API_ROOT}/api/post/navsearch/${searchQuery}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

        

      if (data.searchQuery.trim() === searchQuery.trim()) {
        setSearchResults(data.postData);
      } else {
        // If the received data doesn't match the current search query, clear the results
        setSearchResults([]);
      }
    } catch (error) {
      setSearchResults([]);
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim() !== "") {
        fetchData();
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, fetchData]);

  // const handleKeyPress = (e) => {
  //   // Check if the pressed key is Enter (key code 13)
  //   if (e.key === 'Enter') {
  //     // Check if search is true before navigating
  //     if (search) {
  //       // Replace 'yourHref' with the actual href you want to navigate to
  //       window.location.href = `/Searchlist/${searchQuery}`;
        
  //     }
  //   }
  // };

  const handleKeyPress = (e) => {
    // Adjust the threshold as needed for your definition of mobile
  
    if (e.key === 'Enter') {
      e.preventDefault();
      if (searchQuery.trim() === '') {
        // If search input is empty, redirect to the latest data
        window.location.href = '/search/all/latest';
      } else {
        // If search input is not empty, redirect to the entered searchQuery
        window.location.href = `/search/all/${searchQuery}`;
      }
    } 
  };
  






  return (
    <Menu
      customBurgerIcon={false}
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
      className="menu-content"
    >
      <Navbar.Collapse id="responsive-navbar-nav ">
        <Nav className="ml-auto borderB">

          
        <Nav className="my-auto MobileResponsive searchDisplay" ref={ref}>
      <Form
        className={ 
          search === false
            ? " mt-4" //fadeOutWidth
            : search === true
            ? "searchbar  mt-4 mb-2"
            : "searchbar"
        }
      >
        {search === true && (
          <input
            ref={ref}
            className={
              search === true
                ? "search-input fadeIn"
                : search === false
                ? "search-input fadeOut"
                : "search-input"
            }
            type="text"
            name=""
            placeholder="Search Here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            
          />
          
        )}

        
        

        {search && searchQuery.trim() !== "" && (
  <div className="searcMainBox">
    {loading && <p></p>}
    {!loading && (
      <ul className="searchBox">
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <a className="text-black" href={`/${result.cat_slug}/${result.post_name}`} key={result.id}>
              <li className="searchField borderB hoverHead">{result.post_title}</li>
            </a>
          ))
        ) : (
          <li className="searchField borderB hoverHead notFound">No Result</li>
        )}
        {searchResults.length > 0 && (
          <a href={`/search/all/${searchQuery}`} className="allResult">View All Results</a>
        )}
      </ul>
    )}
  </div>
)}
        {/* {search && searchQuery.trim() !== "" && (
          <div className="searcMainBox">

            {loading && <p></p>}
            {!loading && searchResults.length > 0 && (
              <>
                <ul className="searchBox">
                  {searchResults.map((result) => (
                    <a className="text-black" href={`/${result.cat_slug}/${result.post_name}`} key={result.id}>
                   <li  className="searchField borderB hoverHead">{result.post_title}</li>
                    </a>
                  ))}
                   
                  <a href={`/search/all/${searchQuery}`} className="allResult" 
                  >View All Results</a>
                </ul>
              </>
            )}
            <div className="notfoundsearch">
              {!loading && searchResults.length === 0 && searchQuery.trim() !== "" && (
                <p>Not Found</p>
              )}
            </div>
          </div>
        )} */}
        <div
          className={
            search === true
              ? "icon-bg fadeOut"
              : search === false
              ? "icon-bg "
              : "icon-bg"
          }
        >
          {search !== true ? (
            // Opening button (O)
            <FontAwesomeIcon
              onClick={toggle}
              className={
                search === true
                  ? "search-icon fadeOut"
                  : search === false
                  ? "search-icon " //fadeIn
                  : "search-icon"
              }
              icon={faSearch}
            />
          ) : (
            // Close button (X)
            <FontAwesomeIcon
              onClick={closeSearch}
              className="croossIcon"
              icon={faTimes}
            />
          )}
        </div>
      </Form>
    </Nav>


          {/* <Nav.Link className="text-white MobileResponsive" href="/Latest">
            <p className="text-white">
              <a href="/Latest">Latest</a>
            </p>
          </Nav.Link> */}

          

          <NavDropdown
            title="Latest"
            className=" text-white MobileResponsive"
          >
            {newsPosts.slice(0, 1).map((post, index) => (
              <NavDropdown.Item
                href={`/${post.cat_slug}/${post.post_name}`}
                key={index}
                className="mt-0"
              >
                News
                <div
                  className="d-flex"
                  style={{
                    width: "100%",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{ width: "61%", borderBottom: "1px solid #bdbdbd" }}
                    className="paraMob"
                  >
                    <h5 className="fw-bold" style={{ fontSize: "15px" }}>
                      <a
                        className="text-black hoverHead line-clamp"
                        href={`/${post.cat_slug}/${post.post_name}`}
                      >
                        {" "}
                        {post.post_title}
                      </a>
                    </h5>
                    {/* <div className="DesktopResponsive ">
                        <p style={{ fontSize: "14px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                      </div> */}
                  </div>
                </div>
                <NavDropdown.Item href="/topic/news">
                  <a href="/topic/news" className="text-black ended mt-0">
                    See more
                  </a>
                </NavDropdown.Item>
              </NavDropdown.Item>
            ))}

            {ArticlePosts.slice(0, 1).map((post, index) => (
              <NavDropdown.Item
                href={`/${post.cat_slug}/${post.post_name}`}
                key={index}
                className="mt-0"
              >
                Articles
                <div
                  className="d-flex"
                  style={{
                    width: "100%",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{ width: "61%", borderBottom: "1px solid #bdbdbd" }}
                    className="paraMob"
                  >
                    <h5 className="fw-bold" style={{ fontSize: "15px" }}>
                      <a
                        className="text-black hoverHead line-clamp"
                        href={`/${post.cat_slug}/${post.post_name}`}
                      >
                        {" "}
                        {post.post_title}
                      </a>
                    </h5>
                    {/* <div className="DesktopResponsive ">
                        <p style={{ fontSize: "14px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                      </div> */}
                  </div>
                </div>
                <NavDropdown.Item href="/topic/featured">
                  <a
                    href="/topic/featured"
                    className="text-black ended mt-0"
                  >
                    See more
                  </a>
                </NavDropdown.Item>
              </NavDropdown.Item>
            ))}
          </NavDropdown>

          <NavDropdown title="Leadership" className="MobileResponsive">
            {newsPod.slice(0, 1).map((post, index) => (
              <NavDropdown.Item
                href={`/${post.cat_slug}/${post.post_name}`}
                key={index}
                className="mt-0"
              >
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
                      <a
                        className="text-black hoverHead line-clamp"
                        href={`/${post.cat_slug}/${post.post_name}`}
                      >
                        {" "}
                        {post.post_title}
                      </a>
                    </h5>
                    {/* <div className="DesktopResponsive ">
                        <p style={{ fontSize: "14px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                      </div> */}
                  </div>
                </div>
                <NavDropdown.Item href="/topic/podcasts">
                  <a
                    href="/topic/podcasts"
                    className="text-black ended mt-0"
                  >
                    See more
                  </a>
                </NavDropdown.Item>
              </NavDropdown.Item>
            ))}

            {interPosts.slice(0, 1).map((post, index) => (
              <NavDropdown.Item
                href={`/${post.cat_slug}/${post.post_name}`}
                key={index}
                className="mt-0"
              >
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
                      <a
                        className="text-black hoverHead line-clamp"
                        href={`/${post.cat_slug}/${post.post_name}`}
                      >
                        {" "}
                        {post.post_title}
                      </a>
                    </h5>
                    {/* <div className="DesktopResponsive ">
                        <p style={{ fontSize: "14px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                      </div> */}
                  </div>
                </div>
                <NavDropdown.Item href="/topic/interview">
                  <a
                    href="/topic/interview"
                    className="text-black ended mt-0"
                  >
                    See more
                  </a>
                </NavDropdown.Item>
              </NavDropdown.Item>
            ))}

            {guestPosts.slice(0, 1).map((post, index) => (
              <NavDropdown.Item
                href={`/${post.cat_slug}/${post.post_name}`}
                key={index}
                className="mt-0"
              >
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
                      <a
                        className="text-black hoverHead line-clamp"
                        href={`/${post.cat_slug}/${post.post_name}`}
                      >
                        {" "}
                        {post.post_title}
                      </a>
                    </h5>
                    <div className="DesktopResponsive ">
                      <p style={{ fontSize: "14px" }}>
                        By <span className="fw-bold">John Smith</span> | 12 sept
                        2023
                      </p>
                    </div>
                  </div>
                </div>
                <NavDropdown.Item href="/topic/guest-author">
                  <a
                    href="/topic/guest-author"
                    className="text-black ended mt-0"
                  >
                    See more
                  </a>
                </NavDropdown.Item>
              </NavDropdown.Item>
            ))}
          </NavDropdown>

          <NavDropdown title="Featured" className="MobileResponsive">
            {feartureArticlePost.slice(0, 1).map((post, index) => (
              <NavDropdown.Item
                href={`/${post.cat_slug}/${post.post_name}`}
                key={index}
                className="mt-0"
              >
                Articles
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
                      <a
                        className="text-black hoverHead line-clamp"
                        href={`/${post.cat_slug}/${post.post_name}`}
                      >
                        {" "}
                        {post.post_title}
                      </a>
                    </h5>
                    {/* <div className="DesktopResponsive ">
                        <p style={{ fontSize: "14px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                      </div> */}
                  </div>
                </div>
                <NavDropdown.Item href="/topic/featured">
                  <a
                    href="/topic/featured"
                    className="text-black ended mt-0"
                  >
                    See more
                  </a>
                </NavDropdown.Item>
              </NavDropdown.Item>
            ))}

            {feartureReadyPosts.slice(0, 1).map((post, index) => (
              <NavDropdown.Item
                href={`/${post.cat_slug}/${post.post_name}`}
                key={index}
                className="mt-0"
              >
                Future Ready
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
                      <a
                        className="text-black hoverHead line-clamp"
                        href={`/${post.cat_slug}/${post.post_name}`}
                      >
                        {" "}
                        {post.post_title}
                      </a>
                    </h5>
                    {/* <div className="DesktopResponsive ">
                        <p style={{ fontSize: "14px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                      </div> */}
                  </div>
                </div>
                <NavDropdown.Item href="/topic/future-ready">
                  <a
                    href="/topic/future-ready"
                    className="text-black ended mt-0"
                  >
                    See more
                  </a>
                </NavDropdown.Item>
              </NavDropdown.Item>
            ))}

            {feartureLearningPosts.slice(0, 1).map((post, index) => (
              <NavDropdown.Item
                href={`/${post.cat_slug}/${post.post_name}`}
                key={index}
                className="mt-0"
              >
                Learning Center
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
                      <a
                        className="text-black hoverHead line-clamp"
                        href={`/${post.cat_slug}/${post.post_name}`}
                      >
                        {" "}
                        {post.post_title}
                      </a>
                    </h5>
                    <div className="DesktopResponsive ">
                      <p style={{ fontSize: "14px" }}>
                        By <span className="fw-bold">John Smith</span> | 12 sept
                        2023
                      </p>
                    </div>
                  </div>
                </div>
                <NavDropdown.Item href="/topic/learning-center">
                  <a
                    href="/topic/learning-center"
                    className="text-black ended mt-0"
                  >
                    See more
                  </a>
                </NavDropdown.Item>
              </NavDropdown.Item>
            ))}
          </NavDropdown>

          <Nav.Link
            className="text-white MobileResponsive"
            href="https://resources.enterprisetalk.com"
          >
            <p className=" text-white">
              <a href="https://resources.enterprisetalk.com">Resources</a>
            </p>
          </Nav.Link>

          <Nav.Link className="text-white MobileResponsive" href="/Connect">
            <p className=" text-white">
              <a href="/Connect">Connect</a>
            </p>
          </Nav.Link>

          {/* <Nav.Link className="MobileResponsive searchDisplay">
            <Search />
          </Nav.Link> */}
          
          

        </Nav>
      </Navbar.Collapse>

      <div className="menu-content d-grid">
        {error ? (
          <p>Error fetching menu items: {error}</p>
        ) : (
          menuItems.map((menuItem) => (
            <a
              key={menuItem.id}
              className="menu-item hoverHead"
              href={`/tag/${menuItem.subcat_slug}`}
            >
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
                <img
                 
                  src="https://enterprisetalk.com/wp-content/uploads/2022/10/Asset-5-300x61.png.webp"
                  alt="logo"
                  className="subslogo"
                />
                {/* <Modal.Title style={{textAlign:"center", margin:"auto", fontWeight:"bold"}}>Subscribe to Newsletter</Modal.Title> */}
              </Modal.Header>
              <Container className="popupBack">
                <Row>
                  <Col md={7}>
                  <div style={{textAlign:"center"}}>
                         <img className="mt-3" style={{width:"40%", borderRadius:"10px", filter: 'brightness(0) saturate(100%) invert(14%) sepia(100%) saturate(1000%) hue-rotate(345deg)' }} src={news6} alt="" />
                         </div>
                    <Form.Group
                      className="px-3 mb-3 "
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
        </Nav.Link>
      </div>
    </Menu>
  );
};

const Sidebar = () => {
  return (
    <MyProvider>
      <div>
        <Button />
        <Navigation />
      </div>
    </MyProvider>
  );
};

export default Sidebar;
