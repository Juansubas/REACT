import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId, type Todo as TodoType, type FilterValue } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleComplete = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    console.log(filter)
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  return (
    <div className="todoapp">
      <Todos
        onToggleCompleteTodo={handleComplete}
        onRemoveTodo={handleRemove}
        todos={todos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={() => {}}
        handleFilterChange={handleFilterChange}
      >

      </Footer>
    </div>
  )
}

export default App
