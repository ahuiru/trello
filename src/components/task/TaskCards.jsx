import React, { useState } from "react";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";

export const TaskCards = () => {
  const [taskCardList, setTaskCardList] = useState([]);

  return (
    <div className="taskCardArea">
      {taskCardList.map((taskCard) => (
        <TaskCard key={taskCard.id}/>
      ))}
      <AddTaskCardButton
        taskCard={taskCardList}
        setTaskCard={setTaskCardList}
      />
    </div>
  );
};
