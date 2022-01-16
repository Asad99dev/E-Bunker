import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button.js";

function PhishingQuiz() {
  const navigate = useNavigate();

  return (
    <div className="bg-container">
      <h1>Phishing</h1>
    </div>
  );
}

export default PhishingQuiz;
