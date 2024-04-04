import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, Border, FontFamily, Padding } from "../GlobalStyles";

const EmergencyChatWriting = () => {
  return ( 
    <View style={[styles.emergencychatwriting, styles.frameFlexBox]}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={[styles.frame1, styles.frameLayout]}>
          <View style={[styles.frame2, styles.frameLayout]}>
            <View style={styles.frameChild} />
            <Text style={styles.notfallChat}>Notfall Chat</Text>
            <View
              style={[
                styles.universittsklinikumMannheimParent,
                styles.universittsklinikumLayout,
              ]}
            >
              <Text
                style={[
                  styles.universittsklinikumMannheim,
                  styles.personalassistentClr,
                ]}
              >
                Universitätsklinikum Mannheim
              </Text>
              <View style={styles.frameItem} />
            </View>
          </View>
          <View style={[styles.ellipseParent, styles.frame3Position]}>
            <Image
              style={[styles.frameInner, styles.frameIconPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-41.png")}
            />
            <Image
              style={[styles.frameIcon, styles.frameIconPosition]}
              contentFit="cover"
              source={require("../assets/frame.png")}
            />
            <Image
              style={[styles.frameIcon1, styles.frameIconPosition]}
              contentFit="cover"
              source={require("../assets/frame1.png")}
            />
            <View style={[styles.frame3, styles.frame3Position]}>
              <View
                style={[styles.personalassistentWrapper, styles.frame4Border]}
              >
                <Text
                  style={[
                    styles.personalassistent,
                    styles.personalassistentClr,
                  ]}
                >
                  Hallo ich bin dein persönlicher Assistent, du scheinst einen
                  Notfall zu haben, bitte schildere kurz dein Problem...
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TextInput
          style={[styles.frame4, styles.frame4Border]}
          placeholder="Beschreibe dein Problem..."
          placeholderTextColor="#000"
        />
      </View>
      <Image
        style={[styles.frameIcon2, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/frame2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
    width: 430,
  },
  frameLayout: {
    width: 430,
    overflow: "hidden",
  },
  universittsklinikumLayout: {
    height: 84,
    left: 0,
    position: "absolute",
    width: 430,
  },
  personalassistentClr: {
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
    display: "flex",
    alignItems: "center",
  },
  frame3Position: {
    width: 362,
    left: 0,
    top: 0,
  },
  frameIconPosition: {
    left: 0,
    position: "absolute",
  },
  frame4Border: {
    borderColor: Color.colorBlueviolet_100,
    backgroundColor: Color.colorThistle_100,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
  },
  frameChild: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.colorBlueviolet_100,
    height: 121,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    left: 0,
    position: "absolute",
    width: 430,
  },
  notfallChat: {
    top: 47,
    fontSize: FontSize.size_17xl,
    color: Color.colorLavenderblush,
    height: 74,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 0,
    position: "absolute",
    alignItems: "center",
    width: 430,
  },
  universittsklinikumMannheim: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    height: 84,
    left: 0,
    position: "absolute",
    width: 430,
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    top: 0,
  },
  frameItem: {
    top: 10,
    left: 20,
    borderColor: Color.colorBlack,
    width: 390,
    height: 64,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  universittsklinikumMannheimParent: {
    top: 121,
  },
  frame2: {
    height: 205,
    overflow: "hidden",
  },
  frameInner: {
    top: 200,
    width: 20,
    height: 20,
  },
  frameIcon: {
    top: 191,
    width: 41,
    height: 30,
    overflow: "hidden",
  },
  frameIcon1: {
    top: 174,
    width: 61,
    height: 40,
    overflow: "hidden",
  },
  personalassistent: {
    textAlign: "left",
    width: 280,
    height: 200,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  personalassistentWrapper: {
    borderRadius: Border.br_mini,
    width: 330,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    alignItems: "flex-end",
  },
  frame3: {
    justifyContent: "center",
    position: "absolute",
    width: 362,
    alignItems: "flex-end",
    overflow: "hidden",
  },
  ellipseParent: {
    height: 221,
    marginRight: 58,
  },
  frame1: {
    alignItems: "flex-end",
    overflow: "hidden",
  },
  frame4: {
    width: 350,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    marginTop: 102,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorThistle_100,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
    overflow: "hidden",
  },
  frame: {
    height: 585,
  },
  frameIcon2: {
    height: 303,
    marginTop: 44,
    overflow: "hidden",
  },
  emergencychatwriting: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 932,
  },
});

export default EmergencyChatWriting;
