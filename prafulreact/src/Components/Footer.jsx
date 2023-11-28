import React, {useState} from 'react'
import "../Styles/Footer.css"
import groupImg from "../Images/groupImg.webp"
import { Container,  Form, Row, Col } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

const Footer = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <div>


<div className="footerPadding" style={{backgroundColor:"rgb(238, 237, 237)"}}>
  <div className="container container-max">
    <div className="row">
      <div className="col-md-3">
        <div>
          <img className="FootLogo" src="https://enterprisetalk.com/wp-content/uploads/2022/10/Asset-5-300x61.png.webp" alt="" />
        </div>
        <div className="mt-4">
          <p className="just-text">A Peer Knowledge resources - By the CXO, For the CXO</p>
        </div>
        <div className="mt-2">
          <p className="just-text">Expert inputs on challenges, triumphs and innovative solution from corporate Movers and Shakers in the global Leadership space to add value to Business decision making.</p>
        </div>
        <div className="mt-3">
          <div>
            <a className="text-black fw-bold hoverHead" href="mailto: media@enterprisetalk.com">Media@Enterprisetalk.com</a>
          </div>
          <div className='mt-3'>
            <a className="text-black fw-bold hoverHead" href="mailto: sales@enterprisetalk.com">Sales@EnterpriseTalk.com</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="">
          <div className="border-bottom mt-3">
            <h5 className="fw-bold">About</h5>
          </div>
          <div className="border-bottom mt-3">
            <p ><a href="/About" className='text-black hoverHead'>About Us</a></p>
          </div>
          <div className="border-bottom mt-3">
            <a href="/Connect"><p className='hoverHead'>Contact Us</p></a>
          </div>
          <div className="border-bottom mt-3">
            <p className='hoverHead'>
            <p className='text-black hoverHead' style={{cursor:"pointer"}} onClick={handleShow}>
        Subscribe
      </p>

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
            </p>
          </div>
          <div className="border-bottom mt-3">
            <p className='hoverHead'>Advertise</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="">
          <div className="border-bottom mt-3">
            <h5 className="fw-bold">Policies</h5>
          </div>
          <div className="border-bottom mt-3">
           <a href='/Privacy'> <p className='hoverHead'>Cookie Policy</p></a>
          </div>
          <div className="border-bottom mt-3">
            <p className='hoverHead'>Terms Of Use</p>
          </div>
          <div className="border-bottom mt-3">
           <a href="/DoNotSell"> <p className='hoverHead'>Do Not Sell My Information</p> </a>
          </div>
        </div>
      </div>
      <div className="col-md-3 followPadding">
        <div>
          <p className="fw-bold" style={{fontSize:"19px"}}>Follow Us</p>
        </div>
        <div className="d-flex mt-2">
          <div style={{width:"25%"}}>
            <a href="https://www.facebook.com/EnterpriseTalk"><img src="https://www.freepnglogos.com/uploads/facebook-logo-13.png" alt="facebook img"  style={{width:"60%", borderRadius:"6px"}} /></a>
          </div>
          <div style={{width:"25%"}}>
            <a href="https://www.instagram.com/enterprisetalk"><img src="https://i.pinimg.com/736x/dc/70/7c/dc707c0e2e4a1883d4ebb81d107aec9a.jpg" alt="instagram img" style={{width:"60%", borderRadius:"6px"}} /></a>
          </div>
          <div style={{width:"25%"}}>
            <a href="https://www.twitter.com/Enterprise_Talk"><img src="https://cdn.punchng.com/wp-content/uploads/2023/07/24084806/Twitter-new-logo.jpeg" alt="twitter img" style={{width:"60%", borderRadius:"6px"}} /></a>
          </div>
          <div style={{width:"25%"}}>
            <a href="https://www.linkedin.com/company/enterprisetalk/"><img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="linkedin img" style={{width:"60%", borderRadius:"6px"}} /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-12 mt-3">
      <h5 className="text-center  fw-bold">Other Publications</h5>
    </div>
    <div className="">
      <div className="text-center mt-3">
        <img style={{width:"40%"}} className="publicImg" src={groupImg} alt="" />
      </div>
    </div>
    <div className="mt-4" style={{borderTop:"1px solid #bdbdbd"}}>
      <p className="mt-2" style={{fontSize:" 13px"}}>An Imprint of OnDot ® Media © | All Rights Reserved</p>
    </div>
  </div>
</div>


    </div>
  )
}

export default Footer