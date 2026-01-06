import React from "react";
import "./KidsDictionary.scss";
import kd1 from "../../assets/kd1.png";
import kd2 from "../../assets/kd2.png";
import kd3 from "../../assets/kd3.png";
import kd4 from "../../assets/kd4.png";

function KidsDictionary() {
  return (
    <div className="container">
      <div className="about-header">Kids Dictionary</div>
      <div className="sub-header">
        <em>2026 • Mobile App • Hobby</em>
      </div>
      <div className="text-container">
        Kids Dictionary is a mobile app designed to make vocabulary learning
        enjoyable for children through interactive, playful methods.
        <br />
        <br />
        The app helps children build vocabulary independently while providing
        parents confidence in a secure, educational platform. It contains
        hundreds of words across the full alphabet.
        <br />
        <br />
        <div className="app-screenshots">
          <img src={kd1} alt="Kids Dictionary screenshot 1" />
          <img src={kd2} alt="Kids Dictionary screenshot 2" />
          <img src={kd3} alt="Kids Dictionary screenshot 3" />
          <img src={kd4} alt="Kids Dictionary screenshot 4" />
        </div>
        <br />
        <strong>Key Features:</strong> Visual learning with colorful images for
        every word, audio support for proper pronunciation, accessible
        definitions suited for young learners, contextual examples with
        age-appropriate sentences, alphabetical browsing from A-Z, and a
        safety-focused design with no ads or inappropriate content.
        <br />
        <br />
        Check it out at{" "}
        <a href="https://kidsdictionary.app" target="_blank" rel="noreferrer">
          kidsdictionary.app
        </a>
      </div>
    </div>
  );
}

export default KidsDictionary;
