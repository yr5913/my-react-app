import React, { useEffect, useState } from "react";
function MyComponentUseEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count:${count} ${color}`;
  }, [count]);

  function addCount() {
    setCount((c) => c + 1);
  }

  function decreaseCount() {
    setCount((c) => c - 1);
  }
  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }
  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={decreaseCount}>Decrease</button>
      <br></br>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}
export default MyComponentUseEffect;
