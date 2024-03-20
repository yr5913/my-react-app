import React, { useEffect, useState } from "react";
function MyComponentUseEffectOnDestroy() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} * ${height}`;
  }, [width, height]);

  function handleResize() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }
  return (
    <>
      <p>Window Width: {width} px</p>
      <p>Window Height: {height} px</p>
    </>
  );
}
export default MyComponentUseEffectOnDestroy;
