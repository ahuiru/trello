import React from "react";

export const Task = ({ task, taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id))
    console.log(taskList)
  };

  return (
    // <div key={task.id}>
    <div className="taskBox">
      <span className="taskText">{task.text}</span>
      <button className="taskTrashButton" onClick={() => handleDelete(task.id)}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};
