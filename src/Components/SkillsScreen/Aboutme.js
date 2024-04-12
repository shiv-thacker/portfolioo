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
  windowWidth,
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
                  Gujarat Technological University
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
              <TouchableOpacity
                style={{
                  gap: moderateScale(2),
                  marginHorizontal: horizontalScale(4),
                  flex: 1,
                }}
                onPress={() =>
                  Linking.openURL(
                    "https://www.linkedin.com/in/shivang-thacker-4b1a481b9/"
                  )
                }
              >
                <Text style={[styles.skillsstyle, { color: Colors.BLUE }]}>
                  {Contact[0].LinkedIn}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", gap: moderateScale(10) }}>
              <FontAwesome name="github-square" size={24} color="black" />
              <TouchableOpacity
                style={{
                  gap: moderateScale(2),
                  marginHorizontal: horizontalScale(4),
                  flex: 1,
                }}
                onPress={() =>
                  Linking.openURL("https://github.com/shiv-thacker")
                }
              >
                <Text style={[styles.skillsstyle, { color: Colors.BLUE }]}>
                  {Contact[0].Github}
                </Text>
              </TouchableOpacity>
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
    fontSize: windowWidth > 900 ? moderateScale(7) : moderateScale(10),
  },
  image: {
    width: windowWidth > 900 ? horizontalScale(30) : horizontalScale(60),
    height: windowWidth > 900 ? horizontalScale(30) : horizontalScale(60),
  },

  linktext: {
    color: Colors.WHITE,
    fontSize: windowWidth > 900 ? verticalScale(20) : moderateScale(13),
    fontWeight: "500",
    letterSpacing: horizontalScale(0.2),
    backgroundColor: Colors.BLUE,
    padding: moderateScale(4),
    borderRadius: moderateScale(2),
  },
  skillsstyle: {
    color: Colors.BLACK,
    fontSize: windowWidth > 900 ? verticalScale(18) : moderateScale(12),
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
    fontSize: windowWidth > 900 ? moderateScale(10) : moderateScale(15),
  },
  title: {
    color: Colors.BLACK,
    fontSize: windowWidth > 900 ? verticalScale(30) : moderateScale(20),
    fontWeight: "600",
  },
});
