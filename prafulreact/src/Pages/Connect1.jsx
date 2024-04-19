import React, {useState} from "react";
import { Card, Form, Button } from "react-bootstrap";


const Connect = () => {
  const initialFormData = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
    opt_in: false,
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState();
  // const [emailError, setEmailError] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
      
    }));
    
  };


  // const isEmailValid = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  // const handleEmailChange = (e) => {
  //   const { value } = e.target;

  //   if (isEmailValid(value)) {
  //     setEmailError("");
  //   } else {
  //     setEmailError("Please provide a valid email.");
  //   }



  //   handleInputChange(e);

   

  // };

  const resetForm = () => {
    setFormData({ ...initialFormData });
    setValidated(false);
    setLoading(false);
  };

 
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      if (form.checkValidity() === false) {
        e.stopPropagation();
        setValidated(true); // Trigger custom validation UI
      } else {
        setLoading(true);

        const response = await fetch('http://192.168.17.8:3000/api/contact/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Data successfully submitted to the API.');
          setSuccessMessage('Thank you for your message. It has been sent.');
          setTimeout(() => {
            setSuccessMessage('');
          }, 2000); 
          resetForm();
        } else {
          console.error('Failed to submit data to the API.');
        }
      }
    } catch (error) {
      console.error('Error while submitting data:', error);
    } finally {
      setLoading(false);
    }
  };

  


  return (
    <div>
      <div className="container container-max mb-4">
        <div className="row">

          

          <div className="col-md-8">
          <div className="borderB mt-4 mb-4">
            {/* <h5 className="fw-bold pinkColor pd">Locations</h5> */}
            <p><span class="label1 h5 fw-bold pinkColor "></span></p>
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

            <div className="locationBox mt-2 justify-content-around">


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

            <div className="locationBox mt-2 justify-content-around">


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
            <a className="text-black fw-bold" href="mailto: media@enterprisetalk.com">Media@Enterprisetalk.com</a>
          </div>
          <div className='mt-3'>
            <a className="text-black fw-bold" href="mailto: sales@enterprisetalk.com">Sales@EnterpriseTalk.com</a>
          </div>
           </div>


           <div className="col-md-4 ">
           <div className="borderB mt-4 mb-4">
            <h5 className="fw-bold pinkColor">CCPA Helpline</h5>
          </div>

          <div>
            <a className="text-black fw-bold" href="tel:+18005462816">1800-546-2816</a>
          </div>
         
           </div>

           </div>

          </div>

          <div className="col-md-4">
          <div className=" mt-4 mb-4">
            <h5 className="fw-bold pinkColor borderB">Send Us a Message</h5>
          </div>
        

          <Form noValidate validated={validated} className="border p-2" onSubmit={handleSubmit}>
      <Form.Group controlId="first_name">
        <Form.Control
          type="text"
          placeholder="First Name"
          className="mt-3"
          name="first_name"
          value={formData.first_name}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="last_name">
        <Form.Control
          type="text"
          placeholder="Last Name"
          className="mt-3"
          name="last_name"
          value={formData.last_name}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="Email">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            className="mt-3"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            required
          />
         
        </Form.Group>

      <Form.Group controlId="phone">
        <Form.Control
          type="number"
          placeholder="Phone Number"
          className="mt-3"
          name="phone"
          value={formData.phone} 
          onChange={handleInputChange}
          required
        />
        
      </Form.Group>

      <Form.Group controlId="Message">
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Message"
          className="mt-3"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="opt_in">
        <Form.Check
        className="mt-3 mb-1"
          type="checkbox"
          id="agreementCheckbox"
          label="By checking this box, I agree that EnterpriseTalk can contact me by email or phone and provide more information about the services."
          name="opt_in"
          checked={formData.opt_in}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Button type="submit" className="SubBtn mt-2 mb-3" disabled={loading}>
  {loading ? 'Submitting...' : 'Submit'}
      </Button>
<p className="successmsg">{successMessage}</p>
    </Form>



          </div>
        </div>
      </div>

      
    </div>

    
  );
};

export default Connect;
