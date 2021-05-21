import TodoItem from "./TodoItem";

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
