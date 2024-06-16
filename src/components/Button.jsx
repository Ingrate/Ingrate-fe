// import "./Button.css"

function Button({ text, color, onClick }) {
  return (
    <div className="Button">
      <button
        className={`w-36 rounded-lg bg-gray-200 p-4 text-lg`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
