import { TodoForm } from "@/components/todos/todo-form"
import { cn } from "@/lib/utils"
import { Ionicons } from "@expo/vector-icons"
import { randomUUID } from "expo-crypto"
import { useState } from "react"
import { FlatList, Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

type Todo = {
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

  console.log(todos)

  return (
    <SafeAreaView className="relative bg-gray-200 flex-1">
      <TodoForm onSubmit={handleSubmit} />
      <TodoList items={todos} remove={removeTodo} update={updateTodo} />
    </SafeAreaView>
  )
}

export default TodosScreen

interface TodoListProps {
  items: Todo[]
  remove: (id: string) => void
  update: (todo: Todo) => void
}

const TodoList = ({ items, remove, update }: TodoListProps) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <View
          key={item.id}
          className="p-4 flex-row gap-4 items-center border-b border-black/10 border-dashed"
        >
          <Pressable onPress={() => update({ ...item, completed: true })}>
            <Ionicons
              name={item.completed ? "checkbox" : "checkbox-outline"}
              size={20}
            />
          </Pressable>
          <Text
            className={cn("text-lg grow", { "line-through": item.completed })}
          >
            {item.title}
          </Text>
          <Pressable onPress={() => remove(item.id)}>
            <Ionicons name="trash" size={20} />
          </Pressable>
        </View>
      )}
    />
  )
}
