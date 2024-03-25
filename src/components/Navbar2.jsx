import React from "react";
import { Avatar } from "@mui/material";
import Me from "../images/me.jpeg";
import '../fonts/fonts.css'; 
import { Link } from 'react-router-dom'; 
import resume from "../assets/REITIKA_KUMAR_resume.pdf"


const Navbar2 = () => {
  

  return (
    <div className="text-white">
      <header className="bg-[#15141A] pt-4 pb-4 w-full">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
        <a href={resume} target="_blank" rel="noreferrer" title="View Resume"><div>
            <Avatar alt="RKay" src={Me} className="border-2 border-white scale-[130%]" />
          </div></a>
          <div
            className='sm:w-auto w-full flex items-center px-5'
          >
            <ul className="flex sm:flex-row flex-col sm:items-center sm:gap-[4vw] gap-8">
              <li>
              <Link
                  activeClass="active"
                  to="/" // Set the ID of the "About" section
                  className="hover:text-gray-500 text-xl cursor-pointer"
                  style={{fontFamily: 'OswaldMedium'}}
                >
                  Go To Home
                </Link>
              </li>
              
              
              
              
            </ul>
          </div>
          
        
        </nav>
      </header>
    </div>
  );
};

export default Navbar2;
