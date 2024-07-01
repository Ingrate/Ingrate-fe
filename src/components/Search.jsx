import "./Search.css";
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
  {
    id: 4,
    value: "쪽파",
  },
  {
    id: 5,
    value: "대파",
  },
  {
    id: 6,
    value: "파프리카 파우더",
  },
  {
    id: 7,
    value: "베이킹 파우더",
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
      <div className="search-wrapper m-auto flex w-600 flex-col justify-center rounded-4xl bg-amber-300 p-4 align-middle">
        <input
          className="bg-transparent p-1 text-center text-2xl placeholder-stone-400 outline-none"
          id="name"
          value={search}
          onChange={onChangeSearch}
          onClick={onClickSearch}
          type="text"
          placeholder="식재료 이름으로 검색하세요"
        />
        <div
          className={`list-wrapper ${select ? "hidden" : ""} ${filteredDatas.length ? "scroll-gradient relative mt-4" : ""} max-h-64 overflow-y-auto rounded-3xl bg-white text-lg`}
        >
          <div
            className={`${filteredDatas.length ? "" : "hidden"} pointer-events-none sticky top-0 h-8 bg-gradient-to-b from-white to-transparent`}
          ></div>
          {filteredDatas.map((data) => {
            return (
              <List
                key={data.id}
                value={data.value}
                onClick={onClickList}
              ></List>
            );
          })}
          <div
            className={`${filteredDatas.length ? "" : "hidden"} pointer-events-none sticky bottom-0 h-8 bg-gradient-to-t from-white to-transparent`}
          ></div>
        </div>
      </div>
      <div
        className={`list-wrapper m-4 flex flex-col gap-7 ${select ? "" : "hidden"}`}
      >
        <InputValue onChange={onChange}></InputValue>
        <div className="m-auto flex w-600 justify-between p-1">
          <Button
            text="뒤로가기"
            color="gray"
            onClick={() => {
              setSearch("");
              onClickSearch();
            }}
          ></Button>
          <div className="flex gap-6">
            <Button
              text="비교하기"
              color="gray"
              onClick={() => {
                nav("/rate");
              }}
            ></Button>
            <Button
              text="등록하기"
              color="gray"
              onClick={() => {
                nav("/save");
              }}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
