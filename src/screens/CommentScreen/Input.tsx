import React, { useState } from "react"
import { Image, Pressable, Text, TextInput, View } from "react-native"
import { StyleSheet } from "react-native"
import colors from "../../theme/color"


const CommentInput = () => {
  const [comment, setComment] = useState<string>("")
  const onPost = () => {
    console.log(`
      // TODO:
      // disable input and button
      // request comment to server
      // re-render new comment
      // enablesable input and button
      `)
    console.log(comment)
    setComment("")
  }

  return (
    <View style={styles.container}>
      <Image
        // TODO get imagem from current user
        source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg" }}
        style={styles.avatar}
      />
      <TextInput
        style={{ flex: 1 }}
        placeholder="Add a comment..."
        value={comment}
        onChangeText={setComment}
        multiline
      />
      <Pressable
        style={{ marginLeft: "auto" }}
        hitSlop={10}
        onPress={onPost}
      >
        <Text style={{ color: colors.primary, fontWeight: "bold" }}>Post</Text>
      </Pressable>
    </View>
  )
}

export default CommentInput

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    bottom: 0,
    position: "absolute",
    flexDirection: "row",
    borderWidth: .3,
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  avatar: {
    width: 30,
    aspectRatio: 1,
    borderRadius: 15,
    marginRight: 5,
  },
})
