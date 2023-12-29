import "./Navbar.css";
import logo from "./logo.png";
import React from "react";
function Navbar() {
  function MobNav() {
    document.querySelector(".nav-links").classList.toggle("show");
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
      <div class="hamburger" onClick={MobNav}>
        &#9776;
      </div>
    </nav>
  );
}
export default Navbar;
