// src/screens/HomeScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import useHello from "../hooks/useHello";
import { useAuth } from "../hooks/useAuth";
import MenuButton from "../components/MenuButton";

export default function HomeScreen({ navigation }) {
  const { sendHelloToServer } = useHello();
  const [responseMessage, setResponseMessage] = useState("");

  const handleSendHello = async () => {
    const response = await sendHelloToServer();
    if (response) {
      setResponseMessage(response);
      Alert.alert("Response from server:", response);
    } else {
      Alert.alert("Error", "Failed to send hello world message.");
    }
  };

  const { user } = useAuth();
  console.log(user)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Screen</Text>
      <MenuButton navigation={navigation} />

      <TouchableOpacity onPress={handleSendHello} style={styles.menuButton}>
        <Text>Send Hello</Text>
      </TouchableOpacity>

      {responseMessage ? (
        <Text style={styles.responseText}>{responseMessage}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 5,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  text: {
    color: "white",
    fontSize: 24,
    marginBottom: 20,
  },
  responseText: {
    color: "black",
    fontSize: 18,
    marginTop: 20,
  },
});
