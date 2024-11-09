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
        <View className="flex grow justify-center">
          <Text className="text-white text-4xl font-bold py-4 bg-black/50 text-center">
            Coffee Shop
          </Text>
        </View>
        <View className="flex items-center justify-center py-10">
          <ContactUsButton />
        </View>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen

const ContactUsButton = () => {
  return (
    <Link href="/contact-us" asChild>
      <Pressable>
        <Text className="p-4 bg-black/50 rounded-lg text-white">
          Contact Us
        </Text>
      </Pressable>
    </Link>
  )
}
