import React, { useState } from "react";
import TodoList from "./TodoList";
import { Switch, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tasksState } from "../atoms";
import ItemPage from "../pages/ItemPage";

export default function App() {
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

  const taskCount = todoItems.length;
  const taskDoneCount = todoItems.reduce(
    (total, item) => (item.done ? (total += 1) : total),
    0
  );
  return (
    <>
      <Switch>
        <Route exact path="/">
          {/* <HomePage /> */}
          <h1>TODO</h1>
          <p>
            TASKS: {taskCount} (DONE {taskDoneCount} / UNDONE{" "}
            {taskCount - taskDoneCount})
          </p>

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
        </Route>

        <Route path="/:id">
          {/* <ItemDetails todoItems={todoItems} /> */}
          <ItemPage />
        </Route>
      </Switch>
    </>
  );
}
