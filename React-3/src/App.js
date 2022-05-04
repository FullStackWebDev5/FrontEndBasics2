import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, Card, Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
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
      <Container style={{marginTop: '20px'}} >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://via.placeholder.com/600/92c952" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
