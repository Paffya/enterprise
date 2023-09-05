import React from 'react'
import { Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom'
import '../App.css'

const Footer = () => {
  return (

    
    <footer className="mt-4" style={{borderTop:'1px solid #d9d9d9', marginLeft:'30px', marginRight:'30px'}} >
    
      <Row className='mt-4'>
        <Col md={3} className="mb-4">
          <img style={{ width: '200px' }} className="mb-4" src="https://enterprisetalk.com/wp-content/uploads/2022/10/Asset-5-300x61.png.webp" alt="" />
          {/* <img src={Logo} alt="Logo" className="footer-logo" /> */}
          <p>A Peer Knowledge Resources- By the CXO, For the CXO</p>
          <p>Expert inputs on challenges, triumphs and innovative solutions from corporate Movers and Shakers in global Leadership space to add value to business decision making.</p>

          
        </Col>
        <Col md={3} className="mb-4">
          <h5 style={{borderBottom:'2px solid #d9d9d9', lineHeight:'2'}} className='fw-bold'>About</h5>
          <ul className="list-unstyled">
            <div style={{lineHeight:2}} className='linked'>
            <li><Link style={{textDecoration:"none", color:'black', fontWeight:500}}>About Us</Link></li>
            <li><Link style={{textDecoration:"none", color:'black', fontWeight:500}}>Contact Us</Link></li>
            <li><Link style={{textDecoration:"none", color:'black', fontWeight:500}}>Newsletter</Link></li>
            <li><Link style={{textDecoration:"none", color:'black', fontWeight:500}}>Privacy Policy</Link></li>
            </div>
          </ul>
        </Col>
        <Col md={3} className="mb-4">
          <h5 style={{borderBottom:'2px solid #d9d9d9',  lineHeight:'2'}} className='fw-bold'>Latest</h5>
          <ul className="list-unstyled">
           <div style={{lineHeight:2}}>
           <li><Link style={{textDecoration:"none", color:'black', fontWeight:500}}>Trending</Link></li>
            <li><Link style={{textDecoration:"none", color:'black', fontWeight:500}}>Quick Bytes</Link></li>
            <li><Link style={{textDecoration:"none", color:'black', fontWeight:500}}>Startup</Link></li>
            <li><Link style={{textDecoration:"none", color:'black', fontWeight:500}}>Leaders</Link></li>
            <li><Link style={{textDecoration:"none", color:'black', fontWeight:500}}>Americans</Link></li>
            <li><Link style={{textDecoration:"none", color:'black', fontWeight:500}}>Europe</Link></li>
            <li><Link style={{textDecoration:"none", color:'black', fontWeight:500}}>Asia</Link></li>
            <li><Link style={{textDecoration:"none", color:'black', fontWeight:500}}>Global</Link></li>
           </div>
          </ul>
        </Col>
        <Col md={3} className="mb-4">
          <h5 style={{borderBottom:'2px solid #d9d9d9',  lineHeight:'2'}} className='fw-bold'>Thought Leadership And Insights</h5>
          <ul className="list-unstyled">
           <div style={{lineHeight:2}}>
           <li><Link style={{textDecoration:"none", color:'black', fontWeight:500}}>Interview</Link></li>
            <li><Link style={{textDecoration:"none", color:'black', fontWeight:500}}>Podcasts</Link></li>
            <li><Link style={{textDecoration:"none", color:'black', fontWeight:500}}>Videos</Link></li>
            <li><Link style={{textDecoration:"none", color:'black', fontWeight:500}}>Guest Author</Link></li>
            <li><Link style={{textDecoration:"none", color:'black', fontWeight:500}}>Editor's View</Link></li>
            <li><Link style={{textDecoration:"none", color:'black', fontWeight:500}}>ET Bureau</Link></li>
           </div>
          </ul>
        </Col>

        <Col md={3} mb={4} style={{borderTop:'1px solid #d9d9d9'}}>
        <p className='fw-bold' style={{marginTop:'10px'}}>Other Publications</p>
          <div className='talkLogo'>
          <img style={{ width: '107px', height:'41px' }} src="https://enterprisetalk.com/wp-content/uploads/2022/Talkcmo-4.png" alt="" />
          <img style={{ width: '200px', marginTop: "-14px" }} src="https://enterprisetalk.com/wp-content/uploads/2022/ITSecurity-wire.png" alt="" />
          {/* <img style={{ width: '200px', marginTop: "-14px" }} src="https://enterprisetalk.com/wp-content/uploads/2022/TalkMartech.png" alt="" />
          <img style={{ width: '200px', marginTop: "-14px" }} src="https://enterprisetalk.com/wp-content/uploads/2022/TalkFintech.png" alt="" />
          <img style={{ width: '200px', marginTop: "-14px" }} src="https://enterprisetalk.com/wp-content/uploads/2022/TalkDev.png" alt="" /> */}
          </div>
        </Col>
      </Row>
      
 <div className='subFooter'>An Imprint of OnDot ® Media © | All rights reserved | Privacy Policy</div>
  </footer>

  
  
  );
};

export default Footer;
