import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";  // New component handling Navbar logic
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import HireMe from "./HireMe";

function App() {
  return (
    <Router basename="/velmurugan-portfolio/">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HeroSection />
              <HireMe />
            </Layout>
          }
        />
        <Route path="/about_me" element={<AboutMe />} /> {/* AboutMe has its own Navbar */}
      </Routes>
    </Router>
  );
}

export default App;
