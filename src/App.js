import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";
import SideNav from "./components/SideNav";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <div>
        <div className="header">
          <h2>Welcome to React Browser Router Tutorial</h2>
        </div>
        <SideNav />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
