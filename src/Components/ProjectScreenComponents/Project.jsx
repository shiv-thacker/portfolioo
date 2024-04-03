import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ProjectItem from "./ProjectItem";
import { moderateScale } from "../../Utils/Dimensions";

const Project = ({ project }) => {
  console.log(project);
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={project}
        renderItem={({ item, index }) => {
          return <ProjectItem item={item} />;
        }}
      />
    </View>
  );
};

export default Project;

const styles = StyleSheet.create({
  container: {},
});
