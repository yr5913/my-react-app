import React, { useState } from "react";
function MyComponenetObject() {
  const [car, setCar] = useState({
    year: 2015,
    make: "Tesla",
    model: "Model S",
  });

  function handleYearChange(event) {
    // /setCar({ ...car, year: event.target.value });
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }

  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <>
      <div>
        <p>
          Your favorite car is: {car.year} {car.make} {car.model}
        </p>
        <input
          type="number"
          value={car.year}
          onChange={handleYearChange}
        ></input>
        <br />
        <input type="text" value={car.make} onChange={handleMakeChange}></input>
        <br />
        <input
          type="text"
          value={car.model}
          onChange={handleModelChange}
        ></input>
        <br />
      </div>
    </>
  );
}
export default MyComponenetObject;
