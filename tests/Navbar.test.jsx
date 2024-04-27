import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { beforeEach, describe, it, expect, vi } from "vitest";
import App from "../src/App";
import NavBar from "../src/components/NavBar/Navbar";
import {
  CartProvider,
  useCartContext,
} from "../src/components/Context/CartContext";
import { ItemProvider } from "../src/components/Context/ItemContext";
import ShopPage from "../src/components/Shop/ShopPage";
import { act } from "react-dom/test-utils";

let mockCart = [];
vi.mock("../src/components/Context/CartContext", () => ({
  CartProvider: ({ children }) => <div>{children}</div>,
  useCartContext: vi.fn(() => ({
    cart: mockCart,
    addToCart: vi.fn((item) => {
      const index = mockCart.findIndex((cartItem) => cartItem.id === item.id);
      if (index !== -1) {
        mockCart[index].quantity += 1;
      } else {
        mockCart.push({ ...item, quantity: 1 });
      }
      // Here, update the mock return value for future uses in the same test
      useCartContext.mockReturnValue({ cart: [...mockCart] });
    }),
    increaseQuantity: vi.fn(),
    decreaseQuantity: vi.fn(),
  })),
}));

vi.mock("../src/components/API/useItems", () => ({
  useItems: vi.fn(() => ({
    items: [
      {
        id: 1,
        title: "Item 1",
        price: 10,
        description: "Test Description",
        image: "/path/to/image.jpg",
      },
    ],
    loading: false,
    error: null,
  })),
}));

describe("Navbar component", () => {
  let user;

  beforeEach(() => {
    user = userEvent.setup();
    mockCart = []; // Define mockCart inside beforeEach to ensure it's reset for each test.
  });

  it("renders a navbar", async () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("has a change theme button", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("button", { name: "Change Theme" })
    ).toBeInTheDocument();
  });

  it("changes theme on button click", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: "Change Theme" });
    await user.click(button);
    expect(document.body.getAttribute("data-theme")).toBe("dark");
    await user.click(button);
    expect(document.body.getAttribute("data-theme")).not.toBe("dark");
  });
  it("keeps track of items in cart when item is added", async () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <ItemProvider>
            <NavBar />
            <ShopPage />
          </ItemProvider>
        </CartProvider>
      </BrowserRouter>
    );
    expect(mockCart).toHaveLength(0);
    await act(async () => {
      const button = await screen.findByTestId("add-to-cart-1");
      await user.click(button);
    });
    console.log("Cart after adding item:", mockCart);

    await waitFor(() => {
      expect(mockCart).toHaveLength(1);
      expect(mockCart).not.toHaveLength(3);
    });
  });
});
