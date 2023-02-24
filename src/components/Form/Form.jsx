import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasksSlice";
import styles from "./Form.module.css";

function Form() {
  const dispatch = useDispatch();

  function hendlSubmit(e) {
    e.preventDefault();
    const form = e.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  }

  return (
    <>
      <form onSubmit={hendlSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="text"
          placeholder="Enter task text"
        />
        <button className={styles.button} type="submit">
          Add task
        </button>
      </form>
    </>
  );
}

export default Form;
