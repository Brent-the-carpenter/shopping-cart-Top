import React from "react";
import Styled from "styled-components";
const Div = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 50%;
  padding: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
`;

function Item({ item }) {
  return (
    <Div>
      <h2>{item.name}</h2>
      <p>{item.price}</p>
    </Div>
  );
}
export default Item;
