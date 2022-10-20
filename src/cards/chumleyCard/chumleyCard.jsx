import React from "react";
import "./chumleyCard.scss";
import image from "./chumley_headshot.png";

function ChumleyCard() {
  return (
    <div className="cardContainer cardPresentation">
      <div className="cardInner">
        <div className="cardContent cardContentFront">
          <img className="imageContainer" src={image} alt="Rebecca Chumley" />

          <div>
            <h3>Rebecca Chumley</h3>
            <p>Front-End Web Developer</p>
          </div>
        </div>

        <div className="cardContent cardContentBack">
          <h3>Let's Connect</h3>
          <a
            className="email"
            href="mailto:rebecca.chumley@gmail.com?subject=Women Who Code Boulder/Denver Scrollodex Email"
            rel="noreferrer"
          >
            Email Me
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/rebecca-chumley/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default ChumleyCard;
