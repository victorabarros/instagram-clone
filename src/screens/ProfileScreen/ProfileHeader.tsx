import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import user from "../../assets/data/user.json"
import { InsButton } from "../../components/InsButton"


export const ProfileHeader = () => {
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
        <Text>{user.bio}</Text>
      </View>

      {/* buttons */}
      <View style={styles.buttonsContainer}>
        <InsButton label="Edit Profile" onPress={() => console.log("button")} />
        <InsButton label="Another Button" onPress={() => console.log("button")} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
    marginVertical: 5,
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
    marginVertical: 5,
  },
  userName: {
    fontWeight: 'bold',
    color: 'black',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
})
