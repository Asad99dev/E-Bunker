import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import logo from "../Images/logoHero.svg";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <img className="logo" src={logo} alt="e-bunker"/>
      <h1>Helping you browse with confidence</h1>
      <p>Get started by signing in or creating an account with us</p>
      <div className="hero-btns">
        <Button
          className="btn-hero"
          handleClick={() => {
            navigate("/sign-in");
          }}
          label="Sign In"
        />

        <Button
          className="btn-hero"
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

export default Hero;
