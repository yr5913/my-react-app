import Student from "./Student.jsx";
function App() {
  return (
    <>
      <Student name="Spongebob" age={31} isStudent={true} />
      <Student name="Patrik" age={42} isStudent={false} />
      <Student name="Messi" age={37} isStudent={false} />
      <Student name="Diego" age={57} isStudent={true} />
      <Student></Student>
    </>
  );
}

export default App;
