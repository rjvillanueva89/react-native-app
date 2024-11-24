import { Todo } from '@/app/(tabs)/todos'
import { cn } from '@/lib/utils'
import { Ionicons } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'

import { FlatList } from 'react-native'

interface TodoListProps {
  items: Todo[]
  remove: (id: string) => void
  update: (todo: Todo) => void
}

export const TodoList = ({ items, remove, update }: TodoListProps) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <View
          key={item.id}
          className="p-4 flex flex-row gap-4 items-center border-b border-black/10 border-dashed"
        >
          <Pressable
            onPress={() => update({ ...item, completed: !item.completed })}
            className="grow flex-row items-center gap-4"
          >
            <Ionicons
              name={item.completed ? 'checkbox' : 'checkbox-outline'}
              size={20}
            />
            <Text className={cn('text-lg', { 'line-through': item.completed })}>
              {item.title}
            </Text>
          </Pressable>
          <Pressable onPress={() => remove(item.id)}>
            <Ionicons name="trash" size={20} />
          </Pressable>
        </View>
      )}
    />
  )
}
