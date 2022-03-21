import React from "react"
import { Navigation } from "./src/navigation"
import Amplify from "aws-amplify"
import config from "./src/aws-exports"
import { AuthContextProvider } from "./src/contexts/AuthContext"

Amplify.configure(config)
// Auth.signOut()

export const App = () => (
  <AuthContextProvider>
    <Navigation />
  </AuthContextProvider>
)
