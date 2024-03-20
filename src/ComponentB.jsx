import ComponentC from "./ComponentC";
function ComponentB(props) {
  return (
    <>
      <div className="box">
        <h1>ComponentB</h1>
        <ComponentC user={props.user}></ComponentC>
      </div>
    </>
  );
}
export default ComponentB;
