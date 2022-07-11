import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen"
import { ProfileScreen } from "../screens/ProfileScreen"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { HomeStack } from "./HomeStack";
import { ProfileStack } from "./ProfileStack";
import { BottomTabNavigatorParamList } from "../types/navigation";
// import { SearchTabNavigator } from "./SearchTabNavigator";

const { Navigator, Screen } = createBottomTabNavigator<BottomTabNavigatorParamList>()

export const BottomTab = () => {
  return (
    <Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false, tabBarActiveTintColor: "blue", tabBarInactiveTintColor: "lightgrey" }}>
      <Screen name="HomeStack" component={HomeStack} options={{ tabBarIcon: HomeStackIcon }} />
      {/* <Screen name="Search" component={SearchTabNavigator} options={{ tabBarIcon: SearchIcon }} /> */}
      <Screen name="Upload" component={() => (<></>)} options={{ tabBarIcon: UploadIcon }} />
      <Screen name="Notifications" component={() => (<></>)} options={{ tabBarIcon: NotificationIcon }} />
      <Screen name="MyProfile" component={ProfileStack} options={{ tabBarIcon: MyProfileIcon }} />
    </Navigator>
  )
}

const HomeStackIcon = ({ color, size }: any) => (<MaterialIcons name="home-filled" size={size} color={color} />)
const SearchIcon = ({ color, size }: any) => (<MaterialIcons name="search" size={size} color={color} />)
const UploadIcon = ({ color, size }: any) => (<MaterialCommunityIcons name="plus-circle-outline" size={size} color={color} />)
const NotificationIcon = ({ color, size }: any) => (<MaterialCommunityIcons name="heart-outline" size={size} color={color} />)
const MyProfileIcon = ({ color, size }: any) => (<FontAwesome name="user-circle-o" size={size} color={color} />)
