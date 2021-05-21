import { useState } from "react";
import { useRecoilState } from "recoil";
import { tasksState } from "../atoms";
import TodoList from "../components/TodoList";
import CountTask from "../components/CountTask";
import AddItem from "../components/AddItem";

export default function HomePage() {
  const [todoItems, setTodoItems] = useRecoilState(tasksState);
  const [showDone, setShowDone] = useState(false);
  const [search, setSearch] = useState("");

  function handleRemoveItem(id) {
    setTodoItems((todoItems) => todoItems.filter((item) => item.id !== id));
  }

  function handleToggleDone(id) {
    setTodoItems((todoItems) => {
      const item = todoItems.find((item) => item.id === id);
      const index = todoItems.findIndex((item) => item.id === id);
      const newTodoItems = [
        ...todoItems.slice(0, index),
        { ...item, done: !item.done },
        ...todoItems.slice(index + 1),
      ];
      return newTodoItems;
    });
  }

  function handleToggleShowDone(e) {
    e.target.checked ? setShowDone(true) : setShowDone(false);
  }

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <h1>TODO</h1>
      <CountTask />

      <input
        type="search"
        placeholder="⌕ Search"
        value={search}
        onChange={handleSearchChange}
      />

      <label htmlFor="showDone">
        <input
          type="checkbox"
          // checked={!!showDone}
          id="showDone"
          onClick={handleToggleShowDone}
        />
        Show done
      </label>
      <TodoList
        todoItems={todoItems}
        handleRemoveItem={handleRemoveItem}
        handleToggleDone={handleToggleDone}
        showDone={showDone}
        search={search}
      />
      <AddItem />
    </>
  );
}
