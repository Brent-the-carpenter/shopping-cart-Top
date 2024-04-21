import { Link } from "react-router-dom";
import styled from "styled-components";
import propTypes from "prop-types";
const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  padding-top: 0;
  margin: 0;
  height: 100px;
  div {
    display: flex;
    height: 30px;
  }

  img {
    position: relative;

    max-width: 150px;
  }
  nav {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100px;
    font-size: 30px;
    flex: 2;
    gap: 20px;
    padding-left: 100px;
    padding-right: 100px;
  }
  @media screen and (max-width: 450px) {
    justify-content: center;
    height: auto;
    nav {
      flex-direction: column;
    }
  }
  a {
    text-decoration: none;
  }

  #icon {
    position: absolute;
    right: 10px;
    top: 10px;

    width: 40px;
    height: 40px;
    background-color: var(--background-color);
  }
  #icon:hover {
    background-color: var(--hover-focus-bg-color);
  }
  #icon svg {
    background-color: var(text-color);
    width: 30px;
    height: 30px;
    fill: var(--text-color);
  }
`;
const Hr = styled.hr`
  width: 100%;
  margin: 0;
  background-color: var(--text-color);
  height: 3px;
  border: none;
  opacity: 0.7;
`;

function NavBar(props) {
  return (
    <>
      <NavContainer>
        <img src="src/assets/logo2.png" />

        <nav>
          <Link to="/">Home</Link>
          <Link to="/ShopPage">Shop</Link>

          <Link to="/CheckoutPage">Checkout</Link>
        </nav>
        <button id="icon" onClick={props.ChangeTheme} aria-label="Change Theme">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z" />
          </svg>
        </button>
      </NavContainer>
      <Hr />
    </>
  );
}
NavBar.propTypes = {
  ChangeTheme: propTypes.func,
};
export default NavBar;
