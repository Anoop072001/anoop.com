import React from "react";
import "./Footer.css";
import resume from "./AnoopResume.pdf";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  const handleDownloadResume = () => {
    const resumeUrl = resume;
    window.open(resumeUrl, "_blank");
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; {getCurrentYear} Anoop</p>
        <button onClick={handleDownloadResume}>Download Resume</button>
      </div>
    </footer>
  );
};

export default Footer;
