import React, { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
function Nav() {
  const [active, setActive] = useState(false);
  const [activee, setActivee] = useState(null);
  const navRef = useRef();

  useEffect(() => {
    const aboutEl = document.querySelector(".about");

    window.addEventListener("scroll", function () {
      const appEl = document.querySelector(".app");

      if (window.scrollY > aboutEl.offsetTop - 100) {
        setActivee(true);
        appEl.style.gridTemplateRows =
          " 100vh repeat(3, min-content) max-content min-content";
      } else {
        setActivee(false);
      }
    });
  }, []);
  return (
    <nav
      className="nav"
      ref={navRef}
      className={activee ? "sticky nav" : "nav"}
    >
      <FiMenu className="menu" onClick={() => setActive(!active)} />
      <ul
        className={`nav__container ${active ? "show-navbar" : "hide-navbar"}`}
      >
        <li className="nav__links">
          <a href="#hero" className="nav__link">
            HOME
          </a>
        </li>
        <li className="nav__links">
          <a href="#about" className="nav__link">
            ABOUT
          </a>
        </li>
        <li className="nav__links">
          <a href="#projects" className="nav__link">
            PORTFOLIO
          </a>
        </li>
        <li className="nav__links">
          <a href="#contact" className="nav__link">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
