import React from 'react'
import { Text, StyleSheet, Pressable, PressableProps, ActivityIndicator } from 'react-native'
import colors from '../../../theme/color'

interface ICustomButton extends PressableProps {
  onPress: () => void
  text: string
  type?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY'
  bgColor?: string
  fgColor?: string
  loading?: boolean
}

export const CustomButton = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
  loading = false,
  ...props
}: ICustomButton) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
      disabled={loading}
      {...props}
    >
      {
        loading ?
          <ActivityIndicator size="small" />
          :
          <Text
            style={[
              styles.text,
              styles[`text_${type}`],
              fgColor ? { color: fgColor } : {},
            ]}
          >
            {text}
          </Text>
      }
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,

    marginVertical: 5,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: colors.primary,
  },

  container_SECONDARY: {
    borderColor: colors.primary,
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_PRIMARY: {},

  text_SECONDARY: {
    color: colors.primary,
  },

  text_TERTIARY: {
    color: colors.grey,
  },
})
