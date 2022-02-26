import React from "react"
import { View } from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import ProfileScreen from "../screens/ProfileScreen"

export const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <HomeScreen /> */}
      {/* <CommentScreen /> */}
      <ProfileScreen />
    </NavigationContainer>
  )
}
