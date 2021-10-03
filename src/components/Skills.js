import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="skills">
      <div className="skills__photo">
        <img
          src="./images/sagar.png"
          className="skills__photo--img"
          alt="my"
        ></img>
        <h2 className="heading-2">Who's this guy?</h2>
        <p className="skills__photo--para">
          I am a talented, ambitious and hardworking individual, with broad
          skills and experience in Web Development including React.Js and UI
          Designing.
        </p>
      </div>
      <ul className="skills__bars">
        <li className="skills__bar skills__bars--1">
          <span className="skills__bar--text">HTML</span>
        </li>
        <li className="skills__bar skills__bars--2">
          <span className="skills__bar--text">CSS</span>
        </li>
        <li className="skills__bar skills__bars--x">
          <span className="skills__bar--text">SASS</span>
        </li>
        <li className="skills__bar skills__bars--3">
          <span className="skills__bar--text">JavaScript</span>
        </li>
        <li className="skills__bar skills__bars--4">
          <span className="skills__bar--text">React</span>
        </li>
        <li className="skills__bar skills__bars--5">
          <span className="skills__bar--text">Node.js</span>
        </li>
        <li className="skills__bar skills__bars--6">
          <span className="skills__bar--text">UI Design</span>
        </li>
        <li className="skills__bar skills__bars--7">
          <span className="skills__bar--text">Sketch</span>
        </li>
        <li className="skills__bar skills__bars--8">
          <span className="skills__bar--text">Redux</span>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
