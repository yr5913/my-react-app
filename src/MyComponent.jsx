import React, { useState } from "react";
function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("delivery");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange}></input>
      <p>Name:{name}</p>

      <input
        value={quantity}
        type="number"
        onChange={handleQuantityChange}
      ></input>
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions here"
      ></textarea>
      <p>Comment:{comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="visa">Visa</option>
        <option value="master">Master</option>
        <option value="giftcard">Gift card</option>
      </select>
      <p>Payment:{payment}</p>

      <label>
        <input
          type="radio"
          value="pickup"
          checked={shipping === "pickup"}
          onChange={handleShippingChange}
        ></input>
        Pick Up
      </label>
      <label>
        <input
          type="radio"
          value="delivery"
          checked={shipping === "delivery"}
          onChange={handleShippingChange}
        ></input>
        Delivery
      </label>
      <p>Shipping:&nbsp;{shipping}</p>
    </div>
  );
}
export default MyComponent;
