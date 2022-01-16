import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";

import About from "./Pages/About.js";
import Malware from "./Pages/Malware.js";
import MalwareLearn from "./Pages/MalwareLearn"
import MalwareQuiz from "./Pages/MalwareQuiz"
import Phishing from "./Pages/Phishing.js";
import PhishingLearn from "./Pages/PhishingLearn.js";
import PhishingQuiz from "./Pages/PhishingQuiz.js";
import PhishingExamples from "./Pages/PhishingExamples.js";
import SignIn from "./Pages/SignIn.js";
import SignUp from "./Pages/SignUp.js";
import StayingSafeOnline from "./Pages/StayingSafeOnline.js";
import SSOLearn from "./Pages/SSOLearn.js";
import SSOQuiz from "./Pages/SSOQuiz.js";
import HowProtected from "./Pages/HowProtected.js";
import Home from "./Pages/Home";
{/*import TargetedAttacks from "./Pages/TargetedAttacks.js";*/}

function App() {
  return (
    <>
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/malware" element={<Malware />} />
          <Route path="/malware-learn" element={<MalwareLearn />} />
          <Route path="/malware-quiz" element={<MalwareQuiz />} />
          <Route path="/phishing" element={<Phishing />} />
          <Route path="/phishing-learn" element={<PhishingLearn />} />
          <Route path="/phishing-quiz" element={<PhishingQuiz />} />
          <Route path="/phishing-examples" element={<PhishingExamples />} />
          {/*<Route path="/atktarget" element={<TargetedAttacks />} />*/}
          <Route path="/safe-online" element={<StayingSafeOnline />} />
          <Route path="/sso-learn" element={<SSOLearn />} />
          <Route path="/sso-quiz" element={<SSOQuiz />} />
          <Route path="/protected" element={<HowProtected />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
