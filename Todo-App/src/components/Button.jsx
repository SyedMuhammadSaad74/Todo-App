function Button({text,onClick}) {
    return (
      <button onClick={onClick} className="p-1 px-4 m-1 rounded bg-orange-400 hover:bg-red-100">
        {text}
      </button>
    );
  }
  
  export default Button;