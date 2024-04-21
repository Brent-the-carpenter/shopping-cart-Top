import { createContext, useContext } from "react";

const ItemContext = createContext(null);
export const useItemsContext = () => useContext(ItemContext);

export { ItemContext };
