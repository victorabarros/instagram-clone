import { HubCallback } from "@aws-amplify/core"
import { CognitoUser } from "amazon-cognito-identity-js"
import { Auth, Hub } from "aws-amplify"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react"

type UserType = CognitoUser | null | undefined

type AuthContextType = {
  user: UserType,
  setUser: Dispatch<SetStateAction<UserType>>
}

type AuthContextProviderProps = { children: ReactNode }

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  setUser: () => { }
})

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<UserType>(undefined)

  useEffect(() => {
    const run = async () => {
      try {
        const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true })
        setUser(authUser)
      } catch (e) {
        setUser(null)
      }
    }
    run()
  }, [])

  useEffect(() => {
    const listener: HubCallback = (data) => {
      const { event } = data.payload
      if (event == 'signOut') setUser(null)
    }
    Hub.listen("auth", listener)

    // return useEffect is executed when component is unmounted
    // this case we want to remove the channel to avoid data/memory leak
    return () => Hub.remove("auth", listener)
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
