import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  TextInput,
  StyleSheet,
  Text, 
  View,
} from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Chat = ({ style }) => {
  return (
    <View style={[styles.chat, style]}>
      <TextInput
        style={styles.chatChild}
        placeholder="Schreibe hier deine Frage"
      />
      <Text style={[styles.schreibeHierDeine, styles.chat1FlexBox]}>
        Schreibe hier deine Frage...
      </Text>
      <View style={[styles.chatItem, styles.chatPosition]} />
      <Text style={[styles.chat1, styles.chat1Typo]}>Chat</Text>
      <Image
        style={styles.chatInner}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={styles.chatChild1}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <View style={[styles.rectangleView, styles.chatChildLayout]} />
      <View style={[styles.chatChild2, styles.chatChildLayout]} />
      <View style={[styles.chatChild3, styles.chatChildLayout]} />
      <View style={[styles.chatChild4, styles.chatChildLayout]} />
      <Text
        style={[styles.duKannstMich, styles.chat1FlexBox]}
      >{`Du kannst mich auch 
Folgendes Fragen:`}</Text>
      <Text style={[styles.wieOftSollte, styles.wieTypo]}>
        Wie oft sollte ich zum Arzt gehen?
      </Text>
      <Text style={[styles.wieVielProtein, styles.wieTypo]}>
        Wie viel Protein sollte ich pro Tag zu mir nehmen?
      </Text>
      <Text style={[styles.wieKannIch, styles.wieTypo]}>
        Wie kann ich mit Stress im Alltag umgehen?
      </Text>
      <Text style={[styles.wieKannIch1, styles.wieTypo]}>
        Wie kann ich meine Gesundheit verbessern?
      </Text>
      <View style={styles.chatChild5} />
    </View>
  );
};

const styles = StyleSheet.create({
  chat1FlexBox: {
    justifyContent: "center",
    textAlign: "center",
  },
  chatPosition: {
    left: 0,
    position: "absolute",
    width: 430,
  },
  chat1Typo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
  },
  chatChildLayout: {
    height: 80,
    width: 130,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorThistle_100,
    borderWidth: 3,
    borderColor: Color.colorBlueviolet_100,
    borderStyle: "solid",
    position: "absolute",
  },
  wieTypo: {
    fontSize: FontSize.size_smi,
    height: 80,
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconLayout: {
    flexDirection: "row",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  chatChild: {
    top: 719,
    left: 37,
    backgroundColor: Color.colorBlueviolet_200,
    width: 356,
    height: 63,
    borderWidth: 3,
    borderColor: Color.colorBlueviolet_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  schreibeHierDeine: {
    top: 722,
    left: 40,
    width: 350,
    height: 57,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  chatItem: {
    top: 0,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.colorBlueviolet_100,
    height: 121,
    left: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  chat1: {
    top: 47,
    fontSize: FontSize.size_17xl,
    color: Color.colorLavenderblush,
    height: 74,
    left: 0,
    position: "absolute",
    width: 430,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  chatInner: {
    top: 356,
    left: 3,
    width: 20,
    height: 20,
    position: "absolute",
  },
  ellipseIcon: {
    top: 347,
    left: 14,
    width: 30,
    height: 30,
    position: "absolute",
  },
  chatChild1: {
    top: 330,
    left: 24,
    width: 40,
    height: 40,
    position: "absolute",
  },
  rectangleView: {
    left: 80,
    top: 466,
  },
  chatChild2: {
    top: 556,
    left: 80,
  },
  chatChild3: {
    left: 220,
    top: 556,
  },
  chatChild4: {
    left: 220,
    top: 466,
  },
  duKannstMich: {
    top: 391,
    width: 270,
    height: 75,
    left: 80,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  wieOftSollte: {
    left: 80,
    top: 466,
  },
  wieVielProtein: {
    left: 220,
    top: 466,
  },
  wieKannIch: {
    left: 220,
    top: 556,
  },
  wieKannIch1: {
    top: 556,
    left: 80,
  },
  chatChild5: {
    top: 813,
    left: 15,
    borderWidth: 5,
    width: 400,
    height: 90,
    borderColor: Color.colorBlueviolet_100,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  chat: {
    height: 932,
    overflow: "hidden",
    width: 430,
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default Chat;
