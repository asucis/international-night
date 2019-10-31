import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import Countdown from "./Countdown";
import Image from "./Image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-logo">
        <Image />
      </div>
      <h1>Experience the world at ASU</h1>
      <Countdown />
      <div className="information">
        <div className="section-one">
          <a
            className="button"
            href="https://www.eiseverywhere.com/ereg/newreg.php?eventid=495034"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Free Tickets
          </a>
        </div>
        <div className="section-two">
          <a className="more-arrow bounce" href="#content">
            <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" color="#fff" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
