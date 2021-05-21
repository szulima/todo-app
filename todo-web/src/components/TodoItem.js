import { Link } from "react-router-dom";

export default function TodoItem({
  item,
  handleRemoveItem,
  handleToggleDone,
  showDone,
}) {
  const done = item.done ? "done" : "";
  const hide = item.done && !showDone ? "hidden" : "";

  return (
    <>
      <li className={`${done} ${hide}`}>
        <input
          type="checkbox"
          // defaultChecked={!!item.done}
          onClick={() => handleToggleDone(item.id)}
        />
        <Link to={`/${item.id}`}>
          <p>{item.task}</p>
        </Link>
        <button onClick={() => handleRemoveItem(item.id)}>×</button>
      </li>
    </>
  );
}
