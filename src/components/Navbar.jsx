import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../assets/img/logo.png";

function OffcanvasExample() {
  return (
    <div className="container-fluid p-0">
      <header class="bg-primary bg-opacity-10">
        <Navbar key={"sm"} bg="light" expand={"sm"} className="pb-0 ">
          <Container fluid style={{ paddingLeft: "255px", paddingRight: "255px", backgroundColor: "#f1f3ff" }}>
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
      </header>
    </div>
  );
}

export default OffcanvasExample;
