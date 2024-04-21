import styled from "styled-components";
import { useItemsContext } from "../ItemContext";
import Item from "./Item";

const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  input {
    margin-right: 10px;
    border: solid 1px var(--input-border-color);
    border-radius: 5px;
    background-color: var(--background-color);
  }
  input:focus {
    background-color: var(--hover-focus-bg-color);
  }
`;
function ShopPage() {
  const { items, loading, error } = useItemsContext();
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error:{error.message}</h1>;
  return (
    <ShopContainer>
      <h1>Shop Page</h1>
      <div>
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <div className="item-container">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </ShopContainer>
  );
}
export default ShopPage;
