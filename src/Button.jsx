function Button() {
  let count = 0;
  const handleClick2 = (e) => {
    console.log(e);
  };
  return <button onClick={(e) => handleClick2(e)}>Click me</button>;
}

export default Button;
