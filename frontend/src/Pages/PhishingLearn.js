import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button.js";

function PhishingLearn() {
  const navigate = useNavigate();

  return (
    <div className="pg-container">
      <h1>What is phishing?</h1>
      <br />
      <p>
        Phishing is described as a type of social engineering whereby a
        potential cyber criminal sends a fraudulent message to deceive them into
        revealing sensitive information or to infect their device with malware.
        Phishing is also one of the most common cybersecurity threats as they
        are easy to prepare and a large majority of the population can be
        susceptible attacks through even one moment of uncertainty.
      </p>
    </div>
  );
}

export default PhishingLearn;
