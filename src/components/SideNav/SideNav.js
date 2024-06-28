import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.scss";

function SideNav() {
  return (
    // <p className="side-nav">hi</p>
    <div className="side-nav">
      <nav className="navbar">
        <div className="logo-text">Growth</div>
        <div className="signature">
          <div className="signature-word">
            <div>with</div>
          </div>
          <div className="signature-name">
            <div>Joel Henry</div>
          </div>
        </div>
        <ul>
          <li>
            <Link to={"/about"} style={{ paddingLeft: 20 }}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/projects"} style={{ paddingLeft: 20 }}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
