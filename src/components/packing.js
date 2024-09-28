import { useState } from "react";
import Item from "./items";
export default function PackingList({ items, ondelete, handlecheck, deleteitems }) {
  const [sortBy, setsortBy] = useState("input");

  let sorteditem;

  if (sortBy === "input") sorteditem = items;

  if (sortBy === "desc")
    sorteditem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sorteditem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sorteditem.map((item) => (
          <Item
            item={item}
            key={item.description}
            ondelete={ondelete}
            handlecheck={handlecheck}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setsortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="desc">Sort by description</option>
          <option value="packed">Sort by item packed</option>
        </select>
        <button onClick={deleteitems}>Clear The List</button>
      </div>
    </div>
  );
}
