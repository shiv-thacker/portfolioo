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

import {
  jamrio,
  hitcoach,
  self_employed,
} from "../../assets/jsondata/Experiencedata";

const Experiences = ({ project }) => {
  return (
    <>
      <View style={styles.projectContainer}>
        <View style={styles.container}>
          <Text style={styles.position}>{jamrio[0].position}</Text>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text style={styles.textstyle}>{jamrio[0].company}</Text>
            <Text style={styles.textstyle}>{jamrio[0].duration}</Text>
          </View>

          <View style={styles.detailscontainer}>
            <Image
              style={styles.image}
              source={require(`../../assets/Images/Jamrio.png`)}
            />

            <View
              style={{
                gap: moderateScale(2),
                marginHorizontal: horizontalScale(4),
                flex: 1,
              }}
            >
              <Text style={styles.jobdescription}>Decription</Text>

              <Text style={styles.skillsstyle}>{jamrio[0].description}</Text>
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
              onPress={() => Linking.openURL(`${jamrio[0].LinkedIn}`)}
            >
              <Text style={styles.linktext}>LinkedIn</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.position}>{hitcoach[0].position}</Text>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text style={styles.textstyle}>{hitcoach[0].company}</Text>
            <Text style={styles.textstyle}>{hitcoach[0].duration}</Text>
          </View>

          <View style={styles.detailscontainer}>
            <Image
              style={styles.image}
              source={require(`../../assets/Images/hitcoach.png`)}
            />

            <View
              style={{
                gap: moderateScale(2),
                marginHorizontal: horizontalScale(4),
                flex: 1,
              }}
            >
              <Text style={styles.jobdescription}>Decription</Text>

              <Text style={styles.skillsstyle}>{hitcoach[0].description}</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              onPress={() => Linking.openURL(`${hitcoach[0].Internship}`)}
            >
              <Text style={styles.linktext}>Internship Certificate</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL(`${hitcoach[0].LinkedIn}`)}
            >
              <Text style={styles.linktext}>LinkedIn</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.position}>{self_employed[0].position}</Text>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text style={styles.textstyle}>{self_employed[0].company}</Text>
            <Text style={styles.textstyle}>{self_employed[0].duration}</Text>
          </View>

          <View style={styles.detailscontainer}>
            <Image
              style={styles.image}
              source={require(`../../assets/Images/user.jpeg`)}
            />

            <View
              style={{
                gap: moderateScale(2),
                marginHorizontal: horizontalScale(4),
                flex: 1,
              }}
            >
              <Text style={styles.jobdescription}>Decription</Text>

              <Text style={styles.skillsstyle}>
                {self_employed[0].description}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Experiences;

const styles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(5),
    shadowColor: Colors.GRAY,
    shadowRadius: 20,
    margin: 20,
    padding: 20,
    gap: moderateScale(4),
  },

  detailscontainer: {
    flexDirection: windowWidth > 900 ? "row" : null,
    gap: moderateScale(10),
    alignItems: "center",
  },
  textstyle: {
    fontWeight: "500",
    fontSize: windowWidth > 900 ? moderateScale(7) : moderateScale(10),
  },
  image: {
    width: horizontalScale(60),
    height: horizontalScale(60),
  },

  linktext: {
    color: Colors.WHITE,
    fontSize: windowWidth > 900 ? verticalScale(20) : moderateScale(13),
    fontWeight: "500",
    letterSpacing: horizontalScale(0.2),
    backgroundColor: Colors.BLUE,
    padding: moderateScale(2),
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
});
