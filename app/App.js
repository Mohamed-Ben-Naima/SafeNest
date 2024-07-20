import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContextProvider, useAuth } from "./src/hooks/useAuth";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import GetStartedScreen from "./src/screens/GetStartedScreen";
import SendHelloScreen from "./src/screens/SendHelloScreen";
import InsideScreen from "./src/screens/InsideScreen";
import OutsideScreen from "./src/screens/OutsideScreen";

const Stack = createStackNavigator();

function AppNavigator() {
  const { user } = useAuth();
  console.log(user)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Home" : "GetStarted"}>
        <Stack.Screen
          name="GetStarted"
          options={{ headerShown: false }}
          component={GetStartedScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Register"
          options={{ headerShown: false }}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Hello"
          options={{ headerShown: false }}
          component={SendHelloScreen}
        />
        <Stack.Screen
          name="Inside"
          options={{ headerShown: false }}
          component={InsideScreen}
        />
        <Stack.Screen
          name="Outside"
          options={{ headerShown: false }}
          component={OutsideScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthContextProvider>
      <AppNavigator />
    </AuthContextProvider>
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
