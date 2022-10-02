import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'


export default function AddVehicle() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input1} placeholder='Registration number.' />
      <TextInput style={styles.input2} placeholder='Brand' />
      <TextInput style={styles.input2} placeholder='Transmission type' />
      <TextInput style={styles.input2} placeholder='Fuel Type' />
      <TextInput style={styles.input2} placeholder='Color' />
      <TextInput style={styles.input2} placeholder='Number of passengers' />
      <TouchableOpacity style={styles.button}>
      <Image 
          source={require('../assets/icon/up.png')} 
          style={{ width: 25, height: 25 ,left:85,top:15}}
          />
          <Text style={{ color: 'black', fontSize: 20,right:30,top:-15 }}>Upload Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}>
        <Text style={{ color: '#ffff', fontSize: 20, }}>Save Vehicle</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  input1: {
    marginTop: '5%',
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
  btn: {
    width: '60%',
    padding: 5,
    backgroundColor: "#452382",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    borderRadius: 20
  },
  button: {
    width: '80%',
    padding:5,
    backgroundColor: "#BF8700",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3%',
    borderRadius:20,
    borderColor:"black"
  }
});