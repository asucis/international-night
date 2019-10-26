import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const Footer = () => {
  const date = new Date();

  return (
    <footer>
      <div className="footer-container">
        <div className="social-icon-container">
          <div className="social-icon">
            <a
              href="https://facebook.com/asucis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://twitter.com/asu_cis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.instagram.com/asucis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
          </div>
          {/* <div className="social-icon">
            <a href="/weixin" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "weixin"]} />
            </a>
          </div> */}
        </div>
        <div className="section-one">
          <p>
            Arizona State University © Coalition of International Students{" "}
            {date.getFullYear()}. All rights reserved.
          </p>
        </div>
        <div className="section-two">
          <p>
            Built by{" "}
            <a
              href="https://www.dickwyn.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              dickwyn
            </a>{" "}
            This code is available under the{" "}
            <a
              href="https://github.com/asucis/international-night/blob/master/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT License
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
