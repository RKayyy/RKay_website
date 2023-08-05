import React from "react";
import line from "../images/line.png";
import certificate_ltn from "../images/certificate_ltn.png"

const Experience = () => {
  const openImageInNewTab = () => {
    window.open(certificate_ltn, "_blank");
  };
  return (
    <div className="bg-[#15141A] flex flex-col text-white">
      <div
        className="sm:hidden bg-white h-[1px] ml-8 mr-8"
        style={{ fontFamily: "OswaldLight" }}
      ></div>
      <br></br>
      <br></br>
      <div
        className="lg:text-7xl text-5xl sm:text-left text-center lg:pl-36 md:pl-24 sm:pl-20"
        style={{ fontFamily: "Stardos" }}
      >
        Experience
      </div>

      <div className="flex flex-row hidden sm:block">
        <img src={line} alt="line" className="pl-20 lg:scale-[150%] md:scale-[120%]" />
      </div>
      <br></br>
      <div className="lg:text-xl sm:text-left text-center lg:pl-20  sm:pl-16 p-4 lg:pr-20  sm:pr-16">
        <h1 className="lg:text-3xl text-xl">
          Intern at Legal Trust Network (May-2023-July-2023)
        </h1>
        <h1>https://legaltrustnetwork.com/</h1>
        <h1>Worked as a front-end developer, and with the help of an incredibly supportive team, built a legal service platform</h1>
        <p className="text-left p-4">
          <br></br>
          My responsibilities were: <br></br><br></br>
          <ul>
            <li>
              <p>-Designing the website using modern
          UI/UX principles and best practices.</p>
          <h1 className="text-s"> (Figma link: <a target="_blank" 
    rel="noopener noreferrer" className="text-blue-300 text-[10px] lg:text-xl" href="https://www.figma.com/file/b1grHQTq5OrFeQUGJk7Bcr/LTN?type=design&node-id=0%3A1&mode=design&t=y5hzmucHsnzc93E6-1">https://www.figma.com/file/b1grHQTq5OrFeQUGJk7Bcr/LTN?type=design&node-id=0%3A1&mode=design&t=y5hzmucHsnzc93E6-1)</a></h1>
            </li>
            <li>
              <p>-Implemented the website design
          using Flutter, a cross-platform development framework.</p>
            </li>
            <li>
              <p>-Coordinated
          effectively with all teams involved in the project to ensure smooth
          communication and collaboration.</p>
            </li>
            <li>
              <p>-Conducted debugging of the code to
          identify and resolve issues, ensuring the website's functionality and
          performance.</p>
            </li>
            <li>
              <p>-Understanding of Postman to implement APIs on frontend.</p>
            </li>
          </ul>
          
              
        </p>
        <button onClick={openImageInNewTab}><h1 className="text-blue-300 text-center lg:text-xl text-sm" style={{fontFamily: 'OswaldMedium'}}>View Certificate</h1></button>
      </div>
    </div>
  );
};

export default Experience;
