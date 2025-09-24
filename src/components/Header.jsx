import React from "react";
import logo from "../assets/iteration-1-images/logo.svg";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="Teknolojik Yemekler" className="logo" />
      </header>
    </>
  );
}

export default Header
