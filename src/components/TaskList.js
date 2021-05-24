import { useRecoilValue } from "recoil";
import { tasksState, searchState, loadingState } from "../atoms";
import Task from "./Task";

export default function TodoList() {
  const tasks = useRecoilValue(tasksState);
  const search = useRecoilValue(searchState);
  const loading = useRecoilValue(loadingState);

  const filteredTasks = getFilteredTasks(tasks, search);
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filteredTasks.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
        </ul>
      )}
    </>
  );
}

function getFilteredTasks(tasks, searchInput) {
  const regex = new RegExp(searchInput, "i");
  return tasks.filter((task) => regex.test(task.title));
}
