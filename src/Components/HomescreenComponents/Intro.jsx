import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import {
  horizontalScale,
  verticalScale,
  windowHeight,
  windowWidth,
} from "../../Utils/Dimensions";
import { Player } from "@lottiefiles/react-lottie-player";

const Intro = () => {
  return (
    <View style={styles.introcontainer}>
      {windowWidth > 900 ? (
        <Player
          style={{
            position: "absolute",
            width: "100%",
            zIndex: 2,
          }}
          src={require(`../../assets/animation/lottie_background.json`)}
          autoPlay={true}
          loop={true}
          hover={true}
        ></Player>
      ) : null}

      <Text style={styles.madewith}>#MADE_WITH_REACTNATIVE_EXPO</Text>
      <View
        style={{
          flexDirection: windowWidth > 900 ? "row" : "column-reverse",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: verticalScale(9),
        }}
      >
        <View style={styles.textcontainer}>
          <Text style={styles.name}>my name is Shivang Thacker</Text>
          <Text style={styles.intro}> I am a,</Text>
          <Text style={styles.intro}>ReactNative Developer</Text>
        </View>
        <Image
          source={require("../../assets/Images/shivang_resume.jpeg")}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  introcontainer: {
    flex: 0.4,
  },
  name: {
    color: Colors.BLACK,
    fontSize: windowWidth > 900 ? verticalScale(20) : verticalScale(15),
    textTransform: "uppercase",
    fontWeight: "500",
  },
  textcontainer: {
    marginHorizontal: horizontalScale(30),
    flex: windowWidth > 900 ? 0.8 : null,
  },
  intro: {
    color: Colors.BLUE,
    fontSize: windowWidth > 900 ? verticalScale(70) : verticalScale(30),
    textTransform: "capitalize",
    fontWeight: "500",
    textAlign: "left",
  },
  profileImage: {
    width: windowWidth > 900 ? horizontalScale(60) : horizontalScale(120),
    height: windowWidth > 900 ? horizontalScale(60) : horizontalScale(120),
    borderRadius: 999,
  },
  madewith: {
    textAlign: "center",
    color: Colors.BLACK,
    position: "absolute",
    top: verticalScale(10),
    left: verticalScale(10),
    fontWeight: "600",
    fontSize: windowWidth > 900 ? verticalScale(18) : verticalScale(12),
  },
});
