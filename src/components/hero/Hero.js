import React, { useState, useEffect } from "react";
import "./Hero.css";
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
  return (
    <div className="hero-all">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Hi! I'm Anoop</h1>
          <p>{text}</p>
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
