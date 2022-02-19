import React, { useState } from "react"
import { Pressable, View } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import Video from "react-native-video"
import { DoublePressable } from "../DoublePressable"

export interface IVideoPlayer {
  uri: string
  onDoublePress?: () => void
}

export const VideoPlayer = ({ uri, onDoublePress = () => { } }: IVideoPlayer) => {
  const [isMuted, setIsMuted] = useState(true)
  return (
    <View>
      <DoublePressable onDoublePress={onDoublePress}>
        <Video
          source={{ uri }}
          style={styles.player}
          resizeMode="cover"
          muted={isMuted}
          repeat
        />
      </DoublePressable>

      <Pressable
        style={styles.volumeButton}
        onPress={() => setIsMuted(!isMuted)}
      >
        <Ionicons
          name={isMuted ? "volume-mute" : "volume-high"}
          size={16}
          color="white"
        />
      </Pressable>
    </View >
  )
}

import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  player: {
    width: "100%",
    aspectRatio: 1
  },
  volumeButton: {
    borderRadius: 12,
    padding: 4,
    backgroundColor: "grey",
    position: "absolute",
    bottom: 8,
    right: 8,
    opacity: .4
  }
})
