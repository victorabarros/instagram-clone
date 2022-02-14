import React from "react"
import { Text, View } from "react-native"
import fonts from "./src/theme/fonts"
import colors from "./src/theme/color"


const App = () => {
  return (
    <View style={{ alignItems: "center", flex: 1, justifyContent: "center", backgroundColor: colors.primary }}>
      <Text style={{ fontSize: fonts.size.xxlg }}>Hellou</Text>
    </View>
  )
}

export default App;
