import Projects from "./Projects";
import React, { Component } from "react";
import { Sidebar } from "react-pro-sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function SideNav() {
  return (
    <div class="side-nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li>
            <Link to={"/"} className="nav-link">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to={"/projects"} className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
