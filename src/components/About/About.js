import React from "react";
import me from "../../assets/me.png";
import Tooltip from "../Tooltip/Tooltip";
import "./About.scss";
import { useEffect } from "react";

function About() {
  var marketDesc =
    "Market POS is a Grocery Store management platform with a powerful point of sale.";
  var quiltDesc =
    "Quilt Software is a Private Equity backed specialty POS software company.";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="about-header">About Me</div>
      <div className="about-container">
        <div className="profile-container">
          <img className="profile-image" src={me} />
        </div>
        <div className="about-text-container">
          <div>
            I am a User Centered Product Manager with extensive experience in
            B2B saas companies. My career has gone from Analytics to Software
            Engineering to Product Management. I have been with companies at the
            Seed, Startup, Growth, Expansion, and Maturity stages. <br /> <br />
            I am currently executing the vision of{" "}
            <Tooltip content={marketDesc} direction="top">
              <a
                href="https://www.marktpos.com"
                className="company-link"
                target="_blank">
                Market POS
              </a>
            </Tooltip>{" "}
            for POS Nation which was acquired by{" "}
            <Tooltip content={quiltDesc} direction="top">
              <a
                href="https://quiltsoftware.com/"
                className="company-link"
                target="_blank">
                Quilt Software
              </a>
            </Tooltip>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
