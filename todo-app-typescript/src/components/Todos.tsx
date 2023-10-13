import { type ListOfTodos } from '../types' // No necesitas 'type' en la importación
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: (id: string) => void
}

export const Todos: React.FC<Props> = ({ onRemoveTodo, todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={todo.completed ? 'completed' : ''}
        >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo = {onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  )
}
