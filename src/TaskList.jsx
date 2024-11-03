export default function TaskList({ tasks, done, display, selectedV }) {
  return (
    <div>
      <hr />
      <table border="2" className="table table-striped table-bordered mt-3">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Category</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{task.task}</td>
                <td>{task.category}</td>
                <td>
                  <input
                    type="button"
                    value={task.isDone ? "Done" : "Not Done"}
                    className={
                      task.isDone ? "btn btn-primary" : "btn btn-secondary"
                    }
                    onClick={() => done(index)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No tasks available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
