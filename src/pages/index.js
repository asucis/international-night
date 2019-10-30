import React from "react";
import Countdown from "../components/Countdown";
import Image from "../components/Image";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="International Night 2019" />
      <div className="hero-logo">
        <Image />
      </div>
      <Countdown />
      <div className="information">
        <p className="location">SDFC Fields - ASU Tempe</p>
        <p>Friday, November 15</p>
        <p>Activites begin @ 6pm</p>
        <a
          className="button"
          href="https://www.eiseverywhere.com/ereg/newreg.php?eventid=495034"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Free Tickets
        </a>
      </div>
    </Layout>
  );
};

export default IndexPage;
