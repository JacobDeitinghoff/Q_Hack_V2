import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent = ({ 
  prop,
  hansMller,
  ellipse8,
  propBackgroundColor,
  propMarginTop,
}) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propBackgroundColor, propMarginTop]);

  return (
    <View style={[styles.parent, styles.frameFlexBox, frameViewStyle]}>
      <Text style={[styles.text, styles.textClr]}>{prop}</Text>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.hansMller, styles.textClr]}>{hansMller}</Text>
      </View>
      <Image style={styles.frameChild} contentFit="cover" source={ellipse8} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    height: 75,
  },
  textClr: {
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    alignItems: "center",
    height: 75,
  },
  text: {
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    justifyContent: "center",
    width: 80,
    zIndex: 0,
  },
  hansMller: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    width: 270,
  },
  frame: {
    overflow: "hidden",
    zIndex: 1,
    marginLeft: 10,
  },
  frameChild: {
    position: "absolute",
    top: 7,
    left: 360,
    width: 60,
    height: 60,
    zIndex: 2,
  },
  parent: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 1,
    width: 430,
    justifyContent: "flex-end",
  },
});

export default FrameComponent;
