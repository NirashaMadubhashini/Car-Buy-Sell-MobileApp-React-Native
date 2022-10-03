import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View ,Image,ScrollView, SafeAreaView,TouchableOpacity,Foundation,Button } from "react-native";



export default function BuyVehicle(navigation) {
  return(
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
      marginTop: 10,
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