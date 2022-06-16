import React, { Component } from 'react'
import { Button, Navbar, Container, Nav } from 'react-bootstrap'

export class BootstrapBasics extends Component {
	render() {
		return (
			<>
				<Navbar bg="dark" variant="dark">
					<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
					</Container>
				</Navbar>
				<div>BootstrapBasics</div>
				<Button variant="primary">Primary</Button> <br/><br/>
				<Button variant="outline-dark">Dark</Button>
			</>
		)
	}
}

export default BootstrapBasics