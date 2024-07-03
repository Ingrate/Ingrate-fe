import Info from "./Info";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Rate({ ingred, initIngred }) {
  const nav = useNavigate();
  const [rate, setRate] = useState(0);

  useEffect(() => {
    axios
      .post("/ingredient/rate", ingred)
      .then((response) => {
        setRate(response.data.rate);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="Rate">
      <div className="info-section">
        <Info {...ingred}></Info>
      </div>
      <div className="rate-section">
        <h3>{rate}점입니다!</h3>
        <div>나쁘지 않은데요?</div>
        {/* TODO: rate 범위에 따라 다른 text 출력하도록 수정 필요 */}
        <Button
          text="메인으로"
          onClick={() => {
            nav("/main");
            initIngred();
          }}
        ></Button>
        <Button
          text="등록하기"
          onClick={() => {
            nav("/save");
          }}
        ></Button>
      </div>
    </div>
  );
}

export default Rate;
