import React from "react";
import { Card, Form, Button } from "react-bootstrap";


const Connect = () => {
  return (
    <div>
      <div className="container container-max mb-4">
        <div className="row">

          

          <div className="col-md-8">
          <div className="borderB mt-4 mb-4">
            <h5 className="fw-bold pinkColor">Locations</h5>
          </div>

            <div className="locationBox justify-content-around">


              <div>
                <Card
                  style={{ width: "21rem", marginRight: "10px" }}
                  className="box-Card1"
                >
                  <Card
                    className="p-md-3 cardHover"
                    style={{ fontSize: "14px" }}
                  >
                    <div id="future"></div>
                    <Card.Title className="fw-bold">
                    United Kingdom
                    </Card.Title>

                    <Card.Text className="fw-bold line-clamp">
                    40 Bloomsbury Way,
Lower Ground Floor,
London, WC1A 2SE
                    </Card.Text>
                  </Card>
                </Card>
              </div>

              <div>
                <Card
                  style={{ width: "21rem", marginRight: "10px" }}
                  className="box-Card1"
                >
                  <Card
                    className="p-md-3 cardHover"
                    style={{ fontSize: "14px" }}
                  >
                    <div id="future"></div>
                    <Card.Title className="fw-bold">
                    India
                    </Card.Title>

                    <Card.Text className="fw-bold line-clamp">
                    Unit No. 779, 7th Floor, Tower 2,
World Trade Center, Kharadi,
Pune 411014.
                    </Card.Text>
                  </Card>
                </Card>
              </div>


            </div>

            <div className="locationBox mt-4 justify-content-around">


              <div>
                <Card
                  style={{ width: "21rem", marginRight: "10px" }}
                  className="box-Card1"
                >
                  <Card
                    className="p-md-3 cardHover"
                    style={{ fontSize: "14px" }}
                  >
                    <div id="future"></div>
                    <Card.Title className="fw-bold">
                    United States of America
                    </Card.Title>

                    <Card.Text className="fw-bold line-clamp">
                    1611 E 2nd St. Suite #137,
Casper, WY 82601
United States of America
+1 866 366 6368
                    </Card.Text>
                  </Card>
                </Card>
              </div>

              <div>
                <Card
                  style={{ width: "21rem", marginRight: "10px" }}
                  className="box-Card1"
                >
                  <Card
                    className="p-md-3 cardHover"
                    style={{ fontSize: "14px" }}
                  >
                    <div id="future"></div>
                    <Card.Title className="fw-bold">
                    Costa Rica
                    </Card.Title>

                    <Card.Text className="fw-bold line-clamp">
                    5th Floor, Creaciones Santos,
Sabana, San Jose,
Costa Rica
                    </Card.Text>
                  </Card>
                </Card>
              </div>


            </div>

            <div className="locationBox mt-4 justify-content-around">


              <div>
                <Card
                  style={{ width: "21rem", marginRight: "10px" }}
                  className="box-Card1"
                >
                  <Card
                    className="p-md-3 cardHover"
                    style={{ fontSize: "14px" }}
                  >
                    <div id="future"></div>
                    <Card.Title className="fw-bold">
                    Singapore
                    </Card.Title>

                    <Card.Text className="fw-bold line-clamp">
                    1 Raffles Place,
#44-01A One Raffles Place
Singapore. 048616
                    </Card.Text>
                  </Card>
                </Card>
              </div>

              <div>
                <Card
                  style={{ width: "21rem", marginRight: "10px" }}
                  className="box-Card1"
                >
                  <Card
                    className="p-md-3 cardHover"
                    style={{ fontSize: "14px" }}
                  >
                    <div id="future"></div>
                    <Card.Title className="fw-bold">
                    Philippines
                    </Card.Title>

                    <Card.Text className="fw-bold line-clamp">
                    Prestige Tower, Penthouse II,
F.Ortigas Jr. Rd., Pasig City,
Philippines
                    </Card.Text>
                  </Card>
                </Card>
              </div>


            </div>


           <div className="emailBox">


           <div className="col-md-4 ">
           <div className="borderB mt-4 mb-4">
            <h5 className="fw-bold pinkColor">Email Us</h5>
          </div>

          <div>
            <a class="text-black fw-bold" href="mailto: media@enterprisetalk.com">Media@Enterprisetalk.com</a>
          </div>
          <div className='mt-3'>
            <a class="text-black fw-bold" href="mailto: sales@enterprisetalk.com">Sales@EnterpriseTalk.com</a>
          </div>
           </div>


           <div className="col-md-4 ">
           <div className="borderB mt-4 mb-4">
            <h5 className="fw-bold pinkColor">CCPA Helpline</h5>
          </div>

          <div>
            <a class="text-black fw-bold" href="tel:+18005462816">1800-546-2816</a>
          </div>
         
           </div>

           </div>

          </div>

          <div className="col-md-4">
          <div className="borderB  mt-4 mb-4">
            <h5 className="fw-bold pinkColor">Send Us a Message</h5>
          </div>
          <Form className="border p-2">
      <Form.Group className="" controlId="First Name">
       
        <Form.Control type="name" placeholder="First Name" className="mt-3" />
      </Form.Group>
      <Form.Group className="" controlId="Last name">
      
        <Form.Control type="name" placeholder="Last Name" className="mt-3" />
      </Form.Group>
      <Form.Group className="" controlId="exampleForm.ControlInput1">
        
        <Form.Control type="email" placeholder="name@example.com" className="mt-3" />
      </Form.Group>
      <Form.Group className="" controlId="Phone Number">
        
        <Form.Control type="tel" placeholder="Phone Number" className="mt-3" />
      </Form.Group>
      <Form.Group className="" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control as="textarea" rows={5}  placeholder="Message" className="mt-3" />
      </Form.Group>

      <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3 mt-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`By checking this box, I agree that EnterpriseTalk can contact me by email or phone and provide more information about the services.`}
          />
        </div>
      ))}
    </Form>

      <Button className="SubBtn mt-2">Submit</Button>
    </Form>
          </div>
        </div>
      </div>

      
    </div>

    
  );
};

export default Connect;
