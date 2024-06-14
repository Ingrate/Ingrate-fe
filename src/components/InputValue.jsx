import Button from "./Button";
import { useNavigate } from "react-router-dom";

function InputValue() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/rate");
  }

  return (
    <div>
      <div className="amount">
        <input type="text" placeholder="양" />
        <select name="unit" id="">
          <option value="default">단위</option>
          <option value="gae">개</option>
          <option value="dan">단</option>
          <option value="g">g</option>
          <option value="ml">ml</option>
        </select>
      </div>
      <input type="text" placeholder="가격" />
      <Button text="확인" color="grey" onClick={onClickButton}></Button>
    </div>
  )
}

export default InputValue;