import "./Search.css";
import List from "./List";

function Search() {
  return (
    <div className="Search">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="검색" />
        <div className="list-wrapper">
          <List value={"파"} unit={"g"}></List>
        </div>
      </div>
    </div>
  )
}

export default Search;