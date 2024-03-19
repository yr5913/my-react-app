import React, { useEffect, useState } from "react";
function MyComponentUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `My Counter Program`;
  }, []);

  function addCount() {
    setCount((c) => c + 1);
  }
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
    </>
  );
}
export default MyComponentUseEffect;
