import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      sticky="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="home-link" onClick={() => setExpanded(false)}>
            <i class="fas fa-user-shield" /> E-Bunker
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Home
            </Link>
            <NavDropdown title="Phishing" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/phishing-learn" className="nav-link" onClick={() => setExpanded(false)}>
                  Learn 
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/phishing-quiz" className="nav-link" onClick={() => setExpanded(false)}>
                  Quiz
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Malware" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/malware-learn" className="nav-link" onClick={() => setExpanded(false)}>
                  Learn
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/malware-quiz" className="nav-link" onClick={() => setExpanded(false)}>
                  Quiz
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link
              to="/about"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              About
            </Link>
            <Link
              to="/sign-in"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Sign In
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
