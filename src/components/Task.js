const Task = (props) => {
    const { task } = props;
    const { id, description, isDone } = task;
  
    return (
      <li className="list-group-item d-flex justify-content-between">
        {description}{" "}
        <div>
          <button type="button" className="btn btn-primary me-2 btn-sm">
            Edit
          </button>
  
          <button type="button" className="btn btn-danger btn-sm">
            Delete
          </button>
        </div>
      </li>
    );
  };
  export default Task;