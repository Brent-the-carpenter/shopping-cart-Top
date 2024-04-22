import React from "react";

import propTypes from "prop-types";
import Container from "./StyledFooter";
const Footer = (props) => {
  return (
    <Container>
      <p>Brent-The-Carpenter</p>
      <a href="https://github.com/Brent-the-carpenter/shopping-cart-Top">
        <img
          src={
            props.theme === "light"
              ? "src/assets/github-mark/github-mark.svg"
              : "src/assets/github-mark/github-mark-white.svg"
          }
          alt=""
        />
      </a>
    </Container>
  );
};
Footer.propTypes = {
  theme: propTypes.string,
};
export default Footer;
