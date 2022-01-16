import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button.js";

function Phishing() {
  const navigate = useNavigate();

  return (
    <div className="bg-container">
      <h1>Phishing</h1>
      <p>
        As technology continues to evolve, phishing shows no sign of slowing
        down.
      </p>
      <p>
        Click the link below to start learning, or if you feel up to the
        challenge, how about taking on our quiz!
      </p>
      <div className="bg-btns">
        <Button
          className="btn-bg"
          handleClick={() => {
            navigate("/phishing-learn");
          }}
          label="Learn"
        />

        <Button
          className="btn-bg"
          handleClick={() => {
            navigate("/phishing-quiz");
          }}
          label="Quiz"
        />
      </div>

      <br />

      <p>
        Click the link below to see examples of phishing and also to upload your
        own attempts.
      </p>
      <div className="bg-btns">
        <Button
          className="btn-bg"
          handleClick={() => {
            navigate("/phishing-examples");
          }}
          label="Examples"
        />
      </div>
    </div>
  );
}

export default Phishing;
