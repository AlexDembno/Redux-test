import TaskInformation from "../TaskInformation/TaskInformation";
import Form from "../Form/Form";
import TaskList from "../TaskList/TaskList";

import styles from "./Menu.module.css";

function Menu() {
  return (
    <>
      <div className={styles.wrapper}>
        <TaskInformation />
        <Form />
        <TaskList />
      </div>
    </>
  );
}

export default Menu;
