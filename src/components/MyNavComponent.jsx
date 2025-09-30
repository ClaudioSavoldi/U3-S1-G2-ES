import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";

function MyNavComponent() {
  return (
    <Navbar expand="lg" className="bg-black fixed-top">
      <Container>
        <Navbar.Brand href="#" className="text-white">
          <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block me-2" />
          EnchantedBookShop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              About
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Browse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavComponent;
