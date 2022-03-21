import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import { FormInput } from './components/FormInput'
import { CustomButton } from './components/CustomButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { NewPasswordNavigationProp, NewPasswordRouteProp } from '../../types/navigation'
import { Auth } from 'aws-amplify'

type NewPasswordType = {
  username: string
  code: string
  password: string
}

export const NewPasswordScreen = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const { control, handleSubmit } = useForm<NewPasswordType>()

  const navigation = useNavigation<NewPasswordNavigationProp>()

  const route = useRoute<NewPasswordRouteProp>()
  const username = route.params?.username

  const onSubmitPressed = async ({ username, code, password }: NewPasswordType) => {
    setLoading(true)
    try {
      await Auth.forgotPasswordSubmit(username, code, password)
      navigation.navigate('Sign in')
    } catch (e) {
      Alert.alert('Ooops', (e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <FormInput
          placeholder="Username"
          name="username"
          control={control}
          rules={{ required: 'Username is required' }}
          defaultValue={username ? username : ""}
        />

        <FormInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{ required: 'Code is required' }}
        />

        <FormInput
          placeholder="Enter your new password"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />

        <CustomButton
          text="Submit"
          onPress={handleSubmit(onSubmitPressed)}
          loading={loading}
        />

        <CustomButton
          text="Back to Sign in"
          onPress={() => navigation.navigate('Sign in')}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
})
