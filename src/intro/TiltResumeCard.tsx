import React, { useState } from "react";
import "./TiltResumeCard.css";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltResumeCard: React.FC<{
  isResumeOpen: boolean;
  setParentIsHover: Function;
  setParentIsClicked: Function;
}> = ({ isResumeOpen, setParentIsHover, setParentIsClicked }) => {
  const [hover, setHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["7.5deg", "-7.5deg"]
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-7.5deg", "7.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    let target = e.target as HTMLInputElement;
    const rect = target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.height;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      {isResumeOpen ? (
        <div className="resume-pdf-opened-frame">
          <img
            className="resume-pdf-opened"
            src="resume/resume.png"
            alt="resume"
          />
        </div>
      ) : (
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
          className="tilt-resume-card-outer"
        >
          <div className="tilt-resume-card-inner">
            <img
              className={hover ? "resume-pdf resume-pdf-hover" : "resume-pdf"}
              onMouseEnter={() => {
                setHover(true);
                setParentIsHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
                setParentIsHover(false);
              }}
              onMouseDown={() => setParentIsClicked(true)}
              onMouseUp={() => setParentIsClicked(false)}
              src="resume/resume.png"
              alt="resume"
            />
            {hover ? (
              <div
                className="text-resume-hover"
                onMouseEnter={() => {
                  setHover(true);
                  setParentIsHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                  setParentIsHover(false);
                }}
              >
                RESUME
              </div>
            ) : (
              <div
                className="text-resume"
                onMouseEnter={() => {
                  setHover(true);
                  setParentIsHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                  setParentIsHover(false);
                }}
              >
                RESUME
              </div>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default TiltResumeCard;
