import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";

// Import the actual components and contexts if needed
import ShopPage from "../src/components/Shop/ShopPage";
import {
  CartProvider,
  useCartContext,
} from "../src/components/Context/CartContext";
import { ItemProvider } from "../src/components/Context/ItemContext";

// Mock the useCartContext function directly
const addToCartMock = vi.fn();
vi.mock("../src/components/Context/CartContext", () => ({
  useCartContext: vi.fn(() => ({
    cart: [],
    addToCart: addToCartMock,
    removeFromCart: vi.fn(),
    increaseQuantity: vi.fn(),
    decreaseQuantity: vi.fn(),
    clearCart: vi.fn(),
  })),
  CartProvider: ({ children }) => <div>{children}</div>, // Ensure children are rendered
}));

vi.mock("../src/components/Context/ItemContext", () => ({
  useItemsContext: vi.fn(() => ({
    items: [
      {
        id: 1,
        name: "Test Product",
        price: 10,
        image: "test.jpg",
        description: "Test Description",
      },
    ],
    loading: false,
    error: null,
  })),
  ItemProvider: ({ children }) => <div>{children}</div>, // Ensure children are rendered
}));

describe("ShopPage Component", () => {
  let user;

  beforeEach(() => {
    user = userEvent.setup();
    render(
      <CartProvider>
        <ItemProvider>
          <ShopPage />
        </ItemProvider>
      </CartProvider>
    );
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("calls addToCart when 'Add to Cart' button is clicked", async () => {
    const button = await screen.findByRole("button", { name: "Add to Cart" });
    await user.click(button);
    expect(addToCartMock).toHaveBeenCalledTimes(1);
  });
});
