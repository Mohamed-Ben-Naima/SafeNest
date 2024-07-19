// src/screens/HomeScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MenuButton from "../components/MenuButton";
import { useAuth } from "../hooks/useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation }) {
  const {user} = useAuth();
  const {username, email, role} = user;
  console.log(user);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen of {username} </Text>
      <Text>a33 !</Text>
      <MenuButton navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
  },
  text: {
    color: "white",
    fontSize: 24,
    marginBottom: 20,
  },
});
