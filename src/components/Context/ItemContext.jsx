import React, { createContext, useContext, useMemo } from "react";
import { useItems } from "../API/useItems";

const ItemContext = createContext({
  items: [],
  loading: true,
  error: null,
});

export const useItemsContext = () => useContext(ItemContext);

export const ItemProvider = ({ children }) => {
  const { items, loading, error } = useItems();

  const value = useMemo(
    () => ({
      items,
      loading,
      error,
    }),
    [items, loading, error]
  );

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};
