import React from "react"
import { FlatList, Image, StyleSheet, View } from "react-native"
import user from "../../assets/data/user.json"
import { ProfileHeader } from "./ProfileHeader"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const GridItem = ({ post }: any) => (
  <View style={styles.imageContainer}>
    <Image source={{ uri: post.image || post.images[0] }} style={{ flex: 1 }} />
    {post.images &&
      <MaterialIcons
        name="collections"
        size={16}
        style={styles.icon}
        color="white"
      />
    }
  </View>
)

const ProfileScreen = () => (
  <FlatList
    ListHeaderComponent={ProfileHeader}
    data={user.posts}
    numColumns={3}
    renderItem={
      ({ item }) => <GridItem key={`post-${item.id}`} post={item} />
    }
    showsVerticalScrollIndicator={false}
    style={styles.root}
  />
)

export default ProfileScreen

const styles = StyleSheet.create({
  root: {
    marginHorizontal: -1
  },
  imageContainer: {
    flex: 1,
    aspectRatio: 1,
    maxWidth: `${100 / 3}%`,
    padding: 1
  },
  icon: {
    position: "absolute",
    right: 1,
    top: 1
  },
})
