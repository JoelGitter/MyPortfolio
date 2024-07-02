import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import SideNav from "./components/SideNav/SideNav";
import MarktPOS from "./components/MarktPOS/MarktPOS";
import UserVista from "./components/UserVista/UserVista";
import { useState } from "react";
import ReactGA from "react-ga4";
import "./styles/styles.scss";

ReactGA.initialize("G-T8J1NFJLVB");

function App() {
  const [isActiveA, setActiveA] = useState(false);
  const [isActiveB, setActiveB] = useState(false);

  const toggleClass = (button) => {
    if (button === "a") {
      setActiveA(true);
      setActiveB(false);
    } else {
      setActiveA(false);
      setActiveB(true);
    }
  };
  return (
    <Router>
      <div>
        <div className="header">
          <div className="button-container">
            <button className="header-button">
              <Link to={"/about"}>About</Link>
            </button>
            <button className="header-button">
              <Link to={"/projects"}>Work</Link>
            </button>
          </div>
        </div>
        <SideNav />
        <Routes>
          <Route path="*" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/marktpos" element={<MarktPOS />} />
          <Route exact path="/user-vista" element={<UserVista />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
