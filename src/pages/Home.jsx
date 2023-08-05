import React, {useEffect} from "react";
import Navbar from "../components/Navbar";
import gradient from "../images/gradient.png";
import name from "../images/name.png";
import "../fonts/fonts.css";
import vector from "../images/vector.png";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Work from "../components/Work";
import { useInView } from "react-intersection-observer"; 
import "../index.css"
import resume from "../assets/reitikakumar.pdf"



const Home = () => {

  useEffect(() => {
    // Function to add fade-in class when the section is in view
    const handleFadeIn = () => {
      const sections = document.querySelectorAll(".fade-in-section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (inView) {
          section.classList.add("fade-in");
        }
      });
    };

    // Event listener for scroll to trigger the fade-in effect
    window.addEventListener("scroll", handleFadeIn);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleFadeIn);
    };
  }, []);


  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
    threshold: 0.3, // Define the threshold for triggering the fade-in effect
  });
  return (
    <div
      className="bg-[#15141A] text-white"
      style={{ fontFamily: "OswaldLight" }}
    >
      <Navbar />

      {/* desktop View */}

      <div
        className="relative flex flex-col hidden sm:block "
        style={{ fontFamily: "OswaldLight" }}
      >
        <img className="w-full h-[620px]" src={gradient} alt="bg" />

        <div className="absolute top-0 left-0 flex flex-col items-start lg:pl-16 h-full">
          <div className="">
            <img
              src={name}
              alt="name"
              className="lg:scale-[120%] md:scale-[100%] sm:scale-75  lg:pl-12 lg:pt-8"
            />
          </div>
          <br></br>
          <div>
            <h1 className="text-2xl pl-16 lg:p-16 lg:w-full w-3/5">
              CSE Student at Thapar Institute of Engineering and Technology
            </h1>
          </div>
        </div>
        <div className="absolute top-0 right-0 flex flex-col items-end lg:pr-32 sm:pr-12 pt-12 w-2/5 h-full">
          <div>
            <h1 className="text-right lg:text-5xl md:text-4xl sm:text-3xl ">
              Graphic Designer | Frontend Developer | UI/UX Designer
            </h1>
          </div>
          <div className="lg:h-64 h-48"></div>
          <div className="mb-4">
          <img className="scale-[85%]" src={vector} alt="vector" />
          </div>
        </div>
      </div>
      

      {/* mobile View */}

      <div className="sm:hidden flex flex-col justify-center items-center">
        <div className="h-[1px] w-3/4 bg-white"></div>
        <div className="m-8 flex flex-col justify-center items-center">
          <img src={name} alt="name"/>
          <br></br>
          <h1
            className="text-center text-xl"
            style={{ fontFamily: "OswaldMedium" }}
          >
            Graphic Designer | frontend Developer | ui/ux designer
          </h1>
          <br></br>
          <h1
            className="text-center text-sm"
            style={{ fontFamily: "OswaldLight" }}
          >
            CSE Student at Thapar Institute of Engineering and Technology
          </h1>
          <img className="scale-[40%]" src={vector} alt="vector" />
        </div>
        
      </div>
      <div className="hidden sm:block">
      <br></br>
      <br></br>
      </div>
      
      <div  ref={aboutRef}
        id="about-section"
        className={`fade-in-section ${
          aboutInView ? "fade-in" : "opacity-0"
        } transition-opacity duration-1000`}>
      <About />
      </div>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div  ref={aboutRef}
        id="skills-section"
        className={`fade-in-section ${
          aboutInView ? "fade-in" : "opacity-0"
        } transition-opacity duration-1000`}>
      <Skills />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div  ref={aboutRef}
        id="experience-section"
        className={`fade-in-section ${
          aboutInView ? "fade-in" : "opacity-0"
        } transition-opacity duration-500`}>
      <Experience />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div  ref={aboutRef}
        id="work-section"
        className={`fade-in-section ${
          aboutInView ? "fade-in" : "opacity-0"
        } transition-opacity duration-500`}>
      <Work />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-white text-center lg:text-xl text-sm"
          style={{ fontFamily: "OswaldMedium" }}><a target="_blank" 
          rel="noopener noreferrer" href={resume} className="text-blue-300 lg:text-5xl text-3xl">View Resume</a></h1>
          <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-white text-center lg:text-xl text-sm"
          style={{ fontFamily: "OswaldMedium" }}>LinkedIn: <a target="_blank" 
          rel="noopener noreferrer" href="https://www.linkedin.com/in/reitika-kumar" className="text-blue-300">https://www.linkedin.com/in/reitika-kumar</a></h1>
          <h1 className="text-white text-center lg:text-xl text-sm"
          style={{ fontFamily: "OswaldMedium" }}>Github: <a target="_blank" 
          rel="noopener noreferrer" href="https://github.com/RKayyy" className="text-blue-300">https://github.com/RKayyy</a></h1>
          <h1 className="text-white text-center lg:text-xl text-sm"
          style={{ fontFamily: "OswaldMedium" }}>Instagram: <a target="_blank" 
          rel="noopener noreferrer" href="https://www.instagram.com/waves_of_blue___" className="text-blue-300">https://www.instagram.com/waves_of_blue___</a></h1>
          <h1 className="text-white text-center lg:text-xl text-sm"
          style={{ fontFamily: "OswaldMedium" }}>Gmail: reitika.kumar@gmail.com</h1>
          <br></br>
          


<br></br>
      <br></br>
      <br></br>
      <br></br>
      
    </div>
  );
};

export default Home;
