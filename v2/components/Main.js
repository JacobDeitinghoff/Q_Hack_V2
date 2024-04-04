import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Main = ({ style }) => {
  return (
    <View style={[styles.main, style]}>
      <View style={[styles.mainChild, styles.mainChildShadowBox]} />
      <View style={[styles.notaufnahmeAuswhlenWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.notaufnahmeAuswhlen, styles.oderFlexBox]}>
          Notaufnahme auswählen
        </Text>
      </View> 
      <Text style={[styles.oder, styles.oderTypo]}>ODER</Text>
      <View style={[styles.mainItem, styles.notfallPosition]} />
      <Text style={[styles.notfall, styles.codeTypo]}>Notfall</Text>
      <Image
        style={[styles.mainInner, styles.mainInnerPosition]}
        contentFit="cover"
        source={require("../assets/group-3.png")}
      />
      <View style={[styles.scanQrCodeWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.scanQrCode, styles.codeTypo]}>Scan QR-Code</Text>
      </View>
      <Text style={[styles.scanneDenQrCode, styles.mainInnerPosition]}>
        Scanne den QR-Code in der Notaufnahme
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    flexDirection: "row",
    overflow: "hidden",
  },
  user1Layout: {
    width: "13.95%",
    height: 60,
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorBlueviolet_100,
    position: "absolute",
  },
  oderFlexBox: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  oderTypo: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  notfallPosition: {
    left: 0,
    position: "absolute",
    width: 430,
  },
  codeTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  mainInnerPosition: {
    width: 300,
    left: 66,
    top: 186,
    position: "absolute",
  },
  mainChild: {
    top: 813,
    left: 15,
    borderStyle: "solid",
    borderColor: Color.colorBlueviolet_100,
    borderWidth: 5,
    width: 400,
    height: 90,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_100,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
  },
  notaufnahmeAuswhlen: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhitesmoke_100,
    height: 57,
    width: 268,
  },
  notaufnahmeAuswhlenWrapper: {
    top: 699,
    left: 81,
    width: 268,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
  },
  oder: {
    top: 658,
    left: 107,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    height: 41,
    width: 216,
    color: Color.colorBlack,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  mainItem: {
    top: 0,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    height: 121,
    backgroundColor: Color.colorBlueviolet_100,
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
  notfall: {
    top: 47,
    fontSize: FontSize.size_17xl,
    color: Color.colorLavenderblush,
    height: 74,
    left: 0,
    position: "absolute",
    width: 430,
  },
  mainInner: {
    height: 459,
  },
  scanQrCode: {
    fontSize: FontSize.size_5xl,
    height: 64,
    width: 216,
    color: Color.colorBlack,
  },
  scanQrCodeWrapper: {
    top: 560,
    left: 108,
    borderRadius: Border.br_mini,
    width: 216,
  },
  scanneDenQrCode: {
    height: 91,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  main: {
    height: 932,
    overflow: "hidden",
    width: 430,
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default Main;
