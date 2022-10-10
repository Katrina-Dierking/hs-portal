
import React from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TitleBlock from '../../components/titleBlock/TitleBlock'
import "../login/Login";

const Register = () => {
  return (
    <TitleBlock title="REGISTER">
      <div className="loginContainer">
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              // value={name}
              placeholder="Enter name"
              // onChange = {(e) => stripBasename(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              // value={email}
              placeholder="Enter email"
              //onChange = {(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              // value={password}
              placeholder="Create a password"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              // value={confirmPassword}
              placeholder="Confirm Password"
              // onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              //onChange={(e) => postDetails(e.target.file[0])}
              id="custom-file"
              type="file"
              label="Upload Profile Picture"
              accept="image/*"
            />
          </Form.Group>
          <br></br>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            Already registered? <Link to="/login">Login</Link>{" "}
          </Col>
        </Row>
      </div>
    </TitleBlock>
  );
}

export default Register