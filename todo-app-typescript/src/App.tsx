import { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
  {
    id: '1',
    title: 'Ver tutorial Laravel',
    completed: false
  },
  {
    id: '2',
    title: 'Terminar Curso .Net',
    completed: false
  },
  {
    id: '3',
    title: 'Practicar TypeScript',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove =(id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos
        onRemoveTodo={handleRemove}
        todos={todos}
      />
    </div>
  )
}

export default App
