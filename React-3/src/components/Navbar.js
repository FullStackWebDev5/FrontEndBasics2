import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export class NavbarComponent extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Pictures Gallery</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Photos</Nav.Link>
              <Nav.Link>About Us</Nav.Link>
              <Nav.Link>Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>Sign Up</Nav.Link>
              <Nav.Link>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarComponent;
