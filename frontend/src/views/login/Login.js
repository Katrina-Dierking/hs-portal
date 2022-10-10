import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import TitleBlock from '../../components/titleBlock/TitleBlock'
import './Login.css'


const Login = () => {


  return (
    
    <TitleBlock  title="LOGIN">
        <div className='loginContainer'>
            <Form>
                <Form.Group controlId="fromBasicEmail">
                    <Form.Control 
                        type="email"
                        // value={email}
                        placeholder="Enter email"
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="fromBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password"
                        // value={password}
                        placeholder="Password"
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <br></br>
                <Button variant="primary">Submit</Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    No account? <Link to="/register">Register here</Link>
                </Col>
            </Row>
        </div>
    </TitleBlock>
    
  )
}

export default Login