import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home" className="fw-bold">
          Aleksandra Shreider
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation Links and Resume Button */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#about" className="px-3">About</Nav.Link>
            <Nav.Link href="#projects" className="px-3">Projects</Nav.Link>
            <Nav.Link href="#contact" className="px-3">Contact</Nav.Link>
                
            <Button
              variant="primary"
              href="/resume.pdf"
              className="px-4 ms-lg-3 mt-2 mt-lg-0"
            >
              Download Resume
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

