import React from "react";
import "../styles/main.scss";
import Hero from "./Hero";
import Nav from "./Nav";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Hero />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
