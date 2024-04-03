import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { horizontalScale, verticalScale } from "../../Utils/Dimensions";
import { Player } from "@lottiefiles/react-lottie-player";

const Intro = () => {
  return (
    <View style={styles.introcontainer}>
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
      <Text
        style={{
          textAlign: "center",
          color: Colors.BLACK,
          position: "absolute",
          top: verticalScale(10),
          left: verticalScale(10),
          fontWeight: "600",
        }}
      >
        #MADE_WITH_REACTNATIVE_EXPO
      </Text>
      <View
        style={{
          padding: verticalScale(40),
          flexDirection: "row",
          alignItems: "center",
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
    fontSize: verticalScale(30),
    textTransform: "uppercase",
    fontWeight: "500",
  },
  textcontainer: {
    marginHorizontal: horizontalScale(30),
    flex: 0.8,
  },
  intro: {
    color: Colors.BLUE,
    fontSize: verticalScale(70),
    textTransform: "capitalize",
    fontWeight: "500",
    textAlign: "left",
  },
  profileImage: {
    width: horizontalScale(60),
    height: horizontalScale(60),
    borderRadius: 999,
  },
});
