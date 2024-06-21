import Projects from "./Projects";
import React, { Component } from "react";
import { Sidebar } from "react-pro-sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function SideNav() {
  return (
    // <p className="side-nav">hi</p>
    <div className="side-nav">
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
