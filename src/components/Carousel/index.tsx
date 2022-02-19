import React, { useRef, useState } from "react";
import { FlatList, Image, Pressable, useWindowDimensions, View, ViewabilityConfig } from "react-native";
import { StyleSheet } from "react-native"
import colors from "../../theme/color";
import { DoublePressable } from "../DoublePressable";

export interface ICarousel {
  images: string[];
  onDoublePress?: () => void
}

export const Carousel = ({ images, onDoublePress }: ICarousel) => {
  const [imageIndex, setImageIndex] = useState(0)
  let flatListRef = useRef<FlatList>(null)

  const { width } = useWindowDimensions()

  const onViewableItemsChanged = (data: any) => {
    if (data.viewableItems.length > 0) setImageIndex(data.viewableItems[0].index)
  }

  return (
    <View>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={{ itemVisiblePercentThreshold: 51 } as ViewabilityConfig}
        onViewableItemsChanged={useRef(onViewableItemsChanged).current}
        data={images}
        renderItem={
          ({ item }) => (
            <DoublePressable onDoublePress={onDoublePress}>
              <Image source={{ uri: item }} style={[styles.image, { width }]} />
            </DoublePressable>
          )}
      />

      <View style={styles.dotsContainer}>
        {images.map((_, idx) => (
          <Pressable
            key={`dot-${idx}`}
            style={[styles.dot, imageIndex === idx && { opacity: .8 }]}
            onPress={() => {
              flatListRef.current?.scrollToIndex({ animated: true, index: idx });
              setImageIndex(idx)
            }}
          />
        ))}
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  image: { aspectRatio: 1 },
  dotsContainer: {
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    bottom: 0,
  },
  dot: {
    width: 16,
    aspectRatio: 1,
    borderRadius: 16,
    backgroundColor: colors.lightgrey,
    margin: 6,
    opacity: .4
  }
})
