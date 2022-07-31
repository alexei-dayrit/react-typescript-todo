import React from "react";
import "../styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Enter a task"
        className="input-box"
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
      />
      <button className="submit-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
