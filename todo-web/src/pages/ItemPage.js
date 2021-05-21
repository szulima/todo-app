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
      <h1>{item.task}</h1>
      <p>
        created: {item.created.toLocaleDateString()}{" "}
        {item.created.toLocaleTimeString()}
      </p>
      <p>done: {item.done ? "yes!" : "not yet"}</p>
    </>
  );
}
