import React from "react";
import { ulid } from "ulid";

export const AddTaskCardButton = ({ taskCard, setTaskCard }) => {
  const addTaskCard = () => {
    setTaskCard([
      ...taskCard,
      {
        id: ulid(),
        draggableId: `task-${ulid()}`
      },
    ]);
  };

  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
