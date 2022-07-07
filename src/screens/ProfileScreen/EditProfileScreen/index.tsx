import React from "react"
import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import user from "../../../assets/data/user.json"
import colors from "../../../theme/color"


export const EditProfileScreen = () => (
  <View style={styles.root}>
    <Image source={{ uri: user.image }} style={styles.userImage} />
    <Text style={styles.textButton} onPress={() => console.log("change photo")}>Change profile photo</Text>

    {[
      { label: "Name", value: user.name },
      { label: "Username", value: user.username },
      { label: "Website", value: user.website },
      { label: "Bio", value: user.bio },
    ].map(({ label, value }) => (
      <View key={`profile-content-${label}`} style={styles.contentBox}>
        <Text style={styles.contentLabel}>{label}</Text>
        <TextInput
          value={value}
          placeholder={label}
          multiline
        />
      </View>
    ))}

    <Text style={styles.textButton} onPress={() => console.log("submit")}>Submit</Text>
  </View>
)

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  userImage: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  textButton: {
    fontWeight: 'bold',
    color: colors.secondary,
    margin: 8
  },
  contentBox: {
    alignSelf: "stretch", // width: "100%",
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: .5,
    borderColor: colors.border,
  },
  contentLabel: {
    fontWeight: 'bold',
    width: 70,
    color: colors.grey,
  },
})
