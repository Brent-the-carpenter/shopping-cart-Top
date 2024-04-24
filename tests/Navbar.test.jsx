import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import NavBar from "../src/components/NavBar/Navbar";
import "@testing-library/jest-dom";
import { beforeEach, vi } from "vitest";

beforeEach(() => {
  vi.mock("../src/components/Context/CartContext", () => ({
    useCartContext: vi.fn(() => ({
      cart: [],
      addToCart: vi.fn(),
      removeFromCart: vi.fn(),
      increaseQuantity: vi.fn(),
      decreaseQuantity: vi.fn(),
      clearCart: vi.fn(),
    })),
    CartProvider: ({ children }) => <div>{children}</div>,
  }));
});
import { CartProvider } from "../src/components/Context/CartContext";
import { ItemProvider } from "../src/components/Context/ItemContext";

describe("Navbar component", () => {
  it("renders a navbar", () => {
    const { container } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
  it("has a change theme button", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("button", { name: "Change Theme" })
    ).toBeInTheDocument();
  });

  it("changes theme on button click", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: "Change Theme" });
    await user.click(button); // Simulates the first click that might change the theme to 'dark'

    expect(document.body.getAttribute("data-theme")).toBe("dark");

    await user.click(button); // Simulate another click to potentially toggle back or to another theme
    expect(document.body.getAttribute("data-theme")).not.toBe("dark"); // Check if it toggles correctly
  });
});
