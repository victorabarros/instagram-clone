import React from "react"
import { FlatList } from "react-native"
import { FeedPost } from "../../components/FeedPost"
import posts from "../../assets/data/posts.json"

const HomeScreen = () => {
  return (
    <FlatList
      // better then use .map for long lists
      data={posts}
      renderItem={({ item }) => <FeedPost {...item} />}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default HomeScreen
