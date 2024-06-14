import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../Styles/Homepage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const Homepage = () => {
  return (
    <>


<div className="container" style={{overflow:"hidden"}}>
  <div className="row">
    <div className="col-md-12">
      <img style={{objectFit:"fill", height:"700px", width:"100%"}} src="https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg" alt="" />
      <div className='HomeText'>
      <h1>Lorem ipsum dolor sit amet asdas  asda</h1>
      <p>Book Smart, Travel Simple</p>
      <button>Start Planning Your Trip</button>
    </div>
    </div>

    

  </div>
</div>



<div className="container mt-4">
  <div className="row">

    <div className="col-md-4">
    <Card >
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
       <div className='d-flex'>
        <div>
        <h6>Card Title</h6>
        </div>
        <div>
        <p>Card Title Card Title</p>
        
        </div>
       </div>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href='/'>View Post</a>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-4">
    <Card >
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
       <div className='d-flex'>
        <div>
        <h6>Card Title</h6>
        </div>
        <div>
        <p>Card Title Card Title</p>
        
        </div>
       </div>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href='/'>View Post</a>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-4">
    <Card >
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
       <div className='d-flex'>
        <div>
        <h6>Card Title</h6>
        </div>
        <div>
        <p>Card Title Card Title</p>
        
        </div>
       </div>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href='/'>View Post</a>
      </Card.Body>
    </Card>
    </div>

    <button className='mt-3'>Load More</button>
  </div>

</div>




<div className="container mt-4" style={{overflow:"hidden"}}>
  <div className="row">
    <div className="col-md-12">
      <img className='middleImg' src="https://live.staticflickr.com/512/19156678806_43aa786da6_h.jpg" alt="" />
      <div className=''>
      <h1>Lorem ipsum dolor sit amet asdas  asda</h1>
      <p>Book Smart, Travel Simple</p>
      <button>Start Planning Your Trip</button>
    </div>
    </div>
   
  </div>
</div>



<div className="container">
  <div className="row">
    <div className="col-md-2">
      <div>
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
      </div>
      <div>
        <p>adasds</p>
      </div>
    </div>
    
  </div>
</div>


<div className="container">
  <div className="row">
    
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">

      <div className="col-md-12 d-flex gap-3">
        
       <div className="col-md-8 p-3 d-flex border">
    
    <div className='col-md-7'>
    <Card style={{width:"95%"}}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
       <div className='d-flex'>
        <div>
        <h6>Card Title</h6>
        </div>
        <div>
        <p>Card Title Card Title</p>
        
        </div>
       </div>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href='/'>View Post</a>
      </Card.Body>
    </Card>
    </div>

    <div className='col-md-5'>
    <div class="d-flex gap-3 " style={{alignItems:"center"}}>
      <div class="quickImgBox">
        <img style={{height:"80px"}} src="https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1717757057430-Gcore Unveils Inference at the Edge â Bringing AI Applications Closer to End Users for Seamless Real-Time Performance.webp" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="mt-3" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

          <div class="d-flex gap-3 " style={{alignItems:"center"}}>
      <div class="quickImgBox">
        <img style={{height:"80px"}} src="https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1717757057430-Gcore Unveils Inference at the Edge â Bringing AI Applications Closer to End Users for Seamless Real-Time Performance.webp" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="mt-3" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>


          <div class="d-flex gap-3 " style={{alignItems:"center"}}>
      <div class="quickImgBox">
        <img style={{height:"80px"}} src="https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1717757057430-Gcore Unveils Inference at the Edge â Bringing AI Applications Closer to End Users for Seamless Real-Time Performance.webp" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="mt-3" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

         
    </div>


    </div>

       <div className="col-md-4 border p-4" >
<h5>Manage Reads</h5>
       <div class="d-flex gap-3 " style={{alignItems:"center"}}>
      <div class="quickImgBox">
        <img style={{height:"80px"}} src="https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1717757057430-Gcore Unveils Inference at the Edge â Bringing AI Applications Closer to End Users for Seamless Real-Time Performance.webp" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="mt-3" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

          <div class="d-flex gap-3 " style={{alignItems:"center"}}>
      <div class="quickImgBox">
        <img style={{height:"80px"}} src="https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1717757057430-Gcore Unveils Inference at the Edge â Bringing AI Applications Closer to End Users for Seamless Real-Time Performance.webp" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="mt-3" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

          <div class="d-flex gap-3 " style={{alignItems:"center"}}>
      <div class="quickImgBox">
        <img style={{height:"80px"}} src="https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1717757057430-Gcore Unveils Inference at the Edge â Bringing AI Applications Closer to End Users for Seamless Real-Time Performance.webp" alt="Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance"  /></div>
        <div class="mt-3" >
          <h3 style={{fontSize:"1rem"}} class="fw-bold hoverHead quickText h5 line-clamp">Gcore Unveils Inference at the Edge – Bringing AI Applications Closer to End Users for Seamless Real-Time Performance</h3>
          <p style={{fontSize:"13px"}}> Jun 7, 2024</p>
          </div>
          </div>

          


       </div>

       </div>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" >
        Tab content for Contact
      </Tab>
    </Tabs>
   
  </div>
</div>

    </>
  )
}

export default Homepage