import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import ProfileScreen from "../screens/ProfileScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"

const { Navigator, Screen } = createNativeStackNavigator()

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Feed"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Feed" component={HomeScreen} />
        <Screen name="Profile" component={ProfileScreen} />
        {/* <CommentScreen /> */}
      </Navigator>
    </NavigationContainer>
  )
}
