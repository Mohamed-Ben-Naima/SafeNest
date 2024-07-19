import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContextProvider } from "./src/hooks/useAuth";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import GetStartedScreen from "./src/screens/GetStartedScreen";
import SendHelloScreen from "./src/screens/SendHelloScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Hello">
          <Stack.Screen
            name="GetStarted"
            options={{ headerShown: false }}
            component={GetStartedScreen}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Register"
            options={{ headerShown: false }}
            component={RegisterScreen}
          />
          <Stack.Screen
            name="Login"
            //options={{ headerShown: false }}
            component={LoginScreen}
          />
          <Stack.Screen
            name="Hello"
            //options={{ headerShown: false }}
            component={SendHelloScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
