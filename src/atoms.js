import { atom } from "recoil";

export const tasksState = atom({
  key: "tasksState",
  default: [],
});

export const searchState = atom({
  key: "searchState",
  default: "",
});

export const showDoneState = atom({
  key: "showDoneState",
  default: true,
});

export const userIdState = atom({
  key: "userIdState",
  default: 11379,
});

export const loadingState = atom({
  key: "loadingState",
  default: false,
});
