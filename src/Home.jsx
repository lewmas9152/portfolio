import { useState } from "react";

const Home = () => {
  

  return (
    <main className="container" id="home">
      <picture>
        <source
          media="(min-width:650px)"
          srcSet="./assets/myImageDesk.png"
          className="myImage"
        />
        <img src="./assets/myImage.png" alt="" className="myImage" />
      </picture>

    
      <div className="card">
        <div className="intro">
          <h2>
            <span>Hi,</span> <br /> I'm Sam a software developer
          </h2>
          <quote>~Making your experience better~</quote>
          <p>
            I'm currently studying for my degree in Computer Science at Dedan Kimathi University of Technology.I have been working 
            on my programming skills for 2 years so far and i must admit i enjoy being in the field.
          </p>
        </div>
        
      </div>
    </main>
  );
};

export default Home;
