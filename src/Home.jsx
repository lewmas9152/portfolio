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
      <img src="./src/assets/myImage.png" alt="" className="myImage" />
      <MdOutlineMenuOpen size="3rem" className="menuIcon" onClick={displayMenu} />
      <div className="card">
        <section className="intro">
          <h2><span>Hi,</span> <br /> I'm Sam a Frontend web developer</h2>
          <quote>~Making your experience better~</quote>
        </section>
        {menu()}
      </div>
    </main>
  );
};

export default Home;
