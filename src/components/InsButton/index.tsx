import React from "react"
import { Text, View } from "react-native"


export const InsButton = (props: any) => {
  return (
    <View style={{ borderWidth: .2, borderRadius: 1, padding: 3, flex: 1, justifyContent: "center", alignItems: "center", margin: 5 }}>
      <Text style={{ color: "black", fontWeight: "500" }} {...props}>{props.label}</Text>
    </View>
  )
}
