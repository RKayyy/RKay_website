import React, { useState } from "react";
import { Avatar } from "@mui/material";
import Me from "../images/me.jpeg";
import MenuIcon from "@mui/icons-material/Menu"; 
import CloseIcon from "@mui/icons-material/Close"; 
import '../fonts/fonts.css'; 
import { Link } from 'react-scroll'; 
import resume from "../assets/reitikakumar.pdf"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="text-white">
      <header className="bg-[#15141A] pt-4 pb-4 w-full">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
        <a href={resume} target="_blank" rel="noreferrer" title="View Resume"><div>
            <Avatar alt="RKay" src={Me} className="border-2 border-white scale-[130%]" />
          </div></a>
          <div
            className={`nav-links duration-500 sm:static absolute  sm:min-h-fit min-h-[60vh] left-0 ${
              isMenuOpen ? "top-[12%] bg-white hover:text-gray-500 text-black" : "top-[-100%] "
            } sm:w-auto w-full flex items-center px-5`}
          >
            <ul className="flex sm:flex-row flex-col sm:items-center sm:gap-[4vw] gap-8">
              <li>
              <Link
                  activeClass="active"
                  to="about-section" // Set the ID of the "About" section
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-gray-500 text-xl cursor-pointer"
                  style={{fontFamily: 'OswaldMedium'}}
                >
                  About
                </Link>
              </li>
              <li>
              <Link
                  activeClass="active"
                  to="skills-section" // Set the ID of the "About" section
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-gray-500 text-xl cursor-pointer"
                  style={{fontFamily: 'OswaldMedium'}}
                >
                  Skills
                </Link>
              </li>
              <li>
              <Link
                  activeClass="active"
                  to="experience-section" // Set the ID of the "About" section
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-gray-500 text-xl cursor-pointer"
                  style={{fontFamily: 'OswaldMedium'}}
                >
                  Experience
                </Link>
              </li>
              <li>
              <Link
                  activeClass="active"
                  to="work-section" // Set the ID of the "About" section
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-gray-500 text-xl cursor-pointer"
                  style={{fontFamily: 'OswaldMedium'}}
                >
                  Work & Projects
                </Link>
              </li>
              
            </ul>
          </div>
          <div className="flex items-center sm:hidden">
            
            {isMenuOpen ? (
              <div className="border-2 rounded-full border-white">
                <CloseIcon
                onClick={onToggleMenu}
                className="text-3xl cursor-pointer sm:hidden scale-[150%] m-3"
                style={{ color: "white" }}
              />
              </div>
              
            ) : (
              <div className="border-2 rounded-full border-white">
              <MenuIcon
                onClick={onToggleMenu}
                className="text-3xl cursor-pointer sm:hidden scale-[150%] m-3"
                style={{ color: "white" }}
              />
              </div>
            )}

          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
