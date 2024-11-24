import { useState } from "react"
import { Button, TextInput, View } from "react-native"

interface Props {
  onSubmit: (text: string) => void
}

export const TodoForm = ({ onSubmit }: Props) => {
  const [text, setText] = useState("")

  const handlePress = () => {
    onSubmit(text)
    setText("")
  }

  return (
    <View className="flex-row gap-4 p-4 items-center">
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Add new todo item..."
        className="border px-4 py-2 grow"
      />
      <Button title="Add" onPress={handlePress} color="#333" disabled={!text} />
    </View>
  )
}
