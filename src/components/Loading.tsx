import React from "react";
import { ActivityIndicator, View } from "react-native";

export const Loading = () => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <ActivityIndicator size="large" />
  </View>
)
