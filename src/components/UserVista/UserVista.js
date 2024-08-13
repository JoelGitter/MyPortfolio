import React from "react";
import "./UserVista.scss";
import { Image } from "react-bootstrap";
import integrations from "../../assets/integrations.png";
import installation from "../../assets/installation-script.png";

function UserVista() {
  return (
    <div className="container">
      <div className="about-header">User Vista</div>
      <div className="sub-header">
        <em>2022 • Austin TX • Personal</em>
      </div>
      <div className="text-container">
        I co-founded this company at the end of 2022 because of a hole I saw in
        the marketplace. I noticed that all in-app survey tools were going
        upstream and not servicing startups with a freemium model.
      </div>
      <div className="youtube-container">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/4Qw1rQOPriY?si=lgZOomp5oP01i9wZ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
      <div className="text-container">
        The tool easily installs with a script tag, and has endless integrations
        through Zapier with Zaps to Gmail, ProductBoard, and Google Sheets.
        Users can also take advantage of the portal to Open AI which can
        summarize open text survey responses into whatever criteria is desired.
        <div className="image-container">
          <img src={installation} alt="insta" />{" "}
        </div>
        <div className="image-container">
          <img src={integrations} alt="integ" />
        </div>
      </div>
      <div className="text-container">
        I developed the app using <em>Angular</em>, <em>C#</em>, and{" "}
        <em>MongoDB Atlas</em>. I now keep the project alive for whoever wants
        to use it to create advanced in app surveys for free.
      </div>
    </div>
  );
}

export default UserVista;
