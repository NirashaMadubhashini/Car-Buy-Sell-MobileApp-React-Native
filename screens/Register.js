import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Alert, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'


export default function Register({ navigation }) {

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const saveUser = async () => {

    if (fullName != "" && phoneNumber != "" && username != "" && password != "") {
      fetch('http://192.168.8.109:8000/users', {
        method: 'POST',
        body: JSON.stringify({
          fullName: fullName,
          phoneNumber: phoneNumber,
          username: username,
          password: password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          if (json.status === "500") {
            Alert.alert(json.message)
          } else {
            Alert.alert(json.message)
            clearTextFields();
          }
        })
        .catch((err) => Alert.alert(err.message));
    } else {
      Alert.alert("Please fill all the fields and try again.")
    }
  }


  const clearTextFields = () => {
    setFullName("");
    setPhoneNumber("");
    setUsername("");
    setPassword("");
  }





  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ fontSize: 35, justifyContent: 'center', color: "black", fontWeight: 'bold', paddingTop: '10%', fontFamily: 'Roboto' }}>Create Account</Text>
          <Image style={styles.tinyLogo} source={require('../assets/icon/reg.png')} />
          <TextInput style={styles.input1} value={fullName} onChangeText={(e) => { setFullName(e) }} placeholder='Full Name' />
          <TextInput style={styles.input2} value={phoneNumber} onChangeText={(e) => { setPhoneNumber(e) }} placeholder='Phone Number' />
          <TextInput style={styles.input2} value={username} onChangeText={(e) => { setUsername(e) }} placeholder='Username' />
          <TextInput style={styles.input2} value={password} onChangeText={(e) => { setPassword(e) }} placeholder='Password' />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              saveUser()
              // printUser()
            }}
          >
            <Text style={{ color: '#ffff', fontSize: 20 }}>Register</Text>

          </TouchableOpacity>

          <Text style={{ fontSize: 18, color: "black", paddingTop: '8%', left: '-10%' }}>Already have an account?</Text>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => {
              try {
                navigation.navigate("Login")
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input1: {
    marginTop: '10%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 15,
    fontFamily: 'Roboto'

  },
  input2: {
    marginTop: '5%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 15
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: '80%',
    padding: 5,
    backgroundColor: "#055BC7",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    borderRadius: 15
  },
  btn2: {
    width: '60%',
    padding: 5,
    // backgroundColor: "#0EAF52",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-10%',
    marginLeft: '55%',
    borderRadius: 100
  },
  tinyLogo: {
    marginTop: '5%',
    width: 70,
    height: 70,
  },

});