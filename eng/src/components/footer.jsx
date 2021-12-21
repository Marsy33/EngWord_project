import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./others.css";

class FooterEng extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Languages Flashcards</Nav.Link>
              <Nav.Link href="#pricing">Log In</Nav.Link>
              <Nav.Link href="#pricing">Sign Up</Nav.Link>
            </Nav>
          </Container>
          <h1 className="footerName">EngWord</h1>
        </Navbar>
      </div>
    );
  }
}

export default FooterEng;
