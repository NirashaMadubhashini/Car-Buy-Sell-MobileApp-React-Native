import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'


export default function Register({navigation}) {
  
  return (
    <View style={styles.container}>
      <Text style={{fontSize:35,justifyContent: 'center',color:"black",fontWeight:'bold',paddingTop: '15%'}}>Register</Text>
      <TextInput style={styles.input1} placeholder='Full Name' />
      <TextInput style={styles.input2} placeholder='Phone Number' />
      <TextInput style={styles.input2} placeholder='Email' />
      <TextInput style={styles.input2} placeholder='Username' />
      <TextInput style={styles.input2} placeholder='Password' />
      <TouchableOpacity
        style={styles.btn}
        onPress={()=>{navigation.navigate("Login")}}>
        <Text style={{ color: '#ffff', fontSize: 20 }}>Sign Up</Text>
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
    borderRadius: 20

  },
  input2: {
    marginTop: '5%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 20
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: '60%',
    padding: 5,
    backgroundColor: "#02367D",
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