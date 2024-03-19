import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };

  const reset = () => {
    setCount((c) => 0);
  };

  return (
    <div>
      <p> {count}</p>
      <button onClick={decrement}> Decrement</button>
      <button onClick={reset}> Reset</button>
      <button onClick={increment}> Increment</button>
    </div>
  );
}
export default Counter;
