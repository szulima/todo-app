import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tasksState, showDoneState } from "../atoms";

export default function TodoItem({ task }) {
  const setTasks = useSetRecoilState(tasksState);
  const showDone = useRecoilValue(showDoneState);

  function handleRemoveItem(id) {
    setTasks((tasks) => tasks.filter((item) => item.id !== id));
  }

  function handleToggleDone() {
    setTasks((tasks) => {
      const index = tasks.findIndex((item) => item.id === task.id);
      const newTodoItems = [
        ...tasks.slice(0, index),
        { ...task, done: !task.done },
        ...tasks.slice(index + 1),
      ];
      return newTodoItems;
    });
  }

  const done = task.done ? "done" : "";
  const hide = task.done && !showDone ? "hidden" : "";

  return (
    <li className={`${done} ${hide}`}>
      <input
        type="checkbox"
        // defaultChecked={!!item.done}
        onClick={() => handleToggleDone()}
      />
      <Link to={`/${task.id}`}>
        <p>{task.task}</p>
      </Link>
      <button onClick={() => handleRemoveItem(task.id)}>×</button>
    </li>
  );
}
