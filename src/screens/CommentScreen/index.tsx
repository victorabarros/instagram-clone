import React, { useRef, useState } from "react"
import { FlatList, Text, ViewabilityConfig } from "react-native"
import comments from "../../assets/data/comments.json"
import { Comment } from "../../components/Comment"

const CommentScreen = () => {
  const [activatedPost, setactivatedPost] = useState<string>("")

  const onViewableItemsChanged = (data: any) => {
    if (data.viewableItems.length > 0) setactivatedPost(data.viewableItems[0].item.id)
  }

  return (
    <>
      <FlatList
        data={comments}
        renderItem={({ item }) => <Comment {...item} showDetails />}
        showsVerticalScrollIndicator={false}
        viewabilityConfig={{ itemVisiblePercentThreshold: 51 } as ViewabilityConfig}
        onViewableItemsChanged={useRef(onViewableItemsChanged).current}
      />
    </>
  )
}

export default CommentScreen
