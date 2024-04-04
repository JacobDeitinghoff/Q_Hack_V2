import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const QR = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.qr}>
      <View style={[styles.frame, styles.framePosition2]}>
        <View style={[styles.frameChild, styles.framePosition2]} />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/group-32.png")}
        /> 
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <Text style={styles.scanneDenQrCode}>
            Scanne den QR-Code in der Notaufnahme
          </Text>
        </View>
        <Button
          style={styles.frame2}
          mode="contained"
          onPress={() => navigation.navigate("BottomTabsRoot", { screen: "" })}
          contentStyle={styles.frameBtn}
        />
      </View>
      <View style={styles.frame3}>
        <View style={[styles.frame4, styles.framePosition1]} />
        <Button
          style={[styles.frame5, styles.framePosition1]}
          mode="outlined"
          labelStyle={styles.frame2Btn}
          onPress={() => navigation.navigate("Number1")}
          contentStyle={styles.frame2Btn1}
        >
          Nummereingabe
        </Button>
        <View style={[styles.frame6, styles.framePosition]}>
          <View style={styles.frameInner} />
        </View>
        <Image
          style={[styles.frameIcon, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/frame3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameBtn: {
    height: 41,
    width: 350,
  },
  frame2Btn: {
    color: "#804bf2",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  frame2Btn1: {
    width: 296,
  },
  framePosition2: {
    left: 0,
    top: 0,
    position: "absolute",
    width: 430,
  },
  frameFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  framePosition1: {
    top: 616,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    width: 262,
    left: 17,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    borderRadius: Border.br_xl,
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
  },
  frameItem: {
    top: 24,
    left: 20,
    width: 390,
    height: 877,
    position: "absolute",
  },
  scanneDenQrCode: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlueviolet_100,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: 300,
    height: 91,
    justifyContent: "center",
  },
  frame1: {
    top: 186,
    left: 64,
    width: 302,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  frame2: {
    top: 40,
    left: 40,
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    height: 901,
    overflow: "hidden",
  },
  frame4: {
    backgroundColor: "rgba(213, 197, 245, 0.8)",
    width: 295,
    height: 40,
    borderRadius: Border.br_3xs,
  },
  frame5: {
    justifyContent: "center",
  },
  frameInner: {
    backgroundColor: Color.colorBlueviolet_200,
    borderStyle: "solid",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 1,
    width: 255,
    height: 61,
    borderRadius: Border.br_3xs,
  },
  frame6: {
    justifyContent: "center",
    alignItems: "flex-end",
    top: 0,
    width: 262,
    left: 17,
  },
  frameIcon: {
    top: 76,
    height: 260,
  },
  frame3: {
    top: 201,
    left: 67,
    width: 296,
    height: 656,
    position: "absolute",
    overflow: "hidden",
  },
  qr: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 932,
    overflow: "hidden",
    width: 430,
  },
});

export default QR;
