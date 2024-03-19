import React, { useState } from "react";

function MyComponentObjectsArray() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCars((c) => c.filter((element, i) => i !== index));
  }

  function handleYearChange(event) {
    setCarYear((c) => event.target.value);
  }

  function handleMakeChange(event) {
    setCarMake((c) => event.target.value);
  }

  function handleModelChange(event) {
    setCarModel((c) => event.target.value);
  }

  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.year} {car.make} {car.model} &nbsp;
            <input
              type="button"
              value="Delete"
              onClick={() => handleRemoveCar(index)}
            ></input>
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange}></input>
      <br />
      <input
        type="text"
        placeholder="Enter car make"
        value={carMake}
        onChange={handleMakeChange}
      ></input>
      <br />
      <input
        type="text"
        placeholder="Enter car model"
        value={carModel}
        onChange={handleModelChange}
      ></input>
      <br></br>
      <input type="button" value="Add Car" onClick={handleAddCar}></input>
    </div>
  );
}
export default MyComponentObjectsArray;
