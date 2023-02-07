import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../assets/img/logo.png";
import Button from "antd-button-color";
import { Link } from "react-router-dom";

function OffcanvasExample() {
  return (
    <header className="bg-primary bg-opacity-10">
      <Navbar key={"sm"} bg="light" expand={"sm"} className="pb-0 ">
        <Container fluid style={{ backgroundColor: "#f1f3ff" }}>
          <Container>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"sm"}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${"sm"}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${"sm"}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"sm"}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Navbar.Brand href="/">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="d-inline-block align-text-top"
                  />
                </Navbar.Brand>
                <Nav
                  className="justify-content-end flex-grow-1 pe-3"
                  style={{ fontWeight: "600" }}
                >
                  <Nav.Link href="#ourService">Our Services</Nav.Link>
                  <Nav.Link href="#whyUs">Why Us</Nav.Link>
                  <Nav.Link href="#testimony">Testimonial</Nav.Link>
                  <Nav.Link href="#question">FAQ</Nav.Link>
                  <Button className="mx-3 btn-signin" type="" href="/sign-in">
                    <Link to="/sign-in" className="btn-register fw-bold">
                      Register
                    </Link>
                  </Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Container>
      </Navbar>
    </header>
  );
}

export default OffcanvasExample;
