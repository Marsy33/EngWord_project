import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./others.css";

class FooterEng extends React.Component {
  render() {
    const { home, game, logo } = this.props;
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#home">{home}</Nav.Link>
              <Nav.Link href="#features">{game}</Nav.Link>
              <Nav.Link href="#pricing">Log In</Nav.Link>
              <Nav.Link href="#pricing">Sign Up</Nav.Link>
            </Nav>
          </Container>
          <h1 className="footerName">{logo}</h1>
        </Navbar>
      </div>
    );
  }
}

export default FooterEng;
