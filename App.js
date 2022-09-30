import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/Login'
import Register from './screens/Register'
import DashBoard from './screens/DashBoard'
import AddVehicle from './screens/AddVehicle'
import VehicleInfo from './screens/VehicleInfo'
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="DashBoard" component={DashBoard} />
        <Tab.Screen name="AddVehicle" component={AddVehicle} />
        <Tab.Screen name="VehicleInfo" component={VehicleInfo} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
