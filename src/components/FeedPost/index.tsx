import React from "react"
import { Image, Text, View } from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import colors from "../../theme/color"
import { styles } from "./styles"


export const FeedPost = () => {
  const isLiked = false
  const userName = "UserName.Test"

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: "https://pbs.twimg.com/media/EbNX_erVcAUlwIx?format=jpg&name=small" }}
          style={styles.headerAvatar}
        />
        <Text style={styles.headerUserName}>{userName}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.headerThreeDots}
        />
      </View>

      {/* media */}
      <Image
        source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg" }}
        style={styles.media}
      />

      {/* footer */}
      <View style={styles.footerContainer}>
        <View style={styles.footerIconContainer}>
          <AntDesign name={isLiked ? "heart" : "hearto"} size={24} style={styles.footerIcon} color={colors.black} />
          <Ionicons name="chatbubble-outline" size={24} style={styles.footerIcon} color={colors.black} />
          <Feather name="send" size={24} style={styles.footerIcon} color={colors.black} />
          <Feather name="bookmark" size={24} style={styles.footerBookmark} color={colors.black} />
        </View>

        {/* likes */}
        <Text style={styles.text}>
          Liked by{' '}
          <Text style={styles.textBold}>blabla</Text>
          {' '}and{' '}
          <Text style={styles.textBold}>55 others</Text>
        </Text>

        {/* description */}
        <Text style={styles.text}>
          <Text style={styles.textBold}>{userName}</Text>
          {' '} decription decription decription decription decription decription decription
        </Text>

        {/* comments */}
        <View style={{}}>
          {
            [
              { user: "user2", comment: "nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice " },
              { user: "user._3", comment: "cute cute cute cute " },
            ].map(({ user, comment }, idx) => (
              <View key={`comment-${user}-${idx}`} style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={[styles.text, { flex: 1 }]}>
                  <Text style={styles.textBold}>{user}</Text>
                  {` ${comment}`}
                </Text>
                <AntDesign name={"hearto"} style={styles.footerIcon} color={colors.black} />
              </View>
            ))
          }
        </View>
        {/* date */}
        <Text style={styles.text}>January 25, 2022</Text>
      </View>

    </View>
  )
}
