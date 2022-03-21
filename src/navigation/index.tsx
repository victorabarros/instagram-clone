import React from "react"
import { LinkingOptions, NavigationContainer } from "@react-navigation/native"
import { ProfileScreen } from "../screens/ProfileScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import { BottomTab } from "./BottomTab"
import CommentScreen from "../screens/CommentScreen"
import { RootNavigatorParamList } from "../types/navigation"
import AuthStackNavigator from "./AuthStackNavigator"
import { useAuthContext } from "../contexts/AuthContext"
import { Loading } from "../components/Loading"

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
  const { user } = useAuthContext()

  if (user === undefined) return <Loading />

  return (
    <NavigationContainer linking={linking} fallback={<Loading />}>
      <Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>

        {user
          ?
          <>
            <Screen name="Home" component={BottomTab} />
            <Screen name="Comments" component={CommentScreen} />
          </>
          :
          <Screen name="Auth" component={AuthStackNavigator} />
        }

      </Navigator>
    </NavigationContainer>
  )
}
