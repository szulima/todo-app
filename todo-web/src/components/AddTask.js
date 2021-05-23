import { useSetRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";
import { tasksState, userIdState } from "../atoms";

export default function AddTask() {
  const setTasks = useSetRecoilState(tasksState);
  const [input, setInput] = useState("");
  const userId = useRecoilValue(userIdState);

  async function handleAddItemClick(e) {
    if (e.code !== "Enter" && e.type !== "click") return;
    if (!input) return;

    async function postTask() {
      // console.log("post task:", userId);
      const endpoint = `https://gorest.co.in/public-api/users/${userId}/todos`;
      const promise = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " +
            "e24613527fa0a33f38c3f650049c4bd6876276dd89530c4ab3dbe590576bfaf9",
        },
        body: JSON.stringify({
          title: input,
          completed: false,
        }),
      });
      const response = await promise.json();
      return response.data;
    }
    const task = await postTask();

    setTasks((todoItems) => [
      ...todoItems,
      {
        id: task.id,
        title: task.title,
        completed: task.completed,
        created_at: task.created_at,
        updated_at: task.updated_at,
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
