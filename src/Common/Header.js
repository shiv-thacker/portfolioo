import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../Utils/Dimensions";
import Colors from "../Utils/Colors";

const Header = ({ navigation, title }) => {
  return (
    <View style={styles.container}>
      <AntDesign
        onPress={() => navigation.goBack()}
        name="arrowleft"
        size={verticalScale(39)}
        color={Colors.WHITE}
      />
      <Text style={styles.title} onPress={() => navigation.goBack()}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLUE,
    height: verticalScale(100),
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(10),
    alignItems: "center",
  },
  title: {
    fontSize: verticalScale(30),
    marginLeft: horizontalScale(5),
    color: Colors.WHITE,
    fontWeight: "500",
  },
});
