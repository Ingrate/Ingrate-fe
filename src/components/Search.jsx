// import "./Search.css";
import List from "./List";
import InputValue from "./InputValue";
import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

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
  const nav = useNavigate();

  const onClickSearch = () => {
    if (select === true) {
      setSelect(false);
    }
    onChange({ target: { id: "name", value: "" } });
  };

  const onClickList = (e) => {
    onChange({ target: { id: "name", value: e.target.innerText } });
    setSearch(e.target.innerText);
    setSelect(true);
  };

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return [];
    }
    return datas.filter((data) =>
      data.value.toLowerCase().includes(search.toLowerCase()),
    );
  };

  const filteredDatas = getFilteredData();
  return (
    <div className="Search flex flex-col gap-4">
      <div className="search-wrapper w-600 rounded-4xl m-auto flex flex-col justify-center gap-4 bg-amber-300 p-4 align-middle">
        <input
          className="bg-transparent p-1 text-center text-2xl outline-none"
          id="name"
          value={search}
          onChange={onChangeSearch}
          onClick={onClickSearch}
          type="text"
          placeholder="식재료 이름으로 검색하세요"
        />
        <div
          className={`list-wrapper ${select ? "hidden" : ""} rounded-3xl bg-white text-lg`}
        >
          {filteredDatas.map((data) => {
            return (
              <List
                key={data.id}
                value={data.value}
                onClick={onClickList}
              ></List>
            );
          })}
        </div>
      </div>
      <div
        className={`list-wrapper m-4 flex flex-col gap-10 ${select ? "" : "hidden"}`}
      >
        <InputValue onChange={onChange}></InputValue>
        <div className="m-auto flex gap-7">
          <Button
            text="비교하기"
            color="grey"
            onClick={() => {
              nav("/rate");
            }}
          ></Button>
          <Button
            text="등록하기"
            color="grey"
            onClick={() => {
              nav("/save");
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default Search;
