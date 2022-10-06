import { HStack, View, Text, TextInput, Input, Platform, StyleSheet, Box, Alert, TouchableOpacity, Image, ImageBackground, TextArea, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { IconButton, MD3Colors, Button } from 'react-native-paper'
import ImagePicker from 'react-native-image-crop-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function AddVehicle() {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [photo, setPhoto] = useState(null);

  const takePhotoFromCamera = async () => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: true,
      presentationStyle: 'popover',
      quality: 1
    }
    launchCamera(options, (res) => {
      if (res.didCancel) {
        console.log('User Cancled');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0].uri;
        console.log(data);
        setPhoto(data);
      }
    });
  }

  const takePhotoFromGallery = async () => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo'
    }
    const result = await launchImageLibrary(options);
    setPhoto(result.assets[0].uri);
  }


  saveCar = async () => {

    // if (date != "" && location != "" && description != "" && image != "") {
    if (date != "" && location != "" && description != "") {
      fetch('http://192.168.1.100:8000/cars', {
        method: 'POST',
        body: JSON.stringify({
          date: date,
          location: location,
          description: description,
          image: image
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.status === "500") {
            Alert.alert(json.message);
          } else {
            Alert.alert(json.message);
            clearTextFields();
          }
        })
        .catch((err) => Alert.alert(err));
    } else {
      Alert.alert("Please fill all the fields and try again.")
    }
  }

  const clearTextFields = () => {
    setDate("");
    setLocation("");
    setDescription("");
    // setImage("");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ScrollView contentContainerStyle={{ height: 900 }}> */}
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, justifyContent: 'center', color: "black", fontWeight: 'bold', paddingTop: '30%', left: -65, fontFamily: 'notoserif' }}>Add New Vehicle</Text>

          <Image style={styles.uploadImageContainer} source={{ uri: photo }}
            value={image} onChangeText={(e) => { setImage(e) }}
          />


          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../assets/icon/upload1.png')}
              style={{ width: 25, height: 25, left: -80, top: 10 }}
            />
            <Text style={{ color: '#ffff', fontSize: 20, left: 10, top: -15 }}
              mode="contained-tonal"
              onPress={() => { takePhotoFromGallery(); console.log("Upload button Pressed"); }}
            >Upload Image</Text>
          </TouchableOpacity>
          <TextInput style={styles.input1} placeholder='Date' value={date} onChangeText={(e) => { setDate(e) }} />
          <TextInput style={styles.input2} placeholder='location' value={location} onChangeText={(e) => { setLocation(e) }} />

          <View style={styles.MainContainer}>
            <TextInput
              style={styles.TextInputStyleClass}
              underlineColorAndroid="transparent"
              placeholder={"Add Vehicle Description Here"}
              placeholderTextColor={"#9E9E9E"}
              numberOfLines={10}
              multiline={true}
              value={description} onChangeText={(e) => { setDescription(e) }}
            />
          </View>

          {/* <View style={{
            borderWidth: 1,
            borderColor: '#2A272A',
            borderRadius: 10,
            width: 200,
            height: 150,
            

          }} /> */}


          <TouchableOpacity
            style={styles.btn}
            onPress={() => { saveCar() }}>
            <Text style={{ color: '#ffff', fontSize: 20}}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn2}>
            <Text style={{ color: '#ffff', fontSize: 20}}>Cancel</Text>
          </TouchableOpacity>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
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
    width: '40%',
    padding: 5,
    backgroundColor: "#055BC7",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // top: -35,
    // left: -85,
    top: -35,
    left: -5,
    borderRadius: 15
  },
  btn2: {
    width: '40%',
    padding: 5,
    backgroundColor: "red",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // top: -85,
    top: -15,
    left: 85,
    borderRadius: 15
  },
  button: {
    width: '80%',
    padding: 5,
    backgroundColor: "#23B671",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3%',
    borderRadius: 15,
    borderColor: "black"
  },
  MainContainer: {
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    justifyContent: 'center',
    margin: 30,
    width: 290,
    top: -10

  },

  TextInputStyleClass: {

    textAlign: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: '#2A272A',
    borderRadius: 10,
    // backgroundColor: "#FFFFFF",
    height: 120

  },
  uploadImageContainer: {
    borderColor: 'black',
    borderWidth: 1,
    width: '50%',
    height: '25%',
    marginTop: '5%',
    alignSelf: 'center',
    resizeMode: 'cover'

  },
  captureBtn: {
    marginTop: '4%'
  },
});