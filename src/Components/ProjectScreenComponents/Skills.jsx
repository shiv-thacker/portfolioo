import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  windowWidth,
} from "../../Utils/Dimensions";
import Colors from "../../Utils/Colors";

const Skills = () => {
  return (
    <View style={styles.projectContainer}>
      <View style={styles.indiProject}>
        <Text style={styles.title}>Skills</Text>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.skillcontainer}>
            <Image
              source={require("../../assets/Images/socialmedia.png")}
              style={styles.skillimage}
            />
            <Text style={styles.skilltext}>React Native</Text>
          </View>
          <View style={styles.skillcontainer}>
            <Image
              source={require("../../assets/Images/expo.png")}
              style={styles.skillimage}
            />
            <Text style={styles.skilltext}>Expo</Text>
          </View>
          <View style={styles.skillcontainer}>
            <Image
              source={require("../../assets/Images/firebase.png")}
              style={styles.skillimage}
            />
            <Text style={styles.skilltext}>Firebase</Text>
          </View>
          <View style={styles.skillcontainer}>
            <Image
              source={require("../../assets/Images/nodejs.png")}
              style={styles.skillimage}
            />
            <Text style={styles.skilltext}>NodeJS</Text>
          </View>
          <View style={styles.skillcontainer}>
            <Image
              source={require("../../assets/Images/mongoDB.png")}
              style={styles.skillimage}
            />
            <Text style={styles.skilltext}>MongoDB</Text>
          </View>
          <View style={styles.skillcontainer}>
            <Image
              source={require("../../assets/Images/expressjs.png")}
              style={styles.skillimage}
            />
            <Text style={styles.skilltext}>ExpressJS</Text>
          </View>
          <View style={styles.skillcontainer}>
            <Image
              source={require("../../assets/Images/github.png")}
              style={styles.skillimage}
            />
            <Text style={styles.skilltext}>GitHub</Text>
          </View>
          <View style={styles.skillcontainer}>
            <Image
              source={require("../../assets/Images/redux.png")}
              style={styles.skillimage}
            />
            <Text style={styles.skilltext}>Redux</Text>
          </View>
          <View style={styles.skillcontainer}>
            <Image
              source={require("../../assets/Images/zustand.png")}
              style={styles.skillimage}
            />
            <Text style={styles.skilltext}>Zustand</Text>
          </View>
          <View style={styles.skillcontainer}>
            <Image
              source={require("../../assets/Images/axios.jpg")}
              style={styles.skillimage}
            />
            <Text style={styles.skilltext}>Axios</Text>
          </View>
          <View style={styles.skillcontainer}>
            <Image
              source={require("../../assets/Images/nativewind.png")}
              style={styles.skillimage}
            />
            <Text style={styles.skilltext}>Nativewind</Text>
          </View>
          <View style={styles.skillcontainer}>
            <Image
              source={require("../../assets/Images/expo_router.png")}
              style={styles.skillimage}
            />
            <Text style={styles.skilltext}>Expo Router</Text>
          </View>
          <View style={styles.skillcontainer}>
            <Image
              source={require("../../assets/Images/react_navigation.png")}
              style={styles.skillimage}
            />
            <Text style={styles.skilltext}>React Navigation</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Skills;

const styles = StyleSheet.create({
  projectContainer: {
    paddingHorizontal: horizontalScale(5),
    marginVertical: verticalScale(30),
    gap: verticalScale(4),
  },

  title: {
    color: Colors.BLACK,
    fontSize: verticalScale(30),
    fontWeight: "600",
  },
  indiProject: {
    gap: verticalScale(3),
  },

  skillcontainer: {
    margin: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
  },

  skillimage: {
    height: windowWidth > 900 ? horizontalScale(20) : horizontalScale(50),
    width: windowWidth > 900 ? horizontalScale(20) : horizontalScale(50),
    borderWidth:
      windowWidth > 900 ? horizontalScale(0.8) : horizontalScale(1.2),
    borderRadius: windowWidth > 900 ? horizontalScale(2) : horizontalScale(5),
    borderColor: Colors.GRAY,
    resizeMode: "contain",
  },
  skilltext: {
    color: Colors.BLACK,
    fontWeight: "500",
    fontSize: verticalScale(13),
    textAlign: "center",
    width: windowWidth > 900 ? horizontalScale(20) : horizontalScale(55),
    height: windowWidth > 900 ? horizontalScale(10) : horizontalScale(10),
  },
});
