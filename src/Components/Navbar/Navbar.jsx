// libraries
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// css file
import style from "./navbar.module.css";
// bs components
import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  /* 
    wrap it in useeffect hook to inhance performance
    avoid multi-listener-calling at every render 
      --when update state for example
    also cleanup the listener when component unmount
  */
  useEffect(() => {
    // didMount
    const handleScroll = () => {
      window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    // didUnMount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BsNavbar
      expand="lg"
      className={`fixed-top ${style.nav} text-uppercase fw-bold ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <Container>
        <BsNavbar.Brand as={Link} className={`text-white  ${style.logo}`} to="/">
          start framework
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              className={` px-2  me-3 text-white rounded-3 ${style.navLink}`}
              to="about"
            >
              about
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              className={` px-2  me-3 text-white rounded-3 ${style.navLink}`}
              to="portfolio"
            >
              portfolio
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              className={` px-2  me-3 text-white rounded-3 ${style.navLink}`}
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
