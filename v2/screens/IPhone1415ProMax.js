import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone1415ProMax = () => {
  return (
    <View style={styles.iphone1415ProMax1}>
      <View
        style={[styles.iphone1415ProMax1Child, styles.iphone1415Position]}
      />
      <Text style={[styles.patienten, styles.iphone1415Position]}>
        Patienten
      </Text>
      <View style={[styles.iphone1415ProMax1Item, styles.iphone1415Position]} />
    </View>
  ); 
};

const styles = StyleSheet.create({
  iphone1415Position: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  iphone1415ProMax1Child: {
    top: 0,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    backgroundColor: Color.colorBlueviolet_100,
    height: 80,
  },
  patienten: {
    top: 80,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 58,
  },
  iphone1415ProMax1Item: {
    top: 138,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 1,
    height: 78,
  },
  iphone1415ProMax1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default IPhone1415ProMax;
