function Button() {
  let count = 0;
  const handleClick2 = (e) => {
    console.log(e);
    e.target.textContent = "Ouch";
  };
  return <button onDoubleClick={(e) => handleClick2(e)}>Click me</button>;
}

export default Button;
