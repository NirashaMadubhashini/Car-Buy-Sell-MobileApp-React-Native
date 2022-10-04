import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'


export default function Register({navigation}) {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const saveData = () => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
              fullName: fullName,
              email: email,
              phoneNumber: phoneNumber,
              username: username,
              password: password,
          }),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          },
      })
          .then((response) => {Alert.alert("Save Saved Successfully !")})
          .catch((err)=>{Alert.alert("Error occured !")})
  }




  
  return (
    <View style={styles.container}>
      <Text style={{fontSize:35,justifyContent: 'center',color:"black",fontWeight:'bold',paddingTop: '15%',fontFamily: 'Roboto'}}>Register</Text>
      <Image style={styles.tinyLogo}source={require('../assets/icon/Register.png')} />
      <TextInput style={styles.input1}  value={title} onChangeText={(e) => { setTitle(e) }} placeholder='Full Name'/>
      <TextInput style={styles.input2} placeholder='Email' />
      <TextInput style={styles.input2} placeholder='Phone Number' />
      <TextInput style={styles.input2} placeholder='Username' />
      <TextInput style={styles.input2} placeholder='Password' />
      <TouchableOpacity
        style={styles.btn}
        onPress={()=>{navigation.navigate("Login"),{saveData}}}>
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
    borderRadius: 20,
    fontFamily: 'Roboto'

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
    backgroundColor: "#0266D6",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    borderRadius: 100
  },
  tinyLogo: {
    marginTop: '10%',
    width: 80,
    height: 80,
  }
});