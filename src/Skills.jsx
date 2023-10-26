import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <main className="skillsContainer">
      <h1>Skills</h1>
      <blockquote>~Learning is a life time experience~</blockquote>

      <h3 align="left">Languages and Tools:</h3>
      <div className="langIcons">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
          alt="c"
          className="icons"/>

        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
          alt="css3"
          className="icons"/>

        <img
          src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
          alt="git"
          className="icons"/>

        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          alt="html5"
          className="icons" />

        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
          alt="java"
          className="icons"/>

        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
         className="icons"/>

        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
          alt="python"
          className="icons"/>

        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
          alt="react"
          className="icons"/>
      </div>

      <div className="mostLangs">
      <img  src="https://github-readme-stats.vercel.app/api/top-langs?username=lewmas9152&show_icons=true&locale=en&layout=compact" alt="lewmas9152" />
      </div>
    </main>
  );
};

export default Skills;
