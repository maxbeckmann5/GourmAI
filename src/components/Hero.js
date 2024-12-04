import React from "react";
import { FaPlay } from "react-icons/fa";
import image1 from "../images/istockphoto-1214416414-2048x2048.jpg"

function Hero({ onGetStarted }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Transform Your Ingredients into Delicious Recipes</h1>
        <p className="hero-subtitle">
          Discover the power of AI to revolutionize your cooking.
        </p>
        <button className="cta-button" onClick={onGetStarted}>
          <FaPlay style={{ marginRight: "10px" }} />
          Get Started
        </button>
      </div>
      <div className="hero-image-container">
        <img
          src={image1}
          alt="Delicious Food"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;
