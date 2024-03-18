import List from "./List.jsx";
function App() {
  const fruits = [];

  const veggies = [
    { id: 6, name: "potatoes", calories: 95 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 95 },
    { id: 9, name: "corn", calories: 63 },
  ];
  return (
    <>
      {fruits.length > 0 ? (
        <List items={fruits} category="Fruits"></List>
      ) : null}
      {veggies.length > 0 ? <List items={veggies}></List> : null}
    </>
  );
}

export default App;
