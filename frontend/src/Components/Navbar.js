import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../Images/logo.svg";
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
          <Link to="/" onClick={() => setExpanded(false)}>
            <img src={logo} alt="logo" width="150px" height="50px" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/phishing"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Phishing
            </Link>

            <Link
              to="/malware"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Malware
            </Link>

            <Link
              to="/atktarget"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Targeted Attacks
            </Link>

            <Link
              to="/safe-online"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Staying safe online
            </Link>

            <Link
              to="/protected"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              How protected are you?
            </Link>

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
