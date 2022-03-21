import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import { FormInput } from './components/FormInput'
import { CustomButton } from './components/CustomButton'
import { useNavigation } from '@react-navigation/core'
import { useForm } from 'react-hook-form'
import { useRoute } from '@react-navigation/native'
import { ConfirmEmailNavigationProp, ConfirmEmailRouteProp } from '../../types/navigation'
import { Auth } from 'aws-amplify'

type ConfirmEmailData = {
  username: string
  code: string
}

enum Stage {
  "NONE",
  "CONFIRMING",
  "RESENDING",
}

export const ConfirmEmailScreen = () => {
  const [stage, setStage] = useState<Stage>(Stage.NONE)
  const route = useRoute<ConfirmEmailRouteProp>()
  const { control, handleSubmit, watch } = useForm<ConfirmEmailData>({
    defaultValues: { username: route.params.username },
  })

  const email = watch("username")

  const navigation = useNavigation<ConfirmEmailNavigationProp>()

  const onConfirmPressed = async ({ username, code }: ConfirmEmailData) => {
    setStage(Stage.CONFIRMING)
    try {
      await Auth.confirmSignUp(username, code)
      navigation.navigate('Sign in')
    } catch (e) {
      Alert.alert('Ooops', (e as Error).message)
    } finally {
      setStage(Stage.NONE)
    }
  }

  const onResendPress = async () => {
    setStage(Stage.RESENDING)
    try {
      await Auth.resendSignUp(email)
    } catch (e) {
      Alert.alert('Ooops', (e as Error).message)
    } finally {
      setStage(Stage.NONE)
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <FormInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
          }}
        />

        <FormInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: 'Confirmation code is required',
          }}
        />

        <CustomButton
          text="Confirm"
          onPress={handleSubmit(onConfirmPressed)}
          loading={stage === Stage.CONFIRMING}
        />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
          loading={stage === Stage.RESENDING}
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
