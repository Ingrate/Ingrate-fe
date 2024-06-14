import "./Search.css";
import List from "./List";
import InputValue from "./InputValue";
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

function Search({ onChange }) {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState(false);

  const onClickSearch = () => {
    if (select === true) {
      setSelect(false);
    }
    onChange({ target: { id: "name", value: "" }, });
  }

  const onClickList = (e) => {
    onChange({ target: { id: "name", value: e.target.innerText }, });
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
          id="name"
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
      <div className={`list-wrapper ${select ? "" : "invisible"}`}>
        <InputValue onChange={onChange}></InputValue>
      </div>

    </div >
  )
}

export default Search;