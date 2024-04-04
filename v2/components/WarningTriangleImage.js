import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const WarningTriangleImage = ({ style }) => {
  return (
    <Image
      style={[styles.warningTriangleIcon, style]}
      contentFit="cover"
      source={require("../assets/warning-triangle1.png")}
    />
  );
};

const styles = StyleSheet.create({
  warningTriangleIcon: {
    width: 60,
    height: 60,
  },
}); 

export default WarningTriangleImage;
