import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useRef } from "react";
import Colors from "../../Utils/Colors";
import {
  verticalScale,
  horizontalScale,
  windowWidth,
} from "../../Utils/Dimensions";
import { Player } from "@lottiefiles/react-lottie-player";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Tabs = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabcontainer}
        onPress={() => navigation.navigate("Projectscreen")}
      >
        <AntDesign
          name="arrowright"
          size={windowWidth > 900 ? verticalScale(39) : verticalScale(23)}
          color={Colors.BLUE}
          style={{ alignSelf: "flex-end" }}
        />
        <Player
          style={{
            height: windowWidth > 900 ? verticalScale(200) : verticalScale(100),
            width: horizontalScale(100),
          }}
          src={require(`../../assets/animation/lottie_mobile_project.json`)}
          autoPlay={true}
          loop={true}
          hover={true}
        ></Player>
        <Text style={styles.textstyle}>Skills & Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabcontainer}
        onPress={() => navigation.navigate("ExperienceScreen")}
      >
        <AntDesign
          name="arrowright"
          size={windowWidth > 900 ? verticalScale(39) : verticalScale(23)}
          color={Colors.BLUE}
          style={{ alignSelf: "flex-end" }}
        />
        <Player
          style={{
            height: windowWidth > 900 ? verticalScale(200) : verticalScale(100),
            width: horizontalScale(100),
          }}
          src={require(`../../assets/animation/lottie_experience.json`)}
          autoPlay={true}
          loop={true}
          hover={true}
        ></Player>
        <Text style={styles.textstyle}>Experience</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabcontainer}
        onPress={() => navigation.navigate("SkillsScreen")}
      >
        <AntDesign
          name="arrowright"
          size={windowWidth > 900 ? verticalScale(39) : verticalScale(23)}
          color={Colors.BLUE}
          style={{ alignSelf: "flex-end" }}
        />
        <Player
          style={{
            height: windowWidth > 900 ? verticalScale(200) : verticalScale(100),
            width: horizontalScale(100),
          }}
          src={require(`../../assets/animation/lottie_skills.json`)}
          autoPlay={true}
          loop={true}
          hover={true}
        ></Player>
        <Text style={styles.textstyle}>About Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    backgroundColor: Colors.BLUE,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    flexWrap: "wrap",
  },
  tabcontainer: {
    height: windowWidth > 900 ? "75%" : "40%",
    width: windowWidth > 900 ? "30%" : "40%",
    backgroundColor: Colors.WHITE,
    borderRadius: horizontalScale(12),
    padding: windowWidth > 900 ? verticalScale(20) : verticalScale(2),
    shadowRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textstyle: {
    color: Colors.BLUE,
    fontWeight: "500",
    fontSize: windowWidth > 900 ? verticalScale(35) : verticalScale(20),
  },
});
