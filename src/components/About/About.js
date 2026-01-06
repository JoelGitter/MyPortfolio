import React from "react";
import me from "../../assets/me.png";
import dashboard from "../../assets/dashboard.png";
import surveys from "../../assets/surveys.png";
import gcImage from "../../assets/gc.webp";
import "./About.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="profile-container">
            <img className="profile-image" src={me} alt="Joel Henry" />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">Joel Henry</h1>
            <h2 className="hero-subtitle">Product Manager</h2>
            <p className="hero-tagline">
              Over 9 years building products that users love and businesses need.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">About Me</h2>
        <p className="section-text">
          I am a user-centered Product Manager with deep experience building B2B
          SaaS products. My background spans Analytics, Software Engineering, and
          Product Management. This gives me the ability to understand data, speak
          the language of engineers, and keep users at the center of every decision.
        </p>
        <p className="section-text">
          I've worked with companies at every stage, from Seed to Maturity. This
          experience taught me how to adapt my approach based on what the business
          needs, whether that means moving fast with limited resources or building
          scalable processes for growth.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Why I'm a Great Product Manager</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>User Obsessed</h3>
            <p>
              Every product decision starts with the user. I conduct research,
              analyze feedback, and build solutions that solve real problems.
            </p>
          </div>
          <div className="skill-card">
            <h3>Technical Background</h3>
            <p>
              My engineering experience means I can dive deep with developers,
              understand technical constraints, and make informed trade-offs.
            </p>
          </div>
          <div className="skill-card">
            <h3>Data Driven</h3>
            <p>
              From my analytics roots, I bring a rigorous approach to measuring
              success and making decisions backed by evidence.
            </p>
          </div>
          <div className="skill-card">
            <h3>Growth Mindset</h3>
            <p>
              I'm constantly learning, iterating, and improving. Both the
              products I work on and myself as a product leader.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Products I've Built</h2>
        <div className="product-showcase">
          <Link to="/marktpos" className="product-item">
            <img src={dashboard} alt="Markt POS" />
            <div className="product-overlay">
              <h3>Markt POS</h3>
              <p>Grocery store management & point of sale</p>
            </div>
          </Link>
          <Link to="/grazecart" className="product-item">
            <img src={gcImage} alt="GrazeCart" />
            <div className="product-overlay">
              <h3>GrazeCart</h3>
              <p>E-commerce for direct-to-consumer food sales</p>
            </div>
          </Link>
          <Link to="/user-vista" className="product-item">
            <img src={surveys} alt="User Vista" />
            <div className="product-overlay">
              <h3>User Vista</h3>
              <p>In-app survey tool for startups</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-text center-text">
          I'm always interested in discussing product strategy, new
          opportunities, or just chatting about what makes great products.
        </p>
        <p className="section-text center-text">
          <a
            href="https://www.linkedin.com/in/joel-henry-79b155162/"
            target="_blank"
            rel="noreferrer">
            Connect with me on LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
