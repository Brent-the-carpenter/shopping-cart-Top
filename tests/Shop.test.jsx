import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../src/components/Context/CartContext";
import { ItemProvider } from "../src/components/Context/ItemContext";
import ShopPage from "../src/components/Shop/ShopPage";
import * as useItemsModule from "../src/components/API/useItems";

// Mock the entire module
vi.mock("../src/components/API/useItems");

describe("Shop Component", () => {
  beforeEach(() => {
    // Reset mocks and define default behavior
    vi.resetAllMocks();
    useItemsModule.useItems.mockReturnValue({
      items: [
        {
          id: 1,
          title: "Item 1",
          price: 10,
          description: "Test Description",
          image: "/path/to/image.jpg",
        },
        {
          id: 2,
          title: "Item 2",
          price: 20,
          description: "Test Description 2",
          image: "/path/to/image2.jpg",
        },
      ],
      loading: false,
      error: null,
    });
  });

  it("displays items with all details when not loading and no error", async () => {
    const { getByRole, getAllByText, getByTestId } = render(
      <BrowserRouter>
        <CartProvider>
          <ItemProvider>
            <ShopPage />
          </ItemProvider>
        </CartProvider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(getByRole("heading", { name: "Item 1" })).toBeInTheDocument();
    });

    const button = getByTestId("show-button-1");
    userEvent.click(button);

    await waitFor(() => {
      expect(getAllByText("Test Description")).toHaveLength(1);
      expect(getAllByText("Add to Cart")).toHaveLength(2);
    });

    expect(getByTestId("shop-container")).toMatchSnapshot();
  });
});

describe("Shop Component Error Handling", () => {
  beforeEach(() => {
    useItemsModule.useItems.mockReturnValue({
      items: [],
      loading: false,
      error: { message: "Not found" },
    });
  });

  it("displays error message when error occurs", async () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <ItemProvider>
            <ShopPage />
          </ItemProvider>
        </CartProvider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Error: Not found")).toBeInTheDocument();
    });
  });
});

describe("Shop Component Loading State", () => {
  beforeEach(() => {
    useItemsModule.useItems.mockReturnValue({
      items: [],
      loading: true,
      error: null,
    });
  });

  it("displays loading state when loading", async () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <ItemProvider>
            <ShopPage />
          </ItemProvider>
        </CartProvider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });
});
