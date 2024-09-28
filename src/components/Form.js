import { useState } from "react";

export default function Form({ onadd }) {
  const [description, setdescripion] = useState("");
  const [num, setnum] = useState(1);

  function handleSumbit(e) {
    e.preventDefault();
    if (description === "") return;
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: num,
      packed: false,
    };
    onadd(newItem);
    console.log(newItem);
    setdescripion("");
    setnum(1);
  }

  return (
    <form className="add-form" onSubmit={handleSumbit}>
      <h3>What You Need To Your 😘 Trip ?</h3>
      <select
        name="numbers"
        id="numbers"
        value={num}
        onChange={(e) => setnum(e.target.value)}
      >
        {Array.from({ length: 20 }, (c, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item...."
        value={description}
        onChange={(e) => setdescripion(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
