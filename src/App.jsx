import List from "./List.jsx";
function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "orange", calories: 45 },
    { id: 4, name: "strawberry", calories: 56 },
  ];

  const veggies = [
    { id: 6, name: "potatoes", calories: 95 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 95 },
    { id: 9, name: "corn", calories: 63 },
  ];
  return (
    <>
      <List items={fruits} category="Fruits"></List>
      <List items={veggies} category="Vegetables"></List>
    </>
  );
}

export default App;
