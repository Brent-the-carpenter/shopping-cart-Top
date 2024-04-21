import { useState, useEffect } from "react";
import { fetchProducts } from "./fetchProducts";
const useItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let isCancelled = false;
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        if (!isCancelled) {
          setItems(data);
          setError(null);
          console.log(data);
        }
      } catch (error) {
        if (!isCancelled) {
          error.message === ""
            ? setError("An error occurred")
            : setError(error);
          setItems([]);
          console.log(error.message);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      isCancelled = true;
    };
  }, []);
  return { items, loading, error };
};
export { useItems };
