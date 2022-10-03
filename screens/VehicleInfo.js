import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";

export default function VehicleInfo({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ height: 1000 }}>
        <ScrollView horizontal contentContainerStyle={{ width: 1090 }}>
          <Text style={{ fontSize: 20, justifyContent: 'center', color: "black", fontWeight: 'bold', paddingTop: '3%', left: 20 }}>General Cars</Text>
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
              top:330,
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
              top:-60,
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
                  Fuel type: Petrol
                </Text>
                <Text style={styles.input2}>
                  Color: Orange
                </Text>
                <Text style={styles.input2}>
                  No of passengers : 8
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
              top:-450,
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
                  Fuel type: Petrol
                </Text>
                <Text style={styles.input2}>
                  Color: Blue
                </Text>
                <Text style={styles.input2}>
                  No of passengers : 5
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
              top:-840,
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
                <Text style={styles.input1}>Suzuki Celerio</Text>
                <Text style={styles.input2}>
                  Transmission type:  Auto
                </Text>
                <Text style={styles.input2}>
                  Fuel type: Petrol
                </Text>
                <Text style={styles.input2}>
                  Color: Blue
                </Text>
                <Text style={styles.input2}>
                  No of passengers : 5
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

          <Text style={{ fontSize: 20, justifyContent: 'center', color: "black", fontWeight: 'bold', paddingTop: '43%', left: -510 }}>Premium Cars</Text>
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
              top:780,
              left:-670,
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
                  Fuel type: Petrol
                </Text>
                <Text style={styles.input2}>
                  Color: Light Blue
                </Text>
                <Text style={styles.input2}>
                  No of passengers : 4
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
              top:390,
              left:-400,
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
                  Transmission type: Auto (2017)
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
              top:-1,
              left:-130,
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
                  Fuel type: Petrol
                </Text>
                <Text style={styles.input2}>
                  Color: Ash
                </Text>
                <Text style={styles.input2}>
                  No of passengers : 3
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
              top:-390,
              left:140,
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
                <Text style={styles.input1}>Suzuki Celerio</Text>
                <Text style={styles.input2}>
                  Transmission type:  Auto
                </Text>
                <Text style={styles.input2}>
                  Fuel type: Petrol
                </Text>
                <Text style={styles.input2}>
                  Color: Blue
                </Text>
                <Text style={styles.input2}>
                  No of passengers : 5
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
    top: -5,
    width: 200,
    justifyContent: "center",
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
    top: -20
  },
  input2: {
    fontSize: 15,
    color: "black",
    top: -20
  }
});