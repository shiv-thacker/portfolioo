import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import { horizontalScale, verticalScale } from "../Utils/Dimensions";
import Intro from "../Components/HomescreenComponents/Intro";
import { ScrollView } from "react-native-web";
import Tabs from "../Components/HomescreenComponents/tabs";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Intro />
        <Tabs />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});
