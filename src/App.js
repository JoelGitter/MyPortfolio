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
import { useState } from "react";
import "./styles/styles.scss";

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
            <button
              className={
                isActiveA ? "header-button highlighteda" : "header-button"
              }
              onClick={() => toggleClass("a")}>
              <Link to={"/about"}>About</Link>
            </button>
            <button
              className={
                isActiveB ? "header-button highlightedb" : "header-button"
              }
              onClick={() => toggleClass("b")}>
              <Link to={"/projects"}>Projects</Link>
            </button>
          </div>
        </div>
        <SideNav />
        <Routes>
          <Route path="*" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
