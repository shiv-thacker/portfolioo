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
import { rnf, rnn, rnw, rn } from "../../assets/jsondata/projectdata";

const Project = ({ project }) => {
  return (
    <>
      <View style={styles.projectContainer}>
        <View style={styles.indiProject}>
          <Text style={styles.title}>React Native & Firebase Projects</Text>
          <ScrollView horizontal>
            <View style={styles.container}>
              <Text style={styles.textstyle}>{rnf[0].name}</Text>
              <View style={{ flexDirection: "row", gap: moderateScale(10) }}>
                <Image
                  style={styles.image}
                  source={require(`../../assets/Images/EVC.png`)}
                />

                <View
                  style={{
                    gap: moderateScale(2),
                    marginHorizontal: horizontalScale(4),
                  }}
                >
                  <Text style={styles.skillsstyle}>Made With</Text>
                  {rnf[0].skills.map((item, index) => (
                    <Text style={styles.skillsstyle}>- {item}</Text>
                  ))}
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
                  onPress={() => Linking.openURL(`${rnf[0].screenRecording}`)}
                >
                  <Text style={styles.linktext}>Screen Recording</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`${rnf[0].playstorelink}`)}
                >
                  <Text style={styles.linktext}>Playstore link</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.container}>
              <Text style={styles.textstyle}>{rnf[1].name}</Text>
              <View style={{ flexDirection: "row", gap: moderateScale(10) }}>
                <Image
                  style={styles.image}
                  source={require(`../../assets/Images/firebasechat.png`)}
                />

                <View
                  style={{
                    gap: moderateScale(2),
                    marginHorizontal: horizontalScale(4),
                  }}
                >
                  <Text style={styles.skillsstyle}>Made With</Text>
                  {rnf[1].skills.map((item, index) => (
                    <Text style={styles.skillsstyle}>- {item}</Text>
                  ))}
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
                  onPress={() => Linking.openURL(`${rnf[1].screenRecording}`)}
                >
                  <Text style={styles.linktext}>Screen Recording</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`${rnf[1].playstorelink}`)}
                >
                  <Text style={styles.linktext}>Playstore link</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.projectContainer}>
        <View style={styles.indiProject}>
          <Text style={styles.title}>React Native & Nodejs (Full Stack)</Text>
          <ScrollView horizontal>
            <View style={styles.container}>
              <Text style={styles.textstyle}>{rnn[0].name}</Text>
              <View style={{ flexDirection: "row", gap: moderateScale(10) }}>
                <Image
                  style={styles.image}
                  source={require(`../../assets/Images/expo.png`)}
                />

                <View
                  style={{
                    gap: moderateScale(2),
                    marginHorizontal: horizontalScale(4),
                  }}
                >
                  <Text style={styles.skillsstyle}>Made With</Text>
                  {rnn[0].skills.map((item, index) => (
                    <Text style={styles.skillsstyle}>- {item}</Text>
                  ))}
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
                  onPress={() => Linking.openURL(`${rnn[0].screenRecording}`)}
                >
                  <Text style={styles.linktext}>Screen Recording</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`${rnn[0].playstorelink}`)}
                >
                  <Text style={styles.linktext}>View Code</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.container}>
              <Text style={styles.textstyle}>{rnn[1].name}</Text>
              <View style={{ flexDirection: "row", gap: moderateScale(10) }}>
                <Image
                  style={styles.image}
                  source={require(`../../assets/Images/socialmedia.png`)}
                />

                <View
                  style={{
                    gap: moderateScale(2),
                    marginHorizontal: horizontalScale(4),
                  }}
                >
                  <Text style={styles.skillsstyle}>Made With</Text>
                  {rnn[1].skills.map((item, index) => (
                    <Text style={styles.skillsstyle}>- {item}</Text>
                  ))}
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
                  onPress={() => Linking.openURL(`${rnn[1].screenRecording}`)}
                >
                  <Text style={styles.linktext}>Screen Recording</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`${rnn[1].playstorelink}`)}
                >
                  <Text style={styles.linktext}>View Code</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.projectContainer}>
        <View style={styles.indiProject}>
          <Text style={styles.title}>React Native Website</Text>
          <ScrollView horizontal>
            <View style={styles.container}>
              <Text style={styles.textstyle}>{rnw[0].name}</Text>
              <View style={{ flexDirection: "row", gap: moderateScale(10) }}>
                <Image
                  style={styles.image}
                  source={require(`../../assets/Images/shivang_resume.jpeg`)}
                />

                <View
                  style={{
                    gap: moderateScale(2),
                    marginHorizontal: horizontalScale(4),
                  }}
                >
                  <Text style={styles.skillsstyle}>Made With</Text>
                  {rnw[0].skills.map((item, index) => (
                    <Text style={styles.skillsstyle}>- {item}</Text>
                  ))}
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
                  onPress={() => Linking.openURL(`${rnw[0].screenRecording}`)}
                >
                  <Text style={styles.linktext}>Screen Recording</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`${rnw[0].playstorelink}`)}
                >
                  <Text style={styles.linktext}>View Code</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.projectContainer}>
        <View style={styles.indiProject}>
          <Text style={styles.title}>React Native</Text>
          <ScrollView horizontal>
            <View style={styles.container}>
              <Text style={styles.textstyle}>{rn[0].name}</Text>
              <View style={{ flexDirection: "row", gap: moderateScale(10) }}>
                <Image
                  style={styles.image}
                  source={require(`../../assets/Images/pricedrop.png`)}
                />

                <View
                  style={{
                    gap: moderateScale(2),
                    marginHorizontal: horizontalScale(4),
                  }}
                >
                  <Text style={styles.skillsstyle}>Made With</Text>
                  {rn[0].skills.map((item, index) => (
                    <Text style={styles.skillsstyle}>- {item}</Text>
                  ))}
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
                  onPress={() => Linking.openURL(`${rn[0].screenRecording}`)}
                >
                  <Text style={styles.linktext}>Screen Recording</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`${rn[0].playstorelink}`)}
                >
                  <Text style={styles.linktext}>Playstore Link</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.container}>
              <Text style={styles.textstyle}>{rn[1].name}</Text>
              <View style={{ flexDirection: "row", gap: moderateScale(10) }}>
                <Image
                  style={styles.image}
                  source={require(`../../assets/Images/mcs.png`)}
                />

                <View
                  style={{
                    gap: moderateScale(2),
                    marginHorizontal: horizontalScale(4),
                  }}
                >
                  <Text style={styles.skillsstyle}>Made With</Text>
                  {rn[1].skills.map((item, index) => (
                    <Text style={styles.skillsstyle}>- {item}</Text>
                  ))}
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
                  onPress={() => Linking.openURL(`${rn[1].screenRecording}`)}
                >
                  <Text style={styles.linktext}>Screen Recording</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`${rn[1].playstorelink}`)}
                >
                  <Text style={styles.linktext}>Playstore Link</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.container}>
              <Text style={styles.textstyle}>{rn[2].name}</Text>
              <View style={{ flexDirection: "row", gap: moderateScale(10) }}>
                <Image
                  style={styles.image}
                  source={require(`../../assets/Images/socialmedia.png`)}
                />

                <View
                  style={{
                    gap: moderateScale(2),
                    marginHorizontal: horizontalScale(4),
                  }}
                >
                  <Text style={styles.skillsstyle}>Made With</Text>
                  {rn[2].skills.map((item, index) => (
                    <Text style={styles.skillsstyle}>- {item}</Text>
                  ))}
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
                  onPress={() => Linking.openURL(`${rn[2].screenRecording}`)}
                >
                  <Text style={styles.linktext}>Screen Recording</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`${rn[2].playstorelink}`)}
                >
                  <Text style={styles.linktext}>View Code</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Project;

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
    fontSize: moderateScale(10),
  },
  image: {
    width: horizontalScale(60),
    height: horizontalScale(60),
  },

  linktext: {
    color: Colors.BLUE,
    fontSize: verticalScale(15),
    fontWeight: "500",
    letterSpacing: horizontalScale(0.2),
  },
  skillsstyle: {
    color: Colors.BLACK,
    fontSize: verticalScale(15),
    fontWeight: "500",
    letterSpacing: horizontalScale(0.2),
  },
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
});
