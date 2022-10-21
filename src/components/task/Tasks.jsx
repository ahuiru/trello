import React from "react";
import { Task } from "./Task";

export const Tasks = ({ taskList, setTaskList, inputText, setInputText }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div key={task.id}><Task task={task} taskList={taskList} setTaskList={setTaskList} /></div>
      ))}
    </div>
    // <div>
    //   <Task taskList={taskList} />
    // </div>
  );
};
