import { MdOutlineMenuOpen } from "react-icons/md";
import { useState } from "react";

const Home = () => {
  const [hide, setHide] = useState(true);

  const displayMenu = () => {
    setHide((prevHide) => !prevHide);
  };

  const menu = () => {
    if (!hide) {
      return (
        <nav className="navBar">
          <button className="navBtn">Home</button>
          <button className="navBtn">Projects</button>
          <button className="navBtn">Skills</button>
          <button className="navBtn">Contacts</button>
        </nav>
      );
    }
  };

  return (
    <main className="container">
      <picture>
        <source
          media="(min-width:650px)"
          srcSet="./src/assets/myImageDesk.png"
          className="myImage"
        />
        <img src="./src/assets/myImage.png" alt="" className="myImage" />
      </picture>

      <MdOutlineMenuOpen
        size="3rem"
        className="menuIcon"
        onClick={displayMenu}
      />
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
        {menu()}
      </div>
    </main>
  );
};

export default Home;
