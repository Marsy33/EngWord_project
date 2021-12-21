import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  Offcanvas,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class HeaderEng extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">EngWord</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                EngWord
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Languages Flashcards</Nav.Link>
                <NavDropdown title="Log In " id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Log In</NavDropdown.Item>
                  <Dropdown.Divider />
                  <NavDropdown.Item href="#action4">Sign Up</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
  }
}

export default HeaderEng;
