import React from "react";
import "./Project.css";

const Projects = () => {
  return (
    <div className="projectContainer">
      <h1>Featured projects</h1>
      <section>
      <a href="https://lewmas9152.github.io/socialmedia/">
      <img src="./src/assets/project1.jpg" alt="project1-img" className="project_img" />
        Social Media Dashboard with theme switcher
      </a>
      </section>

      <section>
      <a href="https://lewmas9152.github.io/sunnyside-agency-landing-page-main//">
      <img src="./src/assets/project2.jpg" alt="project2-img" className="project_img" />
      sunnyside-agency-landing-page-main
      </a>
      </section>

      <section>
      <a href="https://lewmas9152.github.io/interactive-rating-component-main/">
      <img src="./src/assets/project3.jpg" alt="project3-img" className="project_img" />
      interactive-rating-component-main
      </a>
      </section>

      <section>
      <a href="https://lewmas9152.github.io/news-homepage-main/">
      <img src="./src/assets/project4.jpg" alt="project4-img" className="project_img" />
      news-homepage-main
      </a>
      </section>

      <section>
      <a href="https://lewmas9152.github.io/faq-accordion-card-main//">
      <img src="./src/assets/project5.jpg" alt="project5-img" className="project_img" />
      faq-accordion-card-main
      </a>
      </section>


      <section>
      <a href="https://lewmas9152.github.io/newsletter-sign-up-with-success-message-main//">
      <img src="./src/assets/project6.jpg" alt="project8-img" className="project_img" />
      newsletter-sign-up-with-success-message-main
      </a>
      </section>

      <section>
      <a href="https://lewmas9152.github.io/stats-preview-card-main-component/">
      <img src="./src/assets/project7.jpg" alt="prroject7-img" className="project_img" />
        Social Media Dashboard with theme switcher
      </a>
      </section>
     
    </div>
  );
};

export default Projects;
