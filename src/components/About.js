import React, { useEffect } from "react";
import { IoIosSpeedometer } from "react-icons/io";
import { MdDevices } from "react-icons/md";
import { AiOutlineBulb } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);
  return (
    <section className="about" id="about">
      <div className="about__heading">
        <h2 className="about__heading--text" data-aos="fade-right">
          ABOUT
        </h2>
        <div className="about__heading--underline" data-aos="fade-left"></div>
      </div>
      <div className="about__container">
        <div className="about__card">
          <div className="about__card--hexagon" data-aos="flip-right">
            <IoIosSpeedometer />
          </div>
          <div className="about__card--name">Fast</div>
          <p className="about__card--para">
            Fast load times and lag free interaction my highest priority
          </p>
        </div>
        <div className="about__card">
          <div className="about__card--hexagon" data-aos="flip-right">
            <MdDevices />
          </div>
          <div className="about__card--name">Responsive</div>
          <p className="about__card--para">
            My layouts will work on any device small or big
          </p>
        </div>
        <div className="about__card">
          <div className="about__card--hexagon" data-aos="flip-right">
            <AiOutlineBulb />
          </div>
          <div className="about__card--name">intutive</div>
          <p className="about__card--para">
            Strong preferences for easy to use intutive UX/UI
          </p>
        </div>

        <div className="about__card">
          <div className="about__card--hexagon" data-aos="flip-right">
            <IoIosRocket />
          </div>
          <div className="about__card--name">Dynamic</div>
          <p className="about__card--para">
            Websites don't have to be static . I love making pages come to life.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
