import { TouchableHighlight,Modal, Pressable,Alert, View, Overlay, Text, TextInput, Button, StyleSheet, TouchableOpacity, Card, Box, Image, ImageBackground, ListItem, ScrollView, SafeAreaView, Surface, Stack } from 'react-native'
import React, { useState,Component} from 'react'
import { Picker } from "@react-native-picker/picker";
import RadioGroup from 'react-native-radio-buttons-group';
import { RadioButton } from 'react-native-paper';
import PickerModal from 'react-native-picker-modal-view';

export default function BuyVehicle() {

  const [brand, setBrand] = useState('Unknown');
  const [transmission, setTransmission] = useState('Unknown');
  const [fuel, setFuel] = useState('Unknown');
  const [payment, setPayment] = useState('Unknown')

  const [value, setValue] = React.useState('first');

  const simpleAlertHandler = () => {
    alert('Payment Succefully');
  };

  const [modalVisible, setModalVisible] = useState(true);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 20, justifyContent: 'center', color: "black", fontWeight: 'bold', paddingTop: '9%', left: -65, fontFamily: 'notoserif' }}>Purchase Vehicle</Text>
        <Picker
          selectedValue={brand}
          onValueChange={(value, index) => setBrand(value)}
          mode="dropdown" // Android only
          style={styles.picker}
        >
          <Picker.Item label="Select the Brand" value="Unknown" />
          <Picker.Item label="Suzuki Alto" value="Suzuki Alto" />
          <Picker.Item label="Suzuki Alto K10" value="Suzuki Alto K10" />
          <Picker.Item label="Suzuki Celerio" value="Suzuki Celerio" />
          <Picker.Item label="Perodua Axia" value="Perodua Axia" />
          <Picker.Item label="Toyota Corolla Axio" value="Toyota Corolla Axio" />
          <Picker.Item label="Perodua Bezza" value="Perodua Bezza" />
          <Picker.Item label="Toyota Allion NZT" value="Toyota Allion NZT" />
          <Picker.Item label="Toyota Axio NKR" value="Toyota Axio NKR" />
          <Picker.Item label="BMW i8" value="BMW i8" />
          <Picker.Item label="Mercedes" value="Mercedes" />
          <Picker.Item label="Audi" value="Audi" />
          <Picker.Item label="Toyota Premio" value="Toyota Premio" />

        </Picker>

        <Picker
          selectedValue={transmission}
          onValueChange={(value, index) => setTransmission(value)}
          mode="dropdown" // Android only
          style={styles.picker}
        >
          <Picker.Item label="Select the Transmission type" value="Unknown" />
          <Picker.Item label="Auto" value="Auto" />
          <Picker.Item label="Manual" value="Manual" />
        </Picker>

        <View style={styles.radioButton}>
        <Text style={{fontSize:18,color:"black",fontFamily: 'notoserif',left:10}}>Fuel Type</Text>
          <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
            <RadioButton.Item
              label="Petrol" value="first"
            />

            <RadioButton.Item
              label="Diesel" value="second"
            />
          </RadioButton.Group>
        </View>

        <TextInput style={styles.input1} placeholder='Colour' />

        <Picker
          selectedValue={payment}
          onValueChange={(value, index) => setPayment(value)}
          mode="dropdown" // Android only
          style={styles.picker}
        >
          <Picker.Item label="Select Payment Method" value="Unknown" />
          <Picker.Item label="Card" value="Card" />
          <Picker.Item label="Cash" value="Cash" />
        </Picker>

        <TextInput style={styles.input1} placeholder='Amount' />

        <Pressable
          style={[styles.button, styles.buttonClose]}
         title="Simple Alert" onPress={simpleAlertHandler}
        >
          <Text style={styles.textStyle}>Pay Now</Text>
        </Pressable>

      </View>
    </SafeAreaView>
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
    borderRadius: 10,
    left:-10
  },
  input2: {
    marginTop: '5%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 10
  },
  picker: {
    marginVertical: -5,
    width: 300,
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
    marginTop: '5%',
    left: -18
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    top: 45,
    width: 200,
    left: -10
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
    textAlign: "center"
  },
  radioButton: {
    top: 25,
    left: -108,
  },
  radioButton2: {
    top: 45,
    left: -105
  },
});