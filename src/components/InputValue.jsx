import Button from "./Button";
import { useNavigate } from "react-router-dom";

function InputValue({ onChange }) {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/rate");
  }

  return (
    <div>
      <div>
        <input
          id="amount"
          type="text"
          placeholder="양"
          onChange={onChange} />
        <select name="unit" onClick={(e) => { onChange({ target: { id: "unit", value: e.target.selectedOptions[0].innerText } }) }}>
          <option value="default">단위</option>
          <option value="gae">개</option>
          <option value="dan">단</option>
          <option value="g">g</option>
          <option value="ml">ml</option>
        </select>
      </div>
      <input id="cost" type="text" onChange={onChange} placeholder="가격" />
      <Button text="확인" color="grey" onClick={onClickButton}></Button>
    </div>
  )
}

export default InputValue;