import React from "react"
import { Navigation } from "./src/navigation"
import Amplify from "aws-amplify"
import config from "./src/aws-exports"
import { AuthContextProvider } from "./src/contexts/AuthContext"
import InAppBrowser from "react-native-inappbrowser-reborn"
import { Linking } from "react-native"

const urlOpener = async (url: string, redirectUrl: string) => {
  await InAppBrowser.isAvailable();
  const response = await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
  });

  if (response.type === 'success') Linking.openURL(response.url);
}

Amplify.configure({
  ...config,
  oauth: {
    ...config.oauth,
    urlOpener
  }
})

export const App = () => (
  <AuthContextProvider>
    <Navigation />
  </AuthContextProvider>
)
