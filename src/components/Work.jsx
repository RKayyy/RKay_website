import React from "react";
import { Link } from "react-router-dom";
import line2 from "../images/line2.png";
import art from "../images/art.png";
import projects from "../images/project.png";
import design from "../images/design.png";

const Work = () => {
  return (
    <div className="bg-[#15141A] flex flex-col">
      <div className="sm:hidden bg-white h-[1px]"></div>
      <br></br>
      <br></br>
      <div
        className="lg:text-7xl text-5xl sm:text-right text-center lg:pr-30 md:pr-24 sm:pr-20"
        style={{ fontFamily: "Stardos" }}
      >
        Work & Projects
      </div>

      <div className="flex flex-col hidden sm:block ml-auto">
        <img src={line2} alt="line2" className="self-end lg:scale-[100%] md:scale-[100%]" />
      </div>

      <br></br>
      <div class="flex flex-wrap justify-center lg:p-20 p-4 ">
        <Link to="/art">
          <div
            className="relative w-48 sm:w-96 h-48 sm:h-96 p-8 bg-yellow-300 m-4 rounded-xl"
            style={{
              backgroundImage: `url(${art})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-8 sm:text-6xl text-4xl"><strong>Art</strong></div>
          </div>
        </Link>
        <Link to="/projects">
          <div
            className="relative w-48 sm:w-96 h-48 sm:h-96 p-4 bg-yellow-300 m-4 rounded-xl"
            style={{
              backgroundImage: `url(${projects})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-8 sm:text-6xl text-4xl"><strong>Projects</strong></div>
          </div>
        </Link>
        <Link to="/design">
          <div
            className="relative w-48 sm:w-96 h-48 sm:h-96 p-4 bg-yellow-300 m-4 rounded-xl"
            style={{
              backgroundImage: `url(${design})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-4 sm:text-6xl text-4xl"><strong>Design</strong></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Work;
