import React from "react";
import { Container } from "react-bootstrap";
import SignInForm from "../Components/SignInForm";
import "../App.css";

function SignIn() {
  return (
    <div className="bg-container">
    <br/>
    <br/>

    <Container>
      <SignInForm />
      </Container>
    </div>
  );
}

export default SignIn;
