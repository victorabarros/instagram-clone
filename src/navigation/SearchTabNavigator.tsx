import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'
// import colors from '../theme/color'
import { SearchTabNavigatorParamList } from '../types/navigation'

const Tab = createMaterialTopTabNavigator<SearchTabNavigatorParamList>()

export const SearchTabNavigator = () => {
  // const insets = useSafeAreaInsets()

  return (
    <Tab.Navigator
    // screenOptions={{
    //   tabBarStyle: { paddingTop: insets.top },
    //   tabBarIndicatorStyle: { backgroundColor: colors.primary },
    // }}
    >
      {/* <Tab.Screen name="Users" component={UserSearchScreen} /> */}
      {/* <Tab.Screen name="Posts" component={HomeScreen} /> */}
    </Tab.Navigator>
  )
}
