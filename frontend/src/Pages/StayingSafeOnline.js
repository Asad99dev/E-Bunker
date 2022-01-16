import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button.js";

function StayingSafeOnline() {
  const navigate = useNavigate();

  return (
    <div className="bg-container">
      <h1>Staying Safe Online</h1>
      <p>
       To reduce the chances of becoming a victim of cyber crime, learn how to take the correct precautions.
      </p>
      <p>
        Click the link below to start learning, or if you feel up to the
        challenge, how about taking on our quiz!
      </p>
      <div className="bg-btns">
        <Button
          className="btn-bg"
          handleClick={() => {
            navigate("/sso-learn");
          }}
          label="Learn"
        />

        <Button
          className="btn-bg"
          handleClick={() => {
            navigate("/sso-quiz");
          }}
          label="Quiz"
        />
      </div>
    </div>
  );
}

export default StayingSafeOnline;
