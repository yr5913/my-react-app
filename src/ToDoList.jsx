import React, { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState(["Eat Breakfast", "take shower"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask((n) => event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask((n) => "");
    }
  }
  function deleteTask(index) {
    setTasks((t) => t.filter((element, i) => i !== index));
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index - 1];
      updatedTasks[index - 1] = temp;
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index + 1];
      updatedTasks[index + 1] = temp;
      setTasks(updatedTasks);
    }
  }
  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
          <input
            type="text"
            value={newTask}
            placeholder="Enter a task"
            onChange={handleInputChange}
          ></input>
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                Up
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
export default ToDoList;
