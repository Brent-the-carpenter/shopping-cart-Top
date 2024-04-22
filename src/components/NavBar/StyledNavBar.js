import styled from "styled-components";
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
  .checkout {
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      font-size: 20px;
      color: var(--text-color);
      border: 1px solid var(--text-color);
      border-radius: 50%;
      width: 20px;
      height: 20px;
      padding: 5px;
    }
  }
  .checkout:hover > * {
    transform: scale(1.1);
  }
  .checkout:hover span {
    transition:background-color 0.3s;
    background-color: var(--hover-focus-bg-color);
`;
const Hr = styled.hr`
  width: 100%;
  margin: 0;
  background-color: var(--text-color);
  height: 3px;

  opacity: 0.7;
`;
export { NavContainer, Hr };
