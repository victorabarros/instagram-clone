import React from "react"
import { LinkingOptions, NavigationContainer } from "@react-navigation/native"
import { ProfileScreen } from "../screens/ProfileScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import { BottomTab } from "./BottomTab"
import CommentScreen from "../screens/CommentScreen"
import { RootNavigatorParamList } from "./types"
import { Text } from "react-native"

const { Navigator, Screen } = createNativeStackNavigator<RootNavigatorParamList>()

const linking: LinkingOptions<RootNavigatorParamList> = {
  prefixes: ['<https://notjustinsta.com>', 'notjustinsta://'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Comments: 'comments',
      Home: {
        screens: {
          HomeStack: {
            initialRouteName: 'Feed', // <- to be able to go back to the feed
            screens: {
              UserProfile: 'user/:userId'
            }
          }
        }
      }
    },
  },
}

export const Navigation = () => {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Navigator screenOptions={{ headerShown: false }}>

        <Screen name="Home" component={BottomTab} />

        <Screen name="Comments" component={CommentScreen} />

      </Navigator>
    </NavigationContainer>
  )
}
