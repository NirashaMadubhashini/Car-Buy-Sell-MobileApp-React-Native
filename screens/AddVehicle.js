import { HStack, View, Text, TextInput, Input, Platform, StyleSheet, Box, TouchableOpacity, Image, ImageBackground, TextArea, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { IconButton, MD3Colors, Button } from 'react-native-paper'
import ImagePicker from 'react-native-image-crop-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function AddVehicle() {

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, justifyContent: 'center', color: "black", fontWeight: 'bold', paddingTop: '30%', left: -65, fontFamily: 'notoserif' }}>Add New Vehicle</Text>
          <TextInput style={styles.input1} placeholder='Date' />
          <TextInput style={styles.input2} placeholder='Location' />

          <View style={styles.MainContainer}>
            <TextInput
              style={styles.TextInputStyleClass}
              underlineColorAndroid="transparent"
              placeholder={"Add Vehicle Description Here"}
              placeholderTextColor={"#9E9E9E"}
              numberOfLines={10}
              multiline={true}
            />
          </View>

          {/* <View style={{
            borderWidth: 1,
            borderColor: '#2A272A',
            borderRadius: 10,
            width: 200,
            height: 150,
            

          }} /> */}


          <Image style={styles.uploadImageContainer} source={{ uri: photo }} />

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


          <TouchableOpacity
            style={styles.btn}>
            <Text style={{ color: '#ffff', fontSize: 20, }}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn2}>
            <Text style={{ color: '#ffff', fontSize: 20, }}>Cancel</Text>
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
    backgroundColor: "#23B671",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '24%',
    // marginLeft: '-43%',
    top: 20,
    borderRadius: 20
  },
  btn2: {
    width: '40%',
    padding: 5,
    backgroundColor: "red",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: '-4%',
    // marginLeft: '45%',
    top: -30,
    left: 10,
    borderRadius: 20
  },
  button: {
    width: '80%',
    padding: 5,
    backgroundColor: "#274BF7",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3%',
    borderRadius: 20,
    borderColor: "black"
  },
  MainContainer: {

    flex: 2,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    justifyContent: 'center',
    margin: 30,
    width: 290

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
    width: '80%',
    height: '30%',
    // marginTop: '2.5%',
    alignSelf: 'center',
    resizeMode: 'cover'

  },
});