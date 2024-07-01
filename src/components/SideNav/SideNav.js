import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.scss";

function SideNav() {
  return (
    // <p className="side-nav">hi</p>
    <div className="side-nav">
      <nav className="navbar">
        <div className="logo-text">Joel Henry</div>
        <div className="signature">
          <div className="signature-word">
            <div>Growth Mindset</div>
          </div>
        </div>
        <ul>
          {/* <li>
            <Link to={"/about"} style={{ paddingLeft: 20 }}>
              About
            </Link>
          </li> */}
          <li>
            <Link
              to={"/projects"}
              style={{ paddingLeft: 20, fontWeight: "bold", fontSize: "17px" }}>
              Projects
            </Link>
          </li>
          <div className="about-list-item"></div>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
