import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useItemsContext } from "../Context/ItemContext";
import Item from "./Item";
import ShopContainer from "./SyledPage";
import debounce from "lodash.debounce";

function ShopPage() {
  const { items, loading, error } = useItemsContext();
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const debouncedSearch = useMemo(
    () =>
      debounce((searchTerm) => {
        const filtered = items.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(filtered);
      }, 300),
    [items]
  );

  const handleSearch = useCallback(
    (e) => {
      const searchTerm = e.target.value;
      setSearch(searchTerm);
      debouncedSearch(searchTerm);
    },
    [debouncedSearch]
  );

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <ShopContainer>
      <h1>Shop Page</h1>
      <div className="search-container">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search..."
          value={search}
        />
        <svg
          className="SearchIcon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
        </svg>
      </div>
      {filteredItems.length === 0 ? (
        <h1 id="not-found">No items found</h1>
      ) : (
        <div className="item-container">
          {filteredItems.map((item) => (
            <Item className="item" key={item.id} item={item} />
          ))}
        </div>
      )}
    </ShopContainer>
  );
}

export default ShopPage;
