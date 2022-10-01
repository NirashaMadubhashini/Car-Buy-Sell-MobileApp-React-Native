import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View ,Image,ScrollView, SafeAreaView} from "react-native";

export default function VehicleInfo({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView contentContainerStyle={{height: 1000}}>
    <ScrollView horizontal contentContainerStyle={{width: 1000}}>
    <Text style={{fontSize:20,justifyContent: 'center',color:"black",fontWeight:'bold',paddingTop: '3%',left:20}}>General Cars</Text>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image
              source={require("../assets/cars/Alto.jpeg")}
              style={{
                height: 135,
                width: 200
              }}
            />
            <View style={{ padding: 10, width: 200 }}>
              <Text style={styles.input1}>Suzuki Alto</Text>

              
              <Text style={styles.input2}>
              Transmission type: Manual
              </Text>
              <Text style={styles.input2}>
              Fuel type: Petrol
              </Text>
              <Text style={styles.input2}>
              Color: Red
              </Text>
              <Text style={styles.input2}>
              No of passengers : 7
              </Text>
            </View>
            <Pressable
              style={[styles.button2, styles.buttonClose]}
              // onPress={() => setModalVisible(!modalVisible)}
              onPress={()=>{navigation.navigate("BuyVehicle"),setModalVisible(!modalVisible)}}
            >
              <Text style={styles.textStyle}>Buy Now</Text>
            </Pressable>
            <Pressable
              style={[styles.button3, styles.buttonExit]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={{ backgroundColor: "#A77065", borderRadius: 10, overflow: "hidden", width: 200, height:300,left:-220,top:-280}}>
          <View>
          <View style={{ padding: 10, width: 200 }}>
            <Text style={styles.input1}>Suzuki Alto</Text>
            <Text style={styles.input2}>
            Manual
            </Text>
          </View>
            <Image
              source={require("../assets/cars/Alto.jpeg")}
              style={{
                height: 135,
                width: 200
              }}
            />
          </View>
          <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>View Details</Text>
      </Pressable>

        </View>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image
              source={require("../assets/cars/Alto.jpeg")}
              style={{
                height: 135,
                width: 200
              }}
            />
            <View style={{ padding: 10, width: 200 }}>
              <Text style={styles.input1}>Suzuki Alto</Text>

              
              <Text style={styles.input2}>
              Transmission type: Manual
              </Text>
              <Text style={styles.input2}>
              Fuel type: Petrol
              </Text>
              <Text style={styles.input2}>
              Color: Red
              </Text>
              <Text style={styles.input2}>
              No of passengers : 7
              </Text>
            </View>
            <Pressable
              style={[styles.button2, styles.buttonClose]}
              // onPress={() => setModalVisible(!modalVisible)}
              onPress={()=>{navigation.navigate("BuyVehicle"),setModalVisible(!modalVisible)}}
            >
              <Text style={styles.textStyle}>Buy Now</Text>
            </Pressable>
            <Pressable
              style={[styles.button3, styles.buttonExit]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={{ backgroundColor: "#A77065", borderRadius: 10, overflow: "hidden", width: 200, height:300,left:-450,top:-280}}>
          <View>
          <View style={{ padding: 10, width: 200 }}>
            <Text style={styles.input1}>Suzuki Alto</Text>
            <Text style={styles.input2}>
            Manual
            </Text>
          </View>
            <Image
              source={require("../assets/cars/Alto.jpeg")}
              style={{
                height: 135,
                width: 200
              }}
            />
          </View>
          <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>View Details</Text>
      </Pressable>

      </View>
    </View>
    </ScrollView>
    </ScrollView>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 20
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
    width:300,
    height:400
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    top:20,
    width:150,
    left:25
  },
  button2: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    top:10,
    width:120,
    left:65
  },
  button3: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    top:-28,
    width:120,
    left:-70
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
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input1: {
    fontSize: 20,
    color: "black",
    fontWeight: 'bold',
  },
  input2: {
    fontSize: 15,
    color: "black",
  }
});