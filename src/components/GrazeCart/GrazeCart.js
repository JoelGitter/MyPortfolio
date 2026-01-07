import React from "react";
import "./GrazeCart.scss";
import gcImage from "../../assets/gc.webp";

function GrazeCart() {
  return (
    <div className="container">
      <div className="about-header">GrazeCart</div>
      <div className="sub-header">
        <em>2025 - Current • E-commerce Platform • Work</em>
      </div>
      <div className="text-container">
        GrazeCart is a B2B2C e-commerce platform designed specifically for
        direct-to-consumer food sales. As the Senior Product Manager, I was
        tasked to manage this product alongside Markt POS.
        <br />
        <br />
        The platform serves farmers, butcher shops, and fresh food retailers who
        sell directly to consumers through multiple channels, both online and at
        physical farm stores. It combines online store capabilities with
        in-person farm store operations.
        <br />
        <br />
        I have led the development of key features including Gift Cards, Point
        of Sale improvements, and quick service restaurant modifiers that help
        our customers streamline their operations and grow their businesses.
        <br />
        <br />
        <img
          className="product-screenshot"
          src={gcImage}
          alt="GrazeCart interface"
        />
        <br />
        <strong>Key Features:</strong> Website builder for branded online
        shopping, POS system for farm store transactions, unified inventory
        management, sell-by-weight capabilities for meat and produce,
        subscription management, and delivery/pickup logistics tools.
        <br />
        <br />
        Check it out at{" "}
        <a href="https://www.grazecart.com" target="_blank" rel="noreferrer">
          grazecart.com
        </a>
      </div>
    </div>
  );
}

export default GrazeCart;
