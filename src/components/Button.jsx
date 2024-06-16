// import "./Button.css"

function Button({ text, color, onClick }) {
  return (
    <div className="Button">
      <button
        className={`w-40 rounded-sm bg-gray-200 p-4 text-lg`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
