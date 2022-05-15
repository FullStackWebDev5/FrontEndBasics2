import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand as={ NavLink } to='/news-list'>News App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={ NavLink } to='/news-list' href="#action1">News</Nav.Link>
        <Nav.Link as={ NavLink } to='/about' href="#action2">About Us</Nav.Link>
				<Nav.Link as={ NavLink } to='/contact' href="#action2">Contact Us</Nav.Link>
				<Nav.Link as={ NavLink } to='/count' href="#action2">Count</Nav.Link>
      </Nav>
			<Nav
				className="my-2 my-lg-0"
				style={{ maxHeight: '100px' }}
        navbarScroll
			>
				<Nav.Link as={ NavLink } to='/sign-up' href="#action1">Sign Up</Nav.Link>
        <Nav.Link as={ NavLink } to='/login' href="#action2">Login</Nav.Link>
			</Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavbarComponent