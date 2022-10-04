import {ActivityIndicator,View, Overlay,Text, TextInput, Button, StyleSheet, TouchableOpacity, Card,Box, Image, ImageBackground, ListItem, ScrollView, SafeAreaView,Surface, Stack } from 'react-native'
import React  ,{ useState } from 'react'


export default function BuyVehicle() {
  return (
    <View style={styles.container}>
  
      <TextInput style={styles.input1} placeholder='Full Name' />
      <TextInput style={styles.input2} placeholder='Email' />
      <TextInput style={styles.input2} placeholder='Phone Number' />
      <TextInput style={styles.input2} placeholder='Username' />
      <TextInput style={styles.input2} placeholder='Password' />
   
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  },
  input1: {
    marginTop: '10%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 20

  },
  input2: {
    marginTop: '5%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 20
  },
});