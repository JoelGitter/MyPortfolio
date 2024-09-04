import React from "react";
import dashboard from "../../assets/dashboard.png";
import volumeTrends from "../../assets/volume-trends.png";
import "./IPhoneFlightFeature.scss";

function IPhoneFlightFeature() {
  return (
    <div className="container">
      <div className="about-header">Markt POS</div>
      <div className="sub-header">
        <em>2024 • Austin TX • Hobby</em>
      </div>
      <div className="text-container">
        This is my idea for an improvement to Apple's Flight Tracking feature in
        messages. <br />
        <br />
        This will hopefully solve the issue easily keeping track of someone
        else's flight. Most likely, someone you are going to pick up from the
        airport.
        <br />
        <br />
        <br />
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: "0",
          }}>
          {" "}
          <iframe
            src="https://www.loom.com/embed/6656f28699984b109f48fb07719aaf45?sid=fad65b81-7eac-494b-a0ae-e22990b6c553"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}></iframe>
        </div>{" "}
        <br />
        <br />
      </div>
    </div>
  );
}

export default IPhoneFlightFeature;
