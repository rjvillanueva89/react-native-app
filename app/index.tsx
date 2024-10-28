import { Link } from "expo-router"
import React from "react"
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native"

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/iced-coffee.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Coffee Shop</Text>
        <Link href="/explore" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable>
            <Text>Explore</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  button: {},
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
})
