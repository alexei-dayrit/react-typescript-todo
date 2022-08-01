import React from 'react';
import { Todo } from '../model';
import '../styles.css';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}: Props) => {
  return (
    <div className='todo-list'>
      {todos.map(todo => (
        <li key={todo.id}>{todo.todo}</li>
      ))}
    </div>
  )
}

export default TodoList
