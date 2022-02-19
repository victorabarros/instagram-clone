import React, { useState } from "react"
import { Image, Pressable, Text, View } from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import colors from "../../theme/color"
import { styles } from "./styles"
import { Comment, IComment } from "../Comment"
import { DoublePressable } from "../DoublePressable"
import { Carousel } from "../Carousel"
import { VideoPlayer } from "../Video"

export interface IPost {
  id: string;
  createdAt: string;
  image?: string;
  images?: string[];
  video?: string;
  description: string;
  user: IUser;
  nofComments: number;
  nofLikes: number;
  comments: IComment[];
}

export interface IUser {
  id?: string;
  username: string;
  image?: string;
  images?: string[];
  video?: string;
  // name: string;
  bio?: string;
  posts?: IPost[];
  website?: string;
}

export const FeedPost = (
  { comments, createdAt, description, id, image, images, video, nofComments, nofLikes, user }: IPost
) => {
  const nofLines = 3
  const [showDescription, setShowDescription] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const media = () => {
    if (image) {
      return (
        <DoublePressable onDoublePress={() => setIsLiked(!isLiked)}>
          <Image
            source={{ uri: image }}
            style={styles.media}
          />
        </DoublePressable>
      )
    } else if (images) {
      return (
        <Carousel
          images={images}
          onDoublePress={() => setIsLiked(!isLiked)}
        />
      )
    } else if (video) {
      return (
        <VideoPlayer
          uri={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"}
          onDoublePress={() => setIsLiked(!isLiked)}
        />
      )
    }
    return null
  }

  return (
    <View style={styles.container} key={`post-${id}`}>
      {/* header */}
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: user.image }}
          style={styles.headerAvatar}
        />
        <Text style={styles.headerUserName}>{user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.headerThreeDots}
        />
      </View>

      {/* media */}
      {media()}

      {/* footer */}
      <View style={styles.footerContainer}>
        <View style={styles.footerIconContainer}>
          <AntDesign
            name={isLiked ? "heart" : "hearto"}
            size={24}
            style={styles.footerIcon}
            color={isLiked ? colors.accent : colors.black}
            onPress={() => setIsLiked(!isLiked)}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.footerIcon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.footerIcon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={styles.footerBookmark}
            color={colors.black}
          />
        </View>

        {/* likes */}
        <Text style={styles.text}>
          Liked by{' '}
          {/* <Text style={styles.textBold}>blabla</Text>
          {' '}and{' '} */}
          <Text style={styles.textBold}>{nofLikes} others</Text>
        </Text>

        {/* description */}
        <Text style={styles.text} numberOfLines={showDescription ? 0 : nofLines}>
          <Text style={styles.textBold}>{user.username}</Text>{' '} {description}
        </Text>
        <Text onPress={() => setShowDescription(!showDescription)}>
          {showDescription ? "less" : "more"}
        </Text>

        {/* comments */}
        <Text>View all {nofComments} comments</Text>
        {
          comments
            .map(comment =>
              <Comment key={`post-${id}-comment-${comment.id}`} {...comment} />
            )
        }
        {/* date */}
        <Text style={styles.text}>{createdAt}</Text>
      </View>

    </View>
  )
}
