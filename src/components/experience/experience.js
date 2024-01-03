import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import "./experience.css";
import companies from "./companies";
import Flow from "./flow";

function exp(item) {
  return (
    <Flow
      key={item.key}
      company={item.company}
      role={item.role}
      tenure={item.tenure}
    />
  );
}

function Experience() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["30% end", "100% end"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <div ref={ref} className="experience-whole" id="experience">
        <h1 style={{ textAlign: "Left", fontWeight: "bold" }}>
          Where have I worked?
        </h1>
        <motion.div className="progress-bar" style={{ scaleY }} />
        <div className="experience-names">{companies.map(exp)}</div>
      </div>
    </>
  );
}

export default Experience;
