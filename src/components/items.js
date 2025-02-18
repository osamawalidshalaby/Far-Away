export default function Item({ item, ondelete, handlecheck }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handlecheck(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => ondelete(item.id)}>❌</button>
    </li>
  );
}
