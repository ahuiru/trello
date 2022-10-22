import React, { useState } from "react";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./input/TaskAddInput";
import { Tasks } from "./Tasks";

export const TaskCard = ({ taskCard, taskCardList, setTaskCardList }) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="taskCard">
      <div className="taskCardTitleAndTaskCardDeleteButton">
        <TaskCardTitle />
        <TaskCardDeleteButton
          taskCard={taskCard}
          taskCardList={taskCardList}
          setTaskCardList={setTaskCardList}
        />
      </div>
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
};
