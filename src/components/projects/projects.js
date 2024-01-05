import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import "./projects.css";
import NFA from "./NFA.png";
import beachHack from "./BeachHack.png";
import hackp from "./hackp.png";

function Project() {
  const ref1 = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(ref1, { once: true });
  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };
  const transition = { duration: 0.5, delay: 0.25 };
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <motion.div
      className="projects"
      id="projects"
      ref={ref1}
      variants={variants}
      initial="hidden"
      animate={mainControls}
      transition={transition}
    >
      <div className="heading">
        <h1>My Notable Works</h1>
      </div>

      <div className="contents">
        <div className="img">
          <img src={NFA} alt="NFA" />
        </div>
        <div className="pro">
          <h3>
            Embrace the future of authentication with <span>NFA</span> - Where{" "}
            <span>Security</span> Meets <span>Simplicity!</span>
          </h3>
          <p>A NFT based authentication system</p>
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7079729406545432576/">
            See Demo
          </a>
        </div>
      </div>

      <div className="contents">
        <div className="pro">
          <h3>
            <span>South India's</span> Biggest Beach <span>Hackathon</span>{" "}
            Edition - <span>4</span>
          </h3>
          <p>Website designed using Figma and developed using Flutter</p>
          <a href="https://www.behance.net/gallery/141037247/Beach-Hack-UI">
            See Design
          </a>
        </div>
        <div className="img">
          <img src={beachHack} alt="Beach Hack" />
        </div>
      </div>

      <div className="contents">
        <div className="img">
          <img className="grapnel" src={hackp} alt="Grapnel webiste" />
        </div>
        <div className="pro">
          <h3>
            <span>Grapnel</span> - A dark web monitoring software made for{" "}
            <span>Kerala Police Cyberdome</span>
          </h3>
          <p>Made the UI/UX from scratch</p>
          <a href="https://www.figma.com/file/DmsGYXgKDwWoZTZqqrssDf/Visual-Designs?type=design&node-id=0%3A1&mode=design&t=L4AHUxJKt9EGAwwJ-1">
            See Design
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
