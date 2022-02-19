import React, { useRef, useState } from "react"
import { Button, FlatList, Image, Pressable, Text, TextInput, View, ViewabilityConfig } from "react-native"
import comments from "../../assets/data/comments.json"
import { Comment } from "../../components/Comment"
import { StyleSheet } from "react-native"

const CommentScreen = () => {
  return (
    <View>
      <FlatList
        data={comments}
        renderItem={({ item }) => <Comment {...item} showDetails />}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.commentInputContainer}>
        <Image
          // TODO get imagem from current user
          source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg" }}
          style={styles.avatar}
        />
        <TextInput placeholder="Add a comment..." />
        <Pressable
          style={{ marginLeft: "auto" }}
          hitSlop={10}
          onPress={() => {
            console.log(`
            // TODO:
            // disable input and button
            // request comment to server
            // re-render new comment
            // enablesable input and button
            `)
          }}
        >
          <Text style={{ color: "blue", fontWeight: "bold" }}>Post</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default CommentScreen

export const styles = StyleSheet.create({
  commentInputContainer: {
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
