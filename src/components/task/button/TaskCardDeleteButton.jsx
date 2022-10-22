import React from "react";

export const TaskCardDeleteButton = ({
  taskCard,
  taskCardList,
  setTaskCardList,
}) => {
  const deleteTaskCard = (id) => {
    // console.log(taskCardList);
    setTaskCardList(taskCardList.filter((taskCard) => taskCard.id !== id));
  };

  return (
    <div>
      <button onClick={() => deleteTaskCard(taskCard.id)}><i className="fas fa-times"></i></button>
    </div>
  );
};
