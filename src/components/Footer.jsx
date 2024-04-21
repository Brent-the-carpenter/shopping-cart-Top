import React from "react";
import Stlyed from "styled-components";

const Container = Stlyed.div`


background-color: var(--background-color);
position: fixed;
bottom: 0;
width: 100%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
 img{
    width: 40px;
    height: 40px;
    transition: transform 0.3s;
 }
    img:hover{
        transform: scale(1.1);
        background-color: var(--hover-focus-bg-color);
        border-radius: 100%;
    }
    p{
        font-size: 1.5rem;
        color:var(--footer-text-color);
`;
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
export default Footer;
