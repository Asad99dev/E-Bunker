import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";


function Navigation() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="nav-link">
          <i class="fas fa-user-shield" /> E-Bunker
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="nasic-navbar-nav">
          <Nav className="nav-link">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <NavDropdown title="Phishing" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/phishing-learn" classname="dropdown-link">
                  Learn
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/phishing-quiz" classname="dropdown-link">
                  Quiz
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Malware" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/malware-learn" classname="dropdown-link">
                  Learn
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/malware-quiz" classname="dropdown-link">
                  Quiz
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/sign-in" className="nav-link">
              Sign In
            </Link>
            <Link to="/sign-up" className="nav-link">
              Sign Up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
