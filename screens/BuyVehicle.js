import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View ,Image,ScrollView, SafeAreaView,TouchableOpacity,Foundation,Button } from "react-native";



export default function BuyVehicle() {
  
  const [visible, setVisible] = useState(false);
1

const Modal_View = () => (
  <Modal transparent={false}
    animationType={"slide"}
    visible={visible}
    onRequestClose={() => setVisible(!visible)}>
    <View style={styleSheet.MainContainer}>
      <View style={styleSheet.modalView}>
        <Text style={styleSheet.text}>Example of Modal in React native </Text>
        <Button title="Click Here To Hide Modal 01" onPress={() => setVisible(!visible)} />
      </View>
    </View>
  </Modal>
);

const Modal_View2 = () => (
  <Modal transparent={false}
    animationType={"slide"}
    visible={visible}
    onRequestClose={() => setVisible(!visible)}>
    <View style={styleSheet.MainContainer2}>
      <View style={styleSheet.modalView2}>
        <Text style={styleSheet.text2}>Example of Modal in React native </Text>
        <Button title="Click Here To Hide Modal 02" onPress={() => setVisible(!visible)} />
      </View>
    </View>
  </Modal>
);

return (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styleSheet.MainContainer}>
      <Modal_View />
      <Button onPress={()=> setVisible(true)} title='Show Modal' />
    </View>
    <View style={styleSheet.MainContainer2}>
    <Modal_View2/>
      <Button onPress={()=> setVisible(true)} title='Show Modal2' />
    </View>
  </SafeAreaView>
  
);
}

const styleSheet = StyleSheet.create({

  MainContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  MainContainer2: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  modalView: {
    width: 300,
    height: 240,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  modalView2: {
    width: 300,
    height: 240,
    backgroundColor: '#00C853',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white'
  },


  text: {
    fontSize: 28,
    textAlign: 'center',
    color: 'white',
    padding: 10
  },

  text2: {
    fontSize: 28,
    textAlign: 'center',
    color: 'white',
    padding: 10
  }
});