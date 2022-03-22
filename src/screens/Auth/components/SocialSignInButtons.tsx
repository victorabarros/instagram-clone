import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'
import { Auth } from 'aws-amplify'
import React from 'react'
import { Alert } from 'react-native'
import { CustomButton } from './CustomButton'

export const SocialSignInButtons = () => {
  const onSignIn = async (provider: CognitoHostedUIIdentityProvider) => {
    try {
      await Auth.federatedSignIn({ provider })
    } catch (e) {
      Alert.alert('Ooops', (e as Error).message)
    }
  }

  const onSignInFacebook = async () => onSignIn(CognitoHostedUIIdentityProvider.Facebook)
  const onSignInGoogle = async () => onSignIn(CognitoHostedUIIdentityProvider.Google)

  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      {/*
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
      */}
    </>
  )
}
