/** @jsxImportSource theme-ui */
import { Container, Button } from "theme-ui";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tasksState, showDoneState } from "../atoms";

export default function Task({ task }) {
  const setTasks = useSetRecoilState(tasksState);
  const showDone = useRecoilValue(showDoneState);

  function handleRemoveTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
    removeTaskFromServer(id);
  }

  function handleToggleDone(id) {
    setTasks((tasks) => {
      const index = tasks.findIndex((item) => item.id === task.id);
      const newTasks = [
        ...tasks.slice(0, index),
        { ...task, completed: !task.completed },
        ...tasks.slice(index + 1),
      ];
      return newTasks;
    });
    updateToggleDoneTaskOnServer(task, id);
  }

  const done = task.completed ? "done" : "";
  const hide = task.completed && !showDone ? "hidden" : "";

  return (
    <li className={`${hide}`}>
      <Container variant="li">
        <label
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bg: "secondary",
          }}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleDone(task.id)}
            className="doneCheckbox"
          />
        </label>
        <Link to={`/${task.id}`} sx={{ textDecoration: "none" }}>
          <p className={done} sx={{ textTransform: "uppercase", pl: "10px" }}>
            {task.title}
          </p>
        </Link>
        <Button
          onClick={() => handleRemoveTask(task.id)}
          sx={{ fontSize: 2, bg: "red" }}
        >
          ×
        </Button>
      </Container>
    </li>
  );
}

async function removeTaskFromServer(id) {
  const endpoint = `https://gorest.co.in/public-api/todos/${id}`;
  await fetch(endpoint, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " +
        "e24613527fa0a33f38c3f650049c4bd6876276dd89530c4ab3dbe590576bfaf9",
    },
  });
}

async function updateToggleDoneTaskOnServer(task, id) {
  const endpoint = `https://gorest.co.in/public-api/todos/${id}`;
  await fetch(endpoint, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " +
        "e24613527fa0a33f38c3f650049c4bd6876276dd89530c4ab3dbe590576bfaf9",
    },
    body: JSON.stringify({
      completed: !task.completed,
    }),
  });
}
