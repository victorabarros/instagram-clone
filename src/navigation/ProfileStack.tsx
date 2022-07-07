import React from "react"
import { ProfileScreen } from "../screens/ProfileScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ProfileStackNavigatorParamList } from "../types/navigation"
import { EditProfileScreen } from "../screens/ProfileScreen/EditProfileScreen"

const { Navigator, Screen } = createNativeStackNavigator<ProfileStackNavigatorParamList>()

export const ProfileStack = () => {
  return (
    <Navigator>
      <Screen
        name="Profile"
        component={ProfileScreen}
      // options={{ headerShown: false }}
      />
      <Screen
        name="EditProfile"
        component={EditProfileScreen}
      />
    </Navigator>
  )
}
