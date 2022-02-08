import React from "react";
import { Container } from "react-bootstrap";
import SignUpForm from "../Components/SignUpForm";
import "../App.css";

function SignUp() {
  return (
    <div className="bg-container">
    <br/>
    <br/>

    <Container>
      <SignUpForm />
      </Container>
    </div>
  );
}

export default SignUp;
