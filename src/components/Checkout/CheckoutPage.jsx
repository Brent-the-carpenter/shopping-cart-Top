import { useEffect, useState } from "react";
import { useCartContext } from "../Context/CartContext";
import Container from "./StyledCheckout";

function CheckoutPage() {
  const {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCartContext();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const newTotal = cart.reduce(
      (acc, item) => parseFloat(acc + item.price * item.quantity),
      0
    );
    setTotal(newTotal);
  }, [cart]);

  return (
    <Container data-testid="container">
      <div>
        <h1>Checkout</h1>
        {cart.length === 0 ? (
          <p className="empty">your cart is empty!! Get to shopping</p>
        ) : (
          <ul data-testid="list">
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>price ${item.price}</p>
                  <div>
                    <div
                      data-testid={`item-${item.id}-quantity`}
                      className="quantity"
                    >
                      {" "}
                      Quantity: {item.quantity}
                      <div>
                        <svg
                          data-testid={`decrease-quantity${item.id}`}
                          onClick={() => {
                            decreaseQuantity(item);
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,13H5V11H19V13Z" />
                        </svg>
                        <svg
                          data-testid={`increase-quantity${item.id}`}
                          onClick={() => {
                            increaseQuantity(item);
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                        </svg>
                      </div>
                    </div>
                    <button
                      data-testid={`remove${item.id}`}
                      onClick={() => {
                        removeFromCart(item);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div data-testid="total" className="total">
          your total is ${total.toFixed(2)}{" "}
        </div>
      </div>
      <button
        data-testid="clear-cart"
        className="clear-cart"
        onClick={clearCart}
      >
        {" "}
        Clear Cart
      </button>
    </Container>
  );
}
export default CheckoutPage;
