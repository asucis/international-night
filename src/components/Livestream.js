import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import Countdown from "./Countdown";
import Image from "./Image";
import { tagline, callToAction } from "../../data/information.json";

const Livestream = () => {
  return (
    <section className="hero">
      <div className="hero-logo">
        <Image />
      </div>
      <h1>{tagline}</h1>
      <h2>
        <span role="img" aria-labelledby="large dot">
          🔴
        </span>{" "}
        Live video will begin at 6 pm MST.
      </h2>
      <Countdown />
      <div className="information">
        <div className="section-one">
          <a
            className="button"
            href={callToAction[0].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {callToAction[0].text}
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

export default Livestream;
