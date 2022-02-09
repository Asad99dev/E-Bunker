import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/*Column 1*/}
          <div className="col-md-3 col-sm-6">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>asad@ebunker.com</li>
            </ul>
          </div>
          {/*Column 2*/}
          <div className="col-md-3 col-sm-6">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <Link to="/phishing" className="nav-link">
                Phishing
              </Link>
              <Link to="/malware" className="nav-link">
                Malware
              </Link>

              <Link to="/protected" className="nav-link">
                How protected are you?
              </Link>
            </ul>
          </div>
          {/*Column 3*/}
          <div className="col-md-3 col-sm-6">
            <ul className="list-unstyled">
              <br />

              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/sign-in" className="nav-link">
                Sign In
              </Link>
              <Link to="/sign-up" className="nav-link">
                Sign Up
              </Link>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} e-bunker - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
