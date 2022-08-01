import React from 'react'
import { Todo } from '../model'

interface Props {
  todo: Todo;
  key: number;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem = ({todo, key, todos, setTodos}:Props) => {
  return (
    <div>

    </div>
  )
}

export default TodoItem
