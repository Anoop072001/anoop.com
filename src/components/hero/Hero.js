import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
function Hero() {
  const words = ["Developer>>>", "Desinger>>>", "Coder>>>"];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  function type() {
    const currentWord = words[wordIndex];
    const shouldDelete = isDeleting ? 1 : -1;
    setText((current) =>
      currentWord.substring(0, current.length - shouldDelete)
    );
    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((current) => (current + 1) % words.length);
    }
  }
  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 100 : 200);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordIndex, isDeleting, text]);

  const about = useRef(null);
  return (
    <div ref={about} className="hero-all" id="hero">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Hi! I'm Anoop</h1>
          <div className="typer">
            <p>{text}</p>
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/in/anoop07122001/">
              <FaLinkedin
                color="#D6FB41"
                style={{ margin: "0 20px 0 10px", scale: "2" }}
              />
            </a>
            <a href="https://github.com/Anoop072001">
              <FaGithub
                color="#D6FB41"
                style={{ margin: "0 20px 0 10px", scale: "2" }}
              />
            </a>
            <a href="https://www.behance.net/anoopsidhan">
              <FaBehance
                color="#D6FB41"
                style={{ margin: "0 20px 0 10px", scale: "2" }}
              />
            </a>
          </div>
        </div>
        <div className="hero-image"></div>
      </div>
      <div className="quote">
        <p>
          "Elevating Code to Art, Turning Ideas into Innovation. In the realm of
          programming, possibilities are endless, and I'm here to craft the
          extraordinary.”
        </p>
      </div>
    </div>
  );
}

export default Hero;
