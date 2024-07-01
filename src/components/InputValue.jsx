function InputValue({ onChange }) {
  return (
    <div className="m-auto flex w-600 flex-col gap-8">
      <div className="m-auto flex w-600 gap-5">
        <input
          className="flex w-full rounded-4xl bg-amber-300 p-4.5 text-center text-2xl placeholder-stone-400 outline-none"
          id="amount"
          type="text"
          placeholder="양"
          onChange={onChange}
        />
        <select
          className="w-52 rounded-4xl bg-amber-300 p-4.5 text-center text-2xl outline-none"
          name="unit"
          onChange={(e) => {
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
        className="m-auto flex w-600 rounded-4xl bg-amber-300 p-4.5 text-center text-2xl placeholder-stone-400 outline-none"
        id="cost"
        type="text"
        onChange={onChange}
        placeholder="가격"
      />
    </div>
  );
}

export default InputValue;
