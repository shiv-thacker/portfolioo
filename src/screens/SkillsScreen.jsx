import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import Header from "../Common/Header";

const SkillsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} title={"Skills & Education"} />
    </View>
  );
};

export default SkillsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});
