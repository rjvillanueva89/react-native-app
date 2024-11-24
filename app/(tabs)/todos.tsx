import { TodoForm } from '@/components/todos/form'
import { TodoList } from '@/components/todos/list'
import { randomUUID } from 'expo-crypto'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export type Todo = {
  id: string
  title: string
  completed: boolean
}

const TodosScreen = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (todo: Todo) => {
    setTodos((current) => [...current, todo])
  }

  const updateTodo = (updatedTodo: Todo) => {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
      )
    )
  }

  const removeTodo = (id: string) => {
    setTodos((current) => current.filter((item) => item.id != id))
  }

  const handleSubmit = (title: string) => {
    const id = randomUUID()
    addTodo({ id, title, completed: false })
  }

  return (
    <SafeAreaView className="relative bg-gray-200 flex-1">
      <TodoForm onSubmit={handleSubmit} />
      <TodoList items={todos} remove={removeTodo} update={updateTodo} />
    </SafeAreaView>
  )
}

export default TodosScreen
