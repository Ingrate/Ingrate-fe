function Modal() {
  return (
    <div className="flex justify-center">
      <div className="absolute z-10 mt-5 h-96 w-11/12 rounded-4xl bg-white"></div>
      <div
        className={`absolute left-0 top-0 h-screen w-screen bg-black opacity-30`}
      ></div>
    </div>
  );
}

export default Modal;
