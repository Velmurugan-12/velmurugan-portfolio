import React, { useState, useEffect, useRef } from "react";
import { SiHtml5, SiInstagram, SiLinkedin, SiTailwindcss } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { MdDownload } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Resume from "./assets/Resume.pdf";
import profile from "./assets/profile.png";
import { FaJava, FaReact } from "react-icons/fa6";
import { TfiCss3 } from "react-icons/tfi";
import { IoLogoJavascript } from "react-icons/io";


const HeroSection = () => {
  const [currentPara, setCurrentPara] = useState(1);
  const [isDownloading, setIsDownloading] = useState(false);
  const navigateTo = useNavigate();
  const hireMeRef = useRef(null);

  const scrollToHireMe = () => {
    if (hireMeRef.current) {
      hireMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    
    window.scrollTo({ top: 0, behavior: "smooth" });

    const interval = setInterval(() => {
      setCurrentPara((prev) => (prev % 2) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadAnimation = () => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 2500);
  };

  return (
    <section className="container mx-auto sm:px-8 md:px-8 lg:px-12 mt-10 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        {/* Left Side */}
        <div className="order-2 md:order-1 flex flex-col text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold p-3 sm:p-4 mt-2">
            Hi, I'm Velmurugan
          </h1>

          <div className="text-2xl sm:text-3xl mt-2 p-1 sm:p-4 text-gray-400">
            {currentPara === 1 ? (
              <p className="custom animate-fade">I love coding &lt;/&gt;</p>
            ) : (
              <p className="custom animate-fade">I build amazing web apps!</p>
            )}
          </div>

          <p className="text-gray-300 leading-7 p-2 sm:p-4 mt-2">
            "Passionate Java Full-Stack Developer. Expertise in HTML, CSS, JavaScript. Transforming ideas into seamless, user-friendly experiences. Let's build something extraordinary together."
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 p-1 sm:p-4 mb-4">
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
              <ImGithub className="w-7 h-7 text-gray-400 hover:text-white transition transform hover:scale-125" />
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
              <SiLinkedin className="w-7 h-7 text-gray-400 hover:text-[#0B63BD] transition transform hover:scale-125" />
            </a>
            <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
              <SiInstagram className="w-7 h-7 text-gray-400 hover:text-[#F72F7E] transition transform hover:scale-125" />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between md:justify-start gap-5 p-2 sm:p-4">
            <a
              href={Resume}
              download="Velmurugan_Resume.pdf"
              className="bg-[#F6CD0A] hover:bg-yellow-300 px-5 py-2 ml-3 rounded flex items-center text-center transition whitespace-nowrap w-[50%] md:w-auto gap-3 font-semibold text-gray-800"
              onClick={handleDownloadAnimation}
            >
              Resume
              <MdDownload className={`text-xl ${isDownloading ? "animate-bounce" : ""}`} />
            </a>

            <Link
              to="/about_me"
              className="border border-gray-500 px-5 py-2 mr-3 rounded hover:border-[#F6CD0A] whitespace-nowrap w-[50%] md:w-auto"
            >
              About me
            </Link>
          </div>
        </div>

        {/* Right Side - Profile Image & Tech Icons */}
        <div className="order-1 md:order-2 flex flex-col md:flex-row items-center md:items-start justify-center gap-16 md:gap-24">
          <div className="relative">
            <img
              src={profile}
              alt="Velmurugan"
              className="w-40 md:w-80 rounded-full object-cover cursor-pointer"
              onClick={() => navigateTo("/about_me")}
              title="Tap to know about me!"
            />
          </div>

          {/* Tech Stack Icons */}
          <div className="flex md:flex-col gap-6 justify-center mt-6 text-3xl">
            <SiHtml5 className="text-orange-400 opacity-60 hover:opacity-100 cursor-pointer" />
            <TfiCss3 className="text-blue-400 opacity-60 hover:opacity-100 cursor-pointer" />
            <IoLogoJavascript className="text-yellow-400 opacity-60 hover:opacity-100 cursor-pointer" />
            <FaReact className="text-blue-400 opacity-60 hover:opacity-100 cursor-pointer" />
            <SiTailwindcss className="text-green-400 opacity-60 hover:opacity-100 cursor-pointer" />
            <FaJava className="text-blue-400 opacity-60 hover:opacity-100 cursor-pointer" />
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default HeroSection;
