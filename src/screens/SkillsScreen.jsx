import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import Header from "../Common/Header";
import Aboutme from "../Components/SkillsScreen/Aboutme";

const SkillsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header navigation={navigation} title={"About Me "} />
        <Aboutme />
      </ScrollView>
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
