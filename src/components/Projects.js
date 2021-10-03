import React, { useEffect } from "react";
import Project from "./Project";
import AOS from "aos";
import "aos/dist/aos.css";
function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);
  return (
    <section className="projects" id="projects">
      <div className="projects__heading">
        <h2 className="projects__heading--text" data-aos="fade-right">
          PROJECTS
        </h2>
        <div
          className="projects__heading--underline"
          data-aos="fade-left"
        ></div>
      </div>
      <div className="projects__container">
        <Project
          src="./images/accordion.png"
          name="Accordion"
          link="accordion"
        />
        <Project src="./images/cart.png" name="Cart" link="cart" />
        <Project src="./images/counter.png" name="Counter" link="counter" />
        <Project
          src="./images/color-generator.png"
          name="Color Generator"
          link="color-generator"
        />
        <Project
          src="./images/groceryBud.png"
          name="Grocery Bud"
          link="grocery-bud"
        />
        <Project
          src="./images/loremIpsum.png"
          name="Lorem Ipsum"
          link="lorem-ipsum"
        />
        <Project src="./images/menu.png" name="Menu" link="menu" />
        <Project src="./images/navbar.png" name="Navbar" />
        <Project src="./images/reviews.png" name="Reviews" link="reviews" />
        <Project
          src="./images/sidebarAndModal.png"
          name="Sidebar And Modal"
          link="sidebar-and-modal"
        />
        <Project src="./images/slider.png" name="Slider" link="slider" />
        <Project src="./images/stripe.png" name="Stripe" link="stripe-menu" />
        <Project src="./images/tabs.png" name="Tabs" link="tabs" />
        <Project src="./images/tours.jpg" name="Tours" link="tours-app" />
        <Project src="./images/widget.png" name="Widget" link="widget" />
        <Project src="./images/youtube.png" name="YoutubeCopy" link="youtube" />
      </div>
    </section>
  );
}

export default Projects;
