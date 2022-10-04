import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";

export default function VehicleInfo({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ height: 1350 }}>
        <ScrollView horizontal contentContainerStyle={{ width: 1090 }}>
          <Text style={{ fontSize: 20, justifyContent: 'center', color: "black", fontWeight: 'bold', paddingTop: '3%', left: 20,fontFamily: 'notoserif'}}>General Cars</Text>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <View style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 10,
                height: 20
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              top:160,
              left:-120,
              width: 250,
              height: 350
            }}>
              <Image
                source={require("../assets/cars/Alto.jpeg")}
                style={{
                  height: 135,
                  width: 200,
                  top: -20
                }}
              />
              <View style={{ padding: 10, width: 200 }}>
                <Text style={styles.input1}>Suzuki Alto</Text>
                <Text style={styles.input2}>
                  Transmission type: Manual
                </Text>
                <Text style={styles.input2}>
                  Fuel type: Petrol
                </Text>
                <Text style={styles.input2}>
                  Color: Red
                </Text>
                <Text style={styles.input2}>
                  No of passengers : 7
                </Text>
                <Text style={styles.input2}>
                  Price : Rs. 2,575,000
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => { navigation.navigate("BuyVehicle"), setModalVisible(!modalVisible) }}
                >
                  <Text style={styles.textStyle}>Buy Now</Text>
                </Pressable>
              </View>
            </View>
            <View style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 10,
                height: 20
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              top:-230,
              left:150,
              width: 250,
              height: 350
            }}>
              <Image
                source={require("../assets/cars/AltoK10.jpeg")}
                style={{
                  height: 135,
                  width: 200,
                  top: -20
                }}
              />
              <View style={{ padding: 10, width: 200 }}>
                <Text style={styles.input1}>Suzuki Alto K10</Text>
                <Text style={styles.input2}>
                  Transmission type:  Auto
                </Text>
                <Text style={styles.input2}>
                  Fuel type: Diesel
                </Text>
                <Text style={styles.input2}>
                  Color: Orange
                </Text>
                <Text style={styles.input2}>
                  No of passengers : 8
                </Text>
                <Text style={styles.input2}>
                  Price :Rs. 2,575,000.
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => { navigation.navigate("BuyVehicle"), setModalVisible(!modalVisible) }}
                >
                  <Text style={styles.textStyle}>Buy Now</Text>
                </Pressable>
              </View>
            </View>
            <View style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 10,
                height: 20
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              top:-620,
              left:420,
              width: 250,
              height: 350
            }}>
              <Image
                source={require("../assets/cars/Celerio.jpeg")}
                style={{
                  height: 135,
                  width: 200,
                  top: -20
                }}
              />
              <View style={{ padding: 10, width: 200 }}>
                <Text style={styles.input1}>Suzuki Celerio</Text>
                <Text style={styles.input2}>
                  Transmission type:  Auto
                </Text>
                <Text style={styles.input2}>
                  Fuel type: Diesel
                </Text>
                <Text style={styles.input2}>
                  Color: Blue
                </Text>
                <Text style={styles.input2}>
                  No of passengers : 5
                </Text>
                <Text style={styles.input2}>
                  Price : Rs 4,090,000
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => { navigation.navigate("BuyVehicle"), setModalVisible(!modalVisible) }}
                >
                  <Text style={styles.textStyle}>Buy Now</Text>
                </Pressable>
              </View>
            </View>
            <View style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 10,
                height: 20
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              top:-1010,
              left:690,
              width: 250,
              height: 350
            }}>
              <Image
                source={require("../assets/cars/PeroduaAxia.jpeg")}
                style={{
                  height: 135,
                  width: 200,
                  top: -20
                }}
              />
              <View style={{ padding: 10, width: 200 }}>
                <Text style={styles.input1}>Perodua Axia</Text>
                <Text style={styles.input2}>
                  Transmission type:  Auto
                </Text>
                <Text style={styles.input2}>
                  Fuel type: Diesel
                </Text>
                <Text style={styles.input2}>
                  Color: White
                </Text>
                <Text style={styles.input2}>
                  No of passengers : 5
                </Text>
                <Text style={styles.input2}>
                  Price : Rs 4,600,000
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => { navigation.navigate("BuyVehicle"), setModalVisible(!modalVisible) }}
                >
                  <Text style={styles.textStyle}>Buy Now</Text>
                </Pressable>
              </View>
            </View>
          </View>

          <Text style={{ fontSize: 20, justifyContent: 'center', color: "black", fontWeight: 'bold', paddingTop: '45%', left: -340,fontFamily: 'notoserif'}}>Premium Cars</Text>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <View style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 10,
                height: 20
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              top:620,
              left:-490,
              width: 250,
              height: 350
            }}>
              <Image
                source={require("../assets/cars/CorollaAxio.jpeg")}
                style={{
                  height: 135,
                  width: 200,
                  top: -20
                }}
              />
              <View style={{ padding: 10, width: 200 }}>
                <Text style={styles.input1}>Toyota Corolla Axio</Text>
                <Text style={styles.input2}>
                  Transmission type: Manual
                </Text>
                <Text style={styles.input2}>
                  Fuel type: Diesel
                </Text>
                <Text style={styles.input2}>
                  Color: Light Blue
                </Text>
                <Text style={styles.input2}>
                  No of passengers : 4
                </Text>
                <Text style={styles.input2}>
                  Price : Rs. 9,500,000
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => { navigation.navigate("BuyVehicle"), setModalVisible(!modalVisible) }}
                >
                  <Text style={styles.textStyle}>Buy Now</Text>
                </Pressable>
              </View>
            </View>
            <View style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 10,
                height: 20
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              top:230,
              left:-220,
              width: 250,
              height: 350
            }}>
              <Image
                source={require("../assets/cars/PeroduaBezza.jpeg")}
                style={{
                  height: 135,
                  width: 200,
                  top: -20
                }}
              />
              <View style={{ padding: 10, width: 200 }}>
                <Text style={styles.input1}>Perodua Bezza</Text>
                <Text style={styles.input2}>
                  Transmission type: Auto
                </Text>
                <Text style={styles.input2}>
                  Fuel type: Petrol
                </Text>
                <Text style={styles.input2}>
                  Color: Sky Blue
                </Text>
                <Text style={styles.input2}>
                  No of passengers : 5
                </Text>
                <Text style={styles.input2}>
                  Price : Rs. 5,600,000
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => { navigation.navigate("BuyVehicle"), setModalVisible(!modalVisible) }}
                >
                  <Text style={styles.textStyle}>Buy Now</Text>
                </Pressable>
              </View>
            </View>
            <View style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 10,
                height: 20
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              top:-160,
              left:50,
              width: 250,
              height: 350
            }}>
              <Image
                source={require("../assets/cars/ToyotaAllion.jpeg")}
                style={{
                  height: 135,
                  width: 200,
                  top: -20
                }}
              />
              <View style={{ padding: 10, width: 200 }}>
                <Text style={styles.input1}>Toyota Allion NZT</Text>
                <Text style={styles.input2}>
                  Transmission type:  Auto
                </Text>
                <Text style={styles.input2}>
                  Fuel type:Diesel
                </Text>
                <Text style={styles.input2}>
                  Color: Ash
                </Text>
                <Text style={styles.input2}>
                  No of passengers : 3
                </Text>
                <Text style={styles.input2}>
                  Price : Rs.6,750,000
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => { navigation.navigate("BuyVehicle"), setModalVisible(!modalVisible) }}
                >
                  <Text style={styles.textStyle}>Buy Now</Text>
                </Pressable>
              </View>
            </View>
            <View style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 10,
                height: 20
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              top:-550,
              left:320,
              width: 250,
              height: 350
            }}>
              <Image
                source={require("../assets/cars/ToyotaAxioNKR.jpeg")}
                style={{
                  height: 135,
                  width: 200,
                  top: -20
                }}
              />
              <View style={{ padding: 10, width: 200 }}>
                <Text style={styles.input1}>Toyota Axio NKR</Text>
                <Text style={styles.input2}>
                  Transmission type:  Auto
                </Text>
                <Text style={styles.input2}>
                  Fuel type: Petrol
                </Text>
                <Text style={styles.input2}>
                  Color: Red
                </Text>
                <Text style={styles.input2}>
                  No of passengers : 5
                </Text>
                <Text style={styles.input2}>
                  Price : Rs.5,790,000
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => { navigation.navigate("BuyVehicle"), setModalVisible(!modalVisible) }}
                >
                  <Text style={styles.textStyle}>Buy Now</Text>
                </Pressable>
              </View>
            </View>
          </View>



          <Text style={{ fontSize: 20, justifyContent: 'center', color: "black", fontWeight: 'bold', paddingTop: '85%', left: -710,fontFamily: 'notoserif' }}>Luxury Cars</Text>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <View style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 10,
                height: 20
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              top:1060,
              left:-840,
              width: 250,
              height: 350
            }}>
              <Image
                source={require("../assets/cars/BMWi8.jpeg")}
                style={{
                  height: 135,
                  width: 200,
                  top: -20
                }}
              />
              <View style={{ padding: 10, width: 200 }}>
                <Text style={styles.input1}>BMW i8</Text>
                <Text style={styles.input2}>
                  Transmission type: Auto
                </Text>
                <Text style={styles.input2}>
                  Fuel type: Petrol
                </Text>
                <Text style={styles.input2}>
                  Color:Black
                </Text>
                <Text style={styles.input2}>
                  No of passengers : 2
                </Text>
                <Text style={styles.input2}>
                  Price : Rs.30,000,000
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => { navigation.navigate("BuyVehicle"), setModalVisible(!modalVisible) }}
                >
                  <Text style={styles.textStyle}>Buy Now</Text>
                </Pressable>
              </View>
            </View>
            <View style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 10,
                height: 20
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              top:670,
              left:-570,
              width: 250,
              height: 350
            }}>
              <Image
                source={require("../assets/cars/Mercedes.jpeg")}
                style={{
                  height: 135,
                  width: 200,
                  top: -20
                }}
              />
              <View style={{ padding: 10, width: 200 }}>
                <Text style={styles.input1}>Mercedes</Text>
                <Text style={styles.input2}>
                  Transmission type: Auto
                </Text>
                <Text style={styles.input2}>
                  Fuel type: Petrol
                </Text>
                <Text style={styles.input2}>
                  Color: White
                </Text>
                <Text style={styles.input2}>
                  No of passengers : 2
                </Text>
                <Text style={styles.input2}>
                  Price : Rs.25,500,000
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => { navigation.navigate("BuyVehicle"), setModalVisible(!modalVisible) }}
                >
                  <Text style={styles.textStyle}>Buy Now</Text>
                </Pressable>
              </View>
            </View>
            <View style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 10,
                height: 20
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              top:280,
              left:-300,
              width: 250,
              height: 350
            }}>
              <Image
                source={require("../assets/cars/audi.jpeg")}
                style={{
                  height: 135,
                  width: 200,
                  top: -20
                }}
              />
              <View style={{ padding: 10, width: 200 }}>
                <Text style={styles.input1}>Audi</Text>
                <Text style={styles.input2}>
                  Transmission type:  Auto
                </Text>
                <Text style={styles.input2}>
                  Fuel type: Petrol
                </Text>
                <Text style={styles.input2}>
                  Color: Ash
                </Text>
                <Text style={styles.input2}>
                  No of passengers : 5
                </Text>
                <Text style={styles.input2}>
                  Price : Rs.19,852,700
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => { navigation.navigate("BuyVehicle"), setModalVisible(!modalVisible) }}
                >
                  <Text style={styles.textStyle}>Buy Now</Text>
                </Pressable>
              </View>
            </View>
            <View style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 10,
                height: 20
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              top:-110,
              left:-30,
              width: 250,
              height: 350
            }}>
              <Image
                source={require("../assets/cars/ToyotaPremio.jpeg")}
                style={{
                  height: 135,
                  width: 200,
                  top: -20
                }}
              />
              <View style={{ padding: 10, width: 200 }}>
                <Text style={styles.input1}>Toyota Premio</Text>
                <Text style={styles.input2}>
                  Transmission type:  Auto
                </Text>
                <Text style={styles.input2}>
                  Fuel type: Petrol
                </Text>
                <Text style={styles.input2}>
                  Color: Green
                </Text>
                <Text style={styles.input2}>
                  No of passengers : 5
                </Text>
                <Text style={styles.input2}>
                  Price : Rs.13,750,000
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => { navigation.navigate("BuyVehicle"), setModalVisible(!modalVisible) }}
                >
                  <Text style={styles.textStyle}>Buy Now</Text>
                </Pressable>
              </View>
            </View>
          </View>
          

        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 20
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
    width: 250,
    height: 350
  },

  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    top: -10,
    width: 200,
    left:-10
  },
  buttonOpen: {
    backgroundColor: "#2196F3",
  },
  buttonClose: {
    backgroundColor: "green",
  },
  buttonExit: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input1: {
    fontSize: 20,
    color: "black",
    fontWeight: 'bold',
    top: -20,
    fontFamily: 'normal'
  },
  input2: {
    fontSize: 15,
    color: "black",
    top: -20,
    fontFamily: 'normal'
  }
});