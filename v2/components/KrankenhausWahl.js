import * as React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Button } from "react-native-paper";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const KrankenhausWahl = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.krankenhauswahl}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Text style={styles.notfall}>Notfall</Text>
        </View> 
        <View style={styles.frame2}>
          <Button
            style={styles.frame3}
            mode="contained"
            onPress={() =>
              navigation.navigate("BottomTabsRoot", { screen: "" })
            }
            contentStyle={styles.frameImageBtn}
          />
          <TextInput
            style={styles.frameChild}
            placeholder="Postleitzahl oder Ort..."
            placeholderTextColor="#000"
          />
        </View>
      </View>
      <View style={styles.frame4}>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <Text style={styles.universittsklinikumMannheim}>
            Universitätsklinikum Mannheim
          </Text>
          <Text style={styles.theodorKutzerUfer13}>
            Theodor-Kutzer-Ufer 1-3
          </Text>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={styles.groupItem} />
          <Text style={styles.theresienkrankenhaus}>Theresienkrankenhaus</Text>
          <Text style={styles.bassermannstrae1Mannheim}>
            <Text style={styles.bassermannstrae1MannheimTxContainer}>
              Bassermannstraße 1Mannheim
            </Text>
          </Text>
        </View>
        <View style={styles.frame5}>
          <View style={styles.rectangleParent}>
            <View style={styles.groupInner} />
            <Text style={styles.diakoniekrankenhausMannheim}>
              Diakoniekrankenhaus Mannheim
            </Text>
          </View>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/frame2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameImageBtn: {
    height: 32,
    width: 374,
  },
  notfall: {
    position: "relative",
    fontSize: FontSize.size_17xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorLavenderblush,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 430,
    height: 74,
  },
  frame1: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.colorBlueviolet_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 430,
    height: 121,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frame3: {
    position: "relative",
    overflow: "hidden",
  },
  frameChild: {
    width: 268,
    height: 57,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.size_mini,
    marginTop: 24,
  },
  frame2: {
    width: 374,
    height: 113,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 34,
  },
  frame: {
    width: 430,
    height: 268,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  groupChild: {
    position: "absolute",
    top: 0,
    left: 0,
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
    width: 390,
    height: 117,
  },
  universittsklinikumMannheim: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 390,
    height: 59,
  },
  theodorKutzerUfer13: {
    position: "absolute",
    top: 59,
    left: 0,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 390,
    height: 58,
  },
  rectangleParent: {
    position: "relative",
    width: 390,
    height: 117,
  },
  groupItem: {
    position: "absolute",
    top: 0,
    left: 0,
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
    width: 390,
    height: 117,
  },
  theresienkrankenhaus: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 390,
    height: 58,
  },
  bassermannstrae1MannheimTxContainer: {
    width: "100%",
  },
  bassermannstrae1Mannheim: {
    position: "absolute",
    top: 59,
    left: 1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: 390,
    height: 58,
  },
  rectangleGroup: {
    width: 391,
    height: 117,
    marginLeft: 1,
    marginTop: 21,
  },
  groupInner: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorBlueviolet_100,
    width: 390,
    height: 117,
  },
  diakoniekrankenhausMannheim: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 390,
    height: 66,
  },
  frameItem: {
    position: "relative",
    width: 430,
    height: 303,
    marginTop: -74,
  },
  frame5: {
    width: 430,
    height: 346,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 21,
  },
  frame4: {
    width: 430,
    height: 622,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 42,
  },
  krankenhauswahl: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    width: 430,
    height: 932,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default KrankenhausWahl;
