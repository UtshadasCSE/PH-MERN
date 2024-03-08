import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    let newCount = count + 1;
    setCount(newCount);
  };
  const handleReduce = () => {
    let newCount = count - 1;
    setCount(newCount);
  };
  return (
    <>
      <div>
        <h2>Counter:{count}</h2>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReduce}>Reduce</button>
      </div>
    </>
  );
}
