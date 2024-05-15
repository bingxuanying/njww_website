import "./IntroRightContainer.css";
import TiltResumeCard from "./TiltResumeCard";
import { useState } from "react";

function RightContainer() {
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="right-container-canvas">
      <div className="resume-container">
        <div className="resume-top">
          <TiltResumeCard
            isResumeOpen={false}
            setParentIsHover={setIsHover}
            setParentIsClicked={setIsClicked}
          />
        </div>
        <div
          className={
            isHover
              ? isClicked
                ? "resume-1 resume-rotate-reset"
                : "resume-1 resume-1-onhover-reset"
              : "resume-1"
          }
        ></div>
        <div
          className={
            isHover
              ? isClicked
                ? "resume-2 resume-rotate-reset"
                : "resume-2 resume-2-onhover-reset"
              : "resume-2"
          }
        ></div>
        <div
          className={
            isHover
              ? isClicked
                ? "resume-3 resume-rotate-reset"
                : "resume-3 resume-3-onhover-reset"
              : "resume-3"
          }
        ></div>
      </div>
    </div>
  );
}

export default RightContainer;
