import React from "react";
import githubWhite from "../../assets/github-mark/github-mark-white.svg";
import githubBlack from "../../assets/github-mark/github-mark.svg";
import propTypes from "prop-types";
import Container from "./StyledFooter";
const Footer = (props) => {
  return (
    <Container>
      <p>Brent-The-Carpenter</p>
      <a href="https://github.com/Brent-the-carpenter/shopping-cart-Top">
        <img
          src={props.theme === "light" ? githubBlack : githubWhite}
          alt="github link"
        />
      </a>
    </Container>
  );
};
Footer.propTypes = {
  theme: propTypes.string,
};
export default Footer;
