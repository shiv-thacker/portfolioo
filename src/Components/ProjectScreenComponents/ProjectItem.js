import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../Utils/Dimensions";
import Colors from "../../Utils/Colors";

const ProjectItem = ({ item }) => {
  const imagename = "mcs.png";
  const imagename2 = `${item?.imagename}`;
  console.log("imagename", imagename);
  console.log("imagename2", `${imagename2}`);
  const jsonString = JSON.stringify(imagename2);
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>{item.name}</Text>
      <View style={{ flexDirection: "row", gap: moderateScale(10) }}>
        {imagename2 && (
          <Image
            style={styles.image}
            source={require(`../../assets/Images/${item?.imagename}`)}
          />
        )}
        <View
          style={{
            gap: moderateScale(2),
            marginHorizontal: horizontalScale(4),
          }}
        >
          <Text style={styles.skillsstyle}>Made With</Text>
          {item.skills.map((item, index) => (
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
          onPress={() => Linking.openURL(`${item.screenRecording}`)}
        >
          <Text style={styles.linktext}>Screen Recording</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL(`${item.playstorelink}`)}
        >
          <Text style={styles.linktext}>Playstore link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProjectItem;

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
});
