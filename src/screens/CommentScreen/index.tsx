import React from "react"
import { FlatList, View } from "react-native"
import comments from "../../assets/data/comments.json"
import { Comment } from "../../components/Comment"
import CommentInput from "./Input"


const CommentScreen = () => {
  return (
    <View>
      <FlatList
        data={comments}
        renderItem={({ item }) => <Comment {...item} showDetails />}
        showsVerticalScrollIndicator={false}
      />
      <CommentInput />
    </View>
  )
}

export default CommentScreen
