import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import {
  CartProvider,
  useCartContext,
} from "../src/components/Context/CartContext";
import { ItemProvider } from "../src/components/Context/ItemContext";
import CheckoutPage from "../src/components/Checkout/CheckoutPage";
import userEvent from "@testing-library/user-event";

vi.mock("../src/components/Context/CartContext", () => ({
  CartProvider: ({ children }) => <div>{children}</div>, // Simplified mock of CartProvider
  useCartContext: vi.fn(), // Mock implementation of useCartContext
}));

describe("Checkout Component when cart is empty", () => {
  beforeEach(() => {
    useCartContext.mockReturnValue({
      cart: [],
      addToCart: vi.fn(),
      removeFromCart: vi.fn(),
      increaseQuantity: vi.fn(),
      decreaseQuantity: vi.fn(),
      clearCart: vi.fn(),
    });
  });

  it("renders the checkout message when cart is empty", async () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <ItemProvider>
            <CheckoutPage />
          </ItemProvider>
        </CartProvider>
      </BrowserRouter>
    );

    const checkoutHeader = await screen.findByText("Checkout");
    expect(checkoutHeader).toBeInTheDocument();
  });
});

describe("Checkout Component when cart is not empty", () => {
  let mockCart;
  beforeEach(() => {
    mockCart = [
      {
        id: 1,
        title: "Item 1",
        price: 10,
        description: "Test Description",
        image: "/path/to/image.jpg",
        quantity: 1,
      },
      {
        id: 2,
        title: "Item 2",
        price: 20,
        description: "Test Description",
        image: "/path/to/image.jpg",
        quantity: 1,
      },
    ];
    useCartContext.mockReturnValue({
      cart: mockCart,

      removeFromCart: vi.fn((item) => {
        mockCart = mockCart.filter((cartItem) => cartItem.id !== item.id);
        useCartContext.mockReturnValue({ ...useCartContext(), cart: mockCart }); // Rebind the updated cart
      }),
      increaseQuantity: vi.fn(),
      decreaseQuantity: vi.fn(),
      clearCart: vi.fn(),
    });
  });

  it("renders the checkout page with items in the cart", async () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <ItemProvider>
            <CheckoutPage />
          </ItemProvider>
        </CartProvider>
      </BrowserRouter>
    );

    expect(await screen.findByText("Item 1")).toBeInTheDocument();
  });

  it("removes item from cart when Remove button is clicked", async () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <ItemProvider>
            <CheckoutPage />
          </ItemProvider>
        </CartProvider>
      </BrowserRouter>
    );
    const removeButton = await screen.findByTestId("remove1");
    await userEvent.click(removeButton);

    expect(await screen.findByText("Item 2")).toBeInTheDocument();
  });

  it("increase quantity of item when Increase button is clicked", async () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <ItemProvider>
            <CheckoutPage />
          </ItemProvider>
        </CartProvider>
      </BrowserRouter>
    );
    const increaseButton = await screen.findByTestId("increase-quantity1");
    await userEvent.click(increaseButton);
    waitFor(() => {
      expect(screen.findByText("Quantity: 2")).toBeInTheDocument();
    });
  });

  it("decrease quantity of item when Decrease button is clicked", async () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <ItemProvider>
            <CheckoutPage />
          </ItemProvider>
        </CartProvider>
      </BrowserRouter>
    );
    const decreaseButton = await screen.findByTestId("decrease-quantity1");
    await userEvent.click(decreaseButton);
    waitFor(() => {
      expect(screen.findByText("Quantity: 0")).toBeInTheDocument();
    });
  });

  it("clears cart when Clear Cart button is clicked", async () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <ItemProvider>
            <CheckoutPage />
          </ItemProvider>
        </CartProvider>
      </BrowserRouter>
    );
    const clearCartButton = await screen.findByTestId("clear-cart");
    await userEvent.click(clearCartButton);
    waitFor(() => {
      expect(screen.findByText("Checkout")).toBeInTheDocument();
      expect(screen.findByText("Your cart is empty")).toBeInTheDocument();
      expect(screen.queryByText("Item 1")).toBeNull();
    });
  });
});
