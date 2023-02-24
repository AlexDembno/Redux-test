import { useSelector, useDispatch } from "react-redux";
import statusFilters from "../../redux/constants";
import { getTasks } from "../../redux/selectors";
import { getStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/actions";
import styles from "./TaskInformation.module.css";

function TaskInformation() {
  const filter = useSelector(getStatusFilter);
  const tasks = useSelector(getTasks);

  const dispatch = useDispatch();
  const HandlFilterChange = () => dispatch(setStatusFilter(filter));

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <p>Tasks</p>
          <ul>
            <li>Activ:{count.activ}</li>
            <li>Completed:{count.completeds}</li>
          </ul>
        </div>
        <div>
          <p>Filters</p>
          <ul className={styles.list}>
            <li>
              <button
                type="button"
                selected={filter === statusFilters.all}
                onClick={() => HandlFilterChange(statusFilters.all)}
              >
                All
              </button>
            </li>
            <li>
              <button
                type="button"
                selected={filter === statusFilters.activ}
                onClick={() => HandlFilterChange(statusFilters.activ)}
              >
                Active
              </button>
            </li>
            <li>
              <button
                type="button"
                selected={filter === statusFilters.completed}
                onClick={() => HandlFilterChange(statusFilters.completed)}
              >
                Complated
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TaskInformation;
