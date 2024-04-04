import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import {
  moderateScale,
  horizontalScale,
  verticalScale,
} from "../../Utils/Dimensions";
import Colors from "../../Utils/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Education, Contact } from "../../assets/jsondata/Aboutme";

const Aboutme = ({ project }) => {
  return (
    <>
      <View style={styles.projectContainer}>
        <View style={styles.indiProject}>
          <Text style={styles.title}>Education</Text>
          <View style={styles.container}>
            <Text style={styles.position}>{Education[0].degree}</Text>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text style={styles.textstyle}>{Education[0].college}</Text>
              <Text style={styles.textstyle}>{Education[0].duration}</Text>
            </View>

            <View style={{ flexDirection: "row", gap: moderateScale(10) }}>
              <Image
                style={styles.image}
                source={require(`../../assets/Images/vvp.jpg`)}
              />

              <View
                style={{
                  gap: moderateScale(2),
                  marginHorizontal: horizontalScale(4),
                  flex: 1,
                }}
              >
                <Text style={styles.skillsstyle}>
                  Gujarat Technical University
                </Text>
                <Text style={styles.skillsstyle}>
                  CGPA :- {Education[0].cgpa} (5th rank in University)
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: "flex-end",
                flexDirection: "row",
                flex: 1,
                alignItems: "flex-end",
              }}
            >
              <TouchableOpacity
                onPress={() => Linking.openURL(`${Education[0].Certificate}`)}
              >
                <Text style={styles.linktext}>Degree Certificate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.projectContainer}>
        <View style={styles.indiProject}>
          <Text style={styles.title}>Socials and Contacts</Text>
          <View style={styles.container}>
            <View style={{ flexDirection: "row", gap: moderateScale(10) }}>
              <FontAwesome name="phone-square" size={24} color="black" />
              <View
                style={{
                  gap: moderateScale(2),
                  marginHorizontal: horizontalScale(4),
                  flex: 1,
                }}
              >
                <Text style={styles.skillsstyle}>{Contact[0].Mobile_no}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", gap: moderateScale(10) }}>
              <MaterialCommunityIcons name="gmail" size={24} color="black" />
              <View
                style={{
                  gap: moderateScale(2),
                  marginHorizontal: horizontalScale(4),
                  flex: 1,
                }}
              >
                <Text style={styles.skillsstyle}>{Contact[0].Mail_ID}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", gap: moderateScale(10) }}>
              <FontAwesome name="linkedin-square" size={24} color="black" />
              <View
                style={{
                  gap: moderateScale(2),
                  marginHorizontal: horizontalScale(4),
                  flex: 1,
                }}
              >
                <Text style={styles.skillsstyle}>{Contact[0].LinkedIn}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", gap: moderateScale(10) }}>
              <FontAwesome name="github-square" size={24} color="black" />
              <View
                style={{
                  gap: moderateScale(2),
                  marginHorizontal: horizontalScale(4),
                  flex: 1,
                }}
              >
                <Text style={styles.skillsstyle}>{Contact[0].Github}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Aboutme;

const styles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(5),
    shadowColor: Colors.GRAY,
    shadowRadius: 20,
    margin: 20,
    padding: 20,
    gap: moderateScale(4),
  },
  textstyle: {
    fontWeight: "500",
    fontSize: moderateScale(7),
  },
  image: {
    width: horizontalScale(30),
    height: horizontalScale(30),
  },

  linktext: {
    color: Colors.WHITE,
    fontSize: verticalScale(20),
    fontWeight: "500",
    letterSpacing: horizontalScale(0.2),
    backgroundColor: Colors.BLUE,
    padding: moderateScale(4),
    borderRadius: moderateScale(2),
  },
  jobdescription: {
    color: Colors.BLACK,
    fontSize: verticalScale(20),
    fontWeight: "700",
    letterSpacing: horizontalScale(0.2),
  },
  skillsstyle: {
    color: Colors.BLACK,
    fontSize: verticalScale(18),
    fontWeight: "500",
    letterSpacing: horizontalScale(0.2),
  },
  projectContainer: {
    paddingHorizontal: horizontalScale(5),
    marginVertical: verticalScale(30),
    gap: verticalScale(4),
  },

  indiProject: {
    gap: verticalScale(3),
  },
  position: {
    fontWeight: "500",
    fontSize: moderateScale(10),
  },
  title: {
    color: Colors.BLACK,
    fontSize: verticalScale(30),
    fontWeight: "600",
  },
});
