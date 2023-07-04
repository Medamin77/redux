import Task from "./Task";
import { useSelector } from "react-redux";

const ListTask = () => {
  const { taskList } = useSelector((state) => state.taskReducer);
  console.log(taskList);
  return (
    <ul className="list-group mt-3">
     {taskList.map((task) => <Task task={task } key={task.id} />)}
    </ul>
  );
};
export default ListTask;