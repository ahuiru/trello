import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";

const reorder = (taskCardList, startIndex, endIndex) => {
  const remove = taskCardList.splice(startIndex, 1);
  taskCardList.splice(endIndex, 0, remove[0]);
};

export const TaskCards = () => {
  const [taskCardList, setTaskCardList] = useState([]);

  const onDragEnd = (result) => {
    reorder(taskCardList, result.source.index, result.destination.index);
    setTaskCardList(taskCardList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="taskCardArea"
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            {taskCardList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                taskCard={taskCard}
                taskCardList={taskCardList}
                setTaskCardList={setTaskCardList}
                index={index}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCard={taskCardList}
              setTaskCard={setTaskCardList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
