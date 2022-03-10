import React from "react"
import { Navigation } from "./src/navigation"
import Amplify, { Auth } from "aws-amplify"
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native"
import config from "./src/aws-exports"

Amplify.configure(config)
// Auth.signOut()

const App = () => <Navigation />

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Username",
      key: "username",
      required: true,
      displayOrder: 1,
      type: "string",
      placeholder: "Username",
    },
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 2,
      type: "string",
      placeholder: "Email",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 3,
      type: "string",
      placeholder: "Password",
    }
  ]
}

const customTheme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: "blue",
    borderRadius: 100,
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor: "lightblue",
    borderRadius: 100,
  },
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    color: "blue",
  },
}

export default withAuthenticator(App, { signUpConfig, theme: customTheme })
