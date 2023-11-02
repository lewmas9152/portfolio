import React from "react";
import "./App.css";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useState } from "react";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Contacts from "./Contacts";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const App = () => {
  const [hide, setHide] = useState(true);

  const displayMenu = () => {
    setHide((prevHide) => !prevHide);
  };

  const menu = () => {
    if (!hide) {
      return (
        <nav className="navBar">
          <a href="#home">
            {" "}
            <button className="navBtn">Home</button>
          </a>
          <a href="#projects">
            <button className="navBtn">Projects</button>
          </a>
          <a href="#skills">
            {" "}
            <button className="navBtn">Skills</button>
          </a>
          <a href="#contacts">
            {" "}
            <button className="navBtn">Contacts</button>
          </a>
        </nav>
      );
    }
  };

  return (
    <>
      <MdOutlineMenuOpen
        size="3rem"
        className="menuIcon"
        onClick={displayMenu}
      />

      <Home />

      <Projects />
      <Skills />
      <Contacts />

      {menu()}

      <footer className="socials">
        <a href="https://www.facebook.com/patsam%20njugush" target="_blank">
          <img
            src="./assets/icon-facebook.svg"
            alt="facebookImg"
            className="socialIcons"
          />
        </a>

        <a href="https://twitter.com/lewmas9152" target="_blank">
          <img
            src="./assets/icon-twitter.svg"
            alt="facebookImg"
            className="socialIcons"
          />
        </a>

        <a href="https://www.instagram.com/patsam_njugush/" target="_blank">
          <img
            src="./assets/icon-instagram.svg"
            alt="facebookImg"
            className="socialIcons"
          />
        </a>

        <a href="https://www.instagram.com/patsam_njugush/" target="_blank">
          <LinkedInIcon className="socialIcons" />
        </a>
      </footer>
    </>
  );
};

export default App;
