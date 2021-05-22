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
  default: false,
});

// RMEOVE THIS ATOM if it turns out unnecessary
export const userIdState = atom({
  key: "userIdState",
  default: 1645,
});
