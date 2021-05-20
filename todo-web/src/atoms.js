import { atom } from "recoil";

export const tasksState = atom({
  key: "tasksState",
  default: [
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
  ],
});
