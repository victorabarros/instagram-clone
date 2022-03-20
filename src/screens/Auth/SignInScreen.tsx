import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from 'react-native'
import Logo from '../../assets/images/logo.png'
import { FormInput } from './components/FormInput'
import { CustomButton } from './components/CustomButton'
import { SocialSignInButtons } from './components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { SignInNavigationProp } from '../../types/navigation'
import { Auth } from 'aws-amplify'
import { useState } from 'react'

type SignInData = {
  username: string
  password: string
}

export const SignInScreen = () => {
  const { height } = useWindowDimensions()
  const navigation = useNavigation<SignInNavigationProp>()
  const [loading, setLoading] = useState<boolean>(false)

  const { control, handleSubmit } = useForm<SignInData>()

  const onSignInPressed = async ({ username, password }: SignInData) => {
    setLoading(true)
    try {
      await Auth.signIn(username, password)
      // TODO save user in context
      // navigation.navigate('Home')
    } catch (e) {
      Alert.alert('Ooops', (e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const onForgotPasswordPressed = () => {
    navigation.navigate('Forgot password')
  }

  const onSignUpPress = () => {
    navigation.navigate('Sign up')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        <FormInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: 'Username is required' }}
        />

        <FormInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />

        <CustomButton
          text="Sign In"
          onPress={handleSubmit(onSignInPressed)}
          loading={loading}
        />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
})
