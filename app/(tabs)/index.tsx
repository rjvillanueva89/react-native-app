import React from "react"
import { ImageBackground, Text, View } from "react-native"

const HomeScreen = () => {
  return (
    <View className="flex grow flex-col">
      <ImageBackground
        source={require("@/assets/images/iced-coffee.png")}
        resizeMode="cover"
        className="size-full flex justify-center"
      >
        <Text className="text-white text-4xl font-bold py-4 bg-black/50 text-center">
          Coffee Shop
        </Text>
        <Text className="text-white">Explore</Text>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen
