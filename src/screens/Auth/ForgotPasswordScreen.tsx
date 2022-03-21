import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import { FormInput } from './components/FormInput'
import { CustomButton } from './components/CustomButton'
import { useNavigation } from '@react-navigation/core'
import { useForm } from 'react-hook-form'
import { ForgotPasswordNavigationProp } from '../../types/navigation'
import { Auth } from 'aws-amplify'
import { EMAIL_REGEX } from './SignUpScreen'

type ForgotPasswordData = {
  email: string
}

export const ForgotPasswordScreen = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const { control, handleSubmit } = useForm<ForgotPasswordData>()
  const navigation = useNavigation<ForgotPasswordNavigationProp>()

  const onSendPressed = async ({ email }: ForgotPasswordData) => {
    setLoading(true)
    try {
      const resp = await Auth.forgotPassword(email)
      Alert.alert(
        "Check your email",
        `The code has been sent to ${resp.CodeDeliveryDetails.Destination}`
      )
      navigation.navigate('New password', { email })
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
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: { value: EMAIL_REGEX, message: 'Email is invalid' }
          }}
        />

        <CustomButton
          text="Send"
          onPress={handleSubmit(onSendPressed)}
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
