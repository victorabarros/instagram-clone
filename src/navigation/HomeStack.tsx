import React from "react"
import { ProfileScreen } from "../screens/ProfileScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import logo from "../assets/images/logo.png"
import { Image } from "react-native"
import { HomeStackNavigatorParamList } from "./types"

const { Navigator, Screen } = createNativeStackNavigator<HomeStackNavigatorParamList>()

export const HomeStack = () => {
  return (
    <Navigator>
      <Screen
        name="Feed"
        component={HomeScreen}
        options={{ headerTitle: HeaderTitle, headerTitleAlign: "center" }}
      />
      <Screen name="Profile" component={ProfileScreen} />
    </Navigator>
  )
}

const HeaderTitle = () => <Image source={logo} resizeMode="contain" style={{ width: 150, height: 40 }} />
