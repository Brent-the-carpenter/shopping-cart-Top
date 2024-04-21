import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import React, { useEffect, useState, createContext, useContext } from "react";

import { Outlet } from "react-router-dom";
import { useItems } from "./components/API/useItems";
import { ItemContext } from "./components/ItemContext";

function App() {
  const [theme, setTheme] = useState("light");
  const ChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  const Items = useItems();

  return (
    <>
      <ItemContext.Provider value={Items}>
        <NavBar ChangeTheme={ChangeTheme} />
        <Outlet />
        <Footer theme={theme} />
      </ItemContext.Provider>
    </>
  );
}

export default App;
