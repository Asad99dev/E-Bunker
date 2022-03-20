import React, { useEffect } from "react";
import Survey from "../Components/ProtectedSurvey/Survey";
import { useNavigate } from "react-router-dom";

function HowProtected() {
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")) === null) {
      navigate("/unauthorized");
    }
  });

  return (
    <div className="pg-container">
    <h1>How protected are you?</h1>
    <p>Find out your cybersecurity score by taking this quick questionnaire</p>
      <Survey />
    </div>
  );
}

export default HowProtected;
