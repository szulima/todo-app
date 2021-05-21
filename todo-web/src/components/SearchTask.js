import { useRecoilState } from "recoil";
import { searchState } from "../atoms";

export default function SearchTask() {
  const [search, setSearch] = useRecoilState(searchState);

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <input
      type="search"
      placeholder="⌕ Search"
      value={search}
      onChange={handleSearchChange}
    />
  );
}
