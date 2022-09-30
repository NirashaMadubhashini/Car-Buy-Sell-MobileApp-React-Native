import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,Card,Image,ImageBackground,ListItem} from 'react-native'
import React from 'react'



   
export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden" }}>
          <View>
            <Image
              source={require("../assets/images/car.jpeg")}
              style={{
                height: 135,
                width: 155
              }}
            />
          </View>
          <View style={{ padding: 10, width: 155 }}>
            <Text>Title</Text>
            <Text style={{ color: "#777", paddingTop: 5 }}>
              Description of the image
            </Text>
          </View>
        </View>
      </View>
  )
}