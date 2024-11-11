import { TodoForm } from "@/components/todos/todo-form"
import { cn } from "@/lib/utils"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import { FlatList, Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

type Todo = {
  id: number
  title: string
  completed: boolean
}

const TodosScreen = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (todo: Todo) => {
    setTodos((current) => [...current, todo])
  }

  const removeTodo = (id: number) => {
    setTodos((current) => current.filter((item) => item.id != id))
  }

  const handleSubmit = (title: string) => {
    addTodo({ id: todos.length, title, completed: false })
  }

  return (
    <SafeAreaView className="relative bg-gray-200 flex-1">
      <TodoForm onSubmit={handleSubmit} />
      <TodoList items={todos} remove={removeTodo} />
    </SafeAreaView>
  )
}

export default TodosScreen

interface TodoListProps {
  items: Todo[]
  remove: (id: number) => void
}

const TodoList = ({ items, remove }: TodoListProps) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <View className="p-4 flex-row gap-4 items-center border-b border-black/10 border-dashed">
          <View className="size-10 bg-black/75 items-center justify-center flex rounded-full">
            <Text className="text-white font-bold">#{item.id + 1}</Text>
          </View>
          <Text
            className={cn("text-lg grow", item.completed ?? "line-through")}
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
