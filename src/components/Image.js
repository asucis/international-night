import React from "react";
import Img from "gatsby-image";
import getOptimizedImage from "../hooks/get-optimized-image";

const Image = ({ fileName }) => {
  const images = getOptimizedImage();

  const optimizedImage = images.edges.find(
    image => image.node.relativePath === fileName
  );

  return <Img fluid={optimizedImage.node.childImageSharp.fluid} />;
};

export default Image;
