import { useRecoilState } from "recoil";
import { showDoneState } from "../atoms";

export default function ShowDoneTask() {
  const [showDone, setShowDone] = useRecoilState(showDoneState);

  function handleToggleShowDone(e) {
    e.target.checked ? setShowDone(true) : setShowDone(false);
  }

  return (
    <label htmlFor="showDone">
      <input
        type="checkbox"
        id="showDone"
        checked={showDone}
        onChange={handleToggleShowDone}
        className="showDoneCheckbox"
      />
      Show done
    </label>
  );
}
