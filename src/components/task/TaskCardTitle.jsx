import React, { useState } from "react";

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today?");
  // const [taskCardTitle, setTaskCardTitle] = useState("default");

  const handleClick = () => {
    setIsClick(true);
    // setInputCardTitle()
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setInputCardTitle(inputCardTitle);
    setIsClick(false);
  };

  const handleOnBlur = () => {
    setIsClick(false);
  };

  return (
    <div className="taskCardTitleInputArea" onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
          className="taskCardTitleInput"
            type="text"
            autoFocus
            onChange={handleChange}
            onBlur={handleOnBlur}
            value={inputCardTitle}
            maxLength='10'
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};
