import { useRecoilValue } from "recoil";
import { tasksState } from "../atoms";

export default function CountTask() {
  const tasks = useRecoilValue(tasksState);
  const taskCount = tasks.length;
  const taskDoneCount = tasks.reduce(
    (total, task) => (task.completed ? (total += 1) : total),
    0
  );

  return (
    <p>
      TASKS: {taskCount} (DONE {taskDoneCount} / UNDONE{" "}
      {taskCount - taskDoneCount})
    </p>
  );
}
