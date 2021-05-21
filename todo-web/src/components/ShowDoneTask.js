import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { showDoneState } from "../atoms";

export default function ShowDoneTask() {
  const [showDone, setShowDone] = useRecoilState(showDoneState);

  function handleToggleShowDone(e) {
    e.target.checked ? setShowDone(true) : setShowDone(false);
  }

  // check checkbox on mount if showDone
  useEffect(() => {
    const showDoneCheckbox = document.querySelector(".showDoneCheckbox");
    showDoneCheckbox.checked = showDone ? true : false;
  }, [showDone]);

  return (
    <label htmlFor="showDone">
      <input
        type="checkbox"
        id="showDone"
        onClick={handleToggleShowDone}
        className="showDoneCheckbox"
      />
      Show done
    </label>
  );
}
