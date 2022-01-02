import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navbar";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./Pages/About.js";
import MalwareLearn from "./Pages/MalwareLearn.js";
import MalwareQuiz from "./Pages/MalwareQuiz.js";
import PhishingLearn from "./Pages/PhishingLearn.js";
import PhishingQuiz from "./Pages/PhishingQuiz.js";
import SignIn from "./Pages/SignIn.js";
import SignUp from "./Pages/SignUp.js";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/malware-learn" element={<MalwareLearn />} />
          <Route path="/malware-quiz" element={<MalwareQuiz />} />
          <Route path="/phishing-learn" element={<PhishingLearn />} />
          <Route path="/phishing-quiz" element={<PhishingQuiz />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
