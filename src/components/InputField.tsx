import React from "react";
import "../styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (event: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAddTodo }: Props) => {
  return (
    <form className="input" onSubmit={handleAddTodo}>
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
