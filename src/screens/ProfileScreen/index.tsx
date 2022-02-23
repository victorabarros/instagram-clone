import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import user from "../../assets/data/user.json"


const ProfileScreen = () => {
  const { image, posts, followers, following } = user

  return (
    <View style={styles.root}>
      {/* header */}
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: image }}
          style={styles.userImage}
        />
        <View style={styles.profileDataContainer}>
          {[
            [posts.length, "Posts"],
            [followers, "Followers"],
            [following, "Following"],
          ].map(([value, name]) => (
            <View key={`prop-${name}`} style={styles.profileData}>
              <Text style={styles.profileDataValue}>{value}</Text>
              <Text>{name}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* bio */}
      <View style={styles.bioContainer}>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={{}}>{user.bio}</Text>
      </View>

    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
  },
  userImage: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
  profileDataContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  profileData: {
    alignItems: "center",
  },
  profileDataValue: {
    fontWeight: "bold",
    fontSize: 18,
    color: 'black',
  },
  bioContainer: {
    marginVertical: 10,
  },
  userName: {
    fontWeight: 'bold',
    color: 'black',
  },
})
