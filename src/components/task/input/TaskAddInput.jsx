export const TaskAddInput = ({
  taskList,
  setTaskList,
  inputText,
  setInputText,
}) => {

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      {
        text: inputText,
        // id: inputText.length,
      },
    ]);
    // console.log(taskList);
    // console.log(inputText);
    setInputText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};
