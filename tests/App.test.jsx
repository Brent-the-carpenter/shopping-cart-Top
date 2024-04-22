import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router";
import App from "../src/App";
import CheckoutPage from "../src/components/Checkout/CheckoutPage";

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
import { CartProvider } from "../src/components/Context/CartContext";

describe("Navbar component", () => {
  it("renders a navbar", () => {
    const { container } = render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it("routes to the home page", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<App />} />
        </Routes>
      </MemoryRouter>
    );
    const homeLink = screen.getByRole("link", { name: /Home/i });
    await user.click(homeLink);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  it("routes to checkout page", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
        </Routes>
      </MemoryRouter>
    );
    const checkoutLink = screen.getByRole("link", { name: /CheckOut/i });
    await user.click(checkoutLink);
    const checkoutContent = await screen.findByRole("heading", {
      text: /Checkout Page/i,
    });
    expect(checkoutContent).toBeInTheDocument();
  });
});
