import React from "react";
import line from '../images/line.png'

const About = () => {
  return (
    <div className="bg-[#15141A] flex flex-col">
      <div className="sm:hidden bg-white h-[1px] ml-8 mr-8 "></div>
      <br></br>
      <br></br>
      <div
        className="lg:text-7xl text-5xl sm:text-left text-center lg:pl-36 md:pl-24 sm:pl-20"
        style={{ fontFamily: "Stardos" }}
      >
        About Me
      </div>

      <div className="flex flex-row hidden sm:block">
        <img src={line} alt="line" className="pl-20 lg:scale-[150%] md:scale-[120%]" />
        
      </div>
      <br></br>
      <div className="text-l sm:text-left text-center lg:pl-20  sm:pl-16 p-4 lg:pr-20  sm:pr-16 lg:text-xl">
      With a strong background in frontend web development and proficiency in professional design software, I excel at creating visually appealing and user-friendly interfaces. I'm passionate about crafting seamless digital experiences that engage and captivate users.
<br></br>
Collaborative by nature, I effectively communicate and collaborate with cross-functional teams to bring ideas to life.
<br></br>
I also have some experience working with decentralised apps and the Ethereum Blockchain. Currently, am looking forward to learning and exploring the vast and versatile field of AI and Machine Learning.
<br></br>
If you're seeking a dedicated and versatile professional who can contribute expertise in React.js, UI/UX design or an avid learner for Artificial Intelligence, let's connect!
<br></br>
      </div>
    </div>
  );
};

export default About;
