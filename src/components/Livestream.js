import React from "react";
import Iframe from "react-iframe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "./Image";
import {
  tagline,
  livestreamUrl,
  callToAction,
} from "../../data/information.json";

const Livestream = () => {
  return (
    <section className="livestream">
      <div className="livestream-container">
        <div className="hero-logo">
          <Image />
        </div>
        <h1>{tagline}</h1>
        <Iframe
          url={livestreamUrl}
          width="100%"
          height="100%"
          className="livestream-iframe"
        />
        <h2>
          <span role="img" aria-labelledby="large dot">
            🔴
          </span>{" "}
          Live video will begin at 6 pm MST.
        </h2>
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
              <FontAwesomeIcon
                icon={faAngleDoubleDown}
                size="lg"
                color="#fff"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Livestream;
