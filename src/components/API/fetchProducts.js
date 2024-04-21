export const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(
        `HTTP error ${response.status}: ${response.statusText} - ${errorBody}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
