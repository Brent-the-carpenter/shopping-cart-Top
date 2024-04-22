import React from "react";
import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import Div from "./StyledItem";
import propTypes from "prop-types";

function Item({ item }) {
  const [ShowDetails, setShowDetails] = useState(false);
  const clickHandler = () => {
    setShowDetails(!ShowDetails);
  };
  const { addToCart } = useCartContext();

  return (
    <Div className="item">
      <div className="image-container">
        <img src={item.image} alt={item.title} />
      </div>
      <h2>{item.title}</h2>
      <div className="description">
        {" "}
        Description
        <button id="show-button" onClick={clickHandler}>
          <svg
            className={ShowDetails ? "rotate" : ""}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,15L17,10H7Z" />
          </svg>
        </button>
      </div>

      <p className={ShowDetails ? "show" : ""}>{item.description}</p>
      <div className="action-container">
        <div>${item.price}</div>
        <button
          onClick={() => {
            addToCart(item);
          }}
        >
          Add to Cart
        </button>
      </div>
    </Div>
  );
}
Item.propTypes = {
  item: propTypes.shape({
    id: propTypes.number,
    title: propTypes.string,
    price: propTypes.number,
    description: propTypes.string,
    category: propTypes.string,
    image: propTypes.string,
  }).isRequired,
};
export default Item;
