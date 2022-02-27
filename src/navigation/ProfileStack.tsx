import React from "react"
import { ProfileScreen } from "../screens/ProfileScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import logo from "../assets/images/logo.png"
import { Image } from "react-native"

const { Navigator, Screen } = createNativeStackNavigator()

export const ProfileStack = () => {
  return (
    <Navigator>
      <Screen
        name="Profile"
        component={ProfileScreen}
      // options={{ headerShown: false }}
      />
      <Screen name="EditProfile" component={() => (<></>)} />
    </Navigator>
  )
}

const HeaderTitle = () => <Image source={logo} resizeMode="contain" style={{ width: 150, height: 40 }} />
