import { ulid } from "ulid";

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
    if (inputText === "") return;
    setTaskList([
      ...taskList,
      {
        text: inputText,
        id: ulid(),
      },
    ]);
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
