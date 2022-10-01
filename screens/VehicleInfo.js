import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Card, Image, ImageBackground, ListItem, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

export default function VehicleInfo() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ backgroundColor: "#636e72", borderRadius: 10, overflow: "hidden", width: 160, left: 15, top: 20 }}>
          <View>
            <Image
              source={require("../assets/images/car4.jpeg")}
              style={{
                height: 135,
                width: 160
              }}
            />
          </View>
          <View style={{ padding: 10, width: 160 }}>
            <Text style={styles.input1}>Toyota Aqua</Text>
            <Text style={styles.input2}>
              Auto
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "#636e72", borderRadius: 10, overflow: "hidden", width: 160, left: 185, top: -180 }}>
          <View>
            <Image
              source={require("../assets/images/Aqua.jpeg")}
              style={{
                height: 135,
                width: 160
              }}
            />
          </View>
          <View style={{ padding: 10, width: 160 }}>
            <Text style={styles.input1}>Toyota Corolla</Text>
            <Text style={styles.input2}>
              Auto
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "#636e72", borderRadius: 10, overflow: "hidden", width: 160, left: 15, top: -150 }}>
          <View>
            <Image
              source={require("../assets/images/car4.jpeg")}
              style={{
                height: 135,
                width: 160
              }}
            />
          </View>
          <View style={{ padding: 10, width: 160 }}>
            <Text style={styles.input1}>Toyota Aqua</Text>
            <Text style={styles.input2}>
              Auto
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "#636e72", borderRadius: 10, overflow: "hidden", width: 160, left: 185, top: -350 }}>
          <View>
            <Image
              source={require("../assets/images/Aqua.jpeg")}
              style={{
                height: 135,
                width: 160
              }}
            />
          </View>
          <View style={{ padding: 10, width: 160 }}>
            <Text style={styles.input1}>Toyota Corolla</Text>
            <Text style={styles.input2}>
              Auto
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input1: {
    fontSize: 20,
    color: "black",
    fontWeight: 'bold',
  },
  input2: {
    fontSize: 15,
    color: "black",
  }
})