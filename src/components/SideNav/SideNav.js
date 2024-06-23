import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.scss";

function SideNav() {
  return (
    // <p className="side-nav">hi</p>
    <div className="side-nav">
      <div class="focus">
        <div class="focus--mask">
          <div class="focus--mask-inner">Growth</div>
        </div>
      </div>
      <div className="signature">
        <div className="signature-word">
          <div>with</div>
        </div>
        <div className="signature-name">
          <div>Joel Henry</div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li>
            <Link to={"/about"} className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to={"/projects"} className="nav-link">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
