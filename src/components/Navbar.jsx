import { fontWeight } from "@mui/system";
import * as React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../assets/img/logo.png";

function OffcanvasExample() {
  return (
    <>
      <Navbar key={"sm"} bg="light" expand={"sm"} className="pb-0">
        <Container fluid style={{ paddingLeft: "255px", paddingRight: "240px", backgroundColor: "#f1f3ff" }}>
          <Navbar.Brand href="/">
            <img src={Logo} alt="Logo" class="d-inline-block align-text-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"sm"}`} />
          <Navbar.Offcanvas id={`offcanvasNavbar-expand-${"sm"}`} aria-labelledby={`offcanvasNavbarLabel-expand-${"sm"}`} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"sm"}`}>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3" style={{ fontWeight: "600" }}>
                <Nav.Link href="#ourService">Our Services</Nav.Link>
                <Nav.Link href="#whyUs">Why Us</Nav.Link>
                <Nav.Link href="#testimony">Testimonial</Nav.Link>
                <Nav.Link href="#question">FAQ</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;

/*const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md">
        <div class="container-md">
          <a class="navbar-brand" href="#">
            <img src="img/logo.png" alt="Logo" class="d-inline-block align-text-top" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#ourService">
                  Our Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#whyUs">
                  Why Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#testimony">
                  Testimonial
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#question">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;*/
