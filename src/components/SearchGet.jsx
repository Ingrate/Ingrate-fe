import axios from "axios";
import { useEffect, useState } from "react";

function SearchGet() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get("/ingredient/unit")
      .then((response) => {
        setDatas(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // 데이터가 없는 경우 초기 상태 처리 예시
  if (!datas.length) {
    return <div>Loading...</div>;
  }

  // 데이터가 있을 때 처리할 JSX
  return (
    <div>
      {datas.map((item) => (
        <div key={item.name}>
          <p>Name: {item.name}</p>
          <p>Unit: {item.unit}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchGet;
