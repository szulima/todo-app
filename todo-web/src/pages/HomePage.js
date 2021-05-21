import { useState } from "react";
import { useRecoilState } from "recoil";
import { tasksState } from "../atoms";
import TodoList from "../components/TodoList";
import CountTask from "../components/CountTask";

export default function HomePage() {
  const [input, setInput] = useState("");
  const [todoItems, setTodoItems] = useRecoilState(tasksState);
  const [showDone, setShowDone] = useState(false);
  const [search, setSearch] = useState("");

  function assignId() {
    const maxId = todoItems.reduce(
      (max, item) => (item.id > max ? item.id : max),
      0
    );
    return maxId + 1;
  }

  function handleAddItemClick(e) {
    if (e.code !== "Enter" && e.type !== "click") return;
    const newId = assignId();
    setTodoItems((todoItems) => [
      ...todoItems,
      {
        id: newId,
        task: input,
        done: false,
        created: new Date(),
      },
    ]);
    setInput("");
  }

  function handleInputChange(e) {
    setInput(e.target.value);
  }

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

      <input
        type="text"
        value={input}
        placeholder=">what do we do?"
        autoFocus
        onChange={handleInputChange}
        onKeyDown={handleAddItemClick}
      />
      <button type="submit" onClick={handleAddItemClick}>
        add
      </button>
    </>
  );
}
