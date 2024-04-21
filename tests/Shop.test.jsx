import React from "react";
import { render, screen } from "@testing-library/react";
import { ItemContext } from "../src/components/ItemContext";

import ShopPage from "../src/components/Shop/ShopPage";

describe("ShopPage Component", () => {
  it("renders correctly with context", () => {
    const mockItems = {
      items: [{ id: 1, name: "Test Product" }],
      loading: false,
      error: null,
    };

    render(
      <ItemContext.Provider value={mockItems}>
        <ShopPage />
      </ItemContext.Provider>
    );

    // Assertions can go here
    expect(screen.getByText("Test Product")).toBeInTheDocument();
  });
});
