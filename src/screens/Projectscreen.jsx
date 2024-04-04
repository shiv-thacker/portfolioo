import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import Header from "../Common/Header";
import { horizontalScale, verticalScale } from "../Utils/Dimensions";
import Project from "../Components/ProjectScreenComponents/Project";
import { rnf, rnn, rnw, rn } from "../assets/jsondata/projectdata";

const Projectscreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header
          navigation={navigation}
          title={
            "Projects ( React Native & Firebase, React Native & Nodejs, React Native Website, Only React Native )"
          }
        />

        <Project />
      </ScrollView>
    </View>
  );
};

export default Projectscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
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
