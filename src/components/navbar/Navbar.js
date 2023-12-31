import "./Navbar.css";
import logo from "./logo.png";
import React, { useState } from "react";
function Navbar() {
  const [ham, setHam] = useState(0);
  function HamNav() {
    if (ham) {
      return <> &#x2716;</>;
    } else {
      return <>&#9776;</>;
    }
  }
  function MobNav() {
    document.querySelector(".nav-links").classList.toggle("show");
    setHam(!ham);
  }
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Your Logo" />
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
      </div>
      <div className="hamburger" onClick={MobNav}>
        <HamNav />
      </div>
    </nav>
  );
}
export default Navbar;
