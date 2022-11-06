import React from "react";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <span>
          <strong>
            <a href="#Home">brainy-dev</a>
          </strong>
        </span>
      </div>
      <div className="header-right">
        <a href="#Home">
          <b>Home</b>
        </a>
        <a href="#AboutUs">
          <b>AboutUs</b>
        </a>
        <a href="#Skills">
          <b>Skills</b>
        </a>
        <a href="#Services">
          <b>Services</b>
        </a>
        <a href="#Porfolio">
          <b>Portfolio</b>
        </a>
        <a href="#Testimonials">
          <b>Testimonials</b>
        </a>
        <a href="#ContactUs">
          <b>Contact</b>
        </a>
      </div>
    </div>
  );
};

export default Header;
