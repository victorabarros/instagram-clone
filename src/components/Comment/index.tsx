import React from "react"
import { Text, View } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import colors from "../../theme/color"
import { IUser } from "../FeedPost"
import { styles } from "./styles"


export interface IComment {
  id: string
  comment: string
  user: IUser
}

export const Comment = ({ id, user: { username }, comment }: IComment) => (
  <View style={styles.container} key={`comment-${id}`}>
    <Text style={styles.text}>
      <Text style={styles.textBold}>{username}</Text>{" "}{comment}
    </Text>
    <AntDesign name={"hearto"} style={styles.footerIcon} color={colors.black} />
  </View>
)