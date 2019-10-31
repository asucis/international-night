import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SEO from "../components/seo";
import "../scss/App.scss";

const IndexPage = () => {
  return (
    <>
      <SEO title="International Night 2019" />
      <Hero />
      <section id="content">
        <center>
          <h1>International Night</h1>
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
        </center>
      </section>
      <Footer />
    </>
  );
};

export default IndexPage;
