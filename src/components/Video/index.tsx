import React, { useState } from "react"
import { Pressable, Text, View } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import Video from "react-native-video"
import { DoublePressable } from "../DoublePressable"

export interface IVideoPlayer {
  uri: string
  onDoublePress?: () => void
  paused: boolean
}

export const VideoPlayer = ({ uri, paused, onDoublePress = () => { } }: IVideoPlayer) => {
  const [remaningTime, setRemaningTime] = useState("")
  const [isMuted, setIsMuted] = useState(true)

  return (
    <View>
      <DoublePressable onDoublePress={onDoublePress}>
        <Video
          source={{ uri }}
          style={styles.player}
          resizeMode="cover"
          muted={isMuted}
          paused={paused}
          repeat
          onProgress={({ currentTime, seekableDuration }) => {
            const rt = seekableDuration - currentTime
            const min = Math.trunc(rt / 60)
            const secs = "0" + Math.trunc(rt % 60)

            setRemaningTime(`${min}:${secs.slice(-2)}`)
          }}
        />
      </DoublePressable>

      <Text style={styles.clock}>{remaningTime}</Text>

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
  clock: {
    fontSize: 10,
    color: "black",
    position: "absolute",
    top: 4,
    right: 4,
    opacity: .4
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
