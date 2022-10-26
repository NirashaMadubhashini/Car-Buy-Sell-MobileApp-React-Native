import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Alert, ScrollView, SafeAreaView,Pressable } from 'react-native'
import React, { useState } from 'react'

export default function UpdateCar() {
    const [brand, setBrand] = useState("");
    const [transmissionType, setTransmissionType] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState("");
    const [open, setOpen] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{ fontSize: 20, justifyContent: 'center', color: "black", fontWeight: 'bold', paddingTop: '3%', paddingRight: '45%', fontFamily: 'Roboto' }}>Update Information</Text>

                    <TextInput style={styles.input1} placeholder='brand' value={brand} onChangeText={(e) => { setBrand(e) }} />
                    <TextInput style={styles.input2} placeholder='transmissionType' value={transmissionType} onChangeText={(e) => { setTransmissionType(e) }} />
                    <TextInput style={styles.input2} placeholder='fuelType' value={fuelType} onChangeText={(e) => { setFuelType(e) }} />
                    <TextInput style={styles.input2} placeholder='color' value={color} onChangeText={(e) => { setColor(e) }} />
                    <TextInput style={styles.input2} placeholder='price' value={price} onChangeText={(e) => { setPrice(e) }} />

                    <Pressable
                  style={[styles.button, styles.buttonClose]}
                >
                  <Text style={styles.textStyle}>Update</Text>
                </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    input1: {
        marginTop: '15%',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius: 10,
        fontFamily: 'normal'

    },
    input2: {
        marginTop: '3%',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius: 10,
        fontFamily: 'normal'
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginTop: '10%',
        width: '50%',
        padding: 5,
        height: 45,
        borderRadius: 15
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
        textAlign: "center",
        fontSize:20,
        marginTop: '2%',
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
})