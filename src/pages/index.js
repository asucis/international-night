import React from "react";
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
        <div className="event-info">
          <h1>International Night</h1>
          <h2>
            Join us for a night full of festivities, games, giveaways,
            performances, and everyone&apos;s favorite, food! Immerse yourself
            in the unique multicultural society here at ASU, fostered by our
            community of 10,000+ international students. Best of all, you can
            experience the beauty of the world first-hand right in your
            backyard!
          </h2>
          <h3>SDFC FIELDS - ASU TEMPE</h3>
          <h3>FRIDAY, NOVEMBER 15</h3>
          <h3>ACTIVITES BEGIN @ 6PM</h3>
          <h3>
            <span role="img" aria-label="alert">
              ⚠️
            </span>{" "}
            This event adheres to the clear bag policy{" "}
            <span role="img" aria-label="alert">
              ⚠️
            </span>
          </h3>
        </div>

        <Performances />
      </section>
      <Footer />
    </>
  );
};

export default IndexPage;
