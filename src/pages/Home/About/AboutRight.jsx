import { useState } from "react";
import Aspiration from "./Aspiration";
import Qualification from "./Qualification";
import PersonalInfo from "./PersonalInfo";

const AboutRight = () => {
  const [selectedContent, setSelectedContent] = useState("aspiration");

  const handleButtonClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <>
      <div>
        <div className="join">
          <button
            className={`btn rounded-none rounded-s-lg w-44 join-itemm hover:skeleton bg-[#b7d6f7] ${
              selectedContent === "aspiration" ? "skeleton" : ""
            }`}
            onClick={() => handleButtonClick("aspiration")}
          >
            Aspiration
          </button>
          <button
            className={`btn w-44 join-item hover:skeleton bg-[#ffc8b0] ${
              selectedContent === "qualification" ? "skeleton" : ""
            }`}
            onClick={() => handleButtonClick("qualification")}
          >
            Qualification
          </button>
          <button
            className={`btn w-44 join-item hover:skeleton bg-[#d189d1] ${
              selectedContent === "personalInfo" ? "skeleton" : ""
            }`}
            onClick={() => handleButtonClick("personalInfo")}
          >
            Personal Info
          </button>
        </div>
      </div>
      <div className="py-10 w-[525px] text-[#0c2123] ">
        {selectedContent === "aspiration" && <Aspiration />}
        {selectedContent === "qualification" && <Qualification />}
        {selectedContent === "personalInfo" && <PersonalInfo />}
      </div>
    </>
  );
};

export default AboutRight;
