function List() {
  const fruits = ["apple", "banana", "orange", "strawberry"];
  fruits.sort();
  const listItems = fruits.map((fruit) => <li>{fruit}</li>);
  return <ol>{listItems}</ol>;
}
export default List;
