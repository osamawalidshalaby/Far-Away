export default function Stats({ items }) {
  if (!items.length) {
    return <p className="stats">Start to addding now 🌍</p>;
  }

  const numitems = items.length;
  const numpacked = items.filter((item) => item.packed).length;
  const percent = Math.floor((numpacked / numitems) * 100);
  return (
    <footer className="stats">
      {percent === 100
        ? "You got everything! Ready to go ✈️"
        : `You Have ${numitems} Items In Your List , and already Packed ${numpacked} (${percent} %)`}
    </footer>
  );
}