import React from "react";
import Hero from "./sub-components/Hero";
import Timeline from "./sub-components/Timeline";
import About from "./sub-components/About";
import Skills from "./sub-components/Skills";
import Portfolio from "./sub-components/Portfolio";
import MyApps from "./sub-components/MyApps";
import Contact from "./sub-components/Contact";

const Home = () => {
  return (
    <div className="container ">
      <Hero />
      <Timeline />
      <About />
      <Skills />
      <Portfolio />
      <MyApps />
      <Contact />
    </div>
  );
};

export default Home;
