import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

import { faFacebook, faLinkedin, faYoutube, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import '../App.css'


function App() {
  
    const [showSearch, setShowSearch] = useState(false);
  
    const toggleSearch = () => {
      setShowSearch(!showSearch);
    };

    const closeSearch = () => {
      setShowSearch(false);
    };

 
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000); // Update every second
  
      return () => clearInterval(interval);
    }, []);
  
    const formattedDateTime = currentDateTime.toLocaleString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      
      timeZoneName: 'short',
    });
  
  return (

    <div className='navborder'>

<div className="responsive1 btmbor">
    <Navbar style={{marginLeft:'30px', marginRight:'30px'}}>
        <Navbar.Brand href="#"> <p className='dateTime'>{formattedDateTime}</p></Navbar.Brand>
       
        
        <Nav className="ms-auto " style={{gap:'10px'}}>
        <Form.Select className="mx-3" style={{width: '150px'}}>
          <option value="option1">English</option>
          <option value="option2">Japan</option>
          <option value="option3">Malyalam</option>
          <option value="option1">Portugeus</option>
          <option value="option2">Maleshi</option>
          <option value="option3">Singapuri</option>
          
        </Form.Select>
        <Nav>|</Nav>
          <Nav.Link  className='fw-semibold'>Follow Us</Nav.Link>
          <Nav.Link ><Link to={'https://www.facebook.com/EnterpriseTalk'}><FontAwesomeIcon icon={faFacebook} style={{fontSize:'20px', color:'grey'}} /></Link></Nav.Link>
          <Nav.Link ><Link to={'https://www.instagram.com/enterprisetalk/'}><FontAwesomeIcon icon={faInstagram} style={{fontSize:'20px', color:'grey'}} /></Link></Nav.Link>
          <Nav.Link ><Link to={'https://twitter.com/Enterprise_Talk'}><FontAwesomeIcon icon={faTwitter} style={{fontSize:'20px', color:'grey'}}/></Link></Nav.Link>
          <Nav.Link ><Link to={'https://www.linkedin.com/company/enterprisetalk'}><FontAwesomeIcon icon={faLinkedin} style={{fontSize:'20px', color:'grey'}}/></Link></Nav.Link>
          <Nav.Link ><Link to={'https://www.youtube.com/playlist?list=PL9CcbuAV7GsQ-Qleu9gRc4Yh7s3D6cyZF'}><FontAwesomeIcon icon={faYoutube} style={{fontSize:'20px', color:'grey'}}/></Link></Nav.Link>
        </Nav>
    
      </Navbar>
      </div>
    
    <Navbar collapseOnSelect expand="lg"  variant="light" className='mt-2 marlr'>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />


      <Navbar.Brand><Link to={'./Homepage'}>
        <img style={{ width: '200px' }} src="https://enterprisetalk.com/wp-content/uploads/2022/10/Asset-5-300x61.png.webp" alt="" /> </Link>
      </Navbar.Brand>




      {/* for mobile */}
      <div className='responsive2' >
      <div className="">
      <div
        className="search-icon"
        onClick={toggleSearch}
        style={{ cursor: 'pointer' }}
      >
        <FontAwesomeIcon icon={showSearch ? faTimes : faSearch} size="lg" />
      </div>
      {showSearch && (
        <div className="search-popup sea">
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="mr-2" />
            <Button className='btn-sm' onClick={closeSearch}>Search</Button>
          </Form>
        </div>
      )}
    </div>
      </div>
       {/* for mobile */}




      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav>


       
          
          
          <NavDropdown title="LATEST" id="collasible-nav-dropdown" className='bbborder'>
           
            <NavDropdown.Item href="#">TRENDING</NavDropdown.Item>
            <NavDropdown.Item href="#">QUICK BYTES</NavDropdown.Item>
            <NavDropdown.Item href="#">STARTUP</NavDropdown.Item>
            <NavDropdown.Item href="#">LEADERS</NavDropdown.Item>
            <NavDropdown.Item href="#">AMERICAS</NavDropdown.Item>
            <NavDropdown.Item href="#">EUROPE</NavDropdown.Item>
            <NavDropdown.Item href="#">ASIA</NavDropdown.Item>
            <NavDropdown.Item href="#">GLOBAL</NavDropdown.Item>
          
          </NavDropdown>

          <NavDropdown title="THOUGHT LEADERSHIP" id="collasible-nav-dropdown" className='bbborder'>
            <NavDropdown.Item href="#">INTERVIEWS</NavDropdown.Item>
            <NavDropdown.Item href="#">PODCASTS</NavDropdown.Item>
            <NavDropdown.Item href="#">VIDEOS</NavDropdown.Item>
            <NavDropdown.Item href="#">GUEST AUTHOR</NavDropdown.Item>

            
          </NavDropdown>
         
          <Nav.Link className='bbborder'><Link to={'./Podcasts'} style={{color:'black', textDecoration:'none'}}>PODCASTS</Link></Nav.Link>
          
          

          <NavDropdown title="INSIGHTS" id="collasible-nav-dropdown" className='bbborder'>
            <NavDropdown.Item href="#">ET BUREAU</NavDropdown.Item>
            <NavDropdown.Item href="#">EDITOR'S CHOICE</NavDropdown.Item>
           
            
          </NavDropdown>

          <Nav.Link className='bbborder'><Link to={'./Event'} style={{color:'black', textDecoration:'none'}}>EVENTS</Link></Nav.Link>

          
          <Nav.Link className='bbborder'><Link to={'./Resources'} style={{color:'black', textDecoration:'none'}}>RESOURCES</Link></Nav.Link>

          <div className=" responsive1">
          <div
        className="search-icon"
        onClick={toggleSearch}
        style={{ cursor: 'pointer' , width:'24px'}}
      >
        <FontAwesomeIcon icon={showSearch ? faTimes : faSearch} size="lg" />
      </div>
      {showSearch && (
        <div className="search-popup sea">
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="mr-2" />
            <Button className='btn-sm' onClick={closeSearch}>Search</Button>
          </Form>
        </div>
      )}
    </div>
        </Nav>

        {/* for mobile */}
        <div className="responsive2">
          <Navbar>
            <div style={{display:'grid'}}>
              <div>
                <div href="#" style={{padding:'10px'}}>
                  <p className='dateTime' style={{color:'grey', fontWeight:'500'}}>{formattedDateTime}</p>
                </div>
              </div>
        
        
              <div>
                <Nav className="" style={{gap:'10px'}}>
                  <Form.Select style={{color:'grey', fontWeight:'500'}}>
                    <option value="option1">English</option>
                    <option value="option2">Japan</option>
                    <option value="option3">Malyalam</option>
                    <option value="option1">Portugeus</option>
                    <option value="option2">Maleshi</option>
                    <option value="option3">Singapuri</option>
        
                  </Form.Select>
                </Nav>
              </div>
              <div>
                <Nav style={{display:'grid'}}>
                  <div>
                    <Nav.Link href="#" className='fw-semibold' style={{color:'grey'}}>Follow</Nav.Link>
                  </div>
                  <div style={{display:'flex'}}>
                    <Nav.Link>
                      <Link to={'https://www.facebook.com/EnterpriseTalk'}>
                      <FontAwesomeIcon style={{fontSize:'27px', color:'grey'}} icon={faFacebook} />
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to={'https://www.instagram.com/enterprisetalk/'}>
                      <FontAwesomeIcon style={{fontSize:'27px', color:'grey'}} icon={faInstagram} />
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to={'https://twitter.com/Enterprise_Talk'}>
                      <FontAwesomeIcon style={{fontSize:'27px', color:'grey'}} icon={faTwitter} />
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to={'https://www.linkedin.com/company/enterprisetalk'}>
                      <FontAwesomeIcon style={{fontSize:'27px', color:'grey'}} icon={faLinkedin} />
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to={'https://www.youtube.com/playlist?list=PL9CcbuAV7GsQ-Qleu9gRc4Yh7s3D6cyZF'}>
                      <FontAwesomeIcon style={{fontSize:'27px', color:'grey'}} icon={faYoutube} />
                      </Link>
                    </Nav.Link>
                  </div>
                </Nav>
              </div>
            </div>
        
          </Navbar>
        </div>
        
        {/* for mobile */}
        
      </Navbar.Collapse>


       


    </Navbar>
    </div>
  );
}

export default App;
