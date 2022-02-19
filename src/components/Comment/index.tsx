import React, { useState } from "react"
import { Image, Pressable, Text, View } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import colors from "../../theme/color"
import { IUser } from "../FeedPost"
import { styles } from "./styles"


export interface IComment {
  id: string
  comment: string
  user: IUser
  showDetails?: boolean
}

export const Comment = ({ id, user: { username, image }, comment, showDetails = false }: IComment) => {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <View style={styles.container} key={`comment-${id}`}>
      {showDetails && <Image source={{ uri: image }} style={styles.avatar} />}

      <View style={{ flex: 1 }}>
        <Text style={styles.text}>
          <Text style={styles.textBold}>{username}</Text>{" "}{comment}
        </Text>
        {showDetails && (
          <View style={styles.footer}>
            {/* TODO fill these fields from data */}
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>

      <Pressable
        onPress={() => setIsLiked(!isLiked)}
        hitSlop={4}
        style={styles.footerIcon}
      >
        <AntDesign
          name={isLiked ? "heart" : "hearto"}
          color={isLiked ? colors.accent : colors.black}
        />
      </Pressable>
    </View>
  )
}
