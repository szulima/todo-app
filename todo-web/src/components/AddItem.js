import { useRecoilState } from "recoil";
import { useState } from "react";
import { tasksState } from "../atoms";

export default function AddItem() {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const [input, setInput] = useState("");

  function assignId() {
    const maxId = tasks.reduce(
      (max, item) => (item.id > max ? item.id : max),
      0
    );
    return maxId + 1;
  }

  function handleAddItemClick(e) {
    if (e.code !== "Enter" && e.type !== "click") return;
    const newId = assignId();
    setTasks((todoItems) => [
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

  return (
    <>
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
