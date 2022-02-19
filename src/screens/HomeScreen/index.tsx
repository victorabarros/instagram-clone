import React, { useRef, useState } from "react"
import { FlatList, ViewabilityConfig } from "react-native"
import { FeedPost } from "../../components/FeedPost"
import posts from "../../assets/data/posts.json"

const HomeScreen = () => {
  const [activatedPost, setactivatedPost] = useState<string>("")

  const onViewableItemsChanged = (data: any) => {
    if (data.viewableItems.length > 0) setactivatedPost(data.viewableItems[0].item.id)
  }

  return (
    <>
      <FlatList
        data={posts}
        renderItem={({ item }) => <FeedPost isActivated={activatedPost === item.id} {...item} />}
        showsVerticalScrollIndicator={false}
        viewabilityConfig={{ itemVisiblePercentThreshold: 51 } as ViewabilityConfig}
        onViewableItemsChanged={useRef(onViewableItemsChanged).current}
      />
    </>
  )
}

export default HomeScreen
