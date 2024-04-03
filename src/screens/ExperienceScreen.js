import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import Header from "../Common/Header";

const ExperienceScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} title={"Experience"} />
    </View>
  );
};

export default ExperienceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});
