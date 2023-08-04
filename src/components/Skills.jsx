import React from "react";
import line2 from "../images/line2.png";

const Skills = () => {
  return (
    <div className="bg-[#15141A] flex flex-col">
      <div className="sm:hidden bg-white h-[1px]"></div>
      <br></br>
      <br></br>
      <div
        className="lg:text-7xl text-5xl sm:text-right text-center lg:pr-36 md:pr-24 sm:pr-20"
        style={{ fontFamily: "Stardos" }}
      >
        Skills
      </div>

      <div className="flex flex-col hidden sm:block ml-auto">
        <img alt="line2"
          src={line2}
          className="self-end lg:scale-[100%] md:scale-[100%]"
        />
      </div>

      <br></br>
      <div className="text-2xl sm:text-right text-center lg:pr-20  sm:pr-16 p-4 lg:pl-20  sm:pl-16">
       <h1>React, C, C++, Javascript, Figma, Adobe Illustrator, Adobe Photoshop
       </h1>
        
        
      </div>
    </div>
  );
};

export default Skills;
