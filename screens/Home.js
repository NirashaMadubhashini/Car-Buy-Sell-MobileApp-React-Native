import { View, Overlay,Text, TextInput, Button, StyleSheet, TouchableOpacity, Card, Image, ImageBackground, ListItem, ScrollView, SafeAreaView } from 'react-native'
import React  ,{ useState } from 'react'


export default function Home() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{fontSize:20,justifyContent: 'center',color:"black",fontWeight:'bold',paddingTop: '3%',left:20}}>Buy And Sell Your Cars Here</Text>
          <View style={{ backgroundColor: "#655C5A", borderRadius: 10, overflow: "hidden", height: 250, width: 160, left: 15, top: 20 }}>
            <View>
              <Image
                source={require("../assets/images/car4.jpeg")}
                style={{
                  height: 150,
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
          <View style={{ backgroundColor: "#9E7754", borderRadius: 10, overflow: "hidden", height: 250, width: 160, left: 185, top: -230 }}>
            <View>
              <Image
                source={require("../assets/images/Aqua.jpeg")}
                style={{
                  height: 150,
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
          <Text style={{fontSize:20,justifyContent: 'center',color:"black",fontWeight:'bold',top:-200,left:25}}>Active Promotions</Text>
          <View style={{ backgroundColor: "#9E9B9F", borderRadius: 10, overflow: "hidden", height: 250, width: 330, left: 15, top: -180 }}>
            <View>
              <Image
                source={require("../assets/images/romeo.jpg")}
                style={{
                  height: 150,
                  width: 330
                }}
              />
            </View>
            <View style={{ padding: 10, width: 330 }}>
              <Text style={styles.input1}>2022 Alfa Romeo Stelvio</Text>
              <Text style={styles.input2}>
              FINANCE DEALS
              </Text>
              <Text style={styles.input3}>
              0% financing for 48 months. (Expires:19/10/22)
              </Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#A4ABB6", borderRadius: 10, overflow: "hidden", height: 250, width: 330, left: 15, top: -170 }}>
            <View>
              <Image
                source={require("../assets/images/chrysler.jpg")}
                style={{
                  height: 150,
                  width: 330
                }}
              />
            </View>
            <View style={{ padding: 10, width: 330 }}>
            <Text style={styles.input1}>2022 Chrysler 300</Text>
              <Text style={styles.input2}>
              FINANCE DEALS
              </Text>
              <Text style={styles.input3}>
              2.9% financing for 72 months plus $2,000 bonus cash. (Expires: 29/10/22)
              </Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#E5CBA8", borderRadius: 10, overflow: "hidden", height: 250, width: 330, left: 15, top: -160 }}>
            <View>
              <Image
                source={require("../assets/images/Fiat.jpg")}
                style={{
                  height: 150,
                  width: 330
                }}
              />
            </View>
            <View style={{ padding: 10, width: 330 }}>
            <Text style={styles.input1}>2022 FIAT 500X</Text>
              <Text style={styles.input2}>
              FINANCE DEALS
              </Text>
              <Text style={styles.input3}>
              1.9% financing for 60 months. (Expires: 09/11/22)
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
  },
  input3: {
    fontSize: 12,
    color: "black",
  }
})