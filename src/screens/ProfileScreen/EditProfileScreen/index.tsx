import React from "react"
import { Controller, useForm } from "react-hook-form"
import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import user from "../../../assets/data/user.json"
import { IUser } from "../../../components/FeedPost"
import colors from "../../../theme/color"

type IEditableUserFields = "username" | "website" | "bio"
type IEditableUser = Pick<IUser, IEditableUserFields>

const CustomInput = ({ control, name, label }: any) => (
  <Controller
    control={control}
    name={name as IEditableUserFields}
    render={({ field: { onChange, value, onBlur } }) => (
      <View style={styles.contentBox}>
        <Text style={styles.contentLabel}>{label}</Text>
        <TextInput
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          placeholder={label}
          multiline
        />
      </View>
    )}
  />
)


export const EditProfileScreen = () => {
  const { control, handleSubmit, setValue } = useForm<IEditableUser>();

  return (
    <View style={styles.root}>
      <Image source={{ uri: user.image }} style={styles.userImage} />
      <Text style={styles.textButton} onPress={() => console.log("change photo")}>Change profile photo</Text>

      {[
        { label: "Username", name: "username" },
        { label: "Website", name: "website" },
        { label: "Bio", name: "bio" },
      ].map(({ label, name }) =>
        <CustomInput
          key={`profile-content-${label}`}
          control={control}
          name={name}
          label={label}
        />
      )}

      <Text
        style={styles.textButton}
        onPress={handleSubmit((data: IEditableUser) => console.log("submit", data))}
      >Submit</Text>
    </View>
  )
}
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
