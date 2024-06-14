import "./Search.css";
import List from "./List";
import { useState } from "react";

const datas = [
  {
    id: 0,
    value: "파",
  },
  {
    id: 1,
    value: "파프리카",
  },
  {
    id: 2,
    value: "배추",
  },
  {
    id: 3,
    value: "양파",
  },
];

function Search() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState(false);

  const onClickSearch = () => {
    if (select === true) {
      setSelect(false);
    }
  }

  const onClickList = (e) => {
    console.dir(e);
    setSearch(e.target.innerText);
    setSelect(true);
  }

  const onChangeSearch = (e) => {
    setSearch(e.target.value);

  };

  const getFilteredData = () => {
    if (search === "") {
      return [];
    }
    return datas.filter((data) =>
      data.value.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredDatas = getFilteredData();
  return (
    <div className="Search">
      <div className="search-wrapper">
        <input
          value={search}
          onChange={onChangeSearch}
          onClick={onClickSearch}
          type="text"
          placeholder="검색" />
        <div className={`list-wrapper ${select ? "invisible" : ""}`}>
          {filteredDatas.map((data) => {
            return <List key={data.id} value={data.value} onClick={onClickList}></List>
          })}
        </div>
      </div>

    </div >
  )
}

export default Search;