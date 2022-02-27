import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { ProfileScreen } from "../screens/ProfileScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import { BottomTab } from "./BottomTab"
import CommentScreen from "../screens/CommentScreen"

const { Navigator, Screen } = createNativeStackNavigator()

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>

        <Screen name="Home" component={BottomTab} />

        <Screen name="Comments" component={CommentScreen} />

      </Navigator>
    </NavigationContainer>
  )
}
