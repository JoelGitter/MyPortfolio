import React from "react";
import dashboard from "../../assets/dashboard.png";
import volumeTrends from "../../assets/volume-trends.png";
import "./IPhoneFlightFeature.scss";

function IPhoneFlightFeature() {
  return (
    <div className="container">
      <div className="about-header">IPhone Message Flight Tracking</div>
      <div className="sub-header">
        <em>2024 • Austin TX • Hobby</em>
      </div>
      <div className="text-container">
        This is my idea for an improvement to Apple's Flight Tracking feature in
        messages. <br />
        <br />
        I constantly have the problem of keeping track of flights for friends
        and family when I am going to pick them up from the airport. The preview
        flight feature is cool but it is annoying that I have to go back to that
        message constantly and click on it. I think it would be a lot easier to
        be able to attach it to your message with that person.
        <br />
        <br />
        With this feature, users will be able to track flights for different
        people in their respective threads.
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
