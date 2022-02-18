import React from "react"
import { Pressable, PressableProps } from "react-native"

interface IDoublePressable extends PressableProps {
  onDoublePress?: () => void
}

export const DoublePressable = ({ onDoublePress = () => { }, children }: IDoublePressable) => {
  const timeout = .5
  let lastTap = 0

  const handleDoublePress = () => {
    const now = Date.now()
    if (now - lastTap < timeout * 1000) {
      onDoublePress()
    }
    lastTap = now
  }

  return (
    <Pressable onPress={handleDoublePress}>
      {children}
    </Pressable>
  )
}
