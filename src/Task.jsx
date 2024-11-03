import { useState } from "react";
import CategoryFilter from "./CategoryFilter";

export default function Task() {
  const [aTask, setaTask] = useState([]);
  const [selectedV, setSelectedV] = useState("");
  const [oTask, setoTask] = useState({
    task: "",
    category: "",
    isDone: false,
  });
  function buttonHandler() {
    if (oTask.task && oTask.category) {
      setaTask([...aTask, { ...oTask, isDone: false }]);
      setoTask({ ...oTask, task: "", category: "" });
    }
  }
  function handleInputChange(event) {
    const { name, value } = event.target;
    setoTask({ ...oTask, [name]: value });
  }
  const selectedFilter = (event) => {
    setSelectedV(event.target.value);
  };
  const isDone = (index) => {
    const updateIsDone = aTask.map((task, i) =>
      i === index ? { ...task, isDone: !task.isDone } : task
    );
    setaTask(updateIsDone);
  };

  return (
    <>
      <form action="">
        <input
          type="text"
          name="task"
          placeholder="Add Task"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="1">
          Work
          <input
            type="radio"
            name="category"
            id="1"
            value="Work"
            onChange={handleInputChange}
            onClick={selectedFilter}
          />
        </label>
        <br />

        <label htmlFor="2">
          Study
          <input
            type="radio"
            name="category"
            id=""
            value="Study"
            onChange={handleInputChange}
            onClick={selectedFilter}
          />
        </label>
        <br />

        <label htmlFor="3">
          Personal
          <input
            type="radio"
            name="category"
            id=""
            value="Personal"
            onChange={handleInputChange}
            onClick={selectedFilter}
          />
        </label>
        <br />
        <br />
        <input
          className="btn btn-primary"
          type="button"
          value="Add"
          onClick={buttonHandler}
        />
        <CategoryFilter selectedV={selectedV} tasks={aTask} done={isDone} />
      </form>
      {/* {console.log(aTask.push(inputV))} */}
    </>
  );
}
