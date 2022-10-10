import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        padding: "1%", 
        backgroundColor:"lightgrey"
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-2">
            Copyright &copy; Katrina Dierking | Her Time to Code 2022
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer