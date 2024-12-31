import React from "react";
// libraries
import { Link, NavLink } from "react-router-dom";
// css
import style from "./navbar.module.css";
// bs components
import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";

export default function Navbar() {
  return (
    <BsNavbar expand="lg" className={`${style.bg} text-uppercase fw-bold py-4`}>
      <Container>
        <BsNavbar.Brand as={Link} className={`text-white  ${style.logo}`} to="">
          start framework
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              className={` px-2 mt-3 me-3 text-white rounded-3 ${style.navLink}`}
              to="about"
            >
              about
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              className={` px-2 mt-3 me-3 text-white rounded-3 ${style.navLink}`}
              to="portfolio"
            >
              portfolio
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              className={` px-2 mt-3 me-3 text-white rounded-3 ${style.navLink}`}
              to="contact"
            >
              contact
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
