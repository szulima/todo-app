import { useParams, Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tasksState } from "../atoms";

export default function TaskPage() {
  const taskList = useRecoilValue(tasksState);
  const { id } = useParams();
  const task = taskList.find((t) => t.id === Number(id));

  return (
    <>
      <Link to="/">{"< Go back"}</Link>

      <h1>{task.title}</h1>
      <p>done: {task.completed ? "yes!" : "not yet"}</p>
      <p>created: {task.created_at}</p>
      <p>updated: {task.updated_at}</p>
    </>
  );
}
