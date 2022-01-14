import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button.js";

function PhishingQuiz() {
  const navigate = useNavigate();

  return (
    <div className="bg-container">
      <h1>Phishing</h1>
      <p>As technology continues to evolve, phishing shows no sign of slowing down.</p>
      <p>Use our platform to help protect yourself</p>
      <div className="bg-btns">
        <Button
          className="btn-bg"
          handleClick={() => {
            navigate("/sign-in");
          }}
          label="Sign In"
        />

        <Button
          className="btn-bg"
          handleClick={() => {
            navigate("/sign-up");
          }}
          label="Sign Up"
        />
      </div>
      <p>Alternatively explore our site to see what we can do for you</p>
    </div>
  );
}

export default PhishingQuiz;
