import PropTypes from "prop-types";
function Student(props) {
  return (
    <div className="student">
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
      <p>Student:{props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Sudent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};
export default Student;
