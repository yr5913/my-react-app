import React, { useState } from "react";
function MyComponenetArrays() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    // setFoods([...foods, newFood]);
    setFoods((f) => [...f, newFood]);
  }
  function handleRemoveFood(index) {
    setFoods(foods.filter((element, i) => i !== index));
  }
  return (
    <>
      <div>
        <h2>List of Food</h2>
        <ul>
          {foods.map((food, index) => (
            <li key={index} onClick={() => handleRemoveFood(index)}>
              {food}
            </li>
          ))}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter Food name"></input>
        <button onClick={handleAddFood}>Add Food</button>
      </div>
    </>
  );
}
export default MyComponenetArrays;
