import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Form, FormControl, Button} from 'react-bootstrap';

const Newsletter = () => {
  return (
    <div className='marBoth'>
        <Row >

      
        <Col md={8}>
            <img className='newsImg' src="https://enterprisetalk.com/wp-content/uploads/2022/10/newsletter.png.webp" alt="" />
        </Col>




        <Col md={3}>
            <div className='newsBox'>
            <div>
                <h3 className='fw-bold' >Subscribe To Newsletter</h3>
            </div>

            <div>
                <Form>
            <FormControl type="search" placeholder="Email Id"/>
            </Form>
            </div>

            <div>
            *By clicking on the Submit button, you are agreeing with the Privacy Policy with Enterprise Talks.*
            </div>

            <div>
                <Button className='btn-sm2'>Submit</Button>
            </div>
            </div>
        </Col>


        </Row>
    </div>
  )
}

export default Newsletter