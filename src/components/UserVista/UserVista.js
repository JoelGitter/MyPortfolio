import React from "react";
import "./UserVista.scss";

function UserVista() {
  return (
    <div className="container">
      <div className="about-header">User Vista</div>
      <div className="text-container">
        I co-founded this company at the end of 2022 because of a hole I saw in
        the marketplace. I noticed that all in-app survey tools were going
        upstream and not servicing startups with a freemium model. I developed
        the app using Angular, C#, and MongoDB Atlas. I now keep the project
        alive for whoever wants to use it to create advanced in app surveys for
        free.
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
    </div>
  );
}

export default UserVista;
