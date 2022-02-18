import { StyleSheet } from "react-native"
import colors from "../../theme/color"
import fonts from "../../theme/fonts"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  footerIcon: {
    marginHorizontal: 5,
  },
  text: {
    flex: 1,
    color: colors.black,
    lineHeight: 18,
  },
  textBold: {
    fontWeight: fonts.weight.bold,
  },
})
