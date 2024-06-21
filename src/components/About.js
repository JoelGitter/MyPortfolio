import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import me from "../assets/me.png";

function About() {
  return (
    <div className="container">
      <h2>About Me</h2>
      <div>
        <img className="profileImage" src={me} />
      </div>
    </div>
  );
}

export default About;
