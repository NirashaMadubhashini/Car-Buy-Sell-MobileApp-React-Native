import {ActivityIndicator,View, Overlay,Text, TextInput, Button, StyleSheet, TouchableOpacity, Card,Box, Image, ImageBackground, ListItem, ScrollView, SafeAreaView,Surface, Stack } from 'react-native'
import React  ,{ useState } from 'react'


export default function Home() {

  return (
    <SafeAreaView style={{ flex:1}}>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{fontSize:20,justifyContent: 'center',color:"black",fontWeight:'bold',paddingTop: '9%',left:20,fontFamily: 'notoserif'}}>Buy And Sell Your Cars Here</Text>
          <View style={{ backgroundColor: "#8F8A87", borderRadius: 10, overflow: "hidden", height: 250, width: 160, left: 15, top: 20 }}>
            <View>
              <Image
                source={require("../assets/cars/Alto.jpeg")}
                style={{
                  height: 150,
                  width: 160
                }}
              />
            </View>
            <View style={{ padding: 10, width: 160 }}>
              <Text style={styles.input1}>General Cars</Text>
              <Text style={styles.input2}>
                Auto / Manual
              </Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#73747A", borderRadius: 10, overflow: "hidden", height: 250, width: 160, left: 185, top: -230 }}>
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
              <Text style={styles.input1}>Premium Cars</Text>
              <Text style={styles.input2}>
              Auto / Manual
              </Text>
            </View>
          </View>
          <Text style={{fontSize:20,justifyContent: 'center',color:"black",fontWeight:'bold',top:-200,left:25,fontFamily: 'notoserif'}}>Active Promotions</Text>
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
          <View style={{ backgroundColor: "#947483", borderRadius: 10, overflow: "hidden", height: 250, width: 330, left: 15, top: -160 }}>
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
          <Text style={{fontSize:20,justifyContent: 'center',color:"black",fontWeight:'bold',top:-130,left:25,fontFamily: 'notoserif'}}>Top Dealers</Text>
          <View style={{borderRadius: 10, overflow: "hidden", height: 100, width: 150, left: 15, top: -100 }}>
            <View>
              <Image
                source={require("../assets/images/hertz.jpeg")}
                style={{
                  height: 100,
                  width: 150
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
          <View style={{  borderRadius: 10, overflow: "hidden", height: 100, width: 150, left: 185, top: -200 }}>
            <View>
              <Image
                source={require("../assets/images/avis.jpeg")}
                style={{
                  height: 100,
                  width: 150
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
          <View style={{ borderRadius: 10, overflow: "hidden", height: 100, width: 150, left: 185, top: -190 }}>
            <View>
              <Image
                source={require("../assets/images/ncda.jpeg")}
                style={{
                  height: 100,
                  width: 150
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
          <View style={{ borderRadius: 10, overflow: "hidden", height: 100, width: 150, left: 15, marginTop: -290 }}>
            <View>
              <Image
                source={require("../assets/images/mahi.jpeg")}
                style={{
                  height: 100,
                  width: 150
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
    fontFamily: 'Roboto'
  },
  input2: {
    fontSize: 15,
    color: "black",
    fontFamily: 'Roboto'
  },
  input3: {
    fontSize: 12,
    color: "black",
    fontFamily: 'Roboto'
  }
})