import { useSelector } from "react-redux";
import statusFilters from "../../redux/constants";
import { getTasks, getStatusFilter } from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";

import styles from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

function TaskList() {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(tasks.id));
  const handlToggle = () => dispatch(toggleCompleted(tasks.id));

  return (
    <>
      <div>
        <ul>
          {visibleTasks.map((task) => (
            <li key={task.id} className={styles.item}>
              <input
                onChange={handlToggle}
                type="checkbox"
                checked={tasks.completed}
              />
              {task.text}
              <button
                onClick={handleDelete}
                className={styles.button}
                type="button"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
