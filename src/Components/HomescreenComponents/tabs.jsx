import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useRef } from "react";
import Colors from "../../Utils/Colors";
import { verticalScale, horizontalScale } from "../../Utils/Dimensions";
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
          size={verticalScale(39)}
          color={Colors.BLUE}
          style={{ alignSelf: "flex-end" }}
        />
        <Player
          style={{
            height: verticalScale(200),
            width: horizontalScale(100),
          }}
          src={require(`../../assets/animation/lottie_mobile_project.json`)}
          autoPlay={true}
          loop={true}
          hover={true}
        ></Player>
        <Text style={styles.textstyle}>Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabcontainer}
        onPress={() => navigation.navigate("ExperienceScreen")}
      >
        <AntDesign
          name="arrowright"
          size={verticalScale(39)}
          color={Colors.BLUE}
          style={{ alignSelf: "flex-end" }}
        />
        <Player
          style={{
            height: verticalScale(200),
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
          size={verticalScale(39)}
          color={Colors.BLUE}
          style={{ alignSelf: "flex-end" }}
        />
        <Player
          style={{
            height: verticalScale(200),
            width: horizontalScale(100),
          }}
          src={require(`../../assets/animation/lottie_skills.json`)}
          autoPlay={true}
          loop={true}
          hover={true}
        ></Player>
        <Text style={styles.textstyle}>Skills & Education</Text>
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
  },
  tabcontainer: {
    height: "75%",
    width: "30%",
    backgroundColor: Colors.WHITE,
    borderRadius: horizontalScale(12),
    padding: verticalScale(20),
    shadowRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textstyle: {
    color: Colors.BLUE,
    fontWeight: "500",
    fontSize: verticalScale(35),
  },
});
