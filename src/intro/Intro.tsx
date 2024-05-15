import "./Intro.css";

import { motion } from "framer-motion";
import IntroLeftContainer from "./IntroLeftContainer";
import RightContainer from "./IntroRightContainer";

function Intro() {
  return (
    <motion.div className="intro-canvas">
      <IntroLeftContainer />
      <RightContainer />
    </motion.div>
  );
}

export default Intro;
