import * as React from "react";
import { Pressable, StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Number1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.number}>
      <View style={[styles.numberChild, styles.numberChildPosition]} />
      <Image
        style={styles.numberItem}
        contentFit="cover"
        source={require("../assets/group-31.png")}
      /> 
      <Button
        style={styles.frame}
        mode="contained"
        onPress={() => navigation.navigate("QR")}
        contentStyle={styles.frameImageBtn}
      />
      <View style={styles.frame1} />
      <Image
        style={[styles.numberInner, styles.numberChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <View style={[styles.rectangleView, styles.numberChildPosition]} />
      <View style={[styles.frame2, styles.framePosition]}>
        <Text style={[styles.bitteGibDie, styles.frameChildLayout]}>
          Bitte gib die Nummer ein
        </Text>
      </View>
      <View style={[styles.frame3, styles.framePosition]}>
        <TextInput
          style={[styles.frameChild, styles.frameChildLayout]}
          placeholder="..."
        />
      </View>
      <View style={[styles.numberChild1, styles.numberChildPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameImageBtn: {
    height: 41,
    width: 350,
  },
  numberChildPosition: {
    left: 0,
    position: "absolute",
    width: 430,
  },
  framePosition: {
    width: 282,
    left: 74,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  frameChildLayout: {
    width: 274,
    alignItems: "center",
  },
  numberChild: {
    backgroundColor: Color.colorBlueviolet_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 121,
    borderRadius: Border.br_xl,
    top: 0,
    left: 0,
  },
  numberItem: {
    top: 24,
    left: 20,
    width: 390,
    height: 877,
    position: "absolute",
  },
  frame: {
    top: 40,
    left: 40,
    position: "absolute",
    overflow: "hidden",
  },
  frame1: {
    left: 49,
    borderRadius: Border.br_3xs,
    backgroundColor: "#f5f5f5",
    width: 332,
    height: 206,
    top: 456,
    position: "absolute",
    overflow: "hidden",
  },
  numberInner: {
    top: 629,
    height: 303,
  },
  rectangleView: {
    height: 359,
    top: 0,
    left: 0,
  },
  bitteGibDie: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlueviolet_100,
    textAlign: "center",
    display: "flex",
    height: 97,
    justifyContent: "center",
  },
  frame2: {
    justifyContent: "center",
    top: 456,
  },
  frameChild: {
    backgroundColor: Color.colorThistle_100,
    borderStyle: "solid",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 1,
    height: 60,
    flexDirection: "row",
    borderRadius: Border.br_xl,
  },
  frame3: {
    top: 541,
    justifyContent: "center",
  },
  numberChild1: {
    height: 456,
    top: 0,
    left: 0,
  },
  number: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 932,
    overflow: "hidden",
    width: 430,
  },
});

export default Number1;
