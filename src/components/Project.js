import React from "react";

function Project({ src, name, link }) {
  return (
    <div className="project">
      <div className="project__img">
        <img src={src} alt="" />
      </div>
      <div className="project__name">{name}</div>
      <div className="project__overlay">
        <div className="project__overlay--text">{name}</div>
        <div className="project__btn">
          <a
            href={`https://sagarchawla076.github.io/${link}/ `}
            className="project__link"
          >
            Visit Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
