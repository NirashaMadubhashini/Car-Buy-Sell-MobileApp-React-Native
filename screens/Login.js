import { View, Input, FlatList, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Divider } from "@react-native-material/core";

export default function Login({ navigation }) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  loginUser = () => {
    fetch(`http://192.168.1.100:8000/users/login/${username}/${password}`, {
      method: "GET",
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.length === 0) {
          Alert.alert("Username or password incorrect.Try again!")
        } else {
          clearTextFields()
          Alert.alert("Login Successful.");
          navigation.navigate("Dash", {
            username: json[0].username,
            fullname: json[0].fullName
          });
        }
      })
      .catch((err) => console.log(err));
  }

  clearTextFields = () => {
    setUsername("");
    setPassword("");
  }


  return (
    <View style={styles.container} >
      <Text style={{ fontSize: 35, justifyContent: 'center', color: "black", fontWeight: 'bold', paddingTop: '15%', fontFamily: 'Roboto' }}>Login</Text>
      <Image style={styles.tinyLogo} source={require('../assets/icon/user3.png')} />

      <TextInput style={styles.input1} value={username} onChangeText={(e) => { setUsername(e) }} placeholder='Username'/>
      <TextInput style={styles.input2} value={password} onChangeText={(e) => { setPassword(e) }} placeholder='Password'/>


      <TouchableOpacity
        style={styles.btn}
        onPress={() => { navigation.navigate("DashBoard") }}>
        <Text style={{ color: '#ffff', fontSize: 20 }}>Login</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 20, justifyContent: 'center', color: "black", fontWeight: 'bold', paddingTop: '3%' }}>or</Text>
      <TouchableOpacity
        style={styles.btn2}
        onPress={() => { navigation.navigate("Register") }}>
        <Text style={{ color: '#ffff', fontSize: 20 }}>Create new account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input1: {
    marginTop: '10%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 20,

  },
  input2: {
    marginTop: '5%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 20,
    fontFamily: 'Roboto'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: '60%',
    padding: 5,
    backgroundColor: "#0266D6",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    borderRadius: 20,

  },
  btn2: {
    width: '60%',
    padding: 5,
    backgroundColor: "#0EAF52",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    borderRadius: 20
  },
  tinyLogo: {
    marginTop: '10%',
    width: 100,
    height: 100,
  }
});