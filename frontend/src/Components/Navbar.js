import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/auth.service";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../Images/logo.svg";
import "./Navbar.css";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);
  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
    setShowAdminBoard(undefined);
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark" expanded={expanded}>
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
          <Nav className="me-auto">
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
              to="/protected"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              How protected are you?
            </Link>

            {showAdminBoard && (
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            )}

            <Link
              to="/about"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              About
            </Link>
          </Nav>
          {currentUser ? (
            <Nav>
              <Link
                to="/profile"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                {currentUser.username}
              </Link>
              <Link to="/" className="nav-link" onClick={logOut}>
                Sign Out
              </Link>
            </Nav>
          ) : (
            <Nav>
              <Link
                to="/sign-in"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Sign In
              </Link>

              <Link
                to="/sign-up"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Sign Up
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
