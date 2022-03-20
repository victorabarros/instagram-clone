import React from "react"
import { Navigation } from "./src/navigation"
import Amplify from "aws-amplify"
import config from "./src/aws-exports"

Amplify.configure(config)
// Auth.signOut()

export const App = () => <Navigation />
