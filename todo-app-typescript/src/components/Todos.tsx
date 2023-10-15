import { type TodoId, type Todo as TodoType, type ListOfTodos } from '../types' // No necesitas 'type' en la importación
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = ({ onRemoveTodo, onToggleCompleteTodo, todos }) => {
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
            onToggleCompleteTodo={onToggleCompleteTodo}
            onRemoveTodo = {onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  )
}
