import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const User1Image5 = ({ style }) => {
  return (
    <Image
      style={[styles.user1Icon, style]}
      contentFit="cover"
      source={require("../assets/user-13.png")}
    />
  );
};

const styles = StyleSheet.create({
  user1Icon: {
    width: 60,
    height: 60,
  },
}); 

export default User1Image5;
