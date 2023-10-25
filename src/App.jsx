import React from "react";
import "./App.css";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useState } from "react";
import Home from "./Home";
import Projects from "./Projects";


const App = () => {
  

  return (
  <>
  <Home/>

  <Projects/>

  <footer>
    <a href="https://www.facebook.com/patsam%20njugush">
      <img src="./src/assets/icon-facebook.svg" alt="facebookImg" />
    </a>


    <a href="https://www.facebook.com/patsam%20njugush">
      <img src="./src/assets/icon-twitter.svg" alt="facebookImg" />
    </a>

    <a href="https://www.facebook.com/patsam%20njugush">
      <img src="./src/assets/icon-instagram.svg" alt="facebookImg" />
    </a>
  </footer>
  </>
  );
};

export default App;
