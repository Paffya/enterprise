import React from 'react'
import { Form, Button } from "react-bootstrap";

const DoNotSell = () => {
  return (
    <div>


        <div className='container container-max'>
            <div className="row">
                <div className="col-md-12">
                    <h5 className='fw-bold borderB'>Opt-Out Form</h5>
                    <div className='col-md-5' style={{alignItems:"center", margin:"auto"}}>
                <div className=" mt-4 mb-4">
            <h3 className="fw-bold pinkColor text-center">Do Not Sell My Information</h3>
          </div>
          <Form className="border p-2 mb-5">
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
        
        <Form.Control as="textarea" rows={10}  placeholder="Message" className="mt-3" />
      </Form.Group>

      {/* <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3 mt-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`By checking this box, I agree that EnterpriseTalk can contact me by email or phone and provide more information about the services.`}
          />
        </div>
      ))}
    </Form> */}

      <Button className="SubBtn mt-2">Submit</Button>
    </Form>
       
       
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoNotSell