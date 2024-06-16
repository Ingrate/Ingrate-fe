import Info from "./Info";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Rate({ ingred }) {
  const nav = useNavigate();

  return (
    <div className="Rate">
      <div className="info-section">
        <Info {...ingred}></Info>
      </div>
      <div className="rate-section">
        <h3>99점입니다!</h3>
        <div>나쁘지 않은데요?</div>
        <Button
          text="메인으로"
          onClick={() => {
            nav("/main");
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
