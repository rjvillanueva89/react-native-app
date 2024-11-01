import { Link } from "expo-router"
import React from "react"
import { ImageBackground, Pressable, Text, View } from "react-native"

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
        <Link href="/contact-us" className="mx-auto mt-4" asChild>
          <Pressable>
            <Text className="p-4 bg-black/75 rounded-xl text-white">
              Contact Us
            </Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen
