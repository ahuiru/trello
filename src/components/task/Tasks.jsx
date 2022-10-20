import React from "react";
import { Task } from "./Task";

export const Tasks = ({ taskList, setTaskList, inputText, setInputText }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div><Task task={task} /></div>
      ))}
    </div>
    // <div>
    //   <Task taskList={taskList} />
    // </div>
  );
};
