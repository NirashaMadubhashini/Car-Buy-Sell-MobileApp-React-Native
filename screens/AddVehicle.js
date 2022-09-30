import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const image = { uri: "https://tse3.mm.bing.net/th?id=OIP.adlu3olLYv5Eb1Jh4CzfrAHaNK&pid=Api&P=0" };

export default function AddVehicle() {
  return (
    <View style={styles.container}>
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});