// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Idesign from "./components/InteriorDesignService";
import Spaceplan from "./components/Spaceplan";
import Lightdesign from "./components/lightingcolor";
import Furniture from "./components/Furnitureanddecor";
import Projectexecution from "./components/ProjectExecution";
import Projectmanagement from "./components/ProjectManagement";
import Budgetdesign from "./components/Budgetdesign";



import "./styles/main.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/idesign" element={<Idesign />} />
            <Route path="/spaceplan" element={<Spaceplan />} />
            <Route path="/lightdesign" element={<Lightdesign />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/projectexecution" element={<Projectexecution />} />
            <Route path="/projectmanagement" element={<Projectmanagement />} />
            <Route path="/budgetdesign" element={<Budgetdesign />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
