import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "./FrameComponent";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const KrankenhausView = () => {
  const navigation = useNavigation();

  return ( 
    <View style={[styles.krankenhausview, styles.frameFlexBox1]}>
      <View style={[styles.frame, styles.frameLayout]}>
        <View style={[styles.frameChild, styles.framePosition1]} />
        <View style={[styles.frameItem, styles.framePosition]} />
        <View style={styles.frame1}>
          <Button
            style={[styles.frameInner, styles.framePosition1]}
            mode="contained"
            onPress={() =>
              navigation.navigate("BottomTabsRoot", { screen: "" })
            }
            contentStyle={styles.groupIconBtn}
          />
        </View>
      </View>
      <View style={[styles.frame2, styles.frameFlexBox1]}>
        <View style={styles.frameFlexBox1}>
          <Text style={[styles.patienten, styles.textFlexBox]}>Patienten</Text>
          <FrameComponent
            prop="1"
            hansMller="Hans Müller"
            ellipse8={require("../assets/ellipse-8.png")}
          />
        </View>
        <FrameComponent
          prop="2"
          hansMller="Max Mustermann"
          ellipse8={require("../assets/ellipse-81.png")}
          propBackgroundColor="rgba(128, 75, 242, 0.3)"
          propMarginTop={25}
        />
        <FrameComponent
          prop="3"
          hansMller="Gabrielle Himmelfort"
          ellipse8={require("../assets/ellipse-81.png")}
          propBackgroundColor="unset"
          propMarginTop={25}
        />
        <FrameComponent
          prop="4"
          hansMller="Olaf Handschuh"
          ellipse8={require("../assets/ellipse-82.png")}
          propBackgroundColor="unset"
          propMarginTop={25}
        />
        <View style={[styles.frame4, styles.frameFlexBox1]}>
          <FrameComponent
            prop="5"
            hansMller="Julia Meier"
            ellipse8={require("../assets/ellipse-83.png")}
            propBackgroundColor="unset"
            propMarginTop="unset"
          />
          <View style={[styles.frame5, styles.frame5Layout]}>
            <View style={[styles.rectangleView, styles.framePosition1]} />
            <View
              style={[
                styles.beschwerdeStarkeBauchschmerParent,
                styles.frame5Layout,
              ]}
            >
              <Text
                style={[
                  styles.beschwerdeStarkeBauchschmerContainer,
                  styles.maxMustermannTypo,
                ]}
              >
                {`Beschwerde:
starke Bauchschmerzen seit 2 Tagen

Vorerkrankungen:`}
                Diabetes Alter: 42Gewicht: 106
              </Text>
              <View style={[styles.frame6, styles.framePosition]}>
                <View style={[styles.frameParent, styles.frameFlexBox]}>
                  <View style={[styles.frame7, styles.frameFlexBox]}>
                    <Text style={[styles.text, styles.textLayout]}>2</Text>
                    <Text style={[styles.maxMustermann, styles.textLayout]}>
                      Max Mustermann
                    </Text>
                  </View>
                  <Image
                    style={styles.ellipseIcon}
                    contentFit="cover"
                    source={require("../assets/ellipse-81.png")}
                  />
                </View>
                <View style={styles.lineView} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconBtn: {
    height: 50,
    width: 50,
  },
  frameFlexBox1: {
    alignItems: "center",
    overflow: "hidden",
    width: 430,
  },
  frameLayout: {
    height: 719,
    width: 430,
  },
  framePosition1: {
    left: 0,
    position: "absolute",
  },
  framePosition: {
    height: 85,
    backgroundColor: Color.colorBlueviolet_100,
    left: 0,
    top: 0,
    position: "absolute",
    width: 430,
  },
  textFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_13xl,
  },
  frame5Layout: {
    height: 357,
    width: 430,
  },
  maxMustermannTypo: {
    textAlign: "left",
    fontSize: FontSize.size_5xl,
  },
  frameFlexBox: {
    flexDirection: "row",
    height: 75,
    alignItems: "center",
  },
  textLayout: {
    height: 75,
    fontFamily: FontFamily.interRegular,
    display: "flex",
    color: Color.colorBlack,
    alignItems: "center",
  },
  frameChild: {
    backgroundColor: Color.colorWhitesmoke_100,
    top: 0,
    left: 0,
    height: 719,
    width: 430,
  },
  frameItem: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
  },
  frameInner: {
    top: 0,
    left: 0,
  },
  frame1: {
    top: 17,
    left: 15,
    width: 400,
    height: 50,
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    overflow: "hidden",
  },
  patienten: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    height: 60,
    display: "flex",
    color: Color.colorBlack,
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_13xl,
    alignItems: "center",
    width: 430,
  },
  rectangleView: {
    top: 80,
    backgroundColor: Color.colorThistle_100,
    height: 272,
    left: 0,
    width: 430,
  },
  beschwerdeStarkeBauchschmerContainer: {
    top: 103,
    left: 23,
    width: 407,
    height: 254,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  text: {
    width: 80,
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_13xl,
    height: 75,
  },
  maxMustermann: {
    width: 270,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    height: 75,
  },
  frame7: {
    overflow: "hidden",
  },
  ellipseIcon: {
    width: 60,
    marginLeft: 10,
    height: 60,
  },
  frameParent: {
    width: 420,
    justifyContent: "flex-end",
  },
  lineView: {
    borderStyle: "solid",
    borderColor: Color.colorLavenderblush,
    borderTopWidth: 3,
    width: 433,
    height: 3,
    marginTop: 10,
  },
  frame6: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    overflow: "hidden",
  },
  beschwerdeStarkeBauchschmerParent: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  frame5: {
    marginTop: -40,
    overflow: "hidden",
  },
  frame4: {
    height: 392,
    marginTop: 25,
  },
  frame2: {
    height: 852,
    marginTop: -634,
  },
  krankenhausview: {
    backgroundColor: Color.colorWhite,
    height: 932,
  },
});

export default KrankenhausView;
