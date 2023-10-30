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
            <span>Hi,</span> <br /> I'm Sam a Frontend web developer
          </h2>
          <quote>~Making your experience better~</quote>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            eaque ducimus voluptates esse totam odio culpa mollitia dolorem
            officia repellendus, adipisci facere dolores recusandae architecto,
            fuga doloribus. Ea, expedita esse!
          </p>
        </div>
        
      </div>
    </main>
  );
};

export default Home;
