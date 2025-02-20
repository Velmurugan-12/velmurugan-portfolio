import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const hireMeRef = useRef(null);
  const location = useLocation();

  const scrollToHireMe = () => {
    if (hireMeRef.current) {
      const topOffset = hireMeRef.current.offsetTop - 80; // Offset to prevent cutting off the section
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {location.pathname !== "/about_me" && <Navbar onHireMeClick={scrollToHireMe} />}
      <div>{children}</div>
      {/* Make sure HireMe is wrapped with this ref */}
      <div ref={hireMeRef} id="hireMeSection"></div>
    </>
  );
};

export default Layout;
