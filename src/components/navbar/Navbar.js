import "./Navbar.css";
import logo from "./logo.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
function Navbar() {
  //hiding nav when scrolling down/up
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setVisible(currentScrollPos < 10 || isScrollingUp);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  //hamburger for mob-nav
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
    <nav
      className="navbar"
      style={{
        transform: `translateY(${visible ? "0" : "-100%"})`,
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <div className="logo">
        <img src={logo} alt="Your Logo" />
      </div>
      <div className="nav-links">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={MobNav}
        >
          About
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={MobNav}
        >
          Experience
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={MobNav}
        >
          Projects
        </Link>
        <Link
          to="testimonials"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={MobNav}
        >
          Testimonials
        </Link>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={MobNav}
        >
          Contact Me
        </Link>
      </div>
      <div className="hamburger" onClick={MobNav}>
        <HamNav />
      </div>
    </nav>
  );
}
export default Navbar;
