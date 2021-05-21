import TodoList from "../components/TodoList";
import CountTask from "../components/CountTask";
import AddItem from "../components/AddItem";
import SearchTask from "../components/SearchTask";
import ShowDoneTask from "../components/ShowDoneTask";

export default function HomePage() {
  return (
    <>
      <h1>TODO</h1>
      <CountTask />
      <SearchTask />
      <ShowDoneTask />
      <TodoList />
      <AddItem />
    </>
  );
}
