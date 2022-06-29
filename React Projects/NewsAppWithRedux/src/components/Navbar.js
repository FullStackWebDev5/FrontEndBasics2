import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>News App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>News</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>About Us</Nav.Link>
						<Nav.Link as={NavLink} to='/contact'>Contact Us</Nav.Link>
						<Nav.Link as={NavLink} to='/count'>Count</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Sign Up</Nav.Link>
            <Nav.Link eventKey={2} >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
