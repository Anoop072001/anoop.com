import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

function Flow(props) {
  const ref1 = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(ref1, { once: true });
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <motion.div
      ref={ref1}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <h1>{props.company}</h1>
      <h3>{props.role}</h3>
      <p>{props.tenure}</p>
    </motion.div>
  );
}

export default Flow;
