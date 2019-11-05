import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faTicketAlt,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SEO from "../components/seo";
import Performances from "../components/Performances";

import "../scss/App.scss";

const IndexPage = () => {
  return (
    <>
      <SEO title="International Night 2019" />
      <Hero />
      <section id="content">
        <div className="content-container">
          <div className="event-info">
            <h1>International Night</h1>
            <p className="hashtags">#asucis</p>
            <p className="hashtags">#asuintlnight</p>
            <p className="hashtags">#asuglobal</p>
            <h2>
              Join us for a night full of festivities, games, giveaways,
              performances, and everyone&apos;s favorite, food! Immerse yourself
              in the unique multicultural society here at ASU, fostered by our
              community of 10,000+ international students. Best of all, you can
              experience the beauty of the world first-hand right in your
              backyard!
            </h2>
            <div className="key-information-container">
              <div className="key-information">
                <FontAwesomeIcon icon={faMapMarkedAlt} size="6x" />
                <h3>SDFC Intramural Fields</h3>
                <h3>ASU Tempe Campus</h3>
                <a
                  href="https://goo.gl/maps/41xVrzBUcq4zoLMv5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View in map
                </a>
              </div>
              <div className="key-information">
                <FontAwesomeIcon icon={faTicketAlt} size="6x" />
                <h3>Ticket required at entry</h3>
                <a
                  href="https://signup.asucis.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Claim your free tickets
                </a>
              </div>
              <div className="key-information">
                <FontAwesomeIcon icon={faExclamationCircle} size="6x" />
                <h3>
                  For your safety, this event adheres to the Sun Devil Athletics
                  clear bag policy
                </h3>
                <a
                  href="https://thesundevils.com/sports/2018/8/9/clear-bag-policy.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>

          <Performances />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default IndexPage;
