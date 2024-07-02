import React from "react";
import dashboard from "../../assets/dashboard.png";
import volumeTrends from "../../assets/volume-trends.png";
import "./MarktPOS.scss";

function MarktPOS() {
  return (
    <div className="container">
      <div className="about-header">Markt POS</div>
      <div className="text-container">
        Markt POS is a Grocey Store management platform and Point of Sale
        system. It is made for mom and pop grocers including butchers, ethnic
        markets, and health food stores. I was hired on this product at the
        startup phase as a Software Engineer. <br />
        <br />
        As the product grew I moved into the role of Product Manager. Due to the
        success of the product, we were acuired by Quilt Software in 2022. We
        have now grown to have 100s of stores all across America and millions in
        ARR.
        <img className="product-screenshot" src={dashboard} />
        <br />
        There is a highly customizable checkstand system paired with state of
        the art reporting, which gives store owners the ability to maximize
        profits and keep a close eye on things when they are away.
        <br />
        <img className="product-screenshot" src={volumeTrends} />
      </div>
    </div>
  );
}

export default MarktPOS;
