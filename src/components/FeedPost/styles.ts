import { StyleSheet } from "react-native"
import colors from "../../theme/color"
import fonts from "../../theme/fonts"

export const styles = StyleSheet.create({
  container: {
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  headerAvatar: {
    height: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 10,
  },
  headerUserName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  headerThreeDots: {
    marginLeft: "auto"
  },
  media: {
    width: "100%",
    aspectRatio: 1,
  },
  footerContainer: {
    padding: 10,
  },
  footerIconContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  footerIcon: {
    marginHorizontal: 5,
  },
  footerBookmark: {
    marginHorizontal: 5,
    marginLeft: "auto",
  },
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  textBold: {
    fontWeight: fonts.weight.bold,
  },
})
