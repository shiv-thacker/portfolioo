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
        <Header navigation={navigation} title={"Projects"} />
        <View style={styles.projectContainer}>
          <View style={styles.indiProject}>
            <Text style={styles.title}>React Native & Firebase Projects</Text>
            <Project project={rnf} />
          </View>
        </View>
        <View style={styles.projectContainer}>
          <View style={styles.indiProject}>
            <Text style={styles.title}>
              React Native & Node js (Full Stack)
            </Text>
            <Project project={rnn} />
          </View>
        </View>
        <View style={styles.projectContainer}>
          <View style={styles.indiProject}>
            <Text style={styles.title}>React Native Website</Text>
            <Project project={rnw} />
          </View>
        </View>
        <View style={styles.projectContainer}>
          <View style={styles.indiProject}>
            <Text style={styles.title}>React Native</Text>
            <Project project={rn} />
          </View>
        </View>
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
