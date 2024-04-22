import NavBar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import React, { useEffect, useState, createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ItemProvider } from "./components/Context/ItemContext";
import { CartProvider } from "./components/Context/CartContext";

function App() {
  const [theme, setTheme] = useState("light");
  const ChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <CartProvider>
        <ItemProvider>
          <NavBar ChangeTheme={ChangeTheme} />
          <Outlet />
          <Footer theme={theme} />
        </ItemProvider>
      </CartProvider>
    </>
  );
}

export default App;
