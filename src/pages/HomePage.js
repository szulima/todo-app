import TaskList from "../components/TaskList";
import CountTask from "../components/CountTask";
import AddTask from "../components/AddTask";
import SearchTask from "../components/SearchTask";
import ShowDoneTask from "../components/ShowDoneTask";

export default function HomePage() {
  return (
    <>
      <h1>TODO</h1>
      <CountTask />
      <SearchTask />
      <ShowDoneTask />
      <TaskList />
      <AddTask />
    </>
  );
}
