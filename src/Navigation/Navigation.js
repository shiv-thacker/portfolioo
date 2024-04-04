import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import Projectscreen from "../screens/Projectscreen";
import ExperienceScreen from "../screens/ExperienceScreen";
import SkillsScreen from "../screens/SkillsScreen";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={HomeScreen}
          name="HomeScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={SkillsScreen}
          name="SkillsScreen"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          component={ExperienceScreen}
          name="ExperienceScreen"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          component={Projectscreen}
          name="Projectscreen"
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
