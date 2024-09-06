import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [shopProducts, setShoopProducts] = useState(PRODUCTS);
  const value = { shopProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
