function InputValue({ onChange }) {
  return (
    <div className="w-600 m-auto flex flex-col gap-5">
      <div className="w-600 m-auto flex gap-5">
        <input
          className="rounded-4xl flex w-full bg-amber-300 p-6 text-center text-2xl outline-none"
          id="amount"
          type="text"
          placeholder="양"
          onChange={onChange}
        />
        <select
          className="rounded-4xl w-52 bg-amber-300 p-6 text-center text-2xl outline-none"
          name="unit"
          onClick={(e) => {
            onChange({
              target: {
                id: "unit",
                value: e.target.selectedOptions[0].innerText,
              },
            });
          }}
        >
          <option value="default">단위</option>
          <option value="gae">개</option>
          <option value="dan">단</option>
          <option value="g">g</option>
          <option value="ml">ml</option>
        </select>
      </div>
      <input
        className="w-600 rounded-4xl m-auto flex bg-amber-300 p-6 text-center text-2xl outline-none"
        id="cost"
        type="text"
        onChange={onChange}
        placeholder="가격"
      />
    </div>
  );
}

export default InputValue;
