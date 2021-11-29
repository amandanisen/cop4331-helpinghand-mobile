import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import Home from "./screens/homePage";
import Login from "./screens/login";
import CoordinatorSignup from "./screens/coordinatorSignup";
import VolunteerSignup from "./screens/volunteerSignup";
import CreateTask from "./screens/createTask";
import CoordinatorTasks from "./screens/coordinatorTasks";
import VolunteerTasks from "./screens/volunteerTasks";
import Refresh from "./screens/refresh";

const AppStack = createStackNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: true }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="CreateTask" component={CreateTask} />
        <AppStack.Screen name="CoordinatorTasks" component={CoordinatorTasks} />
        <AppStack.Screen name="VolunteerTasks" component={VolunteerTasks} />
        <AppStack.Screen name="Refresh" component={Refresh} />
        <AppStack.Screen
          name="CoordinatorSignup"
          component={CoordinatorSignup}
        />
        <AppStack.Screen name="VolunteerSignup" component={VolunteerSignup} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
