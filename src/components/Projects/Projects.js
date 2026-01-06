import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Projects.scss";
import dashboard from "../../assets/dashboard.png";
import surveys from "../../assets/surveys.png";
import iphoneFlight from "../../assets/IPhoneFlight.png";
import gcImage from "../../assets/gc.webp";
import assistantHub from "../../assets/assistanthub.png";
import kd2 from "../../assets/kd2.png";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: "Markt POS",
      description:
        "A comprehensive grocery store management platform and point-of-sale system designed for small businesses, including butchers, ethnic markets, and health food stores.",
      image: dashboard,
      link: "/marktpos",
      website: "https://www.marktpos.com",
      tags: ["B2B SaaS", "POS", "Retail"],
    },
    {
      title: "GrazeCart",
      description:
        "An all-in-one point-of-sale and e-commerce platform designed for direct-to-consumer food sales. Serves farmers, butcher shops, and fresh food retailers.",
      image: gcImage,
      link: "/grazecart",
      website: "https://www.grazecart.com",
      tags: ["E-commerce", "D2C", "Food Tech"],
    },
    {
      title: "User Vista",
      description:
        "An in-app survey tool that's easily implemented with a few lines of code. Features 11 different input types, custom code, and logic flows for advanced surveys.",
      image: surveys,
      link: "/user-vista",
      website: "https://www.uservista.ai",
      tags: ["SaaS", "Analytics", "Startup"],
    },
    {
      title: "AI Assistant Hub",
      description:
        "A Chrome extension that provides quick access to multiple AI assistants from anywhere in your browser. Access your favorite AI tools with a single click.",
      image: assistantHub,
      link: "/ai-assistant-hub",
      website: "https://myassistanthub.com",
      tags: ["Chrome Extension", "AI", "Productivity"],
    },
    {
      title: "IPhone Flight Tracking",
      description:
        "A feature improvement concept for the iPhone messaging app to make tracking flights of friends and family easier. Designed using Figma.",
      image: iphoneFlight,
      link: "/iphone-flight-feature",
      website: null,
      tags: ["UX Design", "Concept", "Mobile"],
    },
    {
      title: "Kids Dictionary",
      description:
        "A mobile app that makes vocabulary learning enjoyable for children through visual learning, audio support, and age-appropriate definitions.",
      image: kd2,
      link: "/kids-dictionary",
      website: "https://kidsdictionary.app",
      tags: ["Mobile App", "Education", "Kids"],
    },
  ];

  return (
    <div className="container">
      <div className="projects-hero">
        <h1 className="projects-title">My Work</h1>
        <p className="projects-subtitle">
          Products I've built, designed, and brought to market
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Link to={project.link} className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {project.website && (
                <span className="project-link">Visit Website →</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
