import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutMe from "./Aboutme"; 
import HireMe from "./HireMe";

function App() {
  return (
    <Router basename="/velmurugan-portfolio/">
      {/* Navbar outside Routes so it appears on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/hire_me" element={<HireMe />} />
      </Routes>
    </Router>
  );
}

export default App;
