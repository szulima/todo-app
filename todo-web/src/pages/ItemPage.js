import { useParams, Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tasksState } from "../atoms";

export default function ItemPage() {
  const taskList = useRecoilValue(tasksState);
  const { id } = useParams();
  const item = taskList.find((i) => i.id === Number(id));

  return (
    <>
      <Link to="/">{"< Go back"}</Link>
      <h1>{item.title}</h1>
      <p>done: {item.completed ? "yes!" : "not yet"}</p>
      <p>created: {item.created_at}</p>
      <p>updated: {item.updated_at}</p>
    </>
  );
}
