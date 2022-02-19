import { StyleSheet } from "react-native"
import colors from "../../theme/color"
import fonts from "../../theme/fonts"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  footerIcon: {
    marginHorizontal: 5,
    marginLeft: "auto"
  },
  text: {
    flex: 1,
    color: colors.black,
    lineHeight: 18,
  },
  textBold: {
    fontWeight: fonts.weight.bold,
  },
  avatar: {
    width: 30,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 5,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginRight: 10,
  },
})
