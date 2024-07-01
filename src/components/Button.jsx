// import "./Button.css"

function Button({ text, color, onClick }) {
  return (
    <div className="Button">
      <button
        className={`w-36 rounded-md border-2 border-gray-300 bg-gray-200 pb-3 pt-3 text-lg`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
