import styled from "styled-components";
const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;

  background-color: var(--background-color);
  .search-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    margin-right: 10px;
    border: solid 1px var(--input-border-color);
    border-radius: 5px;
    background-color: var(--background-color);
    transition: background-color 0.3s, scale 0.3s;
    scale: 1;
  }
  input:focus {
    background-color: var(--hover-focus-bg-color);
    transition: background-color 0.3s, scale 0.3s;
    scale: 1.4;
  }
  .SearchIcon {
    width: 20px;

    fill: var(--text-color);
  }
  .item-container {
    display: grid;
    width: 100%;
    height: auto;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  .item:hover {
    box-shadow: 0 0 10px 5px var(--hover-focus-bg-color);
    scale: 1.04;
  }
`;
export default ShopContainer;
