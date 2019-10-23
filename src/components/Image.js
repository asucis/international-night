import React from "react";
import Img from "gatsby-image";
import getOptimizedImage from "../hooks/get-optimized-image";

const Image = () => {
  const images = getOptimizedImage();

  const placeholder = images.edges.find(
    image => image.node.relativePath === "in-logo-2019.png"
  );

  return <Img fluid={placeholder.node.childImageSharp.fluid} />;
};

export default Image;
