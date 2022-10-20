import React from "react";

export const Task = ({ task }) => {
  return (
    // <div key={task.id}>
    <div className="taskBox">
      <span className="taskText">{task.text}</span>
        <button className="taskTrashButton">
          <i class="fas fa-trash-alt"></i>
        </button>
    </div>
  );
};
