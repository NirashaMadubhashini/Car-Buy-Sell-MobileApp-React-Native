import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'


export default function AddVehicle() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, justifyContent: 'center', color: "black", fontWeight: 'bold', paddingTop: '9%', left: -65,fontFamily: 'notoserif' }}>Add New Vehicle</Text>
          <TextInput style={styles.input1} placeholder='Registration number.' />
          <TextInput style={styles.input2} placeholder='Brand' />
          <TextInput style={styles.input2} placeholder='Transmission type' />
          <TextInput style={styles.input2} placeholder='Fuel Type' />
          <TextInput style={styles.input2} placeholder='Color' />
          <TextInput style={styles.input2} placeholder='Number of passengers' />
          <TextInput style={styles.input2} placeholder='Price' />
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../assets/icon/upload1.png')}
              style={{ width: 25, height: 25, left: -50, top: 10 }}
            />
            <Text style={{ color: '#ffff', fontSize: 20, left: 10, top: -15 }}>Upload</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}>
            <Text style={{ color: '#ffff', fontSize: 20, }}>Save Vehicle</Text>
          </TouchableOpacity>
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
    marginTop: '5%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 10,
    fontFamily: 'normal'

  },
  input2: {
    marginTop: '5%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 10,
    fontFamily: 'normal'
  },
  btn: {
    width: '80%',
    padding: 5,
    backgroundColor: "#23B671",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3%',
    borderRadius: 20
  },
  button: {
    width: '50%',
    padding: 5,
    backgroundColor: "#274BF7",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3%',
    borderRadius: 20,
    borderColor: "black"
  }
});