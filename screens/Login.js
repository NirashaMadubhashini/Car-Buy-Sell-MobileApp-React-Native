import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Divider } from "@react-native-material/core";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:35,justifyContent: 'center',color:"black",fontWeight:'bold',paddingTop: '15%'}}>Login</Text>
      <Image style={styles.tinyLogo}source={require('../assets/my-icon.png')} />
      <TextInput style={styles.input1} placeholder='Username' />
      <TextInput style={styles.input2} placeholder='Password' />
      <TouchableOpacity
        style={styles.btn}
        onPress={()=>{navigation.navigate("DashBoard")}}>
        <Text style={{ color: '#ffff', fontSize: 20 }}>Login</Text>
      </TouchableOpacity>
      <Text style={{fontSize:20,justifyContent: 'center',color:"black",fontWeight:'bold',paddingTop: '3%'}}>or</Text>
      <TouchableOpacity
        style={styles.btn2}
        onPress={()=>{navigation.navigate("Register")}}>
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
    borderRadius: 100

  },
  input2: {
    marginTop: '5%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 100
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: '60%',
    padding: 5,
    backgroundColor: "#273c75",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    borderRadius: 100
  },
  btn2: {
    width: '60%',
    padding:5,
    backgroundColor: "green",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    borderRadius: 50
  },
  tinyLogo: {
    marginTop: '10%',
    width: 100,
    height: 100,
  }
});