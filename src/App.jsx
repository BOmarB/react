// import logo from "./logo.svg";
import "./App.css";
import Task from "./Task";
// import TaskList from "./TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Task.css";

function App() {
  return (
    <>
      {/* <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      ></link> */}
      <Task />
      {/* <TaskList /> */}
    </>
  );
}

export default App;
