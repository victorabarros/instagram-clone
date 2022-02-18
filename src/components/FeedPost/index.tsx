import React from "react"
import { Image, Text, View } from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import colors from "../../theme/color"
import { styles } from "./styles"
import { Comment, IComment } from "../Comment"

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
  // name: string;
  bio?: string;
  posts?: IPost[];
  website?: string;
}

export const FeedPost = (
  { comments, createdAt, description, id, image, nofComments, nofLikes, user }: IPost
) => {
  const isLiked = false
  const userName = "UserName.Test"

  return (
    <View style={styles.container}>
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
      <Image
        source={{ uri: image }}
        style={styles.media}
      />

      {/* footer */}
      <View style={styles.footerContainer}>
        <View style={styles.footerIconContainer}>
          <AntDesign
            name={isLiked ? "heart" : "hearto"}
            size={24}
            style={styles.footerIcon}
            color={colors.black} />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.footerIcon}
            color={colors.black} />
          <Feather
            name="send"
            size={24}
            style={styles.footerIcon}
            color={colors.black} />
          <Feather
            name="bookmark"
            size={24}
            style={styles.footerBookmark}
            color={colors.black} />
        </View>

        {/* likes */}
        <Text style={styles.text}>
          Liked by{' '}
          {/* <Text style={styles.textBold}>blabla</Text>
          {' '}and{' '} */}
          <Text style={styles.textBold}>{nofLikes} others</Text>
        </Text>

        {/* description */}
        <Text style={styles.text}>
          <Text style={styles.textBold}>{user.username}</Text>{' '} {description}
        </Text>

        {/* comments */}
        <Text>View all {nofComments} comments</Text>
        {
          comments
            .map(comment =>
              <Comment {...comment} />
            )
        }
        {/* date */}
        <Text style={styles.text}>{createdAt}</Text>
      </View>

    </View>
  )
}
