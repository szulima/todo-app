import { Link } from "react-router-dom";

function TodoItem({ item, handleRemoveItem, handleToggleDone, showDone }) {
  const done = item.done ? "done" : "";
  const hide = item.done && !showDone ? "hidden" : "";

  return (
    <>
      <li className={`${done} ${hide}`}>
        <input type="checkbox" onClick={() => handleToggleDone(item.id)} />
        <Link to={`/${item.id}`}>
          <p>{item.task}</p>
        </Link>
        <button onClick={() => handleRemoveItem(item.id)}>×</button>
      </li>
    </>
  );
}

export default function TodoList({
  todoItems,
  handleRemoveItem,
  handleToggleDone,
  showDone,
  search,
}) {
  const filteredItems = getFilteredTasks(todoItems, search);
  return (
    <ul>
      {filteredItems.map((item) => {
        return (
          <TodoItem
            item={item}
            key={item.id}
            handleRemoveItem={handleRemoveItem}
            handleToggleDone={handleToggleDone}
            showDone={showDone}
          />
        );
      })}
    </ul>
  );
}

function getFilteredTasks(tasks, searchInput) {
  const regex = new RegExp(searchInput, "i");
  return tasks.filter((item) => regex.test(item.task));
}
