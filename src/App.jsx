import React from "react";
import "./App.css";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useState } from "react";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

const App = () => {
  return (
    <>
      <Home />

      <Projects /> 
      <Skills/>

       <footer className="socials">
        <a href="https://www.facebook.com/patsam%20njugush" target="_blank">
          <img src="./assets/icon-facebook.svg" alt="facebookImg"  className="socialIcons"/>
        </a>

        <a href="https://twitter.com/lewmas9152" target="_blank">
          <img src="./assets/icon-twitter.svg" alt="facebookImg" className="socialIcons"/>
        </a>

        <a href="https://www.instagram.com/patsam_njugush/" target="_blank">
          <img src="./assets/icon-instagram.svg" alt="facebookImg" className="socialIcons"/>
        </a>


        <a href="https://www.instagram.com/patsam_njugush/" target="_blank">
          <img src="./assets/icon-instagram.svg" alt="facebookImg" className="socialIcons"/>
        </a>

      </footer> 
    </>
  );
};

export default App;
