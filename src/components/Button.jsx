// import "./Button.css"

function Button({ text, color, onClick }) {
  return (
    <div className="Button">
      <button
        className={`w-40 rounded-md border-2 ${color === "gray" ? "border-gray-300 bg-gray-200" : "border-amber-400 bg-amber-300"} pb-3 pt-3 text-lg`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
