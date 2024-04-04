import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import Header from "../Common/Header";
import Experiences from "../Components/ExperienceCOmponents/Experiences";

const ExperienceScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header navigation={navigation} title={"Experience "} />
        <Experiences />
      </ScrollView>
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
