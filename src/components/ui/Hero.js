import React from "react";

export const Hero = ({ title, description, img }) => {
  if (title === "Services") {
    return (
      <div className="hero-services animate__animated animate__fadeIn">
        <h1 className="hero__title">{title}</h1>
      </div>
    );
  } else if (title === "Contact") {
    return (
      <div className="hero-contact animate__animated animate__fadeIn">
        <h2 className="hero__title">{title}</h2>
      </div>
    );
  } else {
    return (
      <div className="hero">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__district">{description}</p>

        <img className="hero__img" src={img} alt="img" />
      </div>
    );
  }
};
