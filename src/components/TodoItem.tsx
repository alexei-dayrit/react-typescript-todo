import React, { useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import TodoList from "./TodoList";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem = ({ todo, todos, setTodos }: Props) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editTodoItem, setEditTodoItem] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (event: React.FormEvent, id: number) => {
    event.preventDefault();
    setTodos(todos.map((todo) => (
      todo.id === id ? {...todo, todo: editTodoItem} : todo
    )));
    setEditMode(false);
  }

  return (
    <form className="single-todo-form" onSubmit={(event) => handleEdit(event, todo.id)}>
      {editMode ? (
        <input
          value={editTodoItem}
          onChange={(event) => setEditTodoItem(event.target.value)}
          className="single-todo-text"
        />
      ) : todo.isCompleted ? (
        <s className="single-todo-text">{todo.todo}</s>
      ) : (
        <div className="single-todo-text">{todo.todo}</div>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!editMode && !todo.isCompleted) {
              setEditMode(!editMode);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TodoItem;
