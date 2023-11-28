import React, { useState, useContext, useEffect } from 'react'
import {slide as Menu} from 'react-burger-menu'
import "../Styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Search from "./NavbarCompo/Search";
import axios from 'axios';





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
        <Menu
          customBurgerIcon={false}
          isOpen={ctx.isMenuOpen}
          onStateChange={(state) => ctx.stateChangeHandler(state)}
          className='menu-content'
        >

<Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="ml-auto borderB">
            

            <Nav.Link className="text-white MobileResponsive">
              <p className="text-white"><a href="/Latest">Latest</a></p>
            </Nav.Link>

              
              <NavDropdown  title="Leadership" className=" text-white MobileResponsive">

                <NavDropdown.Item >
                  News
                  {newsPosts.map((post, index) => (
                  <div
                    className="d-flex"
                    style={{
                      width: "100%",
                      gap: "20px",
                      
                    }}
                  >
                    <div style={{ width: "61%", borderBottom: "1px solid #bdbdbd", }} className="paraMob">
                      <h5 className="fw-bold" style={{ fontSize: "15px" }}>
                      <a className="text-black hoverHead line-clamp" href={`/topic/${post.id}`}> {post.post_title}</a>
                      </h5>
                      {/* <div className="DesktopResponsive ">
                        <p style={{ fontSize: "14px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                      </div> */}
                    </div>
                  </div>
                  ))}
                  
                  <a href="./" className="text-black ended">
                    See more
                  </a>
                </NavDropdown.Item>


                <NavDropdown.Item>
                  Articles
                  {ArticlePosts.map((post, index) => (
                  <div
                    className="d-flex"
                    style={{
                      width: "100%",
                      gap: "20px",
                      
                    }}
                  >
                    <div style={{ width: "61%", borderBottom: "1px solid #bdbdbd", }} className="paraMob">
                      <h5 className="fw-bold" style={{ fontSize: "15px" }}>
                      <a className="text-black hoverHead line-clamp" href={`/topic/${post.id}`}> {post.post_title}</a>
                      </h5>
                      {/* <div className="DesktopResponsive ">
                        <p style={{ fontSize: "14px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                      </div> */}
                    </div>
                  </div>
                  ))}
                  
                  <a href="./" className="text-black ended">
                    See more
                  </a>
                </NavDropdown.Item>

              </NavDropdown>
            



            
              <NavDropdown title="Featured" className="MobileResponsive">
                
                <NavDropdown.Item>
                  Podcasts
                  {newsPod.map((post, index) => (
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
                      <a className="text-black hoverHead line-clamp" href={`/topic/${post.id}`}> {post.post_title}</a>
                      </h5>
                      {/* <div className="DesktopResponsive ">
                        <p style={{ fontSize: "14px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                      </div> */}
                    </div>
                  </div>
                  ))}

                
                  <a href="./" className="text-black ended">
                    See more
                  </a>
                </NavDropdown.Item>
               
                <NavDropdown.Item>
                  Featured Interview

                  {interPosts.map((post, index) => (
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
                      <a className="text-black hoverHead line-clamp" href={`/topic/${post.id}`}> {post.post_title}</a>
                      </h5>
                      {/* <div className="DesktopResponsive ">
                        <p style={{ fontSize: "14px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                      </div> */}
                    </div>
                  </div>
                  ))}

                 
                  <a href="./" className="text-black ended">
                    See more
                  </a>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  Guest Posts

                  {guestPosts.map((post, index) => (
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
                      <a className="text-black hoverHead line-clamp" href={`/topic/${post.id}`}> {post.post_title}</a>
                      </h5>
                      <div className="DesktopResponsive ">
                        <p style={{ fontSize: "14px" }}>
                          By <span className="fw-bold">John Smith</span> | 12
                          sept 2023
                        </p>
                      </div>
                    </div>
                  </div>
                  ))}

                
                  <a href="./" className="text-black ended">
                    See more
                  </a>
               
                </NavDropdown.Item>

              </NavDropdown>
        
         



            <Nav.Link className="text-white MobileResponsive" >
              <p className=" text-white">Resources</p>
            </Nav.Link>



            <Nav.Link className="text-white MobileResponsive" >
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
          <a key={menuItem.id} className="menu-item" href={`/tag/${menuItem.sc_name}`}>
      {menuItem.sc_name}
      
    </a>
    

        ))
      )}

          

          <Nav.Link className="pl-4 mt-0  MobileResponsive mt-3">
              <button className="btn-sm">Subscribe</button>
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