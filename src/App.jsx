import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import HireMe from "./HireMe";
import Skills from "./Skills";
import Projects from "./Projects";
import AllProjects from "./AllProjects";

function App() {
  return (
    <Router basename="/velmurugan-portfolio">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HeroSection />
              <Projects />
              <Skills />
              <HireMe />
            </Layout>
          }
        />
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/all_projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
