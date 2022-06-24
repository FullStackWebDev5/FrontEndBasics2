import { Navbar, Nav, Container } from "react-bootstrap";
import photoLogo from '../assets/photos-logo.png'
import { NavLink } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
				<img
					src={photoLogo}
					width="30"
					height="30"
					className="d-inline-block align-top"
					alt="React Bootstrap logo"
				/>
					Photo App
				</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Photos</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>About Us</Nav.Link>
            <Nav.Link as={NavLink} to='/contact'>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Sign Up</Nav.Link>
            <Nav.Link>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
