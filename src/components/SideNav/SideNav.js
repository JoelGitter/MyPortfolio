import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.scss";

function SideNav() {
  return (
    // <p className="side-nav">hi</p>
    <div className="side-nav">
      <nav className="navbar">
        <a href="/about">
          <div className="logo-text">Joel Henry</div>
          <div className="signature">
            <div className="signature-word">
              <div>Growth Mindset</div>
            </div>
          </div>
        </a>
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
          <li>
            <Link
              to={"/marktpos"}
              style={{
                marginLeft: 40,
                fontSize: "14px",
              }}>
              Markt POS
            </Link>
          </li>
          <li>
            <Link
              to={"/user-vista"}
              style={{
                marginLeft: 40,
                fontSize: "14px",
              }}>
              User Vista
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
