import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

export type RootNavigatorParamList = {
  Auth: undefined
  Home: undefined
  Comments: { postId: string }
}

export type BottomTabNavigatorParamList = {
  HomeStack: undefined
  Search: undefined
  Upload: undefined
  Notifications: undefined
  MyProfile: undefined
}

export type SearchTabNavigatorParamList = {
  Users: undefined;
  Posts: undefined;
}

export type MyProfileNavigationProp = BottomTabNavigationProp<
  BottomTabNavigatorParamList,
  'MyProfile'
>

export type MyProfileRouteProp = RouteProp<
  BottomTabNavigatorParamList,
  'MyProfile'
>

export type HomeStackNavigatorParamList = {
  Feed: undefined
  Comments: { postId: string }
  Profile: { userId: string }
}

export type UserProfileNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Profile'
>

export type UserProfileRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'Profile'
>

export type FeedNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Feed'
>

export type ProfileStackNavigatorParamList = {
  Profile: undefined
  'EditProfile': undefined
}

export type ProfileNavigationProp = NativeStackNavigationProp<
  ProfileStackNavigatorParamList,
  'Profile'
>

// Auth Stack Navigator
export type AuthStackNavigatorParamList = {
  'Sign in': undefined
  'Sign up': undefined
  'Confirm email': { email?: string }
  'Forgot password': undefined
  'New password': { email?: string }
}

export type SignInNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Sign in'
>

export type SignUpNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Sign up'
>

export type ConfirmEmailNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Confirm email'
>
export type ConfirmEmailRouteProp = RouteProp<
  AuthStackNavigatorParamList,
  'Confirm email'
>

export type ForgotPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Forgot password'
>

export type NewPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'New password'
>
export type NewPasswordRouteProp = RouteProp<
  AuthStackNavigatorParamList,
  'New password'
>
