import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Profile = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.profile, style]}>
      <View style={[styles.maxMustermannWrapper, styles.wrapperShadowBox]}>
        <Text style={styles.maxMustermann}>Max Mustermann</Text>
      </View>
      <View
        style={[styles.connectToAppleHeatlhWrapper, styles.wrapperShadowBox]}
      > 
        <Text style={styles.connectToApple}>Connect to Apple Heatlh</Text>
      </View>
      <View style={[styles.profileChild, styles.profileShadowBox]} />
      <Text style={styles.profil}>Profil</Text>
      <View style={[styles.profileInner, styles.frameViewBorder]}>
        <View style={styles.alterParent}>
          <Text style={styles.alter}>Alter:</Text>
          <Text style={[styles.gewicht, styles.groeeTypo]}>Gewicht:</Text>
          <Text style={[styles.groee, styles.groeeTypo]}>Größe:</Text>
          <Text style={[styles.geschlecht, styles.groeeTypo]}>Geschlecht:</Text>
          <Text style={[styles.jahre, styles.kgTypo]}>51 Jahre</Text>
          <Text style={[styles.kg, styles.kgTypo]}>75 kg</Text>
          <Text style={[styles.cm, styles.kgTypo]}>187 cm</Text>
          <Text style={[styles.maennlich, styles.kgTypo]}>Männlich</Text>
        </View>
      </View>
      <View style={[styles.editprofile, styles.editprofilePosition]} />
      <Text style={[styles.profilBearbeiten, styles.editprofilePosition]}>
        Profil Bearbeiten
      </Text>
      <View style={[styles.frameView, styles.frameViewBorder]}>
        <View style={styles.zusaetzlicheInformationenParent}>
          <Text
            style={[
              styles.zusaetzlicheInformationen,
              styles.informationenFlexBox,
            ]}
          >
            Zusätzliche Informationen
          </Text>
          <Text style={styles.vorerkrankungen}>Vorerkrankungen:</Text>
          <Text style={[styles.diabetes, styles.diabetesTypo]}>Diabetes</Text>
          <Text style={[styles.arterielleHypertonie, styles.diabetesTypo]}>
            Arterielle Hypertonie
          </Text>
        </View>
      </View>
      <Text
        style={[styles.generelleInformationen, styles.informationenFlexBox]}
      >
        Generelle Informationen
      </Text>
      <View style={[styles.profileItem, styles.profileItemPosition]} />
      <Button
        style={[styles.groupButton, styles.profileItemPosition]}
        mode="contained"
        onPress={() => navigation.navigate("KrankenhausView")}
        contentStyle={styles.groupIconBtn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconBtn: {
    height: 50,
    width: 50,
  },
  wrapperShadowBox: {
    justifyContent: "center",
    width: 268,
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorBlueviolet_100,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  profileShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  frameViewBorder: {
    borderWidth: 1,
    backgroundColor: Color.colorThistle_100,
    borderRadius: Border.br_mini,
    borderColor: Color.colorBlueviolet_100,
    borderStyle: "solid",
    position: "absolute",
  },
  groeeTypo: {
    height: 48,
    width: 150,
    textAlign: "right",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    left: 0,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  kgTypo: {
    width: 100,
    textAlign: "left",
    left: 170,
    fontFamily: FontFamily.interRegular,
    height: 47,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  editprofilePosition: {
    left: 310,
    width: 100,
    height: 57,
    top: 151,
    position: "absolute",
  },
  informationenFlexBox: {
    height: 55,
    width: 390,
    color: Color.colorBlack,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  diabetesTypo: {
    alignItems: "flex-end",
    left: 5,
    height: 33,
    width: 200,
    fontFamily: FontFamily.interRegular,
    textAlign: "right",
    color: Color.colorBlack,
    display: "flex",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  profileItemPosition: {
    left: 15,
    position: "absolute",
  },
  iconLayout: {
    flexDirection: "row",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  maxMustermann: {
    height: 57,
    color: Color.colorWhitesmoke_100,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    alignItems: "center",
    width: 268,
  },
  maxMustermannWrapper: {
    left: 20,
    top: 151,
    justifyContent: "center",
    width: 268,
  },
  connectToApple: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    height: 57,
    display: "flex",
    textAlign: "center",
    color: Color.colorWhitesmoke_100,
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    alignItems: "center",
    width: 268,
  },
  connectToAppleHeatlhWrapper: {
    top: 689,
    left: 81,
  },
  profileChild: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    height: 121,
    left: 0,
    top: 0,
    backgroundColor: Color.colorBlueviolet_100,
    position: "absolute",
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 430,
  },
  profil: {
    fontSize: FontSize.size_17xl,
    color: Color.colorLavenderblush,
    height: 74,
    top: 47,
    left: 0,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: 430,
  },
  alter: {
    height: 47,
    width: 150,
    textAlign: "right",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  gewicht: {
    top: 47,
  },
  groee: {
    top: 95,
  },
  geschlecht: {
    top: 142,
  },
  jahre: {
    top: 0,
  },
  kg: {
    top: 47,
  },
  cm: {
    top: 94,
  },
  maennlich: {
    top: 141,
  },
  alterParent: {
    width: 270,
    height: 190,
  },
  profileInner: {
    top: 221,
    left: 19,
    width: 392,
    height: 241,
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: 1,
  },
  editprofile: {
    borderRadius: 5,
    backgroundColor: Color.colorBlueviolet_200,
    borderWidth: 2,
    borderColor: Color.colorBlueviolet_100,
    borderStyle: "solid",
  },
  profilBearbeiten: {
    fontFamily: FontFamily.interRegular,
    left: 310,
    color: Color.colorBlack,
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    alignItems: "center",
  },
  zusaetzlicheInformationen: {
    left: 0,
    top: 0,
    height: 55,
    fontSize: FontSize.size_mini,
  },
  vorerkrankungen: {
    top: 55,
    height: 33,
    width: 200,
    textAlign: "right",
    color: Color.colorBlack,
    left: 0,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    display: "flex",
    fontSize: FontSize.size_mini,
    alignItems: "center",
    position: "absolute",
  },
  diabetes: {
    top: 88,
  },
  arterielleHypertonie: {
    top: 121,
  },
  zusaetzlicheInformationenParent: {
    height: 154,
    width: 390,
  },
  frameView: {
    top: 469,
    height: 170,
    width: 390,
    alignItems: "center",
    backgroundColor: Color.colorThistle_100,
    borderRadius: Border.br_mini,
    left: 20,
  },
  generelleInformationen: {
    top: 222,
    fontSize: FontSize.size_base,
    height: 55,
    left: 20,
  },
  profileItem: {
    top: 813,
    borderWidth: 5,
    width: 400,
    height: 90,
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
    left: 15,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  groupButton: {
    top: 17,
  },
  profile: {
    height: 932,
    overflow: "hidden",
    width: 430,
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default Profile;
