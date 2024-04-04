import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import Lottie from "lottie-react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const EmergencyChatSend = () => {
  return ( 
    <View style={styles.emergencychatsend}>
      <View
        style={[
          styles.emergencychatsendChild,
          styles.chatanswerWrapperShadowBox,
        ]}
      />
      <Text style={[styles.chat, styles.chatFlexBox]}>Chat</Text>
      <View
        style={[styles.persnlicherAssistentParent, styles.persnlicherLayout]}
      >
        <Text
          style={[styles.persnlicherAssistent, styles.schreibeHierDeineFlexBox]}
        >
          Persönlicher Assistent
        </Text>
        <View style={styles.frameChild} />
      </View>
      <View style={[styles.chatanswerWrapper, styles.generatinganswerPosition]}>
        <Text style={[styles.chatanswer, styles.chatanswerTypo]}>
          Hallo ich bin dein persönlicher Assistent, du scheinst einen Notfall
          zu haben, bitte schildere kurz dein Problem...
        </Text>
      </View>
      <View
        style={[
          styles.emergencychatsendItem,
          styles.emergencychatsendShadowBox,
        ]}
      />
      <TextInput
        style={[
          styles.emergencychatsendInner,
          styles.emergencychatsendShadowBox,
        ]}
        placeholder="Schreibe hier deine Frage"
        keyboardType="default"
      />
      <Text style={[styles.schreibeHierDeine, styles.chatanswerTypo]}>
        Schreibe hier deine Frage...
      </Text>
      <View
        style={[styles.leiderHabeIchGanzSchlimmeWrapper, styles.leiderLayout]}
      >
        <Text style={[styles.leiderHabeIch, styles.leiderLayout]}>
          Leider habe ich ganz schlimme Bauchschmerzen, sie haben gestern
          angefangen und das ist sehr ungewöhnlich für mich, weil ich
          normalerweise nie Bauchschmerzen kriege
        </Text>
      </View>
      <View style={[styles.generatinganswer, styles.generatinganswerPosition]}>
        <Lottie
          style={styles.lottie}
          //source={require("../assets/animation-17121807915101.json")}
          loop={true}
          autoPlay={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatanswerWrapperShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorBlueviolet_100,
  },
  chatFlexBox: {
    justifyContent: "center",
    textAlign: "center",
  },
  persnlicherLayout: {
    height: 84,
    left: 0,
    position: "absolute",
    width: 430,
  },
  schreibeHierDeineFlexBox: {
    color: Color.colorBlack,
    justifyContent: "center",
    textAlign: "center",
  },
  generatinganswerPosition: {
    left: 20,
    position: "absolute",
  },
  chatanswerTypo: {
    fontFamily: FontFamily.interRegular,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  emergencychatsendShadowBox: {
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
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  leiderLayout: {
    height: 124,
    position: "absolute",
  },
  emergencychatsendChild: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    height: 121,
    left: 0,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorBlueviolet_100,
    top: 0,
    position: "absolute",
    width: 430,
  },
  chat: {
    top: 47,
    fontSize: FontSize.size_17xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorLavenderblush,
    height: 74,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    left: 0,
    position: "absolute",
    width: 430,
  },
  persnlicherAssistent: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    height: 84,
    left: 0,
    position: "absolute",
    width: 430,
    top: 0,
    color: Color.colorBlack,
  },
  frameChild: {
    top: 10,
    borderColor: Color.colorBlack,
    width: 390,
    height: 64,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    left: 20,
    position: "absolute",
  },
  persnlicherAssistentParent: {
    top: 121,
  },
  chatanswer: {
    left: 17,
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
    width: 213,
    fontSize: FontSize.size_smi,
    top: 0,
    height: 75,
  },
  chatanswerWrapper: {
    top: 205,
    borderRadius: Border.br_mini,
    width: 247,
    height: 75,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorBlueviolet_100,
  },
  emergencychatsendItem: {
    top: 813,
    left: 15,
    borderWidth: 5,
    width: 400,
    height: 90,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_100,
    borderColor: Color.colorBlueviolet_100,
  },
  emergencychatsendInner: {
    top: 719,
    left: 37,
    backgroundColor: Color.colorBlueviolet_200,
    borderWidth: 3,
    width: 356,
    height: 63,
    position: "absolute",
  },
  schreibeHierDeine: {
    top: 722,
    left: 40,
    fontSize: FontSize.size_mini,
    width: 350,
    height: 57,
    color: Color.colorBlack,
    justifyContent: "center",
    textAlign: "center",
  },
  leiderHabeIch: {
    left: 23,
    color: Color.colorBlueviolet_100,
    width: 215,
    fontSize: FontSize.size_smi,
    top: 0,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    height: 124,
  },
  leiderHabeIchGanzSchlimmeWrapper: {
    top: 306,
    left: 150,
    backgroundColor: Color.colorThistle_100,
    width: 260,
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
    borderWidth: 1,
  },
  lottie: {
    height: "100%",
    width: "100%",
  },
  generatinganswer: {
    top: 430,
    width: 137,
    height: 81,
  },
  emergencychatsend: {
    height: 932,
    overflow: "hidden",
    width: 430,
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default EmergencyChatSend;
