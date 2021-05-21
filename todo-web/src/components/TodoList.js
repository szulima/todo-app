import { useRecoilValue } from "recoil";
import { tasksState, searchState } from "../atoms";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const tasks = useRecoilValue(tasksState);
  const search = useRecoilValue(searchState);

  const filteredTasks = getFilteredTasks(tasks, search);
  return (
    <ul>
      {filteredTasks.map((task) => {
        return <TodoItem key={task.id} task={task} />;
      })}
    </ul>
  );
}

function getFilteredTasks(tasks, searchInput) {
  const regex = new RegExp(searchInput, "i");
  return tasks.filter((item) => regex.test(item.task));
}
