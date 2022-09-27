import React from "react";
import headerStyle from "../styles/css/header.module.css";

function Header() {
  return (
    <div>
      <div className={headerStyle.header}>
        <a href="#default" className="logo">
          CompanyLogo
        </a>
        <div className={headerStyle.headerRight}>
          <a className="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
