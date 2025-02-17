import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SeconNavbar from "./SeconNavbar"; 
import HeroSection from "./HeroSection";
import AboutMe from "./Aboutme"; 

function App() {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <Router>
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <Navbar toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar} />
              <HeroSection />
            </>
          }
        />

        <Route
          path="/about_me"
          element={
            <>
              <AboutMe />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
