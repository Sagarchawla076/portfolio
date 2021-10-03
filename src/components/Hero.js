import React from "react";

const style = {
  backgroundImage: "url(./images/background.png)",
};
function Hero() {
  return (
    <section className="hero" style={style} id="hero">
      <h1 className="heading-1 hero__heading">
        Hello I'm <span className="hero__span">Sagar Chawla</span> <br />
        I'm a Web Developer
      </h1>
      <a href="#projects" className="btn hero__btn">
        View My Work <span className="hero__arrow"> &rarr;</span>
      </a>
      <div className="bubbles">
        <img src="./images/bubble.png" alt="bubble" />
        <img src="./images/bubble.png" alt="bubble" />
        <img src="./images/bubble.png" alt="bubble" />
        <img src="./images/bubble.png" alt="bubble" />
        <img src="./images/bubble.png" alt="bubble" />
        <img src="./images/bubble.png" alt="bubble" />
        <img src="./images/bubble.png" alt="bubble" />
      </div>
    </section>
  );
}

export default Hero;
