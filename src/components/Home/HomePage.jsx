import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import background from "../../assets/homepageImg.jpg";
const Container = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: Start;
  flex:1;
  text-align: center;
  gap: 10px;
  font-size: 2rem;
  background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    
  

  h1{
    color:rgb(247, 248, 249);
    text-shadow: 5px 8px 9px  rgba(195, 222, 254, 0.5);
    ;
  }
  p{
    color:rgba(247, 248, 249, 0.8);
  }

  div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      width: 50%;
      padding: 10px;
    
        border-radius: 10px;
  }
  #button-link {
      padding: 10px;
      font-size: 1.5rem;
      border: none;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.2);
      
      color: black;
      text-decoration: none;
      display: inline-block;
      text-align: center;
      cursor: pointer;
      outline: none;
     
      transition: background-color 0.3s;
  }
  #button-link:hover {
      background-color: var(--hover-focus-bg-color);
      color: white;
      opacity: 1;
      transform: scale(1.1);
  }
`;

function HomePage() {
  return (
    <Container>
      <h1>Welcome to the Emporium</h1>
      <div>
        <p>
          The Emporium is a place where you can find all the things you need. We
          find the best products for you and deliver them to your door.
        </p>
        <Link to="/ShopPage" id="button-link">
          Shop Now
        </Link>
      </div>
    </Container>
  );
}

export default HomePage;
