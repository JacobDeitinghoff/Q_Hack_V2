import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const SpeechBubbleImage6 = ({ style }) => {
  return (
    <Image
      style={[styles.speechBubbleIcon, style]}
      contentFit="cover"
      source={require("../assets/speech-bubble.png")}
    />
  );
};

const styles = StyleSheet.create({
  speechBubbleIcon: {
    width: 53,
    height: 53,
  },
}); 

export default SpeechBubbleImage6;
