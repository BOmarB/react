import TaskList from "./TaskList";
import { useState } from "react";

export default function CategoryFilter({ selectedV, tasks, done }) {
  const [display, setdisplay] = useState(false);
  return (
    <>
      <button
        type="button"
        className="btn btn-primary ms-2"
        onClick={() => {
          setdisplay(!display);
        }}
      >
        Filter
      </button>
      <TaskList
        tasks={tasks}
        done={done}
        display={display}
        selectedV={selectedV}
      />
    </>
  );
}
