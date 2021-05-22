import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
// import { useEffect } from "react";
import { tasksState, showDoneState } from "../atoms";

export default function TodoItem({ task }) {
  const setTasks = useSetRecoilState(tasksState);
  // const [tasks, setTasks] = useRecoilState(tasksState);
  const showDone = useRecoilValue(showDoneState);

  function handleRemoveItem(id) {
    setTasks((tasks) => tasks.filter((item) => item.id !== id));
  }

  function handleToggleDone() {
    setTasks((tasks) => {
      const index = tasks.findIndex((item) => item.id === task.id);
      const newTodoItems = [
        ...tasks.slice(0, index),
        { ...task, completed: !task.completed },
        ...tasks.slice(index + 1),
      ];
      return newTodoItems;
    });
  }

  // useEffect(() => {
  //   const doneCheckbox = document.querySelector(".doneCheckbox");
  //   // const item = tasks.find((i) => i.id === task.id);
  //   // console.log(item);
  //   // console.log(task.done, item.done, doneCheckbox.checked);
  //   doneCheckbox.checked = task.done ? true : false;
  //   // console.log(doneCheckbox);
  // });

  const done = task.completed ? "done" : "";
  const hide = task.completed && !showDone ? "hidden" : "";

  return (
    <li className={`${done} ${hide}`}>
      <input
        type="checkbox"
        // defaultChecked={!!item.done}
        onClick={() => handleToggleDone()}
        className="doneCheckbox"
      />
      <Link to={`/${task.id}`}>
        <p>{task.title}</p>
      </Link>
      <button onClick={() => handleRemoveItem(task.id)}>×</button>
    </li>
  );
}
