import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { tasksState, searchState } from "../atoms";
import TodoList from "../components/TodoList";
import CountTask from "../components/CountTask";
import AddItem from "../components/AddItem";
import SearchTask from "../components/SearchTask";

export default function HomePage() {
  const [todoItems, setTodoItems] = useRecoilState(tasksState);
  const [showDone, setShowDone] = useState(false);
  const search = useRecoilValue(searchState);

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

  return (
    <>
      <h1>TODO</h1>
      <CountTask />
      <SearchTask />

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
