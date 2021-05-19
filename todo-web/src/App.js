import React, { useState } from "react";
import TodoList from "./TodoList";
import { Switch, Route, useParams, Link } from "react-router-dom";

function ItemDetails({ todoItems }) {
  const { id } = useParams();
  const item = todoItems.find((i) => i.id === Number(id));

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

export default function App() {
  const [input, setInput] = useState("");
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      task: "climb a tree",
      done: false,
      created: new Date(),
    },
    {
      id: 2,
      task: "code app",
      done: false,
      created: new Date(),
    },
  ]);
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
    setTodoItems([
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
    setTodoItems(todoItems.filter((item) => item.id !== id));
  }

  function handleToggleDone(id) {
    let newTodoItems = [...todoItems];
    let item = newTodoItems.find((i) => i.id === id);
    item.done = !item.done;
    setTodoItems(newTodoItems);
    // e.target.checked = !e.target.checked;
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
          <ItemDetails todoItems={todoItems} />
        </Route>
      </Switch>
    </>
  );
}
