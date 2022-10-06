import React from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const image = { uri: "https://tse3.mm.bing.net/th?id=OIP.QO64VUnSdMwR7R2l_HBgFwHaNK&pid=Api&P=0" };


export default function Welcome({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        try {
                            navigation.navigate("Login")
                        } catch (err) {
                            console.log(err);
                        }
                    }}
                >
                    <Text style={{ color: '#131525', fontSize: 20, fontWeight: 'bold' }}>Login</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn2}
                    onPress={() => {
                        try {
                            navigation.navigate("Register")
                        } catch (err) {
                            console.log(err);
                        }
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Create an account</Text>

                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    btn: {
        width: '80%',
        padding: 5,
        backgroundColor: "white",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '120%',
        marginLeft: '10%',
        borderRadius: 10
    },
    btn2: {
        width: '80%',
        padding: 5,
        // backgroundColor: "#B9B9B9",
        borderColor:'white',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
        marginLeft: '10%',
        borderRadius: 10,
        borderWidth:3
    },
});